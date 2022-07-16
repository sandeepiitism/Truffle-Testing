const HelloWorld = artifacts.require("HelloWorld");

contract("Hello World", () => {
    it("Should return you Hello World", async () => {
        const helloWorld = await HelloWorld.deployed();
        const result = await helloWorld.print();
        assert(result == "Hello World");
    });
})