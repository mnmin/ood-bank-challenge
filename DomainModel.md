### Requirements

* You should be able to interact with your code via a JavaScript REPL - Node REPL or browser console  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, credit or debit amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```

BankAccount
  - Properties
    - transactions: array
  - Methods
    - addTransaction()
    - getBalance()
    - getDate()
    - setDate()
    - isWithdrawl()
    - isDeposit()
    - getBalance()
- 

Transaction - this class stores data
  - Properties
    - Date: string
    - credit: string
    - debit: string
    - status: 
  - Methods
    - getStatus()
    - setStatus()
    - getDate()
    - setDate()
    - setCredit()
    - getCredit()
    - setDebit()
    - getDebit()


AccountStatements
  - Porperties
    - transaction
  - Methods
    - addTransaction()
    - printTransaction()
    - getTransaction()
  

TDD
Transactions
  - test1 -> can add credit
  - test2 -> can add debit
  - test3 -> date is correct
  - test4 -> date is incorrect
  - test 5 -> 