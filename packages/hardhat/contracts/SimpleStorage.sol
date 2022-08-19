// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract SimpleStorage {
    uint256 storedValue; // we are storing 256 bits on blockchain

    //The function view (view) not modify State.

    function getStoredValue() public view returns (uint256) {
        return storedValue; //storedvalue believe when run Deploy
    }

    function setStoredValue(uint256 newValue) public {
        storedValue = newValue;
    }
} //End of  SC SimpleStorage
