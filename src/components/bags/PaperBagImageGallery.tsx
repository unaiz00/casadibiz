"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";

export interface GalleryImage {
  src: string;
  alt?: string;
}

interface PaperBagImageGalleryProps {
  images: Array<GalleryImage | string>;
  productTitle: string;
}

export default function PaperBagImageGallery({
  images,
  productTitle,
}: PaperBagImageGalleryProps) {
  // Normalize images to GalleryImage array
  const formattedImages: GalleryImage[] = images.map((img, i) =>
    typeof img === "string"
      ? { src: img, alt: `${productTitle} showcase ${i + 1}` }
      : { src: img.src, alt: img.alt || `${productTitle} showcase ${i + 1}` }
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // In-gallery drag / swipe state
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const dragStartXRef = useRef(0);
  const dragStartYRef = useRef(0);
  const isHorizontalSwipeRef = useRef<boolean | null>(null);
  const hasMovedRef = useRef(false);

  // Lightbox zoom & pan state
  const [lightboxScale, setLightboxScale] = useState(1);
  const [lightboxPan, setLightboxPan] = useState({ x: 0, y: 0 });
  const [lightboxDragOffset, setLightboxDragOffset] = useState(0);
  const [isLightboxDragging, setIsLightboxDragging] = useState(false);
  const [isLightboxPanning, setIsLightboxPanning] = useState(false);
  const lightboxDragStartXRef = useRef(0);
  const lightboxDragStartYRef = useRef(0);
  const lightboxPanStartRef = useRef({ x: 0, y: 0 });
  const initialPinchDistRef = useRef<number | null>(null);
  const initialScaleRef = useRef<number>(1);
  const lightboxImgRef = useRef<HTMLImageElement>(null);

  const total = formattedImages.length;

  // Reset lightbox zoom
  const resetLightboxZoom = useCallback(() => {
    setLightboxScale(1);
    setLightboxPan({ x: 0, y: 0 });
    setLightboxDragOffset(0);
    setIsLightboxDragging(false);
    setIsLightboxPanning(false);
  }, []);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    resetLightboxZoom();
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    resetLightboxZoom();
  }, [resetLightboxZoom]);

  // ESC Key listener & body scroll locking
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (lightboxScale === 1) {
        if (e.key === "ArrowRight") {
          setLightboxIndex((prev) => {
            const next = (prev + 1) % total;
            setActiveIndex(next);
            return next;
          });
        }
        if (e.key === "ArrowLeft") {
          setLightboxIndex((prev) => {
            const next = (prev - 1 + total) % total;
            setActiveIndex(next);
            return next;
          });
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [lightboxOpen, lightboxScale, total, closeLightbox]);

  // ==========================================
  // IN-PAGE GALLERY SWIPE & DRAG HANDLERS
  // ==========================================
  const handleTouchStart = (e: React.TouchEvent) => {
    if ((e.target as HTMLElement).closest("button")) return;
    if (e.touches.length !== 1) return;
    dragStartXRef.current = e.touches[0].clientX;
    dragStartYRef.current = e.touches[0].clientY;
    isHorizontalSwipeRef.current = null;
    hasMovedRef.current = false;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = currentX - dragStartXRef.current;
    const diffY = currentY - dragStartYRef.current;

    if (Math.abs(diffX) > 6 || Math.abs(diffY) > 6) {
      hasMovedRef.current = true;
    }

    if (total <= 1) return;

    if (isHorizontalSwipeRef.current === null) {
      if (Math.abs(diffX) > 6 || Math.abs(diffY) > 6) {
        isHorizontalSwipeRef.current = Math.abs(diffX) > Math.abs(diffY);
      }
    }

    if (isHorizontalSwipeRef.current) {
      // Prevent horizontal page scroll bounce
      if (e.cancelable) e.preventDefault();
      // Apply edge damping
      let dampenedDiff = diffX;
      if (
        (activeIndex === 0 && diffX > 0) ||
        (activeIndex === total - 1 && diffX < 0)
      ) {
        dampenedDiff = diffX * 0.3;
      }
      setDragOffset(dampenedDiff);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if ((e.target as HTMLElement).closest("button")) {
      setDragOffset(0);
      setIsDragging(false);
      isHorizontalSwipeRef.current = null;
      return;
    }

    const width = galleryRef.current?.offsetWidth || 300;
    const threshold = Math.min(width * 0.18, 55);

    if (total > 1 && dragOffset < -threshold && activeIndex < total - 1) {
      setActiveIndex((prev) => prev + 1);
    } else if (total > 1 && dragOffset > threshold && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    } else if (!hasMovedRef.current && Math.abs(dragOffset) < 5) {
      // Clean tap -> open lightbox
      openLightbox(activeIndex);
    }

    setDragOffset(0);
    setIsDragging(false);
    isHorizontalSwipeRef.current = null;
  };

  // Desktop Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("button")) return;
    dragStartXRef.current = e.clientX;
    dragStartYRef.current = e.clientY;
    hasMovedRef.current = false;
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diffX = e.clientX - dragStartXRef.current;
    const diffY = e.clientY - dragStartYRef.current;

    if (Math.abs(diffX) > 5 || Math.abs(diffY) > 5) {
      hasMovedRef.current = true;
    }

    if (total <= 1) return;

    let dampenedDiff = diffX;
    if (
      (activeIndex === 0 && diffX > 0) ||
      (activeIndex === total - 1 && diffX < 0)
    ) {
      dampenedDiff = diffX * 0.3;
    }
    setDragOffset(dampenedDiff);
  };

  const handleMouseUp = (e?: React.MouseEvent) => {
    if (!isDragging) return;
    if (e && (e.target as HTMLElement).closest("button")) {
      setDragOffset(0);
      setIsDragging(false);
      return;
    }

    const width = galleryRef.current?.offsetWidth || 500;
    const threshold = Math.min(width * 0.18, 60);

    if (total > 1 && dragOffset < -threshold && activeIndex < total - 1) {
      setActiveIndex((prev) => prev + 1);
    } else if (total > 1 && dragOffset > threshold && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    } else if (!hasMovedRef.current && Math.abs(dragOffset) < 5) {
      // It was a clean click -> open lightbox
      openLightbox(activeIndex);
    }

    setDragOffset(0);
    setIsDragging(false);
  };

  // ==========================================
  // LIGHTBOX INTERACTION HANDLERS
  // ==========================================
  const toggleLightboxDoubleZoom = (clientX?: number, clientY?: number) => {
    if (lightboxScale > 1.2) {
      resetLightboxZoom();
    } else {
      setLightboxScale(2.5);
      if (clientX && clientY && typeof window !== "undefined") {
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        setLightboxPan({
          x: (cx - clientX) * 1.2,
          y: (cy - clientY) * 1.2,
        });
      }
    }
  };

  const handleLightboxWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * -0.002;
    setLightboxScale((prev) => {
      const next = Math.min(Math.max(prev + delta, 1), 4);
      if (next === 1) setLightboxPan({ x: 0, y: 0 });
      return next;
    });
  };

  // Lightbox Mouse handlers
  const handleLightboxMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("button")) return;
    if (lightboxScale > 1) {
      setIsLightboxPanning(true);
      lightboxPanStartRef.current = {
        x: e.clientX - lightboxPan.x,
        y: e.clientY - lightboxPan.y,
      };
    } else if (total > 1) {
      setIsLightboxDragging(true);
      lightboxDragStartXRef.current = e.clientX;
    }
  };

  const handleLightboxMouseMove = (e: React.MouseEvent) => {
    if (isLightboxPanning && lightboxScale > 1) {
      setLightboxPan({
        x: e.clientX - lightboxPanStartRef.current.x,
        y: e.clientY - lightboxPanStartRef.current.y,
      });
    } else if (isLightboxDragging && lightboxScale === 1 && total > 1) {
      const diffX = e.clientX - lightboxDragStartXRef.current;
      setLightboxDragOffset(diffX);
    }
  };

  const handleLightboxMouseUp = () => {
    if (isLightboxPanning) {
      setIsLightboxPanning(false);
    }
    if (isLightboxDragging) {
      if (lightboxDragOffset < -50) {
        setLightboxIndex((prev) => {
          const next = (prev + 1) % total;
          setActiveIndex(next);
          return next;
        });
      } else if (lightboxDragOffset > 50) {
        setLightboxIndex((prev) => {
          const next = (prev - 1 + total) % total;
          setActiveIndex(next);
          return next;
        });
      }
      setLightboxDragOffset(0);
      setIsLightboxDragging(false);
    }
  };

  // Lightbox Touch handlers (Swipe, Pinch & Pan)
  const handleLightboxTouchStart = (e: React.TouchEvent) => {
    if ((e.target as HTMLElement).closest("button")) return;
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      initialPinchDistRef.current = dist;
      initialScaleRef.current = lightboxScale;
    } else if (e.touches.length === 1) {
      if (lightboxScale > 1) {
        setIsLightboxPanning(true);
        lightboxPanStartRef.current = {
          x: e.touches[0].clientX - lightboxPan.x,
          y: e.touches[0].clientY - lightboxPan.y,
        };
      } else if (total > 1) {
        setIsLightboxDragging(true);
        lightboxDragStartXRef.current = e.touches[0].clientX;
        lightboxDragStartYRef.current = e.touches[0].clientY;
      }
    }
  };

  const handleLightboxTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && initialPinchDistRef.current !== null) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const ratio = dist / initialPinchDistRef.current;
      const nextScale = Math.min(
        Math.max(initialScaleRef.current * ratio, 1),
        4
      );
      setLightboxScale(nextScale);
      if (nextScale === 1) setLightboxPan({ x: 0, y: 0 });
    } else if (e.touches.length === 1) {
      if (isLightboxPanning && lightboxScale > 1) {
        setLightboxPan({
          x: e.touches[0].clientX - lightboxPanStartRef.current.x,
          y: e.touches[0].clientY - lightboxPanStartRef.current.y,
        });
      } else if (isLightboxDragging && lightboxScale === 1 && total > 1) {
        const diffX = e.touches[0].clientX - lightboxDragStartXRef.current;
        setLightboxDragOffset(diffX);
      }
    }
  };

  const handleLightboxTouchEnd = () => {
    if (initialPinchDistRef.current !== null) {
      initialPinchDistRef.current = null;
    }
    if (isLightboxPanning) {
      setIsLightboxPanning(false);
    }
    if (isLightboxDragging) {
      if (lightboxDragOffset < -45) {
        setLightboxIndex((prev) => {
          const next = (prev + 1) % total;
          setActiveIndex(next);
          return next;
        });
      } else if (lightboxDragOffset > 45) {
        setLightboxIndex((prev) => {
          const next = (prev - 1 + total) % total;
          setActiveIndex(next);
          return next;
        });
      }
      setLightboxDragOffset(0);
      setIsLightboxDragging(false);
    }
  };

  return (
    <>
      {/* ======================================================== */}
      {/* IN-PAGE GALLERY: NATURAL TOUCH/DRAG SWIPEABLE CONTAINER  */}
      {/* ======================================================== */}
      <div className="w-full flex flex-col gap-3 sm:gap-3.5">
        <div
          ref={galleryRef}
          className={`group relative aspect-[16/11] sm:aspect-[4/3] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-[#C7A86A]/25 shadow-xs select-none touch-pan-y ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => {
            if (isDragging) {
              setDragOffset(0);
              setIsDragging(false);
            }
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Swiping Image Track */}
          <div
            className="flex h-full w-full"
            style={{
              transform: `translateX(calc(-${activeIndex * 100}% + ${dragOffset}px))`,
              transition: isDragging
                ? "none"
                : "transform 380ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {formattedImages.map((img, idx) => (
              <div
                key={idx}
                className="relative h-full w-full shrink-0 flex items-center justify-center bg-white"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  draggable={false}
                  loading={idx === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>

          {/* Subtle Hover Gradient */}
          <div className="absolute inset-0 bg-[#0F2744]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Carousel Navigation Arrows */}
          {total > 1 && (
            <>
              <button
                type="button"
                onMouseDown={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                onTouchEnd={(e) => e.stopPropagation()}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((prev) => (prev - 1 + total) % total);
                }}
                aria-label="Previous product image"
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white/90 text-[#0F2744] border border-[#C7A86A]/30 flex items-center justify-center shadow-md opacity-85 hover:opacity-100 hover:bg-[#C7A86A] hover:text-[#0F2744] hover:scale-105 transition-all duration-300 cursor-pointer z-10 focus:outline-hidden focus:ring-2 focus:ring-[#C7A86A]"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                type="button"
                onMouseDown={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                onTouchEnd={(e) => e.stopPropagation()}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((prev) => (prev + 1) % total);
                }}
                aria-label="Next product image"
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white/90 text-[#0F2744] border border-[#C7A86A]/30 flex items-center justify-center shadow-md opacity-85 hover:opacity-100 hover:bg-[#C7A86A] hover:text-[#0F2744] hover:scale-105 transition-all duration-300 cursor-pointer z-10 focus:outline-hidden focus:ring-2 focus:ring-[#C7A86A]"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </>
          )}

          {/* Unobtrusive Corner Maximize Button */}
          <button
            type="button"
            onMouseDown={(e) => e.stopPropagation()}
            onMouseUp={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            onTouchEnd={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              openLightbox(activeIndex);
            }}
            aria-label="Enlarge image"
            className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-[#0F2744]/95 text-[#F6F0E8] border border-[#C7A86A]/30 flex items-center justify-center shadow-md opacity-90 sm:opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#C7A86A] z-10"
          >
            <Maximize2 className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-[#C7A86A]" />
          </button>
        </div>

        {/* 3 Selectable Thumbnails in a Horizontal Row Directly Below Main Image (Desktop & Mobile) */}
        {total > 1 && (
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 w-full">
            {formattedImages.map((img, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  onMouseDown={(e) => e.stopPropagation()}
                  onMouseUp={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                  onTouchEnd={(e) => e.stopPropagation()}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(idx);
                  }}
                  aria-label={`View ${img.alt || `${productTitle} image ${idx + 1}`}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`group relative aspect-[4/3] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-white border transition-all duration-300 cursor-pointer text-left focus:outline-hidden focus:ring-2 focus:ring-[#C7A86A] ${
                    isActive
                      ? "border-[#C7A86A] ring-2 ring-[#C7A86A]/40 shadow-xs scale-[0.99]"
                      : "border-[#C7A86A]/20 hover:border-[#C7A86A]/60 opacity-80 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt || `${productTitle} thumbnail ${idx + 1}`}
                    draggable={false}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
                      isActive
                        ? "bg-[#C7A86A]/5"
                        : "bg-[#0F2744]/0 group-hover:bg-[#0F2744]/5"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* ======================================================== */}
      {/* ENLARGED LIGHTBOX: LUXURY OFF-WHITE WITH SWIPE & ZOOM    */}
      {/* ======================================================== */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged viewer for ${productTitle}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FAF8F5]/98 backdrop-blur-sm transition-opacity duration-300 p-4 sm:p-8 animate-fade-up select-none"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeLightbox();
            }
          }}
          onWheel={handleLightboxWheel}
        >
          {/* Circular Close Button (Top-Right) */}
          <button
            type="button"
            onMouseDown={(e) => e.stopPropagation()}
            onMouseUp={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            onTouchEnd={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close image viewer"
            className="absolute top-5 right-5 sm:top-7 sm:right-7 z-50 h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/80 sm:bg-transparent text-[#0F2744] flex items-center justify-center border border-[#0F2744]/15 hover:bg-[#C7A86A] hover:text-[#0F2744] hover:border-[#C7A86A] transition-all duration-300 cursor-pointer shadow-xs focus:outline-hidden focus:ring-2 focus:ring-[#C7A86A]"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Lightbox Navigation Controls */}
          {total > 1 && lightboxScale === 1 && (
            <>
              <button
                type="button"
                onMouseDown={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                onTouchEnd={(e) => e.stopPropagation()}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => {
                    const next = (prev - 1 + total) % total;
                    setActiveIndex(next);
                    return next;
                  });
                  resetLightboxZoom();
                }}
                aria-label="Previous image"
                className="absolute left-4 sm:left-7 top-1/2 -translate-y-1/2 z-50 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/90 text-[#0F2744] border border-[#0F2744]/15 flex items-center justify-center shadow-md hover:bg-[#C7A86A] hover:text-[#0F2744] hover:border-[#C7A86A] transition-all duration-300 cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              <button
                type="button"
                onMouseDown={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                onTouchEnd={(e) => e.stopPropagation()}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => {
                    const next = (prev + 1) % total;
                    setActiveIndex(next);
                    return next;
                  });
                  resetLightboxZoom();
                }}
                aria-label="Next image"
                className="absolute right-4 sm:right-7 top-1/2 -translate-y-1/2 z-50 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/90 text-[#0F2744] border border-[#0F2744]/15 flex items-center justify-center shadow-md hover:bg-[#C7A86A] hover:text-[#0F2744] hover:border-[#C7A86A] transition-all duration-300 cursor-pointer"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </>
          )}

          {/* Lightbox Swipe Track / Image Display */}
          <div
            className={`w-full h-full flex items-center justify-center overflow-hidden ${
              lightboxScale > 1
                ? isLightboxPanning
                  ? "cursor-grabbing"
                  : "cursor-grab"
                : isLightboxDragging
                ? "cursor-grabbing"
                : "cursor-grab"
            }`}
            onClick={(e) => {
              if (
                e.target === e.currentTarget &&
                lightboxScale === 1 &&
                Math.abs(lightboxDragOffset) < 5
              ) {
                closeLightbox();
              }
            }}
            onMouseDown={handleLightboxMouseDown}
            onMouseMove={handleLightboxMouseMove}
            onMouseUp={handleLightboxMouseUp}
            onMouseLeave={() => {
              if (isLightboxPanning) setIsLightboxPanning(false);
              if (isLightboxDragging) {
                setLightboxDragOffset(0);
                setIsLightboxDragging(false);
              }
            }}
            onTouchStart={handleLightboxTouchStart}
            onTouchMove={handleLightboxTouchMove}
            onTouchEnd={handleLightboxTouchEnd}
            onDoubleClick={(e) =>
              toggleLightboxDoubleZoom(e.clientX, e.clientY)
            }
          >
            <div
              style={{
                transform:
                  lightboxScale > 1
                    ? `translate(${lightboxPan.x}px, ${lightboxPan.y}px) scale(${lightboxScale})`
                    : `translateX(${lightboxDragOffset}px) scale(1)`,
                transition:
                  isLightboxPanning || isLightboxDragging
                    ? "none"
                    : "transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1)",
              }}
              className="max-w-[88vw] max-h-[85vh] flex items-center justify-center pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                ref={lightboxImgRef}
                src={formattedImages[lightboxIndex]?.src}
                alt={formattedImages[lightboxIndex]?.alt}
                draggable={false}
                className="max-w-full max-h-[85vh] object-contain rounded-xl border border-[#0F2744]/10 shadow-xl"
              />
            </div>
          </div>

          {/* Minimal Subtle Dot Indicator in Lightbox (Bottom) */}
          {total > 1 && lightboxScale === 1 && (
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-1.5 z-50 pointer-events-auto">
              {formattedImages.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onMouseDown={(e) => e.stopPropagation()}
                  onMouseUp={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                  onTouchEnd={(e) => e.stopPropagation()}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(idx);
                    setActiveIndex(idx);
                    resetLightboxZoom();
                  }}
                  aria-label={`Lightbox slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === lightboxIndex
                      ? "w-6 bg-[#C7A86A]"
                      : "w-1.5 bg-[#0F2744]/20 hover:bg-[#0F2744]/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
