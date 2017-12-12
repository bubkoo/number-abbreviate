import { round, commatize } from './utils'

export default class NumberAbbreviate {
  constructor(units = {}) {
    this.units = Object.keys(units)
      .map(unit => ({ unit, value: units[unit] }))
      .sort((a, b) => a.value - b.value)
  }

  abbreviate(num, options = {}) {
    const {
      precision = 2,
      commatize: comma,
    } = options

    const negative = num < 0
    const raw = Math.abs(num)

    for (let i = this.units.length - 1; i >= 0; i -= 1) {
      const unit = this.units[i].unit
      const size = this.units[i].value
      if (raw >= size) {
        const result = round(raw / size, precision)
        return (negative ? '-' : '')
          + (comma ? commatize(result, comma) : result)
          + unit
      }
    }

    return `${num}`
  }
}
