pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Cash is ERC20 {
    constructor() public ERC20("CASH", "CA$H") {}

    function burn(uint256 _amount) public {
        _burn(msg.sender, _amount);
    }

    function mint(address _who, uint256 _amount) public {
        _mint(_who, _amount);
    }
}
