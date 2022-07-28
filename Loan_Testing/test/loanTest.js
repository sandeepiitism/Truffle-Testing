const {expectRevert, time} = require("@openzeppelin/test-helpers");
const Loan = artifacts.require("Loan.sol");

contract("Loan", (accounts) => {
    let loan;
    const amount = 1000;
    const interest = 10;
    const duration = 100;

    const [borrower, lender] = [accounts[1], accounts[2]];
    before(async() => {
        loan = await Loan.deployed();
    });

    it("should not accept lend if not lender", async() => {
        await expectRevert(loan.lend({from:borrower, value:amount}), 
        "only lender can lend"
        );
    });

    it("should not accept lend amount if not exact amount", async() => {
        await expectRevert(loan.lend({from:lender, value:100}), 
        "Can only lend the exact amount"
        );
    });
})