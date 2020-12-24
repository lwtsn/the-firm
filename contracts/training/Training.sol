pragma solidity ^0.6.0;

import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "../player/Player.sol";
//import "../player/PlayerStats.sol";

// https://www.investopedia.com/terms/c/continuouscompounding.asp#:~:text=Calculating%20the%20limit%20of%20this,mathematical%20constant%20approximated%20as%202.7183.
contract Training is Ownable {
    using SafeMath for uint256;

    uint8 private constant STRENGTH = 1;
    uint8 private constant DEXTERITY = 2;
    uint8 private constant DEFENCE = 3;
    uint8 private constant CONSTITUTION = 4;

    struct Training {
        uint8 stat;
        uint256 startTime;
        uint256 stopTime;
        bool isTraining;
    }

    enum Duration {ONE_HOUR, TWO_HOURS, FOUR_HOURS, EIGHT_HOURS, TWELVE_HOURS, ONE_DAY, TWO_DAYS, FOUR_DAYS, ONE_WEEK}

    mapping(address => Training) public trainingMapping;
    address private playerStatsAddress;

    function setPlayerStats(address _playerStatsAddress) public {
        playerStatsAddress = _playerStatsAddress;
    }

    function trainStrength(Duration _duration) public {
        train(STRENGTH, _duration);
    }

    function trainDexterity(Duration _duration) public {
        train(DEXTERITY, _duration);
    }

    function trainDefence(Duration _duration) public {
        train(DEFENCE, _duration);
    }

    function trainConstitution(Duration _duration) public {
        train(CONSTITUTION, _duration);
    }

    function train(uint8 _stat, Duration _duration) internal notTraining {

        (uint256 duration, uint8 multiplier) = getDurationAndMultiplier(_duration);

        trainingMapping[msg.sender].stat = _stat;
        trainingMapping[msg.sender].startTime = block.timestamp;
        trainingMapping[msg.sender].stopTime = block.timestamp.add(duration);
        trainingMapping[msg.sender].isTraining = true;
    }

    function finishTraining() public isTraining {
        trainingMapping[msg.sender].stat = 0;
        trainingMapping[msg.sender].startTime = 0;
        trainingMapping[msg.sender].stopTime = 0;
        trainingMapping[msg.sender].isTraining = false;
    }

    function getDurationAndMultiplier(Duration _duration) internal view returns (uint256, uint8) {
        if (Duration.ONE_HOUR == _duration) {
            return (1 hours, 100);
        }
        if (Duration.TWO_HOURS == _duration) {
            return (2 hours, 101);
        }
        if (Duration.FOUR_HOURS == _duration) {
            return (4 hours, 102);
        }
        if (Duration.EIGHT_HOURS == _duration) {
            return (8 hours, 105);
        }
        if (Duration.TWELVE_HOURS == _duration) {
            return (12 hours, 108);
        }
        if (Duration.ONE_DAY == _duration) {
            return (1 days, 115);
        }
        if (Duration.TWO_DAYS == _duration) {
            return (2 days, 120);
        }
        if (Duration.FOUR_DAYS == _duration) {
            return (4 days, 130);
        }
        if (Duration.ONE_WEEK == _duration) {
            return (1 weeks, 145);
        }

        revert("Invalid duration");
    }

    modifier isTraining {
        require(trainingMapping[msg.sender].isTraining, "Training in not progress");
        _;
    }

    modifier notTraining {
        require(false == trainingMapping[msg.sender].isTraining, "Training in progress");
        _;
    }
}
