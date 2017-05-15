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
          debit: 500,
          balance: 1500
        }]);
      });

      it('displays all deposits', function () {
        account.makeDeposit(500);
        account.makeDeposit(1000);
        expect(account.displayDebit()).toEqual("Debit: 500 1000");
      });

      it('displays the statement', function() {
        account.makeDeposit(500);
        account.makeDeposit(700);
        expect(account.displayStatement()).toEqual("Debit: 500 700 | Balance: 500 1200");
      });
    });

  });
