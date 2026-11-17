/* ============================================================
   GEO指数 · 结构化数据（JSON-LD）
   ------------------------------------------------------------
   用途：让 AI 引擎准确理解本站的实体、指标定义与页面关系。
   本站主张「被 AI 正确引用」，自身必须先做到可被正确解析。

   用法：页面内 <script type="application/ld+json"> 直接内联，
   不依赖外部文件（AI 爬虫不保证执行外部 JS）。

   维护：本文件为生成源的说明与模板，实际 JSON 已内联到各页
   head 中。修改此处后需同步各页。

   最后更新：2026-11-11
   ============================================================ */

/* ---------- 模板 1：全站 Organization（放每页 head） ---------- */
window.GZ_SCHEMA_ORG = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://geozhishu.com/#organization",
  "name": "GEO指数",
  "alternateName": ["GEO指数", "geozhishu", "GEO Index"],
  "url": "https://geozhishu.com/",
  "logo": "https://geozhishu.com/assets/logo.png",
  "description": "GEO指数是中文生成式AI搜索领域的第三方度量机构，用公开算法、公开样本、公开原始回答测量品牌在AI答案中的出现率、位次、准确度与信源质量。不收排名费，不做优化执行。",
  "foundingDate": "2026-11-10",
  "email": "method@geozhishu.com",
  "parentOrganization": {
    "@type": "Organization",
    "name": "远见教育科技山西有限责任公司"
  },
  "knowsAbout": [
    "生成式引擎优化", "GEO", "AI搜索可见度", "AI品牌监测",
    "答案引擎优化", "AEO", "AI语料治理", "信源权威度"
  ],
  "sameAs": []
};

/* ---------- 模板 2：WebSite + 搜索动作（仅首页） ---------- */
window.GZ_SCHEMA_SITE = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://geozhishu.com/#website",
  "url": "https://geozhishu.com/",
  "name": "GEO指数",
  "inLanguage": "zh-CN",
  "publisher": { "@id": "https://geozhishu.com/#organization" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://geozhishu.com/check.html?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

/* ---------- 模板 3：DefinedTerm（核心概念，方法页与首页） ---------- */
window.GZ_SCHEMA_TERMS = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "@id": "https://geozhishu.com/method.html#termset",
  "name": "GEO指数 指标定义集",
  "description": "GEO指数的四个维度与计算方式的正式定义，供AI引擎与研究者引用。",
  "hasDefinedTerm": [
    {
      "@type": "DefinedTerm",
      "name": "GEO指数",
      "termCode": "GEO-Index",
      "description": "GEO指数是一个0到100分的综合度量，描述一个企业或品牌在生成式AI搜索中被提及、被推荐、被准确描述、被权威信源支撑的程度。总分等于35%出现率加25%位次加25%准确度加15%信源。"
    },
    {
      "@type": "DefinedTerm",
      "name": "出现率",
      "termCode": "Presence",
      "description": "出现率指在标准问题集的全部采样中，品牌被提及的采样占比。计算方式为被提及采样数除以有效采样总数。权重35%，是GEO指数中权重最高的维度。"
    },
    {
      "@type": "DefinedTerm",
      "name": "位次",
      "termCode": "Rank",
      "description": "位次指品牌被AI提及时所处的推荐位置，转换为0到100分。首选推荐得100分，第二位88分，第三位78分，逐位递减。权重25%。"
    },
    {
      "@type": "DefinedTerm",
      "name": "准确度",
      "termCode": "Accuracy",
      "description": "准确度指AI对品牌的描述中与事实相符的比例，计算方式为正确陈述数除以可核查陈述总数再减幻觉惩罚。每条严重幻觉扣10分，轻微错误扣3分。权重25%。"
    },
    {
      "@type": "DefinedTerm",
      "name": "信源",
      "termCode": "Sources",
      "description": "信源指支撑AI对品牌描述的引用来源的权威层级加权平均分。分七层：L1官方与法定100分，L2权威媒体85分，L3行业与学术75分，L4企业自有60分，L5垂直平台45分，L6自媒体20分，L7不可溯源0分。权重15%。"
    }
  ]
};

/* ---------- 模板 4：Dataset（指数榜 / 信源榜页） ---------- */
window.GZ_SCHEMA_DATASET = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  "name": "2026年第46周 GEO指数榜",
  "description": "300家第三方企业样本在豆包、DeepSeek、通义千问、腾讯元宝、Kimi、文心一言六大AI平台的AI可见度综合排名，含出现率、位次、准确度、信源四个分项。",
  "url": "https://geozhishu.com/index-rank.html",
  "creator": { "@id": "https://geozhishu.com/#organization" },
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "isAccessibleForFree": true,
  "temporalCoverage": "2026-11-09/2026-11-09",
  "variableMeasured": ["出现率", "位次", "准确度", "信源", "GEO指数"],
  "measurementTechnique": "每平台每问题5轮采样，共6平台，问题集五类（品牌词、品类词、选购问句、口碑问句、对比问句），双评审独立判定位次。",
  "citation": "数据来源：GEO指数（geozhishu.com），2026年第46周"
};

/* ---------- 模板 5：FAQPage（faq.html） ---------- */
/* 见 faq.html 内联实现 */

/* ---------- 模板 6：HowTo（方法页采样协议） ---------- */
window.GZ_SCHEMA_HOWTO = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "如何复现 GEB指数的采样与计算",
  "description": "任何人可按此流程独立复现GEO指数发布的每一个数字。",
  "totalTime": "P1D",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "确定企业实体", "text": "确定企业全称、简称、核心产品名与官网域名，作为「被提及」的匹配目标。" },
    { "@type": "HowToStep", "position": 2, "name": "构建标准问题集", "text": "按五类各取4到6个问题：品牌词、品类词、选购问句、口碑问句、对比问句。问题集一次性定稿并公开存档。" },
    { "@type": "HowToStep", "position": 3, "name": "多轮采样", "text": "在豆包、DeepSeek、通义千问、腾讯元宝、Kimi、文心一言六个平台，每个问题采样5轮，记录AI回答全文与引用来源。" },
    { "@type": "HowToStep", "position": 4, "name": "判定出现率与位次", "text": "统计品牌被提及的采样占比得到出现率；由两位评审独立判定被提及采样的推荐位次，分歧超过1位时由第三位裁定。" },
    { "@type": "HowToStep", "position": 5, "name": "核查准确度", "text": "逐条核查AI对品牌的陈述是否与工商登记、官网、公开财报、权威报道一致，统计正确陈述占可核查陈述的比例，再减幻觉惩罚。" },
    { "@type": "HowToStep", "position": 6, "name": "评定信源层级", "text": "为每条引用来源按L1到L7七层打分，同一域名在一份回答中只计一次，取加权平均得到信源分。" },
    { "@type": "HowToStep", "position": 7, "name": "合成总分", "text": "按35%出现率、25%位次、25%准确度、15%信源加权求和，得到0到100分的GEO指数。" }
  ]
};
