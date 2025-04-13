import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">关于我们</h1>
      <p className="text-lg mb-4">
        这是一个使用Next.js和TailwindCSS构建的示例项目。
      </p>
      <p className="text-lg mb-4">
        Next.js是一个React框架，它提供了构建现代Web应用所需的所有功能。
      </p>
      <p className="text-lg">
        通过App Router架构，我们可以轻松创建路由和页面组件。
      </p>
    </div>
  );
}