// SPDX-License-Identifier: ISC

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

import "./item/ItemBase.sol";
import "./player/Treasury.sol";

contract Shop is Ownable {
    using SafeMath for uint256;

    event ItemAdded(uint256 itemId, uint256 price, uint256 when);
    event ItemUpdated(uint256 itemId, uint256 price, uint256 when);
    event ItemRemoved(uint256 itemId, uint256 when);
    event ItemPurchased(address who, uint256 itemId, uint256 amount, uint256 when);

    address public treasuryContract;
    address public itemContractAddress;

    struct Item {
        uint256 price;
        uint256 listPointer;
    }

    mapping(uint256 => Item) public itemStructs;
    uint256[] public itemList;

    function setTreasuryContract(address _treasuryContractAddress) public onlyOwner {
        treasuryContract = _treasuryContractAddress;
    }

    function setItemContract(address _itemContractAddress) public onlyOwner {
        itemContractAddress = _itemContractAddress;
    }

    function list(uint256 _itemId, uint256 _itemPrice) public onlyOwner {
        require(false == isEntity(_itemId), "Item already exists");

        itemStructs[_itemId] = Item({price : _itemPrice, listPointer : itemList.length});

        itemList.push(_itemId);

        emit ItemAdded(_itemId, _itemPrice, block.timestamp);
    }

    function update(uint256 _itemId, uint256 _itemPrice) public onlyOwner {
        require(isEntity(_itemId), "Item not found");

        itemStructs[_itemId].price = _itemPrice;

        emit ItemUpdated(_itemId, _itemPrice, block.timestamp);
    }

    function remove(uint256 _itemId) public onlyOwner {
        require(isEntity(_itemId), "Item not found");

        uint256 rowToDelete = itemStructs[_itemId].listPointer;

        // If length is  1 or the row to delete is the final row we will just remove the record
        if (itemList.length > 1 && rowToDelete != itemList.length - 1) {
            // last row in list
            uint256 rowToMove = itemList[itemList.length - 1];

            // swap delete row with row ot move
            itemStructs[rowToMove].listPointer = rowToDelete;
        }

        itemList.pop();
        delete itemStructs[_itemId];

        emit ItemRemoved(_itemId, block.timestamp);
    }

    function purchase(uint256 _itemId, uint256 _amount) public {
        Item memory itemListing = getItem(_itemId);

        uint256 totalCost = itemListing.price.mul(_amount);

        Treasury(treasuryContract).spendCash(msg.sender, totalCost);

        ItemBase(itemContractAddress).mint(msg.sender, _itemId, _amount);

        emit ItemPurchased(msg.sender, _itemId, _amount, block.timestamp);
    }

    function getItemCount() public view returns (uint256 itemCount) {
        return itemList.length;
    }

    function isEntity(uint256 _itemId) public view returns (bool) {
        if (itemList.length == 0) {
            return false;
        }

        return itemList[itemStructs[_itemId].listPointer] == _itemId;
    }

    function getItems() public view returns (uint256[] memory, uint256[] memory) {
        uint256[] memory itemIds = new uint256[](itemList.length);
        uint256[] memory itemPrices = new uint256[](itemList.length);

        for (uint256 i = 0; i < itemList.length; i++) {
            itemIds[i] = i;
            itemPrices[i] = itemStructs[itemList[i]].price;
        }

        return (itemIds, itemPrices);
    }

    function getItem(uint256 _itemId) public view returns (Item memory) {
        return itemStructs[_itemId];
    }
}
