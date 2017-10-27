# Marketplace Documentation

## Summary

To keep all transactions transparent, purchases for goods are made through a smart contract.

## Contract Details

### Inheritance

This contract is an instance of `Frux` to inherit all the functionality of the token contract.

### Storage

`address owner` is the address of the charity which controls information about the contract.

`mapping (uint => Item) items` is a mapping of some `id` to an `Item` to keep track of all available goods.

`struct Item` is a struct which contains relevant information about each item.

The scheme for an `Item` is as follows:

```javascript
{
  bytes32 name;
  uint256 price;
  uint256 sales;
}
```

The name and price is self-explanatory. Sales keeps track of how many times that item has been purchased.

### Modifiers

#### isOwner()

This modifier insures that only the owner can execute this particular function.

```javascript
modifier isOwner() {
  require(msg.sender == owner);
  _;
}
```

#### checkValue()

This modifier insures that the amount being paid is exactly the cost of the item.

```javascript
modifier checkValue(uint amount) {
  require(amount == f.balanceOf(msg.sender));
  _;
}
```

### External functions

#### Marketplace()

Initializes both a Marketplace contract and a Frux contract.

```javascript
function Marketplace()
  public
{
  owner = msg.sender;
}
```

#### addItem()

Add another item to the catalog.

```javascript
function addItem(bytes32 _name, uint _price)
  public
  isOwner
{
  items[_name] = Item(
    _name,
    _price,
    0);
}
```

#### buyItem()

Allow a user to buy an item.

```javascript
function buyItem(uint id)
  checkValue(balanceOf(msg.sender))
  public
{
  burn(items[name].price);
  items[name].sales += 1;
  LogSold(msg.sender, id);
}
```

### Events

`event LogSold(address buyer, uint256 id);` This emits whenever an item is sold to a user.
