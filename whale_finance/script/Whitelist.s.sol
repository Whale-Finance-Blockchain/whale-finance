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

        address stablecoin = 0x4E1fD6f5CaB9589992584415dfcE8cEDFe37089F;

        whaleFinance = WhaleFinance(0x42CC04e96af086199C92af632F8B543dfBa1adF3);
        whaleFinance.setWhiteListedToken(address(stablecoin));

        vm.stopBroadcast();
        
    }
}
