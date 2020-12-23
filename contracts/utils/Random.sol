pragma solidity ^0.6.0;

contract Random {
    uint64 _seed = 23456789876543;

    function random(uint64 upper) public returns (uint256 randomNumber) {
        return uint256(keccak256(abi.encodePacked(now, block.coinbase, _seed))) % upper;
    }
}
