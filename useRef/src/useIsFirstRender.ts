import { useRef } from 'react';

export function useIsFirstRender() {
  const firstRef = useRef(true);

  if(firstRef.current) {
    firstRef.current = false;
    return true;
  }

  return false;
}