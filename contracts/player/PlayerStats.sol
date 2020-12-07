pragma solidity ^0.6.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

//https://thatsallgames.com/2019/02/05/the-anatomy-of-rpgs-part-1-stats/
contract PlayerStats is AccessControl {
    using SafeMath for uint256;

    struct Stats {
        uint256 level;
        uint256 experience;
        uint256 baseHealth;
        uint256 currentHealth; // todo need to work out regeneration rate

        uint256 baseStrength; // attack
        uint256 baseDexterity; // speed
        uint256 baseDefence; // defence
        uint256 baseConstitution; // health

        bool isPlayer;
    }

    mapping(address => Stats) playerStats;

    function createBasePlayer(address _who) onlyNewPlayer(_who) onlyPlayerManager public {
        playerStats[_who] = Stats({
        level : 1,
        experience : 0,
        baseHealth : 100,
        currentHealth : 100,
        baseStrength : 20,
        baseDexterity : 20,
        baseDefence : 20,
        baseConstitution : 20,
        isPlayer : true
        });
    }

    function getPlayerStats(address _who) public view returns (
        uint256 level,
        uint256 experience,
        uint256 baseHealth,
        uint256 currentHealth,
        uint256 baseStrength,
        uint256 baseDexterity,
        uint256 baseDefence,
        uint256 baseConstitution,
        bool isPlayer
    ) {
        Stats memory stats = playerStats[_who];
        return (
        stats.level,
        stats.experience,
        stats.baseHealth,
        stats.currentHealth,
        stats.baseStrength,
        stats.baseDexterity,
        stats.baseDefence,
        stats.baseConstitution,
        stats.isPlayer
        );
    }


    modifier onlyPlayerManager() {
        require(1 == 1, "Only player manager");
        _;
    }

    modifier onlyNewPlayer(address _who) {
        require(playerStats[_who].isPlayer == false, "Player already exists");
        _;
    }
}
