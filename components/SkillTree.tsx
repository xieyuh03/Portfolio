'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useAnimationFrame } from 'framer-motion';

const ORBIT_SKILLS = [
  { id: 'ui',          name: 'UI Design',     angleDeg: 315, radius: 145, orbitSpeed: 3.0,  breathDuration: 4.0, breathDelay: 0.3 },
  { id: 'ux',          name: 'UX Design',     angleDeg: 5,   radius: 152, orbitSpeed: 4.2,  breathDuration: 3.8, breathDelay: 0.8 },
  { id: 'research',    name: 'Research',      angleDeg: 65,  radius: 140, orbitSpeed: 5.0,  breathDuration: 4.2, breathDelay: 0.5 },
  { id: 'interaction', name: 'Interaction',   angleDeg: 130, radius: 148, orbitSpeed: 3.8,  breathDuration: 3.6, breathDelay: 1.2 },
  { id: 'data',        name: 'Data Analysis', angleDeg: 200, radius: 145, orbitSpeed: 4.5,  breathDuration: 4.5, breathDelay: 0.2 },
  { id: 'vibe',        name: 'Vibe Coding',   angleDeg: 255, radius: 152, orbitSpeed: 5.5,  breathDuration: 3.9, breathDelay: 1.0 },
] as const;

type OrbitSkill = typeof ORBIT_SKILLS[number];

function OrbitCard({ skill, cx, cy }: { skill: OrbitSkill; cx: number; cy: number }) {
  const angleRef    = useRef<number>(skill.angleDeg);
  const isPausedRef = useRef(false);
  const [isActive, setIsActive] = useState(false);

  // 轨道位置（由 useAnimationFrame 驱动）
  const orbitalX = useMotionValue(0);
  const orbitalY = useMotionValue(0);

  // 拖拽偏移（松手后弹回 0）
  const dragTargetX = useMotionValue(0);
  const dragTargetY = useMotionValue(0);
  const dragSpringX = useSpring(dragTargetX, { stiffness: 280, damping: 24 });
  const dragSpringY = useSpring(dragTargetY, { stiffness: 280, damping: 24 });

  // 最终位置 = 轨道位置 + 弹簧偏移
  const finalX = useTransform([orbitalX, dragSpringX], ([ox, dx]) => (ox as number) + (dx as number));
  const finalY = useTransform([orbitalY, dragSpringY], ([oy, dy]) => (oy as number) + (dy as number));

  const pointerStartRef  = useRef<{ x: number; y: number } | null>(null);
  const isDraggingRef    = useRef(false);
  const resumeTimerRef   = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 容器尺寸变化时更新初始位置
  useEffect(() => {
    if (cx > 0) {
      const rad = angleRef.current * Math.PI / 180;
      orbitalX.set(cx + skill.radius * Math.cos(rad));
      orbitalY.set(cy + skill.radius * Math.sin(rad));
    }
  }, [cx, cy, orbitalX, orbitalY, skill.radius]);

  // 轨道旋转
  useAnimationFrame((_, delta) => {
    if (cx === 0 || isPausedRef.current) return;
    angleRef.current = (angleRef.current + (skill.orbitSpeed * delta) / 1000) % 360;
    const rad = angleRef.current * Math.PI / 180;
    orbitalX.set(cx + skill.radius * Math.cos(rad));
    orbitalY.set(cy + skill.radius * Math.sin(rad));
  });

  const handlePointerDown = (e: React.PointerEvent) => {
    e.stopPropagation();
    e.currentTarget.setPointerCapture(e.pointerId);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    isPausedRef.current = true;
    isDraggingRef.current = false;
    setIsActive(true);
    pointerStartRef.current = { x: e.clientX, y: e.clientY };
    dragTargetX.set(0);
    dragTargetY.set(0);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!pointerStartRef.current) return;
    const dx = e.clientX - pointerStartRef.current.x;
    const dy = e.clientY - pointerStartRef.current.y;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) isDraggingRef.current = true;
    if (isDraggingRef.current) {
      dragTargetX.set(dx);
      dragTargetY.set(dy);
    }
  };

  const handlePointerUp = () => {
    pointerStartRef.current = null;
    // 弹回截停位置
    dragTargetX.set(0);
    dragTargetY.set(0);
    // 弹簧落定后恢复旋转（~600ms）
    resumeTimerRef.current = setTimeout(() => {
      isPausedRef.current = false;
      setIsActive(false);
    }, 650);
  };

  useEffect(() => () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  }, []);

  return (
    <motion.div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      // 外层：截停放大
      animate={{ scale: isActive ? 1.18 : 1 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      style={{
        position: 'absolute',
        left: finalX,
        top: finalY,
        translateX: '-50%',
        translateY: '-50%',
        zIndex: isActive ? 15 : 5,
        cursor: isActive ? 'grabbing' : 'grab',
        touchAction: 'none',
        userSelect: 'none',
      }}
    >
      {/* 内层：独立呼吸动画，始终运行 */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          duration: skill.breathDuration,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: skill.breathDelay,
        }}
      >
        <div className="px-5 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-base font-medium whitespace-nowrap">
          {skill.name}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function SkillTree() {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const update = () => {
      if (ref.current) setSize({ width: ref.current.offsetWidth, height: ref.current.offsetHeight });
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const cx = size.width / 2;
  const cy = size.height / 2;

  return (
    <div ref={ref} className="relative w-full h-full">
      {size.width > 0 && (
        <>
          {/* 中心白卡（呼吸） */}
          <motion.div
            style={{
              position: 'absolute',
              left: cx,
              top: cy,
              translateX: '-50%',
              translateY: '-50%',
              zIndex: 10,
            }}
            animate={{ scale: [1, 1.07, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="px-8 py-4 bg-white text-black rounded-2xl font-bold text-2xl shadow-2xl cursor-default">
              Designer
            </div>
          </motion.div>

          {ORBIT_SKILLS.map(skill => (
            <OrbitCard key={skill.id} skill={skill} cx={cx} cy={cy} />
          ))}
        </>
      )}
    </div>
  );
}
