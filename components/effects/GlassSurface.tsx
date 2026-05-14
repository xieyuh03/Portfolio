'use client';

import {
  useEffect, useState, useRef, useId,
  ReactNode, CSSProperties,
} from 'react';

interface GlassSurfaceProps {
  children?: ReactNode;
  borderRadius?: number;
  borderWidth?: number;
  brightness?: number;
  opacity?: number;
  blur?: number;
  displace?: number;
  backgroundOpacity?: number;
  saturation?: number;
  distortionScale?: number;
  redOffset?: number;
  greenOffset?: number;
  blueOffset?: number;
  xChannel?: string;
  yChannel?: string;
  mixBlendMode?: string;
  className?: string;
  style?: CSSProperties;
  // Allow arbitrary props to pass through (e.g. framer-motion or aria)
  [key: string]: unknown;
}

export default function GlassSurface({
  children,
  borderRadius     = 20,
  borderWidth      = 0.07,
  brightness       = 50,
  opacity          = 0.93,
  blur             = 11,
  displace         = 0,
  backgroundOpacity = 0,
  saturation       = 1,
  distortionScale  = -180,
  redOffset        = 0,
  greenOffset      = 10,
  blueOffset       = 20,
  xChannel         = 'R',
  yChannel         = 'G',
  mixBlendMode     = 'difference',
  className        = '',
  style            = {},
  ...rest
}: GlassSurfaceProps) {
  const uid        = useId().replace(/:/g, '-');
  const filterId   = `glass-filter-${uid}`;
  const redGradId  = `red-grad-${uid}`;
  const blueGradId = `blue-grad-${uid}`;

  const [svgSupported, setSvgSupported] = useState(false);

  const containerRef      = useRef<HTMLDivElement>(null);
  const feImageRef        = useRef<SVGFEImageElement>(null);
  const redChannelRef     = useRef<SVGFEDisplacementMapElement>(null);
  const greenChannelRef   = useRef<SVGFEDisplacementMapElement>(null);
  const blueChannelRef    = useRef<SVGFEDisplacementMapElement>(null);
  const gaussianBlurRef   = useRef<SVGFEGaussianBlurElement>(null);

  // Build the data-URI displacement map from actual element dimensions
  const generateDisplacementMap = () => {
    const rect       = containerRef.current?.getBoundingClientRect();
    const w          = rect?.width  || 400;
    const h          = rect?.height || 80;
    const edgeSize   = Math.min(w, h) * (borderWidth * 0.5);

    const svgContent = `
      <svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${redGradId}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="${blueGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${w}" height="${h}" fill="black"/>
        <rect x="0" y="0" width="${w}" height="${h}" rx="${borderRadius}" fill="url(#${redGradId})"/>
        <rect x="0" y="0" width="${w}" height="${h}" rx="${borderRadius}" fill="url(#${blueGradId})"
              style="mix-blend-mode:${mixBlendMode}"/>
        <rect x="${edgeSize}" y="${edgeSize}"
              width="${w - edgeSize * 2}" height="${h - edgeSize * 2}"
              rx="${borderRadius}"
              fill="hsl(0 0% ${brightness}% / ${opacity})"
              style="filter:blur(${blur}px)"/>
      </svg>`;

    return `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
  };

  const updateDisplacementMap = () => {
    feImageRef.current?.setAttribute('href', generateDisplacementMap());
  };

  // Update SVG filter attributes whenever props change
  useEffect(() => {
    updateDisplacementMap();

    [
      { ref: redChannelRef,   offset: redOffset   },
      { ref: greenChannelRef, offset: greenOffset  },
      { ref: blueChannelRef,  offset: blueOffset   },
    ].forEach(({ ref, offset }) => {
      if (!ref.current) return;
      ref.current.setAttribute('scale', (distortionScale + offset).toString());
      ref.current.setAttribute('xChannelSelector', xChannel);
      ref.current.setAttribute('yChannelSelector', yChannel);
    });

    gaussianBlurRef.current?.setAttribute('stdDeviation', displace.toString());
  }, [
    borderRadius, borderWidth, brightness, opacity, blur, displace,
    distortionScale, redOffset, greenOffset, blueOffset,
    xChannel, yChannel, mixBlendMode,
  ]);

  // Regenerate map on resize
  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(() => setTimeout(updateDisplacementMap, 0));
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // Detect SVG backdrop-filter support (Chromium only; Safari & Firefox fall back)
  useEffect(() => {
    const isWebkit  = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    const isFirefox = /Firefox/.test(navigator.userAgent);
    if (isWebkit || isFirefox) { setSvgSupported(false); return; }
    const el = document.createElement('div');
    el.style.backdropFilter = `url(#${filterId})`;
    setSvgSupported(el.style.backdropFilter !== '');
  }, [filterId]);

  // Inline style helpers
  const svgStyle: CSSProperties = svgSupported ? {
    background: `hsl(0 0% 0% / ${backgroundOpacity})`,
    backdropFilter: `url(#${filterId}) saturate(${saturation})`,
    WebkitBackdropFilter: `url(#${filterId}) saturate(${saturation})`,
    boxShadow: [
      '0 0 2px 1px color-mix(in oklch, white, transparent 65%) inset',
      '0 0 10px 4px color-mix(in oklch, white, transparent 85%) inset',
      '0px 4px 16px rgba(17,17,26,0.05)',
      '0px 8px 24px rgba(17,17,26,0.05)',
      '0px 16px 56px rgba(17,17,26,0.05)',
    ].join(', '),
  } : {
    background: `rgba(255,255,255,${Math.max(backgroundOpacity, 0.1)})`,
    backdropFilter: `blur(12px) saturate(1.8) brightness(1.2)`,
    WebkitBackdropFilter: `blur(12px) saturate(1.8) brightness(1.2)`,
    border: '1px solid rgba(255,255,255,0.2)',
    boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.2), inset 0 -1px 0 0 rgba(255,255,255,0.1)',
  };

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: `${borderRadius}px`,
        transition: 'opacity 0.26s ease-out',
        ...svgStyle,
        ...style,
      }}
      {...rest}
    >
      {/* Hidden SVG filter definition */}
      <svg
        aria-hidden="true"
        style={{
          width: '100%', height: '100%',
          pointerEvents: 'none',
          position: 'absolute', inset: 0,
          opacity: 0, zIndex: -1,
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id={filterId}
            colorInterpolationFilters="sRGB"
            x="0%" y="0%" width="100%" height="100%"
          >
            {/* Dynamic displacement map texture */}
            <feImage
              ref={feImageRef}
              x="0" y="0" width="100%" height="100%"
              preserveAspectRatio="none"
              result="map"
            />

            {/* Red channel displacement */}
            <feDisplacementMap ref={redChannelRef} in="SourceGraphic" in2="map" result="dispRed" />
            <feColorMatrix in="dispRed" type="matrix"
              values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
              result="red" />

            {/* Green channel displacement */}
            <feDisplacementMap ref={greenChannelRef} in="SourceGraphic" in2="map" result="dispGreen" />
            <feColorMatrix in="dispGreen" type="matrix"
              values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0"
              result="green" />

            {/* Blue channel displacement */}
            <feDisplacementMap ref={blueChannelRef} in="SourceGraphic" in2="map" result="dispBlue" />
            <feColorMatrix in="dispBlue" type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"
              result="blue" />

            {/* Recombine via screen blend */}
            <feBlend in="red" in2="green" mode="screen" result="rg" />
            <feBlend in="rg" in2="blue" mode="screen" result="output" />
            <feGaussianBlur ref={gaussianBlurRef} in="output" stdDeviation="0.7" />
          </filter>
        </defs>
      </svg>

      {/* Content */}
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem', borderRadius: 'inherit', position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}
