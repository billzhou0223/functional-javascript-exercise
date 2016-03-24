//return next step
function repeat(operation, num) {
  return function() {
    if (num <= 0) return;
      operation();
    return repeat(operation, --num);
  }
}

//execute step
function trampoline(fn) {
  while(fn && typeof fn === 'function') {
    fn = fn();
  }
}

//entrance
module.exports = function(operation, num) {
  trampoline(repeat(operation, num));
}