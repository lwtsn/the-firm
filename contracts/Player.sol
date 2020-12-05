pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract Player {

    mapping(address => bool) private accounts;

    function create() public {
        require(accounts[msg.sender] == false, "Account already exists");
    }
}
