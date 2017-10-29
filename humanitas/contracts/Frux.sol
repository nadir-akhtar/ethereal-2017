pragma solidity 0.4.18;


contract Frux {

	address owner;
	uint256 currentSupply;
	mapping (address => uint256) balances;

	event LogTransfer(address indexed sender, address indexed recipient, uint amount);
	event LogIncreaseSupply(uint256 value);
	event LogBurn(address indexed burner, uint256 _value);

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
  		LogIncreaseSupply(_value);
  		return true;
	}

	function transferToRecipient(address _to, uint256 _value) public onlyOwner returns (bool success) {
  		require(balances[msg.sender] >= _value);
  		require(_to != address(0));

  		balances[msg.sender] -= _value;
  		balances[_to] += _value;

  		LogTransfer(msg.sender, _to, _value);
  		return true;
	}

	function balanceOf(address _recipient) public constant returns (uint256) {
  		return balances[_recipient];
	}

	function burn(uint256 _value) public {
    	require(_value > 0);
    	require(_value <= balances[msg.sender]);
    	address burner = msg.sender;
    	balances[burner] -= _value;
    	currentSupply -= _value;
    	LogBurn(burner, _value);
    }
}
