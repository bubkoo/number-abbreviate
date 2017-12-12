# numabbr

> Abbreviate number to a more human-friendly format (3.6K, 6.8M, etc.)

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/number-abbreviate/blob/master/LICENSE)

[![NPM Version](https://img.shields.io/npm/v/numabbr.svg?style=flat-square)](https://www.npmjs.com/package/numabbr)
[![Build Status](https://img.shields.io/travis/bubkoo/number-abbreviate.svg?style=flat)](https://travis-ci.org/bubkoo/number-abbreviate)
[![Coverage Status](https://img.shields.io/coveralls/bubkoo/number-abbreviate.svg?style=flat)](https://coveralls.io/r/bubkoo/number-abbreviate)
[![NPM downloads](http://img.shields.io/npm/dm/numabbr.svg?style=flat)](https://npmjs.org/package/numabbr)
[![Package Quality](http://npm.packagequality.com/shield/numabbr.svg)](http://packagequality.com/#?package=numabbr)

## Install

```
npm install --save numabbr
```

## Usage

Simple/shorthand mode:

```js
import numabbr from 'numabbr'

numabbr(100)           // => 100
numabbr(10000)         // => 10K
numabbr(-10000)        // => -10K
numabbr(1000000)       // => 1M
numabbr(1020000)       // => 1.02M
numabbr(1000000000)    // => 1B
numabbr(1000000000000) // => 1T

numabbr(123456, { precision: 1 }) // => 123.5K

numabbr(123456, {
      precision: 1,
      commatize: { division: 2 },
}) // => 1,23.5K
```

Class/constructor mode:

```js
import { NumberAbbreviate } from 'numabbr'
const abbr = new NumberAbbreviate({
  千: 1000,
  万: 10000,
  十万: 100000,
  百万: 1000000,
  千万: 10000000,
  亿: 100000000,
})

abbr.abbreviate(123)    // => 123
abbr.abbreviate(1000)   // => 1千
abbr.abbreviate(1234)   // => 1.23千
abbr.abbreviate(10000)  // => 1万
abbr.abbreviate(12345)  // => 1.23万
abbr.abbreviate(123456) // => 1.23十万
```

## Options

- **precision** {Number} Default `2`. Specify the precision of decimal part
- **commatize** {Object|Boolean} Default `false`. Specify how to commatize the result
  - **division** {Number} Default `3`. Length of each divided parts
  - **separator** {Char} Default `,`. Separator of each divided parts

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/bubkoo/number-abbreviate/issues/new).
