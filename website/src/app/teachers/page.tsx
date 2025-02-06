import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '教师团队 - 教育机构官网',
  description: '优秀的教师团队，丰富的教学经验',
}

interface Teacher {
  id: number
  name: string
  title: string
  description: string
  image: string
}

const teachers: Teacher[] = [
  {
    id: 1,
    name: "张老师",
    title: "高级教师",
    description: "从教15年，专注高考数学辅导",
    image: "/images/teachers/teacher1.jpg"
  },
  // ... 更多教师信息
]

export default function TeachersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">教师团队</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              {/* 这里需要添加 next/image 组件 */}
            </div>
            <h3 className="text-xl font-bold mb-2">{teacher.name}</h3>
            <p className="text-blue-600 mb-2">{teacher.title}</p>
            <p className="text-gray-600">{teacher.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 