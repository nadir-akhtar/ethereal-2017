# DonorRegistry Documentation

## Summary
Donors want to prove that they have indeed given donations, and blockchains are perfect (albeit expensive) ways to prove information about the past. This smart contract contains information about every donor, their donation history, and where their particular funds happened to end up.

## Contract Details

### Storage
`address owner` is the address of the charity which controls information about the contract.

`mapping (address => uint) amounts` is a mapping of the address of the donor who is providing money to the charity to the amount that this donor has, in US cents, donated to charity.

### External functions

#### DonorRegistry()
Constructs the DonorRegistry registry and instantiates its owner as given:
```
function DonorRegistry() {
  owner = msg.sender
}
```
#### updateAmount()
Updates the amount that a donor has contributed according to funds received by the charity.
```
function updateAmount(address donor, uint amount)
  onlyOwner
{

  DonationMade(donor, amount);
}
```

### Events
`event DonationMade(address donor, uint amount);` This is emitted whenever a donor's donation amount is updated.

`event FundsMoved(address donor, uint amount, address recipient);` This is emitted whenever a donor's funds are given to some recipient.

`event GoodsPurchased(address recipient, string item);` This is emitted whenever a recipient purchases some good to let the donor know what their funds provide.
