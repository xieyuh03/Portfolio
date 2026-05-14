'use client';

import React, { useEffect, useRef, useState, useMemo, CSSProperties } from 'react';
import * as math from 'mathjs';

interface GradualBlurProps {
  position?: 'top' | 'bottom' | 'left' | 'right';
  strength?: number;
  height?: string;
  divCount?: number;
  exponential?: boolean;
  zIndex?: number;
  animated?: boolean | 'scroll';
  duration?: string;
  easing?: string;
  opacity?: number;
  curve?: 'linear' | 'bezier' | 'ease-in' | 'ease-out' | 'ease-in-out';
  responsive?: boolean;
  target?: 'parent' | 'page';
  hoverIntensity?: number;
  preset?: keyof typeof PRESETS;
  className?: string;
  style?: CSSProperties;
  onAnimationComplete?: () => void;
}

const DEFAULT_CONFIG = {
  position: 'bottom' as const,
  strength: 2,
  height: '6rem',
  divCount: 5,
  exponential: false,
  zIndex: 1000,
  animated: false as boolean | 'scroll',
  duration: '0.3s',
  easing: 'ease-out',
  opacity: 1,
  curve: 'linear' as const,
  responsive: false,
  target: 'parent' as const,
  className: '',
  style: {} as CSSProperties,
};

const PRESETS = {
  top:           { position: 'top'    as const, height: '6rem' },
  bottom:        { position: 'bottom' as const, height: '6rem' },
  left:          { position: 'left'   as const, height: '6rem' },
  right:         { position: 'right'  as const, height: '6rem' },
  subtle:        { height: '4rem',  strength: 1,   opacity: 0.8, divCount: 3 },
  intense:       { height: '10rem', strength: 4,   divCount: 8,  exponential: true },
  smooth:        { height: '8rem',  curve: 'bezier' as const, divCount: 10 },
  sharp:         { height: '5rem',  curve: 'linear' as const, divCount: 4 },
  header:        { position: 'top'    as const, height: '8rem', curve: 'ease-out' as const },
  footer:        { position: 'bottom' as const, height: '8rem', curve: 'ease-out' as const },
  sidebar:       { position: 'left'   as const, height: '6rem', strength: 2.5 },
  'page-header': { position: 'top'    as const, height: '10rem', target: 'page' as const, strength: 3 },
  'page-footer': { position: 'bottom' as const, height: '10rem', target: 'page' as const, strength: 3 },
};

const CURVE_FUNCTIONS: Record<string, (p: number) => number> = {
  linear:       p => p,
  bezier:       p => p * p * (3 - 2 * p),
  'ease-in':    p => p * p,
  'ease-out':   p => 1 - Math.pow(1 - p, 2),
  'ease-in-out':p => p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2,
};

const getGradientDirection = (pos: string) =>
  ({ top: 'to top', bottom: 'to bottom', left: 'to left', right: 'to right' }[pos] ?? 'to bottom');

const debounce = (fn: (...args: unknown[]) => void, wait: number) => {
  let t: ReturnType<typeof setTimeout>;
  return (...a: unknown[]) => { clearTimeout(t); t = setTimeout(() => fn(...a), wait); };
};

function useResponsiveDimension(responsive: boolean, config: Record<string, unknown>, key: string) {
  const [value, setValue] = useState(config[key] as string);
  useEffect(() => {
    if (!responsive) return;
    const calc = () => {
      const w = window.innerWidth;
      let v = config[key] as string;
      const capKey = key[0].toUpperCase() + key.slice(1);
      if (w <= 480 && config[`mobile${capKey}`]) v = config[`mobile${capKey}`] as string;
      else if (w <= 768 && config[`tablet${capKey}`]) v = config[`tablet${capKey}`] as string;
      else if (w <= 1024 && config[`desktop${capKey}`]) v = config[`desktop${capKey}`] as string;
      setValue(v);
    };
    const debounced = debounce(calc, 100);
    calc();
    window.addEventListener('resize', debounced as EventListener);
    return () => window.removeEventListener('resize', debounced as EventListener);
  }, [responsive, config, key]);
  return responsive ? value : (config[key] as string);
}

function useIntersectionObserver(ref: React.RefObject<HTMLDivElement | null>, shouldObserve: boolean) {
  const [isVisible, setIsVisible] = useState(!shouldObserve);
  useEffect(() => {
    if (!shouldObserve || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, shouldObserve]);
  return isVisible;
}

function GradualBlurInner(props: GradualBlurProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const config = useMemo(() => {
    const presetConfig = props.preset && PRESETS[props.preset] ? PRESETS[props.preset] : {};
    return { ...DEFAULT_CONFIG, ...presetConfig, ...props };
  }, [props]);

  const responsiveHeight = useResponsiveDimension(config.responsive, config as Record<string, unknown>, 'height');
  const responsiveWidth  = useResponsiveDimension(config.responsive, config as Record<string, unknown>, 'width');
  const isVisible = useIntersectionObserver(containerRef, config.animated === 'scroll');

  const blurDivs = useMemo(() => {
    const divs: React.ReactElement[] = [];
    const increment = 100 / config.divCount;
    const currentStrength = isHovered && config.hoverIntensity
      ? config.strength * config.hoverIntensity
      : config.strength;

    const curveFunc = CURVE_FUNCTIONS[config.curve] ?? CURVE_FUNCTIONS.linear;

    for (let i = 1; i <= config.divCount; i++) {
      let progress = i / config.divCount;
      progress = curveFunc(progress);

      let blurValue: number;
      if (config.exponential) {
        blurValue = (math.pow(2, progress * 4) as number) * 0.0625 * currentStrength;
      } else {
        blurValue = 0.0625 * (progress * config.divCount + 1) * currentStrength;
      }

      const p1 = math.round((increment * i - increment) * 10) / 10;
      const p2 = math.round(increment * i * 10) / 10;
      const p3 = math.round((increment * i + increment) * 10) / 10;
      const p4 = math.round((increment * i + increment * 2) * 10) / 10;

      let gradient = `transparent ${p1}%, black ${p2}%`;
      if ((p3 as number) <= 100) gradient += `, black ${p3}%`;
      if ((p4 as number) <= 100) gradient += `, transparent ${p4}%`;

      const direction = getGradientDirection(config.position);

      const divStyle: CSSProperties = {
        position: 'absolute',
        inset: '0',
        maskImage: `linear-gradient(${direction}, ${gradient})`,
        WebkitMaskImage: `linear-gradient(${direction}, ${gradient})`,
        backdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
        WebkitBackdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
        opacity: config.opacity,
        transition: config.animated && config.animated !== 'scroll'
          ? `backdrop-filter ${config.duration} ${config.easing}`
          : undefined,
      };

      divs.push(<div key={i} style={divStyle} />);
    }
    return divs;
  }, [config, isHovered]);

  const containerStyle = useMemo((): CSSProperties => {
    const isVertical   = ['top', 'bottom'].includes(config.position);
    const isHorizontal = ['left', 'right'].includes(config.position);
    const isPageTarget = config.target === 'page';

    const base: CSSProperties = {
      position: isPageTarget ? 'fixed' : 'absolute',
      pointerEvents: config.hoverIntensity ? 'auto' : 'none',
      opacity: isVisible ? 1 : 0,
      transition: config.animated ? `opacity ${config.duration} ${config.easing}` : undefined,
      zIndex: isPageTarget ? config.zIndex + 100 : config.zIndex,
      ...config.style,
    };

    if (isVertical) {
      base.height = responsiveHeight;
      base.width  = responsiveWidth || '100%';
      (base as Record<string, unknown>)[config.position] = 0;
      base.left  = 0;
      base.right = 0;
    } else if (isHorizontal) {
      base.width  = responsiveWidth || responsiveHeight;
      base.height = '100%';
      (base as Record<string, unknown>)[config.position] = 0;
      base.top    = 0;
      base.bottom = 0;
    }

    return base;
  }, [config, responsiveHeight, responsiveWidth, isVisible]);

  useEffect(() => {
    if (isVisible && config.animated === 'scroll' && config.onAnimationComplete) {
      const ms = parseFloat(config.duration) * 1000;
      const t = setTimeout(() => config.onAnimationComplete!(), ms);
      return () => clearTimeout(t);
    }
  }, [isVisible, config]);

  return (
    <div
      ref={containerRef}
      className={`gradual-blur ${config.target === 'page' ? 'gradual-blur-page' : 'gradual-blur-parent'} ${config.className}`}
      style={containerStyle}
      onMouseEnter={config.hoverIntensity ? () => setIsHovered(true)  : undefined}
      onMouseLeave={config.hoverIntensity ? () => setIsHovered(false) : undefined}
    >
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {blurDivs}
      </div>
    </div>
  );
}

const GradualBlur = React.memo(GradualBlurInner);
GradualBlur.displayName = 'GradualBlur';
export default GradualBlur;
