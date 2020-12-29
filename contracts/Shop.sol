pragma solidity ^0.6.0;

import "@openzeppelin/contracts/access/Ownable.sol";

import "./item/ItemBase.sol";
import "./player/Treasury.sol";

contract Shop is Ownable {
    using SafeMath for uint256;

    address treasuryContract;

    struct Item {
        uint256 price;
        uint256 listPointer;
    }

    mapping(address => Item) public itemStructs;
    address[] public itemList;

    function setTreasuryContract(address _treasuryContractAddress) public {
        treasuryContract = _treasuryContractAddress;
    }

    function list(address _itemAddress, uint256 _itemPrice) public {
        require(false == isEntity(_itemAddress), "Item already exists");

        itemStructs[_itemAddress] = Item({price: _itemPrice, listPointer: itemList.length});

        itemList.push(_itemAddress);
    }

    function update(address _itemAddress, uint256 _itemPrice) public {
        require(isEntity(_itemAddress), "Item not found");

        itemStructs[_itemAddress].price = _itemPrice;
    }

    function remove(address _itemAddress) public {
        require(isEntity(_itemAddress), "Item not found");

        uint256 rowToDelete = itemStructs[_itemAddress].listPointer;

        // If length is  1 or the row to delete is the final row we will just remove the record
        if (itemList.length > 1 && rowToDelete != itemList.length - 1) {
            // last row in list
            address rowToMove = itemList[itemList.length - 1];

            // swap delete row with row ot move
            itemStructs[rowToMove].listPointer = rowToDelete;
        }

        itemList.pop();
        delete itemStructs[_itemAddress];
    }

    function purchase(address _itemAddress, uint256 _amount) public {
        Item memory itemListing = itemStructs[_itemAddress];

        uint256 balance = Treasury(treasuryContract).balances(msg.sender);
        uint256 totalCost = itemListing.price.mul(_amount);

        require(balance >= totalCost, "Not enough funds");

        Treasury(treasuryContract).spendCash(msg.sender, totalCost);
        ItemBase(_itemAddress).mint(msg.sender, _amount);
    }

    function getItemCount() public view returns (uint256 itemCount) {
        return itemList.length;
    }

    function isEntity(address _itemAddress) public view returns (bool) {
        if (itemList.length == 0) {
            return false;
        }

        return itemList[itemStructs[_itemAddress].listPointer] == _itemAddress;
    }

    function getItems() public view returns (address[] memory, uint256[] memory) {
        address[] memory itemAddresses = new address[](itemList.length);
        uint256[] memory itemPrices = new uint256[](itemList.length);

        for (uint256 i = 0; i < itemList.length; i++) {
            itemAddresses[i] = itemList[i];
            itemPrices[i] = itemStructs[itemList[i]].price;
        }

        return (itemAddresses, itemPrices);
    }
}
