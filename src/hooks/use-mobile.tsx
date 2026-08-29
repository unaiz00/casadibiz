'use client';

import { useState, useEffect, useLayoutEffect } from 'react';

const MOBILE_BREAKPOINT = 768;

// Fallback to useEffect during SSR to prevent React layout warnings
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function useIsMobile() {
  // Undefined initially to ensure clean hydration matching between server & client
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useIsomorphicLayoutEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    checkMobile();

    mql.addEventListener('change', checkMobile);
    return () => mql.removeEventListener('change', checkMobile);
  }, []);

  return !!isMobile;
}