pragma solidity 0.4.15;

import "./Frux.sol";

contract Marketplace {

    address owner; 

    mapping (uint => Item) public items;

    Frux f; 
    uint idCount; 

    struct Item {
        string name;
        uint256 id; 
        uint256 price;
    }

    event LogSold(address buyer, uint256 id);

    modifier isOwner () {require(msg.sender == owner); _;}
    modifier checkValue(uint amount) {require(amount == f.balanceOf(msg.sender)); _;}

    function Marketplace() public {
        owner = msg.sender;
        f = new Frux(); 
        idCount = 0;
    }

    function addItem(string _name, uint _price) isOwner public {
        items[idCount] = Item(
            _name, 
            idCount,
            _price);        
        idCount += 1;
    }

    function buyItem(uint id) checkValue(f.balanceOf(msg.sender)) public 
    {
        f.burn(items[id].price); 
        LogSold(msg.sender, id);
    }

}
