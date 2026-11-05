# memory.md

Durable context for the personal-web workspace. Short, factual, dated entries — newest first.

## 2026-11-05

- 网站重构为 [PRISM](https://github.com/xyjoey/PRISM)（Next.js 15.5.29 + Tailwind，静态导出 `out/`）。定位改为 **Incoming Yield Enhancement Engineer · SMIC South (中芯南方), Shanghai, 2027**；原「lithography / AI enablement」主线与技培生序列表述已移除，AI/数据弱化为个人方向。
- 页面：About（含 Focus Areas / Skills / News）+ Projects（卡片）+ Experience + CV（在线 Markdown，无 PDF 下载）。内容入口全部在 `content/`，维护方式见 `README.md`。
- 旧站归档：`legacy/static-2026/`（2026-10 纯静态站）、`legacy/legacy-vite-*`、`legacy/photo.png`。旧简历 `legacy/杨欣磊-简历-2026-10.pdf` 仅本地保留（`legacy/*.pdf` 已 gitignore，不随仓库公开）；内容仍写技培生/AI 方向，更新前不要提供下载。
- 部署工作流 `.github/workflows/deploy-pages.yml` 已改为 Node 22 上 `npm ci` + `npm run build`，发布 `out/`。GitHub 账号/仓库更名为 `xinlei3stone/xinlei3stone.github.io`，remote 已更新，线上地址改为 https://xinlei3stone.github.io/。
- 模板作者的个人内容已清理：访客地图、点赞、`jialeliu` 字体镜像、示例头像/视频/论文/简历、BibTeX/Publications 死代码与依赖。`npm audit` 剩余 postcss 告警嵌套在 Next 15.5.29 内，修复需升 Next 16（暂不升级，静态站构建期问题）。
- 截至本条目，改动只在本地完成并通过 build + 桌面/移动端/深色模式预览，**尚未 commit / push**，线上仍是旧站。

## 2026-10-20

- 网站部署上线：https://phdstone.github.io/（仓库 `PhDStone.github.io`，公开；本 workspace 即仓库）。推送 `main` 后由 Actions 工作流 `.github/workflows/deploy-pages.yml` 将 `web/` 发布到 GitHub Pages（Pages 模式已从 legacy 切换为 workflow）。日常更新：改 `web/` 文件 → commit → push，约 1 分钟上线。
- 远程旧版网站（Vite/React，旧「材料研发工程师」定位）历史已合并保留：旧版 `index.html`/`assets/`/`photo.png`/`杨欣磊-简历.pdf` 均未删，旧源码在 `source` 分支；本地留有备份分支 `pre-merge-backup`（已无用途，可删）。
- gh CLI 已安装并登录 GitHub（PhDStone 账号，含 `workflow` 权限）；Qoder GitHub 连接器写工作流文件报内部错误，本仓库操作统一走 gh/git。
- 初始化本地 Git 仓库（无远程）：基线提交 `2047762`，`.gitignore` 忽略 `.DS_Store`；仓库级身份设为 杨欣磊 <xinlei2001@foxmail.com>。网站文件未改动。

## 2026-10-19

- Workspace moved from `MasterProject/personal-web/` to `AICowork/personal-web/` — unrelated to the master's thesis; now the third top-level workspace.
- Current state: static engineer portfolio (title "杨欣磊 — 工程师作品集"), exported from Qoder; site files in `web/`; no deployment yet.

## 2026-10-19

- Site redesigned and repositioned around the incoming SMSC role (user-approved decisions): full English copy; cooler blue/graphite palette; sections = Hero (bridge-positioning headline) / Selected Work (EchemPro, RuNi–M 工作二, Ru/NiMo 工作一, capstone QA assistant tagged "In progress") / 5-phase pre-onboarding roadmap (all statuses "Planned" — user flips as progress happens) / Career / Skills (split "using every week" vs "learning now") / Contact (email + RedBook only; demo form removed in favor of mailto).
- Fake designer-portfolio demo content fully replaced; every project on the page is real.
