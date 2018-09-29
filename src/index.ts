import { round, commatize } from './utils'

export type UnitsType = { [key: string]: number }

export type UnitItem = { unit: string, value: number }

export type CommatizeOptions = {
  /**
   * Length of each divided parts. Default `3`.
  */
  division?: number,
  /**
   * Separator of each divided parts. Default `,`.
  */
  separator?: string,
}

export type AbbreviateOptions = {
  /**
   * Specify the precision of decimal part.
  */
  precision?: number,
  /**
   * Specify how to commatize the result.
  */
  commatize?: boolean | CommatizeOptions,
}

export class NumberAbbreviate {
  units: UnitItem[]

  constructor(units: UnitsType = {}) {
    this.units = Object.keys(units)
      .map(unit => ({ unit, value: units[unit] }))
      .sort((a, b) => a.value - b.value)
  }

  abbreviate(num: number, options: AbbreviateOptions = {}) {
    const {
      precision = 2,
      commatize: commaOptions,
    } = options

    const negative = num < 0
    const raw = Math.abs(num)

    for (let i = this.units.length - 1; i >= 0; i -= 1) {
      const unit = this.units[i].unit
      const size = this.units[i].value
      if (raw >= size) {
        const result = round(raw / size, precision)
        return (negative ? '-' : '')
          + (commaOptions ? commatize(result, commaOptions as CommatizeOptions) : result)
          + unit
      }
    }

    return `${num}`
  }
}

const numabbr = new NumberAbbreviate({
  K: 1000,
  M: 1000000,
  B: 1000000000,
  T: 1000000000000,
})

export default function (num: number, options?: AbbreviateOptions) {
  return numabbr.abbreviate(num, options)
}
