import { useEffect, useRef } from 'react';

interface UseScrollFadeOutOption {
  startScrollY?: number;
  endScrollY: number;
}

function useScrollDownFadeOut<T extends HTMLElement>({ startScrollY = 0, endScrollY }: UseScrollFadeOutOption) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) {
        return;
      }

      if (window.scrollY < startScrollY) {
        ref.current.style.opacity = '1';
        return;
      }

      if (window.scrollY < endScrollY) {
        ref.current.style.opacity = `${1 - window.scrollY / endScrollY}`;
        return;
      }

      ref.current.style.opacity = '0';
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [startScrollY, endScrollY]);

  return ref;
}

export default useScrollDownFadeOut;
