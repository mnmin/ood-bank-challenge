const Transactions = require('./Transactions.js')
const Statements = require('./Statements.js')

class BankAccount {
    constructor() {
        this.transactions = []
    }
}

module.exports = BankAccount