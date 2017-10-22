pragma solidity 0.4.15; 

contract Frux{

	address owner;

	mapping (address => uint256) balances;

	modifier onlyOwner() {
  		require(msg.sender == owner);
  		_;
	}

	function Frux() public
	{
  		owner = msg.sender;
	}

	function increaseSupply(uint256 _value) public onlyOwner returns (bool success)
	{
  		balances[owner] += _value;
  		IncreaseSupply(_value);
  		return true;
	}

	function transferToRecipient(address _to, uint256 _value) public onlyOwner returns (bool success)
	{
  		require(balances[msg.sender] >= _value);
  		balances[msg.sender] -= _value;
  		balances[_to] += _value;
  		Transfer(msg.sender, _to, _value);
  		return true;
	}

	function transferToOwner(uint256 _value) public returns (bool success)
	{
  		require(balances[msg.sender] >= _value);
  		balances[msg.sender] -= _value;
  		balances[owner] += _value;
  		Transfer(msg.sender, owner, _value);
  		return true;
	}

	function balanceOf(address _recipient) public constant returns (uint256)
	{
  		return balances[_recipient];
	}

	event Transfer(address indexed sender, address indexed recipient, uint amount);
	event IncreaseSupply(uint256 value);
	
}