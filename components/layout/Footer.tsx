import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className=" text-sm text-muted-foreground">
          © {currentYear} 版权所有
        </div>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <a href="/about" className="hover:text-foreground transition-colors">
            关于我们
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            隐私政策
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            使用条款
          </a>
        </div>
      </div>
    </footer>
  );
}