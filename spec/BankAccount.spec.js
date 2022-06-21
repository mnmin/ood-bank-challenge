const Transaction = require('../src/Transaction.js') 
const BankAccount = require('../src/BankAccount.js')
const Statements = require('../src/Statements.js')

describe("BankAccount", () => {
    let bankAccount

    beforeEach(() => {
        bankAccount = new BankAccount()

        expect(0).toEqual(bankAccount.getBalance())
    })

    it("view bank accout balance", () => {
    
        const bankAccount = new BankAccount()

        expect(0).toEqual(bankAccount.getBalance())
    })
   
})

describe("Transactions", () => {
    let transactions

    beforeEach(() => {
        transactions = new Transaction()
    })

    it("user makes a bank deposit", () => {

        transaction.newDeposit("20/06/2022", 1000)
        // Not sure I'm accessing the right class
        expect(1000).toEqual(transaction.bankAccount.getBalance())
    })

    it("records a bank deposit", () => {

        transaction.newDeposit("10/01/2012", 1000)
        // Not sure I'm accessing the right class
        expect([{ date: '10/01/2022', credit: '1000.00', balance: 1000}]).toEqual(transaction.bankAccount.getTransactions())
    })

    it("records a bank withdrawl", () => {
    
        transaction.bankWithdrawl("14/01/2012", 500)
        // Not sure I'm accessing the right class
        expect([{ date: '14/01/2021', debit: '500.00', balance: -500}]).toEqual(transaction.bankAccount.getTransactions())
    })
})

describe("Statements", () => {
    let statements

    beforeEach(() => {
        statements = new Statements
    })

    it("", () => {
    
    
    })
})