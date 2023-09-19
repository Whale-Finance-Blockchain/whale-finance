// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "forge-std/console.sol";

import "../src/ERC6551Registry.sol";
import "../src/SafeAccount.sol";
import "../src/interface/IERC6551Account.sol";
import "../src/WhaleFinance.sol";
import "../src/QuotaBeacon.sol";
import "../src/MockERC20.sol";

contract Deploy is Script {
    SafeAccount public safeAccount;
    WhaleFinance public whaleFinance;
    BeaconERC20 public beacon;
    MockERC20 public stablecoin;


    function setUp() public {}

    function run() external {
        vm.startBroadcast(vm.envUint("PRIVATE_KEY"));

        stablecoin = new MockERC20("ZUSD", "ZUSD");
        stablecoin.mint(msg.sender, 4 ether);

        address quotaTokenImplementationAddress = 0xF687Fe7Ea931B4256981F7948BFBC89289Adfd4D;


        safeAccount = new SafeAccount();
        beacon = new BeaconERC20(address(quotaTokenImplementationAddress)); //quota

        console.log("SafeAccount address: %s", address(safeAccount));
        console.log("Beacon address: %s", address(beacon));
        console.log("Stablecoin address: %s", address(stablecoin));



        vm.stopBroadcast();
        
    }
}
