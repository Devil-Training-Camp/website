import { Course } from '@/types/course'

export const allCourses: Course[] = [
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
  // ... 其他课程数据
] 