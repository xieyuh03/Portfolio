export default {
  name: 'project',
  title: '项目',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: '项目名称',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL 别名',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: '简短描述',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: '项目封面图',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'tags',
      title: '技术标签',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'projectUrl',
      title: '项目链接',
      type: 'url',
    },
    {
      name: 'githubUrl',
      title: 'GitHub 链接',
      type: 'url',
    },
    {
      name: 'content',
      title: '详细内容',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'publishedAt',
      title: '发布日期',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
};
