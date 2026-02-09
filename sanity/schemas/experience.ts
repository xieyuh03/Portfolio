export default {
  name: 'experience',
  title: '工作经历',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: '职位名称',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'company',
      title: '公司名称',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'year',
      title: '年份',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: '工作描述',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'company',
    },
  },
};
