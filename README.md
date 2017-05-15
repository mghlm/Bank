# Bank

### Acceptance criteria:

**Given** a client makes a deposit of 1000 on 10-01-2012
**And** a deposit of 2000 on 13-01-2012
**And** a withdrawal of 500 on 14-01-2012
**When** she prints her bank statement
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

### User Stories:

```
As a bank customer
So that I can use the banks services
I would like to create a bank account
```
```
As a bank customer
So that I can buy stuff online
I would like to be able to deposit money to my bank account
```
```
As a bank customer
So that I can have some fun
I would like to be able to withdraw money from my bank account
```
```
As a bank
So that I don't lose money
I won't let customers withdraw if their balance is 0
```
```
As a bank customer
So that I can keep track of my finances
I would like to be able to print a bank statement
```
```
As a bank customer
So that I can keep track of when I spent money
I would like my statement to include date for activity

```
