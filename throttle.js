function throttle(fn, time) {
  let timerId;

  return function() {
    if (timerId) {
      return;
    }
    timerId = setTimeout(() => {
      fn.call(this);
    }, time);
  };
}

const throttledFn = throttle(() => console.log("hello"), 1000);

throttledFn();
throttledFn();
throttledFn();
throttledFn();
throttledFn();
throttledFn();
