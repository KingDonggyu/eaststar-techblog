import { useEffect, useRef } from 'react';

interface UseScrollFadeOutOption {
  startScrollY: number;
  endScrollY: number;
}

function useScrollDownFadeIn<T extends HTMLElement>({ startScrollY, endScrollY }: UseScrollFadeOutOption) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) {
        return;
      }

      if (window.scrollY < startScrollY) {
        ref.current.style.opacity = '0';
        return;
      }

      if (window.scrollY < endScrollY) {
        ref.current.style.opacity = `${window.scrollY / endScrollY}`;
        return;
      }

      ref.current.style.opacity = '1';
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [endScrollY, startScrollY]);

  return ref;
}

export default useScrollDownFadeIn;
