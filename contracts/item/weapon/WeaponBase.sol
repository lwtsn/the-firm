// SPDX-License-Identifier: ISC

pragma solidity ^0.8.0;

import "../ItemBase.sol";

contract WeaponBase is ItemBase {

    uint256 public damageBoost;

    constructor(
        string memory _name,
        string memory _symbol,
        uint256 _damageBoost
    ) ItemBase() {
        nextItemId = 0;
        damageBoost = _damageBoost;
    }
}
