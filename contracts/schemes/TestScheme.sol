pragma solidity ^0.6.0;

import "./BaseScheme.sol";

contract TestScheme is BaseScheme {
    uint256 baseEarning;
    uint256 earningBonus;

    constructor(
        uint256 _duration,
        uint256 _experience,
        uint256 _chanceOfSuccess,
        uint256 _baseEarning,
        uint256 _earningBonus
    ) public BaseScheme(_duration, _experience, _chanceOfSuccess) {
        baseEarning = _baseEarning;
        earningBonus = _earningBonus;
    }

    function start(address _who) public override {
        super.start(_who);
    }

    function complete(address _who) public override {
        mint(_who, 33);
    }

    function getSchemeName() internal pure override returns (string memory) {
        return "Yield farm";
    }
}
