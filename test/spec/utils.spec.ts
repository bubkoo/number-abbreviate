import { round, commatize } from '../../src/utils'

describe('utils', () => {
  describe('#round()', () => {
    it('should round number with given precision', () => {
      expect(round(123.456, 2)).toBe(123.46)
      expect(round(123.454, 2)).toBe(123.45)
    })

    it('should round negative number with given precision', () => {
      expect(round(-123.456, 2)).toBe(-123.46)
      expect(round(-123.454, 2)).toBe(-123.45)
    })

    it('should round number with default precision `0`', () => {
      expect(round(123.456)).toBe(123)
      expect(round(123.454)).toBe(123)
    })

    it('should round number with fixed negative precision', () => {
      expect(round(123.456, -2)).toBe(123)
      expect(round(123.454, -2)).toBe(123)
    })
  })

  describe('#commatize()', () => {
    it('should commatize positive number', () => {
      expect(commatize(12345678)).toBe('12,345,678')
    })

    it('should not commatize bad number', () => {
      expect(commatize('12345.67.8')).toBe('12345.67.8')
      expect(commatize('a12345.678')).toBe('a12345.678')
      expect(commatize('012345.678')).toBe('012345.678')
    })

    it('should commatize negative number', () => {
      expect(commatize(-12345678)).toBe('-12,345,678')
    })

    it('should commatize decimals', () => {
      expect(commatize(1234567.890)).toBe('1,234,567.89')
    })

    it('should commatize number with specified division', () => {
      expect(commatize(12345678, { division: 4 })).toBe('1234,5678')
    })

    it('should commatize number with specified separator', () => {
      expect(commatize(12345678, { separator: '`' })).toBe('12`345`678')
    })

    it('should commatize number with specified division and separator', () => {
      expect(commatize(12345678, { division: 2, separator: '`' })).toBe('12`34`56`78')
    })
  })
})
