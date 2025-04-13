import React from 'react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { schemes, ShuangpinScheme } from '@/lib/shuangpin/config'

interface SchemeSelectorProps {
  currentScheme: ShuangpinScheme
  onSchemeChange: (schemeName: keyof typeof schemes) => void
}

export function SchemeSelector({
  currentScheme,
  onSchemeChange
}: SchemeSelectorProps) {
  return (
    <div className="space-y-4">
      {/* 方案选择下拉菜单 */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">当前方案：</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">{currentScheme.name}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {Object.entries(schemes).map(([key, scheme]) => (
              <DropdownMenuItem
                key={key}
                onClick={() => onSchemeChange(key as keyof typeof schemes)}
              >
                {scheme.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* 方案信息展示 */}
      <div className="p-4 bg-muted rounded-lg">
        <h3 className="text-lg font-medium mb-2">{currentScheme.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">
          {currentScheme.description}
        </p>
        <p className="text-sm text-muted-foreground">
          作者：{currentScheme.author}
        </p>
      </div>
    </div>
  )
}