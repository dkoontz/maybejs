"use strict"

const Types = require('./types');

const Nothing = new Types.Nothing();

function Just(value) {
  return new Types.Just(value);
}

module.exports = {
  Just,
  Nothing,
}
