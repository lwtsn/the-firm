pragma solidity ^0.6.0;

import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

import "../player/Player.sol";
import "../player/PlayerStats.sol";

// https://www.investopedia.com/terms/c/continuouscompounding.asp#:~:text=Calculating%20the%20limit%20of%20this,mathematical%20constant%20approximated%20as%202.7183.
contract Training is Ownable {
    using SafeMath for uint256;

    uint8 public constant BASE_STAT_MULTIPLIER = 3; // 0.03

    struct Training {
        Stat stat;
        uint256 startTime;
        uint256 stopTime;
        Duration duration;
        bool isTraining;
    }

    enum Stat {NONE, STRENGTH, DEXTERITY, DEFENCE, CONSTITUTION}

    enum Duration {ONE_HOUR, TWO_HOURS, FOUR_HOURS, EIGHT_HOURS, TWELVE_HOURS, ONE_DAY, TWO_DAYS, FOUR_DAYS, ONE_WEEK}

    mapping(address => Training) public trainingMapping;
    address private playerStatsAddress;

    function setPlayerStats(address _playerStatsAddress) public {
        playerStatsAddress = _playerStatsAddress;
    }

    function start(Stat _stat, Duration _duration) public notTraining {
        require(Stat.NONE != _stat, "This is not a real stat");

        (uint256 duration,) = getDurationAndMultiplier(_duration);

        trainingMapping[msg.sender].stat = _stat;
        trainingMapping[msg.sender].startTime = block.timestamp;
        trainingMapping[msg.sender].stopTime = block.timestamp.add(duration);
        trainingMapping[msg.sender].duration = _duration;
        trainingMapping[msg.sender].isTraining = true;
    }

    function finish() public isTraining {
        if (Stat.STRENGTH == trainingMapping[msg.sender].stat) {
            (uint256 strength, , ,) = PlayerStats(playerStatsAddress).getPlayerBattleStats(msg.sender);

            PlayerStats(playerStatsAddress).increaseBattleStats(
                msg.sender,
                calculateStatIncrease(strength, trainingMapping[msg.sender].duration),
                0,
                0,
                0
            );
        }

        if (Stat.DEXTERITY == trainingMapping[msg.sender].stat) {
            (, uint256 dexterity, ,) = PlayerStats(playerStatsAddress).getPlayerBattleStats(msg.sender);

            PlayerStats(playerStatsAddress).increaseBattleStats(
                msg.sender,
                0,
                calculateStatIncrease(dexterity, trainingMapping[msg.sender].duration),
                0,
                0
            );
        }

        if (Stat.DEFENCE == trainingMapping[msg.sender].stat) {
            (, , uint256 defence,) = PlayerStats(playerStatsAddress).getPlayerBattleStats(msg.sender);

            PlayerStats(playerStatsAddress).increaseBattleStats(
                msg.sender,
                0,
                0,
                calculateStatIncrease(defence, trainingMapping[msg.sender].duration),
                0
            );
        }

        if (Stat.CONSTITUTION == trainingMapping[msg.sender].stat) {
            (, , , uint256 constitution) = PlayerStats(playerStatsAddress).getPlayerBattleStats(msg.sender);

            PlayerStats(playerStatsAddress).increaseBattleStats(
                msg.sender,
                0,
                0,
                0,
                calculateStatIncrease(constitution, trainingMapping[msg.sender].duration)
            );
        }

        resetTraining(msg.sender);
    }

    function calculateStatIncrease(uint256 _initialStat, Duration _duration) public view returns (uint256) {
        (uint256 duration, uint256 durationMultiplier) = getDurationAndMultiplier(_duration);

        uint256 numHours = duration / 1 hours;

        // take base multiplier and times by the duration multiplier
        uint256 multiplier = (BASE_STAT_MULTIPLIER * durationMultiplier);

        uint256 gainPerHour = (_initialStat / 1000000) * multiplier;

        return gainPerHour * numHours;
    }

    function resetTraining(address _who) internal {
        trainingMapping[msg.sender].stat = Stat.NONE;
        trainingMapping[msg.sender].startTime = 0;
        trainingMapping[msg.sender].stopTime = 0;
        trainingMapping[msg.sender].isTraining = false;
    }

    function getDurationAndMultiplier(Duration _duration) internal view returns (uint256, uint256) {
        if (Duration.ONE_HOUR == _duration) {
            return (1 hours, 100);
        }
        if (Duration.TWO_HOURS == _duration) {
            return (2 hours, 100);
        }
        if (Duration.FOUR_HOURS == _duration) {
            return (4 hours, 102);
        }
        if (Duration.EIGHT_HOURS == _duration) {
            return (8 hours, 104);
        }
        if (Duration.TWELVE_HOURS == _duration) {
            return (12 hours, 106);
        }
        if (Duration.ONE_DAY == _duration) {
            return (1 days, 108);
        }
        if (Duration.TWO_DAYS == _duration) {
            return (2 days, 110);
        }
        if (Duration.FOUR_DAYS == _duration) {
            return (4 days, 120);
        }
        if (Duration.ONE_WEEK == _duration) {
            return (1 weeks, 125);
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
