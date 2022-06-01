// SPDX-License-Identifier: ISC

pragma solidity ^0.8.0;

contract Random {
    uint64 _seed = 23456789876543;

    function random(uint64 upper) public returns (uint256 randomNumber) {
        return uint256(keccak256(abi.encodePacked(block.timestamp, block.coinbase, _seed))) % upper;
    }
}
