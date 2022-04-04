Function.prototype.defer = (t) => {
    let myTimeout = setTimeout(f, t);
  };
  function f() {
    alert('Hello!');
  }
  f.defer(10000);