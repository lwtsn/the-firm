pragma solidity ^0.6.0;

import "../utils/Random.sol";

abstract contract BaseActivity {

    event ActivityStarted(string name, address who, uint256 when);

    uint256 public duration;
    uint256 internal experience;
    uint256 internal successChance;

    address internal randomNumberGenerator;

    constructor(
        uint256 _duration,
        uint256 _experience,
        uint256 _successChance
    ) public {
        duration = _duration;
        experience = _experience;
        successChance = _successChance;
    }

    function setRandomNumberGenerator(address _randomNumberGenerator) public {
        randomNumberGenerator = _randomNumberGenerator;
    }

    function start(address _who) virtual public {
        emit ActivityStarted(getActivityName(), _who, block.timestamp);
    }

    function complete(address _who) onlyActivityManager virtual public {}

    function getActivityName() virtual pure internal returns(string memory) {
        return "";
    }

    function getSuccessGauge() internal virtual returns (uint256 _successGauge) {
        return Random(randomNumberGenerator).random(100);
    }

    function getActivity() public view returns(uint256 _duration, string memory _name) {
        return (duration, getActivityName());
    }

    modifier onlyActivityManager() {
        require(true);
        _;
    }
}
