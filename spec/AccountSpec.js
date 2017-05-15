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
          date: "date",
          credit: null,
          debit: 500,
          balance: 1500
        }]);
      });
    });

  });
