'use strict';

var Account = function() {
  this.balance = 0;
  this.statement = [];
}

Account.prototype.makeDeposit = function (amount) {
  this.balance += amount;
  this.statement.push({
    date: "date",
    credit: null,
    debit: amount,
    balance: this.balance
  });
};
