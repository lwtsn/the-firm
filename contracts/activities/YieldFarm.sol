pragma solidity ^0.6.0;

import "./BaseActivity.sol";
import "../Cash.sol";

contract YieldFarm is BaseActivity {

    address cashAddress;
    uint256 baseEarning;
    uint256 earningBonus;

    constructor(
        uint256 _duration,
        uint256 _experience,
        uint256 _chanceOfSuccess,
        uint256 _baseEarning,
        uint256 _earningBonus
    ) BaseActivity(
        _duration,
        _experience,
        _chanceOfSuccess
    ) public {
        baseEarning = _baseEarning;
        earningBonus = _earningBonus;
    }

    function start(address _who) override public {
        super.start(_who);
    }

    function complete(address _who) override public {
        uint256 successGauge = getSuccessGauge();

        if (successChance >= successGauge) {
            Cash(cashAddress).mint(_who, baseEarning);
        } else {

        }
    }

    function getActivityName() override pure internal returns (string memory) {
        return "Yield farm";
    }
}
