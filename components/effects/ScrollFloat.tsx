'use client';

import React, { ReactNode, useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollFloatProps {
  children: ReactNode;
  containerClassName?: string;
  textClassName?: string;
  wordDelay?: number;
  duration?: number;
  baseOpacity?: number;
  enableBlur?: boolean;
  blurStrength?: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  containerClassName = '',
  textClassName = '',
  wordDelay = 0.08,
  duration = 0.6,
  baseOpacity = 0,
  enableBlur = true,
  blurStrength = 8,
}) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const words = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(' ').filter(Boolean);
  }, [children]);

  return (
    <h2 ref={ref} className={`my-5 ${containerClassName}`}>
      <p className={`leading-[1.5] font-semibold ${textClassName}`}>
        {words.map((word, i) => (
          <React.Fragment key={i}>
            <motion.span
              className="inline-block"
              initial={{
                opacity: baseOpacity,
                y: 16,
                filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
              }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                  : {}
              }
              transition={{
                duration,
                delay: i * wordDelay,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && ' '}
          </React.Fragment>
        ))}
      </p>
    </h2>
  );
};

export default ScrollFloat;
