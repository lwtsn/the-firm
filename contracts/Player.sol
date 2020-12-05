pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./Cash.sol";

contract Player is Ownable {

    mapping(address => bool) private accounts;
    mapping(address => uint256) private balance;

    address private cash;

    function setCash(address _cashAddress) onlyOwner public {
        cash = _cashAddress;
    }

    function create() public {
        require(isPlayer(msg.sender) == false, "Account already exists");

        accounts[msg.sender] = true;
    }

    function depositCash(uint256 _amount) hasAccount(msg.sender) public {
        IERC20(cash).transferFrom(msg.sender, address(this), _amount);
    }

    function isPlayer(address _who) public view returns (bool) {
        return accounts[_who];
    }

    function getBalance(address _who) public view returns (uint256) {
        return balance[_who];
    }

    modifier hasAccount(address _who) {
        require(isPlayer(_who), "Account does not exist");
        _;
    }
}
