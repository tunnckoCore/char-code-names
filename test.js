/**
 * char-code-names <https://github.com/tunnckoCore/char-code-names>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var lab = exports.lab = require('lab').script();
var assert = require('assert');
var forIn = require('for-in');
var charCodeNames = require('./index');

var describe = lab.describe;
var it = lab.it;

describe('char-code-names:', function() {
  it('length of char-code-names should be 32', function(done) {
    var i = 0;
    forIn(charCodeNames(), function forIn(val) {
      assert.ok(val);
      i++;
    });
    assert.strictEqual(i, 33);
    done();
  });
  it('values of object should be array', function(done) {
    forIn(charCodeNames(), function forIn(val) {
      assert.strictEqual(Array.isArray(val), true);
    });
    done();
  });
  it('keys of object should be number', function(done) {
    forIn(charCodeNames(), function forIn(val, key) {
      assert.strictEqual(typeof parseInt(key), 'number');
    });
    done();
  });
  it('char code `44` names length should be 1 and be `comma`', function(done) {
    assert.strictEqual(charCodeNames()['44'].length, 1);
    assert.strictEqual(charCodeNames()['44'][0], 'comma');
    done();
  });
  it('should get specific char code names', function(done) {
    assert.strictEqual(charCodeNames('44')[0], 'comma');
    assert.strictEqual(charCodeNames(44)[0], 'comma');
    done();
  });
});
