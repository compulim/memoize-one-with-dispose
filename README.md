# memoize-one-with-dispose

A memoization function based on [`memoize-one`](https://npmjs.com/package/memoize-one) with disposing function.

[![npm version](https://badge.fury.io/js/memoize-one-with-dispose.svg)](https://badge.fury.io/js/memoize-one-with-dispose) [![Build Status](https://travis-ci.org/compulim/memoize-one-with-dispose.svg?branch=master)](https://travis-ci.org/compulim/memoize-one-with-dispose) [![Coverage Status](https://coveralls.io/repos/github/compulim/memoize-one-with-dispose/badge.svg)](https://coveralls.io/github/compulim/memoize-one-with-dispose)

## Background

[`memoize-one`](https://npmjs.com/package/memoize-one) is a popular utility package for memoization. It is simple and straightforward. But sometimes, you may use it to hold resources that requires a manual release. This package enhance [`memoize-one`](https://npmjs.com/package/memoize-one) with a disposing function that would call before a new memoized object is created.

> Although JavaScript automatically do garbage collection, sometimes you may be working with resources that requires an explicit stop or cancellation.

## To install

Run `npm install memoize-one memoize-one-with-dispose`.

> This package peer-depends on [`memoize-one`](https://npmjs.com/package/memoize-one).

### Before using `memoize-one-with-dispose`

Before using this package, you will need to write code like this.

```js
import memoize from 'memoize-one';

let created, lastValue;

const createOrGetValue = memoize(x => {
  created && lastValue.dispose();
  created = true;
  lastValue = createValue(x);

  return lastValue;
});
```

### After using `memoize-one-with-dispose`

After using this package, you can write shorter and more readable code like this.

```js
import memoizeWithDispose from 'memoize-one-with-dispose';

const createOrGetValue = memoize(
  x => createValue(x),
  undefined, // pass as equalityFn to memoize-one
  lastValue => lastValue.dispose()
);
```

# Contributions

Like us? [Star](https://github.com/compulim/memoize-one-with-dispose/stargazers) us.

Want to make it better? [File](https://github.com/compulim/memoize-one-with-dispose/issues) us an issue.

Don't like something you see? [Submit](https://github.com/compulim/memoize-one-with-dispose/pulls) a pull request.
