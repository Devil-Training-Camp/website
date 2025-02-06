import { Course } from '@/types/course'
import { revalidateTag } from 'next/cache'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

/**
 * 获取所有课程列表
 */
export async function getCourses(): Promise<Course[]> {
  const response = await fetch(`${API_URL}/api/courses`, {
    next: {
      tags: ['courses'], // 添加标签用于验证
      // revalidate: 360   // 1小时后重新验证
    }
  })

  if (!response.ok) {
    throw new Error('获取课程列表失败')
  }

  return response.json()
}

/**
 * 获取单个课程详情
 */
export async function getCourseById(id: number): Promise<Course> {
  const response = await fetch(`${API_URL}/api/courses/${id}`, {
    next: {
      tags: [`course-${id}`], // 为每个课程添加唯一标签
      revalidate: 3600
    }
  })

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('课程不存在')
    }
    throw new Error('获取课程详情失败')
  }

  return response.json()
}

/**
 * 手动触发数据重新验证
 */
export async function revalidateCourses() {
  revalidateTag('courses')
}

export async function revalidateCourse(id: number) {
  revalidateTag(`course-${id}`)
} 