# assert-in [![Build Status](https://travis-ci.org/bendrucker/assert-in.svg?branch=master)](https://travis-ci.org/bendrucker/assert-in) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/assert-in.svg)](https://greenkeeper.io/)

> Assert that a value is in an array


## Install

```
$ npm install --save assert-in
```


## Usage

```js
var assertIn = require('assert-in')

assertIn(['foo', 'bar'], 'foo')
//=> noop

assertIn(['foo', 'bar'], 'baz')
//=> Error: expected baz in object

var assert = assertIn(['foo', 'bar'])
//=> partially applied fn
```

## API

#### `assertIn(values, [value])` -> `undefined` / `function`

##### values

*Required*  
Type: `array[string]`

Array of string values.

##### value

Type: `string`

A value to assert against. If `value` is omitted, a partially applied function for the provided `values` is returned instead.


## License

MIT © [Ben Drucker](http://bendrucker.me)
