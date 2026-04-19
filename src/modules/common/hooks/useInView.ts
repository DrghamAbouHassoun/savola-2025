import { useState, useEffect, useRef, useCallback } from "react";

interface UseInViewOptions {
  partial?: boolean;
  rootMargin?: string;
  root?: Element | null;
  triggerOnce?: boolean;
}

interface UseInViewResult<T extends Element> {
  ref: (el: T | null) => void;
  inView: boolean;
}

function useInView<T extends Element = Element>(
  options: UseInViewOptions = {}
): UseInViewResult<T> {
  const { partial = true, rootMargin = "0px", root = null, triggerOnce = false } = options;
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [inView, setInView] = useState(false);

  const ref = useCallback(
    (element: T | null) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      if (!element) return;

      const threshold = partial ? 0.0 : 1.0;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (triggerOnce) {
            if (entry.isIntersecting) {
              setInView(true);
              observer.disconnect();
            }
          } else {
            setInView(entry.isIntersecting);
          }
        },
        { root, rootMargin, threshold }
      );

      observer.observe(element);
      observerRef.current = observer;
    },
    [partial, rootMargin, root, triggerOnce]
  );

  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return { ref, inView };
}

export default useInView;
