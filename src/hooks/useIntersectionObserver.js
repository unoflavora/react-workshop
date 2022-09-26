import { useEffect, useState, useRef } from 'react';

export default function useIntersectionObserver(ref, options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [element, setElement] = useState(null);

  const observer = useRef(null);

  useEffect(() => {
    setElement(ref.current);
  }, [ref, setElement]);

  useEffect(() => {
    const cleanOb = () => {
      if (observer.current) {
        observer.current.disconnect();
        observer.current = null;
      }
    };

    if (!element || isIntersecting) return;

    observer.current = new IntersectionObserver(([entry]) => {
      const isElementIntersecting = entry.isIntersecting;

      if (!isIntersecting && isElementIntersecting) {
        setIsIntersecting(isElementIntersecting);
        cleanOb();
      }
    }, options);

    observer.current.observe(element);

    return () => {
      cleanOb();
    };
  }, [element, isIntersecting, options]);

  return isIntersecting;
}
