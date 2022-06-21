
class Transaction {
    constructor() {
        this.date = 'date'
        this.credit = 'credit'
        this.debit = 'debit'
        this.thansaction = []
        this.withdrawl 
    }

    makeDeposit(date, credit) {
        const transaction = new Transaction(date, 'credit')
        this.#accountTransactions.push(transaction)
        return transaction
      }
    
      makeWithdrawal(date, debit) {
        const transaction = new Transaction(date, 'debit')
        this.#accountTransactions.push(transaction)
        return transaction
      }

    getStatement() {
        const transactions = this.Transactions
        const statement = new Statement()
        return statement.printStatement(transactions)
      }
    
    getTransactions() {
        return this.#accountTransactions
      }
}

module.exports = Transaction