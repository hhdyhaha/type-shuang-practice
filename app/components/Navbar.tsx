'use client'

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-background border-b sticky w-full top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <span className="font-bold text-xl">双拼练习</span>
              <span className="text-sm text-muted-foreground">Dual Pinyin Practice</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                实践
              </Link>
              <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                设置
              </Link>
              <Button variant="outline" size="sm">
                登录/注册
              </Button>
            </div>
            
            <ThemeToggle />
            
            <div className="md:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">打开菜单</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetTitle>导航菜单</SheetTitle>
                  <SheetDescription>
                    选择以下链接导航到对应页面
                  </SheetDescription>
                  <div className="flex flex-col space-y-3 mt-8">
                    <Link 
                      href="/" 
                      className="px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
                      onClick={() => setOpen(false)}
                    >
                      首页
                    </Link>
                    <Link 
                      href="/about" 
                      className="px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
                      onClick={() => setOpen(false)}
                    >
                      关于
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 