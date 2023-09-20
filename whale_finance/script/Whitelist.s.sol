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

    WhaleFinance public whaleFinance;



    function setUp() public {}

    function run() external {
        vm.startBroadcast(vm.envUint("PRIVATE_KEY"));

        address stablecoin = 0xA3f156324feCc5ED3A8495C2399666a598A73ee4;

        whaleFinance = WhaleFinance(0x6C3d90238Fb8387218AE795F42a4979ae2E6C8c1);
        whaleFinance.setWhiteListedToken(address(stablecoin));

        vm.stopBroadcast();
        
    }
}
