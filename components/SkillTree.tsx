'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, PanInfo } from 'framer-motion';

// 技能数据
const skillsData = [
  {
    id: 'center',
    name: 'Designer',
    initialPos: { x: 50, y: 50 },
    size: 'large',
    style: 'px-8 py-4 bg-white text-black rounded-2xl font-bold text-2xl shadow-2xl',
  },
  {
    id: 'ui',
    name: 'UI',
    initialPos: { x: 20, y: 25 },
    size: 'medium',
    style: 'px-5 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-lg font-medium',
    animation: { duration: 5, delay: 0 }
  },
  {
    id: 'ux',
    name: 'UX',
    initialPos: { x: 75, y: 30 },
    size: 'medium',
    style: 'px-5 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-lg font-medium',
    animation: { duration: 6, delay: 0.5 }
  },
  {
    id: 'interaction',
    name: 'Interaction',
    initialPos: { x: 15, y: 70 },
    size: 'medium',
    style: 'px-5 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-lg font-medium',
    animation: { duration: 5.5, delay: 1 }
  },
  {
    id: 'research',
    name: 'Research',
    initialPos: { x: 80, y: 75 },
    size: 'medium',
    style: 'px-5 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-lg font-medium',
    animation: { duration: 5, delay: 1.5 }
  },
  {
    id: 'data',
    name: 'Data Analysis',
    initialPos: { x: 65, y: 15 },
    size: 'small',
    style: 'px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-sm',
    animation: { duration: 4.5, delay: 0.8 }
  },
  {
    id: 'vibe',
    name: 'Vibe Coding',
    initialPos: { x: 30, y: 85 },
    size: 'small',
    style: 'px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-sm',
    animation: { duration: 5.2, delay: 1.2 }
  },
];

// 计算两点之间的距离
function getDistance(x1: number, y1: number, x2: number, y2: number) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

interface SkillCardProps {
  skill: typeof skillsData[0];
  draggingId: string | null;
  dragPosition: { x: number; y: number } | null;
  containerSize: { width: number; height: number };
  onDragStart: () => void;
  onDrag: (x: number, y: number) => void;
  onDragEnd: () => void;
}

function SkillCard({ skill, draggingId, dragPosition, containerSize, onDragStart, onDrag, onDragEnd }: SkillCardProps) {
  const baseX = (skill.initialPos.x / 100) * containerSize.width;
  const baseY = (skill.initialPos.y / 100) * containerSize.height;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 弹簧配置：松手后的缓冲效果
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const isBeingDragged = draggingId === skill.id;
  const isCenter = skill.id === 'center';

  // 计算联动效果
  useEffect(() => {
    if (!isBeingDragged && draggingId && dragPosition && containerSize.width > 0) {
      const dragX = dragPosition.x;
      const dragY = dragPosition.y;

      // 计算当前卡片和被拖拽卡片之间的距离
      const distance = getDistance(baseX, baseY, dragX, dragY);

      // 影响范围：300px 内有影响
      const influenceRadius = 300;

      if (distance < influenceRadius) {
        // 计算影响强度（距离越近影响越大）
        const influence = 1 - (distance / influenceRadius);
        const maxDisplacement = 50; // 最大位移

        // 计算方向向量
        const dx = baseX - dragX;
        const dy = baseY - dragY;
        const angle = Math.atan2(dy, dx);

        // 应用位移（被推开的效果）
        const offsetX = Math.cos(angle) * influence * maxDisplacement;
        const offsetY = Math.sin(angle) * influence * maxDisplacement;

        x.set(offsetX);
        y.set(offsetY);
      } else {
        // 距离太远，回归原位
        x.set(0);
        y.set(0);
      }
    } else if (!draggingId) {
      // 没有拖拽时，回归原位
      x.set(0);
      y.set(0);
    }
  }, [draggingId, dragPosition, isBeingDragged, baseX, baseY, containerSize, x, y]);

  const handleDrag = (_: any, info: PanInfo) => {
    if (isBeingDragged && containerSize.width > 0) {
      onDrag(info.point.x, info.point.y);
    }
  };

  return (
    <motion.div
      drag={!draggingId || isBeingDragged}
      dragMomentum={true}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
      onDragStart={onDragStart}
      onDrag={handleDrag}
      onDragEnd={onDragEnd}
      style={{
        position: 'absolute',
        left: `${skill.initialPos.x}%`,
        top: `${skill.initialPos.y}%`,
        x: isBeingDragged ? undefined : springX,
        y: isBeingDragged ? undefined : springY,
        cursor: 'grab',
        zIndex: isBeingDragged ? 20 : isCenter ? 10 : 5,
      }}
      animate={!draggingId && skill.animation ? {
        y: [0, -15, 0],
        x: skill.animation.delay > 1 ? [0, 10, 0] : [0, 5, 0],
      } : !draggingId && isCenter ? {
        y: [0, -10, 0],
      } : {}}
      transition={skill.animation ? {
        duration: skill.animation.duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: skill.animation.delay,
      } : isCenter && !draggingId ? {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      } : {}}
      whileHover={{ scale: 1.05 }}
      whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
    >
      <div className={skill.style}>
        {skill.name}
      </div>
    </motion.div>
  );
}

export default function SkillTree() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [dragPosition, setDragPosition] = useState<{ x: number; y: number } | null>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {skillsData.map((skill) => (
        <SkillCard
          key={skill.id}
          skill={skill}
          draggingId={draggingId}
          dragPosition={dragPosition}
          containerSize={containerSize}
          onDragStart={() => setDraggingId(skill.id)}
          onDrag={(x, y) => setDragPosition({ x, y })}
          onDragEnd={() => {
            setDraggingId(null);
            setDragPosition(null);
          }}
        />
      ))}

      {/* 背景光晕 */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
}
