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
    });

  });
