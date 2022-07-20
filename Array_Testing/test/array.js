const Array = artifacts.require("Array");

contract ("Array", () => {
    it("Should insert an element into an array arr", async() => {          //checking insert function
        let array = await Array.deployed();
        await array.insert(10);
        const element = await array.arr(0);
        assert(element.toNumber() === 10);
    });

    it("Should get an element into an array arr", async() => {          //checking arr function
        let array = await Array.deployed();
        await array.insert(20);
        const element = await array.arr(1);
        assert(element.toNumber() === 20);
    });

    it("Should return the length of an array arr", async() => {          //checking length function
        let array = await Array.deployed();
        const length = await array.length();
        assert(length.toNumber() === 2);
       
    });
});