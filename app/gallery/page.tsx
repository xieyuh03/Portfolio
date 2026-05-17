'use client';

import Navigation from '@/components/Navigation';
import CustomCursor from '@/components/CustomCursor';
import CircularGallery from '@/components/effects/CircularGallery';

// ============================================================
//  替换本地图片步骤：
//  1. 把 AI 生成图按 1.jpg / 2.jpg / ... 命名放入 public/images/ai-gallery/
//  2. 把下面 USE_LOCAL 改为 true
//  3. 修改 LOCAL_COUNT 数量和 LOCAL_EXT 后缀（jpg / png / webp）
// ============================================================

const USE_LOCAL = false;
const LOCAL_COUNT = 8;
const LOCAL_EXT = 'jpg';

// GitHub Pages 部署用 basePath="/Portfolio"，本地 dev 时为空
const BASE = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

// 临时 demo 图（unsplash）—— 等本地 AI 图放进 public/ 后切换 USE_LOCAL=true
const demoItems = [
  'https://images.unsplash.com/photo-1545048702-79362596cdc9?w=900&q=80',
  'https://images.unsplash.com/photo-1633101585272-9e0b0c3d9404?w=900&q=80',
  'https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=900&q=80',
  'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=900&q=80',
  'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=900&q=80',
  'https://images.unsplash.com/photo-1604871000636-074fa5117945?w=900&q=80',
  'https://images.unsplash.com/photo-1574169208507-84376144848b?w=900&q=80',
  'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=900&q=80',
].map(image => ({ image, text: '' }));

const localItems = Array.from({ length: LOCAL_COUNT }, (_, i) => ({
  image: `${BASE}/images/ai-gallery/${i + 1}.${LOCAL_EXT}`,
  text: '',
}));

const items = USE_LOCAL ? localItems : demoItems;

export default function GalleryPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />

      <main className="relative min-h-screen bg-black">
        {/* CircularGallery 全屏沉浸 */}
        <div className="fixed inset-0 w-screen h-screen">
          <CircularGallery
            items={items}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            font="bold 24px Inter, sans-serif"
            scrollSpeed={1}
            scrollEase={0.05}
          />
        </div>
      </main>
    </>
  );
}
