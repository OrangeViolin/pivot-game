// ============================================================
// map-world.js
// "枢纽：天下之道" — 地图世界观数据
// 为 SVG 地图（viewBox 0 0 600 450）提供四个时代的建筑、
// 地标、人口、文化、动态元素与旗帜数据，以及关键事件场景增强。
// ============================================================

const MAP_WORLD_DATA = {

  // ──────────────────────────────────────────────
  // 四大时代
  // ──────────────────────────────────────────────
  eras: {

    // ============================================
    // 时代一：封建时代 ~1046-221 BC
    // ============================================
    1: {
      name: '封建时代',
      weather: 'clear',
      season: 'spring',
      skyGradient: ['#1a1a2e', '#16213e'],

      buildings: [
        { x: 280, y: 215, type: 'palace', label: '镐京', region: 'zhongyuan' },
        { x: 320, y: 200, type: 'city', label: '洛邑', region: 'zhongyuan' },
        { x: 345, y: 195, type: 'city', label: '曲阜', region: 'zhongyuan' },
        { x: 370, y: 190, type: 'city', label: '临淄', region: 'zhongyuan' },
        { x: 260, y: 225, type: 'city', label: '咸阳', region: 'zhongyuan' },
        { x: 335, y: 225, type: 'city', label: '新郑', region: 'zhongyuan' },
        { x: 305, y: 240, type: 'city', label: '宛城', region: 'zhongyuan' },
        { x: 360, y: 210, type: 'city', label: '邯郸', region: 'zhongyuan' },
        { x: 310, y: 165, type: 'fort', label: '雁门关', region: 'guodu' },
        { x: 300, y: 115, type: 'camp', label: '匈奴王庭', region: 'caoyuan' },
        { x: 120, y: 165, type: 'market', label: '楼兰', region: 'xiyu' },
        { x: 240, y: 340, type: 'city', label: '巴蜀', region: 'xinan' },
        { x: 430, y: 280, type: 'port', label: '琅琊', region: 'haiyang' },
        { x: 260, y: 230, type: 'academy', label: '稷下学宫', region: 'zhongyuan' },
      ],

      landmarks: [
        { x: 250, y: 160, type: 'mountain', label: '太行山' },
        { x: 220, y: 270, type: 'mountain', label: '秦岭' },
        { x: 170, y: 300, type: 'mountain', label: '岷山' },
        { x: 200, y: 200, type: 'river', path: 'M150,190 Q250,210 400,230', label: '黄河' },
        { x: 220, y: 300, type: 'river', path: 'M180,290 Q280,310 420,320', label: '长江' },
        { x: 100, y: 120, type: 'desert', label: '戈壁' },
        { x: 300, y: 90, type: 'grassland', label: '漠南草原' },
        { x: 350, y: 175, type: 'pass', label: '函谷关' },
      ],

      populations: [
        { region: 'zhongyuan', density: 'high', icon: '🏘️' },
        { region: 'caoyuan', density: 'low', icon: '🏕️' },
        { region: 'xiyu', density: 'low', icon: '🏕️' },
        { region: 'gaoyuan', density: 'low', icon: '🏕️' },
        { region: 'xinan', density: 'low', icon: '🛖' },
        { region: 'haiyang', density: 'low', icon: '🛖' },
        { region: 'guodu', density: 'medium', icon: '🏘️' },
      ],

      cultures: [
        { region: 'zhongyuan', items: ['礼乐', '周制', '百家争鸣'] },
        { region: 'caoyuan', items: ['骑射', '游牧'] },
        { region: 'xiyu', items: ['绿洲农耕', '驼队贸易'] },
        { region: 'gaoyuan', items: ['羌人部落', '高山祭祀'] },
        { region: 'xinan', items: ['巴蜀巫术', '稻作'] },
        { region: 'haiyang', items: ['渔猎', '航海初萌'] },
        { region: 'guodu', items: ['戎狄杂居', '边关贸易'] },
      ],

      ambientElements: [
        { type: 'caravan', fromX: 120, fromY: 170, toX: 280, toY: 210, label: '西域商旅' },
        { type: 'army', x: 260, y: 220, size: 'medium', label: '秦师' },
        { type: 'nomads', x: 300, y: 90, size: 'medium', label: '匈奴骑兵' },
        { type: 'scholars', x: 365, y: 195, label: '稷下学士' },
        { type: 'bird_flock', x: 200, y: 100, direction: 'east' },
        { type: 'fishing_boats', x: 430, y: 290 },
        { type: 'army', x: 310, y: 170, size: 'small', label: '戍卒' },
        { type: 'caravan', fromX: 240, fromY: 340, toX: 290, toY: 230, label: '巴蜀盐商' },
      ],

      banners: [
        { x: 280, y: 200, text: '周', color: '#c9a96e' },
        { x: 260, y: 220, text: '秦', color: '#2a2a2a' },
        { x: 370, y: 185, text: '齐', color: '#5b8c5a' },
        { x: 345, y: 190, text: '鲁', color: '#8b6914' },
      ],
    },

    // ============================================
    // 时代二：帝国时代 ~221 BC - 907 AD
    // ============================================
    2: {
      name: '帝国时代',
      weather: 'clear',
      season: 'autumn',
      skyGradient: ['#0f0c29', '#302b63'],

      buildings: [
        { x: 270, y: 220, type: 'palace', label: '长安', region: 'zhongyuan' },
        { x: 320, y: 205, type: 'palace', label: '洛阳', region: 'zhongyuan' },
        { x: 390, y: 280, type: 'city', label: '建康', region: 'haiyang' },
        { x: 160, y: 170, type: 'city', label: '敦煌', region: 'xiyu' },
        { x: 100, y: 155, type: 'market', label: '龟兹', region: 'xiyu' },
        { x: 75, y: 145, type: 'market', label: '疏勒', region: 'xiyu' },
        { x: 420, y: 310, type: 'port', label: '广州', region: 'haiyang' },
        { x: 350, y: 200, type: 'city', label: '邺城', region: 'zhongyuan' },
        { x: 305, y: 245, type: 'city', label: '襄阳', region: 'zhongyuan' },
        { x: 240, y: 335, type: 'city', label: '成都', region: 'xinan' },
        { x: 300, y: 155, type: 'wall', label: '长城', region: 'guodu' },
        { x: 370, y: 165, type: 'fort', label: '渔阳', region: 'guodu' },
        { x: 200, y: 180, type: 'fort', label: '玉门关', region: 'xiyu' },
        { x: 140, y: 290, type: 'temple', label: '吐蕃王宫', region: 'gaoyuan' },
        { x: 450, y: 275, type: 'port', label: '泉州', region: 'haiyang' },
      ],

      landmarks: [
        { x: 250, y: 160, type: 'mountain', label: '太行山' },
        { x: 220, y: 270, type: 'mountain', label: '秦岭' },
        { x: 200, y: 200, type: 'river', path: 'M150,190 Q250,210 400,230', label: '黄河' },
        { x: 220, y: 300, type: 'river', path: 'M180,290 Q280,310 420,320', label: '长江' },
        { x: 90, y: 110, type: 'desert', label: '塔克拉玛干' },
        { x: 300, y: 85, type: 'grassland', label: '漠北草原' },
        { x: 130, y: 250, type: 'mountain', label: '昆仑山' },
        { x: 470, y: 350, type: 'sea', label: '南海' },
      ],

      populations: [
        { region: 'zhongyuan', density: 'high', icon: '🏘️' },
        { region: 'caoyuan', density: 'medium', icon: '🏕️' },
        { region: 'xiyu', density: 'medium', icon: '🏘️' },
        { region: 'gaoyuan', density: 'low', icon: '🏕️' },
        { region: 'xinan', density: 'medium', icon: '🏘️' },
        { region: 'haiyang', density: 'medium', icon: '🏘️' },
        { region: 'guodu', density: 'medium', icon: '🏘️' },
      ],

      cultures: [
        { region: 'zhongyuan', items: ['儒学正统', '科举萌芽', '佛道并行'] },
        { region: 'caoyuan', items: ['突厥汗国', '铁骑文化'] },
        { region: 'xiyu', items: ['丝路贸易', '佛教东传', '胡旋舞'] },
        { region: 'gaoyuan', items: ['吐蕃崛起', '苯教'] },
        { region: 'xinan', items: ['南诏', '茶马古道'] },
        { region: 'haiyang', items: ['海上丝路', '番坊'] },
        { region: 'guodu', items: ['长城防线', '互市'] },
      ],

      ambientElements: [
        { type: 'caravan', fromX: 75, fromY: 150, toX: 270, toY: 220, label: '丝路驼队' },
        { type: 'ships', x: 440, y: 320, label: '番舶' },
        { type: 'army', x: 300, y: 155, size: 'large', label: '长城戍军' },
        { type: 'monks', x: 160, y: 175, label: '西行求法僧' },
        { type: 'nomads', x: 310, y: 85, size: 'large', label: '突厥骑兵' },
        { type: 'bird_flock', x: 350, y: 120, direction: 'south' },
        { type: 'fishing_boats', x: 450, y: 285 },
        { type: 'caravan', fromX: 240, fromY: 335, toX: 140, toY: 290, label: '茶马商队' },
        { type: 'scholars', x: 275, y: 225, label: '太学生' },
      ],

      banners: [
        { x: 270, y: 205, text: '汉', color: '#b22222' },
        { x: 320, y: 190, text: '唐', color: '#daa520' },
        { x: 140, y: 280, text: '吐蕃', color: '#4a6741' },
        { x: 310, y: 80, text: '突厥', color: '#708090' },
      ],
    },

    // ============================================
    // 时代三：转型时代 ~907 - 1644 AD
    // ============================================
    3: {
      name: '转型时代',
      weather: 'rain',
      season: 'summer',
      skyGradient: ['#1a1a1a', '#2c3e50'],

      buildings: [
        { x: 330, y: 200, type: 'palace', label: '开封', region: 'zhongyuan' },
        { x: 380, y: 270, type: 'palace', label: '杭州', region: 'haiyang' },
        { x: 360, y: 175, type: 'palace', label: '大都', region: 'guodu' },
        { x: 450, y: 280, type: 'port', label: '泉州', region: 'haiyang' },
        { x: 420, y: 305, type: 'port', label: '广州', region: 'haiyang' },
        { x: 230, y: 330, type: 'city', label: '大理', region: 'xinan' },
        { x: 250, y: 340, type: 'city', label: '成都', region: 'xinan' },
        { x: 300, y: 210, type: 'city', label: '洛阳', region: 'zhongyuan' },
        { x: 140, y: 285, type: 'temple', label: '拉萨', region: 'gaoyuan' },
        { x: 310, y: 90, type: 'palace', label: '上都', region: 'caoyuan' },
        { x: 110, y: 160, type: 'market', label: '撒马尔罕', region: 'xiyu' },
        { x: 285, y: 225, type: 'city', label: '长安', region: 'zhongyuan' },
        { x: 390, y: 245, type: 'market', label: '扬州', region: 'haiyang' },
        { x: 345, y: 235, type: 'city', label: '鄂州', region: 'zhongyuan' },
        { x: 460, y: 270, type: 'lighthouse', label: '刺桐灯塔', region: 'haiyang' },
      ],

      landmarks: [
        { x: 250, y: 160, type: 'mountain', label: '太行山' },
        { x: 200, y: 200, type: 'river', path: 'M150,190 Q250,210 400,230', label: '黄河' },
        { x: 220, y: 300, type: 'river', path: 'M180,290 Q280,310 420,320', label: '长江' },
        { x: 360, y: 240, type: 'river', path: 'M330,200 Q350,250 380,270', label: '大运河' },
        { x: 300, y: 85, type: 'grassland', label: '蒙古草原' },
        { x: 470, y: 360, type: 'sea', label: '南海' },
        { x: 490, y: 250, type: 'sea', label: '东海' },
        { x: 130, y: 250, type: 'mountain', label: '昆仑山' },
      ],

      populations: [
        { region: 'zhongyuan', density: 'high', icon: '🏘️' },
        { region: 'caoyuan', density: 'medium', icon: '🏕️' },
        { region: 'xiyu', density: 'medium', icon: '🏘️' },
        { region: 'gaoyuan', density: 'low', icon: '🏕️' },
        { region: 'xinan', density: 'medium', icon: '🏘️' },
        { region: 'haiyang', density: 'high', icon: '🏘️' },
        { region: 'guodu', density: 'medium', icon: '🏘️' },
      ],

      cultures: [
        { region: 'zhongyuan', items: ['理学', '科举', '活字印刷'] },
        { region: 'caoyuan', items: ['蒙古帝国', '驿站制度'] },
        { region: 'xiyu', items: ['伊斯兰传入', '回鹘文明'] },
        { region: 'gaoyuan', items: ['藏传佛教', '政教合一'] },
        { region: 'xinan', items: ['大理佛国', '土司制度'] },
        { region: 'haiyang', items: ['海上贸易', '市舶司', '瓷器外销'] },
        { region: 'guodu', items: ['辽金并立', '南北对峙'] },
      ],

      ambientElements: [
        { type: 'ships', x: 460, y: 285, label: '远洋商船' },
        { type: 'ships', x: 480, y: 340, label: '郑和宝船' },
        { type: 'caravan', fromX: 110, fromY: 165, toX: 300, toY: 210, label: '回回商人' },
        { type: 'army', x: 310, y: 95, size: 'large', label: '蒙古铁骑' },
        { type: 'fishing_boats', x: 440, y: 295 },
        { type: 'scholars', x: 335, y: 205, label: '太学诸生' },
        { type: 'monks', x: 145, y: 290, label: '藏地僧侣' },
        { type: 'caravan', fromX: 250, fromY: 340, toX: 380, toY: 270, label: '茶商' },
        { type: 'bird_flock', x: 400, y: 250, direction: 'south' },
      ],

      banners: [
        { x: 330, y: 185, text: '宋', color: '#c41e3a' },
        { x: 360, y: 160, text: '元', color: '#1c3d6e' },
        { x: 380, y: 255, text: '南宋', color: '#8b0000' },
        { x: 310, y: 85, text: '蒙古', color: '#4682b4' },
        { x: 230, y: 325, text: '大理', color: '#daa520' },
      ],
    },

    // ============================================
    // 时代四：开放时代 ~1644 - 近现代
    // ============================================
    4: {
      name: '开放时代',
      weather: 'fog',
      season: 'winter',
      skyGradient: ['#0a0a0a', '#1a1a2e'],

      buildings: [
        { x: 360, y: 175, type: 'palace', label: '北京', region: 'guodu' },
        { x: 420, y: 310, type: 'port', label: '广州', region: 'haiyang' },
        { x: 430, y: 260, type: 'port', label: '上海', region: 'haiyang' },
        { x: 415, y: 320, type: 'port', label: '澳门', region: 'haiyang' },
        { x: 425, y: 315, type: 'port', label: '香港', region: 'haiyang' },
        { x: 280, y: 220, type: 'city', label: '西安', region: 'zhongyuan' },
        { x: 320, y: 205, type: 'city', label: '洛阳', region: 'zhongyuan' },
        { x: 340, y: 230, type: 'city', label: '武汉', region: 'zhongyuan' },
        { x: 250, y: 335, type: 'city', label: '成都', region: 'xinan' },
        { x: 220, y: 350, type: 'city', label: '昆明', region: 'xinan' },
        { x: 140, y: 285, type: 'temple', label: '拉萨', region: 'gaoyuan' },
        { x: 110, y: 155, type: 'city', label: '伊犁', region: 'xiyu' },
        { x: 90, y: 170, type: 'fort', label: '喀什', region: 'xiyu' },
        { x: 395, y: 175, type: 'port', label: '天津', region: 'guodu' },
        { x: 460, y: 275, type: 'port', label: '福州', region: 'haiyang' },
      ],

      landmarks: [
        { x: 250, y: 160, type: 'mountain', label: '太行山' },
        { x: 200, y: 200, type: 'river', path: 'M150,190 Q250,210 400,230', label: '黄河' },
        { x: 220, y: 300, type: 'river', path: 'M180,290 Q280,310 420,320', label: '长江' },
        { x: 300, y: 85, type: 'grassland', label: '蒙古草原' },
        { x: 470, y: 360, type: 'sea', label: '南海' },
        { x: 490, y: 240, type: 'sea', label: '东海' },
        { x: 90, y: 110, type: 'desert', label: '塔克拉玛干' },
        { x: 130, y: 250, type: 'mountain', label: '喜马拉雅' },
      ],

      populations: [
        { region: 'zhongyuan', density: 'high', icon: '🏘️' },
        { region: 'caoyuan', density: 'medium', icon: '🏕️' },
        { region: 'xiyu', density: 'medium', icon: '🏘️' },
        { region: 'gaoyuan', density: 'low', icon: '🏕️' },
        { region: 'xinan', density: 'medium', icon: '🏘️' },
        { region: 'haiyang', density: 'high', icon: '🏙️' },
        { region: 'guodu', density: 'high', icon: '🏙️' },
      ],

      cultures: [
        { region: 'zhongyuan', items: ['经世致用', '洋务运动'] },
        { region: 'caoyuan', items: ['盟旗制度', '藏传佛教'] },
        { region: 'xiyu', items: ['伊斯兰文化', '屯垦戍边'] },
        { region: 'gaoyuan', items: ['达赖制度', '金瓶掣签'] },
        { region: 'xinan', items: ['改土归流', '滇越铁路'] },
        { region: 'haiyang', items: ['通商口岸', '买办文化', '洋行'] },
        { region: 'guodu', items: ['八旗驻防', '满汉交融'] },
      ],

      ambientElements: [
        { type: 'ships', x: 470, y: 300, label: '英国炮舰' },
        { type: 'ships', x: 440, y: 270, label: '商船' },
        { type: 'caravan', fromX: 90, fromY: 170, toX: 280, toY: 220, label: '茶叶商队' },
        { type: 'army', x: 360, y: 180, size: 'large', label: '八旗军' },
        { type: 'army', x: 420, y: 315, size: 'small', label: '洋枪队' },
        { type: 'scholars', x: 430, y: 265, label: '留学生' },
        { type: 'fishing_boats', x: 455, y: 290 },
        { type: 'monks', x: 145, y: 290, label: '转世活佛' },
        { type: 'nomads', x: 300, y: 90, size: 'medium', label: '蒙古牧民' },
        { type: 'bird_flock', x: 200, y: 150, direction: 'west' },
      ],

      banners: [
        { x: 360, y: 160, text: '清', color: '#ffd700' },
        { x: 420, y: 300, text: '粤', color: '#c41e3a' },
        { x: 430, y: 250, text: '沪', color: '#4169e1' },
        { x: 110, y: 150, text: '新疆', color: '#2e8b57' },
        { x: 140, y: 275, text: '藏', color: '#8b4513' },
      ],
    },
  },

  // ──────────────────────────────────────────────
  // 关键事件场景增强
  // 为最具视觉冲击力的 12-15 个事件提供额外地图元素
  // ──────────────────────────────────────────────
  eventScenes: {

    // --- 时代一：封建时代 ---

    // 封建制度 vs 中央集权
    'e1_1': {
      extraBuildings: [
        { x: 260, y: 230, type: 'academy', label: '稷下学宫' },
      ],
      extraAmbient: [
        { type: 'scholars', x: 270, y: 240, label: '百家论战' },
      ],
    },

    // 商鞅变法
    'e1_2': {
      extraBuildings: [
        { x: 255, y: 218, type: 'palace', label: '咸阳宫' },
        { x: 250, y: 235, type: 'farm', label: '秦田' },
      ],
      extraAmbient: [
        { type: 'army', x: 260, y: 225, size: 'medium', label: '新军操练' },
      ],
    },

    // 合纵连横
    'e1_3': {
      extraBuildings: [
        { x: 340, y: 210, type: 'city', label: '大梁' },
      ],
      extraAmbient: [
        { type: 'caravan', fromX: 345, fromY: 195, toX: 260, toY: 225, label: '纵横策士' },
        { type: 'army', x: 280, y: 215, size: 'large', label: '秦军东出' },
      ],
    },

    // 秦灭六国
    'e1_4': {
      extraBuildings: [
        { x: 275, y: 210, type: 'wall', label: '万里长城' },
      ],
      extraAmbient: [
        { type: 'army', x: 290, y: 200, size: 'large', label: '秦始皇兵马' },
        { type: 'army', x: 350, y: 195, size: 'small', label: '六国残兵' },
      ],
    },

    // --- 时代二：帝国时代 ---

    // 汉武帝开拓
    'e2_1': {
      extraBuildings: [
        { x: 200, y: 180, type: 'fort', label: '玉门关' },
        { x: 170, y: 175, type: 'fort', label: '阳关' },
      ],
      extraAmbient: [
        { type: 'army', x: 180, y: 175, size: 'large', label: '汉军西征' },
        { type: 'caravan', fromX: 80, fromY: 150, toX: 270, toY: 220, label: '张骞出使' },
      ],
    },

    // 佛教东传
    'e2_2': {
      extraBuildings: [
        { x: 315, y: 210, type: 'temple', label: '白马寺' },
        { x: 165, y: 168, type: 'temple', label: '莫高窟' },
      ],
      extraAmbient: [
        { type: 'monks', x: 130, y: 170, label: '西域僧人' },
        { type: 'monks', x: 310, y: 215, label: '译经僧' },
      ],
    },

    // 五胡乱华
    'e2_3': {
      extraBuildings: [
        { x: 385, y: 275, type: 'palace', label: '建康宫' },
      ],
      extraAmbient: [
        { type: 'nomads', x: 320, y: 140, size: 'large', label: '五胡铁骑' },
        { type: 'army', x: 340, y: 210, size: 'small', label: '衣冠南渡' },
      ],
    },

    // 大唐盛世
    'e2_4': {
      extraBuildings: [
        { x: 265, y: 215, type: 'palace', label: '大明宫' },
        { x: 275, y: 230, type: 'market', label: '西市' },
      ],
      extraAmbient: [
        { type: 'caravan', fromX: 75, fromY: 150, toX: 265, toY: 220, label: '胡商万里' },
        { type: 'scholars', x: 270, y: 225, label: '诗人雅集' },
        { type: 'ships', x: 430, y: 315, label: '遣唐使' },
      ],
    },

    // --- 时代三：转型时代 ---

    // 宋代商业革命
    'e3_1': {
      extraBuildings: [
        { x: 335, y: 195, type: 'market', label: '东京汴梁夜市' },
        { x: 385, y: 265, type: 'market', label: '临安市坊' },
      ],
      extraAmbient: [
        { type: 'ships', x: 455, y: 280, label: '海商巨舶' },
        { type: 'scholars', x: 340, y: 200, label: '清明上河' },
      ],
    },

    // 蒙古西征
    'e3_2': {
      extraBuildings: [
        { x: 305, y: 85, type: 'camp', label: '成吉思汗大帐' },
      ],
      extraAmbient: [
        { type: 'army', x: 300, y: 95, size: 'large', label: '蒙古西征大军' },
        { type: 'army', x: 120, y: 155, size: 'medium', label: '西域征伐' },
        { type: 'nomads', x: 280, y: 100, size: 'large', label: '万马奔腾' },
      ],
    },

    // 郑和下西洋
    'e3_3': {
      extraBuildings: [
        { x: 400, y: 290, type: 'port', label: '太仓刘家港' },
      ],
      extraAmbient: [
        { type: 'ships', x: 470, y: 350, label: '郑和宝船队' },
        { type: 'ships', x: 490, y: 380, label: '远航舰队' },
      ],
    },

    // --- 时代四：开放时代 ---

    // 鸦片战争
    'e4_1': {
      extraBuildings: [
        { x: 425, y: 312, type: 'fort', label: '虎门炮台' },
      ],
      extraAmbient: [
        { type: 'ships', x: 470, y: 310, label: '英国远征舰队' },
        { type: 'army', x: 420, y: 310, size: 'medium', label: '清军守卫' },
      ],
    },

    // 洋务运动
    'e4_2': {
      extraBuildings: [
        { x: 435, y: 258, type: 'city', label: '江南制造局' },
        { x: 390, y: 180, type: 'city', label: '天津机器局' },
      ],
      extraAmbient: [
        { type: 'ships', x: 450, y: 265, label: '北洋水师' },
        { type: 'scholars', x: 430, y: 260, label: '同文馆学生' },
      ],
    },

    // 辛亥革命
    'e4_3': {
      extraBuildings: [
        { x: 345, y: 235, type: 'fort', label: '武昌起义' },
      ],
      extraAmbient: [
        { type: 'army', x: 340, y: 230, size: 'medium', label: '革命军' },
        { type: 'army', x: 360, y: 180, size: 'medium', label: '清廷禁军' },
      ],
    },
  },
};
