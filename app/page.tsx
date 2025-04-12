import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Counter from "./components/Counter";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">欢迎使用 Next.js 框架</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          这是一个基于 Next.js 和 TailwindCSS 构建的应用框架，包含常用组件和功能。
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button size="lg">开始使用</Button>
          <Button variant="outline" size="lg">了解更多</Button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>组件化开发</CardTitle>
          </CardHeader>
          <CardContent>
            <p>使用预定义的组件快速构建界面，包括导航栏、按钮、卡片等。</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>服务端组件</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Next.js 的服务端组件可以减少客户端 JavaScript 体积，提高页面加载速度。</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>路由系统</CardTitle>
          </CardHeader>
          <CardContent>
            <p>基于文件系统的路由，简单直观。包含分组路由、动态路由等高级特性。</p>
          </CardContent>
        </Card>
      </section>

      {/* Zustand 状态管理示例 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Zustand 状态管理</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Counter />
          <Card>
            <CardHeader>
              <CardTitle>Zustand 特点</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>轻量级，体积小</li>
                <li>使用简单，无样板代码</li>
                <li>支持中间件（持久化、订阅等）</li>
                <li>支持 TypeScript</li>
                <li>可组合多个 Store</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
