function debounce(fn, time) {
  let timerId;

  return function() {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn.call(this);
    }, time);
  };
}
const debouncedFn = debounce(() => console.log("hello"), 1000);

debouncedFn();
debouncedFn();
debouncedFn();
debouncedFn();
debouncedFn();
debouncedFn();
