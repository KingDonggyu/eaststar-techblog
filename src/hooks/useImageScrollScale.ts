import { useEffect, useRef, useState } from 'react';

function useImageScrollScale(onScaleZoom?: (scale: number) => void) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageScale, setImageScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setImageScale(1 + window.scrollY / 10000);
      if (onScaleZoom) {
        onScaleZoom(1 + window.scrollY / 10000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onScaleZoom]);

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.style.transform = `scale(${imageScale})`;
    }
  }, [imageScale]);

  return imageRef;
}

export default useImageScrollScale;
