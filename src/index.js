import memoize from 'memoize-one';

export default function (resultFn, equalityFn, disposeFn) {
  let initialized, lastArgs, lastInstance;

  return memoize((...args) => {
    initialized && disposeFn && disposeFn(lastInstance, ...lastArgs);
    initialized = true;
    lastArgs = args;

    return (lastInstance = resultFn(...args));
  }, equalityFn);
}
