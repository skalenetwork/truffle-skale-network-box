// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

/**
 * Please refer to the following SKALE Network Getting Started Guide:
 * https://skale.network/docs/developers/getting-started/beginner
 */
contract HelloSKALE {
    string public storedName;

    function setName(string memory name) public {
        storedName = name;
    }

    function sayHello() public view returns (string memory) {
        return string(abi.encodePacked("Hello ", storedName, "!"));
    }
}