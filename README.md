## 双拼练习网站

这是一个基于 [Next.js](https://nextjs.org) 14.2.28 开发的现代双拼输入法练习网站。采用 React 18 和 TypeScript 构建，结合了最新的前端技术栈，为用户提供流畅、专业的双拼输入法学习体验。

## 特性

- ✨ 多种双拼方案支持（小鹤双拼、微软双拼等）
- ✨ 基于 **TailwindCSS 3.4** 的响应式设计
- ✨ 使用 **shadcn/ui** 组件库打造现代化界面
- ✨ **Zustand 5.0** 状态管理，支持数据持久化
- ✨ 内置明暗主题切换，支持系统主题跟随
- ✨ 键位可视化学习，带声音反馈
- ✨ 实时速度和准确率统计
- ✨ 完整的 TypeScript 类型支持
- ✨ Vitest 单元测试支持
- ✨ 移动端适配支持
- ✨ AI 辅助练习文本生成

## 环境要求

- Node.js 18+
- pnpm 8+

## 快速开始

推荐使用 pnpm 作为包管理工具：

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 即可开始练习。

## 项目结构

```
/
├── app/                    # Next.js App Router 路由
│   ├── (main)/            # 主要路由分组
│   │   ├── about/         # 关于页面
│   │   ├── practice/      # 练习页面
│   │   └── setting/       # 设置页面
│   ├── _config/           # 应用配置
│   └── _styles/           # 全局样式
├── components/            
│   ├── layout/           # 布局组件
│   ├── practice/         # 练习相关组件
│   └── ui/               # 基础UI组件
├── lib/                  
│   └── shuangpin/        # 双拼核心逻辑
├── public/               # 静态资源
│   ├── fonts/           # 字体文件
│   └── sounds/          # 音效文件
├── store/                # 状态管理
└── __tests__/           # 测试文件
```

## 核心功能

### 练习模式
- 🎯 键位学习：交互式键盘展示，帮助记忆双拼方案
- 📝 实时反馈：按键提示和错误提醒
- 🔊 声音反馈：错误输入时的声音提示
- 📊 数据统计：实时显示速度、准确率等指标
- 🤖 AI生成：支持AI生成个性化练习文本

### 配置选项
- 🎨 多主题支持：明亮/暗黑模式自由切换
- ⌨️ 多方案支持：可选择不同的双拼方案
- 🔧 自定义设置：声音开关等个性化配置
- 📱 移动设备支持：自适应布局

### 技术特点
- 🚀 App Router：采用 Next.js 14 新版路由
- 💎 状态管理：使用 Zustand 实现高效状态更新
- 🎯 单元测试：Vitest 确保代码质量
- 📱 响应式：完善的多设备适配

## 开发相关

### 构建生产版本
```bash
pnpm build
pnpm start
```

### 运行测试
```bash
pnpm test        # 运行所有测试
pnpm test:watch  # 监听模式运行测试
```

## 技术栈

- ⚡️ Next.js 14.2.28
- ⚛️ React 18
- 🎨 TailwindCSS 3.4.1
- 🎯 TypeScript 5
- 📦 Zustand 5.0.3
- 🧪 Vitest 3.1.1
- 🎁 pinyin-pro 3.26.0
- 🖼️ Radix UI
- 🎨 Lucide Icons
- 🎯 Shadcn UI

## 部署

推荐使用 [Vercel](https://vercel.com) 部署，支持：

- 🌍 自动化部署
- ⚡️ 边缘网络加速
- 📊 实时性能分析

## License

MIT © 2025
