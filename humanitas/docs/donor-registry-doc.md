# DonorRegistry Documentation

## Summary
Donors want to prove that they have indeed given donations, and blockchains are perfect (albeit expensive) ways to prove information about the past. This smart contract contains information about every donor, their donation history, and where their particular funds happened to end up.

## Contract Details

### Storage
`address owner` is the address of the charity which controls information about the contract.

`mapping (address => uint) amounts` is a mapping of the address of the donor who is providing money to the charity to the amount that this donor has, in US cents, donated to charity.

### Modifiers

#### onlyOwner()
A modifier to ensure that only the owner can modify the contract.
```
modifier onlyOwner() {
  require(msg.sender == owner)
  _;
}
```

### External functions

#### DonorRegistry()
Constructs the DonorRegistry registry and instantiates its owner as given:
```
function DonorRegistry()
  public
{
  owner = msg.sender;
}
```
#### updateAmount()
Updates the amount that a donor has contributed according to funds received by the charity.
```
function updateAmount(address donor, uint amount)
  public
  onlyOwner
{
  amounts[donor] += amount;
  DonationMade(donor, amount);
}
```

#### getAmount()
Returns the amount that a donor has contributed.
```
function getAmount(address donor)
  public
  constant
  returns (uint)
{
  return amounts[donor];
}
```

### Events
`event LogDonationMade(address donor, uint amount);` This is emitted whenever a donor's donation amount is updated.
