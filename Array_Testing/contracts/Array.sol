// SPDX-License-Identifier: MIT
pragma solidity >=0.4.5 <0.9.0;

contract Array {
    uint256[] public arr;

    function insert(uint256 num) public {
        arr.push(num);
    }

    function length() public view returns(uint256) {
        return arr.length;
    }

}