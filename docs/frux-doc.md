# Frux Documentation

## Summary

To ensure transparency, transactions should be made on chain. To prevent volatility from interfering with the use of this marketplace, this stable coin exists to serve as a traceable asset with no "cash value." It cannot be traded between addresses to ensure that only the rightful owner has the ability to spend those tokens. The tokens cannot be redeemed for fiat or crypto and will be rescinded from the recipient after a reasonable time of no use (say, 90 days). However, this `rescind` feature will not be available until later, due to the complicated implementation of this UTXO-like payment tracking.

![Inspired by the bare-bones ERC20 token from Consensys' GitHub](https://github.com/ConsenSys/Tokens/blob/master/contracts/StandardToken.sol). However, this is not an ERC20 compliant token, as transfers are not meant to be made freely between addresses.

## Contract Details

### Storage
`address owner` is the address of the charity which controls information about the contract.

`mapping (address => uint256) balances` is the mapping from addresses to balances of frux.

### Modifiers

#### onlyOwner()
A modifier to ensure that only the owner can execute certain functions.
```
modifier onlyOwner() {
  require(msg.sender == owner)
  _;
}
```

### External functions

#### Frux()
A constructor to initialize the contract.
```
function Frux()
  public
{
  owner = msg.sender;
}
```

#### increaseSupply()
Mints more frux as according to the amount donated by donors.
```
function increaseSupply(uint256 _value)
  public
  onlyOwner
  returns (bool success)
{
  balances[owner] += _value;
  IncreaseSupply(_value);
  return true;
}
```

#### transferToRecipient()
Transfers frux to a recipient.
```
function transferToRecipient(address _to, uint256 _value)
  public
  onlyOwner
  returns (bool success)
{
  require(balances[msg.sender] >= _value);
  balances[msg.sender] -= _value;
  balances[_to] += _value;
  Transfer(msg.sender, _to, _value);
  return true;
}
```


#### transferToOwner()
Transfers frux back to the owner account. Only executed when a message wants to make a purchase from the marketplace.
```
function transferToOwner(uint256 _value)
  public
  returns (bool success)
{
  require(balances[msg.sender] >= _value);
  balances[msg.sender] -= _value;
  balances[owner] += _value;
  Transfer(msg.sender, owner, _value);
  return true;
}
```

#### balanceOf()
Gets the balance of a particular account.
```
function balanceOf(address _recipient)
  public
  constant
  returns (uint256)
{
  return balances[_recipient];
}
```

### Events

`event Transfer(address indexed sender, address indexed recipient, uint amount);` This is emitted whenever tokens are transferred between two addresses.

`event IncreaseSupply(uint256 value);` This is emitted whenever new tokens are minted. It is assumed that all new tokens go to the charity address, `owner`.
