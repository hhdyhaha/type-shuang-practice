# 项目测试策略

## 测试策略概述

本项目采用专注于核心逻辑的测试策略：

1. **核心逻辑测试**：专注于状态管理、业务逻辑等核心功能
2. **公共函数测试**：工具函数、辅助方法等
3. **关键组件行为测试**：组件交互、回调函数调用、状态更新等

## 测试原则

所有测试应遵循以下原则：

- **测试核心逻辑**：状态管理、业务逻辑、计算函数等
- **测试公共函数**：工具函数、辅助方法等
- **测试关键组件行为**：组件交互、回调函数调用、状态更新等
- **避免测试实现细节**：专注于测试输入/输出，而不是内部实现
- **避免UI和流程测试**：UI测试应通过手动检查完成，流程测试应留给端到端测试

## 文件结构

```
__tests__/
  ├── components/             # 组件行为测试
  │   └── ComponentName.test.tsx
  ├── store/                  # 状态管理测试
  ├── lib/                    # 公共函数测试
  └── integration/            # 核心集成测试
```

## 测试文件命名约定

- 组件测试：`ComponentName.test.tsx`
- 状态管理测试：`useStoreName.test.ts`
- 工具函数测试：`utilName.test.ts`
- 集成测试：`feature.test.tsx`

## Mock 策略

- 使用 `vi.mock()` 隔离依赖
- 为外部服务和API创建mock
- 为复杂组件创建测试替身

## 测试命令

```bash
# 运行所有核心测试
npm run test
# 或
npm run test:core

# 只运行核心逻辑测试（状态管理）
npm run test:logic

# 只运行公共函数测试
npm run test:function

# 只运行组件行为测试
npm run test:component

# 监视模式运行测试
npm run test:watch

# 生成测试覆盖率报告
npm run test:coverage
```

## 最佳实践

1. 保持测试简单明确
2. 一个测试只测试一个概念
3. 使用有意义的测试名称
4. 避免测试内部实现细节
5. 使用测试替身隔离测试目标
6. 维护测试代码质量与产品代码同等重要 