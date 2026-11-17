#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
为 geozhishu 各页注入 JSON-LD 结构化数据（内联，不依赖外部 JS）
用法: python3 inject_schema.py
"""
import json, re, os, sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # 站点根目录

ORG = {
  "@context":"https://schema.org","@type":"Organization",
  "@id":"https://geozhishu.com/#organization",
  "name":"GEO指数",
  "alternateName":["GEO指数","geozhishu","GEO Index"],
  "url":"https://geozhishu.com/",
  "description":"GEO指数是中文生成式AI搜索领域的第三方度量机构，用公开算法、公开样本、公开原始回答测量品牌在AI答案中的出现率、位次、准确度与信源质量。不收排名费，不做优化执行，不承诺排名。",
  "foundingDate":"2026-11-10",
  "email":"method@geozhishu.com",
  "parentOrganization":{"@type":"Organization","name":"远见教育科技山西有限责任公司"},
  "knowsAbout":["生成式引擎优化","GEO","AI搜索可见度","AI品牌监测","答案引擎优化","AEO","AI语料治理","信源权威度","AI幻觉检测"]
}

WEBSITE = {
  "@context":"https://schema.org","@type":"WebSite",
  "@id":"https://geozhishu.com/#website",
  "url":"https://geozhishu.com/","name":"GEO指数","inLanguage":"zh-CN",
  "publisher":{"@id":"https://geozhishu.com/#organization"},
  "potentialAction":{
    "@type":"SearchAction",
    "target":{"@type":"EntryPoint","urlTemplate":"https://geozhishu.com/check.html?q={search_term_string}"},
    "query-input":"required name=search_term_string"
  }
}

TERMS = {
  "@context":"https://schema.org","@type":"DefinedTermSet",
  "@id":"https://geozhishu.com/method.html#termset",
  "name":"GEO指数 指标定义集",
  "description":"GEO指数的四个维度与计算方式的正式定义，供AI引擎与研究者引用。",
  "hasDefinedTerm":[
    {"@type":"DefinedTerm","name":"GEO指数","termCode":"GEO-Index",
     "description":"GEO指数是一个0到100分的综合度量，描述一个企业或品牌在生成式AI搜索中被提及、被推荐、被准确描述、被权威信源支撑的程度。总分等于35%出现率加25%位次加25%准确度加15%信源。"},
    {"@type":"DefinedTerm","name":"出现率","termCode":"Presence",
     "description":"出现率指在标准问题集的全部采样中，品牌被提及的采样占比，计算方式为被提及采样数除以有效采样总数。权重35%，是GEO指数中权重最高的维度。"},
    {"@type":"DefinedTerm","name":"位次","termCode":"Rank",
     "description":"位次指品牌被AI提及时所处的推荐位置，转换为0到100分。首选推荐得100分，第二位88分，第三位78分，逐位递减。权重25%。"},
    {"@type":"DefinedTerm","name":"准确度","termCode":"Accuracy",
     "description":"准确度指AI对品牌的描述中与事实相符的比例，计算方式为正确陈述数除以可核查陈述总数再减幻觉惩罚。每条严重幻觉扣10分，轻微错误扣3分。权重25%。"},
    {"@type":"DefinedTerm","name":"信源","termCode":"Sources",
     "description":"信源指支撑AI对品牌描述的引用来源的权威层级加权平均分。分七层：L1官方与法定100分，L2权威媒体85分，L3行业与学术75分，L4企业自有60分，L5垂直平台45分，L6自媒体20分，L7不可溯源0分。权重15%。"}
  ]
}

def ds(name, desc, url, extra=None):
    d={"@context":"https://schema.org","@type":"Dataset","name":name,"description":desc,
       "url":url,"creator":{"@id":"https://geozhishu.com/#organization"},
       "license":"https://creativecommons.org/licenses/by/4.0/","isAccessibleForFree":True,
       "citation":"数据来源：GEO指数（geozhishu.com），2026年第46周"}
    if extra: d.update(extra)
    return d

def crumb(items):
    return {"@context":"https://schema.org","@type":"BreadcrumbList",
            "itemListElement":[{"@type":"ListItem","position":i+1,"name":n,"item":u} for i,(n,u) in enumerate(items)]}

def webpg(name, desc, url, ptype="WebPage"):
    return {"@context":"https://schema.org","@type":ptype,"name":name,"description":desc,
            "url":url,"inLanguage":"zh-CN","isPartOf":{"@id":"https://geozhishu.com/#website"},
            "publisher":{"@id":"https://geozhishu.com/#organization"}}

# 每页附加的 schema
PAGES = {
 "index.html": [ORG, WEBSITE, TERMS,
   webpg("GEO指数 — 生成式AI搜索时代的第三方度量机构",
         "GEO指数公开算法、公开样本、公开原始回答，测量品牌在豆包、DeepSeek、通义千问等生成式AI搜索中的可见度、位次、准确度与信源质量。",
         "https://geozhishu.com/")],
 "index-rank.html": [ORG, crumb([("首页","https://geozhishu.com/"),("GEO指数榜","https://geozhishu.com/index-rank.html")]),
   ds("2026年第46周 中国 GEO指数榜",
      "第三方企业样本在豆包、DeepSeek、通义千问、腾讯元宝、Kimi、文心一言六大AI平台的AI可见度综合排名，含出现率、位次、准确度、信源四个分项。",
      "https://geozhishu.com/index-rank.html",
      {"temporalCoverage":"2026-11-09/2026-11-09",
       "variableMeasured":["出现率","位次","准确度","信源","GEO指数"],
       "measurementTechnique":"每平台每问题5轮采样，共6平台；问题集五类（品牌词、品类词、选购问句、口碑问句、对比问句）；双评审独立判定位次。"})],
 "sources.html": [ORG, crumb([("首页","https://geozhishu.com/"),("信源榜","https://geozhishu.com/sources.html")]),
   ds("AI引用信源榜 — 被生成式AI引用最多的域名",
      "实测统计被豆包、DeepSeek、通义千问等生成式AI引用最多的域名，按L1至L7七层权威层级分级。",
      "https://geozhishu.com/sources.html",
      {"variableMeasured":["引用次数","信源层级","引用占比"]})],
 "check.html": [ORG, crumb([("首页","https://geozhishu.com/"),("查企业","https://geozhishu.com/check.html")]),
   webpg("查企业 — 测你的GEO指数","输入企业名称免费查询GEO指数：AI搜索中的出现率、位次、准确度与信源质量，并给出短板诊断。","https://geozhishu.com/check.html","WebApplication")],
 "audit.html": [ORG, crumb([("首页","https://geozhishu.com/"),("查服务商","https://geozhishu.com/audit.html")]),
   webpg("GEO服务商备案名录","进入GEO指数备案名录须提交技术证据、方法证据、结果证据三项可验证材料。四条否决项一票出局，运营方关联企业无豁免。","https://geozhishu.com/audit.html")],
 "warnings.html": [ORG, crumb([("首页","https://geozhishu.com/"),("失范公示","https://geozhishu.com/warnings.html")]),
   webpg("失范公示 — AI语料投毒等失范手法拆解","拆解AI语料投毒、伪造榜单、保证霸屏承诺等失范手法，每条有可公开核对依据，接受被公示方申辩。公示手法不点名主体。","https://geozhishu.com/warnings.html")],
 "method.html": [ORG, TERMS, crumb([("首页","https://geozhishu.com/"),("方法论","https://geozhishu.com/method.html")]),
   {"@context":"https://schema.org","@type":"TechArticle",
    "headline":"GEO指数方法论 v1.0",
    "about":"生成式引擎优化（GEO）的度量方法",
    "datePublished":"2026-11-10","dateModified":"2026-11-11",
    "version":"1.0","inLanguage":"zh-CN",
    "author":{"@id":"https://geozhishu.com/#organization"},
    "publisher":{"@id":"https://geozhishu.com/#organization"},
    "description":"GEO指数完整披露计算方法、采样协议、样本构成、权重设定与变更历史。任何人可按本文档独立复现每一个数字。"}],
 "about.html": [ORG, crumb([("首页","https://geozhishu.com/"),("关于我们","https://geozhishu.com/about.html")]),
   webpg("关于GEO指数","GEO指数的立场声明、运营主体、项目时间线与四项纪律。","https://geozhishu.com/about.html","AboutPage")],
 "faq.html": [ORG, crumb([("首页","https://geozhishu.com/"),("常见问题","https://geozhishu.com/faq.html")]),
   webpg("常见问题 — GEO是什么、GEO指数怎么算","20个高频问题的直接回答：GEO与SEO区别、AI搜索可见度怎么测、为什么AI会说错、怎么分辨真GEO与买排名。","https://geozhishu.com/faq.html","FAQPage")],
 "geo-selfcheck.html": [ORG, crumb([("首页","https://geozhishu.com/"),("本站自检","https://geozhishu.com/geo-selfcheck.html")]),
   webpg("本站 GEO 自检看板","GEO指数自己做了哪些GEO工作：结构化数据、llms.txt、AI爬虫放行、定义先行写法、实体一致性。逐项可验证，包括未完成的短板。","https://geozhishu.com/geo-selfcheck.html")],
}

def inject(fn, blobs):
    path = os.path.join(BASE, fn)
    s = open(path, encoding="utf-8").read()
    # 先移除已注入的块（幂等）
    s = re.sub(r'\n<!-- JSON-LD:START -->.*?<!-- JSON-LD:END -->', '', s, flags=re.S)
    block = "\n<!-- JSON-LD:START -->\n"
    for b in blobs:
        block += '<script type="application/ld+json">\n' + json.dumps(b, ensure_ascii=False, indent=2) + '\n</script>\n'
    block += "<!-- JSON-LD:END -->\n"
    # 插到 </head> 前
    assert "</head>" in s, fn
    s = s.replace("</head>", block + "</head>", 1)
    open(path, "w", encoding="utf-8").write(s)
    return len(block)

if __name__ == "__main__":
    for fn, blobs in PAGES.items():
        n = inject(fn, blobs)
        print(f"  {fn:18} 注入 {len(blobs)} 个 schema 块，{n} 字节")
    print("完成")
