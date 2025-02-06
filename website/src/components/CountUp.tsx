'use client';

import { useState, useEffect, useRef } from 'react';

interface Props {
  end: number;
  duration?: number;
  suffix?: string;
}

export default function CountUp({ end, duration = 2000, suffix = '' }: Props) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const startTime = Date.now();
          const timer = setInterval(() => {
            const timePassed = Date.now() - startTime;
            if (timePassed >= duration) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor((timePassed / duration) * end));
            }
          }, 50);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [end, duration]);

  return (
    <div ref={countRef} className="text-3xl font-bold text-blue-600 mb-2">
      {count}{suffix}
    </div>
  );
} 