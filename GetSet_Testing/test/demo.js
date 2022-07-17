const Demo = artifacts.require("Demo");

contract("ABC", () => {
    it("Should set the value of the item in smart contract", async() => {
        const demo = await Demo.deployed();
        await demo.set("Great");
        const result = await demo.get();
        assert(result === "Great");
    })
})