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
    });

    describe('Statement', function() {

      it('displays the statement', function() {
        var date = new Date();
        account.makeDeposit(500);
        account.makeDeposit(700);
        account.withdraw(200);
        expect(account.displayStatement()).toEqual("Date: | Credit: | Debit: | Balance: \n" + date.toDateString() + " | - | 500 | 500\n" + date.toDateString() + " | - | 700 | 1200\n" + date.toDateString() + " | 200 | - | 1000\n");
      });
    });



  });
