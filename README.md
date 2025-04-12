# 双拼练习网站

这是一个基于 [Next.js](https://nextjs.org) 14.2.28 开发的双拼输入法练习网站，结合了现代前端技术，为用户提供流畅、友好的双拼输入法学习体验。

## 特性

- ✅ 多种双拼方案支持（小鹤双拼、自然码等）
- ✅ 基于 **TailwindCSS** 的响应式设计
- ✅ 使用 **shadcn/ui** 组件库的现代界面
- ✅ **Zustand** 状态管理实现打字进度跟踪
- ✅ 内置明暗主题切换
- ✅ 使用 **TypeScript** 确保类型安全
- ✅ 自定义练习文本支持
- ✅ 详细的练习数据统计与分析

## 快速开始

首先，安装依赖并运行开发服务器（推荐使用 pnpm）:

```bash
# 安装依赖（推荐使用pnpm）
pnpm install
# 或
npm install
# 或
yarn install

# 启动开发服务器
pnpm dev
# 或
npm run dev
# 或
yarn dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 开始练习双拼输入法。

## 项目结构

```
/
├── app/                  # Next.js App Router
│   ├── components/       # 应用级UI组件
│   ├── (routes)/         # 路由分组
│   ├── store/            # Zustand 状态管理
│   ├── lib/              # 工具函数和库
│   ├── providers.tsx     # 全局Provider
│   ├── layout.tsx        # 根布局
│   └── page.tsx          # 首页
├── components/           # 全局共享组件
│   └── ui/               # 基础UI组件(shadcn/ui)
├── public/               # 静态资源
└── ...配置文件
```

## 主要功能

### 双拼练习模式

本网站提供多种练习模式，帮助用户从不同角度掌握双拼输入法：

- **键位学习**：交互式键盘展示双拼方案的编码规则
- **单字练习**：针对常用汉字进行练习
- **词组练习**：提升常用词组的输入速度
- **文章练习**：在真实语境中提高输入效率

### 数据统计

应用使用 Zustand 管理用户练习数据，包括：

- 输入速度（字/分钟）
- 正确率统计
- 薄弱点分析
- 进步曲线展示

### 主题支持

内置明暗主题切换，支持:

- 明亮模式
- 暗黑模式
- 跟随系统设置

主题状态使用 Zustand 持久化到 localStorage。

## 构建生产版本

```bash
pnpm build
# 或
npm run build
# 或
yarn build
```

生成的应用可以用下面的命令启动:

```bash
pnpm start
# 或
npm run start
# 或
yarn start
```

## 学习双拼输入法

双拼输入法是一种高效的中文输入方式，每个汉字的拼音需要敲击两次键盘即可输入。相比传统全拼，双拼可以大大提高打字速度，减少击键次数。

初学者可以从键位学习开始，逐步过渡到实际文章的练习，持之以恒必有成效。

## 技术支持

项目使用以下技术栈：

- [Next.js](https://nextjs.org/docs) - React 框架
- [TailwindCSS](https://tailwindcss.com/docs) - 实用优先的 CSS 框架
- [shadcn/ui](https://ui.shadcn.com/) - 高质量 UI 组件库
- [Zustand](https://github.com/pmndrs/zustand) - 简洁高效的状态管理

## 部署

推荐使用 [Vercel](https://vercel.com) 部署本应用，只需几分钟即可完成部署并获得全球 CDN 加速。
