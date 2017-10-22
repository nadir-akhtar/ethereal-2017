pragma solidity 0.4.15; 

contract DonorRegistry{

	address owner; 

	mapping (address => uint256) amounts; 

	modifier onlyOwner() {
  		require(msg.sender == owner);
  		_;
	}

	function DonorRegistry() public {
		owner = msg.sender;	
	}

	function updateAmount(address donor, uint amount) public onlyOwner {
		amounts[donor] += amount;
  		DonationMade(donor, amount);
	}

	function getAmount(address donor) public constant returns (uint)
	{
  		return amounts[donor];
	}

	event DonationMade(address donor, uint amount);


}