const arr = [1, 5, 3, 8, 4, 9];

Array.prototype.max = function () {
  this.sort((a, b) => a - b);
  return this[this.length - 1];
};
Array.prototype.sum = function () {
  return this.reduce((sum, i) => sum + i);
};
arr.max();