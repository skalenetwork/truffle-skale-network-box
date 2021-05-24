var HelloSKALE = artifacts.require("./HelloSKALE.sol");

module.exports = function(deployer) {
  deployer.deploy(HelloSKALE);
};
