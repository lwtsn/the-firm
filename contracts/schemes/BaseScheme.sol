// SPDX-License-Identifier: ISC

pragma solidity ^0.8.0;

import "../utils/Random.sol";
import "../Cash.sol";
import "../player/Treasury.sol";
import "../player/Player.sol";

abstract contract BaseScheme {
    event SchemeStarted(string name, address who, uint256 when);
    event SchemeCompleted(string name, address who, uint256 when);

    uint256 public duration;
    uint256 internal experience;
    uint256 internal successChance;

    constructor(
        uint256 _duration,
        uint256 _experience,
        uint256 _successChance
    ) {
        duration = _duration;
        experience = _experience;
        successChance = _successChance;
    }

    function start(address _who) public virtual {
        emit SchemeStarted(getSchemeName(), _who, block.timestamp);
    }

    function complete(address _who) public virtual onlySchemeManager {}

    function getSchemeName() internal pure virtual returns (string memory) {
        return "";
    }

//    function getSuccessGauge() internal virtual returns (uint256 _successGauge) {
//        return Random(randomNumberGenerator).random(100);
//    }

//    function increaseStats(
//        address _who,
//        uint256 _chadary,
//        uint256 _degeneracy,
//        uint256 _unrekable
//    ) internal {
//        PlayerStats(playerStatsAddress).increaseFarmingStats(_who, _chadary, _degeneracy, _unrekable);
//    }

//    function mint(address _who, uint256 _amount) internal {
//        Cash(cashContract).mint(address(this), _amount);
//        Treasury(treasuryAddress).depositCashTo(_who, _amount);
//    }

    function getScheme() public view returns (uint256 _duration, string memory _name) {
        return (duration, getSchemeName());
    }

    modifier onlySchemeManager() {
        require(true);
        _;
    }
}
