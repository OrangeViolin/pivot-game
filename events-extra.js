// =============================================================================
// events-extra.js
// Random events & Shi Zhan (施展) insights for the Pivot (枢纽) strategy game
// =============================================================================

// -----------------------------------------------------------------------------
// RANDOM_EVENTS
// Small random events per era. Each event:
//   title: Chinese title
//   desc: Chinese description
//   effects: { regionKey: { p: prosperity, m: military, c: culture, t: trade } }
//   duration: 1 (always single turn)
//
// Effect values are small: -2 to +2
// -----------------------------------------------------------------------------

const RANDOM_EVENTS = {

  // =========================================================================
  // Era 1: 封建社会 (Feudal, ~1046-221 BC)
  // Bronze age, Zhou dynasty, Spring & Autumn, Warring States
  // =========================================================================
  1: [
    {
      title: "中原大旱",
      desc: "黄河流域连续数月无雨，庄稼枯死，百姓流离失所。",
      effects: {
        zhongyuan: { p: -2, m: 0, c: 0, t: -1 }
      },
      duration: 1
    },
    {
      title: "洪水泛滥",
      desc: "大河决堤，淹没良田无数，但冲刷出肥沃的淤泥地。",
      effects: {
        zhongyuan: { p: -1, m: 0, c: 0, t: -1 },
        guodu: { p: -1, m: 0, c: 0, t: 0 }
      },
      duration: 1
    },
    {
      title: "五谷丰登",
      desc: "风调雨顺，各地粟米丰收，仓廪充实。",
      effects: {
        zhongyuan: { p: 2, m: 0, c: 0, t: 1 },
        guodu: { p: 1, m: 0, c: 0, t: 0 }
      },
      duration: 1
    },
    {
      title: "戎狄南侵",
      desc: "北方戎狄部族趁秋收之际劫掠边境村落。",
      effects: {
        guodu: { p: -1, m: -1, c: 0, t: -1 },
        caoyuan: { p: 0, m: 1, c: 0, t: 0 }
      },
      duration: 1
    },
    {
      title: "商旅通行",
      desc: "一支来自西方的商旅携带玉石和良马抵达中原。",
      effects: {
        xiyu: { p: 0, m: 0, c: 0, t: 1 },
        zhongyuan: { p: 0, m: 0, c: 1, t: 1 }
      },
      duration: 1
    },
    {
      title: "百家争鸣",
      desc: "一位思想家游历诸国讲学，引发各地士人热烈论辩。",
      effects: {
        zhongyuan: { p: 0, m: 0, c: 2, t: 0 },
        guodu: { p: 0, m: 0, c: 1, t: 0 }
      },
      duration: 1
    },
    {
      title: "铜矿发现",
      desc: "在西南山区发现大型铜矿，青铜铸造业兴盛。",
      effects: {
        xinan: { p: 1, m: 1, c: 0, t: 1 },
        zhongyuan: { p: 0, m: 1, c: 0, t: 0 }
      },
      duration: 1
    },
    {
      title: "瘟疫蔓延",
      desc: "一种烈性疫病在人口稠密的城邑间迅速传播。",
      effects: {
        zhongyuan: { p: -2, m: -1, c: 0, t: -1 }
      },
      duration: 1
    },
    {
      title: "诸侯会盟",
      desc: "数国诸侯于黄河之畔会盟，暂时缓和了边境冲突。",
      effects: {
        zhongyuan: { p: 1, m: 0, c: 1, t: 1 },
        guodu: { p: 1, m: 0, c: 0, t: 0 }
      },
      duration: 1
    },
    {
      title: "草原马疫",
      desc: "草原上爆发马瘟，牧民损失惨重，南侵压力暂减。",
      effects: {
        caoyuan: { p: -1, m: -2, c: 0, t: -1 },
        guodu: { p: 0, m: 1, c: 0, t: 0 }
      },
      duration: 1
    }
  ],

  // =========================================================================
  // Era 2: 豪族社会 (Aristocratic, 221 BC - 960 AD)
  // Qin-Han-Tang, Silk Road, Buddhism, Nomads
  // =========================================================================
  2: [
    {
      title: "丝路兴旺",
      desc: "西域商路畅通无阻，大量珍宝与香料涌入中原。",
      effects: {
        xiyu: { p: 1, m: 0, c: 1, t: 2 },
        zhongyuan: { p: 1, m: 0, c: 0, t: 1 }
      },
      duration: 1
    },
    {
      title: "蝗灾肆虐",
      desc: "铺天盖地的蝗虫吞噬了中原与过渡地带的庄稼。",
      effects: {
        zhongyuan: { p: -2, m: 0, c: 0, t: -1 },
        guodu: { p: -1, m: 0, c: 0, t: 0 }
      },
      duration: 1
    },
    {
      title: "佛寺兴建",
      desc: "一座宏伟的佛教寺院在中原落成，信众云集。",
      effects: {
        zhongyuan: { p: 0, m: 0, c: 2, t: 0 },
        xiyu: { p: 0, m: 0, c: 1, t: 0 }
      },
      duration: 1
    },
    {
      title: "胡汉和亲",
      desc: "中原王朝与草原部族达成和亲协议，边境贸易繁荣。",
      effects: {
        caoyuan: { p: 1, m: 0, c: 1, t: 1 },
        guodu: { p: 1, m: 0, c: 0, t: 1 }
      },
      duration: 1
    },
    {
      title: "修缮长城",
      desc: "朝廷征发大量民夫修缮北方长城防线。",
      effects: {
        guodu: { p: -1, m: 2, c: 0, t: 0 },
        zhongyuan: { p: -1, m: 0, c: 0, t: 0 }
      },
      duration: 1
    },
    {
      title: "关中饥荒",
      desc: "连年征战导致关中地区粮食极度短缺。",
      effects: {
        zhongyuan: { p: -2, m: -1, c: 0, t: 0 }
      },
      duration: 1
    },
    {
      title: "造纸术传播",
      desc: "改良的造纸术传入西域，各地文化交流更加便利。",
      effects: {
        zhongyuan: { p: 0, m: 0, c: 2, t: 0 },
        xiyu: { p: 0, m: 0, c: 1, t: 1 }
      },
      duration: 1
    },
    {
      title: "运河决堤",
      desc: "连日暴雨导致大运河多处决堤，漕运中断。",
      effects: {
        zhongyuan: { p: -1, m: 0, c: 0, t: -2 }
      },
      duration: 1
    },
    {
      title: "吐蕃遣使",
      desc: "高原上的吐蕃派遣使者前来，带来珍贵的藏药和金器。",
      effects: {
        gaoyuan: { p: 0, m: 0, c: 1, t: 1 },
        zhongyuan: { p: 0, m: 0, c: 1, t: 0 }
      },
      duration: 1
    },
    {
      title: "草原一统",
      desc: "草原上崛起强力可汗，诸部暂归一统，军事压力骤增。",
      effects: {
        caoyuan: { p: 1, m: 2, c: 0, t: 0 },
        guodu: { p: 0, m: -1, c: 0, t: -1 }
      },
      duration: 1
    }
  ],

  // =========================================================================
  // Era 3: 古代平民社会 (Pre-modern, 960-1840)
  // Song-Yuan-Ming-Qing, Maritime trade, Mongols, Population growth
  // =========================================================================
  3: [
    {
      title: "海寇侵扰",
      desc: "倭寇与海盗联合袭击东南沿海，烧毁港口集市。",
      effects: {
        haiyang: { p: -1, m: -1, c: 0, t: -2 }
      },
      duration: 1
    },
    {
      title: "茶马互市",
      desc: "中原与高原的茶马贸易进入鼎盛期，双方获益颇丰。",
      effects: {
        gaoyuan: { p: 1, m: 0, c: 0, t: 2 },
        zhongyuan: { p: 1, m: 0, c: 0, t: 1 }
      },
      duration: 1
    },
    {
      title: "关中地震",
      desc: "一场强烈地震摧毁了中原西部数座城池。",
      effects: {
        zhongyuan: { p: -2, m: -1, c: -1, t: 0 }
      },
      duration: 1
    },
    {
      title: "活字印刷",
      desc: "活字印刷术的普及使书籍价格大降，读书人骤增。",
      effects: {
        zhongyuan: { p: 0, m: 0, c: 2, t: 1 }
      },
      duration: 1
    },
    {
      title: "蒙古遣使",
      desc: "蒙古大汗遣使要求称臣纳贡，草原军事力量令人生畏。",
      effects: {
        caoyuan: { p: 0, m: 1, c: 0, t: 0 },
        zhongyuan: { p: 0, m: -1, c: 0, t: 0 },
        guodu: { p: 0, m: -1, c: 0, t: 0 }
      },
      duration: 1
    },
    {
      title: "瓷器远销",
      desc: "精美的青花瓷经海路远销南洋与阿拉伯，利润丰厚。",
      effects: {
        haiyang: { p: 1, m: 0, c: 1, t: 2 },
        zhongyuan: { p: 1, m: 0, c: 0, t: 0 }
      },
      duration: 1
    },
    {
      title: "鼠疫流行",
      desc: "从西北传来的鼠疫在人口密集的江南地区爆发。",
      effects: {
        zhongyuan: { p: -2, m: -1, c: 0, t: -1 },
        guodu: { p: -1, m: 0, c: 0, t: 0 }
      },
      duration: 1
    },
    {
      title: "兴修水利",
      desc: "朝廷拨款修建大型灌溉工程，农业产量显著提升。",
      effects: {
        zhongyuan: { p: 2, m: 0, c: 0, t: 1 },
        xinan: { p: 1, m: 0, c: 0, t: 0 }
      },
      duration: 1
    },
    {
      title: "西南土司归附",
      desc: "西南山区数个土司主动归附朝廷，改土归流顺利推行。",
      effects: {
        xinan: { p: 1, m: 0, c: 1, t: 1 },
        zhongyuan: { p: 0, m: 0, c: 0, t: 1 }
      },
      duration: 1
    },
    {
      title: "白银涌入",
      desc: "海外贸易带来大量白银，市场繁荣但物价也随之上涨。",
      effects: {
        haiyang: { p: 1, m: 0, c: 0, t: 2 },
        zhongyuan: { p: 1, m: 0, c: 0, t: 1 }
      },
      duration: 1
    }
  ],

  // =========================================================================
  // Era 4: 现代转型 (Modern, 1840 - present)
  // Opium War, Revolution, Reform, Rise
  // =========================================================================
  4: [
    {
      title: "发现金矿",
      desc: "西南地区发现大型金矿，吸引大量淘金者涌入。",
      effects: {
        xinan: { p: 2, m: 0, c: 0, t: 1 }
      },
      duration: 1
    },
    {
      title: "铁路通车",
      desc: "一条连接中原与过渡地带的铁路建成通车，加速了物资流通。",
      effects: {
        zhongyuan: { p: 1, m: 1, c: 0, t: 2 },
        guodu: { p: 1, m: 0, c: 0, t: 1 }
      },
      duration: 1
    },
    {
      title: "华北大旱",
      desc: "持续干旱导致华北数省颗粒无收，难民潮涌向南方。",
      effects: {
        zhongyuan: { p: -2, m: 0, c: 0, t: -1 },
        guodu: { p: -1, m: 0, c: 0, t: 0 }
      },
      duration: 1
    },
    {
      title: "外资涌入",
      desc: "列强在沿海通商口岸大量投资，工厂与银行纷纷设立。",
      effects: {
        haiyang: { p: 2, m: 0, c: 0, t: 2 },
        zhongyuan: { p: -1, m: 0, c: 0, t: 0 }
      },
      duration: 1
    },
    {
      title: "学潮风起",
      desc: "青年学生走上街头抗议，要求变革图强，民族意识觉醒。",
      effects: {
        zhongyuan: { p: 0, m: 0, c: 2, t: 0 },
        haiyang: { p: 0, m: 0, c: 1, t: 0 }
      },
      duration: 1
    },
    {
      title: "工厂建成",
      desc: "一座现代化的纺织工厂在沿海城市投产，雇工数千人。",
      effects: {
        haiyang: { p: 2, m: 0, c: 0, t: 1 }
      },
      duration: 1
    },
    {
      title: "长江水患",
      desc: "长江中下游遭遇百年不遇的洪灾，良田尽成泽国。",
      effects: {
        zhongyuan: { p: -2, m: 0, c: 0, t: -2 },
        xinan: { p: -1, m: 0, c: 0, t: 0 }
      },
      duration: 1
    },
    {
      title: "科技突破",
      desc: "本土科学家在实用技术领域取得突破，工业效率提升。",
      effects: {
        zhongyuan: { p: 1, m: 1, c: 1, t: 1 }
      },
      duration: 1
    },
    {
      title: "边疆平定",
      desc: "西北地区叛乱平息，丝绸之路古道恢复安宁。",
      effects: {
        xiyu: { p: 1, m: 1, c: 0, t: 1 },
        guodu: { p: 1, m: 1, c: 0, t: 0 }
      },
      duration: 1
    },
    {
      title: "海外侨汇",
      desc: "东南亚华侨大量汇款回乡，带动沿海地区经济复苏。",
      effects: {
        haiyang: { p: 1, m: 0, c: 1, t: 2 },
        xinan: { p: 1, m: 0, c: 0, t: 0 }
      },
      duration: 1
    }
  ]
};


// -----------------------------------------------------------------------------
// EVENT_INSIGHTS
// 施展 (Shi Zhan) perspective comments on key turning-point events.
// Written as if quoting from 《枢纽》, 1-2 sentences in Chinese.
// -----------------------------------------------------------------------------

const EVENT_INSIGHTS = {
  // Era 1 Turning Point: 天下一统
  "e1_T": "统一并非某个雄主的偶然选择，而是中原农耕区规模效应的必然结果——当生存竞争的逻辑走到极致，大一统就是唯一的均衡解。",

  // Era 2 Event 2: 匈奴南侵
  "e2_2": "草原与中原并非单纯的对抗关系，而是一种深层的共生结构：草原需要中原的粮食和丝绸，中原需要草原的战马和皮毛，冲突本身就是这种相互依赖的极端表达。",

  // Era 2 Event 5: 佛教东传
  "e2_5": "佛教传入中国，绝非简单的文化移植。它填补了豪族社会精神世界的真空，使中国人第一次获得了超越血缘宗法的精神秩序，这是一次文明内在的自我转化。",

  // Era 2 Turning Point: 唐宋之变
  "e2_T": "唐宋之变是中国历史最深刻的一次社会转型：豪族消亡、科举兴起、平民社会到来。从此，中国的政治逻辑从贵族共治转向了皇帝与士大夫的直接博弈。",

  // Era 3 Event 3: 蒙古崛起
  "e3_3": "蒙古帝国第一次将欧亚大陆整合为一个连贯的贸易与信息网络。正是这个由草原力量缔造的世界体系，为后来大航海时代的到来埋下了伏笔。",

  // Era 3 Event 4: 郑和下西洋
  "e3_4": "郑和的远航并非商业驱动，而是帝国威望的展示。这恰恰揭示了大陆帝国与海洋秩序之间的根本张力——中原的财政逻辑无法支撑持续的海洋经营。",

  // Era 3 Event 8: 鸦片战争
  "e3_8": "鸦片战争不只是军事失败，而是两种世界秩序的碰撞：中国的朝贡体系遭遇了西方的条约体系。真正的危机不在于船坚炮利，而在于整套天下观的崩塌。",

  // Era 3 Turning Point: 古今之变
  "e3_T": "古今之变的本质是：中国不得不从一个自我完备的天下，转变为现代国际体系中的一个民族国家。这个转型至今仍未完成，它定义了近代以来中国所有的焦虑与奋斗。",

  // Era 4 Event 6: 改革开放
  "e4_6": "改革开放的成功不能简单归因于政策选择。中国超大规模的人口和市场，使其在全球制造业分工中获得了不可替代的枢纽地位——这是规模本身带来的结构性优势。",

  // Era 4 Turning Point: 何谓中国
  "e4_T": "中国从来不是一个单一的民族国家，而是一个多元体系的枢纽。中原、草原、高原、西域、海洋——这些区域的互动与张力，才是理解'何谓中国'的真正钥匙。"
};


// =============================================================================
// Exports
// =============================================================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RANDOM_EVENTS, EVENT_INSIGHTS };
}
