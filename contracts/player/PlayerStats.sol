// SPDX-License-Identifier: ISC

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

//https://thatsallgames.com/2019/02/05/the-anatomy-of-rpgs-part-1-stats/
contract PlayerStats is AccessControl {
    using SafeMath for uint256;

    event PlayerBattleStatsUpdated (
        address who,
        uint256 strengthIncrease,
        uint256 dexterityIncrease,
        uint256 defenceIncrease,
        uint256 constitutionIncrease
    );

    event PlayerFarmingStatsUpdated (
        address who,
        uint256 degeneracyIncrease,
        uint256 chadaryIncrease,
        uint256 unrekableIncrease
    );

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
        uint256 chadary; // Necessary for higher "Legitimate" jobs but you earn more in "Degenerate" jobs
        uint256 degeneracy; // Necessary for higher "Degenerate" jobs but you earn more in "Criminal" jobs
        uint256 unrekable; // Necessary for higher "Criminal" jobs but you earn more in "Legitimate" jobs
    }

    mapping(address => Stats) playerStats;
    address public playerManager;

    bytes32 public constant ADMIN = keccak256("ADMIN");
    bytes32 public constant PLAYER_MANAGER = keccak256("PLAYER_MANAGER");

    constructor() {
        _setupRole(ADMIN, msg.sender);
        _setRoleAdmin(PLAYER_MANAGER, ADMIN);
    }

    function setPlayerManager(address _playerManager) public onlyAdmin {
        grantRole(PLAYER_MANAGER, _playerManager);
    }

    function createBasePlayer(address _who) public onlyNewPlayer(_who) onlyPlayerManager {
        uint256 defaultBattleStats = 20 * 1 ether;

        BattleStats memory battleStats = BattleStats({
        baseStrength : defaultBattleStats,
        baseDexterity : defaultBattleStats,
        baseDefence : defaultBattleStats,
        baseConstitution : defaultBattleStats
        });

        FarmingStats memory farmingStats = FarmingStats({degeneracy : 0, chadary : 0, unrekable : 0});

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

    function getPlayerStats(address _who)
    public
    view
    returns (
        uint256 level,
        uint256 experience,
        uint256 baseHealth,
        uint256 currentHealth,
        bool isPlayer
    )
    {
        Stats memory stats = playerStats[_who];
        return (stats.level, stats.experience, stats.baseHealth, stats.currentHealth, stats.isPlayer);
    }

    function getPlayerBattleStats(address _who)
    public
    view
    returns (
        uint256 baseStrength,
        uint256 baseDexterity,
        uint256 baseDefence,
        uint256 baseConstitution
    )
    {
        BattleStats memory stats = playerStats[_who].battleStats;

        return (stats.baseStrength, stats.baseDexterity, stats.baseDefence, stats.baseConstitution);
    }

    function getPlayerFarmingStats(address _who)
    public
    view
    returns (
        uint256 _degeneracy,
        uint256 _chadary,
        uint256 _unrekable
    )
    {
        FarmingStats memory stats = playerStats[_who].farmingStats;

        return (stats.degeneracy, stats.chadary, stats.unrekable);
    }

    function increaseFarmingStats(
        address _who,
        uint256 _chadary,
        uint256 _degeneracy,
        uint256 _unrekable
    ) public onlyPlayerManager existingPlayer(_who) {
        emit PlayerFarmingStatsUpdated(_who, _chadary, _degeneracy, _unrekable);

        playerStats[_who].farmingStats.chadary = playerStats[_who].farmingStats.chadary.add(_chadary);
        playerStats[_who].farmingStats.degeneracy = playerStats[_who].farmingStats.degeneracy.add(_degeneracy);
        playerStats[_who].farmingStats.unrekable = playerStats[_who].farmingStats.unrekable.add(_unrekable);
    }

    function increaseBattleStats(
        address _who,
        uint256 _strength,
        uint256 _dexterity,
        uint256 _defence,
        uint256 _constitution
    ) public onlyPlayerManager existingPlayer(_who) {
        emit PlayerBattleStatsUpdated(_who, _strength, _dexterity, _defence, _constitution);

        playerStats[_who].battleStats.baseStrength = playerStats[_who].battleStats.baseStrength.add(_strength);
        playerStats[_who].battleStats.baseDexterity = playerStats[_who].battleStats.baseDexterity.add(_dexterity);
        playerStats[_who].battleStats.baseDefence = playerStats[_who].battleStats.baseDefence.add(_defence);
        playerStats[_who].battleStats.baseConstitution = playerStats[_who].battleStats.baseConstitution.add(
            _constitution
        );
    }

    modifier onlyNewPlayer(address _who) {
        require(playerStats[_who].isPlayer == false, "Player already exists");
        _;
    }

    modifier existingPlayer(address _who) {
        require(playerStats[_who].isPlayer, "Player doesn't exist");
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
