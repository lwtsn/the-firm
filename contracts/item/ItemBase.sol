pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// todo add minter
contract ItemBase is ERC721, Ownable {
    event ItemMinted(address who, uint256 amount, uint256 when);

    uint256 nextItemId;

    constructor(string memory name, string memory symbol) public ERC721(name, symbol) {
        nextItemId = 0;
    }

    function mint(address _who, uint256 _amount) public {
        emit ItemMinted(_who, _amount, block.timestamp);

        for (uint256 i = 0; i < _amount; i++) {
            _safeMint(_who, nextItemId);
            nextItemId++;
        }
    }

    // todo this can only be called if they own the item
    function destroy(uint256 itemId) public {
        _burn(itemId);
    }
}
