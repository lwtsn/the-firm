pragma solidity ^0.6.0;

import "../ItemBase.sol";

contract WeaponBase is ItemBase {

    uint256 public damageBoost;

    constructor(
        string memory _name,
        string memory _symbol,
        uint256 _damageBoost
    ) public ItemBase(_name, _symbol) {
        nextItemId = 0;
        damageBoost = _damageBoost;
    }
}
