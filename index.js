/**
 * char-code-names <https://github.com/tunnckoCore/char-code-names>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var codeNames = {
  32: ['space'],
  33: ['negate','exclam','exclamation','exclamation mark','exclam mark'],
  34: ['double','doublequote','double-quote','double quote'],
  35: ['hash','number','hash sign','number sign'],
  36: ['dollar','dollar sign'],
  37: ['percent','percentage'],
  38: ['ampersand'],
  39: ['single','singlequote', 'single-quote','single quote'],
  40: ['left-parenthesis','left parenthesis','left-paren','left paren'],
  41: ['right-parenthesis','right parenthesis','right-paren','right paren'],
  42: ['star','asterisk'],
  43: ['plus','plus sign'],
  44: ['comma'],
  45: ['minus','dash','hyphen'],
  46: ['dot','period'],
  47: ['forward-slash', 'forwardslash','forward slash','slash'],
  58: ['colon'],
  59: ['semicolon','semi-colon','semi colon'],
  60: ['lower than','lower than sign','lower-than','lower-than sign', 'lt'],
  61: ['equal','equals'],
  62: ['greater than','greater than sign','greater-than','greater-than sign', 'gt'],
  63: ['question','question mark','q'],
  64: ['at','at sign'],
  91: ['left square bracket','left-square-bracket','left square','left-square','left-bracket','left bracket'],
  92: ['back-slash', 'backslash','back slash'],
  93: ['right square bracket','right-square-bracket','right square','right-square','right-bracket','right bracket'],
  94: ['caret'],
  95: ['horizontal','horizontal bar','underscore','lodash','horizontal line'],
  96: ['grave accent','accent'],
  123: ['left curly brace','left-curly-brace','left curly','left-curly','left-brace','left brace'],
  124: ['vertical','vertical bar','vertical line'],
  125: ['right curly brace','right-curly-brace','right curly','right-curly','right-brace','right brace'],
  126: ['tilde','tilda'],
}

module.exports = function charCodeNames(code) {
  if (!code) {
    return codeNames;
  }
  return codeNames[String(code)];
};
