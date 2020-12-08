pragma solidity ^0.6.0;

import "./BaseActivity.sol";

contract YieldFarm is BaseActivity {

    uint256 baseEarning;
    uint256 earningBonus;

    constructor(uint256 duration, uint256 experience, uint256 successChance) BaseActivity(
        duration,
        experience,
        successChance
    ) public {}


}
