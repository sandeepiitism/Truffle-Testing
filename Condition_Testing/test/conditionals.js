const Conditional = artifacts.require("Conditional");

Contract("Conditional", () => {
    it("Should check whether a is greater than b", async() => {
        const conditional = await Conditional.deployed();

        try {
            const result = await Conditional.check(1,2);
            assert (result.toNumber === 5);

        }catch(e) {
            assert(false, " a should be greater than b");
        }

    });

});