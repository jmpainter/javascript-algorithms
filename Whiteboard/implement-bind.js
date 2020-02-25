const foo = function() {
  console.log(this.bar);
};

Function.prototype.bind = function(context) {
  const fn = this;
  return function() {
    fn.call(context);
  };
};

let baz = foo.bind({ bar: "hello" });

baz();
