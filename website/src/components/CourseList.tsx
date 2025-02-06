'use client'

import { Course } from '@/types/course'
import Link from 'next/link'

interface CourseListProps {
  courses: Course[]
}

export default function CourseList({ courses }: CourseListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Link
          key={course.id}
          href={`/courses/${course.id}`}
          className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div className="aspect-video relative">
            {course.image ? (
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">暂无图片</span>
              </div>
            )}
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {course.title}
            </h3>
            {course.description && (
              <p className="text-gray-600 mb-4 line-clamp-2">
                {course.description}
              </p>
            )}
            <div className="flex justify-between items-center">
              <span className="text-blue-600 font-semibold">
                ¥{course.price}
              </span>
              <div className="text-gray-500 text-sm">
                <span className="mr-4">{course.duration}</span>
                <span>{course.students} 名学员</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
} 