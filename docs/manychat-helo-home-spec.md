# Manychat 风格 Helo 首页复刻规范

版本：0.2  
最后更新：2026-05-05  
状态：执行版规范。后续多会话协作、视觉拆解、内容映射和代码实现都以本文件为准。

## 0. 使用方式

任何新会话开始前，先完成三步：

1. 读取本文件，并确认顶部版本号。
2. 读取对应参考图或补充文档。
3. 明确自己的角色：拆解、内容映射、图片素材或主实现。

如果本文件和聊天记录冲突，以本文件为准。如果本文件和当前代码冲突，先向主实现会话确认，不要自行覆盖代码。

## 1. 文档目的

这份文档是 Helo 首页复刻工作的统一规范源。后续所有会话如果要参与首页设计、内容映射、视觉素材准备或代码实现，都必须先读取这份文档，再开始工作。

这份文档解决的核心问题不是“记录灵感”，而是统一以下内容：

- 主参考网站是谁
- 首页总共做几屏
- 每一屏的结构和职责是什么
- 全局视觉规则是什么
- 哪些内容可以复刻，哪些内容必须替换
- 各类会话分别该做什么、不该做什么

## 2. 项目背景

### 2.1 产品定位

Helo 是一个陪伴式 AI 目标导师产品，帮助用户把短期目标拆解成每日任务，通过 AI 陪跑、提问验收、长期记忆和邮件提醒推动真实行动。

### 2.2 首页的核心任务

首页不是展示完整产品深度，而是完成以下 5 件事：

1. 让用户迅速理解 Helo 是什么
2. 让用户感受到产品气质可信、温柔、有结构
3. 让用户看懂 Helo 是如何推进目标的
4. 让用户理解使用前后会有什么变化
5. 让用户愿意立即试一次

### 2.3 当前约束

- 当前首页采用 Manychat 作为主复刻对象
- 首页结构压缩为 5 屏，不做 Manychat 完整长页照搬
- 目前优先做桌面端
- 后续如需并行多会话，必须都基于本文件工作

## 3. 参考策略

### 3.1 主参考网站

- 主参考：Manychat

选择原因：

- 商业首页结构成熟
- Hero 转化能力强
- 模块顺序适合“快速理解 + 快速行动”的产品
- 视觉气质偏成熟 SaaS，而不是插画型或内容型网站

### 3.2 不直接照搬的内容

虽然主参考是 Manychat，但以下内容不应原样复制：

- 原站文案
- 原站品牌 logo
- 原站真实客户背书
- 原站产品截图
- 原站创作者案例数据

### 3.3 需要改造的关键点

Manychat 的很多模块是围绕“成熟营销自动化 SaaS”设计的，Helo 需要改造为更适合“早期 AI 目标导师产品”的表达方式。

尤其是：

- Manychat 第 2 屏的社会证明带，不直接照搬
- 首页重点从“很多人在用我”改为“我如何帮助你推进目标”

## 4. 首页信息架构

首页压缩为 5 屏：

1. Hero 首屏
2. 产品闭环说明屏
3. Before / After 对比屏
4. 模板 / 使用场景屏
5. 开始方式 + FAQ + 最终 CTA 屏

### 4.1 5 屏与 Manychat 的对应关系

#### 第 1 屏：Hero

对应 Manychat 原第 1 屏。

保留：

- 左文案右主视觉
- 顶部透明导航
- 主 CTA
- 右下浮动聊天卡
- 滚动后吸顶 top bar

替换：

- 背景图改为更适合 Helo 的导师型摄影
- 文案改为目标推进、陪跑、验收逻辑

#### 第 2 屏：产品闭环说明

主要对应 Manychat 原第 3 屏“核心能力说明”。

这一屏功能上替代掉 Manychat 原第 2 屏社会证明屏。目标不是做品牌背书，而是解释 Helo 的工作方式。

#### 第 3 屏：Before / After

对应 Manychat 原第 4 屏。

保留双栏强对比结构，但内容从营销自动化场景改为目标执行状态前后对比。

#### 第 4 屏：模板 / 使用场景

对应 Manychat 原第 5 屏。

保留“左侧场景列表 + 右侧预览”的理解方式，用于展示 Helo 支持的典型目标场景。

#### 第 5 屏：开始方式 + FAQ + 最终 CTA

合并 Manychat 原第 6 屏、原第 7 屏和收尾 CTA。

目的：

- 缩短页面长度
- 保持转化节奏集中
- 减少信息稀释

## 4.2 参考图索引

当前可用参考图：

| 用途 | 路径 | 说明 |
| --- | --- | --- |
| Manychat Hero 参考 | `docs/pencil-prototypes/reference/manychat-hero.png` | 当前文件中 Hero 复刻讨论的首屏基准图。注意：该图可能来自受 Cloudflare 影响的抓取版本，使用时要结合用户截图判断。 |
| Manychat 全页参考 | `docs/pencil-prototypes/reference/manychat-fullpage.png` | 当前仓库已有全页参考图，需由拆解会话继续验证可用性。 |
| Manychat 第 3 屏 intro DevTools 参考 | `docs/pencil-prototypes/reference/manychat-third-intro-devtools.png` | 2026-05-06 使用 DevTools MCP 真实页面截图，视口约 `1440x738`。 |
| Manychat 第 3 屏 pinned 面板 DevTools 参考 | `docs/pencil-prototypes/reference/manychat-third-panel-devtools.png` | 2026-05-06 使用 DevTools MCP 真实页面截图，展示黄色核心能力 pinned 面板。 |
| Manychat Before / After DevTools 参考 | `docs/pencil-prototypes/reference/manychat-before-after-devtools.png` | 2026-05-06 使用 DevTools MCP 真实页面截图，对应 Helo 第 3 屏 Before / After。 |
| Helo 当前原型截图 | `docs/pencil-prototypes/homepage-manychat-strict.png` | 当前 Manychat 严格复刻方向的阶段截图。 |

后续如果新增第 2 到第 5 屏的可靠参考截图，必须追加到本表，并写明对应屏编号。

## 5. 全局视觉规则

本节是所有会话必须共享的规则。任何单屏设计都不能突破这些边界。

### 5.1 风格关键词

- 成熟商业化
- 高级但克制
- 温柔可信
- 真实，不卡通
- 有结构，不花哨
- 鼓励行动，而不是制造噱头

### 5.2 禁止事项

不要出现以下风格：

- 卡通首页
- 二次元陪伴产品感
- 霓虹 AI 光球
- 夸张紫蓝渐变主导
- 复杂后台控制台感
- 漂浮卡片堆满整页
- 强营销海报式杂乱排版

### 5.3 字体规则

首页整体字体以清晰、现代、具有商业感的无衬线为主。

- 中文优先使用干净有力量的现代黑体
- 英文可使用较强展示字重，但不能脱离整体气质
- 不用花哨海报艺术字
- 不做过度装饰性字形实验

建议层级：

- Hero 标题：超大号，强存在感
- Section 标题：中大号，结构明确
- 正文：清晰、稳重
- 辅助文本：偏小但可读

### 5.4 色彩规则

首页色彩不直接继承产品后台色板，而是优先服务于 Manychat 式商业展示气质。

允许的主色逻辑：

- Hero 里的 CTA 使用高饱和洋红紫
- 大面积背景以暖灰、深灰、黑色遮罩为主
- 第二屏以后转入浅暖白、米白、浅灰体系
- 强调色可以少量出现，但不能破坏整体克制感

禁止：

- 大面积紫色 AI 渐变铺满页面
- 每屏主色都变
- 一屏同时出现 4 种以上彩色重点

### 5.5 圆角规则

- 首屏主 CTA：胶囊圆角
- 顶部 outline CTA：胶囊圆角
- 大卡片：中大圆角
- 常规卡片：中等圆角
- 不要使用过于可爱的超大软圆角

### 5.6 阴影规则

- 阴影整体偏轻
- 不依赖厚重投影塑造层次
- 更依赖块面、留白、边框、背景对比
- Hero 聊天卡和吸顶 nav 可以有少量阴影

### 5.7 间距规则

所有 section 需要共享相似的垂直节奏。

原则：

- section 上下留白充足
- 标题与正文之间距离稳定
- 内容区块之间有一致的呼吸感
- 不允许某一屏过挤、某一屏过空

### 5.8 动效规则

动效要服务于“成熟商业首页”，而不是展示技术炫技。

允许：

- 滚动进入时的轻微淡入和上浮
- Hero 聊天卡的平滑出现或切换
- tab / FAQ 的轻量切换
- 吸顶导航的平滑过渡

不允许：

- 大幅跳跃
- 夸张弹簧感
- 整页漂浮晃动
- 多层高速滚动特效

### 5.9 当前实现 Token 表

这张表来自当前 `app/globals.css`，用于避免不同会话各自发明一套视觉系统。后续如果代码改了这些值，必须同步更新本表。

#### 颜色

| Token | 当前值 | 用途 |
| --- | --- | --- |
| `--ink` | `#121212` | 主文字、深色块 |
| `--muted` | `#5f6267` | 辅助文字 |
| `--magenta` | `#f20cde` | 主 CTA、强转化按钮 |
| `--purple` | `#8a3ee8` | 聊天卡、模板区强调 |
| `--purple-soft` | `#9d5ee5` | 聊天卡内部按钮 |
| `--lime` | `#d8ff58` | 强调 icon、步骤高亮 |
| `--paper` | `#ffffff` | 白色卡片 |
| `--soft` | `#f5f1ea` | 页面浅暖背景 |
| `--line` | `rgba(18, 18, 18, 0.12)` | 分割线、弱边框 |
| `--green` | `#c9e4a6` | Hero 当前临时色块 |
| `--coral` | `#f47f43` | Hero 当前临时色块 |

#### Hero 与导航

| 元素 | 当前实现值 | 说明 |
| --- | --- | --- |
| Hero 高度 | `min-height: 100svh` | 首屏覆盖完整视口 |
| Hero 底部圆角 | `0 0 10px 10px` | 参考 Manychat 首屏底部轻微圆角 |
| 默认 nav 位置 | `top: 12px; left/right: 64px` | 悬浮透明导航 |
| 默认 nav 高度 | 内容高度约 `52px` | 不设置固定高度 |
| sticky nav 触发 | `scrollY > 88px` | 位于 `app/page.tsx` |
| sticky nav 位置 | `top: 20px; left/right: 34px` | 滚动后浅灰吸顶条 |
| sticky nav 高度 | `72px` | 当前吸顶条高度 |
| sticky nav 背景 | `rgba(224, 224, 219, 0.94)` | 浅灰玻璃感 |
| sticky nav 圆角 | `7px` | 很小圆角，避免可爱化 |
| sticky nav 阴影 | `0 14px 38px rgba(0,0,0,0.14)` | 轻量浮层 |

#### 字体与按钮

| 元素 | 当前实现值 | 说明 |
| --- | --- | --- |
| 英文 Hero H1 | `clamp(4.25rem, 5.9vw, 6.95rem)` | 英文展示标题 |
| 中文 Hero H1 | `clamp(3.55rem, 4.55vw, 5.1rem)` | 当前为单行中文标题 |
| 中文 Hero H1 行高 | `0.96` | 保持压缩和力量感 |
| Hero 副标题 | `clamp(1.08rem, 1.28vw, 1.48rem)` | 当前略保守，可继续校准 |
| Hero 主 CTA | `height: 66px; min-width: 204px` | 当前偏大，后续可按 Manychat 再收 |
| 顶部 CTA | `height: 52px; min-width: 160px` | 默认态和 sticky 态保持一致 |
| CTA 圆角 | `999px` | 胶囊按钮 |

#### Section 与卡片

| 元素 | 当前实现值 | 说明 |
| --- | --- | --- |
| 通用容器宽度 | `min(100% - 48px, 1240px)` | 桌面端主内容宽度 |
| 通用 section padding | `90px 0` | 第 2 屏以后默认节奏 |
| Showcase padding | `88px 0 104px` | 当前第 2 屏区域节奏 |
| Templates padding | `104px` 上下 | 紫色模板屏 |
| Feature showcase padding | `128px 0 112px` | 功能区域当前实现 |
| 大 section 标题 | `clamp(3.4rem, 6.4vw, 7.4rem)` | 很强的 Manychat 式标题 |
| Story 卡片 | `min-height: 520px; border-radius: 34px; padding: 24px` | 当前案例卡样式 |
| Before/After 卡片 | `min-height: 560px; border-radius: 38px; padding: 42px` | 双大卡对比 |
| Template 卡片 | `min-height: 176px; border-radius: 26px; padding: 22px` | 场景列表 |
| Template 预览 | `min-height: 540px; border-radius: 34px` | 右侧演示区 |
| FAQ item | `border-radius: 24px; min-height: 82px` | 当前 FAQ 行 |

#### 动效

| 动效 | 当前实现值 | 说明 |
| --- | --- | --- |
| nav transition | `220ms ease` | sticky 切换 |
| Hero chat shell float | `7.2s ease-in-out infinite` | 聊天壳轻浮动 |
| Hero chat pair stage | `9s linear infinite` | 当前聊天对逐个阶段切换 |
| Chat button glow | `4.4s ease-in-out infinite` | 聊天卡按钮轻微高亮 |

### 5.10 桌面优先与断点

当前优先验收桌面端，推荐基准视口为 `1440x900` 或 `1512x982`。

已有响应式断点：

- `max-width: 1020px`
- `max-width: 760px`

在桌面端未稳定前，不要大幅重写移动端。移动端只做不重叠、可读、可操作的保底处理。

## 6. 第 1 屏 Hero 规格

### 6.1 模块目的

在 3 到 5 秒内让用户理解：

- 这是什么产品
- 产品气质是否可信
- 为什么值得点进去

### 6.2 布局结构

- 全屏高 Hero
- 顶部透明导航叠在背景上
- 左侧：标题 / 副标题 / 主 CTA
- 右侧：导师型摄影主视觉
- 右下或右中下：单张聊天卡
- 左下：信任 / 能力条带

### 6.3 背景与材质

- 使用真实摄影风格，不使用抽象图形主导
- 人物应具有导师气质，而不是普通模特摆拍
- 左侧整体更暗，方便叠加白字
- 右侧主体区域更亮、更柔和
- 场景应为简洁、高级、真实的室内环境

### 6.4 当前已知修复方向

当前版本虽然结构已经接近，但仍有以下差距：

P1：

1. 背景仍偏抽象图形，缺少真实摄影质感。
2. 右侧没有明确人物主体。
3. 聊天区域还不够像 Manychat 的单张营销卡。
4. 底部信任 / 能力条带尚不完整。

P2：

1. 标题气势和标题字体仍需继续校准。
2. Hero 主 CTA 当前偏宽偏高，需要在摄影图替换后继续对齐 Manychat。
3. 顶部 nav 的 logo、菜单字重、outline 按钮透明感还需要精调。

### 6.5 内容映射

- Manychat 的“conversation”表达映射为“目标推进”
- 聊天卡内容映射为 AI 导师陪跑、拆解、验收
- 底部背书不做大品牌 logo，改为能力型背书：
  - 目标拆解
  - 每日陪跑
  - AI 验收
  - 邮件提醒

### 6.6 Hero 验收标准

Hero 完成时至少满足：

1. 在 `1440x900` 视口下，首屏不滚动即可完整看到 nav、主标题、副标题、主 CTA、右侧主视觉、聊天卡和底部能力条带。
2. 背景为导师型摄影或摄影感主视觉，左侧有足够暗部留白，白色文案可读。
3. 聊天卡是清晰的单张营销卡或单卡切换，不是杂乱聊天流。
4. 默认 nav 透明悬浮，滚动超过 `88px` 后变为浅灰 sticky bar，层级高于聊天卡和 Hero 内容。
5. 中文和英文切换后，首屏不出现中英混杂。
6. 所有按钮高度、圆角、边框和透明度要和全局 token 一致，除非 spec 先更新。

## 7. 第 2 屏 产品闭环说明规格

### 7.1 模块目的

解释 Helo 到底如何帮助用户推进目标，而不是只停留在概念上。

### 7.2 对应 Manychat 的来源

主要借用 Manychat 原第 3 屏“核心能力说明”的结构作用，不借用它的具体内容。

### 7.3 推荐内容结构

根据 Manychat 第 2 屏和第 3 屏截图，这一屏建议采用：

1. 顶部薄能力条
2. 居中 chapter intro
3. 大型闭环演示面板

核心机制建议固定为：

1. AI 目标拆解
2. 每日陪跑
3. 提问验收
4. 邮件提醒回流

### 7.4 这一屏替代社会证明的原因

Helo 目前不是成熟商业品牌，不适合重背书逻辑。相比“很多人正在用”，当前更重要的是“用户一眼看懂产品闭环”。

### 7.5 第 2 屏验收标准

1. 用户不需要阅读长段文字，就能看懂 Helo 的闭环：目标拆解、每日陪跑、提问验收、提醒回流。
2. 结构参考 Manychat 核心能力说明屏，但不能做成普通四宫格功能卡。
3. 页面背景应从 Hero 的深色摄影自然过渡到浅暖背景。
4. 标题、正文、CTA、能力模块的尺寸必须遵守 5.9 的字体和 section 节奏。
5. 必须有一个 Manychat 式 chapter opener：小 icon、超大居中标题、短副标题。
6. 必须有一个具体场景 mockup，让用户看到 Helo 如何推进目标。
7. 如果保留顶部薄条，只能做能力证明，不能伪造社会证明。
8. 色彩可以吸收 Manychat 的大色块冲击力，但不能照搬亮黄成为 Helo 主视觉。

### 7.6 Manychat 第 2 / 第 3 屏截图拆解补充

#### 7.6.1 Manychat 原第 2 屏：社会证明横向带

截图顶部是一条很薄的社会证明区，而不是完整大 section。

结构：

- 高度约 `168px`。
- 白色背景。
- 左侧固定文案区，宽度约页面 `30%`。
- 文案为粗黑标题：超过 100 万创作者、营销人员和品牌点赞。
- 右侧是横向滚动 / marquee 式证言带。
- 每个证言项包含头像、姓名、粉丝数、简短收益陈述、了解更多箭头。
- 右侧证言整体带透明遮罩，远处内容降低不透明度。
- 下方有极细分割线。

Helo 不直接复刻这一屏，因为当前没有真实用户数、品牌背书和创作者案例。可吸收的只有：

- 薄条过渡的节奏。
- 左侧一句强判断 + 右侧横向信息流的结构。
- 用能力型 proof 替代社会 proof。

Helo 可替换为：

- 左侧：不是更多打卡，而是一条完整执行闭环。
- 右侧横向 pill：目标拆解、每日任务、提问验收、邮件提醒、节奏调整。
- 不出现用户数、粉丝数、收益额、真实人物案例。

#### 7.6.2 Manychat 原第 3 屏：核心能力区

原第 3 屏由两部分组成：

1. 白色 intro 区
2. 高饱和彩色功能展示面板

白色 intro 区：

- 背景纯白。
- 顶部留白很大，约 `240px` 到 `300px`。
- 中央有一个小圆形 icon，橙红色底，白色符号。
- icon 下方是超大黑色标题。
- 标题居中，字号极大，约 `88px` 到 `112px`，字重 700 到 800。
- 标题下方是一句居中副标题，约 `24px` 到 `28px`。
- 副标题与标题距离较近，约 `28px`。
- 整个 intro 区像一个强力 chapter opener，不急着放卡片。

黄色功能面板：

- 从 intro 下方直接进入整屏高饱和黄色区域。
- 背景色接近纯亮黄。
- 背景上有非常细的网格线，线条透明度低。
- 内容为左右分栏。
- 左侧：大标题、解释文案、底部超宽黑色 pill CTA。
- 右侧：大号社媒评论 / 自动回复 mockup。
- 右侧 mockup 不是普通 dashboard，而是一个非常具体的场景演示。
- 底部有洋红色步骤条，文案类似 Auto-reply on every comment，右侧显示 `1/2`。
- 视觉重点非常强：单一高饱和色块 + 黑色大 UI + 洋红进度条。

#### 7.6.3 对 Helo 第 2 屏的直接启发

Helo 第 2 屏应主要借用 Manychat 原第 3 屏，而不是原第 2 屏。

保留：

- 白色 / 浅色 intro 的强标题节奏。
- 一个小 icon 作为 section anchor。
- 超大居中标题 + 一句简短副标题。
- 下方接一个沉浸式能力面板。
- 能力面板用具体产品场景解释机制，而不是普通功能卡。
- 面板内可有步骤进度或闭环状态提示。

替换：

- Manychat 的“扩大对话规模”替换为 Helo 的“把目标推进做成闭环”。
- 评论自动回复 mockup 替换为“今日任务 + 导师提问验收 + 邮件提醒回流”的目标执行 mockup。
- 黄色主色不建议照搬为 Helo 大面积主色，可改为浅暖白底上嵌入深色 / 紫色 / lime 强调面板。
- 社媒评论区替换为目标执行工作区，不做 Instagram 风格界面。

#### 7.6.4 推荐 Helo 第 2 屏结构

第 2 屏可以改为：

1. 顶部薄能力条
2. 居中 chapter intro
3. 大型闭环演示面板

顶部薄能力条：

- 高度 `120px` 到 `160px`。
- 左侧一句强判断。
- 右侧横向滚动或静态 pill。
- 内容只放能力词，不做社会证明。

居中 intro：

- 小 icon：使用 `--lime` 或 `--magenta` 圆形 icon。
- 标题：把目标推进，做成每天会发生的闭环。
- 副标题：Helo 把计划、执行、验收和提醒连成一条线，让目标不再停在聊天里。

大型闭环演示面板：

- 左侧：机制说明和 CTA。
- 右侧：产品 mockup。
- 背景可以用深色或浅暖大色块，但只保留一个主色重点。
- 右侧 mockup 显示：
  - 今日任务
  - 导师消息
  - 用户完成反馈
  - 提问验收
  - 邮件提醒状态
- 底部可加步骤条：
  - `Goal breakdown`
  - `Daily action`
  - `Check-in`
  - `Reminder loop`

### 7.7 DevTools 真实页面拆解：Manychat 首页全页结构

本节基于 2026-05-05 使用 Chrome DevTools MCP 打开的真实 `https://manychat.com/` 页面。Cookie 弹窗已关闭，Cloudflare 未阻挡。桌面测量视口约为 `1440x790`，页面 body 高度约 `16089px`。数值为 DevTools computed style 和 bounding rect 的近似值，后续实现以结构、比例和节奏优先，不复制 Manychat 文案、图片、logo、客户数据或真实案例。

#### 7.7.1 全页 section 顺序

Manychat 真实首页顺序：

1. Hero：摄影背景 + 左侧超大标题 + CTA + 平台背书 logo + 浮动气泡。
2. 社会证明横向带：左侧一句 proof，右侧横向滚动 creator testimonials。
3. 核心能力 intro：白底小 icon + 超大居中标题 + 短副标题。
4. 核心能力 pinned 面板：亮黄大色块，左文案右社媒 mockup，滚动时切换 4 个功能叙事。
5. Before / After：白底 intro + 左右大对比卡。
6. Templates / use cases：白底 intro + 左侧列表 + 右侧演示区。
7. 3 steps：白底 intro + 三列步骤 + 双 CTA。
8. FAQ：黑底白字 FAQ。
9. Footer：黑底多列链接。

Helo 首页仍压缩为 5 屏，但应吸收 Manychat 的真实节奏：Hero 后不是立刻普通卡片，而是先用一个短 proof 条过渡，再进入一个强 chapter intro 和沉浸式能力面板。

#### 7.7.2 全局布局与排版 token

Manychat 桌面端全局规律：

- 页面主色：黑 `rgb(0,0,0)`、白、亮黄 `rgb(255,241,0)`、洋红 CTA `rgb(250,12,247)`。
- 通用 section 上下 padding：白底大 section 多为 `160px 0`；核心 intro 为 `160px 0 100px`；FAQ 为 `160px 0`。
- 内容最大宽：常见内层宽度约 `1265px`，左右 margin 约 `80px`；标题内容区常见宽度约 `930px`。
- 大标题：`72px`，字重 `400`，行高 `59.04px`，居中；Manychat 实际行高压缩到字号的约 `0.82`。
- 功能面板内标题：`56px`，字重 `400`，行高 `45.92px`。
- 正文：`16px`，字重 `400`，行高 `22.4px`。
- 小标签 / 列表项：`12px` 到 `14px`，常用 uppercase，行高约 `16px` 到 `20px`。
- 滚动进入动效：大量 heading、icon、section 使用 `opacity 0.7s cubic-bezier(0.43, 0.195, 0.02, 1), transform 0.7s cubic-bezier(0.43, 0.195, 0.02, 1)`，初始 `translateY(50px)`。

Helo 映射：

- 保留超大标题和压缩行高，但中文可稍放松到 `0.92` 到 `1.02`，避免中文拥挤。
- 保留 `160px` 级别的 section 呼吸感，当前 `90px` 默认 section padding 对 Manychat 风格偏小。
- 保留洋红 CTA 和深色大块，但亮黄只作为借鉴，不作为 Helo 主色大面积照搬。

#### 7.7.3 导航与 sticky 行为

Manychat 真实 nav：

- 初始位置：页面顶部绝对 / 相对悬浮，`x:20px; y:20px; width:1385px; height:72px`。
- 背景：透明，Hero 上为白字；滚出 Hero 后文字转黑。
- 菜单字号：约 `15px`，行高 `19.5px`。
- CTA：顶部和页面内 CTA 都使用重复文本的 masked hover 结构，视觉上仍是单行按钮。
- 下拉菜单动效：菜单项初始 `opacity:0; transform: translateY(20px)`，打开时以 `0.45s cubic-bezier(0.43, 0.195, 0.02, 1)` 分段延迟进入，延迟约 `0.05s` 递增。

Helo 映射：

- 当前 Hero sticky nav 可保留，但需要对齐 Manychat 的轻透明默认态和滚动后深浅切换。
- 下拉不必完整复刻，若做 hover 菜单，应使用 `translateY(20px)` 到 `0`、`450ms`、分段 delay 的节奏。

#### 7.7.4 第 1 屏 Hero

Manychat Hero 真实结构：

- Hero 背景图覆盖首屏，图片 alt 为 `Man with a phone in hand`。
- 页面可视首屏高度约 `790px`，背景视觉容器高度约 `926px`。
- Hero 内容 section 位于 nav 下，`top:82px; width:1425px; height:404px; padding:40px 40px 0`。
- 左侧标题位置：`x:40px; y:130px; width:692px; height:177px`。
- H1：`72px / 400 / 59.04px`，白色，左对齐。
- 副标题：`x:40px; y:331px; width:460px; height:67px`，`16px / 400 / 22.4px`，白色。
- 主 CTA：`x:40px; y:438px; width:150px; height:48px`，背景洋红 `rgb(250,12,247)`，白字，圆角 `100px`，padding `14px 20px`，hover transition `background 0.3s, transform 0.3s`。
- 信任 logo 纵向排列在左下区域，单个图标约 `24px`。
- 浮动气泡是图片素材，围绕右侧人物摄影分布，作为 Hero 的“聊天自动化”信号。

Helo 映射：

- Hero 应继续保留左文案右摄影主视觉。
- 背景必须是真实摄影感，左侧有暗部给白字。
- Helo 的浮动内容不要做多条聊天流，保持 Manychat 式少量独立气泡或单张聊天卡。
- Hero CTA 高度可从当前 `66px` 收回到 `52px` 到 `58px`，但 Helo 如果希望更强转化可略大于 Manychat。

#### 7.7.5 第 2 屏社会证明横向带

Manychat 真实结构：

- section：`top:790px; height:113px; width:1425px`，白底，overflow hidden。
- 左侧 proof 标题：`width:277px; height:112px; padding:32px`，`20px / 600 / 24px`，黑色。
- 右侧 marquee 区：从 `x:277px` 开始，占剩余宽度；内部轨道宽度约 `5491px`。
- 每条 testimonial 横向排列，头像约 `68x51px`，圆角 `12px`，右 margin `12px`。
- testimonial 正文为 `12px / 400 / 16.32px`，黑色；learn more 为 `12px`，灰色 `rgb(153,153,153)`。
- 图片 hover / 过渡：头像带 `transform 0.7s cubic-bezier(0.4,0,0.2,1)`。

Helo 映射：

- 不复制社会证明数据。
- 可在 Hero 与产品闭环之间放一条 `110px` 到 `140px` 的能力 proof 条。
- 左侧文案：`不是更多打卡，而是一条完整执行闭环`。
- 右侧内容：目标拆解、每日任务、导师追问、验收通过、邮件提醒、节奏调整。
- 文本和 pill 可以轻微横向滚动，但不要伪造用户、粉丝、收益。

#### 7.7.6 第 3 屏核心能力 intro

Manychat 真实结构：

- section：`top:903px; height:512px; padding:160px 0 100px`，白底。
- 内层标题区宽约 `930px`，居中。
- icon：`80x80px`，居中，底部 margin `8px`。
- H2：`x:248px; width:930px; height:118px`，`72px / 400 / 59.04px`，黑色，居中。
- 副标题：`16px / 400 / 22.4px`，居中，顶部 margin `24px`。
- icon、标题、副标题都有滚动进入动效：`opacity + translateY(50px)`，`0.7s cubic-bezier(0.43,0.195,0.02,1)`。

Helo 映射：

- 第 2 屏产品闭环说明必须使用这个 chapter opener。
- 小 icon 可用 `--lime` 或 `--magenta` 圆形符号。
- 标题建议：`把目标推进，做成每天会发生的闭环`。
- 副标题建议：`Helo 把计划、执行、验收和提醒连成一条线，让目标不再停在聊天里。`

#### 7.7.7 第 3 屏核心能力 pinned 面板

Manychat 真实结构：

- section：2026-05-06 DevTools MCP 实测为 `top:1363px; width:1425px; height:5538px`，桌面端显示，背景亮黄 `rgb(255,241,0)`。上一轮 `top:1415px; height:5590px` 的差异来自视口高度变化。
- 这是长滚动 pinned 区，真实高度远大于一屏，用于承载 4 个功能故事的滚动切换。
- 背景有细网格线，透明度很低。
- 视觉布局：左侧文案 + 底部超宽黑色 CTA；右侧大 mockup。
- 左侧功能标题：`x:73px; width:566px`，`56px / 400 / 45.92px`。
- 左侧正文：`16px / 400 / 22.4px`，顶部 margin `16px`，宽 `566px`。
- 左侧 CTA：`x:16px; width:680px; height:48px`，黑底白字，圆角 `100px`，padding `14px 20px`。
- 功能故事共 4 个：
  1. Turn comments into conversations that sell
  2. Personal conversations; Profitable conversations
  3. Engage followers instantly with automatic replies
  4. Expand your empire
- 右侧 mockup 是具体社交评论 / 自动回复场景，不是抽象后台。
- 底部有洋红步骤条，文案加进度如 `1/2`，用于提示当前自动化场景。

##### 7.7.7.1 一比一结构拆解

黄色 pinned 面板的桌面结构为：

1. 外层 section
2. 内层 `h-full w-full`
3. `sticky left-0 top-0 !grid h-screen w-full grid-cols-2`
4. 左列文字 Swiper
5. 右列视频 Swiper

外层 section：

- 位置：`top:1363px`。
- 尺寸：`1425px x 5538px`。
- 背景：`rgb(255,241,0)`。
- position：`relative`。
- padding：`0`。
- overflow：`visible`。

sticky 容器：

- 尺寸：`1425px x 738px`，等于当前 DevTools 视口高度。
- position：`sticky`，`top:0`。
- display：`grid`。
- grid：两列等宽，各约 `712.5px`。
- sticky 状态从 section 顶部开始，到 section 底部前约一屏释放。

左右分栏：

- 左列：`x:0; width:713px; height:738px`。
- 右列：`x:713px; width:713px; height:738px`。
- 左列右侧有分割线：`border-right: 1px solid rgba(0,0,0,0.12)`。
- 右列背景使用网格图案：
  - `linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px)`
  - `linear-gradient(rgba(0,0,0,0.12) 1px, transparent 1px)`

左侧内容容器：

- 内层最大宽度约 `680px`，左右 margin `16px`。
- 文字 Swiper 宽度约 `566px`，占左列内容宽的 `83.24%`。
- 文字 Swiper x 约 `73px`，height `738px`。
- 每个 slide 高 `738px`。
- slide 顶部 padding：`92px`。
- 内容块在 slide 内垂直居中附近，首屏标题实际出现在 viewport `y:379px` 左右。

右侧视频容器：

- 右侧 Swiper 宽 `713px`，高 `738px`。
- 每个视觉 slide 高 `738px`，顶部 padding `92px`。
- 视频 mockup 宽约 `341px`，高约 `590px`。
- 视频 x 约 `898px`，即右列中间偏左；在右列内相对 x 约 `185px`。
- 视频圆角：`20px 20px 0 0`。
- 视频 `object-fit: contain`。
- 视频 max-height：`80vh`。
- 视频宽度：右列的 `47.8%`。
- box-shadow：无，层次主要靠黑色视频内容、亮黄背景和网格。

##### 7.7.7.2 四个滚动状态

黄色 pinned 面板使用两个纵向 Swiper 同步：左侧文字 Swiper 与右侧视频 Swiper。文字 Swiper 是 fade/watch-progress 风格，右侧视频 Swiper 是纵向切换。

滚动到 section 顶部 `scrollY:1363`：

- active 文案：`Turn comments into conversations that sell`。
- active 视频：`features_01v1.webm`。
- 右侧视频 rect：约 `341x590`。
- CTA 固定在左列底部：`x:16; y:674; width:680; height:48`。

滚动到 `scrollY:3300`：

- active 文案：`Personal conversations; Profitable conversations`。
- active 视频：`features_02v2.webm`。
- 右侧视频 rect：约 `x:898; y:216; width:341; height:590`。
- 前一个视频 slide 位于上方，下一视频 slide 位于下方，形成纵向轮播连续感。

滚动到 `scrollY:4300`：

- active 文案：`Engage followers instantly with automatic replies`。
- active 视频：`features_03v1.webm`。
- 右侧视频 rect：约 `x:898; y:228; width:341; height:590`。

滚动到 `scrollY:5300` 到 `6200`：

- active 文案：`Expand your empire`。
- active 视频：`features_04v1.webm`。
- 右侧视频 rect：约 `x:898; y:229` 到 `83; width:341; height:590`，随 sticky 接近释放而相对视口上移。

##### 7.7.7.3 文字层级

左侧功能标题：

- selector 语义：`h2.mc-text-h2`。
- 宽度：`566px`。
- 字号：`56px`。
- 字重：`400`。
- 行高：`45.92px`。
- 颜色：`rgb(0,0,0)`。
- margin：`0`。
- text-align：视觉上居中容器，但文字本身按块排版；标题行宽由 `566px` 控制。

左侧正文：

- selector 语义：`p.mc-text-body`。
- 字号：`16px`。
- 字重：`400`。
- 行高：`22.4px`。
- 颜色：`rgb(0,0,0)`。
- 顶部 margin：`16px`。
- 宽度：`566px`。

文案 slide transition：

- 内容块 transition：`opacity 0.7s cubic-bezier(0.43,0.195,0.02,1), transform 0.7s cubic-bezier(0.43,0.195,0.02,1)`。
- Swiper wrapper transition easing：`cubic-bezier(0.43,0.195,0.02,1)`。
- 非 active slide opacity 会降到接近 `0`；切换区间内可见 `0.79`、`0.999` 等过渡值。

##### 7.7.7.4 CTA 按钮

黄色 pinned 面板里的 CTA：

- 位置：左列底部绝对定位容器内。
- 外层位置：`left:0; right:0; bottom:16px`，z-index `1`。
- 按钮 rect：`x:16; width:680px; height:48px`。
- 字号：`14px`。
- 行高：`20px`。
- 字重：`400`。
- 字色：`rgb(255,255,255)`。
- 背景：`rgb(0,0,0)`。
- 圆角：`100px`。
- padding：`14px 20px`。
- border：`0`。
- box-shadow：无。
- transition：`background 0.3s, transform 0.3s`。
- 内部文字 hover 结构：`button__before` 和 `button__after` 两层文本，`button__after` 初始 `translateY(20px)`，transition 为 `transform 0.45s cubic-bezier(0.43,0.195,0.02,1), opacity 0.3s`。

##### 7.7.7.5 对 Helo 的一比一映射规格

Helo 不需要完整复刻 `5538px` 的长 pinned scroll，但如果要贴近 Manychat 第三屏，至少要保留以下比例和关系：

- 第 2 屏产品闭环应拆成 `intro + pinned/演示面板` 两段，不要直接四卡片。
- intro 保留 `80px icon + 72px 级标题 + 16px 副标题 + 160px 上下留白`。
- 演示面板桌面端使用两列：
  - 左列约 `50%`，放机制文案和 CTA。
  - 右列约 `50%`，放目标执行 mockup。
- 左右分栏之间使用 `rgba(0,0,0,0.12)` 级别细分割线。
- 右侧可以保留细网格，但透明度要低，只做结构感，不做后台 dashboard。
- 左侧标题使用 `56px` 级别，行高压缩到 `0.82` 到 `0.9`；中文可放宽到 `0.95`。
- 右侧 mockup 需要像 Manychat 视频一样是一个具体使用场景，而不是抽象功能卡：
  - AI 目标拆解：目标卡 + 计划拆分。
  - 每日陪跑：今日任务 + 导师消息。
  - 提问验收：用户完成反馈 + 导师追问。
  - 邮件提醒回流：邮件提醒状态 + 节奏调整。
- 若做滚动切换，建议 4 个状态同步切换，使用 `700ms cubic-bezier(0.43,0.195,0.02,1)`。
- 若先做静态版本，右侧 mockup 也应显示 4 步状态条，避免退化成普通功能介绍。

Helo 映射：

- Helo 第 2 屏可压缩为一个静态或轻动效版本，不必做 `5590px` 的长 pinned 叙事。
- 应保留“大色块 + 左侧机制文案 + 右侧具体产品 mockup + 底部步骤条”的核心。
- 4 个故事映射为：
  1. AI 目标拆解
  2. 每日陪跑
  3. 提问验收
  4. 邮件提醒回流
- 右侧 mockup 应展示一个具体目标，例如 `30 天英语口语`，包含今日任务、导师消息、用户反馈、验收问题、邮件提醒状态。
- 背景不照搬亮黄，可使用 Helo 的浅暖白承接 intro，并在演示面板中使用 `--ink`、`--purple`、`--lime`、`--magenta` 建立强对比。

#### 7.7.8 第 4 屏 Before / After

Manychat 真实结构：

- section：`top:9770px; height:2092px; padding:160px 0 0`，白底。
- intro 与前面一致：icon `80x80px`，H2 `72px / 400 / 59.04px`，副标题 `16px / 22.4px`。
- 标题：`Your inbox: a before & after`；副标题：`More messages, less mess.`
- 下方双栏大卡：
  - Before 标题：`56px / 400 / 45.92px`，黑字。
  - After 标题：`56px / 400 / 45.92px`，白字。
  - CTA：两边均为宽按钮，约 `559x48px`，圆角 `100px`；Before 黑底白字，After 白底黑字。
- bullet 使用 box icon，文字为 uppercase 小号样式。

Helo 映射：

- 第 3 屏 Before / After 应保留顶部 icon + 巨大居中标题，再接双大卡。
- Before 映射为目标散掉、聊天无验收、打卡无反馈。
- After 映射为每天知道下一步、导师记住节奏、完成后提问验收、中断后提醒回流。
- 双卡体量要大，不要做普通列表。

#### 7.7.9 第 5 屏 Templates / 场景演示

Manychat 真实结构：

- section：`top:11913px; height:1252px; padding:160px 0 0`，白底。
- intro：icon `80x80px`，H2 宽 `930px`，`72px / 400 / 59.04px`，副标题 `16px / 22.4px`。
- 下方内容是左侧场景列表 + 右侧演示区。
- 左侧标题 `See it in action...`：`28px / 700 / 30.24px`。
- 左侧列表 H3：`14px / 400 / 19.6px`，每项下面有 `CHECK IT OUT`，`12px / 400 / 16.32px`。
- 左侧 CTA：`237x48px`，黑底白字，圆角 `100px`。
- 列表项高度不完全一致，长标题自然换行，整体更像产品 use case menu，而不是卡片网格。

Helo 映射：

- 第 4 屏模板 / 使用场景应采用“左侧场景列表 + 右侧当前场景预览”，不要做 2x3 普通模板卡。
- 左侧场景可为：30 天英语口语、15 天面试冲刺、21 天早睡计划、7 天作品集冲刺、100 天健身入门、自定义目标。
- 右侧预览应显示导师、目标、今日任务、验收问题，而不是后台 dashboard。

#### 7.7.10 第 6 屏 3 steps

Manychat 真实结构：

- section：`top:13164px; height:1163px; padding:160px 0`。
- intro：icon `80x80px`，H2 `72px / 400 / 59.04px`，副标题 `16px / 22.4px`。
- 三列步骤，每列约 `408px` 宽。
- 步骤 H3：`20px / 600 / 28px`。
- 步骤正文：`16px / 400 / 22.4px`，顶部 margin `4px`。
- 底部 CTA 组居中：
  - 主 CTA：`211x48px`，黑底白字，圆角 `100px`。
  - 次 CTA：`211x48px`，透明背景黑字，左 margin `16px`。

Helo 映射：

- Helo 第 5 屏的“三步开始”部分可直接吸收该结构。
- 三步：创建导师、设定目标、每天执行并完成验收。
- 这一部分不应太像卡片墙，应该是清晰的三列流程。

#### 7.7.11 FAQ 与 Footer

Manychat FAQ：

- section：`top:14277px; height:880px; padding:160px 0`。
- 背景黑，文字白。
- icon `80x80px`。
- H2：`72px / 400 / 59.04px`，白字，居中。
- FAQ 列表宽约 `837px`，居中。
- 每个问题按钮高度约 `62px`，透明背景，无卡片边框。
- 问题 H3：`16px / 400 / 22.4px`。
- 答案：`16px / 400 / 22.4px`，颜色 `rgba(255,255,255,0.6)`。
- 箭头动效：`transform 0.3s cubic-bezier(0.43,0.195,0.02,1)`。

Manychat Footer：

- 黑底，顶部白色透明分割线。
- padding 约 `40px 0`。
- 多列链接，链接字号约 `12px / 16.32px`。
- 链接 hover 使用 `background-size 0.3s` 下划线类动效。

Helo 映射：

- 第 5 屏 FAQ 可以合并进最终 CTA 区，但视觉上可吸收黑底白字的强收口。
- FAQ 不需要卡片化；透明行 + 箭头更贴 Manychat。
- Footer 保持极简，不抢最终 CTA。

#### 7.7.12 按钮与 hover 规格

Manychat 按钮规律：

- 主按钮高度：`48px`。
- 圆角：`100px`。
- padding：`14px 20px`。
- 字号：`14px`，行高 `20px`。
- Hero 主 CTA：洋红 `rgb(250,12,247)`，白字。
- 大色块 / 白底 section 主 CTA：黑底白字。
- 反色 CTA：白底黑字或透明黑字。
- 过渡：`background 0.3s, transform 0.3s`。
- 文本 hover 通过按钮内部重复文本实现滑动 mask，Helo 可以简化为轻微上移或文本滑动，但不要改变按钮体量。

Helo 映射：

- 首页按钮统一高度建议 `48px` 到 `56px`，Hero 主 CTA 可以略大但不超过 `60px`。
- 圆角统一 `999px`。
- 主 CTA 使用 `--magenta`，深色 section CTA 使用 `--ink`，反色 CTA 使用白底黑字或透明描边。

#### 7.7.13 动效与滚动行为

Manychat 动效规律：

- 普通 section 入场：`opacity` 从 0 到 1，`translateY(50px)` 到 0，时长 `0.7s`，easing `cubic-bezier(0.43,0.195,0.02,1)`。
- 下拉菜单入场：`opacity` 从 0 到 1，`translateY(20px)` 到 0，时长 `0.45s`，同一 easing，列表项延迟 `0.05s` 递增。
- FAQ 箭头和问题 hover：`transform 0.3s cubic-bezier(0.43,0.195,0.02,1)`。
- 社会证明横向带是无限横向滚动轨道，远处内容通过 overflow / mask 淡出。
- 核心功能面板是长 pinned / scroll story 区，滚动中左侧文案和右侧 mockup 切换。

Helo 映射：

- 首版实现不必做完整 pinned scroll story，但至少保留：
  - section 入场淡入上浮；
  - 第 2 屏闭环面板的 4 个机制状态按顺序切换或静态可读；
  - FAQ 箭头轻转；
  - sticky nav 平滑切换。
- 推荐统一动效：`700ms cubic-bezier(0.43,0.195,0.02,1)` 用于 section，`300ms` 用于 hover / FAQ，`450ms` 用于菜单。

## 8. 第 3 屏 Before / After 规格

### 8.1 模块目的

用最直观的方式说明：

- 不使用 Helo 时会怎样
- 使用 Helo 后会有什么变化

### 8.2 布局结构

- 上方标题 + 副标题
- 下方左右双大卡
- 左侧为 Before
- 右侧为 After

### 8.3 内容映射建议

Before：

- 目标写了，但几天后就忘
- 和 AI 聊很多，但没有验收
- 只是打卡，没有质量反馈
- 一中断就完全失去节奏

After：

- 每天明确知道下一步
- 导师记得你的节奏和障碍
- 完成后会被提问验收
- 中断后会收到温和提醒并调整计划

### 8.4 第 3 屏验收标准

1. Before / After 必须是强对比双大卡，而不是普通列表。
2. 两张卡在桌面端并排，体量接近 Manychat 对比屏。
3. 每张卡最多 4 个关键 bullet，避免信息过多。
4. 视觉上要让用户一眼看到“使用前很散，使用后更有闭环”。

### 8.5 DevTools 真实页面拆解：Manychat Before / After

本节基于 2026-05-06 使用 Chrome DevTools MCP 打开的真实 `https://manychat.com/` 页面。该模块对应 Helo 首页第 3 屏，而不是 Manychat 页面顺序里的第 3 屏。参考截图见 `docs/pencil-prototypes/reference/manychat-before-after-devtools.png`。

#### 8.5.1 Section 总体结构

Manychat 对应模块标题为 `Your inbox: a before & after`。

真实结构：

1. 白底 section
2. 居中 intro：icon + 超大标题 + 副标题
3. `200svh` 高度的 sticky 对比区
4. 两张并排大卡：Before 与 After
5. 滚动时 Before 卡缩小并向右叠，After 卡向左覆盖

section 实测：

- section top：约 `9484px`。
- section width：约 `1425px`。
- section height：约 `1988px`。
- padding：`160px 0 0`。
- 背景：透明 / 白底页面。
- display：`flex; flex-direction: column; align-items: center`。
- 文字主色：黑色。

#### 8.5.2 Intro 区

intro 容器：

- 外层：`mx-mc-layout pb-mc-section max-w-mc`。
- 宽度：`930px`。
- x：约 `248px`。
- padding-bottom：`100px`。
- 内层居中，最大宽 `930px`。

icon：

- 图片：`ww-icon.svg`。
- 尺寸：`80x80px`。
- 居中。
- margin：`0 auto 8px`。
- 入场动效：`opacity + translateY(50px)`，激活后 `translateY(0)`。
- transition：`opacity 0.7s cubic-bezier(0.43,0.195,0.02,1), transform 0.7s cubic-bezier(0.43,0.195,0.02,1)`。

主标题：

- 文案：`Your inbox: a before & after`。
- H2 rect：`x:248px; width:930px; height:118px`。
- 字号：`72px`。
- 字重：`400`。
- 行高：`59.04px`。
- 颜色：`rgb(0,0,0)`。
- 对齐：居中。
- margin：`0`。
- 入场动效同 icon。

副标题：

- 文案：`More messages, less mess.`。
- rect：约 `x:602px; width:222px; height:22px`。
- 字号：`16px`。
- 字重：`400`。
- 行高：`22.4px`。
- 顶部 margin：`24px`。
- 颜色：`rgb(0,0,0)`。
- 对齐：居中。

Helo 映射：

- Helo 第 3 屏应保留 icon + 超大标题 + 短副标题。
- 标题可用：`你的目标：使用前与使用后` 或 `目标执行的 before & after`。
- 副标题应短，不解释机制细节，例如：`同一个目标，从散掉到被推进。`

#### 8.5.3 Sticky 双卡区域

外层内容宽：

- 容器 class：`w-mc-layout max-w-mc`。
- rect：`x:80px; width:1265px; height:1476px`。
- 内部 sticky 轨道高度：`200svh`，当前视口下约 `1476px`。

sticky grid：

- class 含 `!grid`、`sm:!sticky`、`md:grid-cols-2`。
- 初始 rect：`x:80px; y:9997px; width:1265px; height:625px`。
- display：`grid`。
- grid：桌面两列。
- gap：约 `20px`。
- position：`sticky`。
- top：实测 `96.5px`。
- sticky 期间双卡停在 viewport y 约 `97px`。

卡片尺寸：

- Before 卡：`x:80px; width:623px; height:625px`。
- After 卡：`x:723px; width:623px; height:625px`。
- 两卡间距：约 `20px`。
- 卡片圆角：`32px`。
- padding：`0 32px 32px`，顶部显式为 `0`。
- min-height：约 `620px`。
- box-shadow：无。

卡片背景：

- Before：`rgb(237,242,237)`，浅灰绿。
- After：`rgb(0,114,87)`，深绿色。
- Before 文本：黑色。
- After 文本：白色。

Helo 映射：

- Before 卡可用浅暖灰 / 浅雾色，不要太脏。
- After 卡可用 `--ink`、深紫或深墨绿，但要和 Helo 全局 token 一致。
- 两张卡都不需要厚阴影，靠块面、圆角、颜色对比建立层级。

#### 8.5.4 卡片内部排版

每张卡内部结构：

1. 顶部居中文案组
2. 小标签
3. 大标题
4. 四条 bullet
5. 底部 CTA

顶部文案组：

- 容器顶部 margin：`60px`。
- 最大宽：Before 约 `315px`，After 约 `400px`。
- 对齐：居中。

小标签：

- Before：`Before Manychat:`。
- After：`After Manychat:`。
- 字号：`14px`。
- 字重：`600`。
- 行高：`19.6px`。
- 颜色跟随卡片文本色。

卡片标题：

- Before：`All work and no play`。
- After：`Less grind and more pay`。
- 字号：`56px`。
- 字重：`400`。
- 行高：`45.92px`。
- 顶部 margin：`16px`。
- min-height：约 `183.68px`，用于保证两卡标题区同高。
- 对齐：居中。

bullet 列表：

- 列表宽：约 `559px`。
- 顶部 margin：`40px`。
- display：`grid`。
- gap：约 `16px`。
- 每张卡 4 条 bullet。
- bullet 文字为 uppercase，视觉字号约 `12px` 到 `14px`，行高约 `16.32px`。
- 每条右侧有 box icon，icon 尺寸 `20x20px`，margin `0 8px`。
- Before 使用黑色 box icon，After 使用白色 box icon。

CTA：

- Before CTA rect：`x:112px; width:559px; height:48px`。
- After CTA rect：`x:755px; width:559px; height:48px`。
- 圆角：`100px`。
- padding：`14px 20px`。
- 字号：`14px`。
- 行高：`20px`。
- 字重：`400`。
- Before CTA：黑底白字。
- After CTA：白底黑字。
- transition：`background 0.3s, transform 0.3s`。
- 内部仍使用 Manychat 通用的重复文本 / masked hover 结构。

Helo 映射：

- Helo bullet 不要 uppercase 英文感过强，中文用短句即可，每条不超过 14 到 18 个中文字符。
- 每卡最多 4 条，保留右侧或左侧小 icon，但避免复杂图标。
- CTA 可以不在两张卡里都放；若保留，Before 可以无 CTA，After 放主 CTA，减少重复转化。

#### 8.5.5 滚动与叠卡动效

Manychat 这个模块不是静态双卡。它的核心是 `200svh` sticky 叠卡动画：

- `scrollY:9484`：section 开始，grid 还在正常文档流，卡片并排。
- `scrollY:9997`：grid sticky 到 `top:96.5px`，两卡并排，Before `scale(1)`，After `translateX(0)`。
- `scrollY:10350`：叠卡开始：
  - Before transform：`matrix(0.9283, 0, 0, 0.9283, 153.66, 0)`。
  - After transform：`matrix(1, 0, 0, 1, -153.66, 0)`。
  - 视觉上 Before 缩小并向右，After 向左覆盖。
- `scrollY:10850`：叠卡接近完成：
  - Before transform：`matrix(0.85, 0, 0, 0.85, 321.25, 0)`。
  - After transform：`matrix(1, 0, 0, 1, -321.25, 0)`。
  - Before 约缩到 `529x531`，After 仍为 `623x625`。
- `scrollY:11300`：sticky 区释放，两卡整体向上离开视口。

动效特点：

- 没有弹簧感。
- 没有复杂 3D。
- 主要是横向 translate + scale。
- Before 被弱化，After 获得视觉中心。
- 缩放下限约 `0.85`。
- 横向移动量约 `321px`。

Helo 映射：

- 首版可以先实现静态并排双卡，但最终应补上 sticky 叠卡动效。
- 如果实现动效：
  - sticky top 约 `96px`。
  - sticky 轨道高度约 `180svh` 到 `200svh`。
  - Before 从 `scale(1) translateX(0)` 变到 `scale(0.85) translateX(320px)`。
  - After 从 `translateX(0)` 变到 `translateX(-320px)`。
  - 使用线性 scroll progress 映射，不用弹跳 easing。

#### 8.5.6 Helo 第 3 屏落地规格

Helo 第 3 屏应按 Manychat 对应模块设计，而不是普通 Before / After 列表。

推荐结构：

1. icon
2. 超大居中标题
3. 一句副标题
4. sticky 双卡轨道
5. Before / After 两张大卡

建议文案：

- 标题：`同一个目标，使用前和使用后`
- 副标题：`区别不在于多聊几句，而在于每天都被推进。`
- Before 小标签：`Before Helo`
- Before 标题：`目标很认真，执行很散`
- After 小标签：`After Helo`
- After 标题：`每天都有下一步`

Before bullet：

- 目标写完后很快沉下去
- AI 聊得很多但没有验收
- 打卡只是点一下
- 一中断就失去节奏

After bullet：

- 每天知道下一步做什么
- 导师记住你的节奏和障碍
- 完成后用问题验收质量
- 停下来会收到温和提醒

视觉规格：

- section padding：`160px 0 0`。
- intro 最大宽：`930px`。
- icon：`80x80px`。
- 主标题：桌面端接近 `72px`，中文行高 `0.9` 到 `1`。
- 副标题：`16px` 到 `18px`，行高 `1.4`。
- 双卡容器宽：约 `1260px`。
- 卡片宽：约 `calc((100% - 20px) / 2)`。
- 卡片高：`620px` 到 `640px`。
- 卡片圆角：`32px`。
- 卡片 padding：`0 32px 32px`。
- 标题组顶部 margin：`60px`。
- 卡片标题：`52px` 到 `56px`，中文行高 `0.95`。
- bullet 区顶部 margin：`40px`，gap `16px`。
- icon：`20x20px`。

## 9. 第 4 屏 模板 / 使用场景规格

### 9.1 模块目的

让用户迅速代入“我可以拿这个产品来做什么”。

### 9.2 布局结构

- 上方标题和说明
- 左侧为场景列表 / tab
- 右侧为当前场景预览

### 9.3 推荐场景

建议优先展示以下典型目标：

1. 30 天英语口语
2. 15 天面试冲刺
3. 21 天早睡计划
4. 7 天作品集冲刺
5. 100 天健身入门
6. 自定义目标

### 9.4 预览区表达方式

预览区不做后台 dashboard，而是更像“导师正在陪跑这一个目标”的工作区简化版。

### 9.5 第 4 屏验收标准

1. 左侧是场景 / 模板列表，右侧是当前模板的演示预览。
2. 预览区必须让用户看到“导师 + 目标 + 今日任务 + 验收”的关系。
3. 模板不展示虚假成功数据，不伪造用户量或客户案例。
4. 切换交互可以先做静态 active 状态，后续再补 tab 动效。

## 10. 第 5 屏 开始方式 + FAQ + 最终 CTA 规格

### 10.1 模块目的

收口转化，让用户在最后一屏同时完成：

- 理解怎么开始
- 消除核心疑虑
- 点下 CTA

### 10.2 内部结构

建议按以下顺序组合：

1. 三步开始
2. 精简 FAQ
3. 最终 CTA

### 10.3 三步开始建议

1. 创建导师
2. 设定目标
3. 每天执行并完成验收

### 10.4 FAQ 只保留高价值问题

建议控制在 3 到 4 条，不做太长：

- Helo 和待办清单有什么区别
- AI 怎么判断我是否真的完成
- 会不会提醒太频繁
- 可以创建多个导师吗

### 10.5 第 5 屏验收标准

1. 三步开始、FAQ、最终 CTA 必须在同一屏或相邻紧凑区域完成收口，不再拆成多个长屏。
2. FAQ 控制在 3 到 4 条，优先回答转化阻力。
3. 最终 CTA 必须明显，但不制造廉价促销感。
4. Footer 如保留，应简洁，不抢最终 CTA。

## 11. 内容映射总原则

### 11.1 可以保留的

- Manychat 的结构逻辑
- Manychat 的版式比例
- Manychat 的模块顺序思路
- Manychat 的 CTA 节奏

### 11.2 必须替换的

- 品牌名称
- 文案
- 产品截图
- 用户案例
- 社会证明
- 平台 logo

### 11.3 映射方向

| Manychat 角色 | Helo 映射 |
| --- | --- |
| conversation automation | goal execution loop |
| creator use cases | target / mentor use cases |
| templates | goal templates / mentor templates |
| before & after inbox | before & after goal progress |
| social proof | capability proof / mechanism explanation |

## 12. 多会话协作规则

### 12.1 基本规则

会话之间不会自动同步，因此必须通过本文件同步信息。

### 12.2 各类会话职责

#### A. 拆解会话

职责：

- 对 Manychat 对应屏做更细的结构和视觉拆解
- 把拆解结果补充回本文件或新建子文档

禁止：

- 直接改首页代码
- 重新定义全局视觉系统

#### B. 内容映射会话

职责：

- 按本文件定义的 5 屏结构，把内容改写成 Helo 项目信息
- 保持信息密度、模块作用和节奏不变

禁止：

- 重写页面结构
- 发明新模块

#### C. 图片 / 视觉素材会话

职责：

- 根据本文件里的视觉要求产出图片提示词
- 保证图片和页面风格一致

禁止：

- 生成卡通图
- 偏离 Hero 摄影方向

#### D. 主实现会话

职责：

- 统一吸收前面所有结论
- 最终改代码
- 统一 spacing、按钮、色彩、字体和交互

### 12.3 同步方式

如果其他会话产出了新结论，必须使用以下任一方式同步：

1. 直接更新本文件
2. 新建同目录补充文档，并在本文件中追加链接

不允许只停留在聊天记录里。

### 12.4 冲突解决

如果多个会话对同一屏、同一 token 或同一交互给出不同建议：

1. 主实现会话拥有最终合并权。
2. 不同意见应先写成“备选方案”，不要直接覆盖既有规则。
3. 涉及全局 token、页面结构、屏数变化、主参考变化时，必须先更新本文件，再改代码。
4. 其他会话可以提出补充规格，但不得自行决定推翻 5 屏结构。

## 13. 当前执行顺序

建议按这个顺序推进：

1. 修完第 1 屏 Hero 关键差距
2. 拆解并实现第 2 屏
3. 拆解并实现第 3 屏
4. 拆解并实现第 4 屏
5. 拆解并实现第 5 屏
6. 最后统一做全页节奏和响应式收尾

## 14. 当前状态备注

截至当前版本：

- 首页整体已改为 Manychat 风格方向
- 首屏结构已基本接近
- 语言切换、吸顶导航、聊天区基础交互已存在
- 但首屏主视觉材质仍未完全达到 Manychat 级别

后续第一优先级不是继续加模块，而是先把 Hero 主视觉的摄影感和单卡表达修到位。
