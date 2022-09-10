// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Deploy {
    address owner;
    string message;

    constructor(string memory message_) {
        owner = msg.sender;
        message = message_;
    }

    function set_message(string memory message_) public {
        if (msg.sender != owner) return;
        message = message_;
    }

    function get_message() public view returns (string memory) {
        return message;
    }
    
    function kill() public { if (msg.sender == owner) selfdestruct(payable(msg.sender)); }
}