# Frux Documentation

## Summary

To ensure transparency, transactions should be made on chain. To prevent volatility from interfering with the use of this marketplace, this stable coin exists to serve as a traceable asset with no "cash value." It cannot be traded between addresses to ensure that only the rightful owner has the ability to spend those tokens. The tokens cannot be redeemed for fiat or crypto and will be rescinded from the recipient after a reasonable time of no use (say, 90 days). However, this `rescind` feature will not be available until later, due to the complicated implementation of this UTXO-like payment tracking.

[Inspired by the bare-bones ERC20 token from Consensys' GitHub](https://github.com/ConsenSys/Tokens/blob/master/contracts/StandardToken.sol). However, this is not an ERC20 compliant token, as transfers are not meant to be made freely between addresses.

## Contract Details

### Storage

`address owner` is the address of the charity which controls information about the contract.

`mapping (address => uint256) balances` is the mapping from addresses to balances of frux.

`uint256 currentSupply` keeps track of how much frux exists at any given point.

### Modifiers

#### onlyOwner()

A modifier to ensure that only the owner can execute certain functions.

```javascript
modifier onlyOwner() {
  require(msg.sender == owner);
  _;
}
```

### External functions

#### Frux()

A constructor to initialize the contract.

```javascript
function Frux()
  public
{
  owner = msg.sender;
  currentSupply = 0;
}
```

#### increaseSupply()

Mints more frux as according to the amount donated by donors.

```javascript
function increaseSupply(uint256 _value)
  public
  onlyOwner
  returns (bool success)
{
  balances[owner] += _value;
  currentSupply += _value;
  LogIncreaseSupply(_value);
  return true;
}
```

#### transferToRecipient()

Transfers frux to a recipient.

```javascript
function transferToRecipient(address _to, uint256 _value)
  public
  onlyOwner
  returns (bool success)
{
  require(balances[msg.sender] >= _value);
  require(_to != address(0));
  balances[msg.sender] -= _value;
  balances[_to] += _value;
  LogTransfer(msg.sender, _to, _value);
  return true;
}
```

#### burn()

After a transaction, eliminate this money from the system.

```javascript
function burn(uint256 _value)
  public
{
  require(_value > 0);
  require(_value <= balances[msg.sender]);
  address burner = msg.sender;
  balances[burner] -= _value;
  currentSupply -= _value;
  LogBurn(burner, _value);
}
```

#### balanceOf()

Gets the balance of a particular account.

```javascript
function balanceOf(address _recipient)
  public
  constant
  returns (uint256)
{
  return balances[_recipient];
}
```

### Events

`event LogTransfer(address indexed sender, address indexed recipient, uint amount);` This is emitted whenever tokens are transferred between two addresses.

`event LogIncreaseSupply(uint256 value);` This is emitted whenever new tokens are minted. It is assumed that all new tokens go to the charity address, `owner`.

`event LogBurn(address indexed burner, uint256 _value);` This is emitted whenever tokens are burnt, primarily for a purchase.
