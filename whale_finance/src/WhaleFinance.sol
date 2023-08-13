// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./interface/IERC6551Registry.sol";
import "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol";
import "@openzeppelin/contracts/proxy/beacon/IBeacon.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract WhaleFinance is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter public _fundIdCounter;
    address[] public fundsAddresses;
    IERC6551Registry fundRegister;
    address proxyImplementation;

    mapping( address => mapping( address => bool)) public tokensInFund;
    mapping (uint256 => address) public tokenIdToTokenAddress;

    IERC20 public stablecoin;

    event FundCreated(address fundAddress);

    constructor(address _fundRegister, address _proxyImplementation, address _stablecoin) ERC721("WhaleFinance", "WFI") {
        fundRegister = IERC6551Registry(_fundRegister);
        proxyImplementation = _proxyImplementation;
        stablecoin = IERC20(_stablecoin);
    }

    function createFund(address _to, address _token, address[] memory _allowedTokens) public {
        uint256 tokenId = _fundIdCounter.current();
        _fundIdCounter.increment();
        _mint(_to, tokenId);

        address fundAddress = fundRegister.createAccount(
            address(fundRegister),
            block.chainid,
            address(this),
            tokenId,
            1,
            ""
        );

        
        emit FundCreated(fundAddress);
        for (uint256 i = 0; i < _allowedTokens.length; i++) {
            tokensInFund[fundAddress][_allowedTokens[i]] = true;
        }
        fundsAddresses.push(fundAddress);

        tokenIdToTokenAddress[tokenId] = _token; 

    }

    function invest(uint256 _value, address _fundAddress) public payable{
        IERC20(stablecoin).transferFrom(msg.sender, address(_fundAddress), _value);
    }
    
}