pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

import "../Cash.sol";

contract Player is AccessControl {
    using SafeMath for uint256;

    mapping(address => bool) private accounts;
    mapping(address => uint256) private balances;

    address private cashAddress;
    address private playerStats;

    bytes32 public constant ADMIN = keccak256("ADMIN");
    bytes32 public constant CASH_SPENDER = keccak256("CASH_SPENDER");

    constructor() public {
        _setupRole(ADMIN, msg.sender);
        _setRoleAdmin(CASH_SPENDER, ADMIN);
    }

    function setCashAddress(address _cashAddress) onlyAdmin public {
        cashAddress = _cashAddress;
    }

    function setPlayerStatsAddress(address _playerStats) onlyAdmin public {
        playerStats = _playerStats;
    }

    function setCashSpender(address _who) onlyAdmin public {
        grantRole(CASH_SPENDER, _who);
    }

    function create() public {
        require(isPlayer(msg.sender) == false, "Account already exists");

        accounts[msg.sender] = true;
        balances[msg.sender] = 0;
    }

    function depositCash(uint256 _amount) hasAccount(msg.sender) public {
        require(Cash(cashAddress).balanceOf(msg.sender) >= _amount, "Insufficient funds");

        Cash(cashAddress).transferFrom(msg.sender, address(this), _amount);
        balances[msg.sender] = balances[msg.sender].add(_amount);
    }

    function spendCash(address _who, uint256 _amount) public onlyCashSpender {
        require(balances[_who] >= _amount);

        balances[_who] = balances[_who].sub(_amount);

        Cash(cashAddress).burn(_amount);
    }

    function isPlayer(address _who) public view returns (bool) {
        return accounts[_who];
    }

    function getBalance(address _who) public view returns (uint256) {
        return balances[_who];
    }

    modifier hasAccount(address _who) {
        require(isPlayer(_who), "Account does not exist");
        _;
    }

    modifier onlyAdmin() {
        require(hasRole(ADMIN, msg.sender), "Not Admin");
        _;
    }

    modifier onlyCashSpender() {
        require(hasRole(CASH_SPENDER, msg.sender), "Not Cash Spender");
        _;
    }
}
