// SPDX-License-Identifier: ISC

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

import "../Cash.sol";

contract Treasury is AccessControl {
    using SafeMath for uint256;

    bytes32 public constant ADMIN = keccak256("ADMIN");
    bytes32 public constant CASH_SPENDER = keccak256("CASH_SPENDER");

    address private cashAddress;
    mapping(address => uint256) public balances;

    constructor() {
        _setupRole(ADMIN, msg.sender);
        _setRoleAdmin(CASH_SPENDER, ADMIN);
    }

    function setCashAddress(address _cashAddress) public onlyAdmin {
        cashAddress = _cashAddress;
    }

    function setCashSpender(address _who) public onlyAdmin {
        grantRole(CASH_SPENDER, _who);
    }

    function depositCash(uint256 _amount) public {
        require(Cash(cashAddress).balanceOf(msg.sender) >= _amount, "Insufficient funds");

        Cash(cashAddress).transferFrom(msg.sender, address(this), _amount);
        balances[msg.sender] = balances[msg.sender].add(_amount);
    }

    function depositCashTo(address _who, uint256 _amount) public {
        require(Cash(cashAddress).balanceOf(msg.sender) >= _amount, "Insufficient funds");

        Cash(cashAddress).transferFrom(msg.sender, address(this), _amount);
        balances[_who] = balances[_who].add(_amount);
    }

    function spendCash(address _who, uint256 _amount) public onlyCashSpender {
        require(balances[_who] >= _amount);

        balances[_who] = balances[_who].sub(_amount);

        Cash(cashAddress).burn(_amount);
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
