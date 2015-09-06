'use strict'

var toHash = require('array-to-hash')
var partial = require('ap').partial
var assertKey = require('assert-key')

module.exports = assertIn

function assertIn (array, value) {
  var hash = toHash(array)
  var assert = partial(assertKey, hash)
  return arguments.length < 2 ? assert : assert(value)
}
