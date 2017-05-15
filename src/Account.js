'use strict';

var Account = function() {
  this.balance = 0;
  this.transactions = [];
  this.date = new Date();
};

Account.prototype.deposit = function (amount) {
  this.balance += amount;
  this.transactions.push({
                    date: this.date.toDateString(),
                    credit: "-",
                    debit: amount,
                    balance: this.balance
                  });
  console.log(this.balance);
};

Account.prototype.withdraw = function (amount) {
  if (this.balance - amount <= 0) {
    throw new TypeError('Not enough funds');
  } else {
    this.balance -= amount;
    this.transactions.push({
                      date: this.date.toDateString(),
                      credit: amount,
                      debit: "-",
                      balance: this.balance
                    });
  };
  console.log(this.balance);
};

Account.prototype.displayStatement = function () {
  var statementString = [];
  for (var i = 0; i < this.transactions.length; i++) {
    statementString.push(this.transactions[i].date + " | ");
    statementString.push(this.transactions[i].credit + " | ");
    statementString.push(this.transactions[i].debit + " | ");
    statementString.push(this.transactions[i].balance);
    statementString.push("\n");
  }

  var statement = "Date: | Credit: | Debit: | Balance: \n" + statementString.join(",").replace(/,/g , '');
  statementString = [];
  return statement;
};
