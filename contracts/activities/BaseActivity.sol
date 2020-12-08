pragma solidity ^0.6.0;

import "../utils/Random.sol";

contract BaseActivity {

    uint256 public duration;
    uint256 experience;
    uint256 successChance;

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

    function start() virtual public {
    }

    function complete() virtual public {
    }

    function setRandomNumberGenerator(address _randomNumberGenerator) public {
        randomNumberGenerator = _randomNumberGenerator;
    }

    function wasSuccessful() internal virtual {
        uint result = Random(randomNumberGenerator).random(100);
    }

    function getActivity() public view returns (uint256 _duration, uint256 _experience, uint256 _successChance) {
        return (duration, experience, successChance);
    }
}
