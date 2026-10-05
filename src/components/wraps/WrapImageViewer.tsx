"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { X, Maximize2 } from "lucide-react";

interface WrapImageViewerProps {
  src: string;
  alt: string;
  productName: string;
}

export default function WrapImageViewer({ src, alt, productName }: WrapImageViewerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const initialPinchDistRef = useRef<number | null>(null);
  const initialScaleRef = useRef<number>(1);
  const imageRef = useRef<HTMLImageElement>(null);

  const resetZoom = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const openLightbox = () => {
    resetZoom();
    setIsOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    resetZoom();
  }, [resetZoom]);

  // Keyboard Escape to close
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, closeLightbox]);

  const toggleDoubleZoom = (clientX?: number, clientY?: number) => {
    if (scale > 1.2) {
      resetZoom();
    } else {
      setScale(2.5);
      if (clientX && clientY && typeof window !== "undefined") {
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        setPosition({
          x: (cx - clientX) * 1.2,
          y: (cy - clientY) * 1.2,
        });
      }
    }
  };

  // Mouse Wheel Zoom inside Lightbox
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * -0.002;
    setScale((prev) => {
      const next = Math.min(Math.max(prev + delta, 1), 4);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  // Mouse Drag to Pan
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return;
    setPosition({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch Events for Mobile Drag & Pinch-to-Zoom
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      initialPinchDistRef.current = dist;
      initialScaleRef.current = scale;
    } else if (e.touches.length === 1 && scale > 1) {
      setIsDragging(true);
      dragStartRef.current = {
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && initialPinchDistRef.current !== null) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const ratio = dist / initialPinchDistRef.current;
      const nextScale = Math.min(Math.max(initialScaleRef.current * ratio, 1), 4);
      setScale(nextScale);
      if (nextScale === 1) setPosition({ x: 0, y: 0 });
    } else if (e.touches.length === 1 && isDragging && scale > 1) {
      setPosition({
        x: e.touches[0].clientX - dragStartRef.current.x,
        y: e.touches[0].clientY - dragStartRef.current.y,
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    initialPinchDistRef.current = null;
  };

  return (
    <>
      {/* NORMAL PDP HERO IMAGE DISPLAY */}
      <div className="w-full">
        <button
          type="button"
          onClick={openLightbox}
          aria-label={`View larger image of ${productName}`}
          className="group relative w-full aspect-[16/11] sm:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#C7A86A]/25 bg-white cursor-zoom-in text-left transition-all duration-300 hover:border-[#C7A86A]/60 shadow-xs focus:outline-hidden focus:ring-2 focus:ring-[#C7A86A]"
        >
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 h-full w-full object-contain p-3 sm:p-5 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            loading="eager"
          />

          {/* Subtle Hover Overlay */}
          <div className="absolute inset-0 bg-[#0F2744]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Circular Expand Button (Matching Bag PDP Style) */}
          <div
            className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 h-10 w-10 sm:h-11 sm:w-11 lg:h-12 lg:w-12 rounded-full bg-[#0F2744]/95 text-[#F6F0E8] border border-[#C7A86A]/30 flex items-center justify-center shadow-md opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 transform translate-y-0 group-hover:scale-105"
            aria-hidden="true"
          >
            <Maximize2 className="h-4 w-4 sm:h-5 sm:w-5 text-[#C7A86A]" />
          </div>
        </button>
      </div>

      {/* ENLARGED EDITORIAL LIGHTBOX VIEWER */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged viewer for ${productName}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FAF8F5]/98 transition-opacity duration-300 p-4 sm:p-8 animate-fade-up"
          onWheel={handleWheel}
        >
          {/* Circular Close Button (Top-Right) */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close image viewer"
            className="absolute top-5 right-5 sm:top-7 sm:right-7 z-50 h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-transparent text-[#0F2744] flex items-center justify-center border border-[#0F2744]/15 hover:bg-[#C7A86A] hover:text-[#0F2744] hover:border-[#C7A86A] transition-all duration-300 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#C7A86A]"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Main Enlarged Image Container */}
          <div
            className={`w-full h-full flex items-center justify-center select-none ${
              scale > 1 ? (isDragging ? "cursor-grabbing" : "cursor-grab") : "cursor-zoom-in"
            }`}
            onClick={(e) => {
              if (e.target === e.currentTarget && scale === 1) {
                closeLightbox();
              }
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onDoubleClick={(e) => toggleDoubleZoom(e.clientX, e.clientY)}
          >
            <div
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                transition: isDragging ? "none" : "transform 250ms cubic-bezier(0.2, 0.8, 0.2, 1)",
              }}
              className="max-w-[88vw] max-h-[85vh] flex items-center justify-center"
            >
              <img
                ref={imageRef}
                src={src}
                alt={alt}
                draggable={false}
                className="max-w-full max-h-[85vh] object-contain rounded-xl border border-[#0F2744]/10 shadow-lg pointer-events-none"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
