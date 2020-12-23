pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract Cash is AccessControl, ERC20 {
    bytes32 public constant ADMIN = keccak256("ADMIN");
    bytes32 public constant CASH_MINTER = keccak256("CASH_MINTER");

    constructor() public ERC20("CASH", "CA$H") {
        _setupRole(ADMIN, msg.sender);
        _setRoleAdmin(CASH_MINTER, ADMIN);
    }

    function mint(address _who, uint256 _amount) public onlyCashMinter {
        super._mint(_who, _amount);
    }

    function burn(uint256 _amount) public {
        super._burn(msg.sender, _amount);
    }

    function setCashMinter(address _who) public onlyAdmin {
        grantRole(CASH_MINTER, _who);
    }

    modifier onlyAdmin() {
        require(hasRole(ADMIN, msg.sender), "Not Admin");
        _;
    }

    modifier onlyCashMinter() {
        require(hasRole(CASH_MINTER, msg.sender), "Not Cash Minter");
        _;
    }
}
