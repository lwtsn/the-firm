pragma solidity ^0.6.0;

contract ItemRegister {

    mapping(address => uint256) internal addressItemId;

    uint256 nextItemId;

    constructor() public {
        nextItemId = 1;
    }

    function listItem(address _itemAddress) public {
        addressItemId[_itemAddress] = nextItemId;
    }

    function getItemId(address _itemAddress) public returns(uint256) {
        return addressItemId[_itemAddress];
    }
}

