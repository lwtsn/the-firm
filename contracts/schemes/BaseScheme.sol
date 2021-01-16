pragma solidity ^0.6.0;

import "../utils/Random.sol";
import "../Cash.sol";
import "../player/Treasury.sol";
import "../player/Player.sol";

abstract contract BaseScheme {
    uint256 constant MAX_UINT = 2**256 - 1;

    event SchemeStarted(string name, address who, uint256 when);
    event SchemeCompleted(string name, address who, uint256 when);

    uint256 public duration;
    uint256 internal experience;
    uint256 internal successChance;

    address internal randomNumberGenerator;
    address internal cashContract;
    address internal treasuryAddress;
    address internal playerStatsAddress;

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

    function setCashContract(address _cashContractAddress) public {
        cashContract = _cashContractAddress;
        Cash(cashContract).approve(treasuryAddress, MAX_UINT);
    }

    function setTreasury(address _treasuryAddress) public {
        treasuryAddress = _treasuryAddress;
    }

    function setPlayerStats(address _playerStatsAddress) public {
        playerStatsAddress = _playerStatsAddress;
    }

    function start(address _who) public virtual {
        emit SchemeStarted(getSchemeName(), _who, block.timestamp);
    }

    function complete(address _who) public virtual onlySchemeManager {}

    function getSchemeName() internal pure virtual returns (string memory) {
        return "";
    }

    function getSuccessGauge() internal virtual returns (uint256 _successGauge) {
        return Random(randomNumberGenerator).random(100);
    }

    function increaseStats(
        address _who,
        uint256 _chadary,
        uint256 _degeneracy,
        uint256 _unrekable
    ) internal {
        PlayerStats(playerStatsAddress).increaseFarmingStats(_who, _chadary, _degeneracy, _unrekable);
    }

    function mint(address _who, uint256 _amount) internal {
        Cash(cashContract).mint(address(this), _amount);
        Treasury(treasuryAddress).depositCashTo(_who, _amount);
    }

    function getScheme() public view returns (uint256 _duration, string memory _name) {
        return (duration, getSchemeName());
    }

    modifier onlySchemeManager() {
        require(true);
        _;
    }
}
