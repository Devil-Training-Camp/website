This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

这是一个基本的后台管理系统框架，包含了：
主页面：展示各个管理模块的入口
布局：包含侧边栏的整体布局
侧边栏：用于导航的组件
课程管理页面：展示课程列表和基本的管理功能
后续我们还需要添加：
用户认证系统 2. API 接口对接
表单处理和验证
图片上传功能
其他管理页面（Banner、关于我们等）

数据库相关：
Prisma (ORM)
npx prisma init
npx prisma migrate dev --name init 创建数据库并运行迁移
PostgreSQL (主数据库)
Redis (缓存层)
认证授权：
NextAuth.js (身份认证)
RBAC (基于角色的访问控制)
状态管理：
Zustand (轻量级状态管理)
React Query (服务端状态管理)
API 和数据验证：
Next.js API Routes
Zod (数据验证)
文件存储：
AWS S3/阿里云 OSS (文件存储)
部署和监控：
Docker (容器化)
PM2 (进程管理)
Sentry (错误监控)

## 数据库

是的,我来帮你解释如何设置 PostgreSQL 数据库和配置连接。

1. **安装 PostgreSQL**
   如果还没有安装 PostgreSQL，可以从官网下载安装：https://www.postgresql.org/download/

2. **创建数据库和用户**

使用 psql 命令行工具或 pgAdmin 图形界面工具来创建数据库和用户。这里展示命令行方式：

```bash
# 连接到 PostgreSQL
psql -U postgres

# 创建新用户（替换 your_username 和 your_password）
CREATE USER your_username WITH PASSWORD 'your_password';

# 创建数据库
CREATE DATABASE admin_dashboard;

# 授权给新用户
GRANT ALL PRIVILEGES ON DATABASE admin_dashboard TO your_username;
```

3. **更新 .env 文件**

然后需要更新 .env 文件中的连接字符串，替换用户名和密码：

```env:admin-dashboard/.env
DATABASE_URL="postgresql://your_username:your_password@localhost:5432/admin_dashboard"
```

连接字符串格式说明：

- `your_username`: 你创建的 PostgreSQL 用户名
- `your_password`: 该用户的密码
- `localhost`: 数据库主机地址
- `5432`: PostgreSQL 默认端口
- `admin_dashboard`: 数据库名称

4. **初始化数据库**

配置好后，运行 Prisma 迁移命令：

```bash
# 创建并应用迁移
npx prisma migrate dev --name init

# 生成 Prisma Client
npx prisma generate
```

5. **验证连接**

可以使用 Prisma Studio 来验证连接是否成功：

```bash
npx prisma studio
```

这将打开一个网页界面，你可以在其中查看和管理数据库。

安全提示：

- 生产环境中应该使用强密码
- 不要将包含实际密码的 .env 文件提交到版本控制系统
- 可以创建 .env.example 文件作为模板，其中使用示例值

需要我详细解释某个步骤吗？

prisma 迁移某个字段
npx prisma migrate dev --name update_image_field



登录功能


账号是由管理员创建的，密码是随机生成的，登录后可以修改密码

需要我继续完善其他功能吗？比如：
1. 管理员管理（创建、列表、删除等）
角色权限管理
登录日志
密码重置功能


