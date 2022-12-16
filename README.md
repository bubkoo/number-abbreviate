<h1 align="center">Abbreviate Number</h1>

<p align="center"><strong>Abbreviate number to a more human-friendly format (3.6K, 6.8M, etc.)</strong></p>

<p align="center">
<a href="/LICENSE"><img src="https://img.shields.io/github/license/bubkoo/number-abbreviate?style=flat-square" alt="MIT License"></a>
<a href="https://www.typescriptlang.org"><img alt="Language" src="https://img.shields.io/badge/language-TypeScript-blue.svg?style=flat-square"></a>
<a href="https://github.com/bubkoo/number-abbreviate/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=flat-square"></a>
</p>

<p align="center">
<a href="https://github.com/bubkoo/number-abbreviate/actions/workflows/ci.yml"><img alt="build" src="https://img.shields.io/github/actions/workflow/status/bubkoo/number-abbreviate/ci.yml?branch=master&logo=github&style=flat-square"></a>
<a href="https://app.codecov.io/gh/bubkoo/number-abbreviate"><img alt="coverage" src="https://img.shields.io/codecov/c/gh/bubkoo/number-abbreviate?logo=codecov&style=flat-square&token=BWweeU2uNX"></a>
<a href="https://lgtm.com/projects/g/bubkoo/number-abbreviate/context:javascript" rel="nofollow"><img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/bubkoo/number-abbreviate.svg?logo=lgtm&style=flat-square" /></a>
<a href="https://www.npmjs.com/package/numabbr" rel="nofollow"><img alt="NPM Package" src="https://img.shields.io/npm/v/numabbr.svg?style=flat-square" /></a>
<a href="https://www.npmjs.com/package/numabbr" rel="nofollow"><img alt="NPM Downloads" src="http://img.shields.io/npm/dm/numabbr.svg?style=flat-square" /></a>
</p>

## Install

```
npm install numabbr --save
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

- **precision** { Number } Default `2`. Specify the precision of decimal part
- **commatize** { Object | Boolean } Default `false`. Specify how to commatize the result
  - **division** { Number } Default `3`. Length of each divided parts
  - **separator** { Char } Default `,`. Separator of each divided parts

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/bubkoo/number-abbreviate/issues/new).


## License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
s
