function myDebounce(fn, wait) {
  let timeout;
  return function (...args) {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };

}