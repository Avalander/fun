This is a collection of functional primitives that I reuse across projects.

# Either

```javascript
import { Left, Right, tryCatch, conditional } from '@avalander/func/src/either'
```

## `Either` constructors

### `Left :: a -> Left a`

It returns an instance of `Left` wrapping the given value.

### `Right :: a -> Right a`

It returns an instance of `Right` wrapping the given value.

### `tryCatch :: (...args -> a) throws fn => fn -> ...args -> Either a`

`tryCatch` receives a function that may throw an exception and a list of arguments. It will apply the arguments to the function and return a `Left` if the function throws or a `Right` wrapping the result otherwise.

```javascript
const noOddsPlz = x => {
    if (x % 2 === 0) return x
    throw new Error('It was odd')
}

tryCatch(noOddsPlz, 4) // -> Right(4)
tryCatch(noOddsPlz, 3) // -> Left(Error(It was odd))
```

### `conditional :: (a -> bool) -> string? -> a -> Either a`

`conditional` recieves a predicate function that takes a value and returns a `boolean`, and an optional string as a `reason` and returns a function that will take a value, apply the predicate function and return an instance of `Right` if the predicate returns `true` or an instance of `Left` with the `reason` if the predicate returns `false`.

```javascript
const isOdd = conditional(x => x % 2 != 0, 'It is even')
isOdd(3) // -> Right(3)
isOdd(4) // -> Left(It is even)
```

## `Either` methods

### `map :: (a -> b) -> Either b`

It receives a function that will be applied to the wrapped value of a `Right` instance and returned wrapped in a new instance of `Right` or ignored in an instance of `Left`.

```javascript
Right(3).map(x => x * 2) // -> Right(6)
Left(3).map(x => x * 2) // -> Left(3)
```

### `chain :: (a -> Either b) -> Either b`

It receives a function that takes the wrapped value and returns a new instance of `Either`.

An instance of `Right` will apply the function and return the result. An instance of `Left` will ignore the function and return the same instance.

```javascript
Right(3).map(x => Right(x * 2)) // -> Right(6)
Right(3).map(x => Left(x - 1)) // -> Left(2)
Left(3).map(x => Right(x * 2)) // -> Left(3)
```

### `fold :: (a -> c) -> (b -> c) -> c`

It receives a left function that will be applied to the wrapped value of a `Left` instance and a right function that will be applied to the wrapped value of a `Right` instance. In both cases, the result of the function will be returned.

```javascript
Right(3).fold(
    l => l
    r => r * 2
) // -> 6
Left(3).fold(
    l => l
    r => r * 2
) // -> 3
```

# Maybe

```javascript
import { Just, Nothing, fromNullable, fromList } from '@avalander/func/src/maybe'
```

## `Maybe` constructors

### `Just :: a -> Just a`

Returns an instance of `Just` wrapping a value.

### `Nothing :: () -> Nothing`

Returns an instance of `Nothing`.

### `fromNullable :: a -> Maybe a`

Returns an instance of `Nothing` if the given value is `null` or `undefined` and an instance of `Just` wrapping the value otherwise.

```javascript
fromNullable(null) // -> Nothing
fromNullable('potato') // -> Just(potato)
```

### `fromList :: List a => a -> Maybe a`

Receives an array-like object. Returns an instance of `Nothing` if the object is empty and an instance of `Just` wrapping the object otherwise.

```javascript
fromList([]) // -> Nothing
fromList([1, 2, 3]) // -> Just([1, 2, 3])
```

## `Maybe` methods

### `map :: (a -> b) -> Maybe b`

Applies the function to the wrapped value of a `Just` and returns the result wrapped in a new `Just`, or returns `Nothing`.

```javascript
Just(3).map(x => x * 2) // -> Just(6)
Nothing().map(x => x * 2) // -> Nothing
```

### `chain :: (a -> Maybe b) -> Maybe b`

Applies the function to the wrapped value of a `Just` and returns the result or returns `Nothing`.

It expects the result to be an instance of `Maybe`.

```javascript
Just(3).chain(x => Just(x * 2)) // -> Just(6)
Just(3).chain(x => Nothing()) // -> Nothing
Just(3).chain(x => x * 2) // -> 'Error: fn in Maybe.chain(fn) must return an instance of either Just or Nothing.'
Nothing().chain(x => Just(x * 2)) // -> Nothing
```

### `fold :: (() -> b) -> (a -> b) -> b`

Applies the left function if it is an instance of `Nothing` or the right function if it is an instance of `Just` to the wrapped value and returns the result.

```javascript
Just(3).fold(
	() => -1,
	x => x * 2
) // -> 6
Nothing.fold(
	() => -1,
	x => x * 2
) // -> -1
```