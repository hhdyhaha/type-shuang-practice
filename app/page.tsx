import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, FileText, CircleCheck, Cog } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">掌握双拼打字</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          使用我们专注的练习平台，提高您的中文打字速度和准确性。通过互动练习学习双拼方案。
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button size="lg">开始练习 <ArrowRight className="ml-2 h-4 w-4" /></Button>
          <Button variant="outline" size="lg">自定义设置</Button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card className="flex flex-col items-center">
          <CardHeader className="flex items-center">
            <div className="bg-gray-200 p-2 rounded-full">
              <FileText />
            </div>
            <CardTitle>追踪进度</CardTitle>
          </CardHeader>
          <CardContent>
            <p>通过详细的统计数据监控您的打字速度和准确性</p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center">
          <CardHeader className="flex items-center">
            <div className="bg-gray-200 p-2 rounded-full">
              <CircleCheck />
            </div>
            <CardTitle>实时反馈</CardTitle>
          </CardHeader>
          <CardContent>
            <p>通过有用的纠正建议获得有关您打字的即时反馈</p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center">
          <CardHeader className="flex items-center">
            <div className="bg-gray-200 p-2 rounded-full">
              <Cog />
            </div>
            <CardTitle>多种方案</CardTitle>
          </CardHeader>
          <CardContent>
            <p>使用不同的双拼方案进行练习，例如小号和自然码</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
