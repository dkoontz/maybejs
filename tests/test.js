const Maybe = require('../build/src/').Maybe;
const Either = require('../build/src/').Either;

console.log(Maybe.Just(5));
console.log(Maybe.Nothing);

console.log(Maybe.Just(5).valueOr(0));
console.log(Maybe.Nothing.valueOr(0));
console.log(Maybe.Nothing === Maybe.Nothing);
console.log(Maybe.Just(8).map(n => n.toString()));
console.log(Maybe.Nothing.map(n => n * 2));

console.log(Maybe.Just(2).chain(n => {
  if (n > 3) return Maybe.Nothing;
  else return Maybe.Just(n * 2);
}));
console.log(Maybe.Nothing.chain(n => n * 2));

console.log(Either.Left(5));
console.log(Either.Right(5));
console.log(Either.Left(5).isLeft());
console.log(Either.Right(5).isLeft());

console.log(Either.Right(20).map(n => n - 6));
console.log(Either.Left(20).map(n => n - 6));

console.log(doStuffToThing(Either.Right(20)));
console.log(doStuffToThing(Either.Left(20)));

function doStuffToThing(value) {
  return value
    .chain(n => {
      if (n > 5)
        return Either.Left("Too big")
      else Either.Right(n - 6)
    })
    .chain(n => Either.Right(n * 2));
}
