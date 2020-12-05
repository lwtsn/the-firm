pragma solidity ^0.6.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./item/ItemRegister.sol";
import "./item/ItemBase.sol";
import "./Player.sol";

contract Shop is Ownable {
    struct Item {
        uint256 price;
    }

    mapping(address => Item) internal items;

    address itemRegister;
    address playerContract;

    function purchase(address _itemAddress, uint256 _amount) public {
        Item memory itemListing = items[_itemAddress];
        uint256 balance = Player(playerContract).getBalance(msg.sender);

        require(balance >= itemListing.price, "Not enough funds");



        ItemBase(_itemAddress).mint(msg.sender, _amount);
    }

    function list(address _itemAddress, uint256 _price) onlyOwner public {
        items[_itemAddress] = Item({
        price : _price
        });
    }

    function getItem(address _itemAddress) view public returns (uint256 price) {
        return items[_itemAddress].price;
    }

    function setItemRegister(address _itemRegisterAddress) public {
        itemRegister = _itemRegisterAddress;
    }

    function setPlayerContract(address _playerContractAddress) public {
        playerContract = _playerContractAddress;
    }
}
