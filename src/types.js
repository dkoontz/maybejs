"use strict"

class Maybe { }

class Just extends Maybe {
  constructor(value) {
    super();
    this.isJust = true;
    this.value = value;
  }

  valueOr() {
    return this.value;
  }

  isJust() { return true; }
  isNothing() { return false; }
  map(fn) {
    return new Just(fn(this.value));
  }
  chain(fn) {
    return fn(this.value);
  }
}

class Nothing extends Maybe {
  valueOr(defaultValue) {
    return defaultValue;
  }

  isJust() { return false; }
  isNothing() { return true; }
  map() { return this; }
  chain() { return this; }
}

class Either { }

class Left extends Either {
  constructor(value) {
    super();
    this.value = value;
  }

  isLeft() { return true; }
  isRight() { return false; }
  map() { return this; }
  chain() { return this; }
}

class Right extends Either {
  constructor(value) {
    super();
    this.value = value;
  }

  isLeft() { return false; }
  isRight() { return true; }
  map(fn) { return new Right(fn(this.value)); }
  chain(fn) { return fn(this.value); }
}

module.exports = {
  Just,
  Nothing,
  Left,
  Right
}
