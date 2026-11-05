# Xinlei Yang — Personal Site

个人主页，基于 [PRISM](https://github.com/xyjoey/PRISM)（Next.js 15 + Tailwind CSS）重构。定位：即将入职 **中芯南方（SMIC South）良率提升（Yield Enhancement）工程师**；电化学/材料研究背景，AI 与数据工具作为个人方向。

线上地址：https://xinlei3stone.github.io/

## 内容维护

日常改文案只需要动 `content/`，不用碰 `src/`：

| 文件 | 内容 |
|---|---|
| `content/config.toml` | 站点标题、作者信息、头像、社交链接、导航 |
| `content/about.toml` | 首页板块顺序与左侧 Focus Areas |
| `content/bio.md` | 首页 About 正文 |
| `content/skills.md` | Skills & Tools |
| `content/news.toml` | News 列表 |
| `content/projects.toml` | Projects 卡片 |
| `content/experience.toml` + `experience.md` | Experience 页 |
| `content/cv.toml` + `cv.md` | 在线 CV 页 |

Markdown 常规换行在页面上会合并成一段；需要分段时留一个空行。

## 本地开发

需要 Node.js 22+。

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build    # 静态导出到 out/
```

## 部署

推送 `main` 后，GitHub Actions（`.github/workflows/deploy-pages.yml`）会自动 `npm ci` + `npm run build`，把 `out/` 发布到 GitHub Pages，约 1 分钟上线。

## 目录

- `public/` — 头像 `avatar.png`、favicon；构建时原样复制到站点根目录
- `src/` — PRISM 模板代码（布局、组件、样式）；一般只在调整视觉时修改
- `legacy/` — 2026-10 旧纯静态站与旧 Vite 文件归档，**不再部署**
- `legacy/杨欣磊-简历-2026-10.pdf` — 旧简历，仅本地保留（已加入 `.gitignore`，不会随仓库公开）；内容仍写技培生/AI 方向，更新后再考虑提供下载

## 模板

PRISM 采用 MIT 协议，见 `LICENSE`。原项目：https://github.com/xyjoey/PRISM
