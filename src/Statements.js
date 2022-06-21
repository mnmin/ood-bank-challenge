const BankAccount = require('./BankAccount.js')
const Transactions = require('./Transaction.js')

class Statements {
    construcotr() {
        this.transaction = new Transactions()
    }
}

module.exports = Statements