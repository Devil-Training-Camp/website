import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'

const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET

export async function POST(request: Request) {
  try {
    const { tag, secret } = await request.json()

    if (secret !== REVALIDATE_SECRET) {
      return NextResponse.json({ error: '无效的密钥' }, { status: 401 })
    }

    revalidateTag(tag)
    return NextResponse.json({ revalidated: true, tag })
  } catch (error) {
    return NextResponse.json({ error: '重新验证失败' }, { status: 500 })
  }
} 