import { getCourseById } from '@/services/courseService'
import { notFound } from 'next/navigation'

interface CoursePageProps {
  params: {
    id: string
  }
}

export default async function CoursePage({ params }: CoursePageProps) {
  try {
    const course = await getCourseById(Number(params.id))

    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {course.image && (
              <div className="aspect-video">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {course.title}
              </h1>
              {course.description && (
                <p className="text-gray-600 mb-6 text-lg">
                  {course.description}
                </p>
              )}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    ¥{course.price}
                  </div>
                  <div className="text-gray-500">课程价格</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {course.duration}
                  </div>
                  <div className="text-gray-500">课程时长</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {course.students}
                  </div>
                  <div className="text-gray-500">在学学员</div>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                立即报名
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    notFound()
  }
} 