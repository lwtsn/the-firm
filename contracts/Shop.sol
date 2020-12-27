pragma solidity ^0.6.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./item/ItemBase.sol";
import "./player/Treasury.sol";

contract Shop is Ownable {
    struct Item {
        uint256 price;
    }

    mapping(address => Item) internal items;

    address treasuryContract;

    function purchase(address _itemAddress, uint256 _amount) public {
        Item memory itemListing = items[_itemAddress];
        uint256 balance = Treasury(treasuryContract).getBalance(msg.sender);

        require(balance >= itemListing.price, "Not enough funds");

        ItemBase(_itemAddress).mint(msg.sender, _amount);
    }

    function getItem(address _itemAddress) public view returns (uint256 price) {
        return items[_itemAddress].price;
    }

    function list(address _itemAddress, uint256 _price) public onlyOwner {
        items[_itemAddress] = Item({price: _price});
    }

    function setPlayerContract(address _treasuryContractAddress) public {
        treasuryContract = _treasuryContractAddress;
    }
}
