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

contract Mint is Script {




    function setUp() public {}

    function run() external {
        vm.startBroadcast(vm.envUint("PRIVATE_KEY"));

        MockERC20 stablecoin = MockERC20(0xB3F58120EA686efF67214ED0D6aC7bd005C9d68F);

        stablecoin.mint(0x0CCfc28Ce76f48726C59Fc2a598b6eAac8bd3Ab4, 4 ether);

        vm.stopBroadcast();
        
    }
}
