import { getCourses } from '@/services/courseService'
import CourseList from '@/components/CourseList'

export const revalidate = 3600 // 1小时重新验证一次

export default async function CoursesPage() {
  const courses = await getCourses()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">课程列表</h1>
      <CourseList courses={courses} />
    </div>
  )
} 