# geozhishu.com 部署说明

> 域名：geozhishu.com（阿里云万网注册，2026-11-10）
> NS：dns15.hichina.com / dns16.hichina.com
> 运营主体：远见教育科技山西有限责任公司
> 站点根目录：本文件夹（静态站，零构建、零依赖，纯 HTML/CSS/JS）

---

## 一、站点结构

```
geozhishu/
├── index.html          首页（首屏查询入口 + 四维说明 + 榜单预览）
├── index-rank.html     指数榜（全量榜单 + 筛选 + 关联方榜）
├── sources.html        信源榜（L1-L7 层级 + 域名榜）
├── check.html          查企业（免费查询工具）
├── audit.html          查服务商（备案名录 + 三项证据 + 四否决项）
├── warnings.html       失范公示（3·15 案例拆解 + 九问自查）
├── method.html         关于/方法论（算法、协议、局限、变更日志）
├── about.html          关于我们（立场声明、主体、时间线、纪律）
├── faq.html            常见问题（16 问，FAQPage schema，长尾提问捕获）
├── geo-selfcheck.html  本站 GEO 自检看板（21 项检查，含未完成的短板）
├── assets/style.css    全站样式（单文件，18KB）
├── robots.txt          对 AI 爬虫全部放行（17 个 UA）
├── llms.txt            给 AI 的站点说明书
├── sitemap.xml         10 页
├── data/site-data.js   数据层（单一数据源，页面 JS 从这里读）
├── method/             方法论 Markdown 全文（可下载）
├── docs/               部署与运维文档
└── CNAME               域名绑定（GitHub Pages 用）
```

**关键设计**：所有榜单数据集中在 `data/site-data.js` 一个文件里。采样管线接入后只覆盖这一个文件，8 个页面自动更新，无需改页面代码。

---

## 二、部署方式（二选一）

### 方案 A：GitHub Pages（免备案，可立即上线）

1. 把本文件夹内容推到仓库（如 `geozhishu` 仓库的 `main` 分支根目录）
2. 仓库 Settings → Pages → Source 选 `Deploy from a branch` → `main` / `/ (root)` → Save
3. `CNAME` 文件已就位（内容 `geozhishu.com`）
4. 阿里云 DNS 添加记录：

| 类型 | 主机记录 | 记录值 | TTL |
|---|---|---|---|
| A | @ | 185.199.108.153 | 600 |
| A | @ | 185.199.109.153 | 600 |
| A | @ | 185.199.110.153 | 600 |
| A | @ | 185.199.111.153 | 600 |
| CNAME | www | richardchin1688.github.io | 600 |

5. 等 DNS 生效（约 10 分钟–2 小时）后，在 Pages 里勾选 **Enforce HTTPS**
6. 验证：`curl -I https://geozhishu.com` 应返回 `200`

⚠️ GitHub Pages 在国内访问速度一般。适合"先上线、先被收录"，长期建议走方案 B。

### 方案 B：国内云服务器（需备案，信任度更高）

推荐腾讯云 / 阿里云轻量应用服务器。

1. **ICP 备案**（必须先做，约 10–20 个工作日）
   - 备案主体：远见教育科技山西有限责任公司
   - 备案期间域名不能对外提供网站服务（可先挂"备案中"提示页）
2. 备案通过后，Nginx 配置参考 `docs/nginx.conf`
3. SSL 证书：Let's Encrypt 免费证书，或云厂商免费证书

### 推荐：双线并行（陛下已定）

- **主站**：国内备案 + 云服务器（企业信任度、访问速度）
- **镜像**：GitHub Pages（备案期间先用它顶上，备案后作为备份镜像 + 海外访问线路）

---

## 三、上线前必做清单

- [ ] DNS 解析（方案 A 的 4 条 A 记录 + 1 条 CNAME）
- [ ] HTTPS 强制跳转（HTTP → HTTPS 301）
- [ ] 提交百度搜索资源平台 + 必应站长 + Google Search Console，提交 `sitemap.xml`
- [ ] 验证 `robots.txt` 可访问（本站对 AI 爬虫全开放，见下）
- [ ] 检查移动端（Chrome DevTools 375px 宽）
- [ ] 邮箱 MX 记录（method@ / data@ / audit@ / report@ / press@ 五个邮箱需先在企业邮箱后台创建）

---

## 四、GEO 自适配（本站自身的 GEO 工作）

本站主张「被 AI 正确引用」，自身必须先做到。已落地七项：

| 项 | 做法 | 验证方式 |
|---|---|---|
| 结构化数据 | 全站 10 页 **27 块 JSON-LD**，六种 schema：Organization / WebSite / DefinedTermSet / Dataset / FAQPage / BreadcrumbList / TechArticle / WebApplication / AboutPage | `document.querySelectorAll('script[type="application/ld+json"]').length` |
| 定义先行 | 每页第一段即为可提取的完整定义 | 逐页读首段 |
| 实体一致 | 站名、主体、四个指标名与权重全站统一，无换说法 | 跨页比对 |
| canonical | 10 页全部声明 | 查看 head |
| AI 爬虫放行 | robots.txt 显式放行 17 个 UA（10 类平台） | 访问 /robots.txt |
| llms.txt | 给 AI 的站点说明书：是什么、核心页面、引用格式、四项纪律 | 访问 /llms.txt |
| 表格真实表格 | 榜单用 `<table>` 而非 div 堆砌，AI 易解析 | 查看源码 |

自检看板页：`/geo-selfcheck.html` —— **21 项检查逐条列出，包含 2 项部分完成、2 项待办**，公开短板。
重新注入 schema：`python3 docs/inject_schema.py`（幂等，可重复执行）

## 五、关于 AI 爬虫（重要，与站点主题强相关）

本站在 `robots.txt` 中对主流 AI 爬虫**全部放行**。理由：GEO指数 主张"被 AI 正确引用"，如果自己屏蔽 AI 爬虫，等于自证不可信。

已放行：`GPTBot` `OAI-SearchBot` `ChatGPT-User` `ClaudeBot` `Claude-Web` `PerplexityBot` `Bytespider`（豆包）`Baiduspider` `Google-Extended` `Applebot-Extended` 等。

同时提交 `llms.txt`（AI 友好说明文件），帮助 AI 正确理解站点结构与数据口径。

---

## 五、数据更新流程（采样管线接入后）

```bash
# 1. 采样（待建）
python3 scripts/geo_sample.py --period 2026-W47 --brands data/brands.csv

# 2. 出具指数
python3 scripts/geo_index.py --period 2026-W47

# 3. 覆盖站点数据层（唯一一步）
cp output/site-data.js data/site-data.js

# 4. 部署（GitHub 方案）
git add data/site-data.js && git commit -m "data: 2026-W47" && git push
```

⚠️ **发布铁律**：采样截止到发布不少于 36 小时（人工复核与争议处理），不允许采样完直接发。

---

## 六、数据状态说明

当前 `data/site-data.js` 中 `meta.isDemo = true`，榜单为**演示样本**（50 家企业），仅用于站点结构验收。
页面上已明确标注"演示样本"。真实采样数据接入后覆盖该文件即可，页面无需改动。

---

## 七、核验记录（2026-11-11）

用 Playwright Chromium 真实渲染核验 8 个页面：

```
✅ 首页       index.html        文本 4823字  tbody[10,4]
✅ 指数榜      index-rank.html   文本 3933字  tbody[50]
✅ 信源榜      sources.html      文本 2107字  tbody[7,20]
✅ 查企业      check.html        文本 1525字  tbody[5]
✅ 服务商      audit.html        文本 1779字  tbody[]
✅ 失范公示     warnings.html     文本 3140字  tbody[9]
✅ 关于/方法论   method.html      文本 3152字  tbody[4,1]
✅ 关于我们     about.html        文本 1991字  tbody[]
```

核验项：JS 无报错、无裸代码（`-->` / `undefined` / `NaN` / `[object Object]`）、无 tofu 方框、站内链接全部 200、CSS 生效、数据容器均已填充。
50 条样本的四维加权与总分一致性：**0 条不符**（脚本校验）。
