pragma solidity 0.4.15; 

contract Frux{

	address owner;

	mapping (address => uint256) balances;

	uint256 currentSupply;

	modifier onlyOwner() {
  		require(msg.sender == owner);
  		_;
	}

	function Frux() public {
  		owner = msg.sender;
  		currentSupply = 0; 
	}

	function increaseSupply(uint256 _value) public onlyOwner returns (bool success) { 
  		balances[owner] += _value;
  		currentSupply += _value;
  		IncreaseSupply(_value);
  		return true;
	}

	function transferToRecipient(address _to, uint256 _value) public onlyOwner returns (bool success) {
  		require(balances[msg.sender] >= _value);
  		balances[msg.sender] -= _value;
  		balances[_to] += _value;
  		Transfer(msg.sender, _to, _value);
  		return true;
	}

	function balanceOf(address _recipient) public constant returns (uint256) {
  		return balances[_recipient];
	}

	function burn(uint256 _value) public{
    	require(_value > 0);
    	require(_value <= balances[msg.sender]);
    	address burner = msg.sender; 
    	balances[burner] -= _value;
    	currentSupply -= _value; 
    	Burn(burner, _value);

    }

	event Transfer(address indexed sender, address indexed recipient, uint amount);
	event IncreaseSupply(uint256 value);
	event Burn(address indexed burner, uint256 _value);
    

}