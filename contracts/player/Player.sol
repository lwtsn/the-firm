pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

import "./PlayerStats.sol";

contract Player is AccessControl {
    using SafeMath for uint256;

    event PlayerCreated(address _who, uint256 _when);

    mapping(address => bool) private accounts;

    address private playerStats;

    bytes32 public constant ADMIN = keccak256("ADMIN");

    constructor() public {
        _setupRole(ADMIN, msg.sender);
    }

    function setPlayerStatsAddress(address _playerStats) public onlyAdmin {
        playerStats = _playerStats;
    }

    function create() public {
        require(isPlayer(msg.sender) == false, "Account already exists");

        accounts[msg.sender] = true;

        PlayerStats(playerStats).createBasePlayer(msg.sender);

        emit PlayerCreated(msg.sender, block.timestamp);
    }

    function isPlayer(address _who) public view returns (bool) {
        return accounts[_who];
    }

    modifier onlyAdmin() {
        require(hasRole(ADMIN, msg.sender), "Not Admin");
        _;
    }

    modifier hasAccount(address _who) {
        require(isPlayer(_who), "Account does not exist");
        _;
    }
}
