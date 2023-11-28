// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "forge-std/console.sol";

import "../src/MockERC20.sol";

contract Create is Script {
    MockERC20 public token;
    MockERC20 public weth;


    function setUp() public {}

    function run() external {
        vm.startBroadcast(vm.envUint("PRIVATE_KEY"));

        token = new MockERC20("2K", "2K");
        token.mint(0x0CCfc28Ce76f48726C59Fc2a598b6eAac8bd3Ab4, 100000000 ether);
        token.mint(0xB0Eb2a4CDf7be2D0c408cF60Ed8ba1065920b339, 100000000 ether);
        token.mint(0xA71f15BfEf26a3F53735491c448ee33Db5aA704f, 100000000 ether);       


        console.log("token address: %s", address(token));

        vm.stopBroadcast();
        
    }
}