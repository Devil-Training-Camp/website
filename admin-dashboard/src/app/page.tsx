import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-medium text-gray-900">控制台</h1>
          <p className="mt-1 text-sm text-gray-500">欢迎回来，这里是系统概览</p>
        </div>
        
        {/* 数据概览卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">今日访问</h3>
              <span className="text-blue-600">▲ 12%</span>
            </div>
            <p className="mt-2 text-3xl font-semibold text-gray-900">2,834</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">活跃用户</h3>
              <span className="text-green-600">▲ 8%</span>
            </div>
            <p className="mt-2 text-3xl font-semibold text-gray-900">1,253</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">订单总数</h3>
              <span className="text-blue-600">▲ 5%</span>
            </div>
            <p className="mt-2 text-3xl font-semibold text-gray-900">432</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">营收额</h3>
              <span className="text-green-600">▲ 15%</span>
            </div>
            <p className="mt-2 text-3xl font-semibold text-gray-900">¥89,432</p>
          </div>
        </div>
        
        {/* 快捷入口 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/website/courses" 
            className="group bg-white rounded-lg border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900 group-hover:text-blue-600">课程管理</h2>
              <span className="text-gray-400 group-hover:text-blue-600">→</span>
            </div>
            <p className="text-sm text-gray-500">查看和管理所有课程信息</p>
          </Link>
          
          <Link href="/users/students" 
            className="group bg-white rounded-lg border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900 group-hover:text-blue-600">学员管理</h2>
              <span className="text-gray-400 group-hover:text-blue-600">→</span>
            </div>
            <p className="text-sm text-gray-500">管理学员信息和学习进度</p>
          </Link>
          
          <Link href="/education/classes" 
            className="group bg-white rounded-lg border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900 group-hover:text-blue-600">班级管理</h2>
              <span className="text-gray-400 group-hover:text-blue-600">→</span>
            </div>
            <p className="text-sm text-gray-500">查看和管理班级信息</p>
          </Link>
          
          <Link href="/finance/orders" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">订单管理</h2>
            <p className="text-gray-600">处理课程订单和支付</p>
          </Link>
          
          <Link href="/stats/overview" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">数据概览</h2>
            <p className="text-gray-600">查看系统运营数据</p>
          </Link>
          
          <Link href="/settings/basic" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">系统设置</h2>
            <p className="text-gray-600">管理系统基础配置</p>
          </Link>
        </div>
      </div>
    </main>
  )
} 