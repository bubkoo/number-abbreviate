import NumberAbbreviate from './NumberAbbreviate'

export NumberAbbreviate from './NumberAbbreviate'

const numabbr = new NumberAbbreviate({
  K: 1000,
  M: 1000000,
  B: 1000000000,
  T: 1000000000000,
})

export default function (num, options) {
  return numabbr.abbreviate(num, options)
}
