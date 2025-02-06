This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



实现表单验证和提交功能
添加动画效果

配置SEO优化
添加错误边界处理
实现数据加载状态
添加用户交互反馈


动画修改添加了
这些修改提供了：
更丰富的动画效果：
fadeInUp：从下往上淡入
fadeInLeft：从左往右淡入
fadeInRight：从右往左淡入
scaleIn：缩放淡入
滚动触发动画：
元素进入视口时触发动画
支持延迟动画
只触发一次
更好的性能：
使用 Intersection Observer API
动画完成后自动清理观察器
使用 CSS transforms 实现流畅动画
4. 可定制性：
支持自定义动画类型
支持自定义延迟时间
支持自定义类名





const featuredCourses: Course[] = [
  {
    id: 1,
    title: "少儿编程启蒙班",
    description: "为6-12岁儿童打造的趣味编程课程，激发创造力",
    price: 3999,
    students: 2000,
    duration: "3个月",
    image: "/images/courses/kids-coding.png"
  },
  {
    id: 2,
    title: "高考数学冲刺班",
    description: "针对性强化训练，快速提升数学成绩",
    price: 4999,
    students: 1500,
    duration: "6个月",
    image: "/images/courses/math.png"
  },
  {
    id: 3,
    title: "考研英语精品班",
    description: "系统备考规划，历年真题解析",
    price: 5999,
    students: 3000,
    duration: "12个月",
    image: "/images/courses/english.png"
  },
  {
    id: 4,
    title: "初中物理强化班",
    description: "趣味实验演示，理解物理概念",
    price: 3599,
    students: 1200,
    duration: "4个月",
    image: "/images/courses/physics.png"
  },
  {
    id: 5,
    title: "雅思托福冲刺班",
    description: "外教授课，突破语言障碍",
    price: 6999,
    students: 800,
    duration: "6个月",
    image: "/images/courses/ielts.png"
  },
  {
    id: 6,
    title: "高中化学提高班",
    description: "重点难点突破，提升解题能力",
    price: 4599,
    students: 1000,
    duration: "5个月",
    image: "/images/courses/chemistry.png"
  },
  {
    id: 7,
    title: "小学奥数培训班",
    description: "培养数学思维，提升解题能力",
    price: 3299,
    students: 2500,
    duration: "3个月",
    image: "/images/courses/math-olympiad.png"
  },
  {
    id: 8,
    title: "初高中作文指导",
    description: "系统提升写作能力，积累素材",
    price: 3799,
    students: 1800,
    duration: "4个月",
    image: "/images/courses/writing.png"
  },
  {
    id: 9,
    title: "艺考文化课补习",
    description: "艺考生文化课同步辅导",
    price: 5599,
    students: 600,
    duration: "8个月",
    image: "/images/courses/art-culture.png"
  },
  {
    id: 10,
    title: "中考全科辅导班",
    description: "全面提升，助力中考",
    price: 7999,
    students: 2200,
    duration: "12个月",
    image: "/images/courses/middle-exam.png"
  }
]