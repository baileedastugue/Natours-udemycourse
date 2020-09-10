//Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.

// console.log(Date.prototype);
Date.prototype.lastYear = function () {
     return this.getFullYear() - 1;
};

console.log(new Date('1900-10-10').lastYear());
//'1899'

//#Bonus
// Mofify .map() to print '🗺' at the end of each item.
//1🗺, 2🗺, 3🗺

Array.prototype.map = function () {
     let arr = [];
     for (let i = 0; i < this.length; i++) {
          arr.push(this[i] + '🗺');
     }
     return arr;
};
console.log([1, 2, 3].map());

Function.prototype.bind = function (whosCallingMe) {
     const self = this;
     return function () {
          return self.apply(whosCallingMe, arguments);
     };
};
