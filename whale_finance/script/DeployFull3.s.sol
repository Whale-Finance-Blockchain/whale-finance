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
        quotaTokenImplementation = QuotaToken(0x9d8F28B52504112A8C89df9095ca3BF346286787);
        registry = ERC6551Registry(0x5F1933923909C6a65a6769fA0d6F157857e33c48);

        MockERC20 whaleToken = MockERC20(0x3546914261a14D476671B02498420aDBbE7cA69A);
         MockERC20 WBTC = MockERC20(0x76D11E63a7b2Ec1C7A4D4Fc88f1D74FC8b98d651);
         MockERC20 WDOT = MockERC20(0xc77e76e8400A9436A7ce4ebCFA18dF76Ae60ED01);
         MockERC20 USDT = MockERC20(0xAF4Bd9d6E474afa59655EFe171e02e4670718f09);
         MockERC20 USDC = MockERC20(0x536527976E98E253B424a3655E695D144E343341);
         MockERC20 aeron = MockERC20(0x69801C169647Ad125707Dd40096D4EDC20Bb521a);

         console.log("whaleToken address: %s", address(whaleToken));
         console.log("WBTC address: %s", address(WBTC));
         console.log("WDOT address: %s", address(WDOT));
         console.log("USDT address: %s", address(USDT));
         console.log("USDC address: %s", address(USDC));
         console.log("aeron address: %s", address(aeron));



        //whaleToken.mint(msg.sender, 1000000000000 ether);
        

        //WBTC.mint(msg.sender, 1000000000000 ether);
        //WDOT.mint(msg.sender, 1000000000000 ether);
        //USDT.mint(msg.sender, 1000000000000 ether);
        // USDC.mint(msg.sender, 1000000000000 ether);
        //aeron.mint(msg.sender, 1000000000000 ether);

        

        safeAccount = SafeAccount(payable(0xA261F923654Eb93Ab6c35D285d58c8a01D42F792));
        beacon = BeaconERC20(0x53a3A188943C94442D76396ba682b09a1e66517F); //quota

        whaleFinance = WhaleFinance(0x8aa499C0f0A85b4960Ebe6Bfc993338a9e88cDdb);
        //whaleFinance.setWhiteListedToken(address(whaleToken));

         //whaleFinance.setWhiteListedToken(address(WBTC));
        //  whaleFinance.setWhiteListedToken(address(WDOT));
        //  whaleFinance.setWhiteListedToken(address(USDT));
        //  whaleFinance.setWhiteListedToken(address(USDC));
          whaleFinance.setWhiteListedToken(address(aeron));


        // console.log("whaleToken address: %s", address(whaleToken));
        // console.log("WhaleFinance address: %s", address(whaleFinance));
        // console.log("QuotaToken address: %s", address(quotaTokenImplementation));
        // console.log("SafeAccount address: %s", address(safeAccount));
        // console.log("Beacon address: %s", address(beacon));
        // console.log("Registry address: %s", address(registry));


        vm.stopBroadcast();
        
    }
}
