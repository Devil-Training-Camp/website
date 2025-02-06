import { Suspense } from 'react'
import { getCourses } from '@/services/courseService'
import Link from 'next/link'
import Image from 'next/image'

// 将课程部分抽取为单独的组件
async function FeaturedCourses() {
  const courses = await getCourses()
  const featuredCourses = courses.slice(0, 3)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredCourses.map((course) => (
        <Link
          key={course.id}
          href={`/courses/${course.id}`}
          className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div className="aspect-video relative">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
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

// 课程加载时的骨架屏
function CoursesSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="aspect-video bg-gray-200 animate-pulse" />
          <div className="p-6">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function HomePage() {
  return (
    <main>
      {/* Banner区域 - 静态内容立即显示 */}
      <section className="banner relative">
        <Image
          src="/images/banner.png"
          alt="Education Banner"
          fill
          className="object-cover z-[-1] animate-fadeIn"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 animate-slideIn">
          <h1>引领教育创新，塑造未来人才</h1>
          <p>20年专注教育，打造一流学习体验</p>
        </div>
      </section>

      {/* 课程介绍 - 使用 Suspense 包裹动态内容 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">精品课程</h2>
          <Suspense fallback={<CoursesSkeleton />}>
            <FeaturedCourses />
          </Suspense>
          <div className="text-center mt-8">
            <Link href="/courses" className="btn-primary">
              查看全部课程
            </Link>
          </div>
        </div>
      </section>

      {/* 关于我们 - 静态内容立即显示 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">关于我们</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/about-us.png"
                alt="关于我们"
                fill
                className="object-cover rounded-lg"
                sizes="50vw"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">专注教育20年，服务学员超过10000+</h3>
              <div className="space-y-4 text-gray-600">
                <p>我们始终秉持"以学生为中心"的教育理念，致力于为每一位学员提供优质的教育资源和个性化的学习方案。</p>
                <div className="grid grid-cols-2 gap-4 my-8">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                    <div className="text-gray-500">年教学经验</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">10000+</div>
                    <div className="text-gray-500">服务学员</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                    <div className="text-gray-500">学员好评</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-500">专职教师</div>
                  </div>
                </div>
                <Link href="/about" className="btn-primary inline-block">
                  了解更多
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
