import { useRef, useEffect } from 'react';

export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>(undefined);

  console.log('#3 useRef', value, ref, ref.current);

  useEffect(() => {
    ref.current = value;
    console.log('#6 usePrevious:useEffect', value, ref, ref.current);
  }, [value])
  
  console.log('#4 usePrevious return', value, ref, ref.current);
  
  return ref.current;
}