pragma solidity ^0.6.0;

import "./BaseScheme.sol";

contract ScroungeForSatochis is BaseScheme {
    // after a long afternoon messaging all your favourite twitter frogs, you manage to collect x coins
    // while trawling through your favourite crypto lists you notice an airdrop for a new coin, quickly you fomo in and market sell the drop for x coins
    // it's been a long day, your fingers hurt from messaging everyone on your twitter feed, still not one statochi to show for it

    address cashAddress;
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
}
