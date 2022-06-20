const Transactions = require('./Transactions.js')
const Statements = require('./Statements.js')

class BankAccount {
    constructor(balance = 0 ) {
        this.balance = balance
        this.transactions = []
    }

    getBalance() {
        return this.balance
    }

    getTransactions() {
        return this.transactions
    }
}

module.exports = BankAccount