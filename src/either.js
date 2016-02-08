"use strict"

const Types = require('./types');

function Left(value) {
  return new Types.Left(value);
}

function Right(value) {
  return new Types.Right(value);
}

module.exports = {
  Left,
  Right
}
