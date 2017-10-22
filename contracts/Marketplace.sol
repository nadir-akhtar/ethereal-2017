pragma solidity 0.4.15;

import "./Frux.sol";

contract Marketplace is Frux {

    address owner; 

    mapping (uint => Item) public items;

    uint idCount; 

    struct Item {
        string name;
        uint256 id; 
        uint256 price;
        address buyer;
    }

    event LogSold(uint256 id);

    modifier isOwner () {require(msg.sender == owner); _;}
    modifier checkValue(uint amount) {require(amount == balanceOf(msg.sender)); _;}

    function Marketplace() public {
        owner = msg.sender;
        idCount = 0;
    }

    function addItem(string _name, uint _price) isOwner public {
        items[idCount] = Item(
            _name, 
            idCount,
            _price, 
            0x0);        
        idCount += 1;
    }

    function buyItem(uint id) checkValue(balanceOf(msg.sender)) public 
    {
        burn(items[id].price); 
        LogSold(id);
    }

}
