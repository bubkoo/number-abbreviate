import { expect } from 'chai'
import numabbr, { NumberAbbreviate } from '../../src/index'

describe('Simple/shorthand mode: with default units', () => {
  it('Should format number', () => {
    expect(numabbr(100)).to.be.equal('100')
    expect(numabbr(10000)).to.be.equal('10K')
    expect(numabbr(1000000)).to.be.equal('1M')
    expect(numabbr(1000000000)).to.be.equal('1B')
    expect(numabbr(1000000000000)).to.be.equal('1T')
    expect(numabbr(10000000000000)).to.be.equal('10T')
    expect(numabbr(1020000)).to.be.equal('1.02M')
  })

  it('Should format negative number', () => {
    expect(numabbr(-100)).to.be.equal('-100')
    expect(numabbr(-10000)).to.be.equal('-10K')
    expect(numabbr(-1000000)).to.be.equal('-1M')
    expect(numabbr(-1000000000)).to.be.equal('-1B')
    expect(numabbr(-1000000000000)).to.be.equal('-1T')
    expect(numabbr(-10000000000000)).to.be.equal('-10T')
    expect(numabbr(-1020000)).to.be.equal('-1.02M')
  })

  it('Should format number with specifed precision', () => {
    expect(numabbr(123456, { precision: 1 })).to.be.equal('123.5K')
    expect(numabbr(123432, { precision: 1 })).to.be.equal('123.4K')
  })

  it('Should format number with commatize options', () => {
    expect(numabbr(123456, {
      precision: 1,
      commatize: { division: 2 },
    })).to.be.equal('1,23.5K')
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

    expect(abbr.abbreviate(123)).to.be.equal('123')
    expect(abbr.abbreviate(1000)).to.be.equal('1千')
    expect(abbr.abbreviate(1234)).to.be.equal('1.23千')
    expect(abbr.abbreviate(10000)).to.be.equal('1万')
    expect(abbr.abbreviate(12345)).to.be.equal('1.23万')
    expect(abbr.abbreviate(123456)).to.be.equal('1.23十万')
  })

  it('Should not format number when no units specified', () => {
    const abbr = new NumberAbbreviate()
    expect(abbr.abbreviate(123)).to.be.equal('123')
    expect(abbr.abbreviate(1000)).to.be.equal('1000')
    expect(abbr.abbreviate(1234)).to.be.equal('1234')
    expect(abbr.abbreviate(12345)).to.be.equal('12345')
    expect(abbr.abbreviate(123456)).to.be.equal('123456')
  })
})
