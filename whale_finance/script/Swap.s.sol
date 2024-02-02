// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "forge-std/console.sol";

import "../src/interface/IV2SwapRouter.sol";
import "../src/MockERC20.sol";



contract Swap is Script {

    address public wzeniq = 0x74DC1C4ec10abE9F5C8A3EabF1A90b97cDc3Ead8;

    address unirouter = 0x0fee4c356DEeF6567E95b6394420583CA1D1fEEa;

    address tokenA = 0x3546914261a14D476671B02498420aDBbE7cA69A; //2K
    address tokenB = 0x76D11E63a7b2Ec1C7A4D4Fc88f1D74FC8b98d651; // RYU
    

    function setUp() public {}

    function run() external {
        vm.startBroadcast(vm.envUint("PRIVATE_KEY"));
        

        address[] memory path = new address[](2);
        path[0] = tokenA;
        path[1] = tokenB;

        //IERC20(tokenA).approve(unirouter, 0.2 ether);


        IV2SwapRouter router = IV2SwapRouter(unirouter);

        router.swapExactTokensForTokens(0.2 ether, 0, path, 0x000ef5F21dC574226A06C76AAE7060642A30eB74, block.timestamp + 10 days);

        vm.stopBroadcast();
        
    }
}
