'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Planet {
  name: string;
  colorRgb: string;
  size: number;
  orbitRadius: number; // 轨道半径（单位：rem）
  duration: number; // 旋转周期（秒）
  opacity: number;
}

const planets: Planet[] = [
  { name: '海王星', colorRgb: '120, 150, 160', size: 10, orbitRadius: 25, duration: 95, opacity: 0.5 },
  { name: '天王星', colorRgb: '170, 185, 200', size: 10, orbitRadius: 21, duration: 70, opacity: 0.55 },
  { name: '土星', colorRgb: '160, 140, 110', size: 12, orbitRadius: 16, duration: 50, opacity: 0.6 },
  { name: '木星', colorRgb: '130, 150, 135', size: 14, orbitRadius: 13, duration: 35, opacity: 0.6 },
  { name: '火星', colorRgb: '160, 130, 130', size: 8, orbitRadius: 8, duration: 22, opacity: 0.6 },
  { name: '地球', colorRgb: '190, 200, 210', size: 10, orbitRadius: 6.5, duration: 15, opacity: 0.65 },
  { name: '金星', colorRgb: '200, 185, 140', size: 8, orbitRadius: 5, duration: 10, opacity: 0.65 },
  { name: '水星', colorRgb: '150, 160, 175', size: 6, orbitRadius: 3, duration: 5, opacity: 0.75 },
];

export default function PlanetaryOrbit() {
  const [isClockwise, setIsClockwise] = useState(true);

  // 容器尺寸和布局配置
  const containerSize = 500; // 容器尺寸
  const centerX = containerSize / 2; // 容器中心 X
  const centerY = containerSize / 2; // 容器中心 Y
  const avatarSize = 180; // 头像尺寸
  const baseOrbitRadius = 110; // 基础轨道半径（从中心到最内层轨道）

  // 轨道样式配置
  const dashedOrbitIndices = [3, 4]; // 虚线轨道（木星、火星）

  // 为每个轨道生成"随机"但固定的起始角度（基于索引）
  const getStartAngle = (index: number) => {
    // 使用质数乘法生成看起来随机的角度
    return (index * 47 + index * index * 23) % 360;
  };

  return (
    <>
      <style jsx>{`
        @keyframes spin-clockwise {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-counterclockwise {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
      `}</style>

      <div
        className="relative cursor-pointer"
        onClick={() => setIsClockwise(!isClockwise)}
        title="点击切换旋转方向 - 太阳系八大行星"
        style={{ width: `${containerSize}px`, height: `${containerSize}px` }}
      >
      {/* 轨道圆环 - 静态不旋转 */}
      <svg
        className="absolute"
        width={containerSize}
        height={containerSize}
        style={{ zIndex: 1 }}
      >
        {/* 所有轨道：分段渐变 */}
        {planets.map((planet, orbitIndex) => {
          const radius = baseOrbitRadius + planet.orbitRadius * 4;
          const arcFraction = (8 + orbitIndex) / 16;
          const arcDegrees = 360 * arcFraction;

          // 获取起始角度，金星特殊处理以平衡布局
          let startAngleDeg = getStartAngle(orbitIndex);
          if (orbitIndex === 6) {
            // 金星：调整到左侧（原本30度，改到210度）
            startAngleDeg = 210;
          }

          // 透明度范围：外圈0.04，内圈0.25（保持不变）
          const opacityFactor = 0.04 + orbitIndex / planets.length * 0.21;

          // 将轨道分成多段，每段有不同的透明度
          const segments = 100; // 分成100段，实现平滑的线性过渡
          const segmentPaths = [];

          for (let i = 0; i < segments; i++) {
            const segmentStartAngle = startAngleDeg + (arcDegrees / segments) * i;
            const segmentEndAngle = startAngleDeg + (arcDegrees / segments) * (i + 1);

            // 计算当前段在圆弧上的相对位置（0到1）
            const relativePosition = i / (segments - 1);

            // 两端淡出：前后各20%渐变过渡
            let segmentOpacity;
            if (relativePosition < 0.2) {
              // 前20%淡入
              segmentOpacity = (relativePosition / 0.2) * opacityFactor;
            } else if (relativePosition > 0.8) {
              // 后20%淡出
              segmentOpacity = ((1 - relativePosition) / 0.2) * opacityFactor;
            } else {
              // 中间60%正常亮度
              segmentOpacity = opacityFactor;
            }

            const startRad = (segmentStartAngle * Math.PI) / 180;
            const endRad = (segmentEndAngle * Math.PI) / 180;
            const startX = centerX + radius * Math.cos(startRad);
            const startY = centerY + radius * Math.sin(startRad);
            const endX = centerX + radius * Math.cos(endRad);
            const endY = centerY + radius * Math.sin(endRad);

            const segmentArcDegrees = arcDegrees / segments;
            const largeArcFlag = segmentArcDegrees > 180 ? 1 : 0;

            segmentPaths.push(
              <path
                key={`orbit-${planet.name}-segment-${i}`}
                d={`M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`}
                fill="none"
                stroke={`rgba(255, 255, 255, ${segmentOpacity})`}
                strokeWidth="1"
                strokeLinecap="round"
              />
            );
          }

          return segmentPaths;
        })}
      </svg>

      {/* 行星和拖影 - 旋转 */}
      {planets.map((planet, planetIndex) => {
        const radius = baseOrbitRadius + planet.orbitRadius * 4;

        // 拖影长度与速率成正比（速度越快，拖影越长）
        const minDuration = 5; // 水星的周期（最快）
        const baseTrailLength = 50; // 基础拖影角度
        const trailLength = baseTrailLength * (minDuration / planet.duration);

        // 根据旋转方向确定拖影起点位置
        const trailAngle = isClockwise ? -trailLength : trailLength;
        const trailStartX = centerX + radius * Math.sin((trailAngle * Math.PI) / 180);
        const trailStartY = centerY - radius * Math.cos((trailAngle * Math.PI) / 180);
        const trailEndX = centerX;
        const trailEndY = centerY - radius;

        return (
          <div
            key={planet.name}
            className="absolute"
            style={{
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              zIndex: 10 + planetIndex,
              animation: `${isClockwise ? 'spin-clockwise' : 'spin-counterclockwise'} ${planet.duration}s linear infinite`,
            }}
          >
            {/* 渐变拖影 - 使用 SVG 弧线 */}
            <svg
              className="absolute"
              width={containerSize}
              height={containerSize}
              style={{ overflow: 'visible' }}
            >
              <defs>
                <linearGradient id={`trail-gradient-${planet.name}`} gradientUnits="userSpaceOnUse" x1={trailStartX} y1={trailStartY} x2={trailEndX} y2={trailEndY}>
                  <stop offset="0%" stopColor={`rgb(${planet.colorRgb})`} stopOpacity="0" />
                  <stop offset="100%" stopColor={`rgb(${planet.colorRgb})`} stopOpacity={planet.opacity * 0.8} />
                </linearGradient>
              </defs>
              <path
                d={`M ${trailStartX} ${trailStartY} A ${radius} ${radius} 0 0 ${isClockwise ? 1 : 0} ${trailEndX} ${trailEndY}`}
                fill="none"
                stroke={`url(#trail-gradient-${planet.name})`}
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>

            {/* 行星本体 */}
            <div
              className="absolute rounded-full shadow-md"
              style={{
                left: `${centerX - planet.size / 2}px`,
                top: `${centerY - radius - planet.size / 2}px`,
                width: `${planet.size}px`,
                height: `${planet.size}px`,
                backgroundColor: `rgba(${planet.colorRgb}, ${planet.opacity})`,
                boxShadow: `0 0 ${planet.size * 2}px rgba(${planet.colorRgb}, 0.6)`,
              }}
            />
          </div>
        );
      })}

      {/* 太阳光晕效果 */}
      <div
        className="absolute -inset-20 rounded-full blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
          zIndex: 1,
        }}
      />

      {/* 中心头像 */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
        style={{
          width: `${avatarSize}px`,
          height: `${avatarSize}px`,
          zIndex: 5
        }}
      >
        <Image
          src="/images/avatar.png"
          alt="Avatar"
          width={avatarSize}
          height={avatarSize}
          className="object-cover w-full h-full"
          priority
        />
      </div>
      </div>
    </>
  );
}
