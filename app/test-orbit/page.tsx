'use client';

import PlanetaryOrbit from '@/components/PlanetaryOrbit';

export default function TestOrbitPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-8">
          行星轨道系统测试
        </h1>

        <div className="mb-8">
          <PlanetaryOrbit />
        </div>

        <div className="text-gray-400 text-sm space-y-2">
          <p>点击头像可以切换旋转方向</p>
          <p>拖影应该沿着圆形轨道分布在行星后方</p>
        </div>
      </div>
    </div>
  );
}
