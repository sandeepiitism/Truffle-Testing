const { WEB3_CONNECT_MODAL_ID } = require("web3modal");

const wallet = artifacts.require("Wallet");

Contract("Wallet", (accounts) => {
    let Wallet = null;

    before(async() => {
        wallet = await Wallet.deployed();
    });

    it("Should set account[0] as owner", async() => {               // To check the constructor function
        const owner = await wallet.owner();
        assert(owner == accounts[0]);
    });

    it("Should deposit Ether to Wallet", async() => {                // To chek the deposit function
        await wallet.deposit({from:accounts[0], value:100});         //since deposit 100 eth to contract and use payable function so this syntax
        const balance = await web3.eth.getBalance(wallet.address);   //finding the contract balance
        assert(parseInt(balance) === 100);
    });

    it("Should return the balanceof Wallet", async() => {                // To check the balanceof function         
        const balance = await wallet.balanceof();   
        assert(parseInt(balance) === 100);
    });

    it("Should transfer ether to another address", async() => {                // To check the balanceof function         
        const balance = await web3.eth.getBalance(accounts[1]);
        // console.log("Receiver before balance", receiver_beforeBalance);
        await wallet.send(accounts[1], 10, {from:accounts[0]}); 
        const receiver_afterBalance = await web3.eth.getBalance(accounts[1]);
        // console.log("Receiver After balance", receiver_afterBalance);
        const finalBalance = web3.utils.toBN(receiver_afterBalance);
        const initialBalance = web3.utils.toBN(receiver_beforeBalance);
        assert (finalBalance.sub(initialBalance).toNumber()===10);
    });

    it("Should not transfer ether if tx not sent from the owner", async() => {                // To check the balanceof function         
        try {
            await wallet.send(accounts[1], 10, {from: accounts[2]});
        }
        catch(e) {
            assert (false, "only onwer should send the tx");
        }
    });


})

