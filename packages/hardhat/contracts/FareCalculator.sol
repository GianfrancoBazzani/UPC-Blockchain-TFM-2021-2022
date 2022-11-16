// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

abstract contract FareCalculator {
    function evaluate(
        uint256 start_,
        uint256 stop_,
        uint256 occupancy_,
        address userAddress_,
        address contractAddress_
    ) public virtual returns (uint256);
}

contract Fare1 is FareCalculator {
    function evaluate(
        uint256 start_,
        uint256 stop_,
        uint256, /*occupancy_*/
        address, /*userAddress_*/
        address /*contractAddress_*/
    ) public pure override returns (uint256) {
        return stop_ - start_;
    }
}

contract Fare2 is FareCalculator {
    function evaluate(
        uint256 start_,
        uint256 stop_,
        uint256 occupancy_,
        address, /*userAddress_*/
        address /*contractAddress_*/
    ) public pure override returns (uint256) {
        uint256 cost = 1000;
        uint256 elapsedTime = stop_ - start_;
        if (occupancy_ < 100) {
            cost += 10 * elapsedTime;
        } else {
            cost += 20 * elapsedTime;
        }
        return cost;
    }
}
