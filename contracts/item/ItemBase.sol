// SPDX-License-Identifier: ISC

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// todo add minter
contract ItemBase is ERC1155, Ownable {
    event ItemMinted(address who, uint256 amount, uint256 when);

    uint256 public nextItemId = 0;

    struct Item {
        string name;
    }

    mapping(uint256 => Item) items;

    constructor() ERC1155("https://game.example/api/item/{id}.json") {}

    function mint(address _who, uint256 _id, uint256 _amount) public {
        emit ItemMinted(_who, _amount, block.timestamp);

        super._mint(_who, _id, _amount, "");
    }

    // todo this can only be called if they own the item
    function destroy(address _who, uint256 _itemId, uint256 _amount) public {
        _burn(_who, _itemId, _amount);
    }

    function createNewItem(string memory _name) public onlyOwner returns (uint256 itemId) {
        items[nextItemId] = Item({
        name : _name
        });

        nextItemId += 1;

    return nextItemId;
    }

    function viewItem(uint256 _itemId) public view returns (Item memory) {
        return (
        items[_itemId]
        );
    }
}
