
class Transaction {
    constructor() {
        this.date = date,
        this.credit = credit
        this.debit = debit
        this.thansaction = []
        this.withdrawl 
    }

    makeDeposit(date, credit) {
        const transaction = new Transaction(amount, 'credit');
        this.#accountTransactions.push(transaction);
        return transaction;
      }
    
      makeWithdrawal(date, debit) {
        const transaction = new Transaction(amount, 'debit');
        this.#accountTransactions.push(transaction);
        return transaction;
      }

    getStatement() {
        const transactions = this.Transactions;
        const statement = new Statement();
        return statement.printStatement(transactions);
      }
    
    getTransactions() {
        return this.#accountTransactions;
      }
}

module.exports = Transaction