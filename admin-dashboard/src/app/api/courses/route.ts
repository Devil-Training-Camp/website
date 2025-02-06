import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

// 更新验证 schema，确保接受 base64 图片
const CourseSchema = z.object({
  title: z.string().min(1, '标题不能为空'),
  description: z.string().optional(),
  price: z.number().positive('价格必须大于0'),
  duration: z.string().min(1, '课程时长不能为空'),
  image: z.string().optional(), // 允许 base64 字符串
})

export async function GET() {
  try {
    const courses = await prisma.course.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(courses)
  } catch (error) {
    console.error('获取课程失败:', error)
    return NextResponse.json(
      { error: '获取课程列表失败' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const body = CourseSchema.parse({
      ...json,
      price: Number(json.price),
    })

    console.log('创建课程数据:', body) // 添加日志

    const course = await prisma.course.create({
      data: body
    })

    return NextResponse.json(course)
  } catch (error) {
    console.error('创建课程失败:', error) // 添加错误日志
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: '数据验证失败', details: error.errors },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: '创建课程失败' },
      { status: 500 }
    )
  }
} 