'use strict'

var test = require('tape')
var assertIn = require('./')

test(function (t) {
  t.doesNotThrow(assertIn.bind(null, ['foo', 'bar'], 'foo'))
  t.throws(assertIn.bind(null, ['foo', 'bar'], 'baz'))

  var assert = assertIn(['foo', 'bar'])

  t.doesNotThrow(assert.bind(null, 'foo'))
  t.throws(assert.bind(null, 'baz'))

  t.end()
})
