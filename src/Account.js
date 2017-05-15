'use strict';

var Account = function() {
  this.balance = 0;
  this.statement = [];
};

Account.prototype.makeDeposit = function (amount) {
  this.balance += amount;
  this.statement.push({
    debit: amount,
    balance: this.balance
  });
};

Account.prototype.displayStatement = function () {
  var statement = [];
  statement.push("Debit:");
  for (var i = 0; i < this.statement.length; i++) {
    statement.push(this.statement[i].debit);
  }
  statement.push("| Balance:");
  for (var i = 0; i < this.statement.length; i++) {
    statement.push(this.statement[i].balance);
  }

  return statement.join(",").replace(/,/g,' ');
};
