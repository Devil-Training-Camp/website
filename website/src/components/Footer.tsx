export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <p className="mb-2">电话: 400-xxx-xxxx</p>
            <p>邮箱: contact@example.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">课程中心</h3>
            <ul className="space-y-2">
              <li>少儿编程</li>
              <li>高考冲刺</li>
              <li>考研辅导</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">关于我们</h3>
            <ul className="space-y-2">
              <li>机构介绍</li>
              <li>师资力量</li>
              <li>发展历程</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">关注我们</h3>
            <div className="flex space-x-4">
              {/* 这里可以添加社交媒体图标 */}
              <span>微信</span>
              <span>微博</span>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>© 2024 教育机构名称. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 