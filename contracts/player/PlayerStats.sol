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
        bool isPlayer;
        BattleStats battleStats;
        FarmingStats farmingStats;
    }

    struct BattleStats {
        uint256 baseStrength; // attack
        uint256 baseDexterity; // speed
        uint256 baseDefence; // defence
        uint256 baseConstitution; // health
    }

    struct FarmingStats {
        uint256 degeneracy; // Higher gains
        uint256 chadary; // Chance to succeed
        uint256 fomostition; // Higher losses
        uint256 rugpullable; // Chance to fail
    }

    mapping(address => Stats) playerStats;
    address public playerManager;

    bytes32 public constant ADMIN = keccak256("ADMIN");
    bytes32 public constant PLAYER_MANAGER = keccak256("PLAYER_MANAGER");

    constructor() public {
        _setupRole(ADMIN, msg.sender);
        _setRoleAdmin(PLAYER_MANAGER, ADMIN);
    }

    function setPlayerManager(address _playerManager) onlyAdmin public {
        grantRole(PLAYER_MANAGER, _playerManager);
    }

    function createBasePlayer(address _who) onlyNewPlayer(_who) onlyPlayerManager public {
        BattleStats memory battleStats = BattleStats({
        baseStrength : 20,
        baseDexterity : 20,
        baseDefence : 20,
        baseConstitution : 20
        });

        FarmingStats memory farmingStats = FarmingStats({
        degeneracy : 0,
        chadary : 0,
        fomostition : 0,
        rugpullable : 0
        });

        playerStats[_who] = Stats({
        level : 1,
        experience : 0,
        baseHealth : 100,
        currentHealth : 100,
        battleStats : battleStats,
        farmingStats : farmingStats,
        isPlayer : true
        });
    }

    function getPlayerStats(address _who) public view returns (
        uint256 level,
        uint256 experience,
        uint256 baseHealth,
        uint256 currentHealth,
        bool isPlayer
    ) {
        Stats memory stats = playerStats[_who];
        return (
        stats.level,
        stats.experience,
        stats.baseHealth,
        stats.currentHealth,
        stats.isPlayer
        );
    }

    function getPlayerBattleStats(address _who) public view returns (
        uint256 baseStrength,
        uint256 baseDexterity,
        uint256 baseDefence,
        uint256 baseConstitution
    ) {
        BattleStats memory stats = playerStats[_who].battleStats;

        return (
        stats.baseStrength,
        stats.baseDexterity,
        stats.baseDefence,
        stats.baseConstitution
        );
    }

    modifier onlyNewPlayer(address _who) {
        require(playerStats[_who].isPlayer == false, "Player already exists");
        _;
    }

    modifier onlyPlayerManager() {
        require(hasRole(PLAYER_MANAGER, msg.sender), "Not Player Manager");
    _;
    }

    modifier onlyAdmin() {
        require(hasRole(ADMIN, msg.sender), "Not Admin");
        _;
    }
}
