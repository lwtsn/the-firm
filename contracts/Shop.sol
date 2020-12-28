pragma solidity ^0.6.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./item/ItemBase.sol";
import "./player/Treasury.sol";

contract Shop is Ownable {
    using SafeMath for uint256;

    struct Item {
        uint256 price;
    }

    mapping(address => Item) internal items;

    address treasuryContract;

    function purchase(address _itemAddress, uint256 _amount) public {
        Item memory itemListing = items[_itemAddress];
        uint256 balance = Treasury(treasuryContract).balances(msg.sender);

        require(balance >= (itemListing.price.mul(_amount)), "Not enough funds");

        ItemBase(_itemAddress).mint(msg.sender, _amount);
    }

    function getItem(address _itemAddress) public view returns (uint256 price) {
        return items[_itemAddress].price;
    }

    function list(address _itemAddress, uint256 _price) public onlyOwner {
        items[_itemAddress] = Item({price: _price});
    }

    function setTreasuryContract(address _treasuryContractAddress) public {
        treasuryContract = _treasuryContractAddress;
    }
}
