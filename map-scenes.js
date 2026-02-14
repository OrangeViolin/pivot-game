// =============================================================================
// map-scenes.js
// MAP SCENES — Visual data for each event's SVG map display
// Describes labels, arrows, icons, highlights, and atmosphere for all 36 events
// across 4 eras of Chinese history.
// =============================================================================

const MAP_SCENES = {

  // ===========================================================================
  // ERA 1: 封建时代 (~1046-221 BC)
  // ===========================================================================

  // e1_1 武王伐纣
  'e1_1': {
    labels: [
      { text: '周', x: 280, y: 155, size: 'large', color: '#dbb978', style: 'glowing' },
      { text: '商(殷)', x: 370, y: 130, size: 'large', color: '#c56b6b', style: 'fading' },
      { text: '牧野', x: 355, y: 145, size: 'small', color: '#ff9999' },
      { text: '镐京', x: 270, y: 165, size: 'medium', color: '#dbb978' },
      { text: '八百诸侯', x: 320, y: 195, size: 'small', color: '#aaa' },
      { text: '朝歌', x: 375, y: 118, size: 'small', color: '#c56b6b', style: 'fading' }
    ],
    arrows: [
      { from: [280, 160], to: [355, 140], type: 'military', label: '伐纣' },
      { from: [320, 200], to: [350, 145], type: 'alliance', label: '诸侯会盟' }
    ],
    highlights: ['zhongyuan', 'guodu'],
    icons: [
      { type: 'battle', x: 355, y: 140 },
      { type: 'capital', x: 275, y: 160 },
      { type: 'capital', x: 375, y: 120 }
    ],
    atmosphere: 'war'
  },

  // e1_2 礼乐兴邦
  'e1_2': {
    labels: [
      { text: '周公', x: 310, y: 140, size: 'large', color: '#dbb978' },
      { text: '洛邑', x: 340, y: 155, size: 'medium', color: '#e8d599' },
      { text: '镐京', x: 270, y: 165, size: 'medium', color: '#dbb978' },
      { text: '礼', x: 350, y: 175, size: 'large', color: '#c9a8e8' },
      { text: '乐', x: 310, y: 180, size: 'large', color: '#a8c9e8' },
      { text: '诸夏', x: 290, y: 220, size: 'small', color: '#aaa' },
      { text: '蛮夷', x: 230, y: 350, size: 'small', color: '#888', style: 'fading' }
    ],
    arrows: [
      { from: [310, 145], to: [340, 160], type: 'culture', label: '制礼作乐' },
      { from: [330, 150], to: [280, 240], type: 'culture', label: '教化四方' },
      { from: [330, 150], to: [230, 360], type: 'expansion', label: '分封' }
    ],
    highlights: ['zhongyuan', 'guodu'],
    icons: [
      { type: 'temple', x: 340, y: 150 },
      { type: 'scholar', x: 310, y: 145 },
      { type: 'capital', x: 275, y: 160 }
    ],
    atmosphere: 'culture'
  },

  // e1_3 犬戎之祸
  'e1_3': {
    labels: [
      { text: '犬戎', x: 230, y: 100, size: 'large', color: '#e85c5c', style: 'glowing' },
      { text: '西周', x: 280, y: 155, size: 'large', color: '#dbb978', style: 'fading' },
      { text: '镐京', x: 270, y: 168, size: 'medium', color: '#dbb978', style: 'fading' },
      { text: '洛邑', x: 345, y: 155, size: 'medium', color: '#e8d599', style: 'glowing' },
      { text: '烽火台', x: 295, y: 130, size: 'small', color: '#ff6600' },
      { text: '骊山', x: 275, y: 145, size: 'small', color: '#cc8844' }
    ],
    arrows: [
      { from: [230, 105], to: [275, 155], type: 'military', label: '犬戎入侵' },
      { from: [275, 160], to: [345, 155], type: 'migration', label: '平王东迁' }
    ],
    highlights: ['zhongyuan', 'caoyuan', 'guodu'],
    icons: [
      { type: 'battle', x: 275, y: 155 },
      { type: 'nomad', x: 230, y: 100 },
      { type: 'capital', x: 345, y: 150 }
    ],
    atmosphere: 'crisis'
  },

  // e1_4 春秋争霸
  'e1_4': {
    labels: [
      { text: '齐', x: 400, y: 135, size: 'large', color: '#5ca8e8' },
      { text: '晋', x: 310, y: 130, size: 'large', color: '#e8a85c' },
      { text: '楚', x: 340, y: 220, size: 'large', color: '#5ce85c' },
      { text: '秦', x: 250, y: 160, size: 'medium', color: '#888' },
      { text: '周室', x: 330, y: 155, size: 'small', color: '#dbb978', style: 'fading' },
      { text: '吴', x: 430, y: 210, size: 'medium', color: '#c9a8e8' },
      { text: '越', x: 445, y: 230, size: 'small', color: '#e8c9a8' }
    ],
    arrows: [
      { from: [400, 140], to: [330, 155], type: 'military', label: '尊王攘夷' },
      { from: [340, 225], to: [330, 160], type: 'military', label: '问鼎中原' },
      { from: [430, 215], to: [445, 230], type: 'military', label: '吴越争霸' }
    ],
    highlights: ['zhongyuan', 'guodu', 'haiyang'],
    icons: [
      { type: 'battle', x: 355, y: 180 },
      { type: 'alliance', x: 370, y: 140 },
      { type: 'capital', x: 330, y: 155 }
    ],
    atmosphere: 'war'
  },

  // e1_5 百家争鸣
  'e1_5': {
    labels: [
      { text: '儒(鲁)', x: 395, y: 150, size: 'large', color: '#e8d599' },
      { text: '道(楚)', x: 320, y: 225, size: 'large', color: '#a8e8a8' },
      { text: '法(韩)', x: 310, y: 155, size: 'medium', color: '#e85c5c' },
      { text: '墨(宋)', x: 370, y: 165, size: 'medium', color: '#8888cc' },
      { text: '兵(齐)', x: 410, y: 130, size: 'small', color: '#cc8844' },
      { text: '名(赵)', x: 340, y: 120, size: 'small', color: '#aaa' },
      { text: '稷下学宫', x: 400, y: 145, size: 'small', color: '#c9a8e8' }
    ],
    arrows: [
      { from: [395, 155], to: [310, 160], type: 'culture', label: '孔子周游' },
      { from: [320, 230], to: [260, 180], type: 'culture', label: '老子出关' },
      { from: [370, 170], to: [350, 190], type: 'culture', label: '墨者行侠' }
    ],
    highlights: ['zhongyuan', 'guodu'],
    icons: [
      { type: 'scholar', x: 395, y: 150 },
      { type: 'scholar', x: 320, y: 220 },
      { type: 'scholar', x: 310, y: 150 },
      { type: 'temple', x: 400, y: 140 }
    ],
    atmosphere: 'culture'
  },

  // e1_6 商鞅变法
  'e1_6': {
    labels: [
      { text: '秦', x: 250, y: 160, size: 'large', color: '#e85050', style: 'glowing' },
      { text: '咸阳', x: 270, y: 150, size: 'medium', color: '#555' },
      { text: '商鞅', x: 260, y: 175, size: 'small', color: '#e85c5c' },
      { text: '六国', x: 370, y: 150, size: 'medium', color: '#aaa', style: 'fading' },
      { text: '关中', x: 260, y: 140, size: 'small', color: '#dbb978' },
      { text: '徙木立信', x: 255, y: 190, size: 'small', color: '#cc8844' }
    ],
    arrows: [
      { from: [310, 160], to: [260, 165], type: 'migration', label: '入秦' },
      { from: [250, 165], to: [250, 185], type: 'culture', label: '变法' }
    ],
    highlights: ['zhongyuan', 'guodu'],
    icons: [
      { type: 'scholar', x: 260, y: 170 },
      { type: 'capital', x: 268, y: 148 },
      { type: 'fortress', x: 250, y: 155 }
    ],
    atmosphere: 'transformation'
  },

  // e1_7 合纵连横
  'e1_7': {
    labels: [
      { text: '秦', x: 250, y: 160, size: 'large', color: '#e85050', style: 'glowing' },
      { text: '赵', x: 340, y: 115, size: 'medium', color: '#5ca8e8' },
      { text: '齐', x: 410, y: 135, size: 'medium', color: '#e8a85c' },
      { text: '楚', x: 340, y: 230, size: 'medium', color: '#5ce85c' },
      { text: '燕', x: 380, y: 90, size: 'medium', color: '#c9a8e8' },
      { text: '韩', x: 310, y: 165, size: 'small', color: '#e8c9a8' },
      { text: '魏', x: 330, y: 150, size: 'small', color: '#a8e8e8' },
      { text: '函谷关', x: 275, y: 155, size: 'small', color: '#cc4444' }
    ],
    arrows: [
      { from: [340, 120], to: [410, 135], type: 'alliance', label: '合纵' },
      { from: [410, 135], to: [340, 230], type: 'alliance', label: '' },
      { from: [250, 165], to: [330, 150], type: 'military', label: '连横破盟' },
      { from: [250, 165], to: [310, 165], type: 'military', label: '远交近攻' }
    ],
    highlights: ['zhongyuan', 'guodu', 'xiyu'],
    icons: [
      { type: 'alliance', x: 375, y: 130 },
      { type: 'fortress', x: 278, y: 153 },
      { type: 'battle', x: 310, y: 160 }
    ],
    atmosphere: 'war'
  },

  // e1_8 西域初通
  'e1_8': {
    labels: [
      { text: '汉', x: 310, y: 150, size: 'large', color: '#cc3333' },
      { text: '长安', x: 285, y: 160, size: 'medium', color: '#cc3333' },
      { text: '张骞', x: 200, y: 155, size: 'medium', color: '#e8d599', style: 'glowing' },
      { text: '大月氏', x: 100, y: 130, size: 'medium', color: '#a8e8a8' },
      { text: '匈奴', x: 350, y: 60, size: 'medium', color: '#888' },
      { text: '西域三十六国', x: 120, y: 165, size: 'small', color: '#c9a8e8' },
      { text: '敦煌', x: 180, y: 145, size: 'small', color: '#dbb978' }
    ],
    arrows: [
      { from: [285, 160], to: [180, 150], type: 'trade', label: '凿空西域' },
      { from: [180, 150], to: [100, 140], type: 'trade', label: '丝绸之路' },
      { from: [350, 65], to: [200, 155], type: 'military', label: '匈奴阻路' }
    ],
    highlights: ['zhongyuan', 'xiyu', 'caoyuan'],
    icons: [
      { type: 'market', x: 180, y: 145 },
      { type: 'capital', x: 285, y: 158 },
      { type: 'nomad', x: 350, y: 58 }
    ],
    atmosphere: 'trade'
  },

  // e1_T 天下一统 (转型事件)
  'e1_T': {
    labels: [
      { text: '秦', x: 310, y: 145, size: 'large', color: '#e85050', style: 'glowing' },
      { text: '咸阳', x: 275, y: 155, size: 'medium', color: '#555' },
      { text: '嬴政', x: 300, y: 160, size: 'medium', color: '#e85c5c' },
      { text: '六国(灭)', x: 380, y: 140, size: 'medium', color: '#999', style: 'fading' },
      { text: '书同文', x: 340, y: 170, size: 'small', color: '#c9a8e8' },
      { text: '车同轨', x: 350, y: 185, size: 'small', color: '#a8c9e8' },
      { text: '长城', x: 340, y: 85, size: 'medium', color: '#888' },
      { text: '岭南', x: 350, y: 320, size: 'small', color: '#aaa', style: 'glowing' }
    ],
    arrows: [
      { from: [275, 160], to: [380, 140], type: 'military', label: '扫灭六国' },
      { from: [275, 160], to: [340, 90], type: 'expansion', label: '修筑长城' },
      { from: [275, 160], to: [350, 320], type: 'expansion', label: '南征百越' },
      { from: [310, 170], to: [430, 200], type: 'expansion', label: '统一度量' }
    ],
    highlights: ['zhongyuan', 'caoyuan', 'guodu', 'xinan', 'haiyang'],
    icons: [
      { type: 'capital', x: 275, y: 153 },
      { type: 'wall', x: 340, y: 83 },
      { type: 'battle', x: 380, y: 138 },
      { type: 'battle', x: 350, y: 315 }
    ],
    atmosphere: 'transformation'
  },

  // ===========================================================================
  // ERA 2: 豪族社会 (221 BC - 960 AD)
  // ===========================================================================

  // e2_1 独尊儒术
  'e2_1': {
    labels: [
      { text: '汉', x: 320, y: 145, size: 'large', color: '#cc3333' },
      { text: '长安', x: 280, y: 160, size: 'medium', color: '#cc3333' },
      { text: '太学', x: 340, y: 160, size: 'medium', color: '#e8d599', style: 'glowing' },
      { text: '董仲舒', x: 350, y: 140, size: 'small', color: '#c9a8e8' },
      { text: '儒', x: 330, y: 175, size: 'large', color: '#dbb978' },
      { text: '经学世家', x: 370, y: 165, size: 'small', color: '#aaa' }
    ],
    arrows: [
      { from: [340, 160], to: [280, 240], type: 'culture', label: '教化天下' },
      { from: [340, 160], to: [230, 360], type: 'culture', label: '儒学南传' },
      { from: [340, 160], to: [120, 150], type: 'culture', label: '西传' }
    ],
    highlights: ['zhongyuan', 'guodu'],
    icons: [
      { type: 'scholar', x: 340, y: 155 },
      { type: 'temple', x: 345, y: 160 },
      { type: 'capital', x: 280, y: 158 }
    ],
    atmosphere: 'culture'
  },

  // e2_2 匈奴南侵
  'e2_2': {
    labels: [
      { text: '匈奴', x: 360, y: 45, size: 'large', color: '#e85c5c', style: 'glowing' },
      { text: '单于庭', x: 390, y: 35, size: 'small', color: '#cc4444' },
      { text: '汉', x: 310, y: 150, size: 'large', color: '#cc3333' },
      { text: '长安', x: 280, y: 160, size: 'medium', color: '#cc3333' },
      { text: '卫青', x: 330, y: 100, size: 'small', color: '#5ca8e8' },
      { text: '霍去病', x: 290, y: 80, size: 'small', color: '#5ca8e8' },
      { text: '白登', x: 345, y: 105, size: 'small', color: '#ff6600' }
    ],
    arrows: [
      { from: [360, 50], to: [330, 100], type: 'military', label: '南侵' },
      { from: [310, 155], to: [360, 50], type: 'military', label: '远征漠北' },
      { from: [280, 160], to: [370, 55], type: 'trade', label: '和亲' }
    ],
    highlights: ['caoyuan', 'zhongyuan', 'guodu'],
    icons: [
      { type: 'nomad', x: 370, y: 45 },
      { type: 'battle', x: 345, y: 100 },
      { type: 'wall', x: 340, y: 90 },
      { type: 'capital', x: 280, y: 158 }
    ],
    atmosphere: 'war'
  },

  // e2_3 丝路繁华
  'e2_3': {
    labels: [
      { text: '长安', x: 280, y: 158, size: 'medium', color: '#cc3333' },
      { text: '敦煌', x: 185, y: 142, size: 'medium', color: '#dbb978' },
      { text: '楼兰', x: 155, y: 135, size: 'small', color: '#c9a8e8' },
      { text: '龟兹', x: 120, y: 145, size: 'small', color: '#a8e8a8' },
      { text: '大宛', x: 85, y: 130, size: 'small', color: '#e8c9a8' },
      { text: '安息(波斯)', x: 60, y: 155, size: 'small', color: '#888' },
      { text: '西域都护府', x: 130, y: 160, size: 'medium', color: '#e8d599', style: 'glowing' },
      { text: '莫高窟', x: 180, y: 155, size: 'small', color: '#c9a8e8' }
    ],
    arrows: [
      { from: [280, 160], to: [185, 145], type: 'trade', label: '丝绸西运' },
      { from: [185, 145], to: [85, 135], type: 'trade', label: '丝绸之路' },
      { from: [85, 155], to: [185, 145], type: 'trade', label: '琉璃香料东来' }
    ],
    highlights: ['xiyu', 'zhongyuan'],
    icons: [
      { type: 'market', x: 185, y: 140 },
      { type: 'market', x: 120, y: 140 },
      { type: 'capital', x: 280, y: 156 },
      { type: 'temple', x: 180, y: 150 }
    ],
    atmosphere: 'trade'
  },

  // e2_4 门阀崛起
  'e2_4': {
    labels: [
      { text: '袁氏(汝南)', x: 350, y: 170, size: 'medium', color: '#c9a8e8' },
      { text: '杨氏(弘农)', x: 295, y: 150, size: 'medium', color: '#a8c9e8' },
      { text: '荀氏(颍川)', x: 340, y: 155, size: 'medium', color: '#e8c9a8' },
      { text: '王氏(琅琊)', x: 400, y: 155, size: 'small', color: '#a8e8a8' },
      { text: '寒门', x: 320, y: 200, size: 'small', color: '#888', style: 'fading' },
      { text: '九品中正', x: 330, y: 140, size: 'small', color: '#dbb978' }
    ],
    arrows: [
      { from: [350, 175], to: [330, 145], type: 'culture', label: '掌控仕途' },
      { from: [295, 155], to: [330, 145], type: 'culture', label: '经学传家' }
    ],
    highlights: ['zhongyuan', 'guodu'],
    icons: [
      { type: 'scholar', x: 350, y: 165 },
      { type: 'scholar', x: 295, y: 145 },
      { type: 'temple', x: 330, y: 138 }
    ],
    atmosphere: 'culture'
  },

  // e2_5 佛教东传
  'e2_5': {
    labels: [
      { text: '天竺', x: 120, y: 310, size: 'medium', color: '#e8d599' },
      { text: '白马寺', x: 345, y: 155, size: 'medium', color: '#c9a8e8', style: 'glowing' },
      { text: '洛阳', x: 340, y: 145, size: 'small', color: '#cc3333' },
      { text: '云冈石窟', x: 325, y: 115, size: 'small', color: '#a8c9e8' },
      { text: '敦煌', x: 185, y: 142, size: 'small', color: '#dbb978' },
      { text: '佛', x: 170, y: 280, size: 'large', color: '#e8d599', style: 'glowing' },
      { text: '龟兹(译经)', x: 115, y: 150, size: 'small', color: '#a8e8a8' }
    ],
    arrows: [
      { from: [120, 310], to: [170, 280], type: 'culture', label: '佛法传入' },
      { from: [170, 285], to: [185, 145], type: 'culture', label: '经西域东传' },
      { from: [185, 145], to: [345, 155], type: 'culture', label: '白马驮经' }
    ],
    highlights: ['gaoyuan', 'xiyu', 'zhongyuan'],
    icons: [
      { type: 'temple', x: 345, y: 150 },
      { type: 'temple', x: 325, y: 110 },
      { type: 'temple', x: 185, y: 140 },
      { type: 'scholar', x: 120, y: 305 }
    ],
    atmosphere: 'culture'
  },

  // e2_6 大运河贯通
  'e2_6': {
    labels: [
      { text: '隋', x: 320, y: 140, size: 'large', color: '#cc3333' },
      { text: '涿郡(北京)', x: 375, y: 100, size: 'medium', color: '#5ca8e8' },
      { text: '洛阳', x: 340, y: 150, size: 'medium', color: '#cc3333' },
      { text: '江都(扬州)', x: 410, y: 200, size: 'medium', color: '#a8e8a8' },
      { text: '余杭(杭州)', x: 430, y: 230, size: 'medium', color: '#e8c9a8' },
      { text: '百万民夫', x: 360, y: 175, size: 'small', color: '#888' },
      { text: '大运河', x: 385, y: 155, size: 'small', color: '#5ca8e8', style: 'glowing' }
    ],
    arrows: [
      { from: [375, 105], to: [340, 155], type: 'trade', label: '永济渠' },
      { from: [340, 155], to: [410, 205], type: 'trade', label: '通济渠' },
      { from: [410, 205], to: [430, 235], type: 'trade', label: '江南河' }
    ],
    highlights: ['zhongyuan', 'haiyang', 'guodu'],
    icons: [
      { type: 'capital', x: 340, y: 148 },
      { type: 'port', x: 410, y: 195 },
      { type: 'port', x: 430, y: 225 },
      { type: 'rebellion', x: 360, y: 170 }
    ],
    atmosphere: 'transformation'
  },

  // e2_7 安史之乱
  'e2_7': {
    labels: [
      { text: '唐', x: 300, y: 155, size: 'large', color: '#cc3333', style: 'fading' },
      { text: '长安', x: 280, y: 165, size: 'medium', color: '#cc3333', style: 'fading' },
      { text: '安禄山', x: 370, y: 100, size: 'large', color: '#e85c5c', style: 'glowing' },
      { text: '范阳', x: 385, y: 108, size: 'small', color: '#e85c5c' },
      { text: '洛阳(陷)', x: 345, y: 150, size: 'small', color: '#999', style: 'fading' },
      { text: '马嵬坡', x: 270, y: 180, size: 'small', color: '#cc8844' },
      { text: '回纥', x: 330, y: 50, size: 'medium', color: '#5ca8e8' }
    ],
    arrows: [
      { from: [385, 108], to: [345, 150], type: 'military', label: '渔阳鼙鼓' },
      { from: [345, 155], to: [280, 165], type: 'military', label: '攻陷两京' },
      { from: [280, 170], to: [230, 350], type: 'migration', label: '天子西逃' },
      { from: [330, 55], to: [345, 150], type: 'military', label: '借兵平叛' }
    ],
    highlights: ['zhongyuan', 'caoyuan', 'guodu'],
    icons: [
      { type: 'rebellion', x: 385, y: 105 },
      { type: 'battle', x: 345, y: 148 },
      { type: 'capital', x: 280, y: 163 },
      { type: 'nomad', x: 330, y: 48 }
    ],
    atmosphere: 'crisis'
  },

  // e2_8 科举初创
  'e2_8': {
    labels: [
      { text: '隋唐', x: 310, y: 140, size: 'large', color: '#cc3333' },
      { text: '长安', x: 280, y: 160, size: 'medium', color: '#cc3333' },
      { text: '贡院', x: 330, y: 155, size: 'medium', color: '#e8d599', style: 'glowing' },
      { text: '进士科', x: 340, y: 170, size: 'small', color: '#c9a8e8' },
      { text: '寒门士子', x: 360, y: 190, size: 'small', color: '#5ca8e8', style: 'glowing' },
      { text: '门阀(衰)', x: 375, y: 140, size: 'small', color: '#888', style: 'fading' }
    ],
    arrows: [
      { from: [360, 195], to: [330, 160], type: 'culture', label: '鱼跃龙门' },
      { from: [330, 160], to: [280, 240], type: 'culture', label: '科举传播' },
      { from: [330, 160], to: [430, 220], type: 'culture', label: '选才取士' }
    ],
    highlights: ['zhongyuan', 'guodu'],
    icons: [
      { type: 'scholar', x: 330, y: 152 },
      { type: 'scholar', x: 360, y: 185 },
      { type: 'temple', x: 330, y: 155 }
    ],
    atmosphere: 'culture'
  },

  // e2_T 唐宋之变 (转型事件)
  'e2_T': {
    labels: [
      { text: '宋', x: 350, y: 155, size: 'large', color: '#3366cc', style: 'glowing' },
      { text: '汴京', x: 345, y: 145, size: 'medium', color: '#3366cc' },
      { text: '辽', x: 370, y: 80, size: 'large', color: '#e85c5c' },
      { text: '西夏', x: 230, y: 125, size: 'medium', color: '#cc8844' },
      { text: '印刷术', x: 370, y: 170, size: 'small', color: '#e8d599', style: 'glowing' },
      { text: '平民社会', x: 340, y: 185, size: 'small', color: '#a8c9e8', style: 'glowing' },
      { text: '海上贸易', x: 470, y: 225, size: 'small', color: '#5ca8e8' },
      { text: '豪族(亡)', x: 310, y: 170, size: 'small', color: '#888', style: 'fading' }
    ],
    arrows: [
      { from: [370, 85], to: [345, 140], type: 'military', label: '北方压力' },
      { from: [230, 130], to: [280, 145], type: 'military', label: '西夏扰边' },
      { from: [345, 155], to: [470, 230], type: 'trade', label: '海上贸易兴起' },
      { from: [340, 190], to: [370, 175], type: 'culture', label: '知识平民化' }
    ],
    highlights: ['zhongyuan', 'caoyuan', 'haiyang', 'xiyu'],
    icons: [
      { type: 'capital', x: 345, y: 143 },
      { type: 'nomad', x: 370, y: 78 },
      { type: 'market', x: 470, y: 220 },
      { type: 'scholar', x: 370, y: 165 }
    ],
    atmosphere: 'transformation'
  },

  // ===========================================================================
  // ERA 3: 内卷与开放 (960-1840)
  // ===========================================================================

  // e3_1 澶渊之盟
  'e3_1': {
    labels: [
      { text: '宋', x: 345, y: 160, size: 'large', color: '#3366cc' },
      { text: '辽', x: 370, y: 75, size: 'large', color: '#e85c5c' },
      { text: '澶州', x: 355, y: 120, size: 'medium', color: '#ff9999', style: 'glowing' },
      { text: '汴京', x: 345, y: 150, size: 'small', color: '#3366cc' },
      { text: '岁币三十万', x: 355, y: 135, size: 'small', color: '#dbb978' },
      { text: '寇准', x: 340, y: 125, size: 'small', color: '#5ca8e8' },
      { text: '西夏', x: 225, y: 130, size: 'medium', color: '#cc8844' }
    ],
    arrows: [
      { from: [370, 80], to: [355, 120], type: 'military', label: '辽军南下' },
      { from: [345, 155], to: [355, 125], type: 'military', label: '真宗亲征' },
      { from: [345, 160], to: [370, 80], type: 'trade', label: '岁币' }
    ],
    highlights: ['zhongyuan', 'caoyuan', 'guodu'],
    icons: [
      { type: 'battle', x: 355, y: 118 },
      { type: 'alliance', x: 360, y: 125 },
      { type: 'capital', x: 345, y: 148 },
      { type: 'nomad', x: 370, y: 73 }
    ],
    atmosphere: 'war'
  },

  // e3_2 王安石变法
  'e3_2': {
    labels: [
      { text: '宋', x: 340, y: 150, size: 'large', color: '#3366cc' },
      { text: '汴京', x: 345, y: 142, size: 'small', color: '#3366cc' },
      { text: '王安石', x: 350, y: 160, size: 'medium', color: '#e85c5c', style: 'glowing' },
      { text: '青苗法', x: 370, y: 175, size: 'small', color: '#a8e8a8' },
      { text: '保甲法', x: 315, y: 175, size: 'small', color: '#e8c9a8' },
      { text: '旧党(司马光)', x: 380, y: 145, size: 'small', color: '#888', style: 'fading' },
      { text: '免役法', x: 340, y: 190, size: 'small', color: '#c9a8e8' }
    ],
    arrows: [
      { from: [350, 165], to: [370, 180], type: 'culture', label: '推行新法' },
      { from: [380, 150], to: [350, 165], type: 'military', label: '新旧党争' }
    ],
    highlights: ['zhongyuan', 'guodu'],
    icons: [
      { type: 'scholar', x: 350, y: 158 },
      { type: 'capital', x: 345, y: 140 },
      { type: 'rebellion', x: 380, y: 143 }
    ],
    atmosphere: 'transformation'
  },

  // e3_3 蒙古崛起
  'e3_3': {
    labels: [
      { text: '蒙古', x: 370, y: 40, size: 'large', color: '#e85c5c', style: 'glowing' },
      { text: '成吉思汗', x: 400, y: 30, size: 'small', color: '#cc4444' },
      { text: '金', x: 370, y: 100, size: 'medium', color: '#dbb978', style: 'fading' },
      { text: '南宋', x: 380, y: 220, size: 'medium', color: '#3366cc', style: 'fading' },
      { text: '临安', x: 430, y: 225, size: 'small', color: '#3366cc' },
      { text: '西夏(灭)', x: 220, y: 125, size: 'small', color: '#999', style: 'fading' },
      { text: '花剌子模(灭)', x: 70, y: 130, size: 'small', color: '#999', style: 'fading' },
      { text: '蒙古西征', x: 200, y: 60, size: 'small', color: '#e85c5c' }
    ],
    arrows: [
      { from: [370, 45], to: [370, 100], type: 'military', label: '灭金' },
      { from: [370, 45], to: [220, 130], type: 'military', label: '灭西夏' },
      { from: [370, 45], to: [70, 135], type: 'military', label: '西征' },
      { from: [370, 105], to: [380, 220], type: 'military', label: '南下灭宋' }
    ],
    highlights: ['caoyuan', 'zhongyuan', 'xiyu', 'guodu'],
    icons: [
      { type: 'nomad', x: 370, y: 38 },
      { type: 'battle', x: 370, y: 98 },
      { type: 'battle', x: 220, y: 123 },
      { type: 'capital', x: 430, y: 223 }
    ],
    atmosphere: 'war'
  },

  // e3_4 郑和下西洋
  'e3_4': {
    labels: [
      { text: '明', x: 330, y: 150, size: 'large', color: '#cc3333' },
      { text: '南京', x: 400, y: 195, size: 'medium', color: '#cc3333' },
      { text: '郑和', x: 460, y: 260, size: 'medium', color: '#5ca8e8', style: 'glowing' },
      { text: '宝船舰队', x: 470, y: 280, size: 'small', color: '#3366cc' },
      { text: '占城', x: 420, y: 330, size: 'small', color: '#a8e8a8' },
      { text: '三佛齐', x: 390, y: 370, size: 'small', color: '#e8c9a8' },
      { text: '古里(印度)', x: 200, y: 350, size: 'small', color: '#c9a8e8' },
      { text: '非洲东岸', x: 100, y: 380, size: 'small', color: '#888' }
    ],
    arrows: [
      { from: [400, 200], to: [460, 265], type: 'trade', label: '下西洋' },
      { from: [460, 265], to: [420, 335], type: 'trade', label: '南洋' },
      { from: [420, 335], to: [200, 355], type: 'trade', label: '印度洋' },
      { from: [200, 355], to: [100, 385], type: 'trade', label: '远达非洲' }
    ],
    highlights: ['haiyang', 'xinan', 'zhongyuan'],
    icons: [
      { type: 'fleet', x: 460, y: 255 },
      { type: 'port', x: 400, y: 193 },
      { type: 'port', x: 420, y: 328 },
      { type: 'capital', x: 398, y: 190 }
    ],
    atmosphere: 'trade'
  },

  // e3_5 海禁与倭患
  'e3_5': {
    labels: [
      { text: '明', x: 330, y: 150, size: 'large', color: '#cc3333' },
      { text: '倭寇', x: 490, y: 200, size: 'medium', color: '#e85c5c', style: 'glowing' },
      { text: '戚继光', x: 450, y: 215, size: 'medium', color: '#3366cc' },
      { text: '浙江沿海', x: 450, y: 230, size: 'small', color: '#888' },
      { text: '福建沿海', x: 440, y: 260, size: 'small', color: '#888' },
      { text: '片板不许入海', x: 460, y: 245, size: 'small', color: '#cc4444' },
      { text: '戚家军', x: 440, y: 225, size: 'small', color: '#5ca8e8' }
    ],
    arrows: [
      { from: [510, 190], to: [460, 220], type: 'military', label: '倭寇侵扰' },
      { from: [450, 220], to: [490, 205], type: 'military', label: '抗倭' },
      { from: [330, 155], to: [460, 230], type: 'military', label: '海禁令' }
    ],
    highlights: ['haiyang', 'zhongyuan'],
    icons: [
      { type: 'fleet', x: 490, y: 198 },
      { type: 'battle', x: 460, y: 218 },
      { type: 'fortress', x: 450, y: 228 }
    ],
    atmosphere: 'crisis'
  },

  // e3_6 康乾盛世
  'e3_6': {
    labels: [
      { text: '清', x: 340, y: 145, size: 'large', color: '#ffcc00', style: 'glowing' },
      { text: '北京', x: 380, y: 110, size: 'medium', color: '#ffcc00' },
      { text: '康熙', x: 360, y: 125, size: 'small', color: '#e8d599' },
      { text: '准噶尔(灭)', x: 130, y: 90, size: 'small', color: '#999', style: 'fading' },
      { text: '西藏(入版图)', x: 170, y: 290, size: 'small', color: '#e8d599' },
      { text: '台湾(收)', x: 470, y: 270, size: 'small', color: '#e8d599' },
      { text: '新疆', x: 110, y: 145, size: 'medium', color: '#e8d599', style: 'glowing' },
      { text: '四亿人口', x: 340, y: 175, size: 'small', color: '#cc8844' }
    ],
    arrows: [
      { from: [380, 115], to: [130, 95], type: 'military', label: '平准噶尔' },
      { from: [380, 115], to: [170, 295], type: 'expansion', label: '入藏' },
      { from: [380, 115], to: [470, 275], type: 'military', label: '收台湾' },
      { from: [380, 115], to: [110, 150], type: 'expansion', label: '经营新疆' }
    ],
    highlights: ['zhongyuan', 'xiyu', 'gaoyuan', 'caoyuan', 'haiyang'],
    icons: [
      { type: 'capital', x: 380, y: 108 },
      { type: 'battle', x: 130, y: 88 },
      { type: 'fortress', x: 110, y: 143 },
      { type: 'fleet', x: 470, y: 268 }
    ],
    atmosphere: 'peace'
  },

  // e3_7 人口爆炸与内卷
  'e3_7': {
    labels: [
      { text: '清', x: 340, y: 140, size: 'large', color: '#ffcc00' },
      { text: '四亿人口', x: 340, y: 155, size: 'medium', color: '#e85c5c' },
      { text: '玉米', x: 240, y: 350, size: 'small', color: '#a8e8a8', style: 'glowing' },
      { text: '红薯', x: 300, y: 240, size: 'small', color: '#e8c9a8', style: 'glowing' },
      { text: '内卷化', x: 350, y: 175, size: 'medium', color: '#cc4444' },
      { text: '人满之患', x: 330, y: 190, size: 'small', color: '#888' },
      { text: '手工业', x: 410, y: 220, size: 'small', color: '#dbb978' }
    ],
    arrows: [
      { from: [480, 280], to: [410, 225], type: 'trade', label: '新大陆作物传入' },
      { from: [340, 160], to: [240, 355], type: 'migration', label: '移民垦荒' },
      { from: [340, 160], to: [110, 155], type: 'migration', label: '走西口' }
    ],
    highlights: ['zhongyuan', 'xinan', 'guodu'],
    icons: [
      { type: 'market', x: 410, y: 218 },
      { type: 'rebellion', x: 350, y: 173 },
      { type: 'market', x: 340, y: 153 }
    ],
    atmosphere: 'crisis'
  },

  // e3_8 鸦片战争
  'e3_8': {
    labels: [
      { text: '清', x: 330, y: 145, size: 'large', color: '#ffcc00', style: 'fading' },
      { text: '英国', x: 510, y: 200, size: 'medium', color: '#3366cc', style: 'glowing' },
      { text: '虎门', x: 440, y: 265, size: 'medium', color: '#e85c5c' },
      { text: '广州', x: 420, y: 280, size: 'small', color: '#cc3333' },
      { text: '南京(条约)', x: 410, y: 205, size: 'small', color: '#999' },
      { text: '林则徐', x: 435, y: 275, size: 'small', color: '#5ca8e8' },
      { text: '鸦片', x: 480, y: 250, size: 'small', color: '#cc4444' },
      { text: '香港(割)', x: 460, y: 280, size: 'small', color: '#3366cc' }
    ],
    arrows: [
      { from: [510, 205], to: [440, 265], type: 'military', label: '船坚炮利' },
      { from: [480, 255], to: [440, 270], type: 'trade', label: '鸦片输入' },
      { from: [440, 270], to: [410, 210], type: 'military', label: '沿海北上' }
    ],
    highlights: ['haiyang', 'zhongyuan'],
    icons: [
      { type: 'fleet', x: 510, y: 198 },
      { type: 'battle', x: 440, y: 263 },
      { type: 'port', x: 460, y: 278 },
      { type: 'fortress', x: 435, y: 270 }
    ],
    atmosphere: 'crisis'
  },

  // e3_T 古今之变 (转型事件)
  'e3_T': {
    labels: [
      { text: '帝制(终)', x: 330, y: 140, size: 'large', color: '#ffcc00', style: 'fading' },
      { text: '民国', x: 340, y: 160, size: 'large', color: '#3366cc', style: 'glowing' },
      { text: '孙中山', x: 400, y: 205, size: 'medium', color: '#5ca8e8' },
      { text: '武昌', x: 370, y: 195, size: 'small', color: '#e85c5c' },
      { text: '北京(清帝退位)', x: 380, y: 110, size: 'small', color: '#999', style: 'fading' },
      { text: '科举(废)', x: 345, y: 175, size: 'small', color: '#888', style: 'fading' },
      { text: '新学堂', x: 400, y: 175, size: 'small', color: '#a8c9e8', style: 'glowing' },
      { text: '列强环伺', x: 490, y: 210, size: 'small', color: '#cc4444' }
    ],
    arrows: [
      { from: [370, 200], to: [400, 210], type: 'culture', label: '辛亥首义' },
      { from: [380, 115], to: [340, 165], type: 'culture', label: '清帝退位' },
      { from: [490, 215], to: [440, 240], type: 'military', label: '列强入侵' },
      { from: [340, 165], to: [230, 360], type: 'expansion', label: '革命浪潮' }
    ],
    highlights: ['zhongyuan', 'haiyang', 'guodu', 'caoyuan', 'gaoyuan'],
    icons: [
      { type: 'rebellion', x: 370, y: 193 },
      { type: 'capital', x: 380, y: 108 },
      { type: 'scholar', x: 400, y: 170 },
      { type: 'fleet', x: 490, y: 208 }
    ],
    atmosphere: 'transformation'
  },

  // ===========================================================================
  // ERA 4: 现代转型 (1840 - present)
  // ===========================================================================

  // e4_1 洋务运动
  'e4_1': {
    labels: [
      { text: '清(晚)', x: 330, y: 140, size: 'large', color: '#ffcc00', style: 'fading' },
      { text: '北京', x: 380, y: 110, size: 'small', color: '#ffcc00' },
      { text: '汉阳铁厂', x: 360, y: 190, size: 'medium', color: '#555', style: 'glowing' },
      { text: '北洋水师', x: 420, y: 130, size: 'medium', color: '#3366cc', style: 'glowing' },
      { text: '江南制造局', x: 420, y: 205, size: 'small', color: '#555' },
      { text: '张之洞', x: 350, y: 200, size: 'small', color: '#5ca8e8' },
      { text: '李鸿章', x: 400, y: 165, size: 'small', color: '#5ca8e8' },
      { text: '"中体西用"', x: 340, y: 170, size: 'small', color: '#dbb978' }
    ],
    arrows: [
      { from: [490, 240], to: [420, 210], type: 'trade', label: '引进西方技术' },
      { from: [380, 115], to: [420, 135], type: 'military', label: '建北洋水师' },
      { from: [380, 115], to: [360, 195], type: 'expansion', label: '兴办洋务' }
    ],
    highlights: ['zhongyuan', 'haiyang'],
    icons: [
      { type: 'fortress', x: 360, y: 188 },
      { type: 'fleet', x: 420, y: 128 },
      { type: 'market', x: 420, y: 203 },
      { type: 'capital', x: 380, y: 108 }
    ],
    atmosphere: 'transformation'
  },

  // e4_2 辛亥革命
  'e4_2': {
    labels: [
      { text: '中华民国', x: 340, y: 155, size: 'large', color: '#3366cc', style: 'glowing' },
      { text: '武昌', x: 370, y: 195, size: 'medium', color: '#e85c5c', style: 'glowing' },
      { text: '南京(临时政府)', x: 405, y: 195, size: 'small', color: '#3366cc' },
      { text: '北京(袁世凯)', x: 385, y: 110, size: 'small', color: '#cc8844' },
      { text: '孙中山', x: 420, y: 270, size: 'small', color: '#5ca8e8' },
      { text: '蒙古(独立)', x: 370, y: 45, size: 'small', color: '#999', style: 'fading' },
      { text: '西藏(动荡)', x: 170, y: 285, size: 'small', color: '#999', style: 'fading' }
    ],
    arrows: [
      { from: [370, 200], to: [405, 200], type: 'alliance', label: '首义成功' },
      { from: [405, 200], to: [385, 115], type: 'military', label: '南北谈判' },
      { from: [370, 50], to: [370, 70], type: 'expansion', label: '外蒙独立' }
    ],
    highlights: ['zhongyuan', 'haiyang', 'caoyuan', 'gaoyuan'],
    icons: [
      { type: 'rebellion', x: 370, y: 193 },
      { type: 'capital', x: 405, y: 193 },
      { type: 'capital', x: 385, y: 108 }
    ],
    atmosphere: 'transformation'
  },

  // e4_3 五四运动
  'e4_3': {
    labels: [
      { text: '北京', x: 380, y: 110, size: 'large', color: '#e85c5c', style: 'glowing' },
      { text: '天安门', x: 385, y: 120, size: 'small', color: '#e85c5c' },
      { text: '德先生', x: 350, y: 140, size: 'medium', color: '#5ca8e8', style: 'glowing' },
      { text: '赛先生', x: 370, y: 155, size: 'medium', color: '#a8e8a8', style: 'glowing' },
      { text: '陈独秀', x: 400, y: 145, size: 'small', color: '#c9a8e8' },
      { text: '巴黎和会(屈辱)', x: 490, y: 180, size: 'small', color: '#cc4444' },
      { text: '上海(工人罢工)', x: 430, y: 205, size: 'small', color: '#e8c9a8' }
    ],
    arrows: [
      { from: [490, 185], to: [385, 120], type: 'culture', label: '巴黎和约传来' },
      { from: [385, 125], to: [430, 210], type: 'culture', label: '抗议蔓延' },
      { from: [385, 125], to: [340, 165], type: 'culture', label: '新文化运动' }
    ],
    highlights: ['zhongyuan', 'haiyang'],
    icons: [
      { type: 'rebellion', x: 385, y: 118 },
      { type: 'scholar', x: 400, y: 143 },
      { type: 'rebellion', x: 430, y: 203 }
    ],
    atmosphere: 'culture'
  },

  // e4_4 抗日战争
  'e4_4': {
    labels: [
      { text: '中国', x: 320, y: 150, size: 'large', color: '#cc3333' },
      { text: '日本', x: 510, y: 160, size: 'large', color: '#e85050', style: 'glowing' },
      { text: '重庆(陪都)', x: 240, y: 260, size: 'medium', color: '#cc3333', style: 'glowing' },
      { text: '南京(陷)', x: 410, y: 200, size: 'small', color: '#999', style: 'fading' },
      { text: '卢沟桥', x: 380, y: 118, size: 'small', color: '#e85c5c' },
      { text: '西南联大', x: 220, y: 370, size: 'small', color: '#5ca8e8' },
      { text: '敌后根据地', x: 330, y: 130, size: 'small', color: '#a8e8a8' },
      { text: '沦陷区', x: 400, y: 170, size: 'small', color: '#888', style: 'fading' }
    ],
    arrows: [
      { from: [510, 165], to: [380, 120], type: 'military', label: '全面侵华' },
      { from: [380, 120], to: [410, 200], type: 'military', label: '南京沦陷' },
      { from: [410, 205], to: [240, 265], type: 'migration', label: '战略转移' },
      { from: [330, 135], to: [400, 175], type: 'military', label: '敌后抗战' }
    ],
    highlights: ['zhongyuan', 'xinan', 'haiyang', 'guodu'],
    icons: [
      { type: 'battle', x: 380, y: 116 },
      { type: 'battle', x: 410, y: 198 },
      { type: 'capital', x: 240, y: 258 },
      { type: 'scholar', x: 220, y: 368 }
    ],
    atmosphere: 'war'
  },

  // e4_5 新中国成立
  'e4_5': {
    labels: [
      { text: '中华人民共和国', x: 340, y: 145, size: 'large', color: '#cc3333', style: 'glowing' },
      { text: '北京', x: 380, y: 110, size: 'medium', color: '#cc3333' },
      { text: '天安门', x: 385, y: 120, size: 'small', color: '#e85c5c' },
      { text: '鞍山钢铁', x: 410, y: 90, size: 'small', color: '#555' },
      { text: '一五计划', x: 340, y: 165, size: 'small', color: '#dbb978', style: 'glowing' },
      { text: '百废待兴', x: 330, y: 180, size: 'small', color: '#888' },
      { text: '新疆(解放)', x: 110, y: 150, size: 'small', color: '#cc3333' },
      { text: '西藏(和平解放)', x: 170, y: 290, size: 'small', color: '#cc3333' }
    ],
    arrows: [
      { from: [380, 115], to: [410, 95], type: 'expansion', label: '重工业建设' },
      { from: [380, 115], to: [110, 155], type: 'expansion', label: '解放新疆' },
      { from: [380, 115], to: [170, 295], type: 'expansion', label: '和平解放西藏' },
      { from: [340, 170], to: [330, 185], type: 'culture', label: '社会改造' }
    ],
    highlights: ['zhongyuan', 'xiyu', 'gaoyuan', 'caoyuan'],
    icons: [
      { type: 'capital', x: 380, y: 108 },
      { type: 'fortress', x: 410, y: 88 },
      { type: 'rebellion', x: 385, y: 118 },
      { type: 'alliance', x: 110, y: 148 }
    ],
    atmosphere: 'transformation'
  },

  // e4_6 改革开放
  'e4_6': {
    labels: [
      { text: '中国', x: 340, y: 150, size: 'large', color: '#cc3333' },
      { text: '深圳特区', x: 440, y: 275, size: 'medium', color: '#e8d599', style: 'glowing' },
      { text: '小岗村', x: 390, y: 190, size: 'small', color: '#a8e8a8', style: 'glowing' },
      { text: '上海', x: 440, y: 205, size: 'medium', color: '#5ca8e8', style: 'glowing' },
      { text: '珠海', x: 430, y: 285, size: 'small', color: '#e8c9a8' },
      { text: '厦门', x: 450, y: 255, size: 'small', color: '#c9a8e8' },
      { text: '邓小平', x: 350, y: 165, size: 'small', color: '#cc3333' },
      { text: '世界市场', x: 500, y: 230, size: 'small', color: '#3366cc' }
    ],
    arrows: [
      { from: [350, 170], to: [440, 280], type: 'expansion', label: '设经济特区' },
      { from: [440, 280], to: [500, 235], type: 'trade', label: '对外开放' },
      { from: [500, 235], to: [440, 210], type: 'trade', label: '外资涌入' },
      { from: [390, 195], to: [350, 170], type: 'culture', label: '包产到户' }
    ],
    highlights: ['haiyang', 'zhongyuan'],
    icons: [
      { type: 'market', x: 440, y: 273 },
      { type: 'market', x: 440, y: 203 },
      { type: 'port', x: 450, y: 253 },
      { type: 'capital', x: 380, y: 108 }
    ],
    atmosphere: 'trade'
  },

  // e4_7 加入WTO
  'e4_7': {
    labels: [
      { text: '中国', x: 340, y: 150, size: 'large', color: '#cc3333' },
      { text: 'WTO', x: 490, y: 210, size: 'large', color: '#3366cc', style: 'glowing' },
      { text: '世界工厂', x: 420, y: 230, size: 'medium', color: '#e8d599', style: 'glowing' },
      { text: '珠三角', x: 435, y: 275, size: 'small', color: '#a8e8a8' },
      { text: '长三角', x: 440, y: 205, size: 'small', color: '#5ca8e8' },
      { text: 'GDP飞升', x: 360, y: 170, size: 'small', color: '#e85c5c', style: 'glowing' },
      { text: '西部(落后)', x: 200, y: 200, size: 'small', color: '#888', style: 'fading' }
    ],
    arrows: [
      { from: [340, 155], to: [490, 215], type: 'trade', label: '入世' },
      { from: [435, 280], to: [500, 250], type: 'trade', label: '出口全球' },
      { from: [440, 210], to: [500, 200], type: 'trade', label: '制造业出口' },
      { from: [500, 250], to: [435, 280], type: 'trade', label: '全球订单' }
    ],
    highlights: ['haiyang', 'zhongyuan', 'xiyu'],
    icons: [
      { type: 'market', x: 435, y: 273 },
      { type: 'market', x: 440, y: 203 },
      { type: 'port', x: 490, y: 208 },
      { type: 'alliance', x: 490, y: 215 }
    ],
    atmosphere: 'trade'
  },

  // e4_8 一带一路
  'e4_8': {
    labels: [
      { text: '中国', x: 340, y: 150, size: 'large', color: '#cc3333' },
      { text: '丝绸之路经济带', x: 170, y: 110, size: 'medium', color: '#e8d599', style: 'glowing' },
      { text: '21世纪海上丝路', x: 430, y: 310, size: 'medium', color: '#5ca8e8', style: 'glowing' },
      { text: '中亚', x: 100, y: 130, size: 'small', color: '#a8e8a8' },
      { text: '欧洲', x: 50, y: 100, size: 'small', color: '#c9a8e8' },
      { text: '东南亚', x: 400, y: 340, size: 'small', color: '#e8c9a8' },
      { text: '非洲', x: 200, y: 380, size: 'small', color: '#888' },
      { text: '中欧班列', x: 200, y: 130, size: 'small', color: '#dbb978' }
    ],
    arrows: [
      { from: [340, 155], to: [100, 135], type: 'trade', label: '陆上丝路' },
      { from: [100, 135], to: [50, 105], type: 'trade', label: '通欧洲' },
      { from: [340, 155], to: [430, 315], type: 'trade', label: '海上丝路' },
      { from: [430, 315], to: [200, 385], type: 'trade', label: '远达非洲' }
    ],
    highlights: ['xiyu', 'haiyang', 'gaoyuan', 'zhongyuan'],
    icons: [
      { type: 'market', x: 100, y: 128 },
      { type: 'port', x: 430, y: 308 },
      { type: 'market', x: 400, y: 338 },
      { type: 'capital', x: 380, y: 108 }
    ],
    atmosphere: 'trade'
  },

  // e4_T 终局：何谓中国？
  'e4_T': {
    labels: [
      { text: '中原', x: 330, y: 150, size: 'large', color: '#e8d599', style: 'glowing' },
      { text: '草原', x: 370, y: 55, size: 'medium', color: '#a8e8a8', style: 'glowing' },
      { text: '西域', x: 110, y: 150, size: 'medium', color: '#c9a8e8', style: 'glowing' },
      { text: '高原', x: 170, y: 280, size: 'medium', color: '#e8c9a8', style: 'glowing' },
      { text: '西南', x: 230, y: 360, size: 'medium', color: '#a8c9e8', style: 'glowing' },
      { text: '海洋', x: 480, y: 240, size: 'medium', color: '#5ca8e8', style: 'glowing' },
      { text: '过渡地带', x: 280, y: 240, size: 'medium', color: '#dbb978', style: 'glowing' },
      { text: '三千年', x: 330, y: 130, size: 'small', color: '#fff', style: 'ancient' }
    ],
    arrows: [
      { from: [330, 155], to: [370, 60], type: 'alliance', label: '草原-中原' },
      { from: [330, 155], to: [110, 155], type: 'trade', label: '丝路再通' },
      { from: [330, 155], to: [480, 245], type: 'trade', label: '面向海洋' },
      { from: [330, 155], to: [170, 285], type: 'culture', label: '文化纽带' },
      { from: [330, 155], to: [230, 365], type: 'expansion', label: '西南开发' },
      { from: [280, 245], to: [330, 155], type: 'alliance', label: '枢纽连接' }
    ],
    highlights: ['zhongyuan', 'caoyuan', 'xiyu', 'gaoyuan', 'xinan', 'haiyang', 'guodu'],
    icons: [
      { type: 'capital', x: 330, y: 148 },
      { type: 'nomad', x: 370, y: 53 },
      { type: 'market', x: 110, y: 148 },
      { type: 'temple', x: 170, y: 278 },
      { type: 'market', x: 230, y: 358 },
      { type: 'port', x: 480, y: 238 },
      { type: 'alliance', x: 280, y: 238 }
    ],
    atmosphere: 'transformation'
  }
};

// =============================================================================
// Exports
// =============================================================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MAP_SCENES };
}
