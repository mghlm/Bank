'use strict';

var Account = function() {
  this.balance = 0;
  this.statement = [];
}

Account.prototype.makeDeposit = function (amount) {
  this.balance += amount;
};
