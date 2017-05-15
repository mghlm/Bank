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

  });
