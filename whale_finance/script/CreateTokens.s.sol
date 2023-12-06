// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "forge-std/console.sol";

import "../src/MockERC20.sol";
import "../src/WhaleFinance.sol";

contract Create is Script {
    MockERC20 public token;
    MockERC20 public weth;


    function setUp() public {}

    function run() external {
        vm.startBroadcast(vm.envUint("PRIVATE_KEY"));
        address target = 0xB0Eb2a4CDf7be2D0c408cF60Ed8ba1065920b339;

        MockERC20 itub4 = new MockERC20("ITUB4", "ITUB4");
        MockERC20 petr4 = new MockERC20("PETR4", "PETR4");
        MockERC20 di1f24 = new MockERC20("DI1F24", "DI1F24");
        MockERC20 ntmb34 = new MockERC20("NTMB34", "NTMB34");
        MockERC20 asai3 = new MockERC20("ASAI3", "ASAI3");
        MockERC20 bbas3 = new MockERC20("BBAS3", "BBAS3");
        MockERC20 viva3 = new MockERC20("VIVA3", "VIVA3");
        MockERC20 jbss3 = new MockERC20("JBSS3", "JBSS3");
        MockERC20 yduc3 = new MockERC20("YDUC3", "YDUC3");
        MockERC20 shel = new MockERC20("SHEL", "SHEL");
        MockERC20 msft = new MockERC20("MSFT", "MSFT");
        MockERC20 amzn = new MockERC20("AMZN", "AMZN");

        itub4.mint(target, 1000000000000000 ether);
        petr4.mint(target, 1000000000000000 ether);
        di1f24.mint(target, 1000000000000000 ether);
        ntmb34.mint(target, 1000000000000000 ether);
        asai3.mint(target, 1000000000000000 ether);
        bbas3.mint(target, 1000000000000000 ether);
        viva3.mint(target, 1000000000000000 ether);
        jbss3.mint(target, 1000000000000000 ether);
        yduc3.mint(target, 1000000000000000 ether);
        shel.mint(target, 1000000000000000 ether);
        msft.mint(target, 1000000000000000 ether);
        amzn.mint(target, 1000000000000000 ether);

        WhaleFinance whaleFinance = WhaleFinance(0x9e40f546EeC71cBE34F079B0Bb8fBf4a7529BcD8);
        whaleFinance.setWhiteListedToken(address(itub4));
        whaleFinance.setWhiteListedToken(address(petr4));
        whaleFinance.setWhiteListedToken(address(di1f24));
        whaleFinance.setWhiteListedToken(address(ntmb34));
        whaleFinance.setWhiteListedToken(address(asai3));
        whaleFinance.setWhiteListedToken(address(bbas3));
        whaleFinance.setWhiteListedToken(address(viva3));
        whaleFinance.setWhiteListedToken(address(jbss3));
        whaleFinance.setWhiteListedToken(address(yduc3));
        whaleFinance.setWhiteListedToken(address(shel));
        whaleFinance.setWhiteListedToken(address(msft));
        whaleFinance.setWhiteListedToken(address(amzn));

        console.log("Address ITUB4: ", address(itub4));
        console.log("Address PETR4: ", address(petr4));
        console.log("Address DI1F24: ", address(di1f24));
        console.log("Address NTMB34: ", address(ntmb34));
        console.log("Address ASAI3: ", address(asai3));
        console.log("Address BBAS3: ", address(bbas3));
        console.log("Address VIVA3: ", address(viva3));
        console.log("Address JBSS3: ", address(jbss3));
        console.log("Address YDUC3: ", address(yduc3));
        console.log("Address SHELL: ", address(shel));
        console.log("Address MSFT: ", address(msft));
        console.log("Address AMZN: ", address(amzn));

        vm.stopBroadcast();
        
    }
}