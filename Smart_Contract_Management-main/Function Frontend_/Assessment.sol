// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// import "hardhat/console.sol";

contract Assessment {
    uint public count = 0;
    
    function increaseCount() public returns(uint256){
        count += 1;
        return count;
    }

    function decreaseCount() public returns(uint256){
        count -= 1;
        return count;
    }
    
}
