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
    ERC6551Registry public registry;

    QuotaToken public quotaTokenImplementation;
    MockERC20 public stablecoin;
    SafeAccount public safeAccount;
    WhaleFinance public whaleFinance;
    BeaconERC20 public beacon;


    function setUp() public {}

    function run() external {
        vm.startBroadcast(vm.envUint("PRIVATE_KEY"));
        quotaTokenImplementation = new QuotaToken();
        registry = new ERC6551Registry();

        MockERC20 whaleToken = new MockERC20("Whale Finance Token", "WHALE");
        MockERC20 WBTC = new MockERC20("Wrapped BTC", "WBTC");
        MockERC20 WDOT = new MockERC20("Wrapped DOT", "WDOT");
        MockERC20 USDT = new MockERC20("Tether USD", "USDT");
        MockERC20 USDC = new MockERC20("USD Coin", "USDC");
        MockERC20 aeron = new MockERC20("AERON", "AERON");

        console.log("whaleToken address: %s", address(whaleToken));
        console.log("WBTC address: %s", address(WBTC));
        console.log("WDOT address: %s", address(WDOT));
        console.log("USDT address: %s", address(USDT));
        console.log("USDC address: %s", address(USDC));
        console.log("aeron address: %s", address(aeron));



        whaleToken.mint(msg.sender, 1000000000000 ether);
        whaleToken.mint(msg.sender, 100000000000000 ether);

        WBTC.mint(msg.sender, 1000000000000 ether);
        WDOT.mint(msg.sender, 1000000000000 ether);
        USDT.mint(msg.sender, 1000000000000 ether);
        USDC.mint(msg.sender, 1000000000000 ether);
        aeron.mint(msg.sender, 1000000000000 ether);

        

        safeAccount = new SafeAccount();
        beacon = new BeaconERC20(address(quotaTokenImplementation)); //quota

        whaleFinance = new WhaleFinance(address(registry), address(safeAccount), address(beacon), address(whaleToken));
        whaleFinance.setWhiteListedToken(address(whaleToken));

        whaleFinance.setWhiteListedToken(address(WBTC));
        whaleFinance.setWhiteListedToken(address(WDOT));
        whaleFinance.setWhiteListedToken(address(USDT));
        whaleFinance.setWhiteListedToken(address(USDC));
        whaleFinance.setWhiteListedToken(address(aeron));


        console.log("whaleToken address: %s", address(whaleToken));
        console.log("WhaleFinance address: %s", address(whaleFinance));
        console.log("QuotaToken address: %s", address(quotaTokenImplementation));
        console.log("SafeAccount address: %s", address(safeAccount));
        console.log("Beacon address: %s", address(beacon));
        console.log("Registry address: %s", address(registry));


        vm.stopBroadcast();
        
    }
}
