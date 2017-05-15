'use strict';

  describe('Account', function() {

    var account;

    beforeEach(function() {
      account = new Account();
    });

    it('initialise with a balance of 0', function() {
      expect(account.balance).toEqual(0);
    });

    it('initialise with an empty statement', function() {
      expect(account.statement).toEqual([]);
    });

    describe('Make deposit', function () {

      it('updates the balance after a deposit has been made', function() {
        account.makeDeposit(500);
        expect(account.balance).toEqual(500);
      });

      it('adds new object to statements', function() {
        account.balance = 1000;
        account.makeDeposit(500);
        expect(account.statement).toEqual([{
          date: "Mon May 15 2017",
          credit: "-",
          debit: 500,
          balance: 1500
        }]);
      });

      it('displays all deposits', function () {
        account.makeDeposit(500);
        account.makeDeposit(1000);
        expect(account.displayDebit()).toEqual("Debit: 500 1000");
      });
    });

    describe('Withdraw', function() {

      it('updates balance after withdrawal', function() {
        account.balance = 1000;
        account.withdraw(300);
        expect(account.balance).toEqual(700);
      });

      it('only lets you withdraw if the amount is equal or bigger than the balance', function () {
        account.balance = 700;
        expect(account.withdraw(800)).toEqual('Not enough funds');
        expect(account.balance).toEqual(700);
      });

      it('adds row to statement if withdrawal was successful', function() {
        account.balance = 700;
        account.withdraw(500);
        expect(account.statement).toEqual([{
          date: "Mon May 15 2017",
          credit: 500,
          debit: "-",
          balance: 200
        }]);
      });

      it('displays all withdrawals', function() {
        account.balance = 1000;
        account.withdraw(200);
        account.withdraw(400);
        expect(account.displayCredit()).toEqual("Credit: 200 400");
      });
    });

    describe('Statement', function() {

      it('displays the statement', function() {
        account.makeDeposit(500);
        account.makeDeposit(700);
        account.withdraw(200);
        expect(account.displayStatement()).toEqual("Credit: - - 200 | Debit: 500 700 - | Balance: 500 1200 1000");
      });
    });

    describe('Balance', function() {
      it('displays all balance-statements', function () {
        account.makeDeposit(300);
        account.makeDeposit(400);
        expect(account.displayBalance()).toEqual("Balance: 300 700")
      });
    });

    describe('Date', function() {

      it('shows the date of activity', function() {
        account.makeDeposit(500);
        expect(account.displayDate()).toEqual("Date: Mon May 15 2017");
      });
    });


  });
