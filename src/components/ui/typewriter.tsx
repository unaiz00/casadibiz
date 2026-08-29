"use client";

import React, { useState, useEffect } from "react";

export interface TypewriterSegment {
  text: string;
  className?: string;
}

export interface TypewriterProps {
  segments: TypewriterSegment[];
  speed?: number; // ms per character
  delay?: number; // ms delay before starting
  start?: boolean; // trigger to start typing
  onComplete?: () => void;
  className?: string;
  showCursor?: boolean;
  cursorColor?: string;
}

export function Typewriter({
  segments,
  speed = 50,
  delay = 0,
  start = false,
  onComplete,
  className = "",
  showCursor = true,
  cursorColor = "currentColor",
}: TypewriterProps) {
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!start) return;
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [start, delay]);

  useEffect(() => {
    if (!started || completed) return;

    if (currentSegmentIndex >= segments.length) {
      setCompleted(true);
      if (onComplete) onComplete();
      return;
    }

    const currentSegment = segments[currentSegmentIndex];
    if (currentTextIndex < currentSegment.text.length) {
      const charTimeout = setTimeout(() => {
        setCurrentTextIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(charTimeout);
    } else {
      // Move to next segment
      if (currentSegmentIndex + 1 < segments.length) {
        setCurrentSegmentIndex((prev) => prev + 1);
        setCurrentTextIndex(0);
      } else {
        setCompleted(true);
        if (onComplete) onComplete();
      }
    }
  }, [started, currentSegmentIndex, currentTextIndex, segments, speed, completed, onComplete]);

  return (
    <span className={className}>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes typewriter-cursor-blink {
            from, to { opacity: 0; }
            50% { opacity: 1; }
          }
          .typewriter-cursor {
            animation: typewriter-cursor-blink 0.8s infinite step-end;
          }
        `
      }} />

      {segments.map((segment, index) => {
        if (index < currentSegmentIndex) {
          // Fully typed segment
          return (
            <span key={index} className={segment.className}>
              {segment.text}
            </span>
          );
        } else if (index === currentSegmentIndex && started) {
          // Currently typing segment
          const typed = segment.text.slice(0, currentTextIndex);
          const untyped = segment.text.slice(currentTextIndex);
          return (
            <span key={index} className={segment.className}>
              <span>{typed}</span>
              {showCursor && !completed && (
                <span
                  className="typewriter-cursor inline-block w-[2px] h-[0.9em] ml-[1px] mr-[1px]"
                  style={{
                    backgroundColor: cursorColor,
                    verticalAlign: "middle",
                    lineHeight: "1",
                  }}
                />
              )}
              <span className="opacity-0 pointer-events-none select-none" aria-hidden="true">
                {untyped}
              </span>
            </span>
          );
        } else {
          // Future segments not yet typed (render invisibly to preserve layout spacing)
          return (
            <span
              key={index}
              className={`${segment.className || ""} opacity-0 pointer-events-none select-none`}
              aria-hidden="true"
            >
              {segment.text}
            </span>
          );
        }
      })}

      {/* Show cursor at the beginning if start is triggered but delay is still running */}
      {showCursor && start && !started && !completed && (
        <span
          className="typewriter-cursor inline-block w-[2px] h-[0.9em] ml-[1px] mr-[1px]"
          style={{
            backgroundColor: cursorColor,
            verticalAlign: "middle",
            lineHeight: "1",
          }}
        />
      )}
    </span>
  );
}
