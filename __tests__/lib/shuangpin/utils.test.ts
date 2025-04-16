import { describe, it, expect } from 'vitest'
import { getCharacterShuangpin, isShuangpinCorrect, pinyinToShuangpin, getShuangpinHint } from '@/lib/shuangpin/utils'
import { ShuangpinSchemes } from '@/lib/shuangpin/config'

describe('双拼工具函数', () => {
  describe('getCharacterShuangpin', () => {
    it('应该正确获取汉字的双拼组合', () => {
      const result = getCharacterShuangpin('测', ShuangpinSchemes.MS)
      expect(result).toEqual({
        initial: 'c',
        final: 'e',
        tone: 4,
        pinyin: 'ce'
      })
    })

    it('应该正确处理零声母的情况', () => {
      const result = getCharacterShuangpin('爱', ShuangpinSchemes.MS)
      expect(result.initial).toBe('')
      expect(result.final).toBeTruthy()
    })

    it('对于非汉字应该返回null', () => {
      const result = getCharacterShuangpin('A', ShuangpinSchemes.MS)
      expect(result).toBeNull()
    })
  })

  describe('isShuangpinCorrect', () => {
    it('应该正确验证双拼输入', () => {
      // 测试"测"字的双拼输入，在微软双拼下是ce
      const char = '测'
      const input = 'ce'
      const result = isShuangpinCorrect(char, input, ShuangpinSchemes.MS)
      expect(result).toBe(true)
    })

    it('应该正确验证错误的双拼输入', () => {
      const char = '测'
      const input = 'wrong'
      const result = isShuangpinCorrect(char, input, ShuangpinSchemes.MS)
      expect(result).toBe(false)
    })

    it('应该正确处理部分输入的情况', () => {
      const char = '测'
      const input = 'c' // 只输入声母
      const result = isShuangpinCorrect(char, input, ShuangpinSchemes.MS)
      expect(result).toBe(false)
    })

    it('应该支持不同的双拼方案', () => {
      const char = '双'
      
      // 测试微软双拼
      expect(isShuangpinCorrect(char, 'ul', ShuangpinSchemes.MS)).toBe(true)
      
      // 测试小鹤双拼
      expect(isShuangpinCorrect(char, 'ul', ShuangpinSchemes.XIAOHE)).toBe(true)
    })
  })

  describe('pinyinToShuangpin', () => {
    it('应该正确转换普通拼音', () => {
      const result = pinyinToShuangpin('zhong')
      expect(result).toEqual({
        shuangpin: 'vt',
        initialPart: 'zh',
        finalPart: 'ong',
        initialKey: 'v',
        finalKey: 't'
      })
    })

    it('应该正确处理零声母', () => {
      const result = pinyinToShuangpin('ai')
      expect(result.shuangpin).toBe('ai')
      expect(result.initialPart).toBe('')
      expect(result.finalPart).toBe('ai')
    })
  })

  describe('getShuangpinHint', () => {
    it('应该返回正确的双拼提示信息', () => {
      const hint = getShuangpinHint('中')
      expect(hint).toEqual({
        pinyin: 'zhong',
        shuangpin: 'vt',
        initialPart: 'zh',
        finalPart: 'ong',
        initialKey: 'v',
        finalKey: 't'
      })
    })
  })
})