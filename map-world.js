/**
 * MAP_WORLD - Rich visual world data for the Pivot historical strategy game.
 *
 * Coordinates target a 700x520 SVG viewBox.
 * Region centers (approximate):
 *   zhongyuan (500, 270)  -  Central Plains
 *   caoyuan   (420, 150)  -  Northern Steppes
 *   xiyu      (250, 230)  -  Western Regions
 *   gaoyuan   (300, 340)  -  Tibetan Plateau
 *   xinan     (400, 400)  -  Southwest
 *   haiyang   (620, 350)  -  Coastal / Ocean
 *   guodu     (550, 340)  -  Transition Zone (Southeast)
 */

const MAP_WORLD = {

  // ---------------------------------------------------------------------------
  //  ERA-SPECIFIC WORLD STATE
  // ---------------------------------------------------------------------------
  eras: {

    // =========================================================================
    //  ERA 1 - 封建时代  (~1046-221 BC)
    // =========================================================================
    1: {
      name: '封建时代',
      period: '约前1046-前221',

      weatherEffects: [
        { type: 'cloud',  regions: ['caoyuan', 'xiyu'],             opacity: 0.15, count: 3, drift: 'east',  speed: 0.3 },
        { type: 'dust',   regions: ['xiyu', 'gaoyuan'],             opacity: 0.10, count: 5, drift: 'east',  speed: 0.5 },
        { type: 'mist',   regions: ['xinan', 'guodu'],              opacity: 0.08, count: 4, drift: 'south', speed: 0.2 },
        { type: 'snow',   regions: ['gaoyuan'],                     opacity: 0.12, count: 3, drift: 'south', speed: 0.4 },
        { type: 'rain',   regions: ['zhongyuan'],                   opacity: 0.06, count: 2, drift: 'east',  speed: 0.6 },
      ],

      landmarks: [
        { id: 'fenghuo',    name: '烽火台',     x: 510, y: 250, icon: '🏯', region: 'zhongyuan', tooltip: '周天子的烽火台，一旦点燃，诸侯来援' },
        { id: 'haojing',    name: '镐京',       x: 440, y: 270, icon: '🏛️', region: 'zhongyuan', tooltip: '西周都城镐京，宗法制度的中心' },
        { id: 'luoyi',      name: '洛邑',       x: 500, y: 280, icon: '🏛️', region: 'zhongyuan', tooltip: '东周都城洛邑，春秋争霸的舞台' },
        { id: 'qincheng',   name: '秦关城墙',   x: 430, y: 255, icon: '🏰', region: 'zhongyuan', tooltip: '早期城墙防御，函谷关天险，后发展为长城' },
        { id: 'qufu',       name: '曲阜学宫',   x: 545, y: 265, icon: '📜', region: 'zhongyuan', tooltip: '孔子讲学之地，儒学发源地' },
        { id: 'yinxu',      name: '殷墟',       x: 510, y: 245, icon: '🗿', region: 'zhongyuan', tooltip: '商朝故都，甲骨文出土之地' },
        { id: 'xiongnu_t',  name: '匈奴帐落',   x: 400, y: 130, icon: '⛺', region: 'caoyuan',   tooltip: '草原上的游牧部落，与中原时战时和' },
        { id: 'kunlun',     name: '昆仑祭坛',   x: 270, y: 290, icon: '⛰️', region: 'gaoyuan',   tooltip: '传说中西王母所居之地' },
        { id: 'dian',       name: '滇国',       x: 390, y: 410, icon: '🏘️', region: 'xinan',     tooltip: '西南边陲的古滇国，青铜文明独特' },
        { id: 'yuegang',    name: '越人渔港',   x: 610, y: 370, icon: '🎣', region: 'haiyang',   tooltip: '百越先民的渔猎聚落' },
      ],

      populations: {
        zhongyuan: { density: 'high',   icon: '👥', count: 8 },
        caoyuan:   { density: 'low',    icon: '🐎', count: 3 },
        xiyu:      { density: 'sparse', icon: '🐪', count: 2 },
        gaoyuan:   { density: 'sparse', icon: '🏔️', count: 2 },
        xinan:     { density: 'low',    icon: '🌿', count: 3 },
        haiyang:   { density: 'sparse', icon: '⛵', count: 1 },
        guodu:     { density: 'medium', icon: '🏘️', count: 5 },
      },

      ambientElements: [
        { type: 'caravan',   path: 'zhongyuan-guodu',   icon: '🐂', speed: 'slow',   tooltip: '牛车商队运送盐铁' },
        { type: 'army',      path: 'zhongyuan-caoyuan',  icon: '⚔️', speed: 'medium', tooltip: '诸侯征伐，烽烟四起' },
        { type: 'merchant',  path: 'zhongyuan-xinan',    icon: '🏮', speed: 'slow',   tooltip: '巴蜀商人南下贸易' },
        { type: 'nomad',     path: 'caoyuan-zhongyuan',  icon: '🐎', speed: 'fast',   tooltip: '匈奴骑兵南下劫掠' },
        { type: 'scholar',   path: 'zhongyuan-guodu',    icon: '📜', speed: 'slow',   tooltip: '游士周游列国' },
      ],

      borderStyle: 'dotted',
      borderColor: 'rgba(120,100,60,0.35)',
      mapTint: 'rgba(180,160,100,0.03)',
      mapLabel: '春秋战国',
    },

    // =========================================================================
    //  ERA 2 - 帝国时代  (221 BC - 907 AD)
    // =========================================================================
    2: {
      name: '帝国时代',
      period: '前221-907',

      weatherEffects: [
        { type: 'cloud',     regions: ['caoyuan', 'zhongyuan'],      opacity: 0.12, count: 4, drift: 'east',  speed: 0.3 },
        { type: 'sandstorm', regions: ['xiyu'],                      opacity: 0.18, count: 3, drift: 'east',  speed: 0.7 },
        { type: 'mist',      regions: ['xinan', 'guodu', 'haiyang'], opacity: 0.10, count: 5, drift: 'south', speed: 0.2 },
        { type: 'snow',      regions: ['gaoyuan', 'caoyuan'],        opacity: 0.14, count: 4, drift: 'south', speed: 0.4 },
      ],

      landmarks: [
        { id: 'changcheng', name: '万里长城',    x: 460, y: 195, icon: '🏯', region: 'zhongyuan', tooltip: '秦始皇连接各国长城，北拒匈奴，绵延万里' },
        { id: 'changan',    name: '长安城',       x: 445, y: 268, icon: '🏛️', region: 'zhongyuan', tooltip: '汉唐帝都，百万人口的世界最大城市' },
        { id: 'luoyang',    name: '洛阳',         x: 500, y: 275, icon: '🏛️', region: 'zhongyuan', tooltip: '东汉都城，丝路东端起点之一' },
        { id: 'sichou',     name: '丝绸之路驿站', x: 280, y: 235, icon: '🛤️', region: 'xiyu',      tooltip: '张骞凿空，连通东西方的伟大贸易通道' },
        { id: 'dunhuang',   name: '敦煌莫高窟',   x: 310, y: 225, icon: '🕌', region: 'xiyu',      tooltip: '千佛洞开凿于此，东西文明在此交汇' },
        { id: 'bingma',     name: '兵马俑',       x: 448, y: 278, icon: '🗿', region: 'zhongyuan', tooltip: '秦始皇的地下军团，守护帝陵' },
        { id: 'xiongnu_c',  name: '匈奴王庭',     x: 410, y: 120, icon: '👑', region: 'caoyuan',   tooltip: '冒顿单于统一草原，与汉帝国并立' },
        { id: 'tubo',       name: '吐蕃王宫',     x: 290, y: 350, icon: '🏰', region: 'gaoyuan',   tooltip: '松赞干布统一高原，文成公主入藏' },
        { id: 'nanzhao',    name: '南诏国',       x: 385, y: 405, icon: '🏘️', region: 'xinan',     tooltip: '西南大国南诏，连通东南亚' },
        { id: 'guangzhou',  name: '广州港',       x: 570, y: 380, icon: '⚓', region: 'guodu',     tooltip: '海上丝路始发港，番商云集' },
      ],

      populations: {
        zhongyuan: { density: 'very-high', icon: '👥', count: 12 },
        caoyuan:   { density: 'medium',    icon: '🐎', count: 5 },
        xiyu:      { density: 'low',       icon: '🐪', count: 4 },
        gaoyuan:   { density: 'low',       icon: '🏔️', count: 3 },
        xinan:     { density: 'medium',    icon: '🌿', count: 5 },
        haiyang:   { density: 'low',       icon: '⛵', count: 3 },
        guodu:     { density: 'high',      icon: '🏘️', count: 8 },
      },

      ambientElements: [
        { type: 'silkroad',  path: 'xiyu-zhongyuan',    icon: '🐫', speed: 'slow',   tooltip: '丝路驼队，满载丝绸香料' },
        { type: 'fleet',     path: 'haiyang-guodu',      icon: '⛵', speed: 'medium', tooltip: '海上商船往来南洋' },
        { type: 'envoy',     path: 'zhongyuan-gaoyuan',  icon: '🏳️', speed: 'slow',   tooltip: '和亲使团远赴高原' },
        { type: 'army',      path: 'zhongyuan-caoyuan',  icon: '🐎', speed: 'fast',   tooltip: '汉骑兵出征漠北' },
        { type: 'monk',      path: 'xiyu-zhongyuan',     icon: '🙏', speed: 'slow',   tooltip: '西域高僧东来传法' },
      ],

      borderStyle: 'solid',
      borderColor: 'rgba(140,80,40,0.4)',
      mapTint: 'rgba(160,120,60,0.04)',
      mapLabel: '秦汉唐',
    },

    // =========================================================================
    //  ERA 3 - 变革时代  (907-1840 AD)
    // =========================================================================
    3: {
      name: '变革时代',
      period: '907-1840',

      weatherEffects: [
        { type: 'cloud',   regions: ['zhongyuan', 'guodu'],              opacity: 0.10, count: 4, drift: 'east',  speed: 0.3 },
        { type: 'monsoon', regions: ['haiyang', 'guodu', 'xinan'],       opacity: 0.15, count: 5, drift: 'north', speed: 0.6 },
        { type: 'dust',    regions: ['xiyu', 'caoyuan'],                 opacity: 0.12, count: 3, drift: 'east',  speed: 0.5 },
        { type: 'snow',    regions: ['gaoyuan', 'caoyuan'],              opacity: 0.16, count: 5, drift: 'south', speed: 0.3 },
        { type: 'fog',     regions: ['xinan'],                           opacity: 0.08, count: 3, drift: 'east',  speed: 0.1 },
      ],

      landmarks: [
        { id: 'kaifeng',   name: '开封汴梁',   x: 515, y: 265, icon: '🏯', region: 'zhongyuan', tooltip: '北宋都城，清明上河图中的繁华都市' },
        { id: 'hangzhou',  name: '临安城',      x: 575, y: 310, icon: '🏛️', region: 'guodu',     tooltip: '南宋行在，"上有天堂下有苏杭"' },
        { id: 'beijing',   name: '大都/北京',   x: 530, y: 210, icon: '🏯', region: 'zhongyuan', tooltip: '元大都到明清紫禁城，天子脚下' },
        { id: 'zhenghe',   name: '郑和船厂',    x: 565, y: 295, icon: '🚢', region: 'guodu',     tooltip: '龙江船厂造宝船，七下西洋' },
        { id: 'quanzhou',  name: '泉州港',      x: 590, y: 355, icon: '⚓', region: 'guodu',     tooltip: '宋元第一大港，"刺桐城"名扬海外' },
        { id: 'mongol',    name: '蒙古大帐',    x: 420, y: 115, icon: '⛺', region: 'caoyuan',   tooltip: '成吉思汗的金帐，草原帝国的起点' },
        { id: 'potala',    name: '布达拉宫',    x: 295, y: 345, icon: '🏰', region: 'gaoyuan',   tooltip: '藏传佛教圣地，高原上的宫殿' },
        { id: 'dali',      name: '大理古城',    x: 375, y: 395, icon: '🏘️', region: 'xinan',     tooltip: '大理国都城，白族文化中心' },
        { id: 'yumen',     name: '玉门关',      x: 300, y: 220, icon: '🚪', region: 'xiyu',      tooltip: '"春风不度玉门关"，丝路咽喉要道' },
        { id: 'mazu',      name: '妈祖庙',      x: 615, y: 345, icon: '⛩️', region: 'haiyang',   tooltip: '海上守护神，庇佑万千渔民商旅' },
      ],

      populations: {
        zhongyuan: { density: 'very-high', icon: '👥', count: 14 },
        caoyuan:   { density: 'medium',    icon: '🐎', count: 6 },
        xiyu:      { density: 'low',       icon: '🐪', count: 3 },
        gaoyuan:   { density: 'low',       icon: '🏔️', count: 3 },
        xinan:     { density: 'medium',    icon: '🌿', count: 6 },
        haiyang:   { density: 'medium',    icon: '⛵', count: 5 },
        guodu:     { density: 'very-high', icon: '🏘️', count: 12 },
      },

      ambientElements: [
        { type: 'treasure-fleet', path: 'guodu-haiyang',      icon: '🚢', speed: 'medium', tooltip: '郑和宝船舰队，浩浩荡荡下西洋' },
        { type: 'tea-trade',      path: 'xinan-guodu',        icon: '🍵', speed: 'slow',   tooltip: '茶马古道上的马帮' },
        { type: 'mongol-cavalry', path: 'caoyuan-zhongyuan',  icon: '🏇', speed: 'fast',   tooltip: '蒙古铁骑横扫天下' },
        { type: 'merchant-junk',  path: 'haiyang-guodu',      icon: '⛵', speed: 'medium', tooltip: '商船满载瓷器茶叶' },
        { type: 'canal-barge',    path: 'zhongyuan-guodu',    icon: '🛶', speed: 'slow',   tooltip: '大运河漕运，南粮北调' },
      ],

      borderStyle: 'solid',
      borderColor: 'rgba(100,80,60,0.4)',
      mapTint: 'rgba(120,140,100,0.04)',
      mapLabel: '宋元明清',
    },

    // =========================================================================
    //  ERA 4 - 觉醒时代  (1840 - 现代)
    // =========================================================================
    4: {
      name: '觉醒时代',
      period: '1840-现代',

      weatherEffects: [
        { type: 'smog',  regions: ['zhongyuan', 'guodu'],            opacity: 0.10, count: 4, drift: 'east',  speed: 0.2 },
        { type: 'cloud', regions: ['caoyuan', 'xiyu', 'gaoyuan'],    opacity: 0.10, count: 3, drift: 'east',  speed: 0.3 },
        { type: 'rain',  regions: ['xinan', 'guodu', 'haiyang'],     opacity: 0.12, count: 4, drift: 'south', speed: 0.5 },
        { type: 'dust',  regions: ['xiyu'],                          opacity: 0.08, count: 2, drift: 'east',  speed: 0.4 },
      ],

      landmarks: [
        { id: 'tiananmen', name: '天安门',        x: 530, y: 215, icon: '🏛️', region: 'zhongyuan', tooltip: '1949年开国大典，新中国诞生' },
        { id: 'shanghai',  name: '上海外滩',      x: 585, y: 290, icon: '🏙️', region: 'guodu',     tooltip: '十里洋场到东方明珠，中国现代化的窗口' },
        { id: 'tielu',     name: '京汉铁路',      x: 510, y: 255, icon: '🚂', region: 'zhongyuan', tooltip: '中国早期铁路干线，近代化的钢铁动脉' },
        { id: 'huangpu',   name: '黄埔军校',      x: 575, y: 375, icon: '🎖️', region: 'guodu',     tooltip: '"升官发财请走别路"，革命军官摇篮' },
        { id: 'gangkou',   name: '香港/广州港',   x: 580, y: 390, icon: '🚢', region: 'haiyang',   tooltip: '鸦片战争后被迫开放，中西碰撞之地' },
        { id: 'gongchang', name: '汉阳铁厂',      x: 490, y: 305, icon: '🏭', region: 'zhongyuan', tooltip: '张之洞创办，中国近代重工业先驱' },
        { id: 'yanan',     name: '延安宝塔',      x: 440, y: 245, icon: '🗼', region: 'zhongyuan', tooltip: '革命圣地延安，抗战时期的指挥中心' },
        { id: 'lasa_mod',  name: '青藏铁路',      x: 310, y: 330, icon: '🚂', region: 'gaoyuan',   tooltip: '天路通高原，世界最高铁路' },
        { id: 'shenzhen',  name: '深圳特区',      x: 578, y: 385, icon: '🏙️', region: 'guodu',     tooltip: '改革开放试验田，从小渔村到世界都市' },
        { id: 'jiuquan',   name: '酒泉卫星基地',  x: 310, y: 210, icon: '🚀', region: 'xiyu',      tooltip: '中国航天发射中心，飞天梦圆' },
      ],

      populations: {
        zhongyuan: { density: 'extreme',   icon: '👥', count: 18 },
        caoyuan:   { density: 'medium',    icon: '🐎', count: 5 },
        xiyu:      { density: 'low',       icon: '🏘️', count: 4 },
        gaoyuan:   { density: 'low',       icon: '🏔️', count: 3 },
        xinan:     { density: 'high',      icon: '🌿', count: 8 },
        haiyang:   { density: 'high',      icon: '🚢', count: 7 },
        guodu:     { density: 'extreme',   icon: '🏙️', count: 16 },
      },

      ambientElements: [
        { type: 'train',     path: 'zhongyuan-guodu',    icon: '🚂', speed: 'fast',   tooltip: '火车汽笛声响彻大地' },
        { type: 'steamship', path: 'haiyang-guodu',      icon: '🚢', speed: 'medium', tooltip: '西方炮舰与商船' },
        { type: 'airplane',  path: 'zhongyuan-xiyu',     icon: '✈️', speed: 'fast',   tooltip: '现代航线连通东西' },
        { type: 'truck',     path: 'xinan-zhongyuan',    icon: '🚛', speed: 'medium', tooltip: '公路运输网络' },
        { type: 'highspeed', path: 'zhongyuan-guodu',    icon: '🚄', speed: 'fast',   tooltip: '高铁时代，千里一日还' },
      ],

      borderStyle: 'solid',
      borderColor: 'rgba(60,60,80,0.45)',
      mapTint: 'rgba(80,100,140,0.04)',
      mapLabel: '近现代',
    },
  },

  // ---------------------------------------------------------------------------
  //  REGION DECORATIONS  (era-independent, always visible)
  // ---------------------------------------------------------------------------
  regionDecorations: {

    zhongyuan: {
      terrain: [
        {
          type: 'river', name: '黄河',
          path: 'M365,215 Q400,220 440,225 Q470,230 500,228 Q530,232 555,240 Q575,248 590,260',
          color: '#b8a060', width: 2.5, opacity: 0.6,
          label: { text: '黄河', x: 470, y: 222, fontSize: 8 },
        },
        {
          type: 'river', name: '长江',
          path: 'M350,325 Q390,318 430,315 Q470,310 510,308 Q545,312 570,320 Q590,328 605,335',
          color: '#5a8aaa', width: 3, opacity: 0.6,
          label: { text: '长江', x: 480, y: 306, fontSize: 8 },
        },
        { type: 'mountain', name: '泰山',     x: 545, y: 245, scale: 0.8, icon: '山' },
        { type: 'mountain', name: '华山',     x: 445, y: 275, scale: 0.7, icon: '山' },
        { type: 'plain',    name: '华北平原', x: 520, y: 240, width: 60, height: 30 },
      ],
      flora: '🌾',
      floorColor: 'rgba(200,180,100,0.06)',
    },

    caoyuan: {
      terrain: [
        { type: 'steppe', name: '蒙古高原',   x: 400, y: 130, width: 130, height: 50, color: 'rgba(180,190,120,0.08)' },
        { type: 'desert', name: '戈壁',       x: 360, y: 160, width: 50,  height: 25, color: 'rgba(200,180,130,0.10)' },
        {
          type: 'river', name: '额尔古纳河',
          path: 'M480,110 Q490,130 495,150',
          color: '#6a9aba', width: 1.5, opacity: 0.4,
        },
      ],
      flora: '🌿',
      floorColor: 'rgba(160,180,100,0.05)',
    },

    xiyu: {
      terrain: [
        { type: 'desert',   name: '塔克拉玛干', x: 220, y: 240, width: 90, height: 45, color: 'rgba(210,190,140,0.12)' },
        { type: 'oasis',    name: '敦煌绿洲',   x: 310, y: 230, scale: 0.6, color: 'rgba(100,160,80,0.15)' },
        { type: 'mountain', name: '天山',       x: 240, y: 205, scale: 1.0, icon: '山' },
        {
          type: 'route', name: '丝绸之路',
          path: 'M210,235 Q250,230 290,228 Q330,230 370,240 Q410,250 445,265',
          color: 'rgba(180,140,60,0.25)', width: 1.5, dasharray: '4,3',
        },
      ],
      flora: '🌵',
      floorColor: 'rgba(210,190,140,0.06)',
    },

    gaoyuan: {
      terrain: [
        { type: 'mountain', name: '喜马拉雅山脉', x: 270, y: 365, scale: 1.3, icon: '山' },
        { type: 'mountain', name: '唐古拉山',     x: 320, y: 325, scale: 0.9, icon: '山' },
        { type: 'lake',     name: '青海湖',       x: 345, y: 300, radius: 8,  color: '#4a7aaa' },
        { type: 'lake',     name: '纳木错',       x: 295, y: 335, radius: 5,  color: '#4a7aaa' },
      ],
      flora: '❄️',
      floorColor: 'rgba(180,190,200,0.06)',
    },

    xinan: {
      terrain: [
        { type: 'jungle',   name: '云南雨林',   x: 375, y: 410, width: 55, height: 35, color: 'rgba(60,140,60,0.10)' },
        { type: 'mountain', name: '横断山脉',   x: 365, y: 380, scale: 0.9, icon: '山' },
        {
          type: 'river', name: '澜沧江',
          path: 'M355,355 Q365,375 370,395 Q375,415 380,430',
          color: '#5a8aaa', width: 1.5, opacity: 0.5,
        },
        {
          type: 'route', name: '茶马古道',
          path: 'M370,395 Q400,380 430,365 Q450,350 470,330',
          color: 'rgba(120,80,40,0.2)', width: 1, dasharray: '3,4',
        },
      ],
      flora: '🌴',
      floorColor: 'rgba(80,150,80,0.05)',
    },

    haiyang: {
      terrain: [
        { type: 'waves',   count: 8, region: 'haiyang', color: 'rgba(60,120,180,0.08)' },
        { type: 'island',  name: '台湾', x: 625, y: 340, width: 10, height: 25, color: 'rgba(100,160,80,0.15)' },
        { type: 'island',  name: '海南', x: 565, y: 420, width: 12, height: 14, color: 'rgba(100,160,80,0.12)' },
        {
          type: 'current', name: '黑潮',
          path: 'M645,300 Q650,330 648,360 Q640,390 630,420',
          color: 'rgba(40,80,160,0.15)', width: 2, dasharray: '6,3',
        },
      ],
      flora: '🌊',
      floorColor: 'rgba(60,120,180,0.04)',
    },

    guodu: {
      terrain: [
        { type: 'hills', name: '武夷山', x: 565, y: 335, scale: 0.7, icon: '山' },
        { type: 'hills', name: '南岭',   x: 530, y: 360, scale: 0.6, icon: '山' },
        {
          type: 'river', name: '珠江',
          path: 'M500,370 Q530,375 555,380 Q570,385 580,390',
          color: '#5a8aaa', width: 2, opacity: 0.5,
          label: { text: '珠江', x: 540, y: 372, fontSize: 7 },
        },
        {
          type: 'route', name: '大运河',
          path: 'M530,215 Q535,240 540,260 Q548,280 560,295 Q570,305 575,310',
          color: 'rgba(60,100,160,0.2)', width: 1.5, dasharray: '5,3',
        },
      ],
      flora: '🎋',
      floorColor: 'rgba(120,160,100,0.05)',
    },
  },

  // ---------------------------------------------------------------------------
  //  STAT-BASED VISUAL THRESHOLDS
  // ---------------------------------------------------------------------------
  statVisuals: {
    prosperity: {
      high: { above: 7, effect: 'golden-glow', icon: '✨', label: '繁荣', color: 'rgba(255,215,0,0.15)',   pulseSpeed: 2   },
      low:  { below: 3, effect: 'barren',       icon: '💀', label: '凋零', color: 'rgba(80,60,40,0.12)',    pulseSpeed: 0   },
    },
    military: {
      high: { above: 7, effect: 'fortress',     icon: '🏰', label: '铁壁', color: 'rgba(100,100,120,0.12)', pulseSpeed: 0   },
      low:  { below: 3, effect: 'burning',       icon: '🔥', label: '战火', color: 'rgba(200,60,30,0.12)',   pulseSpeed: 1.5 },
    },
    culture: {
      high: { above: 7, effect: 'enlightened',   icon: '📚', label: '文昌', color: 'rgba(120,80,200,0.10)',  pulseSpeed: 3   },
      low:  { below: 3, effect: 'dark',           icon: '🌑', label: '蒙昧', color: 'rgba(30,30,40,0.10)',   pulseSpeed: 0   },
    },
    trade: {
      high: { above: 7, effect: 'trade-hub',     icon: '🏪', label: '通商', color: 'rgba(60,160,120,0.12)',  pulseSpeed: 2   },
      low:  { below: 3, effect: 'isolated',       icon: '🚫', label: '闭塞', color: 'rgba(100,100,100,0.08)', pulseSpeed: 0  },
    },
  },

  // ---------------------------------------------------------------------------
  //  AMBIENT ANIMATION PATHS  (waypoints for moving elements, SVG coords)
  // ---------------------------------------------------------------------------
  ambientPaths: {
    'xiyu-zhongyuan':    { waypoints: [[250,230],[310,235],[370,250],[440,265],[500,270]], duration: 12000 },
    'zhongyuan-caoyuan': { waypoints: [[500,270],[480,240],[460,210],[440,180],[420,150]], duration: 8000  },
    'zhongyuan-guodu':   { waypoints: [[500,270],[520,290],[540,310],[550,330],[555,340]], duration: 7000  },
    'zhongyuan-xinan':   { waypoints: [[500,270],[470,300],[440,340],[420,370],[400,400]], duration: 10000 },
    'zhongyuan-gaoyuan': { waypoints: [[500,270],[440,280],[380,300],[340,320],[300,340]], duration: 11000 },
    'zhongyuan-xiyu':    { waypoints: [[500,270],[440,265],[370,250],[310,235],[250,230]], duration: 12000 },
    'guodu-haiyang':     { waypoints: [[550,340],[570,345],[590,350],[610,355],[620,360]], duration: 6000  },
    'haiyang-guodu':     { waypoints: [[620,350],[600,345],[580,342],[560,340],[550,338]], duration: 6000  },
    'caoyuan-zhongyuan': { waypoints: [[420,150],[430,170],[450,200],[470,230],[500,270]], duration: 7000  },
    'xinan-guodu':       { waypoints: [[400,400],[430,385],[460,365],[500,350],[550,340]], duration: 9000  },
    'xinan-zhongyuan':   { waypoints: [[400,400],[420,370],[440,340],[470,300],[500,270]], duration: 10000 },
  },

  // ---------------------------------------------------------------------------
  //  LEGEND / MAP KEY ICONS
  // ---------------------------------------------------------------------------
  legendIcons: {
    river:    { icon: '〰️',  label: '河流' },
    mountain: { icon: '⛰️', label: '山脉' },
    desert:   { icon: '🏜️', label: '沙漠' },
    lake:     { icon: '🔵',  label: '湖泊' },
    route:    { icon: '- -', label: '古道' },
    capital:  { icon: '🏛️', label: '都城' },
    port:     { icon: '⚓',  label: '港口' },
    fortress: { icon: '🏰',  label: '要塞' },
  },
};
