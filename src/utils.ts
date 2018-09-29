import { CommatizeOptions } from './index'

export function round(num: number, precision: number = 0): number {
  const pow = 10 ** (precision >= 0 ? precision : 0)
  return Math.round(num * pow) / pow
}

export function commatize(num: number | string, options: CommatizeOptions = {}) {
  const {
    division = 3,
    separator = ',',
  } = options

  return (`${num}`).replace(/\b(\d+)((\.\d+)*)\b/g, (raw, integer, decimal) => (
    integer.charAt(0) > 0 && !(decimal || '.').lastIndexOf('.')
      ? integer.replace(new RegExp(`(\\d)(?=(\\d{${division}})+$)`, 'g'), `$1${separator}`)
      : integer
  ) + decimal)
}
