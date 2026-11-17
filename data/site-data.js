/* ============================================================
   GEO指数 · 站点数据层
   geozhishu.com
   ------------------------------------------------------------
   ⚠️ 本文件为演示数据（demo），用于站点结构验收。
   真实采样数据接入后，由采样管线覆盖 data/site-data.js，
   页面无需改动。
   数据版本：demo-v0.1  生成时间：2026-11-10
   ============================================================ */
window.GZ = {

  meta: {
    siteName: "GEO指数",
    domain: "geozhishu.com",
    operator: "远见教育科技山西有限责任公司",
    dataVersion: "demo-v0.1",
    samplePeriod: "2026-W46",
    sampledAt: "2026-11-09",
    publishedAt: "2026-11-11",
    platforms: ["豆包", "DeepSeek", "通义千问", "腾讯元宝", "Kimi", "文心一言"],
    rounds: 5,
    isDemo: true
  },

  /* ---------- GEO 指数榜 ---------- */
  index: [
    { name:"中际装备制造", domain:"zhongji-mfg.com", industry:"工业制造", city:"深圳", score:78.2, presence:82, rank:76, accuracy:74, sources:80 },
    { name:"华创精密科技", domain:"huachuang-p.com", industry:"工业制造", city:"东莞", score:73.8, presence:79, rank:70, accuracy:72, sources:71 },
    { name:"南方新材料", domain:"nfmaterial.com", industry:"新材料", city:"佛山", score:71.6, presence:75, rank:68, accuracy:70, sources:72 },
    { name:"恒泰医疗器械", domain:"hengtai-med.com", industry:"医疗器械", city:"深圳", score:69.6, presence:74, rank:66, accuracy:68, sources:68 },
    { name:"金桥物流科技", domain:"jinqiao-log.com", industry:"现代物流", city:"广州", score:65.9, presence:70, rank:62, accuracy:65, sources:64 },
    { name:"锐信信息技术", domain:"ruixin-it.com", industry:"信息技术", city:"深圳", score:63.6, presence:68, rank:60, accuracy:60, sources:65 },
    { name:"天成建材集团", domain:"tiancheng-bm.com", industry:"建筑建材", city:"中山", score:61, presence:65, rank:58, accuracy:59, sources:60 },
    { name:"万里新能源", domain:"wanli-ne.com", industry:"新能源", city:"惠州", score:59, presence:63, rank:56, accuracy:57, sources:58 },
    { name:"瑞德化工", domain:"ruide-chem.com", industry:"精细化工", city:"珠海", score:56.6, presence:61, rank:54, accuracy:53, sources:57 },
    { name:"合众自动化", domain:"hezhong-auto.com", industry:"工业制造", city:"深圳", score:54.9, presence:59, rank:52, accuracy:52, sources:55 },
    { name:"东盛家具制造", domain:"dongsheng-fur.com", industry:"家居家具", city:"佛山", score:52.5, presence:57, rank:49, accuracy:50, sources:52 },
    { name:"蓝海环保工程", domain:"lanhai-env.com", industry:"环保工程", city:"深圳", score:50.8, presence:55, rank:48, accuracy:48, sources:50 },
    { name:"正中电子元件", domain:"zhengzhong-el.com", industry:"电子元件", city:"东莞", score:48.9, presence:53, rank:46, accuracy:46, sources:49 },
    { name:"德昌食品工业", domain:"dechang-food.com", industry:"食品加工", city:"江门", score:46.6, presence:51, rank:44, accuracy:43, sources:47 },
    { name:"永泰五金制品", domain:"yongtai-hw.com", industry:"五金制品", city:"中山", score:44.9, presence:49, rank:42, accuracy:42, sources:45 },
    { name:"博远教育科技", domain:"boyuan-edu.com", industry:"教育科技", city:"深圳", score:43.3, presence:47, rank:41, accuracy:40, sources:44 },
    { name:"安泰安防科技", domain:"antai-sec.com", industry:"安防科技", city:"深圳", score:41.7, presence:45, rank:39, accuracy:39, sources:43 },
    { name:"嘉禾农业科技", domain:"jiahe-agri.com", industry:"农业科技", city:"肇庆", score:39.7, presence:43, rank:37, accuracy:37, sources:41 },
    { name:"信达供应链", domain:"xinda-scm.com", industry:"现代物流", city:"深圳", score:37.9, presence:41, rank:35, accuracy:35, sources:40 },
    { name:"宏图印刷包装", domain:"hongtu-print.com", industry:"印刷包装", city:"东莞", score:35.4, presence:39, rank:33, accuracy:32, sources:37 },
    { name:"力天机械配件", domain:"litian-mach.com", industry:"工业制造", city:"佛山", score:33.5, presence:37, rank:31, accuracy:30, sources:35 },
    { name:"康泰生物制品", domain:"kangtai-bio.com", industry:"生物医药", city:"深圳", score:31.9, presence:35, rank:30, accuracy:28, sources:34 },
    { name:"兴业装饰工程", domain:"xingye-dec.com", industry:"建筑装饰", city:"广州", score:30.1, presence:33, rank:28, accuracy:27, sources:32 },
    { name:"广源纺织", domain:"guangyuan-tex.com", industry:"纺织服装", city:"佛山", score:28.3, presence:31, rank:26, accuracy:25, sources:31 },
    { name:"星辉照明电器", domain:"xinghui-light.com", industry:"照明电器", city:"中山", score:26.5, presence:29, rank:24, accuracy:24, sources:29 },
    { name:"通力汽配", domain:"tongli-auto.com", industry:"汽车配件", city:"东莞", score:24.8, presence:27, rank:23, accuracy:22, sources:27 },
    { name:"和顺餐饮管理", domain:"heshun-food.com", industry:"餐饮管理", city:"深圳", score:23, presence:25, rank:21, accuracy:21, sources:25 },
    { name:"金鹏塑胶制品", domain:"jinpeng-pl.com", industry:"塑胶制品", city:"惠州", score:21.2, presence:23, rank:20, accuracy:19, sources:23 },
    { name:"建业工程造价", domain:"jianye-cost.com", industry:"工程咨询", city:"广州", score:20, presence:22, rank:18, accuracy:18, sources:22 },
    { name:"兴隆家居用品", domain:"xinglong-home.com", industry:"家居家具", city:"佛山", score:19, presence:21, rank:17, accuracy:17, sources:21 },
    { name:"鼎盛模具制造", domain:"dingsheng-mold.com", industry:"工业制造", city:"东莞", score:18, presence:20, rank:16, accuracy:16, sources:20 },
    { name:"华美服装制造", domain:"huamei-gar.com", industry:"纺织服装", city:"广州", score:17, presence:19, rank:15, accuracy:15, sources:19 },
    { name:"长丰农产品", domain:"changfeng-agr.com", industry:"农业科技", city:"清远", score:16, presence:18, rank:14, accuracy:14, sources:18 },
    { name:"利民医药连锁", domain:"limin-pharm.com", industry:"医药流通", city:"深圳", score:15, presence:17, rank:13, accuracy:13, sources:17 },
    { name:"永丰不锈钢", domain:"yongfeng-steel.com", industry:"五金制品", city:"佛山", score:14, presence:16, rank:12, accuracy:12, sources:16 },
    { name:"天源环保设备", domain:"tianyuan-env.com", industry:"环保工程", city:"中山", score:13, presence:15, rank:11, accuracy:11, sources:15 },
    { name:"振华电子科技", domain:"zhenhua-el.com", industry:"电子元件", city:"东莞", score:12, presence:14, rank:10, accuracy:10, sources:14 },
    { name:"恒信物流运输", domain:"hengxin-log.com", industry:"现代物流", city:"广州", score:11, presence:13, rank:9, accuracy:9, sources:13 },
    { name:"大华包装材料", domain:"dahua-pack.com", industry:"印刷包装", city:"惠州", score:10, presence:12, rank:8, accuracy:8, sources:12 },
    { name:"新华印刷厂", domain:"xinhua-prt.com", industry:"印刷包装", city:"江门", score:9, presence:11, rank:7, accuracy:7, sources:11 },
    { name:"中安智能科技", domain:"zhongan-ai.com", industry:"安防科技", city:"深圳", score:8, presence:10, rank:6, accuracy:6, sources:10 },
    { name:"联合检测服务", domain:"lianhe-test.com", industry:"检测认证", city:"广州", score:7, presence:9, rank:5, accuracy:5, sources:9 },
    { name:"光明食品贸易", domain:"guangming-ft.com", industry:"食品加工", city:"深圳", score:6, presence:8, rank:4, accuracy:4, sources:8 },
    { name:"通达汽修连锁", domain:"tongda-rep.com", industry:"汽车配件", city:"东莞", score:5, presence:7, rank:3, accuracy:3, sources:7 },
    { name:"宏达工业设备", domain:"hongda-ind.com", industry:"工业制造", city:"佛山", score:4, presence:6, rank:2, accuracy:2, sources:6 },
    { name:"鑫源门窗幕墙", domain:"xinyuan-win.com", industry:"建筑建材", city:"中山", score:3.3, presence:5, rank:1, accuracy:2, sources:5 },
    { name:"金辉煌装饰材料", domain:"jinhh-dec.com", industry:"建筑装饰", city:"广州", score:2.5, presence:4, rank:1, accuracy:1, sources:4 },
    { name:"顺发五金厂", domain:"shunfa-hw.com", industry:"五金制品", city:"江门", score:2, presence:3, rank:1, accuracy:1, sources:3 },
    { name:"昌盛农产品加工", domain:"changsheng-agr.com", industry:"农业科技", city:"肇庆", score:1.3, presence:2, rank:0, accuracy:1, sources:2 },
    { name:"玉利塑料制品", domain:"yuli-pl.com", industry:"塑胶制品", city:"惠州", score:0.8, presence:1, rank:0, accuracy:1, sources:1 }
  ],

  /* ---------- 关联方榜（单独成表，延迟 60 天）---------- */
  related: {
    note: "运营方关联企业及其客户不进入常规榜单。本表单独发布，明确标注关联关系，延迟不少于 60 天进入。关联方适用同一套算法与采样协议，无任何豁免。",
    list: []
  },

  /* ---------- 信源榜 ---------- */
  sources: [
    { rank:1, domain:"gov.cn 系", name:"各级政府门户", level:"L1", industry:"全行业", citations:1842, share:14.2 },
    { rank:2, domain:"sohu.com", name:"搜狐", level:"L2", industry:"全行业", citations:1426, share:11.0 },
    { rank:3, domain:"sina.com.cn", name:"新浪", level:"L2", industry:"全行业", citations:1188, share:9.2 },
    { rank:4, domain:"163.com", name:"网易", level:"L2", industry:"全行业", citations:1064, share:8.2 },
    { rank:5, domain:"news.qq.com", name:"腾讯新闻", level:"L2", industry:"全行业", citations:932, share:7.2 },
    { rank:6, domain:"ifeng.com", name:"凤凰网", level:"L2", industry:"全行业", citations:810, share:6.3 },
    { rank:7, domain:"thepaper.cn", name:"澎湃新闻", level:"L2", industry:"全行业", citations:744, share:5.8 },
    { rank:8, domain:"36kr.com", name:"36氪", level:"L5", industry:"科技创投", citations:612, share:4.7 },
    { rank:9, domain:"cnblogs.com", name:"博客园", level:"L6", industry:"信息技术", citations:588, share:4.5 },
    { rank:10, domain:"zhihu.com", name:"知乎", level:"L6", industry:"全行业", citations:541, share:4.2 },
    { rank:11, domain:"jiemian.com", name:"界面新闻", level:"L2", industry:"全行业", citations:498, share:3.8 },
    { rank:12, domain:"yicai.com", name:"第一财经", level:"L2", industry:"全行业", citations:466, share:3.6 },
    { rank:13, domain:"csdn.net", name:"CSDN", level:"L5", industry:"信息技术", citations:421, share:3.2 },
    { rank:14, domain:"stcn.com", name:"证券时报网", level:"L2", industry:"金融", citations:388, share:3.0 },
    { rank:15, domain:"cn-healthcare.com", name:"健康界", level:"L5", industry:"医疗器械", citations:342, share:2.6 },
    { rank:16, domain:"iyiou.com", name:"亿欧", level:"L5", industry:"工业制造", citations:318, share:2.5 },
    { rank:17, domain:"d1net.com", name:"企业网D1Net", level:"L5", industry:"信息技术", citations:296, share:2.3 },
    { rank:18, domain:"cbminfo.com", name:"中国建材网", level:"L3", industry:"建筑建材", citations:274, share:2.1 },
    { rank:19, domain:"chem365.net", name:"中国化工网", level:"L3", industry:"精细化工", citations:251, share:1.9 },
    { rank:20, domain:"jx.cn", name:"江西新闻网", level:"L2", industry:"全行业", citations:228, share:1.8 }
  ],

  /* ---------- 失范公示 ---------- */
  warnings: [
    {
      id:"W-2026-011",
      title:"批量软文虚构产品被 AI 采信",
      level:"严重",
      source:"总台 2026 年「3·15」晚会报道",
      date:"2026-03-15",
      summary:"某类 GEO 优化软件可自动生成十余篇产品宣传软文并全网发布。测试者虚构了一款并不存在的智能手环，输入软件后自动生成宣传文章发布，随后向主流大模型提问时，有两家模型推荐了这款不存在的产品。",
      chain:"软件供应 → 内容批量生成 → 全网投喂 → 大模型抓取 → 伪装为标准答案",
      tips:"凡承诺「一周内让 AI 推荐你」的服务，追问三个问题：用什么平台、多少轮采样、基线是多少。答不出基线的，答案就在答案里。"
    },
    {
      id:"W-2026-012",
      title:"伪造行业排名与测评榜单",
      level:"严重",
      source:"经济日报 2026-03-23 报道",
      date:"2026-03-23",
      summary:"不法商户通过 GEO 工具批量生成虚假评测、伪造用户评价、杜撰行业排名，用自媒体账号在平台大量发布。虚假信息因数量庞大、角度丰富，更容易被 AI 判定为高权重信息而采纳。",
      chain:"杜撰榜单 → 自媒体矩阵分发 → 数量制造共识 → AI 采信为高权重",
      tips:"看榜单先看发布方。榜单发布方如果同时是 GEO 服务商，且自己排在第一位，这份榜单的用途是获客，不是度量。"
    },
    {
      id:"W-2026-013",
      title:"以「保证霸屏」为卖点的承诺型收费",
      level:"警示",
      source:"广告法第九条 · 反不正当竞争法第八条",
      date:"2026-03-23",
      summary:"部分服务商以「保证进入 AI 首选推荐」「保证霸屏」为卖点收费。此类承诺违反广告法对绝对化用语的规制，且在技术上无法兑现——大模型回答具有随机性，同一问题多次提问结果不同。",
      chain:"绝对化承诺 → 收取前期费用 → 无法交付 → 归因于「算法更新」→ 追加投喂费用",
      tips:"任何声称能「保证」AI 排名的服务，技术上都不成立。可靠的服务只报两个数：事实出现率、事实正确率，并给出基线。"
    },
    {
      id:"W-2026-014",
      title:"企业信息多平台不一致导致 AI 描述错误",
      level:"警示",
      source:"GEO指数 2026-W46 采样观察",
      date:"2026-11-09",
      summary:"在首期 300 家样本的采样中，存在改名史、多主体、有过并购的企业，被 AI 系统性描述错误的概率显著高于单主体企业。AI 会把旧名、旧地址、旧业务与新信息拼接，形成看似合理但事实错误的描述。",
      chain:"信息源不一致 → 多版本事实并存 → AI 拼接 → 幻觉输出",
      tips:"改名或多主体企业，第一步不是发新稿，是把旧信息清理干净。AI 不会遗忘，只会拼接。"
    }
  ],

  /* ---------- 服务商审计名录 ---------- */
  audit: {
    note:"进入备案名录须提交技术证据、方法证据、结果证据三项可验证材料。运营方关联企业适用同一标准，无豁免，进入名录时标注关联关系。首期名录于 2026-12 开放申请。",
    tiers: [
      { tier:"已备案", desc:"三项证据齐备，通过形式审查", count:0, status:"2026-12 开放" },
      { tier:"申请中", desc:"已提交材料，审查中", count:0, status:"2026-12 开放" },
      { tier:"未备案", desc:"未提交材料或材料不全", count:0, status:"—" },
      { tier:"否决", desc:"触发否决项，一票出局", count:0, status:"—" }
    ],
    veto: [
      "有证据表明使用批量虚假内容投喂",
      "有证据表明伪造排名、伪造测评、伪造用户评价",
      "拒绝披露采样方法",
      "收取「保证排名」「保证霸屏」类承诺费用"
    ],
    evidence: [
      { key:"技术证据", items:["授权发明专利（专利号，权利人须与服务商一致或有关联证明）","软件著作权（登记号）","自研系统说明：采集方法、去重方法、轮次控制"] },
      { key:"方法证据", items:["公开可查的采样方法说明（平台、轮次、问题集构建方式）","指标定义与计算式，不得只给结论不给算法","效果归因方法：如何排除自然增长、如何设置对照组"] },
      { key:"结果证据", items:["案例必须报两个数：事实出现率 + 事实正确率","只报「提升 300%」而不报基线的不予采信","案例须提供平台、周期、问题集范围，缺一不可"] }
    ]
  },

  /* ---------- 行业分榜 ---------- */
  industries: [
    "工业制造","新材料","医疗器械","现代物流","信息技术","建筑建材","新能源",
    "精细化工","家居家具","环保工程","电子元件","食品加工","五金制品","教育科技",
    "安防科技","农业科技","印刷包装","生物医药","建筑装饰","纺织服装","照明电器",
    "汽车配件","餐饮管理","塑胶制品","工程咨询","医药流通","检测认证"
  ]
};
