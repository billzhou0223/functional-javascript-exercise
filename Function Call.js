// the value of 'this' in call is the function that will be called.
module.exports = Function.prototype.call.bind(Array.prototype.slice);