pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Cash is ERC20 {
    constructor() public ERC20("CASH", "CA$H") {}
}
