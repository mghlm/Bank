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

Account.prototype.displayDebit = function () {
  var debit = []
  debit.push("Debit:")
  for (var i = 0; i < this.statement.length; i++) {
    debit.push(this.statement[i].debit);
  }
  return debit.join(",").replace(/,/g,' ');
};

Account.prototype.displayBalance = function () {
  var balance = []
  balance.push("Balance:")
  for (var i = 0; i < this.statement.length; i++) {
    balance.push(this.statement[i].balance);
  }
  return balance.join(",").replace(/,/g,' ');
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
