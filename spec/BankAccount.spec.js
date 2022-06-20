const Transactions = require('../src/Transactions.js') 
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

    it("make a bank deposit", () => {
    
        const transaction = new Transaction()

        transaction.makeDeposit("20/06/2022", 1000)
        expect(1000).toEqual(transaction.bankAccount.getBalance())
    })
})

describe("Transactions", () => {
    let transactions

    beforeEach(() => {
        transactions = new Transactions
    })

    it("", () => {
    
    
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