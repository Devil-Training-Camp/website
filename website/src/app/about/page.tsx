import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '关于我们 - 教育机构官网',
  description: '专注教育20年，服务学员超过10000+，打造一流学习体验',
}

interface Achievement {
  number: string
  label: string
  description: string
}

const achievements: Achievement[] = [
  {
    number: "20+",
    label: "年教学经验",
    description: "深耕教育领域，积累丰富的教学经验"
  },
  {
    number: "10000+",
    label: "服务学员",
    description: "帮助众多学员实现学习目标"
  },
  {
    number: "98%",
    label: "学员好评",
    description: "优质的教学质量获得学员认可"
  },
  {
    number: "500+",
    label: "专职教师",
    description: "优秀的教师团队保障教学质量"
  }
]

interface Milestone {
  year: string
  title: string
  description: string
}

const milestones: Milestone[] = [
  {
    year: "2004",
    title: "教育机构成立",
    description: "开始专注于教育培训领域"
  },
  {
    year: "2010",
    title: "规模扩大",
    description: "服务学员突破1000人"
  },
  {
    year: "2015",
    title: "多元化发展",
    description: "开设多个分校，课程体系更加完善"
  },
  {
    year: "2020",
    title: "线上转型",
    description: "推出线上课程，实现教育资源共享"
  },
  {
    year: "2024",
    title: "持续创新",
    description: "引入AI教学，打造智慧课堂"
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* 头部横幅 */}
      <div className="relative h-[300px] bg-blue-600">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">关于我们</h1>
          <p className="text-xl">专注教育20年，为学员提供优质的学习体验</p>
        </div>
      </div>

      {/* 机构介绍 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">教育理念</h2>
              <div className="space-y-4 text-gray-600">
                <p>我们始终秉持"以学生为中心"的教育理念，致力于为每一位学员提供优质的教育资源和个性化的学习方案。</p>
                <p>通过专业的教学团队、科学的教学方法、完善的课程体系，帮助学员实现学习目标，提升综合能力。</p>
              </div>
            </div>
            <div className="relative aspect-video">
              <Image
                src="/images/about/education.png"
                alt="教育理念"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 成就展示 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">我们的成就</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-xl font-semibold mb-2">{achievement.label}</div>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">发展历程</h2>
          <div className="relative">
            {/* 时间线 */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                  <div className="relative flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full">
                    <div className="absolute inset-0 bg-blue-600/50 rounded-full animate-ping" />
                  </div>
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">联系我们</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-2">电话咨询</h3>
              <p className="text-gray-600">400-xxx-xxxx</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-2">邮件咨询</h3>
              <p className="text-gray-600">contact@example.com</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2">来访咨询</h3>
              <p className="text-gray-600">北京市朝阳区xxx大厦</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 