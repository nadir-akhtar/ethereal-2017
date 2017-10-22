# Marketplace Documentation

## Summary
To keep all transactions transparent, purchases for goods are made through a smart contract.

## Contract Details

### Storage
`address owner` is the address of the charity which controls information about the contract.

`mapping (uint => Item) items` is a mapping of some `id` to an `Item` to keep track of all available goods.

`Frux f` is the Frux contract of tokens. It will be generated within this contract so as to allow this contract to use the functions of that contract seamlessly.

`uint idCount` is a global value which increments by one every time an item is added to the catalog.

`struct Item` is a struct which contains relevant information about each item.

The scheme for an `Item` is as follows:
```
{
  string name;
  uint256 id;
  uint256 price;
}
```

### Modifiers

#### isOwner()
This modifier insures that only the owner can execute this particular function.
```
modifier isOwner() {
  require(msg.sender == owner);
  _;
}
```

#### checkValue()
This modifier insures that the amount being paid is exactly the cost of the item.
```
modifier checkValue(uint amount) {
  require(amount == f.balanceOf(msg.sender));
  _;
}
```

### External functions

#### Marketplace()
Initializes both a Marketplace contract and a Frux contract.
```
function Marketplace()
  public
{
  owner = msg.sender;
  f = new Frux();
  idCount = 0;
}
```

#### addItem()
Add another item to the catalog.
```
function addItem(string _name, uint _price)
  public
  isOwner
{
  items[idCount] = Item(
    _name,
    idCount,
    _price);        
  idCount += 1;
}
```

#### buyItem()
Allow a user to buy an item.
```
function buyItem(uint id)
  checkValue(f.balanceOf(msg.sender))
  public
{
  f.transferToOwner(items[id].price);
  LogSold(msg.sender, id);
}
```

### Events
`event LogSold(address buyer, uint256 id);` This emits whenever an item is sold to a user.
