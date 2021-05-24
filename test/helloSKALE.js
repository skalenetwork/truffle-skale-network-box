const HelloSKALE = artifacts.require("./HelloSKALE.sol");

contract("HelloSKALE", accounts => {
  it("...should welcome SKALE Innovator", async () => {
    const helloSKALEInstance = await HelloSKALE.deployed();

    // Set value of 89
    await helloSKALEInstance.setName("SKALE Innovator", { from: accounts[0] });

    // Get stored value
    const storedData = await helloSKALEInstance.get.call();

    const expected = "Hello SKALE Innovator!";

    assert.equal(storedData, expected, "It should welcome SKALE Innovator");
  });
});