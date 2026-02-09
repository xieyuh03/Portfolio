import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// Sanity 配置
// 注意：这些值需要在你创建 Sanity 项目后填入
export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
};

// 创建 Sanity 客户端
export const sanityClient = createClient(config);

// 图片 URL 构建器
const builder = imageUrlBuilder(sanityClient);

export function urlForImage(source: any) {
  return builder.image(source);
}

// GROQ 查询
export const queries = {
  // 获取所有项目
  allProjects: `*[_type == "project"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    mainImage,
    tags,
    projectUrl,
    githubUrl,
    publishedAt
  }`,

  // 获取单个项目
  projectBySlug: (slug: string) => `*[_type == "project" && slug.current == "${slug}"][0] {
    _id,
    title,
    slug,
    description,
    mainImage,
    tags,
    projectUrl,
    githubUrl,
    content,
    publishedAt
  }`,

  // 获取所有工作经历
  allExperiences: `*[_type == "experience"] | order(year desc) {
    _id,
    title,
    company,
    year,
    description
  }`,
};
