pragma solidity >=0.4.21 <0.7.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/skale/HelloSKALE.sol";

contract TestHelloSKALE {

  function testItStoresAValue() public {
    HelloSKALE helloSKALE = HelloSKALE(DeployedAddresses.HelloSKALE());

    helloSKALE.setName("SKALE Innovator");

    string memory expected = "Hello SKALE Innovator!";

    Assert.equal(helloSKALE.sayHello(), expected, "It should welcome SKALE Innovator");
  }

}