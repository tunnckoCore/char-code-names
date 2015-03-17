## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Common used char codes and their common used names as json object

## Install
```
npm i --save char-code-names
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var charCodeNames = require('char-code-names');

charCodeNames(42);   //=> ['star','asterisk'],
charCodeNames(44);   //=> ['comma']
charCodeNames('59'); //=> ['semicolon','semi-colon','semi colon']
charCodeNames();
//=> {
//  '32': ['space'],
//  '33': ['negate','exclam','exclamation','exclamation mark','exclam mark'],
//  '34': ['double','doublequote','double-quote','double quote'],
//  '35': ['hash','number','hash sign','number sign'],
//  '36': ['dollar','dollar sign']
//  ...
//}
```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/char-code-names
[npmjs-img]: https://img.shields.io/npm/v/char-code-names.svg?style=flat&label=char-code-names

[coveralls-url]: https://coveralls.io/r/tunnckoCore/char-code-names?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/char-code-names.svg?style=flat

[license-url]: https://github.com/tunnckoCore/char-code-names/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/char-code-names
[travis-img]: https://img.shields.io/travis/tunnckoCore/char-code-names.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/char-code-names
[daviddm-img]: https://img.shields.io/david/dev/tunnckoCore/char-code-names.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/char-code-names/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), March 17, 2015_