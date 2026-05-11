# Helo 未登录首页从原型到生产结构的拆解过程

## 主题

把 Helo 未登录首页从一个原型大文件，拆成内容层、组件层、hooks 层和 CSS 层的完整过程。

## 日期

2026-05-08

## 背景

Helo 首页最开始是一个高保真原型，目标不是先做“工程最优”，而是先把 Manychat 风格复刻到位，确认首屏、动效、节奏和转化路径都正确。

原型阶段为了快速调整，首页几乎都堆在 `app/page.tsx` 和 `app/globals.css` 里。这样做的好处是改动快，但缺点也很明显：

- 文案、结构、交互混在一起
- 一个文件太长，维护困难
- 每次改一屏都要在大文件里找位置
- 中英文内容、滚动逻辑、视觉结构互相缠在一起

所以这次的目标不是改视觉，而是把已经定下来的首页原型，拆成更像真实项目的结构。

## 先保留原型基准

在重构开始前，先冻结了一份当前原型，放在：

- `/Users/hlstart/Ysport/PROJECT/helo/docs/homepage-prototype-baseline/page.prototype.tsx`
- `/Users/hlstart/Ysport/PROJECT/helo/docs/homepage-prototype-baseline/globals.prototype.css`

这一步的意义是：

- 重构时不会丢掉当前视觉结果
- 任何时候都能回看“原型最终长什么样”
- 如果后面拆分后视觉出问题，可以和基准文件对照

这个基准目录只做参考，不参与运行。

## 整体拆解顺序

这次不是一口气改成很多文件，而是按层级拆：

1. 先拆内容数据
2. 再拆页面 section 组件
3. 再拆滚动和交互 hooks
4. 最后拆 CSS
5. 再清理掉 `page.tsx` 里残留的无用小函数

这样拆的原因是：

- 内容最稳定，先抽出来最安全
- 页面结构其次，拆 section 最容易理解
- 动效逻辑单独抽成 hooks 后，组件会更纯
- CSS 最后拆，可以最大程度避免视觉跑偏

## 1. 内容层拆分

### 文件

- `/Users/hlstart/Ysport/PROJECT/helo/content/home.ts`

### 这个文件是干什么的

它只负责“首页显示什么内容”，不负责“怎么展示”。

里面放了：

- `Locale` 类型：`zh | en`
- `Copy` 类型：定义首页内容结构
- `copy.zh`：中文内容
- `copy.en`：英文内容

具体内容包括：

- 顶部导航文案
- 首屏标题、副标题、按钮
- 聊天气泡文案
- Proof 条内容
- 第二屏滚动故事
- Before / After 文案
- 第四屏场景列表
- 第五屏三步、FAQ、最终 CTA、footer 文案

### 这一步的作用

把首页所有文字和数据从 `app/page.tsx` 里搬出去，让页面组件不再夹着大量字符串。

这样以后改文案时：

- 不需要进组件里找字
- 不会误伤结构代码
- 中英文内容一眼能比对

## 2. 页面结构拆分

### 原始文件

- `/Users/hlstart/Ysport/PROJECT/helo/app/page.tsx`

### 现在 `page.tsx` 还负责什么

现在它只负责“组装首页”：

- 引入各个 section 组件
- 读取 `content/home.ts`
- 管理首页最外层语言状态
- 把第三屏需要的 `compareProgress` CSS 变量接到 `main` 上

它不再负责具体的 section 结构，也不再写大量文案和小逻辑。

### 已拆出的 section 组件

#### 首屏

- 文件：`/Users/hlstart/Ysport/PROJECT/helo/components/home/HeroSection.tsx`
- 作用：首屏 Hero
- 对应页面：首页第 1 屏
- 内容：顶部导航、语言切换、Hero 标题、主 CTA、聊天演示、sticky nav 状态

#### 第二屏

- 文件：`/Users/hlstart/Ysport/PROJECT/helo/components/home/LoopShowcaseSection.tsx`
- 作用：产品闭环说明
- 对应页面：首页第 2 屏
- 内容：proof 条、intro、滚动故事、右侧 mockup、第二屏滚动切换效果

#### 第三屏

- 文件：`/Users/hlstart/Ysport/PROJECT/helo/components/home/BeforeAfterSection.tsx`
- 作用：Before / After 对比
- 对应页面：首页第 3 屏
- 内容：标题、Before 卡、After 卡、双 CTA、sticky 叠卡结构

#### 第四屏

- 文件：`/Users/hlstart/Ysport/PROJECT/helo/components/home/MentorTemplatesSection.tsx`
- 作用：目标模板 / 使用场景
- 对应页面：首页第 4 屏
- 内容：场景列表、右侧预览、场景切换状态

#### 第五屏

- 文件：`/Users/hlstart/Ysport/PROJECT/helo/components/home/FinalConversionSection.tsx`
- 作用：最终收口区
- 对应页面：首页第 5 屏
- 内容：三步开始、FAQ、最终 CTA、footer

### 为什么这样拆

因为每一屏都有自己的职责：

- Hero 是最复杂的首屏
- LoopShowcase 有自己的滚动状态
- Before / After 有自己的 compare 进度
- Templates 有自己的场景切换
- FinalConversion 是连续收口系统

把它们拆开后，`page.tsx` 就从一个巨型页面文件变成了“首页装配器”。

## 3. hooks 层拆分

### 文件

- `/Users/hlstart/Ysport/PROJECT/helo/hooks/useStickyNav.ts`
- `/Users/hlstart/Ysport/PROJECT/helo/hooks/useLoopStep.ts`
- `/Users/hlstart/Ysport/PROJECT/helo/hooks/useActiveScene.ts`
- `/Users/hlstart/Ysport/PROJECT/helo/hooks/useCompareProgress.ts`

### 每个 hook 是干什么的

#### `useStickyNav.ts`

- 给首屏导航用
- 负责判断页面是否滚过阈值
- 返回 `isStuck`
- 对应 Hero 的 sticky 顶部栏状态

#### `useLoopStep.ts`

- 给第二屏用
- 根据滚动位置计算当前 active step
- 返回 `activeLoopStep`
- 控制第二屏故事卡和右侧 mockup 的切换

#### `useActiveScene.ts`

- 给第四屏用
- 管理当前场景列表选中项
- 返回 `[activeScene, setActiveScene]`
- 控制模板场景切换

#### `useCompareProgress.ts`

- 给第三屏用
- 根据 `.compare-track` 的滚动位置计算进度
- 返回 `compareProgress`
- 控制 Before / After 的 sticky 叠卡进度

### 为什么要抽 hooks

因为这些逻辑都不是“页面展示”，而是“页面怎么动”。

抽成 hooks 后：

- section 组件更纯
- 滚动逻辑不再混在 JSX 里
- 后面调动效只改 hook，不用改组件结构

## 4. CSS 层拆分

### 文件

- `/Users/hlstart/Ysport/PROJECT/helo/app/globals.css`
- `/Users/hlstart/Ysport/PROJECT/helo/app/home-sections.css`

### 这次怎么拆的

`globals.css` 现在保留：

- `tailwind` 引入
- CSS 变量
- 全局 reset
- `body`、`html`、`a`、`button` 等基础规则

`home-sections.css` 承担：

- 首屏样式
- 第二屏样式
- 第三屏样式
- 第四屏样式
- 第五屏样式
- 各个 section 的响应式规则

### 为什么这样拆

因为首页 section 的样式占了大头，继续堆在 `globals.css` 里会越来越难找。

拆成两个文件以后：

- 基础样式和业务样式分开
- 页面结构和视觉细节更容易定位
- 后面如果再拆成模块 CSS，也更有空间

## 5. 清理无用小函数

### 被删除的旧函数

- `FeatureShowcase`
- `MessageBubble`
- `Human`
- 旧版 `Task`

### 为什么删

这些函数最初都写在 `app/page.tsx` 里，但后来：

- `FeatureShowcase` 没有再参与首页渲染
- `MessageBubble` 没有在新结构里继续使用
- `Human` 没有被后续 section 接上
- `Task` 已经被移到 `FinalConversionSection.tsx` 里重新定义

如果不删掉，`page.tsx` 虽然还能跑，但会像一个“什么都留着的旧抽屉”，看起来干净，实际上里头很多东西已经没用了。

删掉后，`page.tsx` 变得更像真正的装配入口。

## 6. 当前文件结构和职责

### 首页主入口

- `/Users/hlstart/Ysport/PROJECT/helo/app/page.tsx`
- 作用：总装配，串起整个首页

### 全局基础样式

- `/Users/hlstart/Ysport/PROJECT/helo/app/globals.css`
- 作用：全局变量、reset、基础样式入口

### 首页 section 样式

- `/Users/hlstart/Ysport/PROJECT/helo/app/home-sections.css`
- 作用：首页各 section 的具体视觉样式

### 内容数据

- `/Users/hlstart/Ysport/PROJECT/helo/content/home.ts`
- 作用：首页中英文内容、FAQ、场景、按钮文案、类型定义

### 首屏组件

- `/Users/hlstart/Ysport/PROJECT/helo/components/home/HeroSection.tsx`
- 作用：首页第 1 屏

### 第二屏组件

- `/Users/hlstart/Ysport/PROJECT/helo/components/home/LoopShowcaseSection.tsx`
- 作用：首页第 2 屏

### 第三屏组件

- `/Users/hlstart/Ysport/PROJECT/helo/components/home/BeforeAfterSection.tsx`
- 作用：首页第 3 屏

### 第四屏组件

- `/Users/hlstart/Ysport/PROJECT/helo/components/home/MentorTemplatesSection.tsx`
- 作用：首页第 4 屏

### 第五屏组件

- `/Users/hlstart/Ysport/PROJECT/helo/components/home/FinalConversionSection.tsx`
- 作用：首页第 5 屏收口

### 动效 hooks

- `/Users/hlstart/Ysport/PROJECT/helo/hooks/useStickyNav.ts`
- `/Users/hlstart/Ysport/PROJECT/helo/hooks/useLoopStep.ts`
- `/Users/hlstart/Ysport/PROJECT/helo/hooks/useActiveScene.ts`
- `/Users/hlstart/Ysport/PROJECT/helo/hooks/useCompareProgress.ts`

### 原型冻结目录

- `/Users/hlstart/Ysport/PROJECT/helo/docs/homepage-prototype-baseline/`
- 作用：保存原型定稿的 page 和 css 备份，只做参考

## 7. 重构后的分层关系

现在首页已经拆成四层：

1. 内容层
2. 组件层
3. 动效逻辑层
4. CSS 层

可以简单理解成：

- `content/home.ts`：写什么
- `components/home/*.tsx`：怎么摆
- `hooks/*.ts`：怎么动
- `app/home-sections.css`：长什么样

`app/page.tsx` 现在只负责把这四层组起来。

## 8. 验证结果

重构过程中每一步都做了验证：

- 先冻结原型
- 再拆内容
- 再拆 section
- 再拆动效 hook
- 再拆 CSS
- 每次都跑 `npm run build`

最终构建通过，说明拆分后：

- 类型没有断
- 页面没有坏
- section 之间引用正常
- CSS 仍然能正确加载

## 9. 这次重构的结论

这次首页已经从“一个原型大文件”变成了“一个首页入口 + 内容层 + 5 个 section + 4 个 hooks + 分离后的 CSS”。

它现在更接近真实项目的形态，也更方便后续继续开发：

- 以后改文案只动 `content/home.ts`
- 以后改 Hero 只动 `HeroSection.tsx`
- 以后改滚动逻辑只动对应 hook
- 以后改 section 样式只动 `home-sections.css`

这就是这次拆解最核心的结果。

