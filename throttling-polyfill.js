function myThrottle(fn, wait) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime < wait) return;
    lastTime = now;
    fn.apply(this, args);
  };
}