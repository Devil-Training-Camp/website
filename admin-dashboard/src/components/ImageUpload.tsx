'use client'

interface ImageUploadProps {
  value?: string
  onChange: (value: string) => void
  onError: (error: string) => void
}

const MAX_FILE_SIZE = 3 * 1024 * 1024 // 3MB
const MAX_FILE_SIZE_MSG = '图片大小不能超过 3MB'

export default function ImageUpload({ value, onChange, onError }: ImageUploadProps) {
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files?.[0]
      console.log('图片上传:', file)
      if (!file) return

      // 验证文件类型
      if (!file.type.startsWith('image/')) {
        onError('请选择图片文件')
        return
      }

      // 验证文件大小（限制为 3MB）
      if (file.size > MAX_FILE_SIZE) {
        onError(MAX_FILE_SIZE_MSG)
        return
      }

      // 使用 Promise 包装 FileReader
      const base64String = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader()
        reader.onloadend = () => {
          const result = reader.result as string
          resolve(result)
        }
        reader.onerror = () => reject(new Error('图片读取失败'))
        reader.readAsDataURL(file)
      })

      console.log('图片转换成功，长度:', base64String.length) // 添加日志
      onChange(base64String)
    } catch (error) {
      console.error('图片处理失败:', error) // 添加错误日志
      onError(error instanceof Error ? error.message : '图片处理失败')
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          id="image-upload"
        />
        <label
          htmlFor="image-upload"
          className="px-4 py-2 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200 transition-colors"
        >
          选择图片
        </label>
        {value && (
          <button
            type="button"
            onClick={() => onChange('')}
            className="text-red-500 hover:text-red-700"
          >
            删除图片
          </button>
        )}
      </div>
      {value && (
        <div className="mt-2">
          <img
            src={value}
            alt="Preview"
            className="w-32 h-32 object-cover rounded-lg"
          />
        </div>
      )}
    </div>
  )
} 