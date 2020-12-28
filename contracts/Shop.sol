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

    function isEntity(address _itemAddress) public view returns (bool isIndeed) {
        if (itemList.length == 0) {
            return false;
        }

        return (itemList[itemStructs[_itemAddress].listPointer] == _itemAddress);
    }

    function getItemCount() public view returns (uint256 itemCount) {
        return itemList.length;
    }

    function list(address _itemAddress, uint256 _itemPrice) public {
        require(false == isEntity(_itemAddress));

        itemStructs[_itemAddress] = Item({
        price : _itemPrice,
        listPointer : itemList.length
        });

        itemList.push(_itemAddress);
    }

    function updateItem(address _itemAddress, uint256 _itemPrice) public {
        require(isEntity(_itemAddress));

        itemStructs[_itemAddress].price = _itemPrice;
    }

    function deleteItem(address _itemAddress) public {
        require(isEntity(_itemAddress));

        uint256 rowToDelete = itemStructs[_itemAddress].listPointer;
        address keyToMove = itemList[itemList.length - 1];

        itemList[rowToDelete] = keyToMove;
        itemStructs[keyToMove].listPointer = rowToDelete;
    }

    function purchase(address _itemAddress, uint256 _amount) public {
        Item memory itemListing = itemStructs[_itemAddress];
        uint256 balance = Treasury(treasuryContract).balances(msg.sender);

        require(balance >= (itemListing.price.mul(_amount)), "Not enough funds");

        ItemBase(_itemAddress).mint(msg.sender, _amount);
    }

    function setTreasuryContract(address _treasuryContractAddress) public {
        treasuryContract = _treasuryContractAddress;
    }
}
