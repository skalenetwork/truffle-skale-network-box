pragma solidity >=0.4.21 <0.7.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/HelloSKALE.sol";

contract TestHelloSKALE {

  function testItStoresAValue() public {
    HelloSKALE helloSKALE = HelloSKALE(DeployedAddresses.HelloSKALE());

    helloSKALE.setName("SKALE Innovator");

    string expected = "Hello SKALE Innovator!";

    Assert.equal(helloSKALE.get(), expected, "It should welcome SKALE Innovator");
  }

}