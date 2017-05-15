var Transactions = function() {
  this.all = [];
}

Transactions.prototype.addTransaction = function (transaction) {
  this.all.push(transaction);
};
