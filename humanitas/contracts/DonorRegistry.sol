pragma solidity 0.4.18;


contract DonorRegistry {

	address owner;

	mapping (address => uint256) amounts;

	event LogDonationMade(address donor, uint amount);

	modifier onlyOwner() {
  		require(msg.sender == owner);
  		_;
	}

	function DonorRegistry() public {
		owner = msg.sender;
	}

	function updateAmount(address donor, uint amount) public onlyOwner {
		amounts[donor] += amount;
  		LogDonationMade(donor, amount);
	}

	function getAmount(address donor) public constant returns (uint) {
  		return amounts[donor];
	}

}
