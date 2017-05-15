'use strict';

var Account = function() {
  this.balance = 0;
  this.statement = [];
  this.statements= [];
};

Account.prototype.makeDeposit = function (amount) {
  var date = new Date();
  this.balance += amount;
  this.statement.push({
    date: date.toDateString(),
    credit: "-",
    debit: amount,
    balance: this.balance
  });
  console.log(this.balance);
};

Account.prototype.withdraw = function (amount) {
  if (this.balance - amount <= 0) {
    return 'Not enough funds';
  } else {
    var date = new Date();
    this.balance -= amount;
    this.statement.push({
      date: date.toDateString(),
      credit: amount,
      debit: "-",
      balance: this.balance
    });
  };
  console.log(this.balance);
};

Account.prototype.displayStatement = function () {
  for (var i = 0; i < this.statement.length; i++) {
    this.statements.push(this.statement[i].date);
    this.statements.push(this.statement[i].credit);
    this.statements.push(this.statement[i].debit);
    this.statements.push(this.statement[i].balance);
    this.statements.push("\n");
  }

  return this.statements.join(",").replace(/,/g , ' | ');
};
