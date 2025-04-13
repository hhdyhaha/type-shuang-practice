import React from 'react';
import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">关于双拼练习</h1>
      
      <div className="grid gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">项目简介</h2>
          <p className="text-lg mb-4">
            这是一个现代化的双拼输入法练习平台，专注于帮助用户掌握和提高双拼输入速度。项目采用 Next.js 14 和 TypeScript 构建，提供流畅的用户体验和实时反馈。
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">主要功能</h2>
          <ul className="text-lg space-y-3">
            <li>✨ 支持多种双拼方案（小鹤双拼、微软双拼等）</li>
            <li>✨ 交互式键盘显示，提供按键提示和实时反馈</li>
            <li>✨ 详细的练习统计，包括速度、准确率分析</li>
            <li>✨ 声音反馈选项，帮助更好地识别错误</li>
            <li>✨ 响应式设计，支持多种设备使用</li>
            <li>✨ 深色模式支持，保护您的眼睛</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">技术特点</h2>
          <ul className="text-lg space-y-3">
            <li>🚀 使用 Next.js 14 和 App Router 架构</li>
            <li>🎨 采用 TailwindCSS 和 shadcn/ui 构建现代化界面</li>
            <li>📊 使用 Zustand 进行状态管理</li>
            <li>🔍 TypeScript 确保代码类型安全</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">学习建议</h2>
          <p className="text-lg mb-4">
            双拼输入法通过将传统的拼音输入简化为两次按键，能够显著提高打字效率。建议初学者：
          </p>
          <ul className="text-lg list-disc pl-6 space-y-2">
            <li>从键位学习开始，熟悉双拼方案的编码规则</li>
            <li>循序渐进，从单字练习过渐到词组和文章练习</li>
            <li>保持练习的持续性，养成使用双拼的习惯</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}