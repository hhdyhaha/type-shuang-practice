import { pinyin } from 'pinyin-pro'
import { currentScheme } from './config'

// 声母列表
const initials = ['b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j', 'q', 'x', 'zh', 'ch', 'sh', 'r', 'z', 'c', 's', 'y', 'w']

// 获取一个汉字的拼音
export function getCharacterPinyin(char: string): string {
  return pinyin(char, { pattern: 'pinyin', toneType: 'none' })
}

// 将拼音拆分为声母和韵母
export function splitPinyin(pinyinStr: string): { initial: string; final: string } {
  for (const initial of initials) {
    if (pinyinStr.startsWith(initial)) {
      return {
        initial,
        final: pinyinStr.slice(initial.length)
      }
    }
  }
  return {
    initial: '',
    final: pinyinStr
  }
}

// 将拼音转换为双拼
export function pinyinToShuangpin(pinyinStr: string): {
  shuangpin: string;
  initialPart: string;
  finalPart: string;
  initialKey: string;
  finalKey: string;
} {
  // 处理零声母情况
  if (currentScheme.zero[pinyinStr]) {
    const code = currentScheme.zero[pinyinStr]
    return {
      shuangpin: code,
      initialPart: '',
      finalPart: pinyinStr,
      initialKey: code[0],
      finalKey: code[1]
    }
  }

  // 拆分声母韵母
  const { initial, final } = splitPinyin(pinyinStr)
  const initialCode = currentScheme.initial[initial] || ''
  const finalCode = currentScheme.final[final] || final

  return {
    shuangpin: initialCode + finalCode,
    initialPart: initial,
    finalPart: final,
    initialKey: initialCode,
    finalKey: finalCode
  }
}

// 获取一个汉字的双拼码和拼音信息
export function getCharacterShuangpin(char: string): {
  pinyin: string;
  shuangpin: string;
  initialPart: string;
  finalPart: string;
  initialKey: string;
  finalKey: string;
} {
  const pinyinStr = getCharacterPinyin(char)
  const detail = pinyinToShuangpin(pinyinStr)
  return {
    pinyin: pinyinStr,
    ...detail
  }
}

// 判断输入的双拼是否正确
export function isShuangpinCorrect(char: string, input: string): boolean {
  const { shuangpin } = getCharacterShuangpin(char)
  return input.toLowerCase() === shuangpin.toLowerCase()
}

// 获取当前字符的提示信息
export function getShuangpinHint(char: string) {
  return getCharacterShuangpin(char)
}