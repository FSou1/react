import { useState, useCallback } from 'react';

export default function useToggle(on: boolean = false): [boolean, () => void] {
  const [isOn, setIsOn] = useState(on);

  const toggle = useCallback(() => {
    setIsOn(state => !state)
  }, []);

  return [isOn, toggle];
}