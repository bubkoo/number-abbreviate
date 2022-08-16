import numabbr, { NumberAbbreviate } from '../../src/index'

describe('Simple/shorthand mode: with default units', () => {
  it('Should format number', () => {
    expect(numabbr(100)).toBe('100')
    expect(numabbr(10000)).toBe('10K')
    expect(numabbr(1000000)).toBe('1M')
    expect(numabbr(1000000000)).toBe('1B')
    expect(numabbr(1000000000000)).toBe('1T')
    expect(numabbr(10000000000000)).toBe('10T')
    expect(numabbr(1020000)).toBe('1.02M')
  })

  it('Should format negative number', () => {
    expect(numabbr(-100)).toBe('-100')
    expect(numabbr(-10000)).toBe('-10K')
    expect(numabbr(-1000000)).toBe('-1M')
    expect(numabbr(-1000000000)).toBe('-1B')
    expect(numabbr(-1000000000000)).toBe('-1T')
    expect(numabbr(-10000000000000)).toBe('-10T')
    expect(numabbr(-1020000)).toBe('-1.02M')
  })

  it('Should format number with specifed precision', () => {
    expect(numabbr(123456, { precision: 1 })).toBe('123.5K')
    expect(numabbr(123432, { precision: 1 })).toBe('123.4K')
  })

  it('Should format number with commatize options', () => {
    expect(
      numabbr(123456, {
        precision: 1,
        commatize: { division: 2 },
      }),
    ).toBe('1,23.5K')
  })
})

describe('Class/constructor mode: with custom units', () => {
  it('Should format number', () => {
    const abbr = new NumberAbbreviate({
      千: 1000,
      万: 10000,
      十万: 100000,
      百万: 1000000,
      千万: 10000000,
      亿: 100000000,
    })

    expect(abbr.abbreviate(123)).toBe('123')
    expect(abbr.abbreviate(1000)).toBe('1千')
    expect(abbr.abbreviate(1234)).toBe('1.23千')
    expect(abbr.abbreviate(10000)).toBe('1万')
    expect(abbr.abbreviate(12345)).toBe('1.23万')
    expect(abbr.abbreviate(123456)).toBe('1.23十万')
  })

  it('Should not format number when no units specified', () => {
    const abbr = new NumberAbbreviate()
    expect(abbr.abbreviate(123)).toBe('123')
    expect(abbr.abbreviate(1000)).toBe('1000')
    expect(abbr.abbreviate(1234)).toBe('1234')
    expect(abbr.abbreviate(12345)).toBe('12345')
    expect(abbr.abbreviate(123456)).toBe('123456')
  })
})
