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

        address stablecoin = 0x1b43c277CC56e6D2D775f9850E5F2D8Dfe4Cb5f9;

        address registry = 0x47dB071001e5033aa112C073525f682275e225a5;
        address beacon = 0x3E8D3319CbB430685CA1b100f83E4C882e65D635;
        address safeAccount = 0xC5b8517F9a08b4EEB51bf9c639Eb0D9bF6a8fb38;

        whaleFinance = new WhaleFinance(address(registry), address(safeAccount), address(beacon), address(stablecoin));

        console.log("WhaleFinance address: %s", address(whaleFinance));
        vm.stopBroadcast();
        
    }
}
