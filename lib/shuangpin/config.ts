export interface ShuangpinScheme {
  name: string
  description: string
  author: string
  // 声母映射
  initial: Record<string, string>
  // 韵母映射
  final: Record<string, string>
  // 零声母映射
  zero: Record<string, string>
}

// 小鹤双拼方案
export const xiaoheConfig: ShuangpinScheme = {
  name: '小鹤双拼',
  description: '小鹤双拼是优秀的双拼方案之一，由张码完成设计。全拼"双拼"二字用小鹤双拼打出来就是 ul ss。',
  author: '张码',
  initial: {
    'b': 'b', 'c': 'c', 'd': 'd', 'f': 'f', 'g': 'g', 'h': 'h',
    'j': 'j', 'k': 'k', 'l': 'l', 'm': 'm', 'n': 'n', 'p': 'p',
    'q': 'q', 'r': 'r', 's': 's', 't': 't', 'w': 'w', 'x': 'x',
    'y': 'y', 'z': 'z', 'ch': 'i', 'sh': 'u', 'zh': 'v'
  },
  final: {
    'a': 'a', 'ai': 'd', 'an': 'j', 'ang': 'h',
    'ao': 'c', 'e': 'e', 'ei': 'w', 'en': 'f',
    'eng': 'g', 'i': 'i', 'ia': 'x', 'ian': 'm',
    'iang': 'l', 'iao': 'n', 'ie': 'p', 'in': 'b',
    'ing': 'k', 'iong': 's', 'iu': 'q', 'o': 'o',
    'ong': 's', 'ou': 'z', 'u': 'u', 'ua': 'x',
    'uai': 'k', 'uan': 'r', 'uang': 'l', 'ue': 't',
    'ui': 'v', 'un': 'y', 'uo': 'o', 'v': 'v',
    've': 't'
  },
  zero: {
    'a': 'aa', 'ai': 'ai', 'an': 'an', 'ang': 'ah',
    'ao': 'ao', 'e': 'ee', 'ei': 'ei', 'en': 'en',
    'eng': 'eg', 'er': 'er', 'o': 'oo', 'ou': 'ou'
  }
}

// 微软双拼方案
export const msConfig: ShuangpinScheme = {
  name: '微软双拼',
  description: '微软双拼是由微软公司设计的双拼方案，特点是规则简明。',
  author: '微软',
  initial: {
    'b': 'b', 'c': 'c', 'd': 'd', 'f': 'f', 'g': 'g', 'h': 'h',
    'j': 'j', 'k': 'k', 'l': 'l', 'm': 'm', 'n': 'n', 'p': 'p',
    'q': 'q', 'r': 'r', 's': 's', 't': 't', 'w': 'w', 'x': 'x',
    'y': 'y', 'z': 'z', 'ch': 'i', 'sh': 'u', 'zh': 'v'
  },
  final: {
    'a': 'a', 'ai': 'l', 'an': 'j', 'ang': 'h',
    'ao': 'k', 'e': 'e', 'ei': 'z', 'en': 'f',
    'eng': 'g', 'i': 'i', 'ia': 'w', 'ian': 'm',
    'iang': 'd', 'iao': 'c', 'ie': 'x', 'in': 'n',
    'ing': 'y', 'iong': 's', 'iu': 'q', 'o': 'o',
    'ong': 's', 'ou': 'b', 'u': 'u', 'ua': 'w',
    'uai': 'y', 'uan': 'r', 'uang': 'd', 'ue': 't',
    'ui': 'v', 'un': 'p', 'uo': 'o', 'v': 'v',
    've': 't'
  },
  zero: {
    'a': 'oa', 'ai': 'ol', 'an': 'oj', 'ang': 'oh',
    'ao': 'ok', 'e': 'oe', 'ei': 'oz', 'en': 'of',
    'eng': 'og', 'er': 'or', 'o': 'oo', 'ou': 'ob'
  }
}

// 自然码双拼方案
export const ziranjmaConfig: ShuangpinScheme = {
  name: '自然码',
  description: '自然码是一种常用的双拼方案，由王永民设计。特点是编码规则自然、容易记忆。',
  author: '王永民',
  initial: {
    'b': 'b', 'c': 'c', 'd': 'd', 'f': 'f', 'g': 'g', 'h': 'h',
    'j': 'j', 'k': 'k', 'l': 'l', 'm': 'm', 'n': 'n', 'p': 'p',
    'q': 'q', 'r': 'r', 's': 's', 't': 't', 'w': 'w', 'x': 'x',
    'y': 'y', 'z': 'z', 'ch': 'i', 'sh': 'u', 'zh': 'v'
  },
  final: {
    'a': 'a', 'ai': 's', 'an': 'f', 'ang': 'g',
    'ao': 'd', 'e': 'e', 'ei': 'w', 'en': 'r',
    'eng': 't', 'i': 'i', 'ia': 'x', 'ian': 'm',
    'iang': 'l', 'iao': 'n', 'ie': 'p', 'in': 'b',
    'ing': 'k', 'iong': 's', 'iu': 'q', 'o': 'o',
    'ong': 's', 'ou': 'z', 'u': 'u', 'ua': 'x',
    'uai': 'k', 'uan': 'r', 'uang': 'l', 'ue': 'v',
    'ui': 'v', 'un': 'y', 'uo': 'o', 'v': 'y',
    've': 'v'
  },
  zero: {
    'a': 'aa', 'ai': 'as', 'an': 'af', 'ang': 'ag',
    'ao': 'ad', 'e': 'ee', 'ei': 'ew', 'en': 'er',
    'eng': 'et', 'er': 'eq', 'o': 'oo', 'ou': 'oz'
  }
}

// 智能ABC双拼方案
export const zhineabcConfig: ShuangpinScheme = {
  name: '智能ABC',
  description: '智能ABC双拼是一种经典的双拼方案，由郑易里开发。',
  author: '郑易里',
  initial: {
    'b': 'b', 'c': 'c', 'd': 'd', 'f': 'f', 'g': 'g', 'h': 'h',
    'j': 'j', 'k': 'k', 'l': 'l', 'm': 'm', 'n': 'n', 'p': 'p',
    'q': 'q', 'r': 'r', 's': 's', 't': 't', 'w': 'w', 'x': 'x',
    'y': 'y', 'z': 'z', 'ch': 'e', 'sh': 'v', 'zh': 'a'
  },
  final: {
    'a': 'a', 'ai': 'l', 'an': 'j', 'ang': 'h',
    'ao': 'k', 'e': 'e', 'ei': 'q', 'en': 'f',
    'eng': 'g', 'i': 'i', 'ia': 'd', 'ian': 'w',
    'iang': 't', 'iao': 'z', 'ie': 'x', 'in': 'c',
    'ing': 'y', 'iong': 's', 'iu': 'r', 'o': 'o',
    'ong': 's', 'ou': 'b', 'u': 'u', 'ua': 'd',
    'uai': 'y', 'uan': 'p', 'uang': 't', 'ue': 'm',
    'ui': 'n', 'un': 'n', 'uo': 'o', 'v': 'v',
    've': 'm'
  },
  zero: {
    'a': 'oa', 'ai': 'ol', 'an': 'oj', 'ang': 'oh',
    'ao': 'ok', 'e': 'oe', 'ei': 'oq', 'en': 'of',
    'eng': 'og', 'er': 'or', 'o': 'oo', 'ou': 'ob'
  }
}

// 紫光双拼方案
export const ziguangConfig: ShuangpinScheme = {
  name: '紫光双拼',
  description: '紫光双拼是由紫光公司开发的输入方案，在早期的紫光拼音输入法中使用。',
  author: '紫光公司',
  initial: {
    'b': 'b', 'c': 'c', 'd': 'd', 'f': 'f', 'g': 'g', 'h': 'h',
    'j': 'j', 'k': 'k', 'l': 'l', 'm': 'm', 'n': 'n', 'p': 'p',
    'q': 'q', 'r': 'r', 's': 's', 't': 't', 'w': 'w', 'x': 'x',
    'y': 'y', 'z': 'z', 'ch': 'u', 'sh': 'i', 'zh': 'v'
  },
  final: {
    'a': 'a', 'ai': 'p', 'an': 'r', 'ang': 's',
    'ao': 'q', 'e': 'e', 'ei': 'k', 'en': 'w',
    'eng': 't', 'i': 'i', 'ia': 'b', 'ian': 'f',
    'iang': 'g', 'iao': 'k', 'ie': 'm', 'in': 'l',
    'ing': 'h', 'iong': 'y', 'iu': 'n', 'o': 'o',
    'ong': 'y', 'ou': 'c', 'u': 'u', 'ua': 'b',
    'uai': 'h', 'uan': 'd', 'uang': 'g', 'ue': 'x',
    'ui': 'j', 'un': 'z', 'uo': 'o', 'v': 'v',
    've': 'x'
  },
  zero: {
    'a': 'aa', 'ai': 'ap', 'an': 'ar', 'ang': 'as',
    'ao': 'aq', 'e': 'ee', 'ei': 'ek', 'en': 'ew',
    'eng': 'et', 'er': 'er', 'o': 'oo', 'ou': 'oc'
  }
}

// 所有可用的方案
export const schemes = {
  xiaohe: xiaoheConfig,
  ms: msConfig,
  ziranma: ziranjmaConfig,
  zhinengabc: zhineabcConfig,
  ziguang: ziguangConfig
} as const

// 默认方案
export let currentScheme = xiaoheConfig

// 更新当前方案
export function updateCurrentScheme(schemeName: keyof typeof schemes) {
  currentScheme = schemes[schemeName]
}