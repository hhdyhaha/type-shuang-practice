import { describe, expect, it, vi, beforeAll } from 'vitest'
import * as utils from '@/lib/shuangpin/utils'
import { currentScheme, updateCurrentScheme } from '@/lib/shuangpin/config'

// 模拟pinyin-pro库
vi.mock('pinyin-pro', () => ({
  pinyin: vi.fn((char, options) => {
    if (char === '中') return 'zhong'
    if (char === '文') return 'wen'
    if (char === '你') return 'ni'
    if (char === '好') return 'hao'
    if (char === '爱') return 'ai'
    return ''
  })
}))

describe('shuangpin utils', () => {
  // 在测试前确保使用小鹤双拼方案
  beforeAll(() => {
    updateCurrentScheme('xiaohe')
  })

  describe('getCharacterPinyin', () => {
    it('应该返回正确的拼音', () => {
      expect(utils.getCharacterPinyin('中')).toBe('zhong')
      expect(utils.getCharacterPinyin('文')).toBe('wen')
      expect(utils.getCharacterPinyin('你')).toBe('ni')
    })
  })

  describe('splitPinyin', () => {
    it('应该正确拆分声母和韵母', () => {
      // 有声母的情况
      expect(utils.splitPinyin('zhong')).toEqual({
        initial: 'zh',
        final: 'ong'
      })
      
      expect(utils.splitPinyin('wen')).toEqual({
        initial: 'w',
        final: 'en'
      })
      
      // 零声母的情况
      expect(utils.splitPinyin('ai')).toEqual({
        initial: '',
        final: 'ai'
      })
    })
  })

  describe('pinyinToShuangpin', () => {
    it('应该正确将拼音转换为双拼', () => {
      // 测试zhong -> vh (小鹤双拼)
      const result1 = utils.pinyinToShuangpin('zhong')
      expect(result1.shuangpin).toBe('vs')
      expect(result1.initialKey).toBe('v')
      expect(result1.finalKey).toBe('s')
      
      // 测试wen -> wf (小鹤双拼)
      const result2 = utils.pinyinToShuangpin('wen')
      expect(result2.shuangpin).toBe('wf')
      expect(result2.initialKey).toBe('w')
      expect(result2.finalKey).toBe('f')
      
      // 测试零声母情况
      const result3 = utils.pinyinToShuangpin('ai')
      expect(result3.shuangpin).toBe('ai')
      expect(result3.initialKey).toBe('a')
      expect(result3.finalKey).toBe('i')
    })
  })

  describe('getCharacterShuangpin', () => {
    it('应该返回字符的拼音和双拼信息', () => {
      const result = utils.getCharacterShuangpin('中')
      expect(result.pinyin).toBe('zhong')
      expect(result.shuangpin).toBe('vs')
      expect(result.initialPart).toBe('zh')
      expect(result.finalPart).toBe('ong')
      expect(result.initialKey).toBe('v')
      expect(result.finalKey).toBe('s')
    })
  })

  describe('isShuangpinCorrect', () => {
    it('应该正确判断输入的双拼是否正确', () => {
      // 正确的情况
      expect(utils.isShuangpinCorrect('中', 'vs')).toBe(true)
      expect(utils.isShuangpinCorrect('好', 'hc')).toBe(true)
      
      // 错误的情况
      expect(utils.isShuangpinCorrect('中', 'vh')).toBe(false)
      expect(utils.isShuangpinCorrect('好', 'hl')).toBe(false)
    })
    
    it('应该忽略大小写', () => {
      expect(utils.isShuangpinCorrect('中', 'VS')).toBe(true)
      expect(utils.isShuangpinCorrect('好', 'Hc')).toBe(true)
    })
  })

  describe('getShuangpinHint', () => {
    it('应该返回字符的双拼提示信息', () => {
      const hint = utils.getShuangpinHint('中')
      expect(hint.pinyin).toBe('zhong')
      expect(hint.shuangpin).toBe('vs')
    })
  })
}) 