'use strict';

var Account = function() {
  this.balance = 0;
  this.statement = [];
};

Account.prototype.makeDeposit = function (amount) {
  this.balance += amount;
  this.statement.push({
    credit: "-",
    debit: amount,
    balance: this.balance
  });
};

function Error(message) {
  this.name = 'Error';
  this.message = message;
}

Account.prototype.withdraw = function (amount) {
  if (this.balance - amount <= 0) {
    return 'Not enough funds';
  } else {
    this.balance -= amount;
    this.statement.push({
      credit: amount,
      debit: "-",
      balance: this.balance
    });
  };
};

Account.prototype.displayDebit = function () {
  var debit = [];
  debit.push("Debit:");
  for (var i = 0; i < this.statement.length; i++) {
    debit.push(this.statement[i].debit);
  }
  return debit.join(",").replace(/,/g,' ');
};

Account.prototype.displayCredit = function () {
  var credit = [];
  credit.push("Credit:");
  for (var i = 0; i < this.statement.length; i++) {
    credit.push(this.statement[i].credit);
  }
  return credit.join(",").replace(/,/g,' ');
};

Account.prototype.displayBalance = function () {
  var balance = [];
  balance.push("Balance:");
  for (var i = 0; i < this.statement.length; i++) {
    balance.push(this.statement[i].balance);
  }
  return balance.join(",").replace(/,/g,' ');
};

Account.prototype.displayStatement = function () {
  return this.displayCredit() + " | " + this.displayDebit() + " | " + this.displayBalance();
};
