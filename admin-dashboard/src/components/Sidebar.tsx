'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

interface MenuItem {
  label: string
  icon: string
  href?: string
  children?: MenuItem[]
}

const menuItems: MenuItem[] = [
  { 
    href: '/', 
    label: '控制台', 
    icon: '◈'
  },
  {
    label: '官网管理',
    icon: '◇',
    children: [
      { href: '/website/courses', label: '课程管理', icon: '◆' },
      { href: '/website/banners', label: 'Banner管理', icon: '◆' },
      { href: '/website/about', label: '关于我们', icon: '◆' },
      { href: '/website/news', label: '新闻动态', icon: '◆' },
    ]
  },
  {
    label: '用户管理',
    icon: '◇',
    children: [
      { href: '/users/students', label: '学员管理', icon: '◆' },
      { href: '/users/teachers', label: '教师管理', icon: '◆' },
      { href: '/users/admins', label: '管理员', icon: '◆' },
    ]
  },
  {
    label: '教务管理',
    icon: '◇',
    children: [
      { href: '/education/classes', label: '班级管理', icon: '◆' },
      { href: '/education/schedule', label: '课程排期', icon: '◆' },
      { href: '/education/attendance', label: '考勤管理', icon: '◆' },
    ]
  },
  {
    label: '财务管理',
    icon: '◇',
    children: [
      { href: '/finance/orders', label: '订单管理', icon: '◆' },
      { href: '/finance/payments', label: '收支明细', icon: '◆' },
      { href: '/finance/refunds', label: '退款管理', icon: '◆' },
    ]
  },
  {
    label: '数据统计',
    icon: '◇',
    children: [
      { href: '/stats/overview', label: '数据概览', icon: '◆' },
      { href: '/stats/sales', label: '销售统计', icon: '◆' },
      { href: '/stats/performance', label: '业绩分析', icon: '◆' },
    ]
  },
  {
    label: '系统设置',
    icon: '◇',
    children: [
      { href: '/settings/basic', label: '基础设置', icon: '◆' },
      { href: '/settings/roles', label: '角色权限', icon: '◆' },
      { href: '/settings/logs', label: '操作日志', icon: '◆' },
    ]
  },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState(new Set<string>())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // 在客户端加载时，从localStorage读取状态
    const saved = localStorage.getItem('sidebar_expanded_items')
    if (saved) {
      setExpandedItems(new Set(JSON.parse(saved)))
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    // 当路径改变时，确保当前菜单的父级展开
    const currentParent = menuItems.find(item => 
      item.children?.some(child => child.href === pathname)
    )
    if (currentParent && !expandedItems.has(currentParent.label)) {
      const newExpandedItems = new Set(expandedItems)
      newExpandedItems.add(currentParent.label)
      setExpandedItems(newExpandedItems)
      localStorage.setItem('sidebar_expanded_items', JSON.stringify(Array.from(newExpandedItems)))
    }
  }, [pathname, expandedItems])

  const toggleExpand = (label: string) => {
    setExpandedItems(prev => {
      const next = new Set(prev)
      if (next.has(label)) {
        next.delete(label)
      } else {
        next.add(label)
      }
      localStorage.setItem('sidebar_expanded_items', JSON.stringify(Array.from(next)))
      return next
    })
  }

  const renderMenuItem = (item: MenuItem) => {
    const isActive = item.href === pathname
    const hasChildren = item.children && item.children.length > 0
    const isExpanded = expandedItems.has(item.label)
    const isParentOfActive = item.children?.some(child => child.href === pathname)

    if (hasChildren) {
      return (
        <li key={item.label} className={`mb-2 ${isParentOfActive ? 'text-blue-400' : ''}`}>
          <button
            onClick={() => toggleExpand(item.label)}
            className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors
              ${isParentOfActive ? 'bg-slate-800/50' : 'hover:bg-slate-800/50'}`}
          >
            <div className="flex items-center">
              <span className="mr-2">{item.icon}</span>
              <span>{item.label}</span>
            </div>
            <span className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
          <ul className={`mt-1 ml-4 space-y-1 overflow-hidden transition-all duration-200 ${
            isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            {item.children.map(child => (
              <li key={child.href}>
                <Link
                  href={child.href || '#'}
                  className={`flex items-center px-3 py-2 text-sm rounded-lg transition-colors
                    ${child.href === pathname 
                      ? 'bg-blue-500/10 text-blue-500' 
                      : 'text-gray-400 hover:bg-slate-800 hover:text-gray-200'
                    }`}
                  prefetch={true}
                  scroll={false}
                >
                  <span className="mr-2">{child.icon}</span>
                  <span>{child.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      )
    }

    return (
      <li key={item.href}>
        <Link
          href={item.href || '#'}
          className={`flex items-center px-3 py-2 text-sm rounded-lg transition-colors
            ${isActive 
              ? 'bg-blue-500/10 text-blue-500' 
              : 'text-gray-400 hover:bg-slate-800 hover:text-gray-200'
            }`}
          prefetch={true}
          scroll={false}
        >
          <span className="mr-2">{item.icon}</span>
          <span>{item.label}</span>
        </Link>
      </li>
    )
  }

  // 如果还没有挂载，返回基础结构避免闪烁
  if (!mounted) {
    return (
      <div className="w-64 bg-slate-900 text-gray-100 min-h-screen">
        <div className="px-6 py-8 border-b border-slate-800">
          <h1 className="text-lg font-medium tracking-wider">后台管理系统</h1>
        </div>
        <nav className="mt-6 px-3">
          <ul className="space-y-1">
            {menuItems.map(item => (
              <li key={item.href || item.label}>
                <div className="flex items-center px-3 py-2 text-sm">
                  <span className="mr-2">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )
  }

  return (
    <div className="w-64 bg-slate-900 text-gray-100 min-h-screen">
      <div className="px-6 py-8 border-b border-slate-800">
        <h1 className="text-lg font-medium tracking-wider">后台管理系统</h1>
      </div>
      <nav className="mt-6 px-3">
        <ul className="space-y-1">
          {menuItems.map(renderMenuItem)}
        </ul>
      </nav>
    </div>
  )
} 