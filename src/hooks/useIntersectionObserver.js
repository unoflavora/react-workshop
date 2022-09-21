import { useEffect, useState, useRef } from 'react';

export default function useIntersectionObserver(ref, options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [element, setElement] = useState(null);

  const observer = useRef(null);

  useEffect(() => {
    setElement(ref.current);
    console.log('=+= LOG - useEffect - ref.current', ref.current);
  }, [ref, setElement]);

  useEffect(() => {
    const cleanOb = () => {
      if (observer.current) {
        observer.current.disconnect();
        observer.current = null;
      }
    };

    // console.log('=+= LOG - useEffect - element.current', element);
    if (!element || isIntersecting) return;

    
    // cleanOb();
    
    observer.current = new IntersectionObserver(
        ([entry]) => {
            const isElementIntersecting = entry.isIntersecting;

            console.log('=+= LOG - useEffect - entry', entry);

        if (!isIntersecting && isElementIntersecting) {
          setIsIntersecting(isElementIntersecting);
          cleanOb();
        }
      },
      options,
    )

    observer.current.observe(element);

    return () => {
      cleanOb();
    };
  }, [element, isIntersecting, options]);

  return isIntersecting;
}
