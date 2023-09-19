
const WhaleFinance = {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_fundsRegister",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_erc6551Implementation",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_erc20Implementation",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_stablecoin",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "fundAddress",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "quotaTokenAddress",
            "type": "address"
          }
        ],
        "name": "FundCreated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "fundAddress",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "investor",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "InvestimentMade",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "fundAddress",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "investor",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "RedeemMade",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "_fundIdCounter",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "admFees",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "closeInvestimentTimestamps",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_symbol",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "address[]",
            "name": "_allowedTokens",
            "type": "address[]"
          },
          {
            "internalType": "uint256",
            "name": "_admFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_perfFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_openInvestiment",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_closeInvestiments",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_openRedeem",
            "type": "uint256"
          }
        ],
        "name": "createFund",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "erc6551Implementation",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "fundsAddresses",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "fundsAllowedTokens",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "fundsRegister",
        "outputs": [
          {
            "internalType": "contract IERC6551Registry",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getApproved",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "initialAmounts",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "fundId",
            "type": "uint256"
          }
        ],
        "name": "invest",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "isApprovedForAll",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "openInvestimentTimestamps",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "openRedeemTimestamps",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ownerOf",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "perfFees",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "quotaTokenImplementation",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "quotasAddresses",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "fundId",
            "type": "uint256"
          }
        ],
        "name": "redeemYield",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_token",
            "type": "address"
          }
        ],
        "name": "removeWhiteListedToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_token",
            "type": "address"
          }
        ],
        "name": "setWhiteListedToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "stablecoin",
        "outputs": [
          {
            "internalType": "contract IERC20",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "tokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "whiteListedTokens",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "bytecode": {
      "object": "0x60806040523480156200001157600080fd5b5060405162003d7038038062003d70833981016040819052620000349162000178565b6040518060400160405280600c81526020016b5768616c6546696e616e636560a01b8152506040518060400160405280600381526020016257464960e81b81525081600090816200008691906200027a565b5060016200009582826200027a565b505050620000b2620000ac6200010560201b60201c565b62000109565b600880546001600160a01b039586166001600160a01b0319918216179091556009805494861694821694909417909355600b8054918516918416919091179055600a805491909316911617905562000346565b3390565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b80516001600160a01b03811681146200017357600080fd5b919050565b600080600080608085870312156200018f57600080fd5b6200019a856200015b565b9350620001aa602086016200015b565b9250620001ba604086016200015b565b9150620001ca606086016200015b565b905092959194509250565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200020057607f821691505b6020821081036200022157634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200027557600081815260208120601f850160051c81016020861015620002505750805b601f850160051c820191505b8181101562000271578281556001016200025c565b5050505b505050565b81516001600160401b03811115620002965762000296620001d5565b620002ae81620002a78454620001eb565b8462000227565b602080601f831160018114620002e65760008415620002cd5750858301515b600019600386901b1c1916600185901b17855562000271565b600085815260208120601f198616915b828110156200031757888601518255948401946001909101908401620002f6565b5085821015620003365787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b613a1a80620003566000396000f3fe60806040523480156200001157600080fd5b50600436106200028d5760003560e01c8063822dde8d116200015f578063c2ae0e3e11620000cc578063e7e1f1c71162000097578063e9cbd822116200007a578063e9cbd822146200069b578063f2fde38b14620006bc578063fb91fb4214620006d357600080fd5b8063e7e1f1c71462000616578063e985e9c5146200064f57600080fd5b8063c2ae0e3e14620005a1578063c87b56dd14620005c2578063d3c2638314620005d9578063d87aa64314620005ff57600080fd5b8063995c8472116200012a578063b3dd12a2116200010d578063b3dd12a21462000552578063b5541dd81462000573578063b88d4fde146200058a57600080fd5b8063995c84721462000518578063a22cb465146200053b57600080fd5b8063822dde8d14620004b75780638d18019514620004ce5780638da5cb5b14620004ef57806395d89b41146200050e57600080fd5b8063258d3c3311620001fe5780635ecd5be711620001c95780636352211e11620001ac5780636352211e146200047f57806370a082311462000496578063715018a614620004ad57600080fd5b80635ecd5be714620004515780636166cb93146200046857600080fd5b8063258d3c3314620003c757806342842e0e14620003de5780634835a6be14620003f557806354d89c91146200042e57600080fd5b8063095ea7b3116200025c5780631c02225f116200023f5780631c02225f14620003825780631ec3e6c414620003a557806323b872dd14620003b057600080fd5b8063095ea7b314620003465780630d0a01cf146200035f57600080fd5b806301ffc9a71462000292578063069af24114620002be57806306fdde0314620002f0578063081812fc1462000309575b600080fd5b620002a9620002a336600462002826565b620006f6565b60405190151581526020015b60405180910390f35b620002e1620002cf36600462002846565b60126020526000908152604090205481565b604051908152602001620002b5565b620002fa620007dd565b604051620002b59190620028d2565b620003206200031a36600462002846565b62000877565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001620002b5565b6200035d620003573660046200291c565b620008ad565b005b620002e16200037036600462002846565b600f6020526000908152604090205481565b620002e16200039336600462002846565b60116020526000908152604090205481565b600754620002e19081565b6200035d620003c13660046200294b565b62000a3d565b6200035d620003d836600462002846565b62000aca565b6200035d620003ef3660046200294b565b62000e3d565b620003206200040636600462002846565b60156020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b620002e16200043f36600462002846565b60136020526000908152604090205481565b620002e16200046236600462002aa6565b62000e5a565b620003206200047936600462002b85565b6200130c565b620003206200049036600462002846565b62001352565b620002e1620004a736600462002ba8565b620013c6565b6200035d6200147c565b6200035d620004c836600462002ba8565b62001494565b600854620003209073ffffffffffffffffffffffffffffffffffffffff1681565b60065473ffffffffffffffffffffffffffffffffffffffff1662000320565b620002fa620014ed565b620002e16200052936600462002846565b600e6020526000908152604090205481565b6200035d6200054c36600462002bd7565b620014fe565b600954620003209073ffffffffffffffffffffffffffffffffffffffff1681565b6200035d6200058436600462002ba8565b6200150f565b6200035d6200059b36600462002c15565b62001565565b600a54620003209073ffffffffffffffffffffffffffffffffffffffff1681565b620002fa620005d336600462002846565b620015f9565b620002a9620005ea36600462002ba8565b600c6020526000908152604090205460ff1681565b6200035d6200061036600462002b85565b62001676565b620003206200062736600462002846565b600d6020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b620002a96200066036600462002d04565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260056020908152604080832093909416825291909152205460ff1690565b600b54620003209073ffffffffffffffffffffffffffffffffffffffff1681565b6200035d620006cd36600462002ba8565b62001ac0565b620002e1620006e436600462002846565b60106020526000908152604090205481565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd0000000000000000000000000000000000000000000000000000000014806200078a57507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b80620007d757507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b606060008054620007ee9062002d37565b80601f01602080910402602001604051908101604052809291908181526020018280546200081c9062002d37565b80156200086d5780601f1062000841576101008083540402835291602001916200086d565b820191906000526020600020905b8154815290600101906020018083116200084f57829003601f168201915b5050505050905090565b6000620008848262001b63565b5060009081526004602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b6000620008ba8262001352565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603620009635760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82161480620009b8575073ffffffffffffffffffffffffffffffffffffffff8116600090815260056020908152604080832033845290915290205460ff165b62000a2c5760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c00000060648201526084016200095a565b62000a38838362001bd6565b505050565b62000a49338262001c78565b62000abd5760405162461bcd60e51b815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206f7220617070726f7665640000000000000000000000000000000000000060648201526084016200095a565b62000a3883838362001d3e565b60008181526013602052604090205442101562000b2a5760405162461bcd60e51b815260206004820152601660248201527f52656465656d206973206e6f74206f70656e207965740000000000000000000060448201526064016200095a565b6000818152601560205260408082205490517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff909116919082906370a0823190602401602060405180830381865afa15801562000ba8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000bce919062002d8c565b600b546000858152600d60205260408082205490517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015293945090929116906370a0823190602401602060405180830381865afa15801562000c52573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000c78919062002d8c565b60008581526010602052604090205462000c93908462002dd5565b62000c9f919062002e11565b600b546000868152600d6020526040908190205490517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201523360248201526044810184905292935016906323b872dd906064016020604051808303816000875af115801562000d30573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000d56919062002e2b565b506040517f42966c680000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff8416906342966c6890602401600060405180830381600087803b15801562000dc057600080fd5b505af115801562000dd5573d6000803e3d6000fd5b5050506000858152600d602090815260409182902054915184815233935073ffffffffffffffffffffffffffffffffffffffff909216917f6c9b4e508889a1ad47d9f443fa4a922856051bb1cc015e2048740e560e0f46f1910160405180910390a350505050565b62000a388383836040518060200160405280600081525062001565565b60008062000e6760075490565b905062000e78600780546001019055565b62000e84898262001ff5565b60005b885181101562000fec57600c60008a838151811062000eaa5762000eaa62002e4b565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff1682528101919091526040016000205460ff1662000f525760405162461bcd60e51b815260206004820152603760248201527f596f7520747269656420746f2063726561746520612066756e6420776974682060448201527f61206e6f6e2077686974656c697374656420746f6b656e00000000000000000060648201526084016200095a565b600082815260146020526040902089518a908390811062000f775762000f7762002e4b565b60209081029190910181015182546001810184556000938452919092200180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9092169190911790558062000fe38162002e7a565b91505062000e87565b506008546009546040517fda7323b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201524660248201523060448201526064810184905260006084820181905260c060a483015260c4820181905292919091169063da7323b39060e4016020604051808303816000875af11580156200108f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620010b5919062002eb5565b905080600d600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555087600e60008481526020019081526020016000208190555086600f6000848152602001908152602001600020819055508560116000848152602001908152602001600020819055508460126000848152602001908152602001600020819055508360136000848152602001908152602001600020819055506000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1663e0921f8560e01b8e8e308b604051602401620011c7949392919062002ed5565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009094169390931790925290516200125190620027e9565b6200125e92919062002f49565b604051809103906000f0801580156200127b573d6000803e3d6000fd5b5060008481526015602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85811691821790925591519394509092908516917f9de2be681a220396ec1518a4ecd6c853a760e34fb9174e9213d7aa5a8b12f37991a350909b9a5050505050505050505050565b601460205281600052604060002081815481106200132957600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169150829050565b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff1680620007d75760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e204944000000000000000060448201526064016200095a565b600073ffffffffffffffffffffffffffffffffffffffff8216620014535760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e6572000000000000000000000000000000000000000000000060648201526084016200095a565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b62001486620021d2565b6200149260006200223b565b565b6200149e620021d2565b73ffffffffffffffffffffffffffffffffffffffff166000908152600c6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b606060018054620007ee9062002d37565b6200150b338383620022b2565b5050565b62001519620021d2565b73ffffffffffffffffffffffffffffffffffffffff166000908152600c6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b62001571338362001c78565b620015e55760405162461bcd60e51b815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206f7220617070726f7665640000000000000000000000000000000000000060648201526084016200095a565b620015f384848484620023c7565b50505050565b6060620016068262001b63565b60006200161e60408051602081019091526000815290565b905060008151116200164057604051806020016040528060008152506200166f565b806200164c8462002456565b6040516020016200165f92919062002f7a565b6040516020818303038152906040525b9392505050565b60008211620016c85760405162461bcd60e51b815260206004820152601e60248201527f596f75206e65656420746f20696e76657374206d6f7265207468616e2030000060448201526064016200095a565b600081815260116020526040902054421015620017285760405162461bcd60e51b815260206004820152601b60248201527f496e76657374696d656e74206973206e6f74206f70656e20796574000000000060448201526064016200095a565b600081815260126020526040902054421115620017885760405162461bcd60e51b815260206004820152601560248201527f496e76657374696d656e7420697320636c6f736564000000000000000000000060448201526064016200095a565b6000818152600d602052604090205473ffffffffffffffffffffffffffffffffffffffff1680620017fc5760405162461bcd60e51b815260206004820152600e60248201527f46756e64206e6f7420666f756e6400000000000000000000000000000000000060448201526064016200095a565b6000828152600e6020526040812054612710906200181b908662002e11565b62001827919062002dd5565b9050600062001837828662002fad565b600b546040517f23b872dd00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff8681166024830152604482018490529293509116906323b872dd906064016020604051808303816000875af1158015620018b9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620018df919062002e2b565b50600b5473ffffffffffffffffffffffffffffffffffffffff166323b872dd336200190a8762001352565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff928316600482015291166024820152604481018590526064016020604051808303816000875af115801562001984573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620019aa919062002e2b565b5060008481526010602052604081208054839290620019cb90849062002fc3565b9091555050600084815260156020526040908190205490517f40c10f190000000000000000000000000000000000000000000000000000000081523360048201526024810183905273ffffffffffffffffffffffffffffffffffffffff9091169081906340c10f1990604401600060405180830381600087803b15801562001a5257600080fd5b505af115801562001a67573d6000803e3d6000fd5b505060405188815233925073ffffffffffffffffffffffffffffffffffffffff871691507f15bcca398c35efcf80f9148394b3ff1b358089610b2e18b315a3a18050a509429060200160405180910390a3505050505050565b62001aca620021d2565b73ffffffffffffffffffffffffffffffffffffffff811662001b555760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016200095a565b62001b60816200223b565b50565b60008181526002602052604090205473ffffffffffffffffffffffffffffffffffffffff1662001b605760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e204944000000000000000060448201526064016200095a565b600081815260046020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8416908117909155819062001c328262001352565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008062001c868362001352565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148062001cf5575073ffffffffffffffffffffffffffffffffffffffff80821660009081526005602090815260408083209388168352929052205460ff165b8062001d3657508373ffffffffffffffffffffffffffffffffffffffff1662001d1e8462000877565b73ffffffffffffffffffffffffffffffffffffffff16145b949350505050565b8273ffffffffffffffffffffffffffffffffffffffff1662001d608262001352565b73ffffffffffffffffffffffffffffffffffffffff161462001deb5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e657200000000000000000000000000000000000000000000000000000060648201526084016200095a565b73ffffffffffffffffffffffffffffffffffffffff821662001e755760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016200095a565b8273ffffffffffffffffffffffffffffffffffffffff1662001e978262001352565b73ffffffffffffffffffffffffffffffffffffffff161462001f225760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e657200000000000000000000000000000000000000000000000000000060648201526084016200095a565b600081815260046020908152604080832080547fffffffffffffffffffffffff000000000000000000000000000000000000000090811690915573ffffffffffffffffffffffffffffffffffffffff8781168086526003855283862080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b73ffffffffffffffffffffffffffffffffffffffff82166200205a5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016200095a565b60008181526002602052604090205473ffffffffffffffffffffffffffffffffffffffff1615620020ce5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016200095a565b60008181526002602052604090205473ffffffffffffffffffffffffffffffffffffffff1615620021425760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016200095a565b73ffffffffffffffffffffffffffffffffffffffff8216600081815260036020908152604080832080546001019055848352600290915280822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60065473ffffffffffffffffffffffffffffffffffffffff163314620014925760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016200095a565b6006805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036200232f5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016200095a565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526005602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b620023d484848462001d3e565b620023e2848484846200251b565b620015f35760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016200095a565b60606000620024658362002700565b600101905060008167ffffffffffffffff81111562002488576200248862002991565b6040519080825280601f01601f191660200182016040528015620024b3576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8504945084620024bd57509392505050565b600073ffffffffffffffffffffffffffffffffffffffff84163b15620026f5576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063150b7a02906200259590339089908890889060040162002fd9565b6020604051808303816000875af1925050508015620025f1575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252620025ee9181019062003024565b60015b620026a9573d80801562002622576040519150601f19603f3d011682016040523d82523d6000602084013e62002627565b606091505b508051600003620026a15760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016200095a565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a020000000000000000000000000000000000000000000000000000000014905062001d36565b506001949350505050565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106200274a577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef8100000000831062002777576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106200279657662386f26fc10000830492506010015b6305f5e1008310620027af576305f5e100830492506008015b6127108310620027c457612710830492506004015b60648310620027d7576064830492506002015b600a8310620007d75760010192915050565b6109a0806200304583390190565b7fffffffff000000000000000000000000000000000000000000000000000000008116811462001b6057600080fd5b6000602082840312156200283957600080fd5b81356200166f81620027f7565b6000602082840312156200285957600080fd5b5035919050565b60005b838110156200287d57818101518382015260200162002863565b50506000910152565b60008151808452620028a081602086016020860162002860565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006200166f602083018462002886565b73ffffffffffffffffffffffffffffffffffffffff8116811462001b6057600080fd5b80356200291781620028e7565b919050565b600080604083850312156200293057600080fd5b82356200293d81620028e7565b946020939093013593505050565b6000806000606084860312156200296157600080fd5b83356200296e81620028e7565b925060208401356200298081620028e7565b929592945050506040919091013590565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171562002a0a5762002a0a62002991565b604052919050565b600082601f83011262002a2457600080fd5b8135602067ffffffffffffffff82111562002a435762002a4362002991565b8160051b62002a54828201620029c0565b928352848101820192828101908785111562002a6f57600080fd5b83870192505b8483101562002a9b57823562002a8b81620028e7565b8252918301919083019062002a75565b979650505050505050565b60008060008060008060008060006101008a8c03121562002ac657600080fd5b893567ffffffffffffffff8082111562002adf57600080fd5b818c0191508c601f83011262002af457600080fd5b81358181111562002b0457600080fd5b8d602082850101111562002b1757600080fd5b602083019b50809a505062002b2f60208d016200290a565b985060408c013591508082111562002b4657600080fd5b5062002b558c828d0162002a12565b999c989b5096996060810135986080820135985060a0820135975060c0820135965060e090910135945092505050565b6000806040838503121562002b9957600080fd5b50508035926020909101359150565b60006020828403121562002bbb57600080fd5b81356200166f81620028e7565b801515811462001b6057600080fd5b6000806040838503121562002beb57600080fd5b823562002bf881620028e7565b9150602083013562002c0a8162002bc8565b809150509250929050565b6000806000806080858703121562002c2c57600080fd5b843562002c3981620028e7565b935060208581013562002c4c81620028e7565b935060408601359250606086013567ffffffffffffffff8082111562002c7157600080fd5b818801915088601f83011262002c8657600080fd5b81358181111562002c9b5762002c9b62002991565b62002ccd847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601620029c0565b9150808252898482850101111562002ce457600080fd5b808484018584013760008482840101525080935050505092959194509250565b6000806040838503121562002d1857600080fd5b823562002d2581620028e7565b9150602083013562002c0a81620028e7565b600181811c9082168062002d4c57607f821691505b60208210810362002d86577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60006020828403121562002d9f57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008262002e0c577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b8082028115828204841417620007d757620007d762002da6565b60006020828403121562002e3e57600080fd5b81516200166f8162002bc8565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820362002eae5762002eae62002da6565b5060010190565b60006020828403121562002ec857600080fd5b81516200166f81620028e7565b6060815283606082015283856080830137600060808583010152600060807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f870116830101905073ffffffffffffffffffffffffffffffffffffffff8416602083015282604083015295945050505050565b73ffffffffffffffffffffffffffffffffffffffff8316815260406020820152600062001d36604083018462002886565b6000835162002f8e81846020880162002860565b83519083019062002fa481836020880162002860565b01949350505050565b81810381811115620007d757620007d762002da6565b80820180821115620007d757620007d762002da6565b600073ffffffffffffffffffffffffffffffffffffffff8087168352808616602084015250836040830152608060608301526200301a608083018462002886565b9695505050505050565b6000602082840312156200303757600080fd5b81516200166f81620027f756fe60806040526040516109a03803806109a08339810160408190526100229161045b565b61002e82826000610035565b5050610585565b61003e83610100565b6040516001600160a01b038416907f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e90600090a260008251118061007f5750805b156100fb576100f9836001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100e9919061051b565b836102a360201b6100291760201c565b505b505050565b610113816102cf60201b6100551760201c565b6101725760405162461bcd60e51b815260206004820152602560248201527f455243313936373a206e657720626561636f6e206973206e6f74206120636f6e6044820152641d1c9858dd60da1b60648201526084015b60405180910390fd5b6101e6816001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d7919061051b565b6102cf60201b6100551760201c565b61024b5760405162461bcd60e51b815260206004820152603060248201527f455243313936373a20626561636f6e20696d706c656d656e746174696f6e206960448201526f1cc81b9bdd08184818dbdb9d1c9858dd60821b6064820152608401610169565b806102827fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5060001b6102de60201b6100711760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b60606102c88383604051806060016040528060278152602001610979602791396102e1565b9392505050565b6001600160a01b03163b151590565b90565b6060600080856001600160a01b0316856040516102fe9190610536565b600060405180830381855af49150503d8060008114610339576040519150601f19603f3d011682016040523d82523d6000602084013e61033e565b606091505b5090925090506103508683838761035a565b9695505050505050565b606083156103c95782516000036103c2576001600160a01b0385163b6103c25760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610169565b50816103d3565b6103d383836103db565b949350505050565b8151156103eb5781518083602001fd5b8060405162461bcd60e51b81526004016101699190610552565b80516001600160a01b038116811461041c57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561045257818101518382015260200161043a565b50506000910152565b6000806040838503121561046e57600080fd5b61047783610405565b60208401519092506001600160401b038082111561049457600080fd5b818501915085601f8301126104a857600080fd5b8151818111156104ba576104ba610421565b604051601f8201601f19908116603f011681019083821181831017156104e2576104e2610421565b816040528281528860208487010111156104fb57600080fd5b61050c836020830160208801610437565b80955050505050509250929050565b60006020828403121561052d57600080fd5b6102c882610405565b60008251610548818460208701610437565b9190910192915050565b6020815260008251806020840152610571816040850160208701610437565b601f01601f19169190910160400192915050565b6103e5806105946000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610074565b610127565b565b606061004e83836040518060600160405280602781526020016103896027913961014b565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b90565b60006100b47fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d505473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff16635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100fe573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061012291906102c1565b905090565b3660008037600080366000845af43d6000803e808015610146573d6000f35b3d6000fd5b60606000808573ffffffffffffffffffffffffffffffffffffffff1685604051610175919061031b565b600060405180830381855af49150503d80600081146101b0576040519150601f19603f3d011682016040523d82523d6000602084013e6101b5565b606091505b50915091506101c6868383876101d0565b9695505050505050565b6060831561026b5782516000036102645773ffffffffffffffffffffffffffffffffffffffff85163b610264576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064015b60405180910390fd5b5081610275565b610275838361027d565b949350505050565b81511561028d5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025b9190610337565b6000602082840312156102d357600080fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811461004e57600080fd5b60005b838110156103125781810151838201526020016102fa565b50506000910152565b6000825161032d8184602087016102f7565b9190910192915050565b60208152600082518060208401526103568160408501602087016102f7565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220d9ac563cd689ef8df311ce8a053d76366e09f1e49f9e40ca38bdb8213e39b44864736f6c63430008110033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212201e455f0df1b3de1b12a790e042888599b47aa6d5d974cfa24e13d8d06440ee8a64736f6c63430008110033",
      "sourceMap": "590:5272:60:-:0;;;1831:395;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1390:113:38;;;;;;;;;;;;;-1:-1:-1;;;1390:113:38;;;;;;;;;;;;;;;;-1:-1:-1;;;1390:113:38;;;1464:5;1456;:13;;;;;;:::i;:::-;-1:-1:-1;1479:7:38;:17;1489:7;1479;:17;:::i;:::-;;1390:113;;936:32:26;955:12;:10;;;:12;;:::i;:::-;936:18;:32::i;:::-;1990:13:60::1;:48:::0;;-1:-1:-1;;;;;1990:48:60;;::::1;-1:-1:-1::0;;;;;;1990:48:60;;::::1;;::::0;;;2048:21:::1;:46:::0;;;;::::1;::::0;;::::1;::::0;;;::::1;::::0;;;2130:10:::1;:32:::0;;;;::::1;::::0;;::::1;::::0;;;::::1;::::0;;2172:24:::1;:47:::0;;;;;::::1;::::0;::::1;;::::0;;590:5272;;640:96:43;719:10;;640:96::o;2426:187:26:-;2518:6;;;-1:-1:-1;;;;;2534:17:26;;;-1:-1:-1;;;;;;2534:17:26;;;;;;;2566:40;;2518:6;;;2534:17;2518:6;;2566:40;;2499:16;;2566:40;2489:124;2426:187;:::o;14:177:65:-;93:13;;-1:-1:-1;;;;;135:31:65;;125:42;;115:70;;181:1;178;171:12;115:70;14:177;;;:::o;196:464::-;293:6;301;309;317;370:3;358:9;349:7;345:23;341:33;338:53;;;387:1;384;377:12;338:53;410:40;440:9;410:40;:::i;:::-;400:50;;469:49;514:2;503:9;499:18;469:49;:::i;:::-;459:59;;537:49;582:2;571:9;567:18;537:49;:::i;:::-;527:59;;605:49;650:2;639:9;635:18;605:49;:::i;:::-;595:59;;196:464;;;;;;;:::o;665:127::-;726:10;721:3;717:20;714:1;707:31;757:4;754:1;747:15;781:4;778:1;771:15;797:380;876:1;872:12;;;;919;;;940:61;;994:4;986:6;982:17;972:27;;940:61;1047:2;1039:6;1036:14;1016:18;1013:38;1010:161;;1093:10;1088:3;1084:20;1081:1;1074:31;1128:4;1125:1;1118:15;1156:4;1153:1;1146:15;1010:161;;797:380;;;:::o;1308:545::-;1410:2;1405:3;1402:11;1399:448;;;1446:1;1471:5;1467:2;1460:17;1516:4;1512:2;1502:19;1586:2;1574:10;1570:19;1567:1;1563:27;1557:4;1553:38;1622:4;1610:10;1607:20;1604:47;;;-1:-1:-1;1645:4:65;1604:47;1700:2;1695:3;1691:12;1688:1;1684:20;1678:4;1674:31;1664:41;;1755:82;1773:2;1766:5;1763:13;1755:82;;;1818:17;;;1799:1;1788:13;1755:82;;;1759:3;;;1399:448;1308:545;;;:::o;2029:1352::-;2149:10;;-1:-1:-1;;;;;2171:30:65;;2168:56;;;2204:18;;:::i;:::-;2233:97;2323:6;2283:38;2315:4;2309:11;2283:38;:::i;:::-;2277:4;2233:97;:::i;:::-;2385:4;;2449:2;2438:14;;2466:1;2461:663;;;;3168:1;3185:6;3182:89;;;-1:-1:-1;3237:19:65;;;3231:26;3182:89;-1:-1:-1;;1986:1:65;1982:11;;;1978:24;1974:29;1964:40;2010:1;2006:11;;;1961:57;3284:81;;2431:944;;2461:663;1255:1;1248:14;;;1292:4;1279:18;;-1:-1:-1;;2497:20:65;;;2615:236;2629:7;2626:1;2623:14;2615:236;;;2718:19;;;2712:26;2697:42;;2810:27;;;;2778:1;2766:14;;;;2645:19;;2615:236;;;2619:3;2879:6;2870:7;2867:19;2864:201;;;2940:19;;;2934:26;-1:-1:-1;;3023:1:65;3019:14;;;3035:3;3015:24;3011:37;3007:42;2992:58;2977:74;;2864:201;-1:-1:-1;;;;;3111:1:65;3095:14;;;3091:22;3078:36;;-1:-1:-1;2029:1352:65:o;:::-;590:5272:60;;;;;;",
      "linkReferences": {}
    },
    "deployedBytecode": {
      "object": "0x60806040523480156200001157600080fd5b50600436106200028d5760003560e01c8063822dde8d116200015f578063c2ae0e3e11620000cc578063e7e1f1c71162000097578063e9cbd822116200007a578063e9cbd822146200069b578063f2fde38b14620006bc578063fb91fb4214620006d357600080fd5b8063e7e1f1c71462000616578063e985e9c5146200064f57600080fd5b8063c2ae0e3e14620005a1578063c87b56dd14620005c2578063d3c2638314620005d9578063d87aa64314620005ff57600080fd5b8063995c8472116200012a578063b3dd12a2116200010d578063b3dd12a21462000552578063b5541dd81462000573578063b88d4fde146200058a57600080fd5b8063995c84721462000518578063a22cb465146200053b57600080fd5b8063822dde8d14620004b75780638d18019514620004ce5780638da5cb5b14620004ef57806395d89b41146200050e57600080fd5b8063258d3c3311620001fe5780635ecd5be711620001c95780636352211e11620001ac5780636352211e146200047f57806370a082311462000496578063715018a614620004ad57600080fd5b80635ecd5be714620004515780636166cb93146200046857600080fd5b8063258d3c3314620003c757806342842e0e14620003de5780634835a6be14620003f557806354d89c91146200042e57600080fd5b8063095ea7b3116200025c5780631c02225f116200023f5780631c02225f14620003825780631ec3e6c414620003a557806323b872dd14620003b057600080fd5b8063095ea7b314620003465780630d0a01cf146200035f57600080fd5b806301ffc9a71462000292578063069af24114620002be57806306fdde0314620002f0578063081812fc1462000309575b600080fd5b620002a9620002a336600462002826565b620006f6565b60405190151581526020015b60405180910390f35b620002e1620002cf36600462002846565b60126020526000908152604090205481565b604051908152602001620002b5565b620002fa620007dd565b604051620002b59190620028d2565b620003206200031a36600462002846565b62000877565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001620002b5565b6200035d620003573660046200291c565b620008ad565b005b620002e16200037036600462002846565b600f6020526000908152604090205481565b620002e16200039336600462002846565b60116020526000908152604090205481565b600754620002e19081565b6200035d620003c13660046200294b565b62000a3d565b6200035d620003d836600462002846565b62000aca565b6200035d620003ef3660046200294b565b62000e3d565b620003206200040636600462002846565b60156020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b620002e16200043f36600462002846565b60136020526000908152604090205481565b620002e16200046236600462002aa6565b62000e5a565b620003206200047936600462002b85565b6200130c565b620003206200049036600462002846565b62001352565b620002e1620004a736600462002ba8565b620013c6565b6200035d6200147c565b6200035d620004c836600462002ba8565b62001494565b600854620003209073ffffffffffffffffffffffffffffffffffffffff1681565b60065473ffffffffffffffffffffffffffffffffffffffff1662000320565b620002fa620014ed565b620002e16200052936600462002846565b600e6020526000908152604090205481565b6200035d6200054c36600462002bd7565b620014fe565b600954620003209073ffffffffffffffffffffffffffffffffffffffff1681565b6200035d6200058436600462002ba8565b6200150f565b6200035d6200059b36600462002c15565b62001565565b600a54620003209073ffffffffffffffffffffffffffffffffffffffff1681565b620002fa620005d336600462002846565b620015f9565b620002a9620005ea36600462002ba8565b600c6020526000908152604090205460ff1681565b6200035d6200061036600462002b85565b62001676565b620003206200062736600462002846565b600d6020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b620002a96200066036600462002d04565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260056020908152604080832093909416825291909152205460ff1690565b600b54620003209073ffffffffffffffffffffffffffffffffffffffff1681565b6200035d620006cd36600462002ba8565b62001ac0565b620002e1620006e436600462002846565b60106020526000908152604090205481565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd0000000000000000000000000000000000000000000000000000000014806200078a57507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b80620007d757507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b606060008054620007ee9062002d37565b80601f01602080910402602001604051908101604052809291908181526020018280546200081c9062002d37565b80156200086d5780601f1062000841576101008083540402835291602001916200086d565b820191906000526020600020905b8154815290600101906020018083116200084f57829003601f168201915b5050505050905090565b6000620008848262001b63565b5060009081526004602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b6000620008ba8262001352565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603620009635760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82161480620009b8575073ffffffffffffffffffffffffffffffffffffffff8116600090815260056020908152604080832033845290915290205460ff165b62000a2c5760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c00000060648201526084016200095a565b62000a38838362001bd6565b505050565b62000a49338262001c78565b62000abd5760405162461bcd60e51b815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206f7220617070726f7665640000000000000000000000000000000000000060648201526084016200095a565b62000a3883838362001d3e565b60008181526013602052604090205442101562000b2a5760405162461bcd60e51b815260206004820152601660248201527f52656465656d206973206e6f74206f70656e207965740000000000000000000060448201526064016200095a565b6000818152601560205260408082205490517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff909116919082906370a0823190602401602060405180830381865afa15801562000ba8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000bce919062002d8c565b600b546000858152600d60205260408082205490517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015293945090929116906370a0823190602401602060405180830381865afa15801562000c52573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000c78919062002d8c565b60008581526010602052604090205462000c93908462002dd5565b62000c9f919062002e11565b600b546000868152600d6020526040908190205490517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201523360248201526044810184905292935016906323b872dd906064016020604051808303816000875af115801562000d30573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000d56919062002e2b565b506040517f42966c680000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff8416906342966c6890602401600060405180830381600087803b15801562000dc057600080fd5b505af115801562000dd5573d6000803e3d6000fd5b5050506000858152600d602090815260409182902054915184815233935073ffffffffffffffffffffffffffffffffffffffff909216917f6c9b4e508889a1ad47d9f443fa4a922856051bb1cc015e2048740e560e0f46f1910160405180910390a350505050565b62000a388383836040518060200160405280600081525062001565565b60008062000e6760075490565b905062000e78600780546001019055565b62000e84898262001ff5565b60005b885181101562000fec57600c60008a838151811062000eaa5762000eaa62002e4b565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff1682528101919091526040016000205460ff1662000f525760405162461bcd60e51b815260206004820152603760248201527f596f7520747269656420746f2063726561746520612066756e6420776974682060448201527f61206e6f6e2077686974656c697374656420746f6b656e00000000000000000060648201526084016200095a565b600082815260146020526040902089518a908390811062000f775762000f7762002e4b565b60209081029190910181015182546001810184556000938452919092200180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9092169190911790558062000fe38162002e7a565b91505062000e87565b506008546009546040517fda7323b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201524660248201523060448201526064810184905260006084820181905260c060a483015260c4820181905292919091169063da7323b39060e4016020604051808303816000875af11580156200108f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620010b5919062002eb5565b905080600d600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555087600e60008481526020019081526020016000208190555086600f6000848152602001908152602001600020819055508560116000848152602001908152602001600020819055508460126000848152602001908152602001600020819055508360136000848152602001908152602001600020819055506000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1663e0921f8560e01b8e8e308b604051602401620011c7949392919062002ed5565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009094169390931790925290516200125190620027e9565b6200125e92919062002f49565b604051809103906000f0801580156200127b573d6000803e3d6000fd5b5060008481526015602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85811691821790925591519394509092908516917f9de2be681a220396ec1518a4ecd6c853a760e34fb9174e9213d7aa5a8b12f37991a350909b9a5050505050505050505050565b601460205281600052604060002081815481106200132957600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169150829050565b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff1680620007d75760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e204944000000000000000060448201526064016200095a565b600073ffffffffffffffffffffffffffffffffffffffff8216620014535760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e6572000000000000000000000000000000000000000000000060648201526084016200095a565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b62001486620021d2565b6200149260006200223b565b565b6200149e620021d2565b73ffffffffffffffffffffffffffffffffffffffff166000908152600c6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b606060018054620007ee9062002d37565b6200150b338383620022b2565b5050565b62001519620021d2565b73ffffffffffffffffffffffffffffffffffffffff166000908152600c6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b62001571338362001c78565b620015e55760405162461bcd60e51b815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206f7220617070726f7665640000000000000000000000000000000000000060648201526084016200095a565b620015f384848484620023c7565b50505050565b6060620016068262001b63565b60006200161e60408051602081019091526000815290565b905060008151116200164057604051806020016040528060008152506200166f565b806200164c8462002456565b6040516020016200165f92919062002f7a565b6040516020818303038152906040525b9392505050565b60008211620016c85760405162461bcd60e51b815260206004820152601e60248201527f596f75206e65656420746f20696e76657374206d6f7265207468616e2030000060448201526064016200095a565b600081815260116020526040902054421015620017285760405162461bcd60e51b815260206004820152601b60248201527f496e76657374696d656e74206973206e6f74206f70656e20796574000000000060448201526064016200095a565b600081815260126020526040902054421115620017885760405162461bcd60e51b815260206004820152601560248201527f496e76657374696d656e7420697320636c6f736564000000000000000000000060448201526064016200095a565b6000818152600d602052604090205473ffffffffffffffffffffffffffffffffffffffff1680620017fc5760405162461bcd60e51b815260206004820152600e60248201527f46756e64206e6f7420666f756e6400000000000000000000000000000000000060448201526064016200095a565b6000828152600e6020526040812054612710906200181b908662002e11565b62001827919062002dd5565b9050600062001837828662002fad565b600b546040517f23b872dd00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff8681166024830152604482018490529293509116906323b872dd906064016020604051808303816000875af1158015620018b9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620018df919062002e2b565b50600b5473ffffffffffffffffffffffffffffffffffffffff166323b872dd336200190a8762001352565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff928316600482015291166024820152604481018590526064016020604051808303816000875af115801562001984573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620019aa919062002e2b565b5060008481526010602052604081208054839290620019cb90849062002fc3565b9091555050600084815260156020526040908190205490517f40c10f190000000000000000000000000000000000000000000000000000000081523360048201526024810183905273ffffffffffffffffffffffffffffffffffffffff9091169081906340c10f1990604401600060405180830381600087803b15801562001a5257600080fd5b505af115801562001a67573d6000803e3d6000fd5b505060405188815233925073ffffffffffffffffffffffffffffffffffffffff871691507f15bcca398c35efcf80f9148394b3ff1b358089610b2e18b315a3a18050a509429060200160405180910390a3505050505050565b62001aca620021d2565b73ffffffffffffffffffffffffffffffffffffffff811662001b555760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016200095a565b62001b60816200223b565b50565b60008181526002602052604090205473ffffffffffffffffffffffffffffffffffffffff1662001b605760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e204944000000000000000060448201526064016200095a565b600081815260046020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8416908117909155819062001c328262001352565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008062001c868362001352565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148062001cf5575073ffffffffffffffffffffffffffffffffffffffff80821660009081526005602090815260408083209388168352929052205460ff165b8062001d3657508373ffffffffffffffffffffffffffffffffffffffff1662001d1e8462000877565b73ffffffffffffffffffffffffffffffffffffffff16145b949350505050565b8273ffffffffffffffffffffffffffffffffffffffff1662001d608262001352565b73ffffffffffffffffffffffffffffffffffffffff161462001deb5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e657200000000000000000000000000000000000000000000000000000060648201526084016200095a565b73ffffffffffffffffffffffffffffffffffffffff821662001e755760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016200095a565b8273ffffffffffffffffffffffffffffffffffffffff1662001e978262001352565b73ffffffffffffffffffffffffffffffffffffffff161462001f225760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e657200000000000000000000000000000000000000000000000000000060648201526084016200095a565b600081815260046020908152604080832080547fffffffffffffffffffffffff000000000000000000000000000000000000000090811690915573ffffffffffffffffffffffffffffffffffffffff8781168086526003855283862080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b73ffffffffffffffffffffffffffffffffffffffff82166200205a5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016200095a565b60008181526002602052604090205473ffffffffffffffffffffffffffffffffffffffff1615620020ce5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016200095a565b60008181526002602052604090205473ffffffffffffffffffffffffffffffffffffffff1615620021425760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016200095a565b73ffffffffffffffffffffffffffffffffffffffff8216600081815260036020908152604080832080546001019055848352600290915280822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60065473ffffffffffffffffffffffffffffffffffffffff163314620014925760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016200095a565b6006805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036200232f5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016200095a565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526005602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b620023d484848462001d3e565b620023e2848484846200251b565b620015f35760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016200095a565b60606000620024658362002700565b600101905060008167ffffffffffffffff81111562002488576200248862002991565b6040519080825280601f01601f191660200182016040528015620024b3576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8504945084620024bd57509392505050565b600073ffffffffffffffffffffffffffffffffffffffff84163b15620026f5576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063150b7a02906200259590339089908890889060040162002fd9565b6020604051808303816000875af1925050508015620025f1575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252620025ee9181019062003024565b60015b620026a9573d80801562002622576040519150601f19603f3d011682016040523d82523d6000602084013e62002627565b606091505b508051600003620026a15760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016200095a565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a020000000000000000000000000000000000000000000000000000000014905062001d36565b506001949350505050565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106200274a577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef8100000000831062002777576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106200279657662386f26fc10000830492506010015b6305f5e1008310620027af576305f5e100830492506008015b6127108310620027c457612710830492506004015b60648310620027d7576064830492506002015b600a8310620007d75760010192915050565b6109a0806200304583390190565b7fffffffff000000000000000000000000000000000000000000000000000000008116811462001b6057600080fd5b6000602082840312156200283957600080fd5b81356200166f81620027f7565b6000602082840312156200285957600080fd5b5035919050565b60005b838110156200287d57818101518382015260200162002863565b50506000910152565b60008151808452620028a081602086016020860162002860565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006200166f602083018462002886565b73ffffffffffffffffffffffffffffffffffffffff8116811462001b6057600080fd5b80356200291781620028e7565b919050565b600080604083850312156200293057600080fd5b82356200293d81620028e7565b946020939093013593505050565b6000806000606084860312156200296157600080fd5b83356200296e81620028e7565b925060208401356200298081620028e7565b929592945050506040919091013590565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171562002a0a5762002a0a62002991565b604052919050565b600082601f83011262002a2457600080fd5b8135602067ffffffffffffffff82111562002a435762002a4362002991565b8160051b62002a54828201620029c0565b928352848101820192828101908785111562002a6f57600080fd5b83870192505b8483101562002a9b57823562002a8b81620028e7565b8252918301919083019062002a75565b979650505050505050565b60008060008060008060008060006101008a8c03121562002ac657600080fd5b893567ffffffffffffffff8082111562002adf57600080fd5b818c0191508c601f83011262002af457600080fd5b81358181111562002b0457600080fd5b8d602082850101111562002b1757600080fd5b602083019b50809a505062002b2f60208d016200290a565b985060408c013591508082111562002b4657600080fd5b5062002b558c828d0162002a12565b999c989b5096996060810135986080820135985060a0820135975060c0820135965060e090910135945092505050565b6000806040838503121562002b9957600080fd5b50508035926020909101359150565b60006020828403121562002bbb57600080fd5b81356200166f81620028e7565b801515811462001b6057600080fd5b6000806040838503121562002beb57600080fd5b823562002bf881620028e7565b9150602083013562002c0a8162002bc8565b809150509250929050565b6000806000806080858703121562002c2c57600080fd5b843562002c3981620028e7565b935060208581013562002c4c81620028e7565b935060408601359250606086013567ffffffffffffffff8082111562002c7157600080fd5b818801915088601f83011262002c8657600080fd5b81358181111562002c9b5762002c9b62002991565b62002ccd847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601620029c0565b9150808252898482850101111562002ce457600080fd5b808484018584013760008482840101525080935050505092959194509250565b6000806040838503121562002d1857600080fd5b823562002d2581620028e7565b9150602083013562002c0a81620028e7565b600181811c9082168062002d4c57607f821691505b60208210810362002d86577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60006020828403121562002d9f57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008262002e0c577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b8082028115828204841417620007d757620007d762002da6565b60006020828403121562002e3e57600080fd5b81516200166f8162002bc8565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820362002eae5762002eae62002da6565b5060010190565b60006020828403121562002ec857600080fd5b81516200166f81620028e7565b6060815283606082015283856080830137600060808583010152600060807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f870116830101905073ffffffffffffffffffffffffffffffffffffffff8416602083015282604083015295945050505050565b73ffffffffffffffffffffffffffffffffffffffff8316815260406020820152600062001d36604083018462002886565b6000835162002f8e81846020880162002860565b83519083019062002fa481836020880162002860565b01949350505050565b81810381811115620007d757620007d762002da6565b80820180821115620007d757620007d762002da6565b600073ffffffffffffffffffffffffffffffffffffffff8087168352808616602084015250836040830152608060608301526200301a608083018462002886565b9695505050505050565b6000602082840312156200303757600080fd5b81516200166f81620027f756fe60806040526040516109a03803806109a08339810160408190526100229161045b565b61002e82826000610035565b5050610585565b61003e83610100565b6040516001600160a01b038416907f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e90600090a260008251118061007f5750805b156100fb576100f9836001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100e9919061051b565b836102a360201b6100291760201c565b505b505050565b610113816102cf60201b6100551760201c565b6101725760405162461bcd60e51b815260206004820152602560248201527f455243313936373a206e657720626561636f6e206973206e6f74206120636f6e6044820152641d1c9858dd60da1b60648201526084015b60405180910390fd5b6101e6816001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d7919061051b565b6102cf60201b6100551760201c565b61024b5760405162461bcd60e51b815260206004820152603060248201527f455243313936373a20626561636f6e20696d706c656d656e746174696f6e206960448201526f1cc81b9bdd08184818dbdb9d1c9858dd60821b6064820152608401610169565b806102827fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5060001b6102de60201b6100711760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b60606102c88383604051806060016040528060278152602001610979602791396102e1565b9392505050565b6001600160a01b03163b151590565b90565b6060600080856001600160a01b0316856040516102fe9190610536565b600060405180830381855af49150503d8060008114610339576040519150601f19603f3d011682016040523d82523d6000602084013e61033e565b606091505b5090925090506103508683838761035a565b9695505050505050565b606083156103c95782516000036103c2576001600160a01b0385163b6103c25760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610169565b50816103d3565b6103d383836103db565b949350505050565b8151156103eb5781518083602001fd5b8060405162461bcd60e51b81526004016101699190610552565b80516001600160a01b038116811461041c57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561045257818101518382015260200161043a565b50506000910152565b6000806040838503121561046e57600080fd5b61047783610405565b60208401519092506001600160401b038082111561049457600080fd5b818501915085601f8301126104a857600080fd5b8151818111156104ba576104ba610421565b604051601f8201601f19908116603f011681019083821181831017156104e2576104e2610421565b816040528281528860208487010111156104fb57600080fd5b61050c836020830160208801610437565b80955050505050509250929050565b60006020828403121561052d57600080fd5b6102c882610405565b60008251610548818460208701610437565b9190910192915050565b6020815260008251806020840152610571816040850160208701610437565b601f01601f19169190910160400192915050565b6103e5806105946000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610074565b610127565b565b606061004e83836040518060600160405280602781526020016103896027913961014b565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b90565b60006100b47fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d505473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff16635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100fe573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061012291906102c1565b905090565b3660008037600080366000845af43d6000803e808015610146573d6000f35b3d6000fd5b60606000808573ffffffffffffffffffffffffffffffffffffffff1685604051610175919061031b565b600060405180830381855af49150503d80600081146101b0576040519150601f19603f3d011682016040523d82523d6000602084013e6101b5565b606091505b50915091506101c6868383876101d0565b9695505050505050565b6060831561026b5782516000036102645773ffffffffffffffffffffffffffffffffffffffff85163b610264576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064015b60405180910390fd5b5081610275565b610275838361027d565b949350505050565b81511561028d5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025b9190610337565b6000602082840312156102d357600080fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811461004e57600080fd5b60005b838110156103125781810151838201526020016102fa565b50506000910152565b6000825161032d8184602087016102f7565b9190910192915050565b60208152600082518060208401526103568160408501602087016102f7565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220d9ac563cd689ef8df311ce8a053d76366e09f1e49f9e40ca38bdb8213e39b44864736f6c63430008110033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212201e455f0df1b3de1b12a790e042888599b47aa6d5d974cfa24e13d8d06440ee8a64736f6c63430008110033",
      "sourceMap": "590:5272:60:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1570:300:38;;;;;;:::i;:::-;;:::i;:::-;;;611:14:65;;604:22;586:41;;574:2;559:18;1570:300:38;;;;;;;;1293:61:60;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;969:25:65;;;957:2;942:18;1293:61:60;823:177:65;2471:98:38;;;:::i;:::-;;;;;;;:::i;3935:167::-;;;;;;:::i;:::-;;:::i;:::-;;;1996:42:65;1984:55;;;1966:74;;1954:2;1939:18;3935:167:38;1820:226:65;3468:406:38;;;;;;:::i;:::-;;:::i;:::-;;1114:43:60;;;;;;:::i;:::-;;;;;;;;;;;;;;1227:60;;;;;;:::i;:::-;;;;;;;;;;;;;;723:38;;;;;;;4612:296:38;;;;;;:::i;:::-;;:::i;4974:642:60:-;;;;;;:::i;:::-;;:::i;:149:38:-;;;;;;:::i;:::-;;:::i;1482:50:60:-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;1360:55;;;;;;:::i;:::-;;;;;;;;;;;;;;2232:1709;;;;;;:::i;:::-;;:::i;1421:55::-;;;;;;:::i;:::-;;:::i;2190:219:38:-;;;;;;:::i;:::-;;:::i;1929:204::-;;;;;;:::i;:::-;;:::i;1824:101:26:-;;;:::i;5622:111:60:-;;;;;;:::i;:::-;;:::i;767:37::-;;;;;;;;;1201:85:26;1273:6;;;;1201:85;;2633:102:38;;;:::i;1066:42:60:-;;;;;;:::i;:::-;;;;;;;;;;;;;;4169:153:38;;;;;;:::i;:::-;;:::i;810:36:60:-;;;;;;;;;5739:115;;;;;;:::i;:::-;;:::i;5189:276:38:-;;;;;;:::i;:::-;;:::i;852:39:60:-;;;;;;;;;2801:276:38;;;;;;:::i;:::-;;:::i;927:49:60:-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;3947:1021;;;;;;:::i;:::-;;:::i;1011:49::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;4388:162:38;;;;;;:::i;:::-;4508:25;;;;4485:4;4508:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;;;;4388:162;897:24:60;;;;;;;;;2074:198:26;;;;;;:::i;:::-;;:::i;1163:49:60:-;;;;;;:::i;:::-;;;;;;;;;;;;;;1570:300:38;1672:4;1707:40;;;1722:25;1707:40;;:104;;-1:-1:-1;1763:48:38;;;1778:33;1763:48;1707:104;:156;;;-1:-1:-1;952:25:50;937:40;;;;1827:36:38;1688:175;1570:300;-1:-1:-1;;1570:300:38:o;2471:98::-;2525:13;2557:5;2550:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2471:98;:::o;3935:167::-;4011:7;4030:23;4045:7;4030:14;:23::i;:::-;-1:-1:-1;4071:24:38;;;;:15;:24;;;;;;;;;3935:167::o;3468:406::-;3548:13;3564:23;3579:7;3564:14;:23::i;:::-;3548:39;;3611:5;3605:11;;:2;:11;;;3597:57;;;;-1:-1:-1;;;3597:57:38;;9426:2:65;3597:57:38;;;9408:21:65;9465:2;9445:18;;;9438:30;9504:34;9484:18;;;9477:62;9575:3;9555:18;;;9548:31;9596:19;;3597:57:38;;;;;;;;;719:10:43;3686:21:38;;;;;:62;;-1:-1:-1;4508:25:38;;;4485:4;4508:25;;;:18;:25;;;;;;;;719:10:43;4508:35:38;;;;;;;;;;3711:37;3665:170;;;;-1:-1:-1;;;3665:170:38;;9828:2:65;3665:170:38;;;9810:21:65;9867:2;9847:18;;;9840:30;9906:34;9886:18;;;9879:62;9977:31;9957:18;;;9950:59;10026:19;;3665:170:38;9626:425:65;3665:170:38;3846:21;3855:2;3859:7;3846:8;:21::i;:::-;3538:336;3468:406;;:::o;4612:296::-;4771:41;719:10:43;4804:7:38;4771:18;:41::i;:::-;4763:99;;;;-1:-1:-1;;;4763:99:38;;10258:2:65;4763:99:38;;;10240:21:65;10297:2;10277:18;;;10270:30;10336:34;10316:18;;;10309:62;10407:15;10387:18;;;10380:43;10440:19;;4763:99:38;10056:409:65;4763:99:38;4873:28;4883:4;4889:2;4893:7;4873:9;:28::i;4974:642:60:-;5055:28;;;;:20;:28;;;;;;5036:15;:47;;5028:82;;;;-1:-1:-1;;;5028:82:60;;10672:2:65;5028:82:60;;;10654:21:65;10711:2;10691:18;;;10684:30;10750:24;10730:18;;;10723:52;10792:18;;5028:82:60;10470:346:65;5028:82:60;5120:24;5147:23;;;:15;:23;;;;;;;5203:50;;;;;5242:10;5203:50;;;1966:74:65;5147:23:60;;;;;5120:24;5147:23;;5203:38;;1939:18:65;;5203:50:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5339:10;;5272:24;5360:22;;;:14;:22;;;;;;;5339:44;;;;;:10;5360:22;;;5339:44;;;1966:74:65;5180:73:60;;-1:-1:-1;5272:24:60;;5339:10;;;:20;;1939:18:65;;5339:44:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5313:22;;;;:14;:22;;;;;;5300:35;;:12;:35;:::i;:::-;5299:84;;;;:::i;:::-;5394:10;;;5418:22;;;:14;:22;;;;;;;;5394:77;;;;;:10;5418:22;;;5394:77;;;12103:34:65;5442:10:60;12153:18:65;;;12146:43;12205:18;;;12198:34;;;5272:111:60;;-1:-1:-1;5394:10:60;;:23;;12015:18:65;;5394:77:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;5482:47:60;;;;;;;;969:25:65;;;5482:33:60;;;;;;942:18:65;;5482:47:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;5556:22:60;;;;:14;:22;;;;;;;;;;5545:64;;969:25:65;;;5580:10:60;;-1:-1:-1;5545:64:60;5556:22;;;;5545:64;;942:18:65;5545:64:60;;;;;;;5018:598;;;4974:642;:::o;:149:38:-;5077:39;5094:4;5100:2;5104:7;5077:39;;;;;;;;;;;;:16;:39::i;2232:1709:60:-;2490:7;2517:14;2534:24;:14;918::44;;827:112;2534:24:60;2517:41;;2568:26;:14;1032:19:44;;1050:1;1032:19;;;945:123;2568:26:60;2604:18;2610:3;2615:6;2604:5;:18::i;:::-;2637:9;2633:279;2656:14;:21;2652:1;:25;2633:279;;;2702:17;:36;2720:14;2735:1;2720:17;;;;;;;;:::i;:::-;;;;;;;;;;;;2702:36;;;;;;;;;;;;-1:-1:-1;2702:36:60;;;;2698:139;;2757:65;;-1:-1:-1;;;2757:65:60;;12884:2:65;2757:65:60;;;12866:21:65;12923:2;12903:18;;;12896:30;12962:34;12942:18;;;12935:62;13033:25;13013:18;;;13006:53;13076:19;;2757:65:60;12682:419:65;2698:139:60;2851:26;;;;:18;:26;;;;;2883:17;;:14;;2898:1;;2883:17;;;;;;:::i;:::-;;;;;;;;;;;;2851:50;;;;;;;-1:-1:-1;2851:50:60;;;;;;;;;;;;;;;;;;;;;;2679:3;;;;:::i;:::-;;;;2633:279;;;-1:-1:-1;2951:13:60;;3000:21;;2951:186;;;;;:13;3000:21;;;2951:186;;;13698:34:65;3036:13:60;13748:18:65;;;13741:34;3071:4:60;13791:18:65;;;13784:43;13843:18;;;13836:34;;;2922:26:60;13886:19:65;;;13879:35;;;13951:3;13930:19;;;13923:32;13971:19;;;13964:30;;;2922:26:60;2951:13;;;;;:27;;14011:19:65;;2951:186:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2922:215;;3172:18;3147:14;:22;3162:6;3147:22;;;;;;;;;;;;:43;;;;;;;;;;;;;;;;;;3219:7;3201;:15;3209:6;3201:15;;;;;;;;;;;:25;;;;3308:8;3289;:16;3298:6;3289:16;;;;;;;;;;;:27;;;;3415:16;3379:25;:33;3405:6;3379:33;;;;;;;;;;;:52;;;;3478:18;3441:26;:34;3468:6;3441:34;;;;;;;;;;;:55;;;;3537:11;3506:20;:28;3527:6;3506:28;;;;;;;;;;;:42;;;;3558:32;3609:24;;;;;;;;;;;3670:42;;;3726:7;;3743:4;3750:16;3647:120;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3593:175;;;;;:::i;:::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3779:23:60;;;;:15;:23;;;;;;:55;;;;;;;;;;;;;;3849:62;;3779:55;;-1:-1:-1;3779:55:60;;3849:62;;;;;;;-1:-1:-1;3928:6:60;;2232:1709;-1:-1:-1;;;;;;;;;;;2232:1709:60:o;1421:55::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1421:55:60;;-1:-1:-1;1421:55:60:o;2190:219:38:-;2262:7;6794:16;;;:7;:16;;;;;;;;;2324:56;;;;-1:-1:-1;;;2324:56:38;;15492:2:65;2324:56:38;;;15474:21:65;15531:2;15511:18;;;15504:30;15570:26;15550:18;;;15543:54;15614:18;;2324:56:38;15290:348:65;1929:204:38;2001:7;2028:19;;;2020:73;;;;-1:-1:-1;;;2020:73:38;;15845:2:65;2020:73:38;;;15827:21:65;15884:2;15864:18;;;15857:30;15923:34;15903:18;;;15896:62;15994:11;15974:18;;;15967:39;16023:19;;2020:73:38;15643:405:65;2020:73:38;-1:-1:-1;2110:16:38;;;;;;:9;:16;;;;;;;1929:204::o;1824:101:26:-;1094:13;:11;:13::i;:::-;1888:30:::1;1915:1;1888:18;:30::i;:::-;1824:101::o:0;5622:111:60:-;1094:13:26;:11;:13::i;:::-;5694:25:60::1;;;::::0;;;:17:::1;:25;::::0;;;;:32;;;::::1;5722:4;5694:32;::::0;;5622:111::o;2633:102:38:-;2689:13;2721:7;2714:14;;;;;:::i;4169:153::-;4263:52;719:10:43;4296:8:38;4306;4263:18;:52::i;:::-;4169:153;;:::o;5739:115:60:-;1094:13:26;:11;:13::i;:::-;5814:25:60::1;;5842:5;5814:25:::0;;;:17:::1;:25;::::0;;;;:33;;;::::1;::::0;;5739:115::o;5189:276:38:-;5319:41;719:10:43;5352:7:38;5319:18;:41::i;:::-;5311:99;;;;-1:-1:-1;;;5311:99:38;;10258:2:65;5311:99:38;;;10240:21:65;10297:2;10277:18;;;10270:30;10336:34;10316:18;;;10309:62;10407:15;10387:18;;;10380:43;10440:19;;5311:99:38;10056:409:65;5311:99:38;5420:38;5434:4;5440:2;5444:7;5453:4;5420:13;:38::i;:::-;5189:276;;;;:::o;2801:::-;2874:13;2899:23;2914:7;2899:14;:23::i;:::-;2933:21;2957:10;3395:9;;;;;;;;;-1:-1:-1;3395:9:38;;;3319:92;2957:10;2933:34;;3008:1;2990:7;2984:21;:25;:86;;;;;;;;;;;;;;;;;3036:7;3045:18;:7;:16;:18::i;:::-;3019:45;;;;;;;;;:::i;:::-;;;;;;;;;;;;;2984:86;2977:93;2801:276;-1:-1:-1;;;2801:276:38:o;3947:1021:60:-;4031:1;4021:7;:11;4013:54;;;;-1:-1:-1;;;4013:54:60;;16756:2:65;4013:54:60;;;16738:21:65;16795:2;16775:18;;;16768:30;16834:32;16814:18;;;16807:60;16884:18;;4013:54:60;16554:354:65;4013:54:60;4104:33;;;;:25;:33;;;;;;4085:15;:52;;4077:92;;;;-1:-1:-1;;;4077:92:60;;17115:2:65;4077:92:60;;;17097:21:65;17154:2;17134:18;;;17127:30;17193:29;17173:18;;;17166:57;17240:18;;4077:92:60;16913:351:65;4077:92:60;4206:34;;;;:26;:34;;;;;;4187:15;:53;;4179:87;;;;-1:-1:-1;;;4179:87:60;;17471:2:65;4179:87:60;;;17453:21:65;17510:2;17490:18;;;17483:30;17549:23;17529:18;;;17522:51;17590:18;;4179:87:60;17269:345:65;4179:87:60;4277:25;4305:22;;;:14;:22;;;;;;;;;4337:58;;;;-1:-1:-1;;;4337:58:60;;17821:2:65;4337:58:60;;;17803:21:65;17860:2;17840:18;;;17833:30;17899:16;17879:18;;;17872:44;17933:18;;4337:58:60;17619:338:65;4337:58:60;4406:21;4440:15;;;:7;:15;;;;;;4458:5;;4430:25;;:7;:25;:::i;:::-;:33;;;;:::i;:::-;4406:57;-1:-1:-1;4473:22:60;4498:23;4406:57;4498:7;:23;:::i;:::-;4532:10;;:70;;;;;4556:10;4532:70;;;12103:34:65;4532:10:60;12173:15:65;;;12153:18;;;12146:43;12205:18;;;12198:34;;;4473:48:60;;-1:-1:-1;4532:10:60;;;:23;;12015:18:65;;4532:70:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;4612:10:60;;;;:23;4636:10;4648:15;4656:6;4648:7;:15::i;:::-;4612:67;;;;;;;;;;12052:42:65;12121:15;;;4612:67:60;;;12103:34:65;12173:15;;12153:18;;;12146:43;12205:18;;;12198:34;;;12015:18;;4612:67:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;4719:22:60;;;;:14;:22;;;;;:40;;4745:14;;4719:22;:40;;4745:14;;4719:40;:::i;:::-;;;;-1:-1:-1;;4770:24:60;4797:23;;;:15;:23;;;;;;;;4830:61;;;;;4864:10;4830:61;;;18399:74:65;18489:18;;;18482:34;;;4797:23:60;;;;;;;4830:33;;18372:18:65;;4830:61:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;4906:55:60;;969:25:65;;;4941:10:60;;-1:-1:-1;4906:55:60;;;;-1:-1:-1;4906:55:60;;957:2:65;942:18;4906:55:60;;;;;;;4003:965;;;;3947:1021;;:::o;2074:198:26:-;1094:13;:11;:13::i;:::-;2162:22:::1;::::0;::::1;2154:73;;;::::0;-1:-1:-1;;;2154:73:26;;18729:2:65;2154:73:26::1;::::0;::::1;18711:21:65::0;18768:2;18748:18;;;18741:30;18807:34;18787:18;;;18780:62;18878:8;18858:18;;;18851:36;18904:19;;2154:73:26::1;18527:402:65::0;2154:73:26::1;2237:28;2256:8;2237:18;:28::i;:::-;2074:198:::0;:::o;13240:133:38:-;7185:4;6794:16;;;:7;:16;;;;;;;;13313:53;;;;-1:-1:-1;;;13313:53:38;;15492:2:65;13313:53:38;;;15474:21:65;15531:2;15511:18;;;15504:30;15570:26;15550:18;;;15543:54;15614:18;;13313:53:38;15290:348:65;12572:171:38;12646:24;;;;:15;:24;;;;;:29;;;;;;;;;;;;;:24;;12699:23;12646:24;12699:14;:23::i;:::-;12690:46;;;;;;;;;;;;12572:171;;:::o;7404:261::-;7497:4;7513:13;7529:23;7544:7;7529:14;:23::i;:::-;7513:39;;7581:5;7570:16;;:7;:16;;;:52;;;-1:-1:-1;4508:25:38;;;;4485:4;4508:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;7590:32;7570:87;;;;7650:7;7626:31;;:20;7638:7;7626:11;:20::i;:::-;:31;;;7570:87;7562:96;7404:261;-1:-1:-1;;;;7404:261:38:o;11257:1203::-;11381:4;11354:31;;:23;11369:7;11354:14;:23::i;:::-;:31;;;11346:81;;;;-1:-1:-1;;;11346:81:38;;19136:2:65;11346:81:38;;;19118:21:65;19175:2;19155:18;;;19148:30;19214:34;19194:18;;;19187:62;19285:7;19265:18;;;19258:35;19310:19;;11346:81:38;18934:401:65;11346:81:38;11445:16;;;11437:65;;;;-1:-1:-1;;;11437:65:38;;19542:2:65;11437:65:38;;;19524:21:65;19581:2;19561:18;;;19554:30;19620:34;19600:18;;;19593:62;19691:6;19671:18;;;19664:34;19715:19;;11437:65:38;19340:400:65;11437:65:38;11682:4;11655:31;;:23;11670:7;11655:14;:23::i;:::-;:31;;;11647:81;;;;-1:-1:-1;;;11647:81:38;;19136:2:65;11647:81:38;;;19118:21:65;19175:2;19155:18;;;19148:30;19214:34;19194:18;;;19187:62;19285:7;19265:18;;;19258:35;19310:19;;11647:81:38;18934:401:65;11647:81:38;11797:24;;;;:15;:24;;;;;;;;11790:31;;;;;;;;;;12265:15;;;;;;:9;:15;;;;;:20;;;;;;12299:13;;;;;;;;;:18;;11790:31;12299:18;;;12337:16;;;:7;:16;;;;;;:21;;;;;;;;;;12374:27;;11813:7;;12374:27;;;3538:336;3468:406;;:::o;8925:920::-;9004:16;;;8996:61;;;;-1:-1:-1;;;8996:61:38;;19947:2:65;8996:61:38;;;19929:21:65;;;19966:18;;;19959:30;20025:34;20005:18;;;19998:62;20077:18;;8996:61:38;19745:356:65;8996:61:38;7185:4;6794:16;;;:7;:16;;;;;;;;7208:31;9067:58;;;;-1:-1:-1;;;9067:58:38;;20308:2:65;9067:58:38;;;20290:21:65;20347:2;20327:18;;;20320:30;20386;20366:18;;;20359:58;20434:18;;9067:58:38;20106:352:65;9067:58:38;7185:4;6794:16;;;:7;:16;;;;;;;;7208:31;9271:58;;;;-1:-1:-1;;;9271:58:38;;20308:2:65;9271:58:38;;;20290:21:65;20347:2;20327:18;;;20320:30;20386;20366:18;;;20359:58;20434:18;;9271:58:38;20106:352:65;9271:58:38;9671:13;;;;;;;:9;:13;;;;;;;;:18;;9688:1;9671:18;;;9710:16;;;:7;:16;;;;;;:21;;;;;;;;9747:33;9718:7;;9671:13;;9747:33;;9671:13;;9747:33;4169:153;;:::o;1359:130:26:-;1273:6;;1422:23;1273:6;719:10:43;1422:23:26;1414:68;;;;-1:-1:-1;;;1414:68:26;;20665:2:65;1414:68:26;;;20647:21:65;;;20684:18;;;20677:30;20743:34;20723:18;;;20716:62;20795:18;;1414:68:26;20463:356:65;2426:187:26;2518:6;;;;2534:17;;;;;;;;;;;2566:40;;2518:6;;;2534:17;2518:6;;2566:40;;2499:16;;2566:40;2489:124;2426:187;:::o;12879:277:38:-;12999:8;12990:17;;:5;:17;;;12982:55;;;;-1:-1:-1;;;12982:55:38;;21026:2:65;12982:55:38;;;21008:21:65;21065:2;21045:18;;;21038:30;21104:27;21084:18;;;21077:55;21149:18;;12982:55:38;20824:349:65;12982:55:38;13047:25;;;;;;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;;:46;;;;;;;;;;;;;13108:41;;586::65;;;13108::38;;559:18:65;13108:41:38;;;;;;;12879:277;;;:::o;6326:267::-;6438:28;6448:4;6454:2;6458:7;6438:9;:28::i;:::-;6484:47;6507:4;6513:2;6517:7;6526:4;6484:22;:47::i;:::-;6476:110;;;;-1:-1:-1;;;6476:110:38;;21380:2:65;6476:110:38;;;21362:21:65;21419:2;21399:18;;;21392:30;21458:34;21438:18;;;21431:62;21529:20;21509:18;;;21502:48;21567:19;;6476:110:38;21178:414:65;447:696:47;503:13;552:14;569:17;580:5;569:10;:17::i;:::-;589:1;569:21;552:38;;604:20;638:6;627:18;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;627:18:47;-1:-1:-1;604:41:47;-1:-1:-1;765:28:47;;;781:2;765:28;820:280;851:5;;990:8;985:2;974:14;;969:30;851:5;956:44;1044:2;1035:11;;;-1:-1:-1;1064:21:47;820:280;1064:21;-1:-1:-1;1120:6:47;447:696;-1:-1:-1;;;447:696:47:o;13925:831:38:-;14074:4;14094:13;;;1702:19:42;:23;14090:660:38;;14129:71;;;;;:36;;;;;;:71;;719:10:43;;14180:4:38;;14186:7;;14195:4;;14129:71;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;-1:-1:-1;14129:71:38;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;14125:573;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14367:6;:13;14384:1;14367:18;14363:321;;14409:60;;-1:-1:-1;;;14409:60:38;;21380:2:65;14409:60:38;;;21362:21:65;21419:2;21399:18;;;21392:30;21458:34;21438:18;;;21431:62;21529:20;21509:18;;;21502:48;21567:19;;14409:60:38;21178:414:65;14363:321:38;14636:6;14630:13;14621:6;14617:2;14613:15;14606:38;14125:573;14250:51;;14260:41;14250:51;;-1:-1:-1;14243:58:38;;14090:660;-1:-1:-1;14735:4:38;13925:831;;;;;;:::o;10139:916:52:-;10192:7;;10276:8;10267:17;;10263:103;;10313:8;10304:17;;;-1:-1:-1;10349:2:52;10339:12;10263:103;10392:8;10383:5;:17;10379:103;;10429:8;10420:17;;;-1:-1:-1;10465:2:52;10455:12;10379:103;10508:8;10499:5;:17;10495:103;;10545:8;10536:17;;;-1:-1:-1;10581:2:52;10571:12;10495:103;10624:7;10615:5;:16;10611:100;;10660:7;10651:16;;;-1:-1:-1;10695:1:52;10685:11;10611:100;10737:7;10728:5;:16;10724:100;;10773:7;10764:16;;;-1:-1:-1;10808:1:52;10798:11;10724:100;10850:7;10841:5;:16;10837:100;;10886:7;10877:16;;;-1:-1:-1;10921:1:52;10911:11;10837:100;10963:7;10954:5;:16;10950:66;;11000:1;10990:11;11042:6;10139:916;-1:-1:-1;;10139:916:52:o;-1:-1:-1:-;;;;;;;;:::o;14:177:65:-;99:66;92:5;88:78;81:5;78:89;68:117;;181:1;178;171:12;196:245;254:6;307:2;295:9;286:7;282:23;278:32;275:52;;;323:1;320;313:12;275:52;362:9;349:23;381:30;405:5;381:30;:::i;638:180::-;697:6;750:2;738:9;729:7;725:23;721:32;718:52;;;766:1;763;756:12;718:52;-1:-1:-1;789:23:65;;638:180;-1:-1:-1;638:180:65:o;1005:250::-;1090:1;1100:113;1114:6;1111:1;1108:13;1100:113;;;1190:11;;;1184:18;1171:11;;;1164:39;1136:2;1129:10;1100:113;;;-1:-1:-1;;1247:1:65;1229:16;;1222:27;1005:250::o;1260:330::-;1302:3;1340:5;1334:12;1367:6;1362:3;1355:19;1383:76;1452:6;1445:4;1440:3;1436:14;1429:4;1422:5;1418:16;1383:76;:::i;:::-;1504:2;1492:15;1509:66;1488:88;1479:98;;;;1579:4;1475:109;;1260:330;-1:-1:-1;;1260:330:65:o;1595:220::-;1744:2;1733:9;1726:21;1707:4;1764:45;1805:2;1794:9;1790:18;1782:6;1764:45;:::i;2051:154::-;2137:42;2130:5;2126:54;2119:5;2116:65;2106:93;;2195:1;2192;2185:12;2210:134;2278:20;;2307:31;2278:20;2307:31;:::i;:::-;2210:134;;;:::o;2349:315::-;2417:6;2425;2478:2;2466:9;2457:7;2453:23;2449:32;2446:52;;;2494:1;2491;2484:12;2446:52;2533:9;2520:23;2552:31;2577:5;2552:31;:::i;:::-;2602:5;2654:2;2639:18;;;;2626:32;;-1:-1:-1;;;2349:315:65:o;2669:456::-;2746:6;2754;2762;2815:2;2803:9;2794:7;2790:23;2786:32;2783:52;;;2831:1;2828;2821:12;2783:52;2870:9;2857:23;2889:31;2914:5;2889:31;:::i;:::-;2939:5;-1:-1:-1;2996:2:65;2981:18;;2968:32;3009:33;2968:32;3009:33;:::i;:::-;2669:456;;3061:7;;-1:-1:-1;;;3115:2:65;3100:18;;;;3087:32;;2669:456::o;3130:184::-;3182:77;3179:1;3172:88;3279:4;3276:1;3269:15;3303:4;3300:1;3293:15;3319:334;3390:2;3384:9;3446:2;3436:13;;3451:66;3432:86;3420:99;;3549:18;3534:34;;3570:22;;;3531:62;3528:88;;;3596:18;;:::i;:::-;3632:2;3625:22;3319:334;;-1:-1:-1;3319:334:65:o;3658:787::-;3712:5;3765:3;3758:4;3750:6;3746:17;3742:27;3732:55;;3783:1;3780;3773:12;3732:55;3819:6;3806:20;3845:4;3868:18;3864:2;3861:26;3858:52;;;3890:18;;:::i;:::-;3936:2;3933:1;3929:10;3959:28;3983:2;3979;3975:11;3959:28;:::i;:::-;4021:15;;;4091;;;4087:24;;;4052:12;;;;4123:15;;;4120:35;;;4151:1;4148;4141:12;4120:35;4187:2;4179:6;4175:15;4164:26;;4199:217;4215:6;4210:3;4207:15;4199:217;;;4295:3;4282:17;4312:31;4337:5;4312:31;:::i;:::-;4356:18;;4232:12;;;;4394;;;;4199:217;;;4434:5;3658:787;-1:-1:-1;;;;;;;3658:787:65:o;4450:1243::-;4609:6;4617;4625;4633;4641;4649;4657;4665;4673;4726:3;4714:9;4705:7;4701:23;4697:33;4694:53;;;4743:1;4740;4733:12;4694:53;4783:9;4770:23;4812:18;4853:2;4845:6;4842:14;4839:34;;;4869:1;4866;4859:12;4839:34;4907:6;4896:9;4892:22;4882:32;;4952:7;4945:4;4941:2;4937:13;4933:27;4923:55;;4974:1;4971;4964:12;4923:55;5014:2;5001:16;5040:2;5032:6;5029:14;5026:34;;;5056:1;5053;5046:12;5026:34;5103:7;5096:4;5087:6;5083:2;5079:15;5075:26;5072:39;5069:59;;;5124:1;5121;5114:12;5069:59;5155:4;5151:2;5147:13;5137:23;;5179:6;5169:16;;;5204:40;5238:4;5227:9;5223:20;5204:40;:::i;:::-;5194:50;;5297:2;5286:9;5282:18;5269:32;5253:48;;5326:2;5316:8;5313:16;5310:36;;;5342:1;5339;5332:12;5310:36;;5365:63;5420:7;5409:8;5398:9;5394:24;5365:63;:::i;:::-;4450:1243;;;;-1:-1:-1;4450:1243:65;;5475:2;5460:18;;5447:32;;5526:3;5511:19;;5498:33;;-1:-1:-1;5578:3:65;5563:19;;5550:33;;-1:-1:-1;5630:3:65;5615:19;;5602:33;;-1:-1:-1;5682:3:65;5667:19;;;5654:33;;-1:-1:-1;4450:1243:65;-1:-1:-1;;;4450:1243:65:o;5698:248::-;5766:6;5774;5827:2;5815:9;5806:7;5802:23;5798:32;5795:52;;;5843:1;5840;5833:12;5795:52;-1:-1:-1;;5866:23:65;;;5936:2;5921:18;;;5908:32;;-1:-1:-1;5698:248:65:o;5951:247::-;6010:6;6063:2;6051:9;6042:7;6038:23;6034:32;6031:52;;;6079:1;6076;6069:12;6031:52;6118:9;6105:23;6137:31;6162:5;6137:31;:::i;6460:118::-;6546:5;6539:13;6532:21;6525:5;6522:32;6512:60;;6568:1;6565;6558:12;6583:382;6648:6;6656;6709:2;6697:9;6688:7;6684:23;6680:32;6677:52;;;6725:1;6722;6715:12;6677:52;6764:9;6751:23;6783:31;6808:5;6783:31;:::i;:::-;6833:5;-1:-1:-1;6890:2:65;6875:18;;6862:32;6903:30;6862:32;6903:30;:::i;:::-;6952:7;6942:17;;;6583:382;;;;;:::o;6970:1167::-;7065:6;7073;7081;7089;7142:3;7130:9;7121:7;7117:23;7113:33;7110:53;;;7159:1;7156;7149:12;7110:53;7198:9;7185:23;7217:31;7242:5;7217:31;:::i;:::-;7267:5;-1:-1:-1;7291:2:65;7330:18;;;7317:32;7358:33;7317:32;7358:33;:::i;:::-;7410:7;-1:-1:-1;7464:2:65;7449:18;;7436:32;;-1:-1:-1;7519:2:65;7504:18;;7491:32;7542:18;7572:14;;;7569:34;;;7599:1;7596;7589:12;7569:34;7637:6;7626:9;7622:22;7612:32;;7682:7;7675:4;7671:2;7667:13;7663:27;7653:55;;7704:1;7701;7694:12;7653:55;7740:2;7727:16;7762:2;7758;7755:10;7752:36;;;7768:18;;:::i;:::-;7810:112;7918:2;7849:66;7842:4;7838:2;7834:13;7830:86;7826:95;7810:112;:::i;:::-;7797:125;;7945:2;7938:5;7931:17;7985:7;7980:2;7975;7971;7967:11;7963:20;7960:33;7957:53;;;8006:1;8003;7996:12;7957:53;8061:2;8056;8052;8048:11;8043:2;8036:5;8032:14;8019:45;8105:1;8100:2;8095;8088:5;8084:14;8080:23;8073:34;;8126:5;8116:15;;;;;6970:1167;;;;;;;:::o;8142:388::-;8210:6;8218;8271:2;8259:9;8250:7;8246:23;8242:32;8239:52;;;8287:1;8284;8277:12;8239:52;8326:9;8313:23;8345:31;8370:5;8345:31;:::i;:::-;8395:5;-1:-1:-1;8452:2:65;8437:18;;8424:32;8465:33;8424:32;8465:33;:::i;8782:437::-;8861:1;8857:12;;;;8904;;;8925:61;;8979:4;8971:6;8967:17;8957:27;;8925:61;9032:2;9024:6;9021:14;9001:18;8998:38;8995:218;;9069:77;9066:1;9059:88;9170:4;9167:1;9160:15;9198:4;9195:1;9188:15;8995:218;;8782:437;;;:::o;10821:184::-;10891:6;10944:2;10932:9;10923:7;10919:23;10915:32;10912:52;;;10960:1;10957;10950:12;10912:52;-1:-1:-1;10983:16:65;;10821:184;-1:-1:-1;10821:184:65:o;11199:::-;11251:77;11248:1;11241:88;11348:4;11345:1;11338:15;11372:4;11369:1;11362:15;11388:274;11428:1;11454;11444:189;;11489:77;11486:1;11479:88;11590:4;11587:1;11580:15;11618:4;11615:1;11608:15;11444:189;-1:-1:-1;11647:9:65;;11388:274::o;11667:168::-;11740:9;;;11771;;11788:15;;;11782:22;;11768:37;11758:71;;11809:18;;:::i;12243:245::-;12310:6;12363:2;12351:9;12342:7;12338:23;12334:32;12331:52;;;12379:1;12376;12369:12;12331:52;12411:9;12405:16;12430:28;12452:5;12430:28;:::i;12493:184::-;12545:77;12542:1;12535:88;12642:4;12639:1;12632:15;12666:4;12663:1;12656:15;13106:195;13145:3;13176:66;13169:5;13166:77;13163:103;;13246:18;;:::i;:::-;-1:-1:-1;13293:1:65;13282:13;;13106:195::o;14041:251::-;14111:6;14164:2;14152:9;14143:7;14139:23;14135:32;14132:52;;;14180:1;14177;14170:12;14132:52;14212:9;14206:16;14231:31;14256:5;14231:31;:::i;14297:645::-;14512:2;14501:9;14494:21;14551:6;14546:2;14535:9;14531:18;14524:34;14609:6;14601;14595:3;14584:9;14580:19;14567:49;14666:1;14660:3;14651:6;14640:9;14636:22;14632:32;14625:43;14475:4;14795:3;14725:66;14720:2;14712:6;14708:15;14704:88;14693:9;14689:104;14685:114;14677:122;;14849:42;14841:6;14837:55;14830:4;14819:9;14815:20;14808:85;14929:6;14924:2;14913:9;14909:18;14902:34;14297:645;;;;;;;:::o;14947:338::-;15134:42;15126:6;15122:55;15111:9;15104:74;15214:2;15209;15198:9;15194:18;15187:30;15085:4;15234:45;15275:2;15264:9;15260:18;15252:6;15234:45;:::i;16053:496::-;16232:3;16270:6;16264:13;16286:66;16345:6;16340:3;16333:4;16325:6;16321:17;16286:66;:::i;:::-;16415:13;;16374:16;;;;16437:70;16415:13;16374:16;16484:4;16472:17;;16437:70;:::i;:::-;16523:20;;16053:496;-1:-1:-1;;;;16053:496:65:o;17962:128::-;18029:9;;;18050:11;;;18047:37;;;18064:18;;:::i;18095:125::-;18160:9;;;18181:10;;;18178:36;;;18194:18;;:::i;21597:512::-;21791:4;21820:42;21901:2;21893:6;21889:15;21878:9;21871:34;21953:2;21945:6;21941:15;21936:2;21925:9;21921:18;21914:43;;21993:6;21988:2;21977:9;21973:18;21966:34;22036:3;22031:2;22020:9;22016:18;22009:31;22057:46;22098:3;22087:9;22083:19;22075:6;22057:46;:::i;:::-;22049:54;21597:512;-1:-1:-1;;;;;;21597:512:65:o;22114:249::-;22183:6;22236:2;22224:9;22215:7;22211:23;22207:32;22204:52;;;22252:1;22249;22242:12;22204:52;22284:9;22278:16;22303:30;22327:5;22303:30;:::i",
      "linkReferences": {}
    },
    "methodIdentifiers": {
      "_fundIdCounter()": "1ec3e6c4",
      "admFees(uint256)": "995c8472",
      "approve(address,uint256)": "095ea7b3",
      "balanceOf(address)": "70a08231",
      "closeInvestimentTimestamps(uint256)": "069af241",
      "createFund(string,address,address[],uint256,uint256,uint256,uint256,uint256)": "5ecd5be7",
      "erc6551Implementation()": "b3dd12a2",
      "fundsAddresses(uint256)": "e7e1f1c7",
      "fundsAllowedTokens(uint256,uint256)": "6166cb93",
      "fundsRegister()": "8d180195",
      "getApproved(uint256)": "081812fc",
      "initialAmounts(uint256)": "fb91fb42",
      "invest(uint256,uint256)": "d87aa643",
      "isApprovedForAll(address,address)": "e985e9c5",
      "name()": "06fdde03",
      "openInvestimentTimestamps(uint256)": "1c02225f",
      "openRedeemTimestamps(uint256)": "54d89c91",
      "owner()": "8da5cb5b",
      "ownerOf(uint256)": "6352211e",
      "perfFees(uint256)": "0d0a01cf",
      "quotaTokenImplementation()": "c2ae0e3e",
      "quotasAddresses(uint256)": "4835a6be",
      "redeemYield(uint256)": "258d3c33",
      "removeWhiteListedToken(address)": "b5541dd8",
      "renounceOwnership()": "715018a6",
      "safeTransferFrom(address,address,uint256)": "42842e0e",
      "safeTransferFrom(address,address,uint256,bytes)": "b88d4fde",
      "setApprovalForAll(address,bool)": "a22cb465",
      "setWhiteListedToken(address)": "822dde8d",
      "stablecoin()": "e9cbd822",
      "supportsInterface(bytes4)": "01ffc9a7",
      "symbol()": "95d89b41",
      "tokenURI(uint256)": "c87b56dd",
      "transferFrom(address,address,uint256)": "23b872dd",
      "transferOwnership(address)": "f2fde38b",
      "whiteListedTokens(address)": "d3c26383"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.17+commit.8df45f5f\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_fundsRegister\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_erc6551Implementation\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_erc20Implementation\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_stablecoin\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"fundAddress\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"quotaTokenAddress\",\"type\":\"address\"}],\"name\":\"FundCreated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"fundAddress\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"investor\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"InvestimentMade\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"fundAddress\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"investor\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"RedeemMade\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"_fundIdCounter\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"admFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"closeInvestimentTimestamps\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_symbol\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"address[]\",\"name\":\"_allowedTokens\",\"type\":\"address[]\"},{\"internalType\":\"uint256\",\"name\":\"_admFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_perfFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_openInvestiment\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_closeInvestiments\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_openRedeem\",\"type\":\"uint256\"}],\"name\":\"createFund\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"erc6551Implementation\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"fundsAddresses\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"fundsAllowedTokens\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"fundsRegister\",\"outputs\":[{\"internalType\":\"contract IERC6551Registry\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"initialAmounts\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"fundId\",\"type\":\"uint256\"}],\"name\":\"invest\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"openInvestimentTimestamps\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"openRedeemTimestamps\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"perfFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"quotaTokenImplementation\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"quotasAddresses\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"fundId\",\"type\":\"uint256\"}],\"name\":\"redeemYield\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_token\",\"type\":\"address\"}],\"name\":\"removeWhiteListedToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_token\",\"type\":\"address\"}],\"name\":\"setWhiteListedToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"stablecoin\",\"outputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"whiteListedTokens\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/WhaleFinance.sol\":\"WhaleFinance\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin/=lib/openzeppelin-contracts/\",\":@upgradeable/=lib/openzeppelin-contracts-upgradeable/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts-upgradeable/contracts/access/OwnableUpgradeable.sol\":{\"keccak256\":\"0x4075622496acc77fd6d4de4cc30a8577a744d5c75afad33fdeacf1704d6eda98\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://99c8cb3cd19a44bbfb6612605affb7d8b06cee1f6aa9362a37a8672b4f7eeaf8\",\"dweb:/ipfs/QmasyxFDBUp7k5KFgfDWEzM8PYSKEq7GVznzMJ1VxVRF4B\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x89be10e757d242e9b18d5a32c9fbe2019f6d63052bbe46397a430a1d60d7f794\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f103ee2e4aecd37aac6ceefe670709cdd7613dee25fa2d4d9feaf7fc0aaa155e\",\"dweb:/ipfs/QmRiNZLoJk5k3HPMYGPGjZFd2ke1ZxjhJZkM45Ec9GH9hv\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/token/ERC20/ERC20Upgradeable.sol\":{\"keccak256\":\"0xd14a627157b9a411d2410713e5dd3a377e9064bd5c194a90748bbf27ea625784\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://29d6a502187e88fdb4ac51319b6cfc82e7ba886a435480e229e5f838d2da55ee\",\"dweb:/ipfs/QmQNWKr3axXvQowZi31ydXRdeZ7UnE7oN8XAz9FCkx1JhN\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/token/ERC20/IERC20Upgradeable.sol\":{\"keccak256\":\"0x0e1f0f5f62f67a881cd1a9597acbc0a5e4071f3c2c10449a183b922ae7272e3f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c25f742ff154998d19a669e2508c3597b363e123ce9144cd0fcf6521229f401f\",\"dweb:/ipfs/QmQXRuFzStEWqeEPbhQU6cAg9PaSowxJVo4PDKyRod7dco\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/token/ERC20/extensions/IERC20MetadataUpgradeable.sol\":{\"keccak256\":\"0x605434219ebbe4653f703640f06969faa5a1d78f0bfef878e5ddbb1ca369ceeb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4c9c634f99dd02d73ce7498b03a6305e251c05eeebb71457306561c1fab0fa7d\",\"dweb:/ipfs/QmbYRBbZHy8YoaQKXdPryiL3CSS7uUaRfRYi1TUj9cTqJQ\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/utils/AddressUpgradeable.sol\":{\"keccak256\":\"0x9c80f545915582e63fe206c6ce27cbe85a86fc10b9cd2a0e8c9488fb7c2ee422\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://310136ad60820af4177a11a61d77a3686faf5fca4942b600e08fc940db38396b\",\"dweb:/ipfs/QmbCzMNSTL7Zi7M4UCSqBrkHtp4jjxUnGbkneCZKdR1qeq\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/utils/ContextUpgradeable.sol\":{\"keccak256\":\"0x963ea7f0b48b032eef72fe3a7582edf78408d6f834115b9feadd673a4d5bd149\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d6520943ea55fdf5f0bafb39ed909f64de17051bc954ff3e88c9e5621412c79c\",\"dweb:/ipfs/QmWZ4rAKTQbNG2HxGs46AcTXShsVytKeLs7CUCdCSv5N7a\"]},\"lib/openzeppelin-contracts/contracts/access/Ownable.sol\":{\"keccak256\":\"0xba43b97fba0d32eb4254f6a5a297b39a19a247082a02d6e69349e071e2946218\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fc980984badf3984b6303b377711220e067722bbd6a135b24669ff5069ef9f32\",\"dweb:/ipfs/QmPHXMSXj99XjSVM21YsY6aNtLLjLVXDbyN76J5HQYvvrz\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC1967.sol\":{\"keccak256\":\"0x3cbef5ebc24b415252e2f8c0c9254555d30d9f085603b4b80d9b5ed20ab87e90\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e8fa670c3bdce78e642cc6ae11c4cb38b133499cdce5e1990a9979d424703263\",\"dweb:/ipfs/QmVxeCUk4jL2pXQyhsoNJwyU874wRufS2WvGe8TgPKPqhE\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC1822.sol\":{\"keccak256\":\"0x1d4afe6cb24200cc4545eed814ecf5847277dfe5d613a1707aad5fceecebcfff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://383fb7b8181016ac5ccf07bc9cdb7c1b5045ea36e2cc4df52bcbf20396fc7688\",\"dweb:/ipfs/QmYJ7Cg4WmE3rR8KGQxjUCXFfTH6TcwZ2Z1f6tPrq7jHFr\"]},\"lib/openzeppelin-contracts/contracts/proxy/ERC1967/ERC1967Upgrade.sol\":{\"keccak256\":\"0x3b21ae06bf5957f73fa16754b0669c77b7abd8ba6c072d35c3281d446fdb86c2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2db8e18505e86e02526847005d7287a33e397ed7fb9eaba3fd4a4a197add16e2\",\"dweb:/ipfs/QmW9BSuKTzHWHBNSHF4L8XfVuU1uJrP2vLg84YtBd8mL82\"]},\"lib/openzeppelin-contracts/contracts/proxy/Proxy.sol\":{\"keccak256\":\"0xc130fe33f1b2132158531a87734153293f6d07bc263ff4ac90e85da9c82c0e27\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8831721b6f4cc26534d190f9f1631c3f59c9ff38efdd911f85e0882b8e360472\",\"dweb:/ipfs/QmQZnLErZNStirSQ13ZNWQgvEYUtGE5tXYwn4QUPaVUfPN\"]},\"lib/openzeppelin-contracts/contracts/proxy/beacon/BeaconProxy.sol\":{\"keccak256\":\"0x85439e74ab467b6a23d45d32bdc9506cbc3760320289afd605f11638c4138e95\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e18633c182e445895e5a70f9e79f2558d0f6eac86767fd1d90552177df2955c\",\"dweb:/ipfs/QmagUFUJbiNGRGGajg9CF5LPuopc44XSCtcCaYvQasBuX9\"]},\"lib/openzeppelin-contracts/contracts/proxy/beacon/IBeacon.sol\":{\"keccak256\":\"0xd50a3421ac379ccb1be435fa646d66a65c986b4924f0849839f08692f39dde61\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ada1e030c0231db8d143b44ce92b4d1158eedb087880cad6d8cc7bd7ebe7b354\",\"dweb:/ipfs/QmWZ2NHZweRpz1U9GF6R1h65ri76dnX7fNxLBeM2t5N5Ce\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xa56ca923f70c1748830700250b19c61b70db9a683516dc5e216694a50445d99c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://cac938788bc4be12101e59d45588b4e059579f4e61062e1cda8d6b06c0191b15\",\"dweb:/ipfs/QmV2JKCyjTVH3rkWNrfdJRhAT7tZ3usAN2XcnD4h53Mvih\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x287b55befed2961a7eabd7d7b1b2839cbca8a5b80ef8dcbb25ed3d4c2002c305\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bd39944e8fc06be6dbe2dd1d8449b5336e23c6a7ba3e8e9ae5ae0f37f35283f5\",\"dweb:/ipfs/QmPV3FGYjVwvKSgAXKUN3r9T9GwniZz83CxBpM7vyj2G53\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x2c309e7df9e05e6ce15bedfe74f3c61b467fc37e0fae9eab496acf5ea0bbd7ff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7063b5c98711a98018ba4635ac74cee1c1cfa2ea01099498e062699ed9530005\",\"dweb:/ipfs/QmeJ8rGXkcv7RrqLdAW8PCXPAykxVsddfYY6g5NaTwmRFE\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x5bce51e11f7d194b79ea59fe00c9e8de9fa2c5530124960f29a24d4c740a3266\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7e66dfde185df46104c11bc89d08fa0760737aa59a2b8546a656473d810a8ea4\",\"dweb:/ipfs/QmXvyqtXPaPss2PD7eqPoSao5Szm2n6UMoiG8TZZDjmChR\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xa82b58eca1ee256be466e536706850163d2ec7821945abd6b4778cfb3bee37da\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e75cf83beb757b8855791088546b8337e9d4684e169400c20d44a515353b708\",\"dweb:/ipfs/QmYvPafLfoquiDMEj7CKHtvbgHu7TJNPSVPSCjrtjV8HjV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0x75b829ff2f26c14355d1cba20e16fe7b29ca58eb5fef665ede48bc0f9c6c74b9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a0a107160525724f9e1bbbab031defc2f298296dd9e331f16a6f7130cec32146\",\"dweb:/ipfs/QmemujxSd7gX8A9M8UwmNbz4Ms3U9FG9QfudUgxwvTmPWf\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0x006dd67219697fe68d7fbfdea512e7c4cb64a43565ed86171d67e844982da6fa\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2455248c8ddd9cc6a7af76a13973cddf222072427e7b0e2a7d1aff345145e931\",\"dweb:/ipfs/QmfYjnjRbWqYpuxurqveE6HtzsY1Xx323J428AKQgtBJZm\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"lib/openzeppelin-contracts/contracts/utils/Counters.sol\":{\"keccak256\":\"0xf0018c2440fbe238dd3a8732fa8e17a0f9dce84d31451dc8a32f6d62b349c9f1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://59e1c62884d55b70f3ae5432b44bb3166ad71ae3acd19c57ab6ddc3c87c325ee\",\"dweb:/ipfs/QmezuXg5GK5oeA4F91EZhozBFekhq5TD966bHPH18cCqhu\"]},\"lib/openzeppelin-contracts/contracts/utils/StorageSlot.sol\":{\"keccak256\":\"0xf09e68aa0dc6722a25bc46490e8d48ed864466d17313b8a0b254c36b54e49899\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e26daf81e2252dc1fe1ce0e4b55c2eb7c6d1ee84ae6558d1a9554432ea1d32da\",\"dweb:/ipfs/Qmb1UANWiWq5pCKbmHSu772hd4nt374dVaghGmwSVNuk8Q\"]},\"lib/openzeppelin-contracts/contracts/utils/Strings.sol\":{\"keccak256\":\"0x3088eb2868e8d13d89d16670b5f8612c4ab9ff8956272837d8e90106c59c14a0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b81d9ff6559ea5c47fc573e17ece6d9ba5d6839e213e6ebc3b4c5c8fe4199d7f\",\"dweb:/ipfs/QmPCW1bFisUzJkyjroY3yipwfism9RRCigCcK1hbXtVM8n\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d\",\"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]},\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xe4455ac1eb7fc497bb7402579e7b4d64d928b846fce7d2b6fde06d366f21c2b3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://cc8841b3cd48ad125e2f46323c8bad3aa0e88e399ec62acb9e57efa7e7c8058c\",\"dweb:/ipfs/QmSqE4mXHA2BXW58deDbXE8MTcsL5JSKNDbm23sVQxRLPS\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7\",\"dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6\"]},\"src/QuotaToken.sol\":{\"keccak256\":\"0x5b2b3f592431ca16dfa8efb4e01839b980ddc6f93a85bd1b54e2959fc59b7538\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d0beb5ec4005faaf47a4522ea5dd621c026b9bfbbf46198f2373c22f157a2799\",\"dweb:/ipfs/QmXtSnkTBnRaV1hFUFhZ4tURVkyUdt1tDdpNrzkv5jqoDo\"]},\"src/WhaleFinance.sol\":{\"keccak256\":\"0x643500283cf1e923b9ace120ea84115012d26ee278fdda0616e8f5ffb5e730d8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://50e9100e24811c55c07ff61ac06500e28b92041aa00f106883287ac2a51b420e\",\"dweb:/ipfs/QmQyvkvXQQFQjefGriF3D3VqZUvAaFGcmytnN4k3iPswqy\"]},\"src/interface/IERC6551Registry.sol\":{\"keccak256\":\"0x3f9743c931db0bf287bd3ba762f1b2371af614e7eb3c2ce3318a49ed1a15411a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://30fb28b4c7f4290600bec069c8b7cf3d3e41c0cc02f0c8c7bb4b37a3489a6d39\",\"dweb:/ipfs/QmPVpGADyuytD9TgN5THddUXjigz34YQALAsBNk8z6SNxG\"]}},\"version\":1}",
    "metadata": {
      "compiler": {
        "version": "0.8.17+commit.8df45f5f"
      },
      "language": "Solidity",
      "output": {
        "abi": [
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_fundsRegister",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "_erc6551Implementation",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "_erc20Implementation",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "_stablecoin",
                "type": "address"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "owner",
                "type": "address",
                "indexed": true
              },
              {
                "internalType": "address",
                "name": "approved",
                "type": "address",
                "indexed": true
              },
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256",
                "indexed": true
              }
            ],
            "type": "event",
            "name": "Approval",
            "anonymous": false
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "owner",
                "type": "address",
                "indexed": true
              },
              {
                "internalType": "address",
                "name": "operator",
                "type": "address",
                "indexed": true
              },
              {
                "internalType": "bool",
                "name": "approved",
                "type": "bool",
                "indexed": false
              }
            ],
            "type": "event",
            "name": "ApprovalForAll",
            "anonymous": false
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "fundAddress",
                "type": "address",
                "indexed": true
              },
              {
                "internalType": "address",
                "name": "quotaTokenAddress",
                "type": "address",
                "indexed": true
              }
            ],
            "type": "event",
            "name": "FundCreated",
            "anonymous": false
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "fundAddress",
                "type": "address",
                "indexed": true
              },
              {
                "internalType": "address",
                "name": "investor",
                "type": "address",
                "indexed": true
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256",
                "indexed": false
              }
            ],
            "type": "event",
            "name": "InvestimentMade",
            "anonymous": false
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "previousOwner",
                "type": "address",
                "indexed": true
              },
              {
                "internalType": "address",
                "name": "newOwner",
                "type": "address",
                "indexed": true
              }
            ],
            "type": "event",
            "name": "OwnershipTransferred",
            "anonymous": false
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "fundAddress",
                "type": "address",
                "indexed": true
              },
              {
                "internalType": "address",
                "name": "investor",
                "type": "address",
                "indexed": true
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256",
                "indexed": false
              }
            ],
            "type": "event",
            "name": "RedeemMade",
            "anonymous": false
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "from",
                "type": "address",
                "indexed": true
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address",
                "indexed": true
              },
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256",
                "indexed": true
              }
            ],
            "type": "event",
            "name": "Transfer",
            "anonymous": false
          },
          {
            "inputs": [],
            "stateMutability": "view",
            "type": "function",
            "name": "_fundIdCounter",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "admFees",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function",
            "name": "approve"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "owner",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "balanceOf",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "closeInvestimentTimestamps",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_symbol",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "_to",
                "type": "address"
              },
              {
                "internalType": "address[]",
                "name": "_allowedTokens",
                "type": "address[]"
              },
              {
                "internalType": "uint256",
                "name": "_admFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_perfFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_openInvestiment",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_closeInvestiments",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_openRedeem",
                "type": "uint256"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function",
            "name": "createFund",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ]
          },
          {
            "inputs": [],
            "stateMutability": "view",
            "type": "function",
            "name": "erc6551Implementation",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "fundsAddresses",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "fundsAllowedTokens",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ]
          },
          {
            "inputs": [],
            "stateMutability": "view",
            "type": "function",
            "name": "fundsRegister",
            "outputs": [
              {
                "internalType": "contract IERC6551Registry",
                "name": "",
                "type": "address"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "getApproved",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "initialAmounts",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "fundId",
                "type": "uint256"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function",
            "name": "invest"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "operator",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "isApprovedForAll",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ]
          },
          {
            "inputs": [],
            "stateMutability": "view",
            "type": "function",
            "name": "name",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "openInvestimentTimestamps",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "openRedeemTimestamps",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ]
          },
          {
            "inputs": [],
            "stateMutability": "view",
            "type": "function",
            "name": "owner",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "ownerOf",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "perfFees",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ]
          },
          {
            "inputs": [],
            "stateMutability": "view",
            "type": "function",
            "name": "quotaTokenImplementation",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "quotasAddresses",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "fundId",
                "type": "uint256"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function",
            "name": "redeemYield"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_token",
                "type": "address"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function",
            "name": "removeWhiteListedToken"
          },
          {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
            "name": "renounceOwnership"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function",
            "name": "safeTransferFrom"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function",
            "name": "safeTransferFrom"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "operator",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function",
            "name": "setApprovalForAll"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_token",
                "type": "address"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function",
            "name": "setWhiteListedToken"
          },
          {
            "inputs": [],
            "stateMutability": "view",
            "type": "function",
            "name": "stablecoin",
            "outputs": [
              {
                "internalType": "contract IERC20",
                "name": "",
                "type": "address"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "supportsInterface",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ]
          },
          {
            "inputs": [],
            "stateMutability": "view",
            "type": "function",
            "name": "symbol",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "tokenURI",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function",
            "name": "transferFrom"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function",
            "name": "transferOwnership"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "whiteListedTokens",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ]
          }
        ],
        "devdoc": {
          "kind": "dev",
          "methods": {
            "approve(address,uint256)": {
              "details": "See {IERC721-approve}."
            },
            "balanceOf(address)": {
              "details": "See {IERC721-balanceOf}."
            },
            "getApproved(uint256)": {
              "details": "See {IERC721-getApproved}."
            },
            "isApprovedForAll(address,address)": {
              "details": "See {IERC721-isApprovedForAll}."
            },
            "name()": {
              "details": "See {IERC721Metadata-name}."
            },
            "owner()": {
              "details": "Returns the address of the current owner."
            },
            "ownerOf(uint256)": {
              "details": "See {IERC721-ownerOf}."
            },
            "renounceOwnership()": {
              "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."
            },
            "safeTransferFrom(address,address,uint256)": {
              "details": "See {IERC721-safeTransferFrom}."
            },
            "safeTransferFrom(address,address,uint256,bytes)": {
              "details": "See {IERC721-safeTransferFrom}."
            },
            "setApprovalForAll(address,bool)": {
              "details": "See {IERC721-setApprovalForAll}."
            },
            "supportsInterface(bytes4)": {
              "details": "See {IERC165-supportsInterface}."
            },
            "symbol()": {
              "details": "See {IERC721Metadata-symbol}."
            },
            "tokenURI(uint256)": {
              "details": "See {IERC721Metadata-tokenURI}."
            },
            "transferFrom(address,address,uint256)": {
              "details": "See {IERC721-transferFrom}."
            },
            "transferOwnership(address)": {
              "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
            }
          },
          "version": 1
        },
        "userdoc": {
          "kind": "user",
          "methods": {},
          "version": 1
        }
      },
      "settings": {
        "remappings": [
          ":@openzeppelin/=lib/openzeppelin-contracts/",
          ":@upgradeable/=lib/openzeppelin-contracts-upgradeable/",
          ":ds-test/=lib/forge-std/lib/ds-test/src/",
          ":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
          ":forge-std/=lib/forge-std/src/",
          ":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/",
          ":openzeppelin-contracts/=lib/openzeppelin-contracts/",
          ":openzeppelin/=lib/openzeppelin-contracts/contracts/"
        ],
        "optimizer": {
          "enabled": true,
          "runs": 20000
        },
        "metadata": {
          "bytecodeHash": "ipfs"
        },
        "compilationTarget": {
          "src/WhaleFinance.sol": "WhaleFinance"
        },
        "libraries": {}
      },
      "sources": {
        "lib/openzeppelin-contracts-upgradeable/contracts/access/OwnableUpgradeable.sol": {
          "keccak256": "0x4075622496acc77fd6d4de4cc30a8577a744d5c75afad33fdeacf1704d6eda98",
          "urls": [
            "bzz-raw://99c8cb3cd19a44bbfb6612605affb7d8b06cee1f6aa9362a37a8672b4f7eeaf8",
            "dweb:/ipfs/QmasyxFDBUp7k5KFgfDWEzM8PYSKEq7GVznzMJ1VxVRF4B"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts-upgradeable/contracts/proxy/utils/Initializable.sol": {
          "keccak256": "0x89be10e757d242e9b18d5a32c9fbe2019f6d63052bbe46397a430a1d60d7f794",
          "urls": [
            "bzz-raw://f103ee2e4aecd37aac6ceefe670709cdd7613dee25fa2d4d9feaf7fc0aaa155e",
            "dweb:/ipfs/QmRiNZLoJk5k3HPMYGPGjZFd2ke1ZxjhJZkM45Ec9GH9hv"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts-upgradeable/contracts/token/ERC20/ERC20Upgradeable.sol": {
          "keccak256": "0xd14a627157b9a411d2410713e5dd3a377e9064bd5c194a90748bbf27ea625784",
          "urls": [
            "bzz-raw://29d6a502187e88fdb4ac51319b6cfc82e7ba886a435480e229e5f838d2da55ee",
            "dweb:/ipfs/QmQNWKr3axXvQowZi31ydXRdeZ7UnE7oN8XAz9FCkx1JhN"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts-upgradeable/contracts/token/ERC20/IERC20Upgradeable.sol": {
          "keccak256": "0x0e1f0f5f62f67a881cd1a9597acbc0a5e4071f3c2c10449a183b922ae7272e3f",
          "urls": [
            "bzz-raw://c25f742ff154998d19a669e2508c3597b363e123ce9144cd0fcf6521229f401f",
            "dweb:/ipfs/QmQXRuFzStEWqeEPbhQU6cAg9PaSowxJVo4PDKyRod7dco"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts-upgradeable/contracts/token/ERC20/extensions/IERC20MetadataUpgradeable.sol": {
          "keccak256": "0x605434219ebbe4653f703640f06969faa5a1d78f0bfef878e5ddbb1ca369ceeb",
          "urls": [
            "bzz-raw://4c9c634f99dd02d73ce7498b03a6305e251c05eeebb71457306561c1fab0fa7d",
            "dweb:/ipfs/QmbYRBbZHy8YoaQKXdPryiL3CSS7uUaRfRYi1TUj9cTqJQ"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts-upgradeable/contracts/utils/AddressUpgradeable.sol": {
          "keccak256": "0x9c80f545915582e63fe206c6ce27cbe85a86fc10b9cd2a0e8c9488fb7c2ee422",
          "urls": [
            "bzz-raw://310136ad60820af4177a11a61d77a3686faf5fca4942b600e08fc940db38396b",
            "dweb:/ipfs/QmbCzMNSTL7Zi7M4UCSqBrkHtp4jjxUnGbkneCZKdR1qeq"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts-upgradeable/contracts/utils/ContextUpgradeable.sol": {
          "keccak256": "0x963ea7f0b48b032eef72fe3a7582edf78408d6f834115b9feadd673a4d5bd149",
          "urls": [
            "bzz-raw://d6520943ea55fdf5f0bafb39ed909f64de17051bc954ff3e88c9e5621412c79c",
            "dweb:/ipfs/QmWZ4rAKTQbNG2HxGs46AcTXShsVytKeLs7CUCdCSv5N7a"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts/contracts/access/Ownable.sol": {
          "keccak256": "0xba43b97fba0d32eb4254f6a5a297b39a19a247082a02d6e69349e071e2946218",
          "urls": [
            "bzz-raw://fc980984badf3984b6303b377711220e067722bbd6a135b24669ff5069ef9f32",
            "dweb:/ipfs/QmPHXMSXj99XjSVM21YsY6aNtLLjLVXDbyN76J5HQYvvrz"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts/contracts/interfaces/IERC1967.sol": {
          "keccak256": "0x3cbef5ebc24b415252e2f8c0c9254555d30d9f085603b4b80d9b5ed20ab87e90",
          "urls": [
            "bzz-raw://e8fa670c3bdce78e642cc6ae11c4cb38b133499cdce5e1990a9979d424703263",
            "dweb:/ipfs/QmVxeCUk4jL2pXQyhsoNJwyU874wRufS2WvGe8TgPKPqhE"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC1822.sol": {
          "keccak256": "0x1d4afe6cb24200cc4545eed814ecf5847277dfe5d613a1707aad5fceecebcfff",
          "urls": [
            "bzz-raw://383fb7b8181016ac5ccf07bc9cdb7c1b5045ea36e2cc4df52bcbf20396fc7688",
            "dweb:/ipfs/QmYJ7Cg4WmE3rR8KGQxjUCXFfTH6TcwZ2Z1f6tPrq7jHFr"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts/contracts/proxy/ERC1967/ERC1967Upgrade.sol": {
          "keccak256": "0x3b21ae06bf5957f73fa16754b0669c77b7abd8ba6c072d35c3281d446fdb86c2",
          "urls": [
            "bzz-raw://2db8e18505e86e02526847005d7287a33e397ed7fb9eaba3fd4a4a197add16e2",
            "dweb:/ipfs/QmW9BSuKTzHWHBNSHF4L8XfVuU1uJrP2vLg84YtBd8mL82"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts/contracts/proxy/Proxy.sol": {
          "keccak256": "0xc130fe33f1b2132158531a87734153293f6d07bc263ff4ac90e85da9c82c0e27",
          "urls": [
            "bzz-raw://8831721b6f4cc26534d190f9f1631c3f59c9ff38efdd911f85e0882b8e360472",
            "dweb:/ipfs/QmQZnLErZNStirSQ13ZNWQgvEYUtGE5tXYwn4QUPaVUfPN"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts/contracts/proxy/beacon/BeaconProxy.sol": {
          "keccak256": "0x85439e74ab467b6a23d45d32bdc9506cbc3760320289afd605f11638c4138e95",
          "urls": [
            "bzz-raw://6e18633c182e445895e5a70f9e79f2558d0f6eac86767fd1d90552177df2955c",
            "dweb:/ipfs/QmagUFUJbiNGRGGajg9CF5LPuopc44XSCtcCaYvQasBuX9"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts/contracts/proxy/beacon/IBeacon.sol": {
          "keccak256": "0xd50a3421ac379ccb1be435fa646d66a65c986b4924f0849839f08692f39dde61",
          "urls": [
            "bzz-raw://ada1e030c0231db8d143b44ce92b4d1158eedb087880cad6d8cc7bd7ebe7b354",
            "dweb:/ipfs/QmWZ2NHZweRpz1U9GF6R1h65ri76dnX7fNxLBeM2t5N5Ce"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol": {
          "keccak256": "0xa56ca923f70c1748830700250b19c61b70db9a683516dc5e216694a50445d99c",
          "urls": [
            "bzz-raw://cac938788bc4be12101e59d45588b4e059579f4e61062e1cda8d6b06c0191b15",
            "dweb:/ipfs/QmV2JKCyjTVH3rkWNrfdJRhAT7tZ3usAN2XcnD4h53Mvih"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
          "keccak256": "0x287b55befed2961a7eabd7d7b1b2839cbca8a5b80ef8dcbb25ed3d4c2002c305",
          "urls": [
            "bzz-raw://bd39944e8fc06be6dbe2dd1d8449b5336e23c6a7ba3e8e9ae5ae0f37f35283f5",
            "dweb:/ipfs/QmPV3FGYjVwvKSgAXKUN3r9T9GwniZz83CxBpM7vyj2G53"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
          "keccak256": "0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca",
          "urls": [
            "bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd",
            "dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol": {
          "keccak256": "0x2c309e7df9e05e6ce15bedfe74f3c61b467fc37e0fae9eab496acf5ea0bbd7ff",
          "urls": [
            "bzz-raw://7063b5c98711a98018ba4635ac74cee1c1cfa2ea01099498e062699ed9530005",
            "dweb:/ipfs/QmeJ8rGXkcv7RrqLdAW8PCXPAykxVsddfYY6g5NaTwmRFE"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol": {
          "keccak256": "0x5bce51e11f7d194b79ea59fe00c9e8de9fa2c5530124960f29a24d4c740a3266",
          "urls": [
            "bzz-raw://7e66dfde185df46104c11bc89d08fa0760737aa59a2b8546a656473d810a8ea4",
            "dweb:/ipfs/QmXvyqtXPaPss2PD7eqPoSao5Szm2n6UMoiG8TZZDjmChR"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol": {
          "keccak256": "0xa82b58eca1ee256be466e536706850163d2ec7821945abd6b4778cfb3bee37da",
          "urls": [
            "bzz-raw://6e75cf83beb757b8855791088546b8337e9d4684e169400c20d44a515353b708",
            "dweb:/ipfs/QmYvPafLfoquiDMEj7CKHtvbgHu7TJNPSVPSCjrtjV8HjV"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Metadata.sol": {
          "keccak256": "0x75b829ff2f26c14355d1cba20e16fe7b29ca58eb5fef665ede48bc0f9c6c74b9",
          "urls": [
            "bzz-raw://a0a107160525724f9e1bbbab031defc2f298296dd9e331f16a6f7130cec32146",
            "dweb:/ipfs/QmemujxSd7gX8A9M8UwmNbz4Ms3U9FG9QfudUgxwvTmPWf"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
          "keccak256": "0x006dd67219697fe68d7fbfdea512e7c4cb64a43565ed86171d67e844982da6fa",
          "urls": [
            "bzz-raw://2455248c8ddd9cc6a7af76a13973cddf222072427e7b0e2a7d1aff345145e931",
            "dweb:/ipfs/QmfYjnjRbWqYpuxurqveE6HtzsY1Xx323J428AKQgtBJZm"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
          "keccak256": "0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7",
          "urls": [
            "bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92",
            "dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts/contracts/utils/Counters.sol": {
          "keccak256": "0xf0018c2440fbe238dd3a8732fa8e17a0f9dce84d31451dc8a32f6d62b349c9f1",
          "urls": [
            "bzz-raw://59e1c62884d55b70f3ae5432b44bb3166ad71ae3acd19c57ab6ddc3c87c325ee",
            "dweb:/ipfs/QmezuXg5GK5oeA4F91EZhozBFekhq5TD966bHPH18cCqhu"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts/contracts/utils/StorageSlot.sol": {
          "keccak256": "0xf09e68aa0dc6722a25bc46490e8d48ed864466d17313b8a0b254c36b54e49899",
          "urls": [
            "bzz-raw://e26daf81e2252dc1fe1ce0e4b55c2eb7c6d1ee84ae6558d1a9554432ea1d32da",
            "dweb:/ipfs/Qmb1UANWiWq5pCKbmHSu772hd4nt374dVaghGmwSVNuk8Q"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts/contracts/utils/Strings.sol": {
          "keccak256": "0x3088eb2868e8d13d89d16670b5f8612c4ab9ff8956272837d8e90106c59c14a0",
          "urls": [
            "bzz-raw://b81d9ff6559ea5c47fc573e17ece6d9ba5d6839e213e6ebc3b4c5c8fe4199d7f",
            "dweb:/ipfs/QmPCW1bFisUzJkyjroY3yipwfism9RRCigCcK1hbXtVM8n"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol": {
          "keccak256": "0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b",
          "urls": [
            "bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d",
            "dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol": {
          "keccak256": "0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1",
          "urls": [
            "bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f",
            "dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts/contracts/utils/math/Math.sol": {
          "keccak256": "0xe4455ac1eb7fc497bb7402579e7b4d64d928b846fce7d2b6fde06d366f21c2b3",
          "urls": [
            "bzz-raw://cc8841b3cd48ad125e2f46323c8bad3aa0e88e399ec62acb9e57efa7e7c8058c",
            "dweb:/ipfs/QmSqE4mXHA2BXW58deDbXE8MTcsL5JSKNDbm23sVQxRLPS"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol": {
          "keccak256": "0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc",
          "urls": [
            "bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7",
            "dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6"
          ],
          "license": "MIT"
        },
        "src/QuotaToken.sol": {
          "keccak256": "0x5b2b3f592431ca16dfa8efb4e01839b980ddc6f93a85bd1b54e2959fc59b7538",
          "urls": [
            "bzz-raw://d0beb5ec4005faaf47a4522ea5dd621c026b9bfbbf46198f2373c22f157a2799",
            "dweb:/ipfs/QmXtSnkTBnRaV1hFUFhZ4tURVkyUdt1tDdpNrzkv5jqoDo"
          ],
          "license": "MIT"
        },
        "src/WhaleFinance.sol": {
          "keccak256": "0x643500283cf1e923b9ace120ea84115012d26ee278fdda0616e8f5ffb5e730d8",
          "urls": [
            "bzz-raw://50e9100e24811c55c07ff61ac06500e28b92041aa00f106883287ac2a51b420e",
            "dweb:/ipfs/QmQyvkvXQQFQjefGriF3D3VqZUvAaFGcmytnN4k3iPswqy"
          ],
          "license": "MIT"
        },
        "src/interface/IERC6551Registry.sol": {
          "keccak256": "0x3f9743c931db0bf287bd3ba762f1b2371af614e7eb3c2ce3318a49ed1a15411a",
          "urls": [
            "bzz-raw://30fb28b4c7f4290600bec069c8b7cf3d3e41c0cc02f0c8c7bb4b37a3489a6d39",
            "dweb:/ipfs/QmPVpGADyuytD9TgN5THddUXjigz34YQALAsBNk8z6SNxG"
          ],
          "license": "MIT"
        }
      },
      "version": 1
    },
    "ast": {
      "absolutePath": "src/WhaleFinance.sol",
      "id": 50173,
      "exportedSymbols": {
        "Address": [
          47052
        ],
        "AddressUpgradeable": [
          44237
        ],
        "BeaconProxy": [
          44859
        ],
        "Context": [
          47074
        ],
        "ContextUpgradeable": [
          44279
        ],
        "Counters": [
          47148
        ],
        "ERC165": [
          48057
        ],
        "ERC1967Upgrade": [
          44741
        ],
        "ERC20": [
          45531
        ],
        "ERC20Upgradeable": [
          43804
        ],
        "ERC721": [
          46561
        ],
        "IBeacon": [
          44869
        ],
        "IERC165": [
          48069
        ],
        "IERC1822Proxiable": [
          44437
        ],
        "IERC1967": [
          44427
        ],
        "IERC20": [
          45609
        ],
        "IERC20Metadata": [
          45634
        ],
        "IERC20MetadataUpgradeable": [
          43907
        ],
        "IERC20Upgradeable": [
          43882
        ],
        "IERC6551Registry": [
          50266
        ],
        "IERC721": [
          46677
        ],
        "IERC721Metadata": [
          46722
        ],
        "IERC721Receiver": [
          46695
        ],
        "Initializable": [
          43192
        ],
        "Math": [
          48935
        ],
        "Ownable": [
          44392
        ],
        "OwnableUpgradeable": [
          43023
        ],
        "Proxy": [
          44793
        ],
        "QuotaToken": [
          49497
        ],
        "SignedMath": [
          49040
        ],
        "StorageSlot": [
          47339
        ],
        "Strings": [
          47568
        ],
        "WhaleFinance": [
          50172
        ]
      },
      "nodeType": "SourceUnit",
      "src": "32:5830:60",
      "nodes": [
        {
          "id": 49650,
          "nodeType": "PragmaDirective",
          "src": "32:23:60",
          "nodes": [],
          "literals": [
            "solidity",
            "^",
            "0.8",
            ".9"
          ]
        },
        {
          "id": 49651,
          "nodeType": "ImportDirective",
          "src": "57:57:60",
          "nodes": [],
          "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol",
          "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 50173,
          "sourceUnit": 46562,
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "id": 49652,
          "nodeType": "ImportDirective",
          "src": "115:52:60",
          "nodes": [],
          "absolutePath": "lib/openzeppelin-contracts/contracts/access/Ownable.sol",
          "file": "@openzeppelin/contracts/access/Ownable.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 50173,
          "sourceUnit": 44393,
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "id": 49653,
          "nodeType": "ImportDirective",
          "src": "168:52:60",
          "nodes": [],
          "absolutePath": "lib/openzeppelin-contracts/contracts/utils/Counters.sol",
          "file": "@openzeppelin/contracts/utils/Counters.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 50173,
          "sourceUnit": 47149,
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "id": 49654,
          "nodeType": "ImportDirective",
          "src": "221:42:60",
          "nodes": [],
          "absolutePath": "src/interface/IERC6551Registry.sol",
          "file": "./interface/IERC6551Registry.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 50173,
          "sourceUnit": 50267,
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "id": 49655,
          "nodeType": "ImportDirective",
          "src": "264:62:60",
          "nodes": [],
          "absolutePath": "lib/openzeppelin-contracts/contracts/proxy/beacon/BeaconProxy.sol",
          "file": "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 50173,
          "sourceUnit": 44860,
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "id": 49656,
          "nodeType": "ImportDirective",
          "src": "327:58:60",
          "nodes": [],
          "absolutePath": "lib/openzeppelin-contracts/contracts/proxy/beacon/IBeacon.sol",
          "file": "@openzeppelin/contracts/proxy/beacon/IBeacon.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 50173,
          "sourceUnit": 44870,
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "id": 49657,
          "nodeType": "ImportDirective",
          "src": "386:56:60",
          "nodes": [],
          "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol",
          "file": "@openzeppelin/contracts/token/ERC20/IERC20.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 50173,
          "sourceUnit": 45610,
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "id": 49658,
          "nodeType": "ImportDirective",
          "src": "443:55:60",
          "nodes": [],
          "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol",
          "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 50173,
          "sourceUnit": 45532,
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "id": 49659,
          "nodeType": "ImportDirective",
          "src": "499:62:60",
          "nodes": [],
          "absolutePath": "lib/openzeppelin-contracts/contracts/proxy/beacon/BeaconProxy.sol",
          "file": "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 50173,
          "sourceUnit": 44860,
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "id": 49660,
          "nodeType": "ImportDirective",
          "src": "562:26:60",
          "nodes": [],
          "absolutePath": "src/QuotaToken.sol",
          "file": "./QuotaToken.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 50173,
          "sourceUnit": 49498,
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "id": 50172,
          "nodeType": "ContractDefinition",
          "src": "590:5272:60",
          "nodes": [
            {
              "id": 49668,
              "nodeType": "UsingForDirective",
              "src": "637:36:60",
              "nodes": [],
              "global": false,
              "libraryName": {
                "id": 49665,
                "name": "Counters",
                "nameLocations": [
                  "643:8:60"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 47148,
                "src": "643:8:60"
              },
              "typeName": {
                "id": 49667,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 49666,
                  "name": "Counters.Counter",
                  "nameLocations": [
                    "656:8:60",
                    "665:7:60"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 47080,
                  "src": "656:16:60"
                },
                "referencedDeclaration": 47080,
                "src": "656:16:60",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Counter_$47080_storage_ptr",
                  "typeString": "struct Counters.Counter"
                }
              }
            },
            {
              "id": 49671,
              "nodeType": "VariableDeclaration",
              "src": "723:38:60",
              "nodes": [],
              "constant": false,
              "functionSelector": "1ec3e6c4",
              "mutability": "mutable",
              "name": "_fundIdCounter",
              "nameLocation": "747:14:60",
              "scope": 50172,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$47080_storage",
                "typeString": "struct Counters.Counter"
              },
              "typeName": {
                "id": 49670,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 49669,
                  "name": "Counters.Counter",
                  "nameLocations": [
                    "723:8:60",
                    "732:7:60"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 47080,
                  "src": "723:16:60"
                },
                "referencedDeclaration": 47080,
                "src": "723:16:60",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Counter_$47080_storage_ptr",
                  "typeString": "struct Counters.Counter"
                }
              },
              "visibility": "public"
            },
            {
              "id": 49674,
              "nodeType": "VariableDeclaration",
              "src": "767:37:60",
              "nodes": [],
              "constant": false,
              "functionSelector": "8d180195",
              "mutability": "mutable",
              "name": "fundsRegister",
              "nameLocation": "791:13:60",
              "scope": 50172,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC6551Registry_$50266",
                "typeString": "contract IERC6551Registry"
              },
              "typeName": {
                "id": 49673,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 49672,
                  "name": "IERC6551Registry",
                  "nameLocations": [
                    "767:16:60"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 50266,
                  "src": "767:16:60"
                },
                "referencedDeclaration": 50266,
                "src": "767:16:60",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_IERC6551Registry_$50266",
                  "typeString": "contract IERC6551Registry"
                }
              },
              "visibility": "public"
            },
            {
              "id": 49676,
              "nodeType": "VariableDeclaration",
              "src": "810:36:60",
              "nodes": [],
              "constant": false,
              "functionSelector": "b3dd12a2",
              "mutability": "mutable",
              "name": "erc6551Implementation",
              "nameLocation": "825:21:60",
              "scope": 50172,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 49675,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "810:7:60",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "visibility": "public"
            },
            {
              "id": 49678,
              "nodeType": "VariableDeclaration",
              "src": "852:39:60",
              "nodes": [],
              "constant": false,
              "functionSelector": "c2ae0e3e",
              "mutability": "mutable",
              "name": "quotaTokenImplementation",
              "nameLocation": "867:24:60",
              "scope": 50172,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 49677,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "852:7:60",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "visibility": "public"
            },
            {
              "id": 49681,
              "nodeType": "VariableDeclaration",
              "src": "897:24:60",
              "nodes": [],
              "constant": false,
              "functionSelector": "e9cbd822",
              "mutability": "mutable",
              "name": "stablecoin",
              "nameLocation": "911:10:60",
              "scope": 50172,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20_$45609",
                "typeString": "contract IERC20"
              },
              "typeName": {
                "id": 49680,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 49679,
                  "name": "IERC20",
                  "nameLocations": [
                    "897:6:60"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 45609,
                  "src": "897:6:60"
                },
                "referencedDeclaration": 45609,
                "src": "897:6:60",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_IERC20_$45609",
                  "typeString": "contract IERC20"
                }
              },
              "visibility": "public"
            },
            {
              "id": 49685,
              "nodeType": "VariableDeclaration",
              "src": "927:49:60",
              "nodes": [],
              "constant": false,
              "functionSelector": "d3c26383",
              "mutability": "mutable",
              "name": "whiteListedTokens",
              "nameLocation": "959:17:60",
              "scope": 50172,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "typeName": {
                "id": 49684,
                "keyType": {
                  "id": 49682,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "935:7:60",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "927:24:60",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "valueType": {
                  "id": 49683,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "946:4:60",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                }
              },
              "visibility": "public"
            },
            {
              "id": 49689,
              "nodeType": "VariableDeclaration",
              "src": "1011:49:60",
              "nodes": [],
              "constant": false,
              "functionSelector": "e7e1f1c7",
              "mutability": "mutable",
              "name": "fundsAddresses",
              "nameLocation": "1046:14:60",
              "scope": 50172,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                "typeString": "mapping(uint256 => address)"
              },
              "typeName": {
                "id": 49688,
                "keyType": {
                  "id": 49686,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1019:7:60",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "1011:27:60",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                  "typeString": "mapping(uint256 => address)"
                },
                "valueType": {
                  "id": 49687,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1030:7:60",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                }
              },
              "visibility": "public"
            },
            {
              "id": 49693,
              "nodeType": "VariableDeclaration",
              "src": "1066:42:60",
              "nodes": [],
              "constant": false,
              "functionSelector": "995c8472",
              "mutability": "mutable",
              "name": "admFees",
              "nameLocation": "1101:7:60",
              "scope": 50172,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "typeName": {
                "id": 49692,
                "keyType": {
                  "id": 49690,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1074:7:60",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "1066:27:60",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                  "typeString": "mapping(uint256 => uint256)"
                },
                "valueType": {
                  "id": 49691,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1085:7:60",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              },
              "visibility": "public"
            },
            {
              "id": 49697,
              "nodeType": "VariableDeclaration",
              "src": "1114:43:60",
              "nodes": [],
              "constant": false,
              "functionSelector": "0d0a01cf",
              "mutability": "mutable",
              "name": "perfFees",
              "nameLocation": "1149:8:60",
              "scope": 50172,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "typeName": {
                "id": 49696,
                "keyType": {
                  "id": 49694,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1122:7:60",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "1114:27:60",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                  "typeString": "mapping(uint256 => uint256)"
                },
                "valueType": {
                  "id": 49695,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1133:7:60",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              },
              "visibility": "public"
            },
            {
              "id": 49701,
              "nodeType": "VariableDeclaration",
              "src": "1163:49:60",
              "nodes": [],
              "constant": false,
              "functionSelector": "fb91fb42",
              "mutability": "mutable",
              "name": "initialAmounts",
              "nameLocation": "1198:14:60",
              "scope": 50172,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "typeName": {
                "id": 49700,
                "keyType": {
                  "id": 49698,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1171:7:60",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "1163:27:60",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                  "typeString": "mapping(uint256 => uint256)"
                },
                "valueType": {
                  "id": 49699,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1182:7:60",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              },
              "visibility": "public"
            },
            {
              "id": 49705,
              "nodeType": "VariableDeclaration",
              "src": "1227:60:60",
              "nodes": [],
              "constant": false,
              "functionSelector": "1c02225f",
              "mutability": "mutable",
              "name": "openInvestimentTimestamps",
              "nameLocation": "1262:25:60",
              "scope": 50172,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "typeName": {
                "id": 49704,
                "keyType": {
                  "id": 49702,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1235:7:60",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "1227:27:60",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                  "typeString": "mapping(uint256 => uint256)"
                },
                "valueType": {
                  "id": 49703,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1246:7:60",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              },
              "visibility": "public"
            },
            {
              "id": 49709,
              "nodeType": "VariableDeclaration",
              "src": "1293:61:60",
              "nodes": [],
              "constant": false,
              "functionSelector": "069af241",
              "mutability": "mutable",
              "name": "closeInvestimentTimestamps",
              "nameLocation": "1328:26:60",
              "scope": 50172,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "typeName": {
                "id": 49708,
                "keyType": {
                  "id": 49706,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1301:7:60",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "1293:27:60",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                  "typeString": "mapping(uint256 => uint256)"
                },
                "valueType": {
                  "id": 49707,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1312:7:60",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              },
              "visibility": "public"
            },
            {
              "id": 49713,
              "nodeType": "VariableDeclaration",
              "src": "1360:55:60",
              "nodes": [],
              "constant": false,
              "functionSelector": "54d89c91",
              "mutability": "mutable",
              "name": "openRedeemTimestamps",
              "nameLocation": "1395:20:60",
              "scope": 50172,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "typeName": {
                "id": 49712,
                "keyType": {
                  "id": 49710,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1368:7:60",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "1360:27:60",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                  "typeString": "mapping(uint256 => uint256)"
                },
                "valueType": {
                  "id": 49711,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1379:7:60",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              },
              "visibility": "public"
            },
            {
              "id": 49718,
              "nodeType": "VariableDeclaration",
              "src": "1421:55:60",
              "nodes": [],
              "constant": false,
              "functionSelector": "6166cb93",
              "mutability": "mutable",
              "name": "fundsAllowedTokens",
              "nameLocation": "1458:18:60",
              "scope": 50172,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_array$_t_address_$dyn_storage_$",
                "typeString": "mapping(uint256 => address[])"
              },
              "typeName": {
                "id": 49717,
                "keyType": {
                  "id": 49714,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1429:7:60",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "1421:29:60",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_array$_t_address_$dyn_storage_$",
                  "typeString": "mapping(uint256 => address[])"
                },
                "valueType": {
                  "baseType": {
                    "id": 49715,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1440:7:60",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 49716,
                  "nodeType": "ArrayTypeName",
                  "src": "1440:9:60",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                    "typeString": "address[]"
                  }
                }
              },
              "visibility": "public"
            },
            {
              "id": 49722,
              "nodeType": "VariableDeclaration",
              "src": "1482:50:60",
              "nodes": [],
              "constant": false,
              "functionSelector": "4835a6be",
              "mutability": "mutable",
              "name": "quotasAddresses",
              "nameLocation": "1517:15:60",
              "scope": 50172,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                "typeString": "mapping(uint256 => address)"
              },
              "typeName": {
                "id": 49721,
                "keyType": {
                  "id": 49719,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1490:7:60",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "1482:27:60",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                  "typeString": "mapping(uint256 => address)"
                },
                "valueType": {
                  "id": 49720,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1501:7:60",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                }
              },
              "visibility": "public"
            },
            {
              "id": 49728,
              "nodeType": "EventDefinition",
              "src": "1552:82:60",
              "nodes": [],
              "anonymous": false,
              "eventSelector": "9de2be681a220396ec1518a4ecd6c853a760e34fb9174e9213d7aa5a8b12f379",
              "name": "FundCreated",
              "nameLocation": "1558:11:60",
              "parameters": {
                "id": 49727,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 49724,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "fundAddress",
                    "nameLocation": "1586:11:60",
                    "nodeType": "VariableDeclaration",
                    "scope": 49728,
                    "src": "1570:27:60",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 49723,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1570:7:60",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 49726,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "quotaTokenAddress",
                    "nameLocation": "1615:17:60",
                    "nodeType": "VariableDeclaration",
                    "scope": 49728,
                    "src": "1599:33:60",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 49725,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1599:7:60",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1569:64:60"
              }
            },
            {
              "id": 49736,
              "nodeType": "EventDefinition",
              "src": "1639:93:60",
              "nodes": [],
              "anonymous": false,
              "eventSelector": "15bcca398c35efcf80f9148394b3ff1b358089610b2e18b315a3a18050a50942",
              "name": "InvestimentMade",
              "nameLocation": "1645:15:60",
              "parameters": {
                "id": 49735,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 49730,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "fundAddress",
                    "nameLocation": "1677:11:60",
                    "nodeType": "VariableDeclaration",
                    "scope": 49736,
                    "src": "1661:27:60",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 49729,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1661:7:60",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 49732,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "investor",
                    "nameLocation": "1706:8:60",
                    "nodeType": "VariableDeclaration",
                    "scope": 49736,
                    "src": "1690:24:60",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 49731,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1690:7:60",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 49734,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "amount",
                    "nameLocation": "1724:6:60",
                    "nodeType": "VariableDeclaration",
                    "scope": 49736,
                    "src": "1716:14:60",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 49733,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1716:7:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1660:71:60"
              }
            },
            {
              "id": 49744,
              "nodeType": "EventDefinition",
              "src": "1737:88:60",
              "nodes": [],
              "anonymous": false,
              "eventSelector": "6c9b4e508889a1ad47d9f443fa4a922856051bb1cc015e2048740e560e0f46f1",
              "name": "RedeemMade",
              "nameLocation": "1743:10:60",
              "parameters": {
                "id": 49743,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 49738,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "fundAddress",
                    "nameLocation": "1770:11:60",
                    "nodeType": "VariableDeclaration",
                    "scope": 49744,
                    "src": "1754:27:60",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 49737,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1754:7:60",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 49740,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "investor",
                    "nameLocation": "1799:8:60",
                    "nodeType": "VariableDeclaration",
                    "scope": 49744,
                    "src": "1783:24:60",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 49739,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1783:7:60",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 49742,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "amount",
                    "nameLocation": "1817:6:60",
                    "nodeType": "VariableDeclaration",
                    "scope": 49744,
                    "src": "1809:14:60",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 49741,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1809:7:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1753:71:60"
              }
            },
            {
              "id": 49780,
              "nodeType": "FunctionDefinition",
              "src": "1831:395:60",
              "nodes": [],
              "body": {
                "id": 49779,
                "nodeType": "Block",
                "src": "1980:246:60",
                "nodes": [],
                "statements": [
                  {
                    "expression": {
                      "id": 49763,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 49759,
                        "name": "fundsRegister",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49674,
                        "src": "1990:13:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC6551Registry_$50266",
                          "typeString": "contract IERC6551Registry"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "arguments": [
                          {
                            "id": 49761,
                            "name": "_fundsRegister",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49746,
                            "src": "2023:14:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 49760,
                          "name": "IERC6551Registry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50266,
                          "src": "2006:16:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC6551Registry_$50266_$",
                            "typeString": "type(contract IERC6551Registry)"
                          }
                        },
                        "id": 49762,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2006:32:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC6551Registry_$50266",
                          "typeString": "contract IERC6551Registry"
                        }
                      },
                      "src": "1990:48:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC6551Registry_$50266",
                        "typeString": "contract IERC6551Registry"
                      }
                    },
                    "id": 49764,
                    "nodeType": "ExpressionStatement",
                    "src": "1990:48:60"
                  },
                  {
                    "expression": {
                      "id": 49767,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 49765,
                        "name": "erc6551Implementation",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49676,
                        "src": "2048:21:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 49766,
                        "name": "_erc6551Implementation",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49748,
                        "src": "2072:22:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "2048:46:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 49768,
                    "nodeType": "ExpressionStatement",
                    "src": "2048:46:60"
                  },
                  {
                    "expression": {
                      "id": 49773,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 49769,
                        "name": "stablecoin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49681,
                        "src": "2130:10:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$45609",
                          "typeString": "contract IERC20"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "arguments": [
                          {
                            "id": 49771,
                            "name": "_stablecoin",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49752,
                            "src": "2150:11:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 49770,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 45609,
                          "src": "2143:6:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$45609_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 49772,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2143:19:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$45609",
                          "typeString": "contract IERC20"
                        }
                      },
                      "src": "2130:32:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$45609",
                        "typeString": "contract IERC20"
                      }
                    },
                    "id": 49774,
                    "nodeType": "ExpressionStatement",
                    "src": "2130:32:60"
                  },
                  {
                    "expression": {
                      "id": 49777,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 49775,
                        "name": "quotaTokenImplementation",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49678,
                        "src": "2172:24:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 49776,
                        "name": "_erc20Implementation",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49750,
                        "src": "2199:20:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "2172:47:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 49778,
                    "nodeType": "ExpressionStatement",
                    "src": "2172:47:60"
                  }
                ]
              },
              "implemented": true,
              "kind": "constructor",
              "modifiers": [
                {
                  "arguments": [
                    {
                      "hexValue": "5768616c6546696e616e6365",
                      "id": 49755,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1957:14:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_36d5dd5a4186d103fb1ce9b72a8b2d8dc5911f6937e75889ddd2c3eb6a256aec",
                        "typeString": "literal_string \"WhaleFinance\""
                      },
                      "value": "WhaleFinance"
                    },
                    {
                      "hexValue": "574649",
                      "id": 49756,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1973:5:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_a90f0d197d4d9bfc62012217276183920e69c6beadea14224c52a486126dbdee",
                        "typeString": "literal_string \"WFI\""
                      },
                      "value": "WFI"
                    }
                  ],
                  "id": 49757,
                  "kind": "baseConstructorSpecifier",
                  "modifierName": {
                    "id": 49754,
                    "name": "ERC721",
                    "nameLocations": [
                      "1950:6:60"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 46561,
                    "src": "1950:6:60"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1950:29:60"
                }
              ],
              "name": "",
              "nameLocation": "-1:-1:-1",
              "parameters": {
                "id": 49753,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 49746,
                    "mutability": "mutable",
                    "name": "_fundsRegister",
                    "nameLocation": "1851:14:60",
                    "nodeType": "VariableDeclaration",
                    "scope": 49780,
                    "src": "1843:22:60",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 49745,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1843:7:60",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 49748,
                    "mutability": "mutable",
                    "name": "_erc6551Implementation",
                    "nameLocation": "1875:22:60",
                    "nodeType": "VariableDeclaration",
                    "scope": 49780,
                    "src": "1867:30:60",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 49747,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1867:7:60",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 49750,
                    "mutability": "mutable",
                    "name": "_erc20Implementation",
                    "nameLocation": "1907:20:60",
                    "nodeType": "VariableDeclaration",
                    "scope": 49780,
                    "src": "1899:28:60",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 49749,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1899:7:60",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 49752,
                    "mutability": "mutable",
                    "name": "_stablecoin",
                    "nameLocation": "1937:11:60",
                    "nodeType": "VariableDeclaration",
                    "scope": 49780,
                    "src": "1929:19:60",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 49751,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1929:7:60",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1842:107:60"
              },
              "returnParameters": {
                "id": 49758,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1980:0:60"
              },
              "scope": 50172,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "id": 49953,
              "nodeType": "FunctionDefinition",
              "src": "2232:1709:60",
              "nodes": [],
              "body": {
                "id": 49952,
                "nodeType": "Block",
                "src": "2498:1443:60",
                "nodes": [],
                "statements": [
                  {
                    "assignments": [
                      49803
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 49803,
                        "mutability": "mutable",
                        "name": "fundId",
                        "nameLocation": "2525:6:60",
                        "nodeType": "VariableDeclaration",
                        "scope": 49952,
                        "src": "2517:14:60",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 49802,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2517:7:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 49807,
                    "initialValue": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 49804,
                          "name": "_fundIdCounter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49671,
                          "src": "2534:14:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Counter_$47080_storage",
                            "typeString": "struct Counters.Counter storage ref"
                          }
                        },
                        "id": 49805,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2549:7:60",
                        "memberName": "current",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 47092,
                        "src": "2534:22:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$47080_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$47080_storage_ptr_$",
                          "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                        }
                      },
                      "id": 49806,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2534:24:60",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2517:41:60"
                  },
                  {
                    "expression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 49808,
                          "name": "_fundIdCounter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49671,
                          "src": "2568:14:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Counter_$47080_storage",
                            "typeString": "struct Counters.Counter storage ref"
                          }
                        },
                        "id": 49810,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2583:9:60",
                        "memberName": "increment",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 47106,
                        "src": "2568:24:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Counter_$47080_storage_ptr_$returns$__$bound_to$_t_struct$_Counter_$47080_storage_ptr_$",
                          "typeString": "function (struct Counters.Counter storage pointer)"
                        }
                      },
                      "id": 49811,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2568:26:60",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 49812,
                    "nodeType": "ExpressionStatement",
                    "src": "2568:26:60"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 49814,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49784,
                          "src": "2610:3:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 49815,
                          "name": "fundId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49803,
                          "src": "2615:6:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 49813,
                        "name": "_mint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46235,
                        "src": "2604:5:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256)"
                        }
                      },
                      "id": 49816,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2604:18:60",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 49817,
                    "nodeType": "ExpressionStatement",
                    "src": "2604:18:60"
                  },
                  {
                    "body": {
                      "id": 49850,
                      "nodeType": "Block",
                      "src": "2684:228:60",
                      "statements": [
                        {
                          "condition": {
                            "id": 49834,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "!",
                            "prefix": true,
                            "src": "2701:37:60",
                            "subExpression": {
                              "baseExpression": {
                                "id": 49829,
                                "name": "whiteListedTokens",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 49685,
                                "src": "2702:17:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                  "typeString": "mapping(address => bool)"
                                }
                              },
                              "id": 49833,
                              "indexExpression": {
                                "baseExpression": {
                                  "id": 49830,
                                  "name": "_allowedTokens",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 49787,
                                  "src": "2720:14:60",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                    "typeString": "address[] memory"
                                  }
                                },
                                "id": 49832,
                                "indexExpression": {
                                  "id": 49831,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 49819,
                                  "src": "2735:1:60",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "2720:17:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2702:36:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "id": 49840,
                          "nodeType": "IfStatement",
                          "src": "2698:139:60",
                          "trueBody": {
                            "id": 49839,
                            "nodeType": "Block",
                            "src": "2739:98:60",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "hexValue": "596f7520747269656420746f2063726561746520612066756e6420776974682061206e6f6e2077686974656c697374656420746f6b656e",
                                      "id": 49836,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "2764:57:60",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_96b58d1452f9fcc3bfc6279837543f35bca37cb4c068c866a34aa2f98ce60304",
                                        "typeString": "literal_string \"You tried to create a fund with a non whitelisted token\""
                                      },
                                      "value": "You tried to create a fund with a non whitelisted token"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_96b58d1452f9fcc3bfc6279837543f35bca37cb4c068c866a34aa2f98ce60304",
                                        "typeString": "literal_string \"You tried to create a fund with a non whitelisted token\""
                                      }
                                    ],
                                    "id": 49835,
                                    "name": "revert",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [
                                      -19,
                                      -19
                                    ],
                                    "referencedDeclaration": -19,
                                    "src": "2757:6:60",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                                      "typeString": "function (string memory) pure"
                                    }
                                  },
                                  "id": 49837,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2757:65:60",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 49838,
                                "nodeType": "ExpressionStatement",
                                "src": "2757:65:60"
                              }
                            ]
                          }
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "baseExpression": {
                                  "id": 49845,
                                  "name": "_allowedTokens",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 49787,
                                  "src": "2883:14:60",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                    "typeString": "address[] memory"
                                  }
                                },
                                "id": 49847,
                                "indexExpression": {
                                  "id": 49846,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 49819,
                                  "src": "2898:1:60",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "2883:17:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "baseExpression": {
                                  "id": 49841,
                                  "name": "fundsAllowedTokens",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 49718,
                                  "src": "2851:18:60",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_array$_t_address_$dyn_storage_$",
                                    "typeString": "mapping(uint256 => address[] storage ref)"
                                  }
                                },
                                "id": 49843,
                                "indexExpression": {
                                  "id": 49842,
                                  "name": "fundId",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 49803,
                                  "src": "2870:6:60",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "2851:26:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                  "typeString": "address[] storage ref"
                                }
                              },
                              "id": 49844,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2878:4:60",
                              "memberName": "push",
                              "nodeType": "MemberAccess",
                              "src": "2851:31:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$bound_to$_t_array$_t_address_$dyn_storage_ptr_$",
                                "typeString": "function (address[] storage pointer,address)"
                              }
                            },
                            "id": 49848,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2851:50:60",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 49849,
                          "nodeType": "ExpressionStatement",
                          "src": "2851:50:60"
                        }
                      ]
                    },
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 49825,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 49822,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49819,
                        "src": "2652:1:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "expression": {
                          "id": 49823,
                          "name": "_allowedTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49787,
                          "src": "2656:14:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                            "typeString": "address[] memory"
                          }
                        },
                        "id": 49824,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2671:6:60",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "2656:21:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2652:25:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 49851,
                    "initializationExpression": {
                      "assignments": [
                        49819
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 49819,
                          "mutability": "mutable",
                          "name": "i",
                          "nameLocation": "2645:1:60",
                          "nodeType": "VariableDeclaration",
                          "scope": 49851,
                          "src": "2637:9:60",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 49818,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "2637:7:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 49821,
                      "initialValue": {
                        "hexValue": "30",
                        "id": 49820,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2649:1:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "2637:13:60"
                    },
                    "loopExpression": {
                      "expression": {
                        "id": 49827,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "++",
                        "prefix": false,
                        "src": "2679:3:60",
                        "subExpression": {
                          "id": 49826,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49819,
                          "src": "2679:1:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 49828,
                      "nodeType": "ExpressionStatement",
                      "src": "2679:3:60"
                    },
                    "nodeType": "ForStatement",
                    "src": "2633:279:60"
                  },
                  {
                    "assignments": [
                      49853
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 49853,
                        "mutability": "mutable",
                        "name": "createdFundAddress",
                        "nameLocation": "2930:18:60",
                        "nodeType": "VariableDeclaration",
                        "scope": 49952,
                        "src": "2922:26:60",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 49852,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2922:7:60",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 49870,
                    "initialValue": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 49858,
                              "name": "erc6551Implementation",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49676,
                              "src": "3000:21:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 49857,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2992:7:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 49856,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2992:7:60",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 49859,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2992:30:60",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "expression": {
                            "id": 49860,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -4,
                            "src": "3036:5:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 49861,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3042:7:60",
                          "memberName": "chainid",
                          "nodeType": "MemberAccess",
                          "src": "3036:13:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "id": 49864,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -28,
                              "src": "3071:4:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_WhaleFinance_$50172",
                                "typeString": "contract WhaleFinance"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_WhaleFinance_$50172",
                                "typeString": "contract WhaleFinance"
                              }
                            ],
                            "id": 49863,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3063:7:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 49862,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "3063:7:60",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 49865,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3063:13:60",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 49866,
                          "name": "fundId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49803,
                          "src": "3090:6:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "hexValue": "30",
                          "id": 49867,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3110:1:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "hexValue": "",
                          "id": 49868,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3125:2:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          },
                          "value": ""
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          }
                        ],
                        "expression": {
                          "id": 49854,
                          "name": "fundsRegister",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49674,
                          "src": "2951:13:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC6551Registry_$50266",
                            "typeString": "contract IERC6551Registry"
                          }
                        },
                        "id": 49855,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2965:13:60",
                        "memberName": "createAccount",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 50249,
                        "src": "2951:27:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$_t_address_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_address_$",
                          "typeString": "function (address,uint256,address,uint256,uint256,bytes memory) external returns (address)"
                        }
                      },
                      "id": 49869,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2951:186:60",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2922:215:60"
                  },
                  {
                    "expression": {
                      "id": 49875,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 49871,
                          "name": "fundsAddresses",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49689,
                          "src": "3147:14:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                            "typeString": "mapping(uint256 => address)"
                          }
                        },
                        "id": 49873,
                        "indexExpression": {
                          "id": 49872,
                          "name": "fundId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49803,
                          "src": "3162:6:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "3147:22:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 49874,
                        "name": "createdFundAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49853,
                        "src": "3172:18:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "3147:43:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 49876,
                    "nodeType": "ExpressionStatement",
                    "src": "3147:43:60"
                  },
                  {
                    "expression": {
                      "id": 49881,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 49877,
                          "name": "admFees",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49693,
                          "src": "3201:7:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                          }
                        },
                        "id": 49879,
                        "indexExpression": {
                          "id": 49878,
                          "name": "fundId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49803,
                          "src": "3209:6:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "3201:15:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 49880,
                        "name": "_admFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49789,
                        "src": "3219:7:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3201:25:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 49882,
                    "nodeType": "ExpressionStatement",
                    "src": "3201:25:60"
                  },
                  {
                    "expression": {
                      "id": 49887,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 49883,
                          "name": "perfFees",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49697,
                          "src": "3289:8:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                          }
                        },
                        "id": 49885,
                        "indexExpression": {
                          "id": 49884,
                          "name": "fundId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49803,
                          "src": "3298:6:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "3289:16:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 49886,
                        "name": "_perfFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49791,
                        "src": "3308:8:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3289:27:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 49888,
                    "nodeType": "ExpressionStatement",
                    "src": "3289:27:60"
                  },
                  {
                    "expression": {
                      "id": 49893,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 49889,
                          "name": "openInvestimentTimestamps",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49705,
                          "src": "3379:25:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                          }
                        },
                        "id": 49891,
                        "indexExpression": {
                          "id": 49890,
                          "name": "fundId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49803,
                          "src": "3405:6:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "3379:33:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 49892,
                        "name": "_openInvestiment",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49793,
                        "src": "3415:16:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3379:52:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 49894,
                    "nodeType": "ExpressionStatement",
                    "src": "3379:52:60"
                  },
                  {
                    "expression": {
                      "id": 49899,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 49895,
                          "name": "closeInvestimentTimestamps",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49709,
                          "src": "3441:26:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                          }
                        },
                        "id": 49897,
                        "indexExpression": {
                          "id": 49896,
                          "name": "fundId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49803,
                          "src": "3468:6:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "3441:34:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 49898,
                        "name": "_closeInvestiments",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49795,
                        "src": "3478:18:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3441:55:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 49900,
                    "nodeType": "ExpressionStatement",
                    "src": "3441:55:60"
                  },
                  {
                    "expression": {
                      "id": 49905,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 49901,
                          "name": "openRedeemTimestamps",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49713,
                          "src": "3506:20:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                          }
                        },
                        "id": 49903,
                        "indexExpression": {
                          "id": 49902,
                          "name": "fundId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49803,
                          "src": "3527:6:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "3506:28:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 49904,
                        "name": "_openRedeem",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49797,
                        "src": "3537:11:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3506:42:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 49906,
                    "nodeType": "ExpressionStatement",
                    "src": "3506:42:60"
                  },
                  {
                    "assignments": [
                      49909
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 49909,
                        "mutability": "mutable",
                        "name": "newQuotaTokenAddress",
                        "nameLocation": "3570:20:60",
                        "nodeType": "VariableDeclaration",
                        "scope": 49952,
                        "src": "3558:32:60",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_BeaconProxy_$44859",
                          "typeString": "contract BeaconProxy"
                        },
                        "typeName": {
                          "id": 49908,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 49907,
                            "name": "BeaconProxy",
                            "nameLocations": [
                              "3558:11:60"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 44859,
                            "src": "3558:11:60"
                          },
                          "referencedDeclaration": 44859,
                          "src": "3558:11:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_BeaconProxy_$44859",
                            "typeString": "contract BeaconProxy"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 49932,
                    "initialValue": {
                      "arguments": [
                        {
                          "id": 49913,
                          "name": "quotaTokenImplementation",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49678,
                          "src": "3609:24:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "expression": {
                                "expression": {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "hexValue": "30",
                                          "id": 49919,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "kind": "number",
                                          "lValueRequested": false,
                                          "nodeType": "Literal",
                                          "src": "3689:1:60",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_rational_0_by_1",
                                            "typeString": "int_const 0"
                                          },
                                          "value": "0"
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_rational_0_by_1",
                                            "typeString": "int_const 0"
                                          }
                                        ],
                                        "id": 49918,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "3681:7:60",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_address_$",
                                          "typeString": "type(address)"
                                        },
                                        "typeName": {
                                          "id": 49917,
                                          "name": "address",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "3681:7:60",
                                          "typeDescriptions": {}
                                        }
                                      },
                                      "id": 49920,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "3681:10:60",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "id": 49916,
                                    "name": "QuotaToken",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 49497,
                                    "src": "3670:10:60",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_QuotaToken_$49497_$",
                                      "typeString": "type(contract QuotaToken)"
                                    }
                                  },
                                  "id": 49921,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3670:22:60",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_QuotaToken_$49497",
                                    "typeString": "contract QuotaToken"
                                  }
                                },
                                "id": 49922,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "3693:10:60",
                                "memberName": "initialize",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 49435,
                                "src": "3670:33:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_uint256_$returns$__$",
                                  "typeString": "function (string memory,address,uint256) external"
                                }
                              },
                              "id": 49923,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "3704:8:60",
                              "memberName": "selector",
                              "nodeType": "MemberAccess",
                              "src": "3670:42:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes4",
                                "typeString": "bytes4"
                              }
                            },
                            {
                              "id": 49924,
                              "name": "_symbol",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49782,
                              "src": "3726:7:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_calldata_ptr",
                                "typeString": "string calldata"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 49927,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "3743:4:60",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_WhaleFinance_$50172",
                                    "typeString": "contract WhaleFinance"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_WhaleFinance_$50172",
                                    "typeString": "contract WhaleFinance"
                                  }
                                ],
                                "id": 49926,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3735:7:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 49925,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3735:7:60",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 49928,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3735:13:60",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 49929,
                              "name": "_openInvestiment",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49793,
                              "src": "3750:16:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes4",
                                "typeString": "bytes4"
                              },
                              {
                                "typeIdentifier": "t_string_calldata_ptr",
                                "typeString": "string calldata"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "id": 49914,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "3647:3:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 49915,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "3651:18:60",
                            "memberName": "encodeWithSelector",
                            "nodeType": "MemberAccess",
                            "src": "3647:22:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function (bytes4) pure returns (bytes memory)"
                            }
                          },
                          "id": 49930,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3647:120:60",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 49912,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "NewExpression",
                        "src": "3593:15:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_creation_payable$_t_address_$_t_bytes_memory_ptr_$returns$_t_contract$_BeaconProxy_$44859_$",
                          "typeString": "function (address,bytes memory) payable returns (contract BeaconProxy)"
                        },
                        "typeName": {
                          "id": 49911,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 49910,
                            "name": "BeaconProxy",
                            "nameLocations": [
                              "3597:11:60"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 44859,
                            "src": "3597:11:60"
                          },
                          "referencedDeclaration": 44859,
                          "src": "3597:11:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_BeaconProxy_$44859",
                            "typeString": "contract BeaconProxy"
                          }
                        }
                      },
                      "id": 49931,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3593:175:60",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_BeaconProxy_$44859",
                        "typeString": "contract BeaconProxy"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3558:210:60"
                  },
                  {
                    "expression": {
                      "id": 49940,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 49933,
                          "name": "quotasAddresses",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49722,
                          "src": "3779:15:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                            "typeString": "mapping(uint256 => address)"
                          }
                        },
                        "id": 49935,
                        "indexExpression": {
                          "id": 49934,
                          "name": "fundId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49803,
                          "src": "3795:6:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "3779:23:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "arguments": [
                          {
                            "id": 49938,
                            "name": "newQuotaTokenAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49909,
                            "src": "3813:20:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_BeaconProxy_$44859",
                              "typeString": "contract BeaconProxy"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_BeaconProxy_$44859",
                              "typeString": "contract BeaconProxy"
                            }
                          ],
                          "id": 49937,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3805:7:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 49936,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3805:7:60",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 49939,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3805:29:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "3779:55:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 49941,
                    "nodeType": "ExpressionStatement",
                    "src": "3779:55:60"
                  },
                  {
                    "eventCall": {
                      "arguments": [
                        {
                          "id": 49943,
                          "name": "createdFundAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49853,
                          "src": "3861:18:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "id": 49946,
                              "name": "newQuotaTokenAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49909,
                              "src": "3889:20:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_BeaconProxy_$44859",
                                "typeString": "contract BeaconProxy"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_BeaconProxy_$44859",
                                "typeString": "contract BeaconProxy"
                              }
                            ],
                            "id": 49945,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3881:7:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 49944,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "3881:7:60",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 49947,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3881:29:60",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 49942,
                        "name": "FundCreated",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49728,
                        "src": "3849:11:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                          "typeString": "function (address,address)"
                        }
                      },
                      "id": 49948,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3849:62:60",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 49949,
                    "nodeType": "EmitStatement",
                    "src": "3844:67:60"
                  },
                  {
                    "expression": {
                      "id": 49950,
                      "name": "fundId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49803,
                      "src": "3928:6:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 49801,
                    "id": 49951,
                    "nodeType": "Return",
                    "src": "3921:13:60"
                  }
                ]
              },
              "functionSelector": "5ecd5be7",
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "createFund",
              "nameLocation": "2241:10:60",
              "parameters": {
                "id": 49798,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 49782,
                    "mutability": "mutable",
                    "name": "_symbol",
                    "nameLocation": "2268:7:60",
                    "nodeType": "VariableDeclaration",
                    "scope": 49953,
                    "src": "2252:23:60",
                    "stateVariable": false,
                    "storageLocation": "calldata",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_calldata_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 49781,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "2252:6:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 49784,
                    "mutability": "mutable",
                    "name": "_to",
                    "nameLocation": "2285:3:60",
                    "nodeType": "VariableDeclaration",
                    "scope": 49953,
                    "src": "2277:11:60",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 49783,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2277:7:60",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 49787,
                    "mutability": "mutable",
                    "name": "_allowedTokens",
                    "nameLocation": "2307:14:60",
                    "nodeType": "VariableDeclaration",
                    "scope": 49953,
                    "src": "2290:31:60",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 49785,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "2290:7:60",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 49786,
                      "nodeType": "ArrayTypeName",
                      "src": "2290:9:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                        "typeString": "address[]"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 49789,
                    "mutability": "mutable",
                    "name": "_admFee",
                    "nameLocation": "2352:7:60",
                    "nodeType": "VariableDeclaration",
                    "scope": 49953,
                    "src": "2344:15:60",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 49788,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2344:7:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 49791,
                    "mutability": "mutable",
                    "name": "_perfFee",
                    "nameLocation": "2369:8:60",
                    "nodeType": "VariableDeclaration",
                    "scope": 49953,
                    "src": "2361:16:60",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 49790,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2361:7:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 49793,
                    "mutability": "mutable",
                    "name": "_openInvestiment",
                    "nameLocation": "2387:16:60",
                    "nodeType": "VariableDeclaration",
                    "scope": 49953,
                    "src": "2379:24:60",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 49792,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2379:7:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 49795,
                    "mutability": "mutable",
                    "name": "_closeInvestiments",
                    "nameLocation": "2413:18:60",
                    "nodeType": "VariableDeclaration",
                    "scope": 49953,
                    "src": "2405:26:60",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 49794,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2405:7:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 49797,
                    "mutability": "mutable",
                    "name": "_openRedeem",
                    "nameLocation": "2441:11:60",
                    "nodeType": "VariableDeclaration",
                    "scope": 49953,
                    "src": "2433:19:60",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 49796,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2433:7:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2251:202:60"
              },
              "returnParameters": {
                "id": 49801,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 49800,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 49953,
                    "src": "2490:7:60",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 49799,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2490:7:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2489:9:60"
              },
              "scope": 50172,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "id": 50068,
              "nodeType": "FunctionDefinition",
              "src": "3947:1021:60",
              "nodes": [],
              "body": {
                "id": 50067,
                "nodeType": "Block",
                "src": "4003:965:60",
                "nodes": [],
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 49963,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 49961,
                            "name": "_amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49955,
                            "src": "4021:7:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 49962,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4031:1:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "4021:11:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "596f75206e65656420746f20696e76657374206d6f7265207468616e2030",
                          "id": 49964,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4034:32:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_17fb5ef0efbab4b4e0348711cf61fe6275c4396d90e99c3a0eff5dfd13b4d599",
                            "typeString": "literal_string \"You need to invest more than 0\""
                          },
                          "value": "You need to invest more than 0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_17fb5ef0efbab4b4e0348711cf61fe6275c4396d90e99c3a0eff5dfd13b4d599",
                            "typeString": "literal_string \"You need to invest more than 0\""
                          }
                        ],
                        "id": 49960,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "4013:7:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 49965,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4013:54:60",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 49966,
                    "nodeType": "ExpressionStatement",
                    "src": "4013:54:60"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 49973,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 49968,
                              "name": "block",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -4,
                              "src": "4085:5:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_block",
                                "typeString": "block"
                              }
                            },
                            "id": 49969,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4091:9:60",
                            "memberName": "timestamp",
                            "nodeType": "MemberAccess",
                            "src": "4085:15:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "baseExpression": {
                              "id": 49970,
                              "name": "openInvestimentTimestamps",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49705,
                              "src": "4104:25:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                "typeString": "mapping(uint256 => uint256)"
                              }
                            },
                            "id": 49972,
                            "indexExpression": {
                              "id": 49971,
                              "name": "fundId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49957,
                              "src": "4130:6:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "4104:33:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4085:52:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "496e76657374696d656e74206973206e6f74206f70656e20796574",
                          "id": 49974,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4139:29:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_c7a93eeef4fb1982d194bd10dc863dd782a38c0aa15337179024a4db8be314ed",
                            "typeString": "literal_string \"Investiment is not open yet\""
                          },
                          "value": "Investiment is not open yet"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_c7a93eeef4fb1982d194bd10dc863dd782a38c0aa15337179024a4db8be314ed",
                            "typeString": "literal_string \"Investiment is not open yet\""
                          }
                        ],
                        "id": 49967,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "4077:7:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 49975,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4077:92:60",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 49976,
                    "nodeType": "ExpressionStatement",
                    "src": "4077:92:60"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 49983,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 49978,
                              "name": "block",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -4,
                              "src": "4187:5:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_block",
                                "typeString": "block"
                              }
                            },
                            "id": 49979,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4193:9:60",
                            "memberName": "timestamp",
                            "nodeType": "MemberAccess",
                            "src": "4187:15:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "baseExpression": {
                              "id": 49980,
                              "name": "closeInvestimentTimestamps",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49709,
                              "src": "4206:26:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                "typeString": "mapping(uint256 => uint256)"
                              }
                            },
                            "id": 49982,
                            "indexExpression": {
                              "id": 49981,
                              "name": "fundId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49957,
                              "src": "4233:6:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "4206:34:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4187:53:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "496e76657374696d656e7420697320636c6f736564",
                          "id": 49984,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4242:23:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_a8fa258916cc18c2319690d3c89edcb777c1a91023ebc579d8bc4b3aa21c7913",
                            "typeString": "literal_string \"Investiment is closed\""
                          },
                          "value": "Investiment is closed"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_a8fa258916cc18c2319690d3c89edcb777c1a91023ebc579d8bc4b3aa21c7913",
                            "typeString": "literal_string \"Investiment is closed\""
                          }
                        ],
                        "id": 49977,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "4179:7:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 49985,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4179:87:60",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 49986,
                    "nodeType": "ExpressionStatement",
                    "src": "4179:87:60"
                  },
                  {
                    "assignments": [
                      49988
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 49988,
                        "mutability": "mutable",
                        "name": "fundTargetAddress",
                        "nameLocation": "4285:17:60",
                        "nodeType": "VariableDeclaration",
                        "scope": 50067,
                        "src": "4277:25:60",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 49987,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "4277:7:60",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 49992,
                    "initialValue": {
                      "baseExpression": {
                        "id": 49989,
                        "name": "fundsAddresses",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49689,
                        "src": "4305:14:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 49991,
                      "indexExpression": {
                        "id": 49990,
                        "name": "fundId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49957,
                        "src": "4320:6:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "4305:22:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4277:50:60"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 49999,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 49994,
                            "name": "fundTargetAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49988,
                            "src": "4345:17:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "arguments": [
                              {
                                "hexValue": "30",
                                "id": 49997,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4374:1:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                }
                              ],
                              "id": 49996,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4366:7:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 49995,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "4366:7:60",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 49998,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4366:10:60",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "4345:31:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "46756e64206e6f7420666f756e64",
                          "id": 50000,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4378:16:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_f1fb44e9256173c84ec393a279d638d22bb2a70c28525f624f068eedf8dcb863",
                            "typeString": "literal_string \"Fund not found\""
                          },
                          "value": "Fund not found"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_f1fb44e9256173c84ec393a279d638d22bb2a70c28525f624f068eedf8dcb863",
                            "typeString": "literal_string \"Fund not found\""
                          }
                        ],
                        "id": 49993,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "4337:7:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 50001,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4337:58:60",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 50002,
                    "nodeType": "ExpressionStatement",
                    "src": "4337:58:60"
                  },
                  {
                    "assignments": [
                      50004
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 50004,
                        "mutability": "mutable",
                        "name": "managerAdmFee",
                        "nameLocation": "4414:13:60",
                        "nodeType": "VariableDeclaration",
                        "scope": 50067,
                        "src": "4406:21:60",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 50003,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "4406:7:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 50012,
                    "initialValue": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 50011,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 50009,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 50005,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49955,
                          "src": "4430:7:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "baseExpression": {
                            "id": 50006,
                            "name": "admFees",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49693,
                            "src": "4440:7:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                              "typeString": "mapping(uint256 => uint256)"
                            }
                          },
                          "id": 50008,
                          "indexExpression": {
                            "id": 50007,
                            "name": "fundId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49957,
                            "src": "4448:6:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4440:15:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4430:25:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "3130303030",
                        "id": 50010,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4458:5:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10000_by_1",
                          "typeString": "int_const 10000"
                        },
                        "value": "10000"
                      },
                      "src": "4430:33:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4406:57:60"
                  },
                  {
                    "assignments": [
                      50014
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 50014,
                        "mutability": "mutable",
                        "name": "amountInvestor",
                        "nameLocation": "4481:14:60",
                        "nodeType": "VariableDeclaration",
                        "scope": 50067,
                        "src": "4473:22:60",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 50013,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "4473:7:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 50018,
                    "initialValue": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 50017,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 50015,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49955,
                        "src": "4498:7:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "id": 50016,
                        "name": "managerAdmFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50004,
                        "src": "4508:13:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "4498:23:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4473:48:60"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 50022,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "4556:3:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 50023,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4560:6:60",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "4556:10:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 50024,
                          "name": "fundTargetAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49988,
                          "src": "4568:17:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 50025,
                          "name": "amountInvestor",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50014,
                          "src": "4587:14:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 50019,
                          "name": "stablecoin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49681,
                          "src": "4532:10:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$45609",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 50021,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4543:12:60",
                        "memberName": "transferFrom",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 45608,
                        "src": "4532:23:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,address,uint256) external returns (bool)"
                        }
                      },
                      "id": 50026,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4532:70:60",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 50027,
                    "nodeType": "ExpressionStatement",
                    "src": "4532:70:60"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 50031,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "4636:3:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 50032,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4640:6:60",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "4636:10:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "id": 50034,
                              "name": "fundId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49957,
                              "src": "4656:6:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 50033,
                            "name": "ownerOf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 45780,
                            "src": "4648:7:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                              "typeString": "function (uint256) view returns (address)"
                            }
                          },
                          "id": 50035,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4648:15:60",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 50036,
                          "name": "managerAdmFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50004,
                          "src": "4665:13:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 50028,
                          "name": "stablecoin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49681,
                          "src": "4612:10:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$45609",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 50030,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4623:12:60",
                        "memberName": "transferFrom",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 45608,
                        "src": "4612:23:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,address,uint256) external returns (bool)"
                        }
                      },
                      "id": 50037,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4612:67:60",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 50038,
                    "nodeType": "ExpressionStatement",
                    "src": "4612:67:60"
                  },
                  {
                    "expression": {
                      "id": 50043,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 50039,
                          "name": "initialAmounts",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49701,
                          "src": "4719:14:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                          }
                        },
                        "id": 50041,
                        "indexExpression": {
                          "id": 50040,
                          "name": "fundId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49957,
                          "src": "4734:6:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "4719:22:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "+=",
                      "rightHandSide": {
                        "id": 50042,
                        "name": "amountInvestor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50014,
                        "src": "4745:14:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "4719:40:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 50044,
                    "nodeType": "ExpressionStatement",
                    "src": "4719:40:60"
                  },
                  {
                    "assignments": [
                      50046
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 50046,
                        "mutability": "mutable",
                        "name": "fundQuotaAddress",
                        "nameLocation": "4778:16:60",
                        "nodeType": "VariableDeclaration",
                        "scope": 50067,
                        "src": "4770:24:60",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 50045,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "4770:7:60",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 50050,
                    "initialValue": {
                      "baseExpression": {
                        "id": 50047,
                        "name": "quotasAddresses",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49722,
                        "src": "4797:15:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 50049,
                      "indexExpression": {
                        "id": 50048,
                        "name": "fundId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49957,
                        "src": "4813:6:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "4797:23:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4770:50:60"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 50055,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "4864:3:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 50056,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4868:6:60",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "4864:10:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 50057,
                          "name": "amountInvestor",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50014,
                          "src": "4876:14:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "arguments": [
                            {
                              "id": 50052,
                              "name": "fundQuotaAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 50046,
                              "src": "4841:16:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 50051,
                            "name": "QuotaToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49497,
                            "src": "4830:10:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_QuotaToken_$49497_$",
                              "typeString": "type(contract QuotaToken)"
                            }
                          },
                          "id": 50053,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4830:28:60",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_QuotaToken_$49497",
                            "typeString": "contract QuotaToken"
                          }
                        },
                        "id": 50054,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4859:4:60",
                        "memberName": "mint",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 49456,
                        "src": "4830:33:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256) external"
                        }
                      },
                      "id": 50058,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4830:61:60",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 50059,
                    "nodeType": "ExpressionStatement",
                    "src": "4830:61:60"
                  },
                  {
                    "eventCall": {
                      "arguments": [
                        {
                          "id": 50061,
                          "name": "fundTargetAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49988,
                          "src": "4922:17:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "expression": {
                            "id": 50062,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "4941:3:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 50063,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4945:6:60",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "4941:10:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 50064,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49955,
                          "src": "4953:7:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 50060,
                        "name": "InvestimentMade",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49736,
                        "src": "4906:15:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 50065,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4906:55:60",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 50066,
                    "nodeType": "EmitStatement",
                    "src": "4901:60:60"
                  }
                ]
              },
              "functionSelector": "d87aa643",
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "invest",
              "nameLocation": "3956:6:60",
              "parameters": {
                "id": 49958,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 49955,
                    "mutability": "mutable",
                    "name": "_amount",
                    "nameLocation": "3971:7:60",
                    "nodeType": "VariableDeclaration",
                    "scope": 50068,
                    "src": "3963:15:60",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 49954,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3963:7:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 49957,
                    "mutability": "mutable",
                    "name": "fundId",
                    "nameLocation": "3988:6:60",
                    "nodeType": "VariableDeclaration",
                    "scope": 50068,
                    "src": "3980:14:60",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 49956,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3980:7:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "3962:33:60"
              },
              "returnParameters": {
                "id": 49959,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "4003:0:60"
              },
              "scope": 50172,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "id": 50143,
              "nodeType": "FunctionDefinition",
              "src": "4974:642:60",
              "nodes": [],
              "body": {
                "id": 50142,
                "nodeType": "Block",
                "src": "5018:598:60",
                "nodes": [],
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 50079,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 50074,
                              "name": "block",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -4,
                              "src": "5036:5:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_block",
                                "typeString": "block"
                              }
                            },
                            "id": 50075,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5042:9:60",
                            "memberName": "timestamp",
                            "nodeType": "MemberAccess",
                            "src": "5036:15:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "baseExpression": {
                              "id": 50076,
                              "name": "openRedeemTimestamps",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49713,
                              "src": "5055:20:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                "typeString": "mapping(uint256 => uint256)"
                              }
                            },
                            "id": 50078,
                            "indexExpression": {
                              "id": 50077,
                              "name": "fundId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 50070,
                              "src": "5076:6:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "5055:28:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5036:47:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "52656465656d206973206e6f74206f70656e20796574",
                          "id": 50080,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5085:24:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_818f2fec1ce047f01f6111b45cb0f4ac7c2a49683f138b8aba5198a9f8d5a8a8",
                            "typeString": "literal_string \"Redeem is not open yet\""
                          },
                          "value": "Redeem is not open yet"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_818f2fec1ce047f01f6111b45cb0f4ac7c2a49683f138b8aba5198a9f8d5a8a8",
                            "typeString": "literal_string \"Redeem is not open yet\""
                          }
                        ],
                        "id": 50073,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "5028:7:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 50081,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5028:82:60",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 50082,
                    "nodeType": "ExpressionStatement",
                    "src": "5028:82:60"
                  },
                  {
                    "assignments": [
                      50084
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 50084,
                        "mutability": "mutable",
                        "name": "fundQuotaAddress",
                        "nameLocation": "5128:16:60",
                        "nodeType": "VariableDeclaration",
                        "scope": 50142,
                        "src": "5120:24:60",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 50083,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "5120:7:60",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 50088,
                    "initialValue": {
                      "baseExpression": {
                        "id": 50085,
                        "name": "quotasAddresses",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49722,
                        "src": "5147:15:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 50087,
                      "indexExpression": {
                        "id": 50086,
                        "name": "fundId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50070,
                        "src": "5163:6:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "5147:23:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "5120:50:60"
                  },
                  {
                    "assignments": [
                      50090
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 50090,
                        "mutability": "mutable",
                        "name": "amountQuotas",
                        "nameLocation": "5188:12:60",
                        "nodeType": "VariableDeclaration",
                        "scope": 50142,
                        "src": "5180:20:60",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 50089,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "5180:7:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 50098,
                    "initialValue": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 50095,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "5242:3:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 50096,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5246:6:60",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "5242:10:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "expression": {
                          "arguments": [
                            {
                              "id": 50092,
                              "name": "fundQuotaAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 50084,
                              "src": "5214:16:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 50091,
                            "name": "QuotaToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49497,
                            "src": "5203:10:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_QuotaToken_$49497_$",
                              "typeString": "type(contract QuotaToken)"
                            }
                          },
                          "id": 50093,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5203:28:60",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_QuotaToken_$49497",
                            "typeString": "contract QuotaToken"
                          }
                        },
                        "id": 50094,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5232:9:60",
                        "memberName": "balanceOf",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 43311,
                        "src": "5203:38:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view external returns (uint256)"
                        }
                      },
                      "id": 50097,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5203:50:60",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "5180:73:60"
                  },
                  {
                    "assignments": [
                      50100
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 50100,
                        "mutability": "mutable",
                        "name": "redeemableAmount",
                        "nameLocation": "5280:16:60",
                        "nodeType": "VariableDeclaration",
                        "scope": 50142,
                        "src": "5272:24:60",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 50099,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "5272:7:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 50114,
                    "initialValue": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 50113,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 50105,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 50101,
                              "name": "amountQuotas",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 50090,
                              "src": "5300:12:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "baseExpression": {
                                "id": 50102,
                                "name": "initialAmounts",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 49701,
                                "src": "5313:14:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                  "typeString": "mapping(uint256 => uint256)"
                                }
                              },
                              "id": 50104,
                              "indexExpression": {
                                "id": 50103,
                                "name": "fundId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 50070,
                                "src": "5328:6:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "5313:22:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "5300:35:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 50106,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "5299:37:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "arguments": [
                          {
                            "baseExpression": {
                              "id": 50109,
                              "name": "fundsAddresses",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49689,
                              "src": "5360:14:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                                "typeString": "mapping(uint256 => address)"
                              }
                            },
                            "id": 50111,
                            "indexExpression": {
                              "id": 50110,
                              "name": "fundId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 50070,
                              "src": "5375:6:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "5360:22:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "id": 50107,
                            "name": "stablecoin",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49681,
                            "src": "5339:10:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$45609",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 50108,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5350:9:60",
                          "memberName": "balanceOf",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 45566,
                          "src": "5339:20:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                            "typeString": "function (address) view external returns (uint256)"
                          }
                        },
                        "id": 50112,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5339:44:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "5299:84:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "5272:111:60"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "baseExpression": {
                            "id": 50118,
                            "name": "fundsAddresses",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49689,
                            "src": "5418:14:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                              "typeString": "mapping(uint256 => address)"
                            }
                          },
                          "id": 50120,
                          "indexExpression": {
                            "id": 50119,
                            "name": "fundId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50070,
                            "src": "5433:6:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "5418:22:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "expression": {
                            "id": 50121,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "5442:3:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 50122,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5446:6:60",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "5442:10:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 50123,
                          "name": "redeemableAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50100,
                          "src": "5454:16:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 50115,
                          "name": "stablecoin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49681,
                          "src": "5394:10:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$45609",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 50117,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5405:12:60",
                        "memberName": "transferFrom",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 45608,
                        "src": "5394:23:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,address,uint256) external returns (bool)"
                        }
                      },
                      "id": 50124,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5394:77:60",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 50125,
                    "nodeType": "ExpressionStatement",
                    "src": "5394:77:60"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 50130,
                          "name": "amountQuotas",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50090,
                          "src": "5516:12:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "arguments": [
                            {
                              "id": 50127,
                              "name": "fundQuotaAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 50084,
                              "src": "5493:16:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 50126,
                            "name": "QuotaToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49497,
                            "src": "5482:10:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_QuotaToken_$49497_$",
                              "typeString": "type(contract QuotaToken)"
                            }
                          },
                          "id": 50128,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5482:28:60",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_QuotaToken_$49497",
                            "typeString": "contract QuotaToken"
                          }
                        },
                        "id": 50129,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5511:4:60",
                        "memberName": "burn",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 49476,
                        "src": "5482:33:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256) external"
                        }
                      },
                      "id": 50131,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5482:47:60",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 50132,
                    "nodeType": "ExpressionStatement",
                    "src": "5482:47:60"
                  },
                  {
                    "eventCall": {
                      "arguments": [
                        {
                          "baseExpression": {
                            "id": 50134,
                            "name": "fundsAddresses",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49689,
                            "src": "5556:14:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                              "typeString": "mapping(uint256 => address)"
                            }
                          },
                          "id": 50136,
                          "indexExpression": {
                            "id": 50135,
                            "name": "fundId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50070,
                            "src": "5571:6:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "5556:22:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "expression": {
                            "id": 50137,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "5580:3:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 50138,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5584:6:60",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "5580:10:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 50139,
                          "name": "redeemableAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50100,
                          "src": "5592:16:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 50133,
                        "name": "RedeemMade",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49744,
                        "src": "5545:10:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 50140,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5545:64:60",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 50141,
                    "nodeType": "EmitStatement",
                    "src": "5540:69:60"
                  }
                ]
              },
              "functionSelector": "258d3c33",
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "redeemYield",
              "nameLocation": "4983:11:60",
              "parameters": {
                "id": 50071,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 50070,
                    "mutability": "mutable",
                    "name": "fundId",
                    "nameLocation": "5003:6:60",
                    "nodeType": "VariableDeclaration",
                    "scope": 50143,
                    "src": "4995:14:60",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 50069,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4995:7:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "4994:16:60"
              },
              "returnParameters": {
                "id": 50072,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "5018:0:60"
              },
              "scope": 50172,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "id": 50157,
              "nodeType": "FunctionDefinition",
              "src": "5622:111:60",
              "nodes": [],
              "body": {
                "id": 50156,
                "nodeType": "Block",
                "src": "5684:49:60",
                "nodes": [],
                "statements": [
                  {
                    "expression": {
                      "id": 50154,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 50150,
                          "name": "whiteListedTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49685,
                          "src": "5694:17:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 50152,
                        "indexExpression": {
                          "id": 50151,
                          "name": "_token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50145,
                          "src": "5712:6:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "5694:25:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "hexValue": "74727565",
                        "id": 50153,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5722:4:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "src": "5694:32:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 50155,
                    "nodeType": "ExpressionStatement",
                    "src": "5694:32:60"
                  }
                ]
              },
              "functionSelector": "822dde8d",
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 50148,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 50147,
                    "name": "onlyOwner",
                    "nameLocations": [
                      "5674:9:60"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 44311,
                    "src": "5674:9:60"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "5674:9:60"
                }
              ],
              "name": "setWhiteListedToken",
              "nameLocation": "5631:19:60",
              "parameters": {
                "id": 50146,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 50145,
                    "mutability": "mutable",
                    "name": "_token",
                    "nameLocation": "5659:6:60",
                    "nodeType": "VariableDeclaration",
                    "scope": 50157,
                    "src": "5651:14:60",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 50144,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5651:7:60",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "5650:16:60"
              },
              "returnParameters": {
                "id": 50149,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "5684:0:60"
              },
              "scope": 50172,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "id": 50171,
              "nodeType": "FunctionDefinition",
              "src": "5739:115:60",
              "nodes": [],
              "body": {
                "id": 50170,
                "nodeType": "Block",
                "src": "5804:50:60",
                "nodes": [],
                "statements": [
                  {
                    "expression": {
                      "id": 50168,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 50164,
                          "name": "whiteListedTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49685,
                          "src": "5814:17:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 50166,
                        "indexExpression": {
                          "id": 50165,
                          "name": "_token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50159,
                          "src": "5832:6:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "5814:25:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "hexValue": "66616c7365",
                        "id": 50167,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5842:5:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      },
                      "src": "5814:33:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 50169,
                    "nodeType": "ExpressionStatement",
                    "src": "5814:33:60"
                  }
                ]
              },
              "functionSelector": "b5541dd8",
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 50162,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 50161,
                    "name": "onlyOwner",
                    "nameLocations": [
                      "5794:9:60"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 44311,
                    "src": "5794:9:60"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "5794:9:60"
                }
              ],
              "name": "removeWhiteListedToken",
              "nameLocation": "5748:22:60",
              "parameters": {
                "id": 50160,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 50159,
                    "mutability": "mutable",
                    "name": "_token",
                    "nameLocation": "5779:6:60",
                    "nodeType": "VariableDeclaration",
                    "scope": 50171,
                    "src": "5771:14:60",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 50158,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5771:7:60",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "5770:16:60"
              },
              "returnParameters": {
                "id": 50163,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "5804:0:60"
              },
              "scope": 50172,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            }
          ],
          "abstract": false,
          "baseContracts": [
            {
              "baseName": {
                "id": 49661,
                "name": "ERC721",
                "nameLocations": [
                  "615:6:60"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 46561,
                "src": "615:6:60"
              },
              "id": 49662,
              "nodeType": "InheritanceSpecifier",
              "src": "615:6:60"
            },
            {
              "baseName": {
                "id": 49663,
                "name": "Ownable",
                "nameLocations": [
                  "623:7:60"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 44392,
                "src": "623:7:60"
              },
              "id": 49664,
              "nodeType": "InheritanceSpecifier",
              "src": "623:7:60"
            }
          ],
          "canonicalName": "WhaleFinance",
          "contractDependencies": [
            44859
          ],
          "contractKind": "contract",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            50172,
            44392,
            46561,
            46722,
            46677,
            48057,
            48069,
            47074
          ],
          "name": "WhaleFinance",
          "nameLocation": "599:12:60",
          "scope": 50173,
          "usedErrors": []
        }
      ],
      "license": "MIT"
    },
    "id": 60
  }


export const WhaleFinanceAbi = WhaleFinance["abi"]


