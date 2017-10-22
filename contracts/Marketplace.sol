pragma solidity 0.4.15;

import "./Frux.sol";


contract Marketplace is Frux {

    address owner; 

    mapping (bytes32 => Item) public items;

    struct Item {
        bytes32 name;
        uint256 price;
        uint256 sales;
    }

    event LogSold(address buyer, bytes32 name);

    modifier isOwner () {require(msg.sender == owner); _;}
    modifier checkValue(uint amount) {require(amount == balanceOf(msg.sender)); _;}

    function Marketplace() public {
        owner = msg.sender;
    }

    function addItem(bytes32 _name, uint _price) public isOwner {
        items[_name] = Item(
            _name, 
            _price, 
            0);
    }

    function buyItem(bytes32 name) checkValue(balanceOf(msg.sender)) public 
    {
        burn(items[name].price);
        items[name].sales += 1;
        LogSold(msg.sender, name);
    }

}
