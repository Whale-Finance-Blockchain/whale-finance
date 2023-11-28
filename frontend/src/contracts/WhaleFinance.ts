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
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "ERC721IncorrectOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ERC721InsufficientApproval",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "approver",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidApprover",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidOperator",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidReceiver",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidSender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ERC721NonexistentToken",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
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
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "fundId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newTimestamp",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "NewOpenRedeemProposal",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "fundId",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newTimestamp",
          "type": "uint256"
        }
      ],
      "name": "OpenRedeemTimestampChanged",
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
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "fundId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newTimestamp",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "ProposalAccepted",
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
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Voted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "VotingTokensWithdrawn",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "_fundIdCounter",
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
          "name": "_proposalId",
          "type": "uint256"
        }
      ],
      "name": "changeOpenRedeemTimestamp",
      "outputs": [],
      "stateMutability": "nonpayable",
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
          "name": "_name",
          "type": "string"
        },
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "fundsNames",
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
          "name": "_proposalId",
          "type": "uint256"
        }
      ],
      "name": "getTotalProposalVotes",
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
          "name": "_proposalId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_voter",
          "type": "address"
        }
      ],
      "name": "getVoterBalance",
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
      "name": "openRedeemProposals",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "fundId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "newTimestamp",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "accepted",
          "type": "bool"
        },
        {
          "internalType": "string",
          "name": "name",
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
      "inputs": [],
      "name": "percentageToWin",
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
      "name": "proposalIdCounter",
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
      "name": "proposalsVotes",
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
          "name": "_fundId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_newTimestamp",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_deadline",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "proposeNewOpenRedeemTimestamp",
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
      "name": "swapRouter",
      "outputs": [
        {
          "internalType": "contract IV2SwapRouter",
          "name": "",
          "type": "address"
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
          "internalType": "uint256",
          "name": "_proposalId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "vote",
      "outputs": [],
      "stateMutability": "nonpayable",
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
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "votes",
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
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_proposalId",
          "type": "uint256"
        }
      ],
      "name": "withdrawVotingTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": {
    "object": "0x6080604052611388600e55601280546001600160a01b031916737963c1bd24e4511a0b14bf148f93e2556afe3c271790553480156200003d57600080fd5b5060405162004c5c38038062004c5c8339810160408190526200006091620001c2565b336040518060400160405280600c81526020016b5768616c6546696e616e636560a01b8152506040518060400160405280600381526020016257464960e81b8152508160009081620000b39190620002c4565b506001620000c28282620002c4565b5050506001600160a01b038116620000f457604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b620000ff8162000153565b50600880546001600160a01b039586166001600160a01b0319918216179091556009805494861694821694909417909355600b8054918516918416919091179055600a805491909316911617905562000390565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b80516001600160a01b0381168114620001bd57600080fd5b919050565b60008060008060808587031215620001d957600080fd5b620001e485620001a5565b9350620001f460208601620001a5565b92506200020460408601620001a5565b91506200021460608601620001a5565b905092959194509250565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200024a57607f821691505b6020821081036200026b57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002bf57600081815260208120601f850160051c810160208610156200029a5750805b601f850160051c820191505b81811015620002bb57828155600101620002a6565b5050505b505050565b81516001600160401b03811115620002e057620002e06200021f565b620002f881620002f1845462000235565b8462000271565b602080601f831160018114620003305760008415620003175750858301515b600019600386901b1c1916600185901b178555620002bb565b600085815260208120601f198616915b82811015620003615788860151825594840194600190910190840162000340565b5085821015620003805787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6148bc80620003a06000396000f3fe60806040523480156200001157600080fd5b50600436106200036d5760003560e01c806371bea66211620001d5578063b88d4fde116200010d578063d87aa64311620000af578063e985e9c51162000086578063e985e9c514620008ba578063e9cbd8221462000906578063f2fde38b1462000927578063fb91fb42146200093e57600080fd5b8063d87aa6431462000853578063dae51d03146200086a578063e7e1f1c7146200088157600080fd5b8063c87b56dd11620000e4578063c87b56dd14620007e8578063d23254b414620007ff578063d3c26383146200082d57600080fd5b8063b88d4fde146200078f578063c2ae0e3e14620007a6578063c31c9c0714620007c757600080fd5b806395d89b411162000177578063b384abef116200014e578063b384abef1462000740578063b3dd12a21462000757578063b5541dd8146200077857600080fd5b806395d89b4114620006fc578063995c84721462000706578063a22cb465146200072957600080fd5b80638da5cb5b11620001ac5780638da5cb5b14620006bc57806392a84c5d14620006db5780639559e6ba14620006e557600080fd5b806371bea662146200067a578063822dde8d14620006845780638d180195146200069b57600080fd5b806342842e0e11620002a95780636352211e116200024b5780636c4f844211620002225780636c4f8442146200064257806370a082311462000659578063715018a6146200067057600080fd5b80636352211e14620005c25780636886078c14620005d95780636a401f59146200061f57600080fd5b806354d89c91116200028057806354d89c9114620005715780636106f1ae14620005945780636166cb9314620005ab57600080fd5b806342842e0e14620004fe5780634835a6be146200051557806350def910146200054e57600080fd5b806310e5592711620003135780631ec3e6c411620002ea5780631ec3e6c414620004c657806323b872dd14620004d0578063258d3c3314620004e757600080fd5b806310e55927146200046257806311c564b114620004795780631c02225f14620004a357600080fd5b8063081812fc1162000348578063081812fc14620003e9578063095ea7b314620004265780630d0a01cf146200043f57600080fd5b806301ffc9a71462000372578063069af241146200039e57806306fdde0314620003d0575b600080fd5b62000389620003833660046200360f565b62000961565b60405190151581526020015b60405180910390f35b620003c1620003af3660046200362f565b60196020526000908152604090205481565b60405190815260200162000395565b620003da62000a48565b604051620003959190620036bb565b62000400620003fa3660046200362f565b62000ae2565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200162000395565b6200043d6200043736600462003705565b62000b1b565b005b620003c1620004503660046200362f565b60166020526000908152604090205481565b6200043d620004733660046200362f565b62000b2c565b620004906200048a3660046200362f565b62000fde565b6040516200039595949392919062003734565b620003c1620004b43660046200362f565b60186020526000908152604090205481565b620003c160075481565b6200043d620004e13660046200376e565b620010a3565b6200043d620004f83660046200362f565b6200119a565b6200043d6200050f3660046200376e565b62001527565b62000400620005263660046200362f565b601c6020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b620003c16200055f3660046200362f565b60106020526000908152604090205481565b620003c1620005823660046200362f565b601a6020526000908152604090205481565b6200043d620005a53660046200362f565b62001549565b62000400620005bc366004620037b4565b62001809565b62000400620005d33660046200362f565b6200184f565b620003c1620005ea366004620037d7565b600091825260116020908152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845291905290205490565b620003c1620006303660046200362f565b60009081526010602052604090205490565b620003c16200065336600462003960565b6200185c565b620003c16200066a36600462003a42565b62001d4b565b6200043d62001dc8565b620003c1600e5481565b6200043d6200069536600462003a42565b62001de0565b600854620004009073ffffffffffffffffffffffffffffffffffffffff1681565b60065473ffffffffffffffffffffffffffffffffffffffff1662000400565b620003c1600d5481565b620003c1620006f636600462003ade565b62001e39565b620003da62001f3a565b620003c1620007173660046200362f565b60156020526000908152604090205481565b6200043d6200073a36600462003b60565b62001f4b565b6200043d62000751366004620037b4565b62001f58565b600954620004009073ffffffffffffffffffffffffffffffffffffffff1681565b6200043d6200078936600462003a42565b620023b0565b6200043d620007a036600462003b93565b62002406565b600a54620004009073ffffffffffffffffffffffffffffffffffffffff1681565b601254620004009073ffffffffffffffffffffffffffffffffffffffff1681565b620003da620007f93660046200362f565b62002421565b620003c162000810366004620037d7565b601160209081526000928352604080842090915290825290205481565b620003896200083e36600462003a42565b600c6020526000908152604090205460ff1681565b6200043d62000864366004620037b4565b6200249f565b620003da6200087b3660046200362f565b62002951565b62000400620008923660046200362f565b60136020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b62000389620008cb36600462003bed565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260056020908152604080832093909416825291909152205460ff1690565b600b54620004009073ffffffffffffffffffffffffffffffffffffffff1681565b6200043d6200093836600462003a42565b620029f3565b620003c16200094f3660046200362f565b60176020526000908152604090205481565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd000000000000000000000000000000000000000000000000000000001480620009f557507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8062000a4257507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b60606000805462000a599062003c20565b80601f016020809104026020016040519081016040528092919081815260200182805462000a879062003c20565b801562000ad85780601f1062000aac5761010080835404028352916020019162000ad8565b820191906000526020600020905b81548152906001019060200180831162000aba57829003601f168201915b5050505050905090565b600062000aef8262002a5d565b5060008281526004602052604090205473ffffffffffffffffffffffffffffffffffffffff1662000a42565b62000b2882823362002abe565b5050565b6000818152600f602052604090208054600182015460029092015490919042821162000bdf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f596f75206e65656420746f2073657420612074696d657374616d7020696e207460448201527f686520667574757265000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b600083815260196020526040902054821162000ca4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604160248201527f596f75206e65656420746f2073657420612074696d657374616d70206166746560448201527f722074686520636c6f736520696e76657374696d656e742074696d657374616d60648201527f7000000000000000000000000000000000000000000000000000000000000000608482015260a40162000bd6565b80421062000d0f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f54686520766f74696e6720706572696f64206973206f76657200000000000000604482015260640162000bd6565b600754831062000d7c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f46756e64206e6f7420666f756e64000000000000000000000000000000000000604482015260640162000bd6565b6000838152601c602090815260408083205481517f18160ddd000000000000000000000000000000000000000000000000000000008152915173ffffffffffffffffffffffffffffffffffffffff909116926318160ddd92600480820193918290030181865afa15801562000df5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000e1b919062003c75565b600086815260106020526040902054600e54919250906127109062000e41908462003cbe565b62000e4d919062003cd8565b81111562000e95576000868152600f6020526040902060030180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905562000f1e565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f5468652070726f706f73616c20776173206e6f7420616363657074656420796560448201527f7400000000000000000000000000000000000000000000000000000000000000606482015260840162000bd6565b84867fd2dfb9a4a769c0f7a3d960eeaa8fa513baeb85778759110391efb744a79a2e1b86600f60008b815260200190815260200160002060040160405162000f6892919062003d14565b60405180910390a36000858152601a60209081526040808320879055601382529182902054915186815273ffffffffffffffffffffffffffffffffffffffff909216917f79c7ab326b4928a04c7cebcf95cd0339dec08bce45597d98c61c16843de9d4e0910160405180910390a2505050505050565b600f602052600090815260409020805460018201546002830154600384015460048501805494959394929360ff909216926200101a9062003c20565b80601f0160208091040260200160405190810160405280929190818152602001828054620010489062003c20565b8015620010995780601f106200106d5761010080835404028352916020019162001099565b820191906000526020600020905b8154815290600101906020018083116200107b57829003601f168201915b5050505050905085565b73ffffffffffffffffffffffffffffffffffffffff8216620010f5576040517f64a0ae920000000000000000000000000000000000000000000000000000000081526000600482015260240162000bd6565b60006200110483833362002acd565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161462001194576040517f64283d7b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8086166004830152602482018490528216604482015260640162000bd6565b50505050565b6000818152601a602052604090205442101562001214576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f52656465656d206973206e6f74206f70656e2079657400000000000000000000604482015260640162000bd6565b6000818152601c60205260408082205490517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff909116919082906370a0823190602401602060405180830381865afa15801562001292573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620012b8919062003c75565b600b546000858152601360205260408082205490517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015293945090929116906370a0823190602401602060405180830381865afa1580156200133c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001362919062003c75565b6000858152601760205260409020546200137d908462003cd8565b62001389919062003cbe565b600b54600086815260136020526040908190205490517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201523360248201526044810184905292935016906323b872dd906064016020604051808303816000875af11580156200141a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001440919062003dcd565b506040517f42966c680000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff8416906342966c6890602401600060405180830381600087803b158015620014aa57600080fd5b505af1158015620014bf573d6000803e3d6000fd5b50505060008581526013602090815260409182902054915184815233935073ffffffffffffffffffffffffffffffffffffffff909216917f6c9b4e508889a1ad47d9f443fa4a922856051bb1cc015e2048740e560e0f46f1910160405180910390a350505050565b620015448383836040518060200160405280600081525062002406565b505050565b6000818152600f60205260409020600201544211806200157a57506000818152600f602052604090206003015460ff165b62001608576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f54686520766f74696e6720706572696f64206973206e6f74206f76657220796560448201527f7400000000000000000000000000000000000000000000000000000000000000606482015260840162000bd6565b6000818152600f6020526040902054600754811062001684576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f46756e64206e6f7420666f756e64000000000000000000000000000000000000604482015260640162000bd6565b60008281526011602090815260408083203384529091529020548062001707576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f596f7520646f6e2774206861766520616e7920766f74696e6720746f6b656e73604482015260640162000bd6565b6000828152601c6020526040908190205490517fa9059cbb0000000000000000000000000000000000000000000000000000000081523360048201526024810183905273ffffffffffffffffffffffffffffffffffffffff9091169063a9059cbb906044016020604051808303816000875af11580156200178c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620017b2919062003dcd565b50600083815260116020908152604080832033808552908352818420939093555183815285917f78ce92e78a6f28ca5862db5f7d81d68af1a489eff5351221e1821810756bbedc91015b60405180910390a3505050565b601b60205281600052604060002081815481106200182657600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169150829050565b600062000a428262002a5d565b60078054600091819083620018718362003ded565b919050555062001882898262002c51565b60005b885181101562001a0457600c60008a8381518110620018a857620018a862003e28565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff1682528101919091526040016000205460ff166200196a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603760248201527f596f7520747269656420746f2063726561746520612066756e6420776974682060448201527f61206e6f6e2077686974656c697374656420746f6b656e000000000000000000606482015260840162000bd6565b6000828152601b6020526040902089518a90839081106200198f576200198f62003e28565b60209081029190910181015182546001810184556000938452919092200180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff90921691909117905580620019fb8162003ded565b91505062001885565b506008546009546040517fda7323b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201524660248201523060448201526064810184905260006084820181905260c060a483015260c4820181905292919091169063da7323b39060e4016020604051808303816000875af115801562001aa7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001acd919062003e57565b9050806013600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508d8d60146000858152602001908152602001600020918262001b4592919062003ec9565b5087601560008481526020019081526020016000208190555086601660008481526020019081526020016000208190555085601860008481526020019081526020016000208190555084601960008481526020019081526020016000208190555083601a6000848152602001908152602001600020819055506000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1663e0921f8560e01b8e8e308b60405160240162001c04949392919062003ff0565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090941693909317909252905162001c8e90620035d2565b62001c9b92919062004064565b604051809103906000f08015801562001cb8573d6000803e3d6000fd5b506000848152601c602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85811691821790925591519394509092908516917f9de2be681a220396ec1518a4ecd6c853a760e34fb9174e9213d7aa5a8b12f37991a350909d9c50505050505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff821662001d9f576040517f89c62b640000000000000000000000000000000000000000000000000000000081526000600482015260240162000bd6565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b62001dd262002d08565b62001dde600062002d5d565b565b62001dea62002d08565b73ffffffffffffffffffffffffffffffffffffffff166000908152600c6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b6040805160a081018252858152602080820186815282840186815260006060850181815260808601888152600d548352600f90955295812085518155925160018401559051600283015593516003820180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169115159190911790559051600482019062001ec9908262004095565b5050600d80549150600062001ede8362003ded565b919050555083857f7872e1c77192c9606c34929ab19a93de13eb47c39be0935b0ec2590e5b283a68868560405162001f18929190620041bc565b60405180910390a36001600d5462001f319190620041d7565b95945050505050565b60606001805462000a599062003c20565b62000b2833838362002dd4565b600d5482111562001fc6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f50726f706f73616c206e6f7420666f756e640000000000000000000000000000604482015260640162000bd6565b6000828152600f6020526040902060020154421062002042576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f54686520766f74696e6720706572696f64206973206f76657200000000000000604482015260640162000bd6565b6000828152600f602052604090206003015460ff1615620020e6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f5468652070726f706f73616c2077617320616c7265616479206163636570746560448201527f6400000000000000000000000000000000000000000000000000000000000000606482015260840162000bd6565b6000828152600f6020526040902054600754811062002162576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f46756e64206e6f7420666f756e64000000000000000000000000000000000000604482015260640162000bd6565b6000818152601c6020526040908190205490517fdd62ed3e000000000000000000000000000000000000000000000000000000008152336004820152306024820152839173ffffffffffffffffffffffffffffffffffffffff169063dd62ed3e90604401602060405180830381865afa158015620021e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200220a919062003c75565b101562002274576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f4e6f7420656e6f75676820616c6c6f77616e6365000000000000000000000000604482015260640162000bd6565b6000818152601c6020526040908190205490517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810184905273ffffffffffffffffffffffffffffffffffffffff909116906323b872dd906064016020604051808303816000875af1158015620022ff573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002325919062003dcd565b5060008381526011602090815260408083203384529091528120805484929062002351908490620041ed565b90915550506000838152601060205260408120805484929062002376908490620041ed565b9091555050604051828152339084907f1abe610cf2bf87e57dcc1181fcf5ac0934e843d8344ab9eed6e86c799f62585e90602001620017fc565b620023ba62002d08565b73ffffffffffffffffffffffffffffffffffffffff166000908152600c6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b62002413848484620010a3565b620011948484848462002ecc565b60606200242e8262002a5d565b5060006200244760408051602081019091526000815290565b9050600081511162002469576040518060200160405280600081525062002498565b806200247584620030d0565b6040516020016200248892919062004203565b6040516020818303038152906040525b9392505050565b600082116200250b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f596f75206e65656420746f20696e76657374206d6f7265207468616e20300000604482015260640162000bd6565b60008181526018602052604090205442101562002585576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f496e76657374696d656e74206973206e6f74206f70656e207965740000000000604482015260640162000bd6565b600081815260196020526040902054421115620025ff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f496e76657374696d656e7420697320636c6f7365640000000000000000000000604482015260640162000bd6565b60008181526013602052604090205473ffffffffffffffffffffffffffffffffffffffff16806200268d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f46756e64206e6f7420666f756e64000000000000000000000000000000000000604482015260640162000bd6565b60008281526015602052604081205461271090620026ac908662003cbe565b620026b8919062003cd8565b90506000620026c88286620041d7565b600b546040517f23b872dd00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff8681166024830152604482018490529293509116906323b872dd906064016020604051808303816000875af11580156200274a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002770919062003dcd565b50600b5473ffffffffffffffffffffffffffffffffffffffff166323b872dd336200279b876200184f565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff928316600482015291166024820152604481018590526064016020604051808303816000875af115801562002815573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200283b919062003dcd565b50600084815260176020526040812080548392906200285c908490620041ed565b90915550506000848152601c6020526040908190205490517f40c10f190000000000000000000000000000000000000000000000000000000081523360048201526024810183905273ffffffffffffffffffffffffffffffffffffffff9091169081906340c10f1990604401600060405180830381600087803b158015620028e357600080fd5b505af1158015620028f8573d6000803e3d6000fd5b505060405188815233925073ffffffffffffffffffffffffffffffffffffffff871691507f15bcca398c35efcf80f9148394b3ff1b358089610b2e18b315a3a18050a509429060200160405180910390a3505050505050565b601460205260009081526040902080546200296c9062003c20565b80601f01602080910402602001604051908101604052809291908181526020018280546200299a9062003c20565b8015620029eb5780601f10620029bf57610100808354040283529160200191620029eb565b820191906000526020600020905b815481529060010190602001808311620029cd57829003601f168201915b505050505081565b620029fd62002d08565b73ffffffffffffffffffffffffffffffffffffffff811662002a4f576040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526000600482015260240162000bd6565b62002a5a8162002d5d565b50565b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff168062000a42576040517f7e2732890000000000000000000000000000000000000000000000000000000081526004810184905260240162000bd6565b62001544838383600162003195565b60008281526002602052604081205473ffffffffffffffffffffffffffffffffffffffff9081169083161562002b0a5762002b0a81848662003369565b73ffffffffffffffffffffffffffffffffffffffff81161562002b835762002b3760008560008062003195565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260036020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190555b73ffffffffffffffffffffffffffffffffffffffff85161562002bcd5773ffffffffffffffffffffffffffffffffffffffff85166000908152600360205260409020805460010190555b60008481526002602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff89811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b73ffffffffffffffffffffffffffffffffffffffff821662002ca3576040517f64a0ae920000000000000000000000000000000000000000000000000000000081526000600482015260240162000bd6565b600062002cb38383600062002acd565b905073ffffffffffffffffffffffffffffffffffffffff81161562001544576040517f73c6ac6e0000000000000000000000000000000000000000000000000000000081526000600482015260240162000bd6565b60065473ffffffffffffffffffffffffffffffffffffffff16331462001dde576040517f118cdaa700000000000000000000000000000000000000000000000000000000815233600482015260240162000bd6565b6006805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b73ffffffffffffffffffffffffffffffffffffffff821662002e3b576040517f5b08ba1800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8316600482015260240162000bd6565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526005602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319101620017fc565b73ffffffffffffffffffffffffffffffffffffffff83163b1562001194576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169063150b7a029062002f4490339088908790879060040162004236565b6020604051808303816000875af192505050801562002fa0575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925262002f9d9181019062004281565b60015b62003034573d80801562002fd1576040519150601f19603f3d011682016040523d82523d6000602084013e62002fd6565b606091505b5080516000036200302c576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260240162000bd6565b805181602001fd5b7fffffffff0000000000000000000000000000000000000000000000000000000081167f150b7a020000000000000000000000000000000000000000000000000000000014620030c9576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260240162000bd6565b5050505050565b60606000620030df836200341f565b600101905060008167ffffffffffffffff81111562003102576200310262003856565b6040519080825280601f01601f1916602001820160405280156200312d576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85049450846200313757509392505050565b8080620031b7575073ffffffffffffffffffffffffffffffffffffffff821615155b1562003314576000620031ca8462002a5d565b905073ffffffffffffffffffffffffffffffffffffffff8316158015906200321e57508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b80156200325e575073ffffffffffffffffffffffffffffffffffffffff80821660009081526005602090815260408083209387168352929052205460ff16155b15620032af576040517fa9fbf51f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8416600482015260240162000bd6565b81156200331257838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b5050600090815260046020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6200337683838362003508565b620015445773ffffffffffffffffffffffffffffffffffffffff8316620033cd576040517f7e2732890000000000000000000000000000000000000000000000000000000081526004810182905260240162000bd6565b6040517f177e802f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff831660048201526024810182905260440162000bd6565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000831062003469577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef8100000000831062003496576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310620034b557662386f26fc10000830492506010015b6305f5e1008310620034ce576305f5e100830492506008015b6127108310620034e357612710830492506004015b60648310620034f6576064830492506002015b600a831062000a425760010192915050565b600073ffffffffffffffffffffffffffffffffffffffff831615801590620035ca57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148062003598575073ffffffffffffffffffffffffffffffffffffffff80851660009081526005602090815260408083209387168352929052205460ff165b80620035ca575060008281526004602052604090205473ffffffffffffffffffffffffffffffffffffffff8481169116145b949350505050565b6105e580620042a283390190565b7fffffffff000000000000000000000000000000000000000000000000000000008116811462002a5a57600080fd5b6000602082840312156200362257600080fd5b81356200249881620035e0565b6000602082840312156200364257600080fd5b5035919050565b60005b83811015620036665781810151838201526020016200364c565b50506000910152565b600081518084526200368981602086016020860162003649565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006200249860208301846200366f565b73ffffffffffffffffffffffffffffffffffffffff8116811462002a5a57600080fd5b80356200370081620036d0565b919050565b600080604083850312156200371957600080fd5b82356200372681620036d0565b946020939093013593505050565b858152846020820152836040820152821515606082015260a0608082015260006200376360a08301846200366f565b979650505050505050565b6000806000606084860312156200378457600080fd5b83356200379181620036d0565b92506020840135620037a381620036d0565b929592945050506040919091013590565b60008060408385031215620037c857600080fd5b50508035926020909101359150565b60008060408385031215620037eb57600080fd5b823591506020830135620037ff81620036d0565b809150509250929050565b60008083601f8401126200381d57600080fd5b50813567ffffffffffffffff8111156200383657600080fd5b6020830191508360208285010111156200384f57600080fd5b9250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715620038cf57620038cf62003856565b604052919050565b600082601f830112620038e957600080fd5b8135602067ffffffffffffffff82111562003908576200390862003856565b8160051b6200391982820162003885565b92835284810182019282810190878511156200393457600080fd5b83870192505b84831015620037635782356200395081620036d0565b825291830191908301906200393a565b60008060008060008060008060008060006101208c8e0312156200398357600080fd5b67ffffffffffffffff808d3511156200399b57600080fd5b620039aa8e8e358f016200380a565b909c509a5060208d0135811015620039c157600080fd5b620039d38e60208f01358f016200380a565b909a509850620039e660408e01620036f3565b97508060608e01351115620039fa57600080fd5b5062003a0d8d60608e01358e01620038d7565b9a9d999c50979a9699959895975050505060808401359360a08101359360c0820135935060e082013592506101009091013590565b60006020828403121562003a5557600080fd5b81356200249881620036d0565b600067ffffffffffffffff83111562003a7f5762003a7f62003856565b62003ab260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601160162003885565b905082815283838301111562003ac757600080fd5b828260208301376000602084830101529392505050565b6000806000806080858703121562003af557600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111562003b2257600080fd5b8501601f8101871362003b3457600080fd5b62003b458782356020840162003a62565b91505092959194509250565b801515811462002a5a57600080fd5b6000806040838503121562003b7457600080fd5b823562003b8181620036d0565b91506020830135620037ff8162003b51565b6000806000806080858703121562003baa57600080fd5b843562003bb781620036d0565b9350602085013562003bc981620036d0565b925060408501359150606085013567ffffffffffffffff81111562003b2257600080fd5b6000806040838503121562003c0157600080fd5b823562003c0e81620036d0565b91506020830135620037ff81620036d0565b600181811c9082168062003c3557607f821691505b60208210810362003c6f577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60006020828403121562003c8857600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808202811582820484141762000a425762000a4262003c8f565b60008262003d0f577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b828152600060206040818401526000845462003d308162003c20565b806040870152606060018084166000811462003d55576001811462003d8e5762003dbe565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008516838a01528284151560051b8a0101955062003dbe565b896000528660002060005b8581101562003db65781548b820186015290830190880162003d99565b8a0184019650505b50939998505050505050505050565b60006020828403121562003de057600080fd5b8151620024988162003b51565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820362003e215762003e2162003c8f565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121562003e6a57600080fd5b81516200249881620036d0565b601f8211156200154457600081815260208120601f850160051c8101602086101562003ea05750805b601f850160051c820191505b8181101562003ec15782815560010162003eac565b505050505050565b67ffffffffffffffff83111562003ee45762003ee462003856565b62003efc8362003ef5835462003c20565b8362003e77565b6000601f84116001811462003f51576000851562003f1a5750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b178355620030c9565b6000838152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0861690835b8281101562003fa2578685013582556020948501946001909201910162003f80565b508682101562003fde577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555050505050565b6060815283606082015283856080830137600060808583010152600060807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f870116830101905073ffffffffffffffffffffffffffffffffffffffff8416602083015282604083015295945050505050565b73ffffffffffffffffffffffffffffffffffffffff83168152604060208201526000620035ca60408301846200366f565b815167ffffffffffffffff811115620040b257620040b262003856565b620040ca81620040c3845462003c20565b8462003e77565b602080601f831160018114620041205760008415620040e95750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b17855562003ec1565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b828110156200416f578886015182559484019460019091019084016200414e565b5085821015620041ac57878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b828152604060208201526000620035ca60408301846200366f565b8181038181111562000a425762000a4262003c8f565b8082018082111562000a425762000a4262003c8f565b600083516200421781846020880162003649565b8351908301906200422d81836020880162003649565b01949350505050565b600073ffffffffffffffffffffffffffffffffffffffff8087168352808616602084015250836040830152608060608301526200427760808301846200366f565b9695505050505050565b6000602082840312156200429457600080fd5b81516200249881620035e056fe60a06040526040516105e53803806105e583398101604081905261002291610387565b61002c828261003e565b506001600160a01b031660805261047e565b610047826100fe565b6040516001600160a01b038316907f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e90600090a28051156100f2576100ed826001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100e79190610447565b82610211565b505050565b6100fa610288565b5050565b806001600160a01b03163b60000361013957604051631933b43b60e21b81526001600160a01b03821660048201526024015b60405180910390fd5b807fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5080546001600160a01b0319166001600160a01b0392831617905560408051635c60da1b60e01b81529051600092841691635c60da1b9160048083019260209291908290030181865afa1580156101b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d99190610447565b9050806001600160a01b03163b6000036100fa57604051634c9c8ce360e01b81526001600160a01b0382166004820152602401610130565b6060600080846001600160a01b03168460405161022e9190610462565b600060405180830381855af49150503d8060008114610269576040519150601f19603f3d011682016040523d82523d6000602084013e61026e565b606091505b50909250905061027f8583836102a9565b95945050505050565b34156102a75760405163b398979f60e01b815260040160405180910390fd5b565b6060826102be576102b982610308565b610301565b81511580156102d557506001600160a01b0384163b155b156102fe57604051639996b31560e01b81526001600160a01b0385166004820152602401610130565b50805b9392505050565b8051156103185780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b80516001600160a01b038116811461034857600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561037e578181015183820152602001610366565b50506000910152565b6000806040838503121561039a57600080fd5b6103a383610331565b60208401519092506001600160401b03808211156103c057600080fd5b818501915085601f8301126103d457600080fd5b8151818111156103e6576103e661034d565b604051601f8201601f19908116603f0116810190838211818310171561040e5761040e61034d565b8160405282815288602084870101111561042757600080fd5b610438836020830160208801610363565b80955050505050509250929050565b60006020828403121561045957600080fd5b61030182610331565b60008251610474818460208701610363565b9190910192915050565b60805161014d61049860003960006024015261014d6000f3fe608060405261000c61000e565b005b61001e610019610020565b6100b6565b565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561008d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100b191906100da565b905090565b3660008037600080366000845af43d6000803e8080156100d5573d6000f35b3d6000fd5b6000602082840312156100ec57600080fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811461011057600080fd5b939250505056fea264697066735822122093fc6daa985e951622fc6457dc0760a3f7ed9358583e2b9951e7eb4e2b0957db64736f6c63430008140033a2646970667358221220f11980d5428d62bbfa4bb7a80e32371ff886d97de813c655511ac10fb16caca764736f6c63430008140033",
    "sourceMap": "720:10052:56:-:0;;;1152:4;1119:37;;1922:91;;;-1:-1:-1;;;;;;1922:91:56;1970:42;1922:91;;;3003:418;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;735:10:20;1381:113:15;;;;;;;;;;;;;-1:-1:-1;;;1381:113:15;;;;;;;;;;;;;;;;-1:-1:-1;;;1381:113:15;;;1455:5;1447;:13;;;;;;:::i;:::-;-1:-1:-1;1470:7:15;:17;1480:7;1470;:17;:::i;:::-;-1:-1:-1;;;;;;;;1273:26:4;;1269:95;;1322:31;;-1:-1:-1;;;1322:31:4;;1350:1;1322:31;;;3532:51:62;3505:18;;1322:31:4;;;;;;;1269:95;1373:32;1392:12;1373:18;:32::i;:::-;-1:-1:-1;3185:13:56::2;:48:::0;;-1:-1:-1;;;;;3185:48:56;;::::2;-1:-1:-1::0;;;;;;3185:48:56;;::::2;;::::0;;;3243:21:::2;:46:::0;;;;::::2;::::0;;::::2;::::0;;;::::2;::::0;;;3325:10:::2;:32:::0;;;;::::2;::::0;;::::2;::::0;;;::::2;::::0;;3367:24:::2;:47:::0;;;;;::::2;::::0;::::2;;::::0;;720:10052;;2912:187:4;3004:6;;;-1:-1:-1;;;;;3020:17:4;;;-1:-1:-1;;;;;;3020:17:4;;;;;;;3052:40;;3004:6;;;3020:17;3004:6;;3052:40;;2985:16;;3052:40;2975:124;2912:187;:::o;14:177:62:-;93:13;;-1:-1:-1;;;;;135:31:62;;125:42;;115:70;;181:1;178;171:12;115:70;14:177;;;:::o;196:464::-;293:6;301;309;317;370:3;358:9;349:7;345:23;341:33;338:53;;;387:1;384;377:12;338:53;410:40;440:9;410:40;:::i;:::-;400:50;;469:49;514:2;503:9;499:18;469:49;:::i;:::-;459:59;;537:49;582:2;571:9;567:18;537:49;:::i;:::-;527:59;;605:49;650:2;639:9;635:18;605:49;:::i;:::-;595:59;;196:464;;;;;;;:::o;665:127::-;726:10;721:3;717:20;714:1;707:31;757:4;754:1;747:15;781:4;778:1;771:15;797:380;876:1;872:12;;;;919;;;940:61;;994:4;986:6;982:17;972:27;;940:61;1047:2;1039:6;1036:14;1016:18;1013:38;1010:161;;1093:10;1088:3;1084:20;1081:1;1074:31;1128:4;1125:1;1118:15;1156:4;1153:1;1146:15;1010:161;;797:380;;;:::o;1308:545::-;1410:2;1405:3;1402:11;1399:448;;;1446:1;1471:5;1467:2;1460:17;1516:4;1512:2;1502:19;1586:2;1574:10;1570:19;1567:1;1563:27;1557:4;1553:38;1622:4;1610:10;1607:20;1604:47;;;-1:-1:-1;1645:4:62;1604:47;1700:2;1695:3;1691:12;1688:1;1684:20;1678:4;1674:31;1664:41;;1755:82;1773:2;1766:5;1763:13;1755:82;;;1818:17;;;1799:1;1788:13;1755:82;;;1759:3;;;1399:448;1308:545;;;:::o;2029:1352::-;2149:10;;-1:-1:-1;;;;;2171:30:62;;2168:56;;;2204:18;;:::i;:::-;2233:97;2323:6;2283:38;2315:4;2309:11;2283:38;:::i;:::-;2277:4;2233:97;:::i;:::-;2385:4;;2449:2;2438:14;;2466:1;2461:663;;;;3168:1;3185:6;3182:89;;;-1:-1:-1;3237:19:62;;;3231:26;3182:89;-1:-1:-1;;1986:1:62;1982:11;;;1978:24;1974:29;1964:40;2010:1;2006:11;;;1961:57;3284:81;;2431:944;;2461:663;1255:1;1248:14;;;1292:4;1279:18;;-1:-1:-1;;2497:20:62;;;2615:236;2629:7;2626:1;2623:14;2615:236;;;2718:19;;;2712:26;2697:42;;2810:27;;;;2778:1;2766:14;;;;2645:19;;2615:236;;;2619:3;2879:6;2870:7;2867:19;2864:201;;;2940:19;;;2934:26;-1:-1:-1;;3023:1:62;3019:14;;;3035:3;3015:24;3011:37;3007:42;2992:58;2977:74;;2864:201;-1:-1:-1;;;;;3111:1:62;3095:14;;;3091:22;3078:36;;-1:-1:-1;2029:1352:62:o;3386:203::-;720:10052:56;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x60806040523480156200001157600080fd5b50600436106200036d5760003560e01c806371bea66211620001d5578063b88d4fde116200010d578063d87aa64311620000af578063e985e9c51162000086578063e985e9c514620008ba578063e9cbd8221462000906578063f2fde38b1462000927578063fb91fb42146200093e57600080fd5b8063d87aa6431462000853578063dae51d03146200086a578063e7e1f1c7146200088157600080fd5b8063c87b56dd11620000e4578063c87b56dd14620007e8578063d23254b414620007ff578063d3c26383146200082d57600080fd5b8063b88d4fde146200078f578063c2ae0e3e14620007a6578063c31c9c0714620007c757600080fd5b806395d89b411162000177578063b384abef116200014e578063b384abef1462000740578063b3dd12a21462000757578063b5541dd8146200077857600080fd5b806395d89b4114620006fc578063995c84721462000706578063a22cb465146200072957600080fd5b80638da5cb5b11620001ac5780638da5cb5b14620006bc57806392a84c5d14620006db5780639559e6ba14620006e557600080fd5b806371bea662146200067a578063822dde8d14620006845780638d180195146200069b57600080fd5b806342842e0e11620002a95780636352211e116200024b5780636c4f844211620002225780636c4f8442146200064257806370a082311462000659578063715018a6146200067057600080fd5b80636352211e14620005c25780636886078c14620005d95780636a401f59146200061f57600080fd5b806354d89c91116200028057806354d89c9114620005715780636106f1ae14620005945780636166cb9314620005ab57600080fd5b806342842e0e14620004fe5780634835a6be146200051557806350def910146200054e57600080fd5b806310e5592711620003135780631ec3e6c411620002ea5780631ec3e6c414620004c657806323b872dd14620004d0578063258d3c3314620004e757600080fd5b806310e55927146200046257806311c564b114620004795780631c02225f14620004a357600080fd5b8063081812fc1162000348578063081812fc14620003e9578063095ea7b314620004265780630d0a01cf146200043f57600080fd5b806301ffc9a71462000372578063069af241146200039e57806306fdde0314620003d0575b600080fd5b62000389620003833660046200360f565b62000961565b60405190151581526020015b60405180910390f35b620003c1620003af3660046200362f565b60196020526000908152604090205481565b60405190815260200162000395565b620003da62000a48565b604051620003959190620036bb565b62000400620003fa3660046200362f565b62000ae2565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200162000395565b6200043d6200043736600462003705565b62000b1b565b005b620003c1620004503660046200362f565b60166020526000908152604090205481565b6200043d620004733660046200362f565b62000b2c565b620004906200048a3660046200362f565b62000fde565b6040516200039595949392919062003734565b620003c1620004b43660046200362f565b60186020526000908152604090205481565b620003c160075481565b6200043d620004e13660046200376e565b620010a3565b6200043d620004f83660046200362f565b6200119a565b6200043d6200050f3660046200376e565b62001527565b62000400620005263660046200362f565b601c6020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b620003c16200055f3660046200362f565b60106020526000908152604090205481565b620003c1620005823660046200362f565b601a6020526000908152604090205481565b6200043d620005a53660046200362f565b62001549565b62000400620005bc366004620037b4565b62001809565b62000400620005d33660046200362f565b6200184f565b620003c1620005ea366004620037d7565b600091825260116020908152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845291905290205490565b620003c1620006303660046200362f565b60009081526010602052604090205490565b620003c16200065336600462003960565b6200185c565b620003c16200066a36600462003a42565b62001d4b565b6200043d62001dc8565b620003c1600e5481565b6200043d6200069536600462003a42565b62001de0565b600854620004009073ffffffffffffffffffffffffffffffffffffffff1681565b60065473ffffffffffffffffffffffffffffffffffffffff1662000400565b620003c1600d5481565b620003c1620006f636600462003ade565b62001e39565b620003da62001f3a565b620003c1620007173660046200362f565b60156020526000908152604090205481565b6200043d6200073a36600462003b60565b62001f4b565b6200043d62000751366004620037b4565b62001f58565b600954620004009073ffffffffffffffffffffffffffffffffffffffff1681565b6200043d6200078936600462003a42565b620023b0565b6200043d620007a036600462003b93565b62002406565b600a54620004009073ffffffffffffffffffffffffffffffffffffffff1681565b601254620004009073ffffffffffffffffffffffffffffffffffffffff1681565b620003da620007f93660046200362f565b62002421565b620003c162000810366004620037d7565b601160209081526000928352604080842090915290825290205481565b620003896200083e36600462003a42565b600c6020526000908152604090205460ff1681565b6200043d62000864366004620037b4565b6200249f565b620003da6200087b3660046200362f565b62002951565b62000400620008923660046200362f565b60136020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b62000389620008cb36600462003bed565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260056020908152604080832093909416825291909152205460ff1690565b600b54620004009073ffffffffffffffffffffffffffffffffffffffff1681565b6200043d6200093836600462003a42565b620029f3565b620003c16200094f3660046200362f565b60176020526000908152604090205481565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd000000000000000000000000000000000000000000000000000000001480620009f557507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8062000a4257507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b60606000805462000a599062003c20565b80601f016020809104026020016040519081016040528092919081815260200182805462000a879062003c20565b801562000ad85780601f1062000aac5761010080835404028352916020019162000ad8565b820191906000526020600020905b81548152906001019060200180831162000aba57829003601f168201915b5050505050905090565b600062000aef8262002a5d565b5060008281526004602052604090205473ffffffffffffffffffffffffffffffffffffffff1662000a42565b62000b2882823362002abe565b5050565b6000818152600f602052604090208054600182015460029092015490919042821162000bdf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f596f75206e65656420746f2073657420612074696d657374616d7020696e207460448201527f686520667574757265000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b600083815260196020526040902054821162000ca4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604160248201527f596f75206e65656420746f2073657420612074696d657374616d70206166746560448201527f722074686520636c6f736520696e76657374696d656e742074696d657374616d60648201527f7000000000000000000000000000000000000000000000000000000000000000608482015260a40162000bd6565b80421062000d0f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f54686520766f74696e6720706572696f64206973206f76657200000000000000604482015260640162000bd6565b600754831062000d7c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f46756e64206e6f7420666f756e64000000000000000000000000000000000000604482015260640162000bd6565b6000838152601c602090815260408083205481517f18160ddd000000000000000000000000000000000000000000000000000000008152915173ffffffffffffffffffffffffffffffffffffffff909116926318160ddd92600480820193918290030181865afa15801562000df5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000e1b919062003c75565b600086815260106020526040902054600e54919250906127109062000e41908462003cbe565b62000e4d919062003cd8565b81111562000e95576000868152600f6020526040902060030180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905562000f1e565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f5468652070726f706f73616c20776173206e6f7420616363657074656420796560448201527f7400000000000000000000000000000000000000000000000000000000000000606482015260840162000bd6565b84867fd2dfb9a4a769c0f7a3d960eeaa8fa513baeb85778759110391efb744a79a2e1b86600f60008b815260200190815260200160002060040160405162000f6892919062003d14565b60405180910390a36000858152601a60209081526040808320879055601382529182902054915186815273ffffffffffffffffffffffffffffffffffffffff909216917f79c7ab326b4928a04c7cebcf95cd0339dec08bce45597d98c61c16843de9d4e0910160405180910390a2505050505050565b600f602052600090815260409020805460018201546002830154600384015460048501805494959394929360ff909216926200101a9062003c20565b80601f0160208091040260200160405190810160405280929190818152602001828054620010489062003c20565b8015620010995780601f106200106d5761010080835404028352916020019162001099565b820191906000526020600020905b8154815290600101906020018083116200107b57829003601f168201915b5050505050905085565b73ffffffffffffffffffffffffffffffffffffffff8216620010f5576040517f64a0ae920000000000000000000000000000000000000000000000000000000081526000600482015260240162000bd6565b60006200110483833362002acd565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161462001194576040517f64283d7b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8086166004830152602482018490528216604482015260640162000bd6565b50505050565b6000818152601a602052604090205442101562001214576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f52656465656d206973206e6f74206f70656e2079657400000000000000000000604482015260640162000bd6565b6000818152601c60205260408082205490517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff909116919082906370a0823190602401602060405180830381865afa15801562001292573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620012b8919062003c75565b600b546000858152601360205260408082205490517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015293945090929116906370a0823190602401602060405180830381865afa1580156200133c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001362919062003c75565b6000858152601760205260409020546200137d908462003cd8565b62001389919062003cbe565b600b54600086815260136020526040908190205490517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201523360248201526044810184905292935016906323b872dd906064016020604051808303816000875af11580156200141a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001440919062003dcd565b506040517f42966c680000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff8416906342966c6890602401600060405180830381600087803b158015620014aa57600080fd5b505af1158015620014bf573d6000803e3d6000fd5b50505060008581526013602090815260409182902054915184815233935073ffffffffffffffffffffffffffffffffffffffff909216917f6c9b4e508889a1ad47d9f443fa4a922856051bb1cc015e2048740e560e0f46f1910160405180910390a350505050565b620015448383836040518060200160405280600081525062002406565b505050565b6000818152600f60205260409020600201544211806200157a57506000818152600f602052604090206003015460ff165b62001608576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f54686520766f74696e6720706572696f64206973206e6f74206f76657220796560448201527f7400000000000000000000000000000000000000000000000000000000000000606482015260840162000bd6565b6000818152600f6020526040902054600754811062001684576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f46756e64206e6f7420666f756e64000000000000000000000000000000000000604482015260640162000bd6565b60008281526011602090815260408083203384529091529020548062001707576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f596f7520646f6e2774206861766520616e7920766f74696e6720746f6b656e73604482015260640162000bd6565b6000828152601c6020526040908190205490517fa9059cbb0000000000000000000000000000000000000000000000000000000081523360048201526024810183905273ffffffffffffffffffffffffffffffffffffffff9091169063a9059cbb906044016020604051808303816000875af11580156200178c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620017b2919062003dcd565b50600083815260116020908152604080832033808552908352818420939093555183815285917f78ce92e78a6f28ca5862db5f7d81d68af1a489eff5351221e1821810756bbedc91015b60405180910390a3505050565b601b60205281600052604060002081815481106200182657600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169150829050565b600062000a428262002a5d565b60078054600091819083620018718362003ded565b919050555062001882898262002c51565b60005b885181101562001a0457600c60008a8381518110620018a857620018a862003e28565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff1682528101919091526040016000205460ff166200196a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603760248201527f596f7520747269656420746f2063726561746520612066756e6420776974682060448201527f61206e6f6e2077686974656c697374656420746f6b656e000000000000000000606482015260840162000bd6565b6000828152601b6020526040902089518a90839081106200198f576200198f62003e28565b60209081029190910181015182546001810184556000938452919092200180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff90921691909117905580620019fb8162003ded565b91505062001885565b506008546009546040517fda7323b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201524660248201523060448201526064810184905260006084820181905260c060a483015260c4820181905292919091169063da7323b39060e4016020604051808303816000875af115801562001aa7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001acd919062003e57565b9050806013600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508d8d60146000858152602001908152602001600020918262001b4592919062003ec9565b5087601560008481526020019081526020016000208190555086601660008481526020019081526020016000208190555085601860008481526020019081526020016000208190555084601960008481526020019081526020016000208190555083601a6000848152602001908152602001600020819055506000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1663e0921f8560e01b8e8e308b60405160240162001c04949392919062003ff0565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090941693909317909252905162001c8e90620035d2565b62001c9b92919062004064565b604051809103906000f08015801562001cb8573d6000803e3d6000fd5b506000848152601c602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85811691821790925591519394509092908516917f9de2be681a220396ec1518a4ecd6c853a760e34fb9174e9213d7aa5a8b12f37991a350909d9c50505050505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff821662001d9f576040517f89c62b640000000000000000000000000000000000000000000000000000000081526000600482015260240162000bd6565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b62001dd262002d08565b62001dde600062002d5d565b565b62001dea62002d08565b73ffffffffffffffffffffffffffffffffffffffff166000908152600c6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b6040805160a081018252858152602080820186815282840186815260006060850181815260808601888152600d548352600f90955295812085518155925160018401559051600283015593516003820180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169115159190911790559051600482019062001ec9908262004095565b5050600d80549150600062001ede8362003ded565b919050555083857f7872e1c77192c9606c34929ab19a93de13eb47c39be0935b0ec2590e5b283a68868560405162001f18929190620041bc565b60405180910390a36001600d5462001f319190620041d7565b95945050505050565b60606001805462000a599062003c20565b62000b2833838362002dd4565b600d5482111562001fc6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f50726f706f73616c206e6f7420666f756e640000000000000000000000000000604482015260640162000bd6565b6000828152600f6020526040902060020154421062002042576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f54686520766f74696e6720706572696f64206973206f76657200000000000000604482015260640162000bd6565b6000828152600f602052604090206003015460ff1615620020e6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f5468652070726f706f73616c2077617320616c7265616479206163636570746560448201527f6400000000000000000000000000000000000000000000000000000000000000606482015260840162000bd6565b6000828152600f6020526040902054600754811062002162576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f46756e64206e6f7420666f756e64000000000000000000000000000000000000604482015260640162000bd6565b6000818152601c6020526040908190205490517fdd62ed3e000000000000000000000000000000000000000000000000000000008152336004820152306024820152839173ffffffffffffffffffffffffffffffffffffffff169063dd62ed3e90604401602060405180830381865afa158015620021e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200220a919062003c75565b101562002274576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f4e6f7420656e6f75676820616c6c6f77616e6365000000000000000000000000604482015260640162000bd6565b6000818152601c6020526040908190205490517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810184905273ffffffffffffffffffffffffffffffffffffffff909116906323b872dd906064016020604051808303816000875af1158015620022ff573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002325919062003dcd565b5060008381526011602090815260408083203384529091528120805484929062002351908490620041ed565b90915550506000838152601060205260408120805484929062002376908490620041ed565b9091555050604051828152339084907f1abe610cf2bf87e57dcc1181fcf5ac0934e843d8344ab9eed6e86c799f62585e90602001620017fc565b620023ba62002d08565b73ffffffffffffffffffffffffffffffffffffffff166000908152600c6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b62002413848484620010a3565b620011948484848462002ecc565b60606200242e8262002a5d565b5060006200244760408051602081019091526000815290565b9050600081511162002469576040518060200160405280600081525062002498565b806200247584620030d0565b6040516020016200248892919062004203565b6040516020818303038152906040525b9392505050565b600082116200250b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f596f75206e65656420746f20696e76657374206d6f7265207468616e20300000604482015260640162000bd6565b60008181526018602052604090205442101562002585576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f496e76657374696d656e74206973206e6f74206f70656e207965740000000000604482015260640162000bd6565b600081815260196020526040902054421115620025ff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f496e76657374696d656e7420697320636c6f7365640000000000000000000000604482015260640162000bd6565b60008181526013602052604090205473ffffffffffffffffffffffffffffffffffffffff16806200268d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f46756e64206e6f7420666f756e64000000000000000000000000000000000000604482015260640162000bd6565b60008281526015602052604081205461271090620026ac908662003cbe565b620026b8919062003cd8565b90506000620026c88286620041d7565b600b546040517f23b872dd00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff8681166024830152604482018490529293509116906323b872dd906064016020604051808303816000875af11580156200274a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002770919062003dcd565b50600b5473ffffffffffffffffffffffffffffffffffffffff166323b872dd336200279b876200184f565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff928316600482015291166024820152604481018590526064016020604051808303816000875af115801562002815573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200283b919062003dcd565b50600084815260176020526040812080548392906200285c908490620041ed565b90915550506000848152601c6020526040908190205490517f40c10f190000000000000000000000000000000000000000000000000000000081523360048201526024810183905273ffffffffffffffffffffffffffffffffffffffff9091169081906340c10f1990604401600060405180830381600087803b158015620028e357600080fd5b505af1158015620028f8573d6000803e3d6000fd5b505060405188815233925073ffffffffffffffffffffffffffffffffffffffff871691507f15bcca398c35efcf80f9148394b3ff1b358089610b2e18b315a3a18050a509429060200160405180910390a3505050505050565b601460205260009081526040902080546200296c9062003c20565b80601f01602080910402602001604051908101604052809291908181526020018280546200299a9062003c20565b8015620029eb5780601f10620029bf57610100808354040283529160200191620029eb565b820191906000526020600020905b815481529060010190602001808311620029cd57829003601f168201915b505050505081565b620029fd62002d08565b73ffffffffffffffffffffffffffffffffffffffff811662002a4f576040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526000600482015260240162000bd6565b62002a5a8162002d5d565b50565b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff168062000a42576040517f7e2732890000000000000000000000000000000000000000000000000000000081526004810184905260240162000bd6565b62001544838383600162003195565b60008281526002602052604081205473ffffffffffffffffffffffffffffffffffffffff9081169083161562002b0a5762002b0a81848662003369565b73ffffffffffffffffffffffffffffffffffffffff81161562002b835762002b3760008560008062003195565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260036020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190555b73ffffffffffffffffffffffffffffffffffffffff85161562002bcd5773ffffffffffffffffffffffffffffffffffffffff85166000908152600360205260409020805460010190555b60008481526002602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff89811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b73ffffffffffffffffffffffffffffffffffffffff821662002ca3576040517f64a0ae920000000000000000000000000000000000000000000000000000000081526000600482015260240162000bd6565b600062002cb38383600062002acd565b905073ffffffffffffffffffffffffffffffffffffffff81161562001544576040517f73c6ac6e0000000000000000000000000000000000000000000000000000000081526000600482015260240162000bd6565b60065473ffffffffffffffffffffffffffffffffffffffff16331462001dde576040517f118cdaa700000000000000000000000000000000000000000000000000000000815233600482015260240162000bd6565b6006805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b73ffffffffffffffffffffffffffffffffffffffff821662002e3b576040517f5b08ba1800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8316600482015260240162000bd6565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526005602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319101620017fc565b73ffffffffffffffffffffffffffffffffffffffff83163b1562001194576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169063150b7a029062002f4490339088908790879060040162004236565b6020604051808303816000875af192505050801562002fa0575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925262002f9d9181019062004281565b60015b62003034573d80801562002fd1576040519150601f19603f3d011682016040523d82523d6000602084013e62002fd6565b606091505b5080516000036200302c576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260240162000bd6565b805181602001fd5b7fffffffff0000000000000000000000000000000000000000000000000000000081167f150b7a020000000000000000000000000000000000000000000000000000000014620030c9576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260240162000bd6565b5050505050565b60606000620030df836200341f565b600101905060008167ffffffffffffffff81111562003102576200310262003856565b6040519080825280601f01601f1916602001820160405280156200312d576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85049450846200313757509392505050565b8080620031b7575073ffffffffffffffffffffffffffffffffffffffff821615155b1562003314576000620031ca8462002a5d565b905073ffffffffffffffffffffffffffffffffffffffff8316158015906200321e57508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b80156200325e575073ffffffffffffffffffffffffffffffffffffffff80821660009081526005602090815260408083209387168352929052205460ff16155b15620032af576040517fa9fbf51f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8416600482015260240162000bd6565b81156200331257838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b5050600090815260046020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6200337683838362003508565b620015445773ffffffffffffffffffffffffffffffffffffffff8316620033cd576040517f7e2732890000000000000000000000000000000000000000000000000000000081526004810182905260240162000bd6565b6040517f177e802f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff831660048201526024810182905260440162000bd6565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000831062003469577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef8100000000831062003496576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310620034b557662386f26fc10000830492506010015b6305f5e1008310620034ce576305f5e100830492506008015b6127108310620034e357612710830492506004015b60648310620034f6576064830492506002015b600a831062000a425760010192915050565b600073ffffffffffffffffffffffffffffffffffffffff831615801590620035ca57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148062003598575073ffffffffffffffffffffffffffffffffffffffff80851660009081526005602090815260408083209387168352929052205460ff165b80620035ca575060008281526004602052604090205473ffffffffffffffffffffffffffffffffffffffff8481169116145b949350505050565b6105e580620042a283390190565b7fffffffff000000000000000000000000000000000000000000000000000000008116811462002a5a57600080fd5b6000602082840312156200362257600080fd5b81356200249881620035e0565b6000602082840312156200364257600080fd5b5035919050565b60005b83811015620036665781810151838201526020016200364c565b50506000910152565b600081518084526200368981602086016020860162003649565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006200249860208301846200366f565b73ffffffffffffffffffffffffffffffffffffffff8116811462002a5a57600080fd5b80356200370081620036d0565b919050565b600080604083850312156200371957600080fd5b82356200372681620036d0565b946020939093013593505050565b858152846020820152836040820152821515606082015260a0608082015260006200376360a08301846200366f565b979650505050505050565b6000806000606084860312156200378457600080fd5b83356200379181620036d0565b92506020840135620037a381620036d0565b929592945050506040919091013590565b60008060408385031215620037c857600080fd5b50508035926020909101359150565b60008060408385031215620037eb57600080fd5b823591506020830135620037ff81620036d0565b809150509250929050565b60008083601f8401126200381d57600080fd5b50813567ffffffffffffffff8111156200383657600080fd5b6020830191508360208285010111156200384f57600080fd5b9250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715620038cf57620038cf62003856565b604052919050565b600082601f830112620038e957600080fd5b8135602067ffffffffffffffff82111562003908576200390862003856565b8160051b6200391982820162003885565b92835284810182019282810190878511156200393457600080fd5b83870192505b84831015620037635782356200395081620036d0565b825291830191908301906200393a565b60008060008060008060008060008060006101208c8e0312156200398357600080fd5b67ffffffffffffffff808d3511156200399b57600080fd5b620039aa8e8e358f016200380a565b909c509a5060208d0135811015620039c157600080fd5b620039d38e60208f01358f016200380a565b909a509850620039e660408e01620036f3565b97508060608e01351115620039fa57600080fd5b5062003a0d8d60608e01358e01620038d7565b9a9d999c50979a9699959895975050505060808401359360a08101359360c0820135935060e082013592506101009091013590565b60006020828403121562003a5557600080fd5b81356200249881620036d0565b600067ffffffffffffffff83111562003a7f5762003a7f62003856565b62003ab260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601160162003885565b905082815283838301111562003ac757600080fd5b828260208301376000602084830101529392505050565b6000806000806080858703121562003af557600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111562003b2257600080fd5b8501601f8101871362003b3457600080fd5b62003b458782356020840162003a62565b91505092959194509250565b801515811462002a5a57600080fd5b6000806040838503121562003b7457600080fd5b823562003b8181620036d0565b91506020830135620037ff8162003b51565b6000806000806080858703121562003baa57600080fd5b843562003bb781620036d0565b9350602085013562003bc981620036d0565b925060408501359150606085013567ffffffffffffffff81111562003b2257600080fd5b6000806040838503121562003c0157600080fd5b823562003c0e81620036d0565b91506020830135620037ff81620036d0565b600181811c9082168062003c3557607f821691505b60208210810362003c6f577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60006020828403121562003c8857600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808202811582820484141762000a425762000a4262003c8f565b60008262003d0f577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b828152600060206040818401526000845462003d308162003c20565b806040870152606060018084166000811462003d55576001811462003d8e5762003dbe565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008516838a01528284151560051b8a0101955062003dbe565b896000528660002060005b8581101562003db65781548b820186015290830190880162003d99565b8a0184019650505b50939998505050505050505050565b60006020828403121562003de057600080fd5b8151620024988162003b51565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820362003e215762003e2162003c8f565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121562003e6a57600080fd5b81516200249881620036d0565b601f8211156200154457600081815260208120601f850160051c8101602086101562003ea05750805b601f850160051c820191505b8181101562003ec15782815560010162003eac565b505050505050565b67ffffffffffffffff83111562003ee45762003ee462003856565b62003efc8362003ef5835462003c20565b8362003e77565b6000601f84116001811462003f51576000851562003f1a5750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b178355620030c9565b6000838152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0861690835b8281101562003fa2578685013582556020948501946001909201910162003f80565b508682101562003fde577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555050505050565b6060815283606082015283856080830137600060808583010152600060807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f870116830101905073ffffffffffffffffffffffffffffffffffffffff8416602083015282604083015295945050505050565b73ffffffffffffffffffffffffffffffffffffffff83168152604060208201526000620035ca60408301846200366f565b815167ffffffffffffffff811115620040b257620040b262003856565b620040ca81620040c3845462003c20565b8462003e77565b602080601f831160018114620041205760008415620040e95750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b17855562003ec1565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b828110156200416f578886015182559484019460019091019084016200414e565b5085821015620041ac57878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b828152604060208201526000620035ca60408301846200366f565b8181038181111562000a425762000a4262003c8f565b8082018082111562000a425762000a4262003c8f565b600083516200421781846020880162003649565b8351908301906200422d81836020880162003649565b01949350505050565b600073ffffffffffffffffffffffffffffffffffffffff8087168352808616602084015250836040830152608060608301526200427760808301846200366f565b9695505050505050565b6000602082840312156200429457600080fd5b81516200249881620035e056fe60a06040526040516105e53803806105e583398101604081905261002291610387565b61002c828261003e565b506001600160a01b031660805261047e565b610047826100fe565b6040516001600160a01b038316907f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e90600090a28051156100f2576100ed826001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100e79190610447565b82610211565b505050565b6100fa610288565b5050565b806001600160a01b03163b60000361013957604051631933b43b60e21b81526001600160a01b03821660048201526024015b60405180910390fd5b807fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5080546001600160a01b0319166001600160a01b0392831617905560408051635c60da1b60e01b81529051600092841691635c60da1b9160048083019260209291908290030181865afa1580156101b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d99190610447565b9050806001600160a01b03163b6000036100fa57604051634c9c8ce360e01b81526001600160a01b0382166004820152602401610130565b6060600080846001600160a01b03168460405161022e9190610462565b600060405180830381855af49150503d8060008114610269576040519150601f19603f3d011682016040523d82523d6000602084013e61026e565b606091505b50909250905061027f8583836102a9565b95945050505050565b34156102a75760405163b398979f60e01b815260040160405180910390fd5b565b6060826102be576102b982610308565b610301565b81511580156102d557506001600160a01b0384163b155b156102fe57604051639996b31560e01b81526001600160a01b0385166004820152602401610130565b50805b9392505050565b8051156103185780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b80516001600160a01b038116811461034857600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561037e578181015183820152602001610366565b50506000910152565b6000806040838503121561039a57600080fd5b6103a383610331565b60208401519092506001600160401b03808211156103c057600080fd5b818501915085601f8301126103d457600080fd5b8151818111156103e6576103e661034d565b604051601f8201601f19908116603f0116810190838211818310171561040e5761040e61034d565b8160405282815288602084870101111561042757600080fd5b610438836020830160208801610363565b80955050505050509250929050565b60006020828403121561045957600080fd5b61030182610331565b60008251610474818460208701610363565b9190910192915050565b60805161014d61049860003960006024015261014d6000f3fe608060405261000c61000e565b005b61001e610019610020565b6100b6565b565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561008d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100b191906100da565b905090565b3660008037600080366000845af43d6000803e8080156100d5573d6000f35b3d6000fd5b6000602082840312156100ec57600080fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811461011057600080fd5b939250505056fea264697066735822122093fc6daa985e951622fc6457dc0760a3f7ed9358583e2b9951e7eb4e2b0957db64736f6c63430008140033a2646970667358221220f11980d5428d62bbfa4bb7a80e32371ff886d97de813c655511ac10fb16caca764736f6c63430008140033",
    "sourceMap": "720:10052:56:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1561:300:15;;;;;;:::i;:::-;;:::i;:::-;;;611:14:62;;604:22;586:41;;574:2;559:18;1561:300:15;;;;;;;;2380:61:56;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;969:25:62;;;957:2;942:18;2380:61:56;823:177:62;2365:89:15;;;:::i;:::-;;;;;;;:::i;3497:154::-;;;;;;:::i;:::-;;:::i;:::-;;;1996:42:62;1984:55;;;1966:74;;1954:2;1939:18;3497:154:15;1820:226:62;3323:113:15;;;;;;:::i;:::-;;:::i;:::-;;2201:43:56;;;;;;:::i;:::-;;;;;;;;;;;;;;7140:1251;;;;;;:::i;:::-;;:::i;1188:65::-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;;:::i;2314:60::-;;;;;;:::i;:::-;;;;;;;;;;;;;;807:29;;;;;;4143:578:15;;;;;;:::i;:::-;;:::i;6207:642:56:-;;;;;;:::i;:::-;;:::i;4787:132:15:-;;;;;;:::i;:::-;;:::i;2569:50:56:-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;1295:49;;;;;;:::i;:::-;;;;;;;;;;;;;;2447:55;;;;;;:::i;:::-;;;;;;;;;;;;;;10088:677;;;;;;:::i;:::-;;:::i;2508:55::-;;;;;;:::i;:::-;;:::i;2185:118:15:-;;;;;;:::i;:::-;;:::i;9803:141:56:-;;;;;;:::i;:::-;9885:7;9911:18;;;:5;:18;;;;;;;;:26;;;;;;;;;;;;;;9803:141;9950:132;;;;;;:::i;:::-;10022:7;10048:27;;;:14;:27;;;;;;;9950:132;3427:1747;;;;;;:::i;:::-;;:::i;1920:208:15:-;;;;;;:::i;:::-;;:::i;2293:101:4:-;;;:::i;1119:37:56:-;;;;;;6855:111;;;;;;:::i;:::-;;:::i;842:37::-;;;;;;;;;1638:85:4;1710:6;;;;1638:85;;1080:32:56;;;;;;8397:553;;;;;;:::i;:::-;;:::i;2518:93:15:-;;;:::i;2153:42:56:-;;;;;;:::i;:::-;;;;;;;;;;;;;;3718:144:15;;;;;;:::i;:::-;;:::i;8957:840:56:-;;;;;;:::i;:::-;;:::i;885:36::-;;;;;;;;;6972:115;;;;;;:::i;:::-;;:::i;4985:208:15:-;;;;;;:::i;:::-;;:::i;927:39:56:-;;;;;;;;;1922:91;;;;;;;;;2677:255:15;;;;;;:::i;:::-;;:::i;1382:60:56:-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;1002:49;;;;;;:::i;:::-;;;;;;;;;;;;;;;;5180:1021;;;;;;:::i;:::-;;:::i;2103:44::-;;;;;;:::i;:::-;;:::i;2048:49::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;3928:153:15;;;;;;:::i;:::-;4039:25;;;;4016:4;4039:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;;;;3928:153;972:24:56;;;;;;;;;2543:215:4;;;;;;:::i;:::-;;:::i;2250:49:56:-;;;;;;:::i;:::-;;;;;;;;;;;;;;1561:300:15;1663:4;1698:40;;;1713:25;1698:40;;:104;;-1:-1:-1;1754:48:15;;;1769:33;1754:48;1698:104;:156;;;-1:-1:-1;876:25:26;861:40;;;;1818:36:15;1679:175;1561:300;-1:-1:-1;;1561:300:15:o;2365:89::-;2410:13;2442:5;2435:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2365:89;:::o;3497:154::-;3564:7;3583:22;3597:7;3583:13;:22::i;:::-;-1:-1:-1;6008:7:15;6034:24;;;:15;:24;;;;;;;;3623:21;5938:127;3323:113;3394:35;3403:2;3407:7;735:10:20;3394:8:15;:35::i;:::-;3323:113;;:::o;7140:1251:56:-;7213:14;7230:32;;;:19;:32;;;;;:39;;7302:45;;;;7376:41;;;;;7230:39;;7302:45;7450:15;7435:30;;7427:84;;;;;;;11730:2:62;7427:84:56;;;11712:21:62;11769:2;11749:18;;;11742:30;11808:34;11788:18;;;11781:62;11879:11;11859:18;;;11852:39;11908:19;;7427:84:56;;;;;;;;;7544:34;;;;:26;:34;;;;;;7529:49;;7521:127;;;;;;;12140:2:62;7521:127:56;;;12122:21:62;12179:2;12159:18;;;12152:30;12218:34;12198:18;;;12191:62;12289:34;12269:18;;;12262:62;12361:3;12340:19;;;12333:32;12382:19;;7521:127:56;11938:469:62;7521:127:56;7684:8;7666:15;:26;7658:64;;;;;;;12614:2:62;7658:64:56;;;12596:21:62;12653:2;12633:18;;;12626:30;12692:27;12672:18;;;12665:55;12737:18;;7658:64:56;12412:349:62;7658:64:56;7749:14;;7740:6;:23;7732:50;;;;;;;12968:2:62;7732:50:56;;;12950:21:62;13007:2;12987:18;;;12980:30;13046:16;13026:18;;;13019:44;13080:18;;7732:50:56;12766:338:62;7732:50:56;7793:25;7828:23;;;:15;:23;;;;;;;;;7821:45;;;;;;;7828:23;;;;;7821:43;;:45;;;;;;;;;;;7828:23;7821:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;7876:18;7897:27;;;:14;:27;;;;;;7971:15;;7793:73;;-1:-1:-1;7897:27:56;7989:5;;7951:35;;7793:73;7951:35;:::i;:::-;:43;;;;:::i;:::-;7938:10;:56;7935:207;;;8010:32;;;;:19;:32;;;;;:41;;:48;;;;8054:4;8010:48;;;7935:207;;;8088:43;;;;;14330:2:62;8088:43:56;;;14312:21:62;14369:2;14349:18;;;14342:30;14408:34;14388:18;;;14381:62;14479:3;14459:18;;;14452:31;14500:19;;8088:43:56;14128:397:62;7935:207:56;8187:6;8174:11;8157:90;8195:12;8209:19;:32;8229:11;8209:32;;;;;;;;;;;:37;;8157:90;;;;;;;:::i;:::-;;;;;;;;8261:28;;;;:20;:28;;;;;;;;:43;;;8346:14;:22;;;;;;;8319:64;;969:25:62;;;8346:22:56;;;;;8319:64;;942:18:62;8319:64:56;;;;;;;7203:1188;;;;;7140:1251;:::o;1188:65::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;4143:578:15:-;4237:16;;;4233:87;;4276:33;;;;;4306:1;4276:33;;;1966:74:62;1939:18;;4276:33:15;1820:226:62;4233:87:15;4538:21;4562:34;4570:2;4574:7;735:10:20;4562:7:15;:34::i;:::-;4538:58;;4627:4;4610:21;;:13;:21;;;4606:109;;4654:50;;;;;15965:42:62;16034:15;;;4654:50:15;;;16016:34:62;16066:18;;;16059:34;;;16129:15;;16109:18;;;16102:43;15928:18;;4654:50:15;15753:398:62;4606:109:15;4223:498;4143:578;;;:::o;6207:642:56:-;6288:28;;;;:20;:28;;;;;;6269:15;:47;;6261:82;;;;;;;16358:2:62;6261:82:56;;;16340:21:62;16397:2;16377:18;;;16370:30;16436:24;16416:18;;;16409:52;16478:18;;6261:82:56;16156:346:62;6261:82:56;6353:24;6380:23;;;:15;:23;;;;;;;6436:50;;;;;6475:10;6436:50;;;1966:74:62;6380:23:56;;;;;6353:24;6380:23;;6436:38;;1939:18:62;;6436:50:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;6572:10;;6505:24;6593:22;;;:14;:22;;;;;;;6572:44;;;;;:10;6593:22;;;6572:44;;;1966:74:62;6413:73:56;;-1:-1:-1;6505:24:56;;6572:10;;;:20;;1939:18:62;;6572:44:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;6546:22;;;;:14;:22;;;;;;6533:35;;:12;:35;:::i;:::-;6532:84;;;;:::i;:::-;6627:10;;;6651:22;;;:14;:22;;;;;;;;6627:77;;;;;:10;6651:22;;;6627:77;;;16770:34:62;6675:10:56;16820:18:62;;;16813:43;16872:18;;;16865:34;;;6505:111:56;;-1:-1:-1;6627:10:56;;:23;;16682:18:62;;6627:77:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;6715:47:56;;;;;;;;969:25:62;;;6715:33:56;;;;;;942:18:62;;6715:47:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;6789:22:56;;;;:14;:22;;;;;;;;;;6778:64;;969:25:62;;;6813:10:56;;-1:-1:-1;6778:64:56;6789:22;;;;6778:64;;942:18:62;6778:64:56;;;;;;;6251:598;;;6207:642;:::o;4787:132:15:-;4873:39;4890:4;4896:2;4900:7;4873:39;;;;;;;;;;;;:16;:39::i;:::-;4787:132;;;:::o;10088:677:56:-;10182:32;;;;:19;:32;;;;;:41;;;10164:15;:59;;:104;;-1:-1:-1;10227:32:56;;;;:19;:32;;;;;:41;;;;;10164:104;10156:150;;;;;;;17362:2:62;10156:150:56;;;17344:21:62;17401:2;17381:18;;;17374:30;17440:34;17420:18;;;17413:62;17511:3;17491:18;;;17484:31;17532:19;;10156:150:56;17160:397:62;10156:150:56;10325:14;10342:32;;;:19;:32;;;;;:39;10408:14;;10399:23;;10391:50;;;;;;;12968:2:62;10391:50:56;;;12950:21:62;13007:2;12987:18;;;12980:30;13046:16;13026:18;;;13019:44;13080:18;;10391:50:56;12766:338:62;10391:50:56;10452:14;10469:18;;;:5;:18;;;;;;;;10488:10;10469:30;;;;;;;;10517:10;10509:55;;;;;;;17764:2:62;10509:55:56;;;17746:21:62;;;17783:18;;;17776:30;17842:34;17822:18;;;17815:62;17894:18;;10509:55:56;17562:356:62;10509:55:56;10582:23;;;;:15;:23;;;;;;;;10575:60;;;;;10616:10;10575:60;;;18097:74:62;18187:18;;;18180:34;;;10582:23:56;;;;;10575:40;;18070:18:62;;10575:60:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;10678:1:56;10645:18;;;:5;:18;;;;;;;;10664:10;10645:30;;;;;;;;;:34;;;;10695:54;969:25:62;;;10645:18:56;;10695:54;;942:18:62;10695:54:56;;;;;;;;10146:619;;10088:677;:::o;2508:55::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2508:55:56;;-1:-1:-1;2508:55:56:o;2185:118:15:-;2248:7;2274:22;2288:7;2274:13;:22::i;3427:1747:56:-;3752:14;;;3708:7;;3752:14;;3708:7;3776:16;3752:14;3776:16;:::i;:::-;;;;;;3802:18;3808:3;3813:6;3802:5;:18::i;:::-;3835:9;3831:279;3854:14;:21;3850:1;:25;3831:279;;;3900:17;:36;3918:14;3933:1;3918:17;;;;;;;;:::i;:::-;;;;;;;;;;;;3900:36;;;;;;;;;;;;-1:-1:-1;3900:36:56;;;;3896:139;;3955:65;;;;;18816:2:62;3955:65:56;;;18798:21:62;18855:2;18835:18;;;18828:30;18894:34;18874:18;;;18867:62;18965:25;18945:18;;;18938:53;19008:19;;3955:65:56;18614:419:62;3896:139:56;4049:26;;;;:18;:26;;;;;4081:17;;:14;;4096:1;;4081:17;;;;;;:::i;:::-;;;;;;;;;;;;4049:50;;;;;;;-1:-1:-1;4049:50:56;;;;;;;;;;;;;;;;;;;;;;3877:3;;;;:::i;:::-;;;;3831:279;;;-1:-1:-1;4149:13:56;;4198:21;;4149:186;;;;;:13;4198:21;;;4149:186;;;19430:34:62;4234:13:56;19480:18:62;;;19473:34;4269:4:56;19523:18:62;;;19516:43;19575:18;;;19568:34;;;4120:26:56;19618:19:62;;;19611:35;;;19683:3;19662:19;;;19655:32;19703:19;;;19696:30;;;4120:26:56;4149:13;;;;;:27;;19743:19:62;;4149:186:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4120:215;;4370:18;4345:14;:22;4360:6;4345:22;;;;;;;;;;;;:43;;;;;;;;;;;;;;;;;;4419:5;;4398:10;:18;4409:6;4398:18;;;;;;;;;;;:26;;;;;;;:::i;:::-;;4452:7;4434;:15;4442:6;4434:15;;;;;;;;;;;:25;;;;4541:8;4522;:16;4531:6;4522:16;;;;;;;;;;;:27;;;;4648:16;4612:25;:33;4638:6;4612:33;;;;;;;;;;;:52;;;;4711:18;4674:26;:34;4701:6;4674:34;;;;;;;;;;;:55;;;;4770:11;4739:20;:28;4760:6;4739:28;;;;;;;;;;;:42;;;;4791:32;4842:24;;;;;;;;;;;4903:42;;;4959:7;;4976:4;4983:16;4880:120;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4826:175;;;;;:::i;:::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;5012:23:56;;;;:15;:23;;;;;;:55;;;;;;;;;;;;;;5082:62;;5012:55;;-1:-1:-1;5012:55:56;;5082:62;;;;;;;-1:-1:-1;5161:6:56;;3427:1747;-1:-1:-1;;;;;;;;;;;;;3427:1747:56:o;1920:208:15:-;1983:7;2006:19;;;2002:87;;2048:30;;;;;2075:1;2048:30;;;1966:74:62;1939:18;;2048:30:15;1820:226:62;2002:87:15;-1:-1:-1;2105:16:15;;;;;;:9;:16;;;;;;;1920:208::o;2293:101:4:-;1531:13;:11;:13::i;:::-;2357:30:::1;2384:1;2357:18;:30::i;:::-;2293:101::o:0;6855:111:56:-;1531:13:4;:11;:13::i;:::-;6927:25:56::1;;;::::0;;;:17:::1;:25;::::0;;;;:32;;;::::1;6955:4;6927:32;::::0;;6855:111::o;8397:553::-;8608:187;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;8608:187:56;;;;;;;;;;;;8587:17;;8567:38;;:19;:38;;;;;;:228;;;;;;8608:187;8567:228;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;8805:17:56;:19;;;-1:-1:-1;8805:17:56;:19;;;:::i;:::-;;;;;;8871:13;8862:7;8840:67;8886:13;8901:5;8840:67;;;;;;;:::i;:::-;;;;;;;;8942:1;8924:17;;:19;;;;:::i;:::-;8917:26;8397:553;-1:-1:-1;;;;;8397:553:56:o;2518:93:15:-;2565:13;2597:7;2590:14;;;;;:::i;3718:144::-;3803:52;735:10:20;3836:8:15;3846;3803:18;:52::i;8957:840:56:-;9049:17;;9034:11;:32;;9026:63;;;;;;;25240:2:62;9026:63:56;;;25222:21:62;25279:2;25259:18;;;25252:30;25318:20;25298:18;;;25291:48;25356:18;;9026:63:56;25038:342:62;9026:63:56;9125:32;;;;:19;:32;;;;;:41;;;9107:15;:59;9099:97;;;;;;;12614:2:62;9099:97:56;;;12596:21:62;12653:2;12633:18;;;12626:30;12692:27;12672:18;;;12665:55;12737:18;;9099:97:56;12412:349:62;9099:97:56;9215:32;;;;:19;:32;;;;;:41;;;;;9214:42;9206:88;;;;;;;25587:2:62;9206:88:56;;;25569:21:62;25626:2;25606:18;;;25599:30;25665:34;25645:18;;;25638:62;25736:3;25716:18;;;25709:31;25757:19;;9206:88:56;25385:397:62;9206:88:56;9305:14;9322:32;;;:19;:32;;;;;:39;9388:14;;9379:23;;9371:50;;;;;;;12968:2:62;9371:50:56;;;12950:21:62;13007:2;12987:18;;;12980:30;13046:16;13026:18;;;13019:44;13080:18;;9371:50:56;12766:338:62;9371:50:56;9447:23;;;;:15;:23;;;;;;;;9440:68;;;;;9482:10;9440:68;;;26022:34:62;9502:4:56;26072:18:62;;;26065:43;9512:7:56;;9447:23;;;9440:41;;25934:18:62;;9440:68:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:79;;9432:112;;;;;;;26321:2:62;9432:112:56;;;26303:21:62;26360:2;26340:18;;;26333:30;26399:22;26379:18;;;26372:50;26439:18;;9432:112:56;26119:344:62;9432:112:56;9562:23;;;;:15;:23;;;;;;;;9555:80;;;;;9600:10;9555:80;;;16770:34:62;9620:4:56;16820:18:62;;;16813:43;16872:18;;;16865:34;;;9562:23:56;;;;;9555:44;;16682:18:62;;9555:80:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;9646:18:56;;;;:5;:18;;;;;;;;9665:10;9646:30;;;;;;;:41;;9680:7;;9646:18;:41;;9680:7;;9646:41;:::i;:::-;;;;-1:-1:-1;;9697:27:56;;;;:14;:27;;;;;:38;;9728:7;;9697:27;:38;;9728:7;;9697:38;:::i;:::-;;;;-1:-1:-1;;9751:39:56;;969:25:62;;;9770:10:56;;9757:11;;9751:39;;957:2:62;942:18;9751:39:56;823:177:62;6972:115:56;1531:13:4;:11;:13::i;:::-;7047:25:56::1;;7075:5;7047:25:::0;;;:17:::1;:25;::::0;;;;:33;;;::::1;::::0;;6972:115::o;4985:208:15:-;5098:31;5111:4;5117:2;5121:7;5098:12;:31::i;:::-;5139:47;5162:4;5168:2;5172:7;5181:4;5139:22;:47::i;2677:255::-;2741:13;2766:22;2780:7;2766:13;:22::i;:::-;;2799:21;2823:10;3250:9;;;;;;;;;-1:-1:-1;3250:9:15;;;3174:92;2823:10;2799:34;;2874:1;2856:7;2850:21;:25;:75;;;;;;;;;;;;;;;;;2892:7;2901:18;:7;:16;:18::i;:::-;2878:42;;;;;;;;;:::i;:::-;;;;;;;;;;;;;2850:75;2843:82;2677:255;-1:-1:-1;;;2677:255:15:o;5180:1021:56:-;5264:1;5254:7;:11;5246:54;;;;;;;27301:2:62;5246:54:56;;;27283:21:62;27340:2;27320:18;;;27313:30;27379:32;27359:18;;;27352:60;27429:18;;5246:54:56;27099:354:62;5246:54:56;5337:33;;;;:25;:33;;;;;;5318:15;:52;;5310:92;;;;;;;27660:2:62;5310:92:56;;;27642:21:62;27699:2;27679:18;;;27672:30;27738:29;27718:18;;;27711:57;27785:18;;5310:92:56;27458:351:62;5310:92:56;5439:34;;;;:26;:34;;;;;;5420:15;:53;;5412:87;;;;;;;28016:2:62;5412:87:56;;;27998:21:62;28055:2;28035:18;;;28028:30;28094:23;28074:18;;;28067:51;28135:18;;5412:87:56;27814:345:62;5412:87:56;5510:25;5538:22;;;:14;:22;;;;;;;;;5570:58;;;;;;;12968:2:62;5570:58:56;;;12950:21:62;13007:2;12987:18;;;12980:30;13046:16;13026:18;;;13019:44;13080:18;;5570:58:56;12766:338:62;5570:58:56;5639:21;5673:15;;;:7;:15;;;;;;5691:5;;5663:25;;:7;:25;:::i;:::-;:33;;;;:::i;:::-;5639:57;-1:-1:-1;5706:22:56;5731:23;5639:57;5731:7;:23;:::i;:::-;5765:10;;:70;;;;;5789:10;5765:70;;;16770:34:62;5765:10:56;16840:15:62;;;16820:18;;;16813:43;16872:18;;;16865:34;;;5706:48:56;;-1:-1:-1;5765:10:56;;;:23;;16682:18:62;;5765:70:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;5845:10:56;;;;:23;5869:10;5881:15;5889:6;5881:7;:15::i;:::-;5845:67;;;;;;;;;;16719:42:62;16788:15;;;5845:67:56;;;16770:34:62;16840:15;;16820:18;;;16813:43;16872:18;;;16865:34;;;16682:18;;5845:67:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;5952:22:56;;;;:14;:22;;;;;:40;;5978:14;;5952:22;:40;;5978:14;;5952:40;:::i;:::-;;;;-1:-1:-1;;6003:24:56;6030:23;;;:15;:23;;;;;;;;6063:61;;;;;6097:10;6063:61;;;18097:74:62;18187:18;;;18180:34;;;6030:23:56;;;;;;;6063:33;;18070:18:62;;6063:61:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;6139:55:56;;969:25:62;;;6174:10:56;;-1:-1:-1;6139:55:56;;;;-1:-1:-1;6139:55:56;;957:2:62;942:18;6139:55:56;;;;;;;5236:965;;;;5180:1021;;:::o;2103:44::-;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2543:215:4:-;1531:13;:11;:13::i;:::-;2627:22:::1;::::0;::::1;2623:91;;2672:31;::::0;::::1;::::0;;2700:1:::1;2672:31;::::0;::::1;1966:74:62::0;1939:18;;2672:31:4::1;1820:226:62::0;2623:91:4::1;2723:28;2742:8;2723:18;:28::i;:::-;2543:215:::0;:::o;16138:241:15:-;16201:7;5799:16;;;:7;:16;;;;;;;;;16263:88;;16309:31;;;;;;;;969:25:62;;;942:18;;16309:31:15;823:177:62;14418:120:15;14498:33;14507:2;14511:7;14520:4;14526;14498:8;:33::i;8838:795::-;8924:7;5799:16;;;:7;:16;;;;;;;;;;;9035:18;;;9031:86;;9069:37;9086:4;9092;9098:7;9069:16;:37::i;:::-;9161:18;;;;9157:256;;9277:48;9294:1;9298:7;9315:1;9319:5;9277:8;:48::i;:::-;9368:15;;;;;;;:9;:15;;;;;:20;;;;;;9157:256;9427:16;;;;9423:107;;9487:13;;;;;;;:9;:13;;;;;:18;;9504:1;9487:18;;;9423:107;9540:16;;;;:7;:16;;;;;;:21;;;;;;;;;;;;;;9577:27;;9540:16;;9577:27;;;;;;;9622:4;8838:795;-1:-1:-1;;;;8838:795:15:o;9955:327::-;10022:16;;;10018:87;;10061:33;;;;;10091:1;10061:33;;;1966:74:62;1939:18;;10061:33:15;1820:226:62;10018:87:15;10114:21;10138:32;10146:2;10150:7;10167:1;10138:7;:32::i;:::-;10114:56;-1:-1:-1;10184:27:15;;;;10180:96;;10234:31;;;;;10262:1;10234:31;;;1966:74:62;1939:18;;10234:31:15;1820:226:62;1796:162:4;1710:6;;1855:23;1710:6;735:10:20;1855:23:4;1851:101;;1901:40;;;;;735:10:20;1901:40:4;;;1966:74:62;1939:18;;1901:40:4;1820:226:62;2912:187:4;3004:6;;;;3020:17;;;;;;;;;;;3052:40;;3004:6;;;3020:17;3004:6;;3052:40;;2985:16;;3052:40;2975:124;2912:187;:::o;15591:312:15:-;15698:22;;;15694:91;;15743:31;;;;;1996:42:62;1984:55;;15743:31:15;;;1966:74:62;1939:18;;15743:31:15;1820:226:62;15694:91:15;15794:25;;;;;;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;;:46;;;;;;;;;;;;;15855:41;;586::62;;;15855::15;;559:18:62;15855:41:15;446:187:62;16918:782:15;17034:14;;;;:18;17030:664;;17072:71;;;;;:36;;;;;;:71;;735:10:20;;17123:4:15;;17129:7;;17138:4;;17072:71;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;-1:-1:-1;17072:71:15;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;17068:616;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;17381:6;:13;17398:1;17381:18;17377:293;;17430:25;;;;;1996:42:62;1984:55;;17430:25:15;;;1966:74:62;1939:18;;17430:25:15;1820:226:62;17377:293:15;17622:6;17616:13;17607:6;17603:2;17599:15;17592:38;17068:616;17190:51;;;17200:41;17190:51;17186:130;;17272:25;;;;;1996:42:62;1984:55;;17272:25:15;;;1966:74:62;1939:18;;17272:25:15;1820:226:62;17186:130:15;17144:186;16918:782;;;;:::o;637:698:23:-;693:13;742:14;759:17;770:5;759:10;:17::i;:::-;779:1;759:21;742:38;;794:20;828:6;817:18;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;817:18:23;-1:-1:-1;794:41:23;-1:-1:-1;955:28:23;;;971:2;955:28;1010:282;1041:5;;1180:10;1175:2;1164:14;;1159:32;1041:5;1146:46;1236:2;1227:11;;;-1:-1:-1;1256:21:23;1010:282;1256:21;-1:-1:-1;1312:6:23;637:698;-1:-1:-1;;;637:698:23:o;14720:662:15:-;14880:9;:31;;;-1:-1:-1;14893:18:15;;;;;14880:31;14876:460;;;14927:13;14943:22;14957:7;14943:13;:22::i;:::-;14927:38;-1:-1:-1;15093:18:15;;;;;;;:35;;;15124:4;15115:13;;:5;:13;;;;15093:35;:69;;;;-1:-1:-1;4039:25:15;;;;4016:4;4039:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;15132:30;15093:69;15089:142;;;15189:27;;;;;1996:42:62;1984:55;;15189:27:15;;;1966:74:62;1939:18;;15189:27:15;1820:226:62;15089:142:15;15249:9;15245:81;;;15303:7;15299:2;15283:28;;15292:5;15283:28;;;;;;;;;;;;15245:81;14913:423;14876:460;-1:-1:-1;;15346:24:15;;;;:15;:24;;;;;:29;;;;;;;;;;;;;;;14720:662::o;7082:368::-;7194:38;7208:5;7215:7;7224;7194:13;:38::i;:::-;7189:255;;7252:19;;;7248:186;;7298:31;;;;;;;;969:25:62;;;942:18;;7298:31:15;823:177:62;7248:186:15;7375:44;;;;;18127:42:62;18115:55;;7375:44:15;;;18097:74:62;18187:18;;;18180:34;;;18070:18;;7375:44:15;17923:297:62;12214:916:28;12267:7;;12351:8;12342:17;;12338:103;;12388:8;12379:17;;;-1:-1:-1;12424:2:28;12414:12;12338:103;12467:8;12458:5;:17;12454:103;;12504:8;12495:17;;;-1:-1:-1;12540:2:28;12530:12;12454:103;12583:8;12574:5;:17;12570:103;;12620:8;12611:17;;;-1:-1:-1;12656:2:28;12646:12;12570:103;12699:7;12690:5;:16;12686:100;;12735:7;12726:16;;;-1:-1:-1;12770:1:28;12760:11;12686:100;12812:7;12803:5;:16;12799:100;;12848:7;12839:16;;;-1:-1:-1;12883:1:28;12873:11;12799:100;12925:7;12916:5;:16;12912:100;;12961:7;12952:16;;;-1:-1:-1;12996:1:28;12986:11;12912:100;13038:7;13029:5;:16;13025:66;;13075:1;13065:11;13117:6;12214:916;-1:-1:-1;;12214:916:28:o;6376:272:15:-;6479:4;6514:21;;;;;;;:127;;;6561:7;6552:16;;:5;:16;;;:52;;;-1:-1:-1;4039:25:15;;;;4016:4;4039:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;6572:32;6552:88;;;-1:-1:-1;6008:7:15;6034:24;;;:15;:24;;;;;;6608:32;;;;6034:24;;6608:32;6552:88;6495:146;6376:272;-1:-1:-1;;;;6376:272:15:o;-1:-1:-1:-;;;;;;;;:::o;14:177:62:-;99:66;92:5;88:78;81:5;78:89;68:117;;181:1;178;171:12;196:245;254:6;307:2;295:9;286:7;282:23;278:32;275:52;;;323:1;320;313:12;275:52;362:9;349:23;381:30;405:5;381:30;:::i;638:180::-;697:6;750:2;738:9;729:7;725:23;721:32;718:52;;;766:1;763;756:12;718:52;-1:-1:-1;789:23:62;;638:180;-1:-1:-1;638:180:62:o;1005:250::-;1090:1;1100:113;1114:6;1111:1;1108:13;1100:113;;;1190:11;;;1184:18;1171:11;;;1164:39;1136:2;1129:10;1100:113;;;-1:-1:-1;;1247:1:62;1229:16;;1222:27;1005:250::o;1260:330::-;1302:3;1340:5;1334:12;1367:6;1362:3;1355:19;1383:76;1452:6;1445:4;1440:3;1436:14;1429:4;1422:5;1418:16;1383:76;:::i;:::-;1504:2;1492:15;1509:66;1488:88;1479:98;;;;1579:4;1475:109;;1260:330;-1:-1:-1;;1260:330:62:o;1595:220::-;1744:2;1733:9;1726:21;1707:4;1764:45;1805:2;1794:9;1790:18;1782:6;1764:45;:::i;2051:154::-;2137:42;2130:5;2126:54;2119:5;2116:65;2106:93;;2195:1;2192;2185:12;2210:134;2278:20;;2307:31;2278:20;2307:31;:::i;:::-;2210:134;;;:::o;2349:315::-;2417:6;2425;2478:2;2466:9;2457:7;2453:23;2449:32;2446:52;;;2494:1;2491;2484:12;2446:52;2533:9;2520:23;2552:31;2577:5;2552:31;:::i;:::-;2602:5;2654:2;2639:18;;;;2626:32;;-1:-1:-1;;;2349:315:62:o;2669:517::-;2924:6;2913:9;2906:25;2967:6;2962:2;2951:9;2947:18;2940:34;3010:6;3005:2;2994:9;2990:18;2983:34;3067:6;3060:14;3053:22;3048:2;3037:9;3033:18;3026:50;3113:3;3107;3096:9;3092:19;3085:32;2887:4;3134:46;3175:3;3164:9;3160:19;3152:6;3134:46;:::i;:::-;3126:54;2669:517;-1:-1:-1;;;;;;;2669:517:62:o;3191:456::-;3268:6;3276;3284;3337:2;3325:9;3316:7;3312:23;3308:32;3305:52;;;3353:1;3350;3343:12;3305:52;3392:9;3379:23;3411:31;3436:5;3411:31;:::i;:::-;3461:5;-1:-1:-1;3518:2:62;3503:18;;3490:32;3531:33;3490:32;3531:33;:::i;:::-;3191:456;;3583:7;;-1:-1:-1;;;3637:2:62;3622:18;;;;3609:32;;3191:456::o;3652:248::-;3720:6;3728;3781:2;3769:9;3760:7;3756:23;3752:32;3749:52;;;3797:1;3794;3787:12;3749:52;-1:-1:-1;;3820:23:62;;;3890:2;3875:18;;;3862:32;;-1:-1:-1;3652:248:62:o;3905:315::-;3973:6;3981;4034:2;4022:9;4013:7;4009:23;4005:32;4002:52;;;4050:1;4047;4040:12;4002:52;4086:9;4073:23;4063:33;;4146:2;4135:9;4131:18;4118:32;4159:31;4184:5;4159:31;:::i;:::-;4209:5;4199:15;;;3905:315;;;;;:::o;4225:348::-;4277:8;4287:6;4341:3;4334:4;4326:6;4322:17;4318:27;4308:55;;4359:1;4356;4349:12;4308:55;-1:-1:-1;4382:20:62;;4425:18;4414:30;;4411:50;;;4457:1;4454;4447:12;4411:50;4494:4;4486:6;4482:17;4470:29;;4546:3;4539:4;4530:6;4522;4518:19;4514:30;4511:39;4508:59;;;4563:1;4560;4553:12;4508:59;4225:348;;;;;:::o;4578:184::-;4630:77;4627:1;4620:88;4727:4;4724:1;4717:15;4751:4;4748:1;4741:15;4767:334;4838:2;4832:9;4894:2;4884:13;;4899:66;4880:86;4868:99;;4997:18;4982:34;;5018:22;;;4979:62;4976:88;;;5044:18;;:::i;:::-;5080:2;5073:22;4767:334;;-1:-1:-1;4767:334:62:o;5106:787::-;5160:5;5213:3;5206:4;5198:6;5194:17;5190:27;5180:55;;5231:1;5228;5221:12;5180:55;5267:6;5254:20;5293:4;5316:18;5312:2;5309:26;5306:52;;;5338:18;;:::i;:::-;5384:2;5381:1;5377:10;5407:28;5431:2;5427;5423:11;5407:28;:::i;:::-;5469:15;;;5539;;;5535:24;;;5500:12;;;;5571:15;;;5568:35;;;5599:1;5596;5589:12;5568:35;5635:2;5627:6;5623:15;5612:26;;5647:217;5663:6;5658:3;5655:15;5647:217;;;5743:3;5730:17;5760:31;5785:5;5760:31;:::i;:::-;5804:18;;5680:12;;;;5842;;;;5647:217;;5898:1339;6078:6;6086;6094;6102;6110;6118;6126;6134;6142;6150;6158:7;6212:3;6200:9;6191:7;6187:23;6183:33;6180:53;;;6229:1;6226;6219:12;6180:53;6252:18;6310:2;6298:9;6285:23;6282:31;6279:51;;;6326:1;6323;6316:12;6279:51;6365:76;6433:7;6420:9;6407:23;6396:9;6392:39;6365:76;:::i;:::-;6460:8;;-1:-1:-1;6487:8:62;-1:-1:-1;6538:2:62;6523:18;;6510:32;6507:40;-1:-1:-1;6504:60:62;;;6560:1;6557;6550:12;6504:60;6599:85;6676:7;6669:2;6658:9;6654:18;6641:32;6630:9;6626:48;6599:85;:::i;:::-;6703:8;;-1:-1:-1;6730:8:62;-1:-1:-1;6757:38:62;6791:2;6776:18;;6757:38;:::i;:::-;6747:48;;6844:2;6838;6827:9;6823:18;6810:32;6807:40;6804:60;;;6860:1;6857;6850:12;6804:60;;6883:87;6962:7;6955:2;6944:9;6940:18;6927:32;6916:9;6912:48;6883:87;:::i;:::-;5898:1339;;;;-1:-1:-1;5898:1339:62;;;;;;6873:97;;-1:-1:-1;;;;7017:3:62;7002:19;;6989:33;;7069:3;7054:19;;7041:33;;7121:3;7106:19;;7093:33;;-1:-1:-1;7173:3:62;7158:19;;7145:33;;-1:-1:-1;7226:3:62;7211:19;;;7198:33;;5898:1339::o;7242:247::-;7301:6;7354:2;7342:9;7333:7;7329:23;7325:32;7322:52;;;7370:1;7367;7360:12;7322:52;7409:9;7396:23;7428:31;7453:5;7428:31;:::i;7751:466::-;7816:5;7850:18;7842:6;7839:30;7836:56;;;7872:18;;:::i;:::-;7910:116;8020:4;7951:66;7946:2;7938:6;7934:15;7930:88;7926:99;7910:116;:::i;:::-;7901:125;;8049:6;8042:5;8035:21;8089:3;8080:6;8075:3;8071:16;8068:25;8065:45;;;8106:1;8103;8096:12;8065:45;8155:6;8150:3;8143:4;8136:5;8132:16;8119:43;8209:1;8202:4;8193:6;8186:5;8182:18;8178:29;8171:40;7751:466;;;;;:::o;8222:656::-;8318:6;8326;8334;8342;8395:3;8383:9;8374:7;8370:23;8366:33;8363:53;;;8412:1;8409;8402:12;8363:53;8448:9;8435:23;8425:33;;8505:2;8494:9;8490:18;8477:32;8467:42;;8556:2;8545:9;8541:18;8528:32;8518:42;;8611:2;8600:9;8596:18;8583:32;8638:18;8630:6;8627:30;8624:50;;;8670:1;8667;8660:12;8624:50;8693:22;;8746:4;8738:13;;8734:27;-1:-1:-1;8724:55:62;;8775:1;8772;8765:12;8724:55;8798:74;8864:7;8859:2;8846:16;8841:2;8837;8833:11;8798:74;:::i;:::-;8788:84;;;8222:656;;;;;;;:::o;8883:118::-;8969:5;8962:13;8955:21;8948:5;8945:32;8935:60;;8991:1;8988;8981:12;9006:382;9071:6;9079;9132:2;9120:9;9111:7;9107:23;9103:32;9100:52;;;9148:1;9145;9138:12;9100:52;9187:9;9174:23;9206:31;9231:5;9206:31;:::i;:::-;9256:5;-1:-1:-1;9313:2:62;9298:18;;9285:32;9326:30;9285:32;9326:30;:::i;9393:795::-;9488:6;9496;9504;9512;9565:3;9553:9;9544:7;9540:23;9536:33;9533:53;;;9582:1;9579;9572:12;9533:53;9621:9;9608:23;9640:31;9665:5;9640:31;:::i;:::-;9690:5;-1:-1:-1;9747:2:62;9732:18;;9719:32;9760:33;9719:32;9760:33;:::i;:::-;9812:7;-1:-1:-1;9866:2:62;9851:18;;9838:32;;-1:-1:-1;9921:2:62;9906:18;;9893:32;9948:18;9937:30;;9934:50;;;9980:1;9977;9970:12;10447:388;10515:6;10523;10576:2;10564:9;10555:7;10551:23;10547:32;10544:52;;;10592:1;10589;10582:12;10544:52;10631:9;10618:23;10650:31;10675:5;10650:31;:::i;:::-;10700:5;-1:-1:-1;10757:2:62;10742:18;;10729:32;10770:33;10729:32;10770:33;:::i;11086:437::-;11165:1;11161:12;;;;11208;;;11229:61;;11283:4;11275:6;11271:17;11261:27;;11229:61;11336:2;11328:6;11325:14;11305:18;11302:38;11299:218;;11373:77;11370:1;11363:88;11474:4;11471:1;11464:15;11502:4;11499:1;11492:15;11299:218;;11086:437;;;:::o;13109:184::-;13179:6;13232:2;13220:9;13211:7;13207:23;13203:32;13200:52;;;13248:1;13245;13238:12;13200:52;-1:-1:-1;13271:16:62;;13109:184;-1:-1:-1;13109:184:62:o;13298:::-;13350:77;13347:1;13340:88;13447:4;13444:1;13437:15;13471:4;13468:1;13461:15;13487:168;13560:9;;;13591;;13608:15;;;13602:22;;13588:37;13578:71;;13629:18;;:::i;13849:274::-;13889:1;13915;13905:189;;13950:77;13947:1;13940:88;14051:4;14048:1;14041:15;14079:4;14076:1;14069:15;13905:189;-1:-1:-1;14108:9:62;;13849:274::o;14656:1092::-;14830:6;14819:9;14812:25;14793:4;14856:2;14894;14889;14878:9;14874:18;14867:30;14917:1;14950:6;14944:13;14980:36;15006:9;14980:36;:::i;:::-;15052:6;15047:2;15036:9;15032:18;15025:34;15078:2;15099:1;15131:2;15120:9;15116:18;15148:1;15143:216;;;;15373:1;15368:354;;;;15109:613;;15143:216;15206:66;15195:9;15191:82;15186:2;15175:9;15171:18;15164:110;15346:2;15334:6;15327:14;15320:22;15317:1;15313:30;15302:9;15298:46;15294:55;15287:62;;15143:216;;15368:354;15399:6;15396:1;15389:17;15447:2;15444:1;15434:16;15472:1;15486:180;15500:6;15497:1;15494:13;15486:180;;;15593:14;;15569:17;;;15565:26;;15558:50;15636:16;;;;15515:10;;15486:180;;;15690:17;;15686:26;;;-1:-1:-1;;15109:613:62;-1:-1:-1;15739:3:62;;14656:1092;-1:-1:-1;;;;;;;;;14656:1092:62:o;16910:245::-;16977:6;17030:2;17018:9;17009:7;17005:23;17001:32;16998:52;;;17046:1;17043;17036:12;16998:52;17078:9;17072:16;17097:28;17119:5;17097:28;:::i;18225:195::-;18264:3;18295:66;18288:5;18285:77;18282:103;;18365:18;;:::i;:::-;-1:-1:-1;18412:1:62;18401:13;;18225:195::o;18425:184::-;18477:77;18474:1;18467:88;18574:4;18571:1;18564:15;18598:4;18595:1;18588:15;19773:251;19843:6;19896:2;19884:9;19875:7;19871:23;19867:32;19864:52;;;19912:1;19909;19902:12;19864:52;19944:9;19938:16;19963:31;19988:5;19963:31;:::i;20029:545::-;20131:2;20126:3;20123:11;20120:448;;;20167:1;20192:5;20188:2;20181:17;20237:4;20233:2;20223:19;20307:2;20295:10;20291:19;20288:1;20284:27;20278:4;20274:38;20343:4;20331:10;20328:20;20325:47;;;-1:-1:-1;20366:4:62;20325:47;20421:2;20416:3;20412:12;20409:1;20405:20;20399:4;20395:31;20385:41;;20476:82;20494:2;20487:5;20484:13;20476:82;;;20539:17;;;20520:1;20509:13;20476:82;;;20480:3;;;20029:545;;;:::o;20810:1325::-;20934:18;20929:3;20926:27;20923:53;;;20956:18;;:::i;:::-;20985:94;21075:3;21035:38;21067:4;21061:11;21035:38;:::i;:::-;21029:4;20985:94;:::i;:::-;21105:1;21130:2;21125:3;21122:11;21147:1;21142:735;;;;21921:1;21938:3;21935:93;;;-1:-1:-1;21994:19:62;;;21981:33;21935:93;20716:66;20707:1;20703:11;;;20699:84;20695:89;20685:100;20791:1;20787:11;;;20682:117;22041:78;;21115:1014;;21142:735;14603:1;14596:14;;;14640:4;14627:18;;21187:66;21178:76;;;21338:9;21360:229;21374:7;21371:1;21368:14;21360:229;;;21463:19;;;21450:33;21435:49;;21570:4;21555:20;;;;21523:1;21511:14;;;;21390:12;21360:229;;;21364:3;21617;21608:7;21605:16;21602:219;;;21737:66;21731:3;21725;21722:1;21718:11;21714:21;21710:94;21706:99;21693:9;21688:3;21684:19;21671:33;21667:139;21659:6;21652:155;21602:219;;;21864:1;21858:3;21855:1;21851:11;21847:19;21841:4;21834:33;21115:1014;;20810:1325;;;:::o;22140:645::-;22355:2;22344:9;22337:21;22394:6;22389:2;22378:9;22374:18;22367:34;22452:6;22444;22438:3;22427:9;22423:19;22410:49;22509:1;22503:3;22494:6;22483:9;22479:22;22475:32;22468:43;22318:4;22638:3;22568:66;22563:2;22555:6;22551:15;22547:88;22536:9;22532:104;22528:114;22520:122;;22692:42;22684:6;22680:55;22673:4;22662:9;22658:20;22651:85;22772:6;22767:2;22756:9;22752:18;22745:34;22140:645;;;;;;;:::o;22790:338::-;22977:42;22969:6;22965:55;22954:9;22947:74;23057:2;23052;23041:9;23037:18;23030:30;22928:4;23077:45;23118:2;23107:9;23103:18;23095:6;23077:45;:::i;23133:1471::-;23259:3;23253:10;23286:18;23278:6;23275:30;23272:56;;;23308:18;;:::i;:::-;23337:97;23427:6;23387:38;23419:4;23413:11;23387:38;:::i;:::-;23381:4;23337:97;:::i;:::-;23489:4;;23553:2;23542:14;;23570:1;23565:782;;;;24391:1;24408:6;24405:89;;;-1:-1:-1;24460:19:62;;;24454:26;24405:89;20716:66;20707:1;20703:11;;;20699:84;20695:89;20685:100;20791:1;20787:11;;;20682:117;24507:81;;23535:1063;;23565:782;14603:1;14596:14;;;14640:4;14627:18;;23613:66;23601:79;;;23778:236;23792:7;23789:1;23786:14;23778:236;;;23881:19;;;23875:26;23860:42;;23973:27;;;;23941:1;23929:14;;;;23808:19;;23778:236;;;23782:3;24042:6;24033:7;24030:19;24027:261;;;24103:19;;;24097:26;24204:66;24186:1;24182:14;;;24198:3;24178:24;24174:97;24170:102;24155:118;24140:134;;24027:261;-1:-1:-1;;;;;24334:1:62;24318:14;;;24314:22;24301:36;;-1:-1:-1;23133:1471:62:o;24609:291::-;24786:6;24775:9;24768:25;24829:2;24824;24813:9;24809:18;24802:30;24749:4;24849:45;24890:2;24879:9;24875:18;24867:6;24849:45;:::i;24905:128::-;24972:9;;;24993:11;;;24990:37;;;25007:18;;:::i;26468:125::-;26533:9;;;26554:10;;;26551:36;;;26567:18;;:::i;26598:496::-;26777:3;26815:6;26809:13;26831:66;26890:6;26885:3;26878:4;26870:6;26866:17;26831:66;:::i;:::-;26960:13;;26919:16;;;;26982:70;26960:13;26919:16;27029:4;27017:17;;26982:70;:::i;:::-;27068:20;;26598:496;-1:-1:-1;;;;26598:496:62:o;28164:512::-;28358:4;28387:42;28468:2;28460:6;28456:15;28445:9;28438:34;28520:2;28512:6;28508:15;28503:2;28492:9;28488:18;28481:43;;28560:6;28555:2;28544:9;28540:18;28533:34;28603:3;28598:2;28587:9;28583:18;28576:31;28624:46;28665:3;28654:9;28650:19;28642:6;28624:46;:::i;:::-;28616:54;28164:512;-1:-1:-1;;;;;;28164:512:62:o;28681:249::-;28750:6;28803:2;28791:9;28782:7;28778:23;28774:32;28771:52;;;28819:1;28816;28809:12;28771:52;28851:9;28845:16;28870:30;28894:5;28870:30;:::i",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "_fundIdCounter()": "1ec3e6c4",
    "admFees(uint256)": "995c8472",
    "approve(address,uint256)": "095ea7b3",
    "balanceOf(address)": "70a08231",
    "changeOpenRedeemTimestamp(uint256)": "10e55927",
    "closeInvestimentTimestamps(uint256)": "069af241",
    "createFund(string,string,address,address[],uint256,uint256,uint256,uint256,uint256)": "6c4f8442",
    "erc6551Implementation()": "b3dd12a2",
    "fundsAddresses(uint256)": "e7e1f1c7",
    "fundsAllowedTokens(uint256,uint256)": "6166cb93",
    "fundsNames(uint256)": "dae51d03",
    "fundsRegister()": "8d180195",
    "getApproved(uint256)": "081812fc",
    "getTotalProposalVotes(uint256)": "6a401f59",
    "getVoterBalance(uint256,address)": "6886078c",
    "initialAmounts(uint256)": "fb91fb42",
    "invest(uint256,uint256)": "d87aa643",
    "isApprovedForAll(address,address)": "e985e9c5",
    "name()": "06fdde03",
    "openInvestimentTimestamps(uint256)": "1c02225f",
    "openRedeemProposals(uint256)": "11c564b1",
    "openRedeemTimestamps(uint256)": "54d89c91",
    "owner()": "8da5cb5b",
    "ownerOf(uint256)": "6352211e",
    "percentageToWin()": "71bea662",
    "perfFees(uint256)": "0d0a01cf",
    "proposalIdCounter()": "92a84c5d",
    "proposalsVotes(uint256)": "50def910",
    "proposeNewOpenRedeemTimestamp(uint256,uint256,uint256,string)": "9559e6ba",
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
    "swapRouter()": "c31c9c07",
    "symbol()": "95d89b41",
    "tokenURI(uint256)": "c87b56dd",
    "transferFrom(address,address,uint256)": "23b872dd",
    "transferOwnership(address)": "f2fde38b",
    "vote(uint256,uint256)": "b384abef",
    "votes(uint256,address)": "d23254b4",
    "whiteListedTokens(address)": "d3c26383",
    "withdrawVotingTokens(uint256)": "6106f1ae"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_fundsRegister\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_erc6551Implementation\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_erc20Implementation\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_stablecoin\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"ERC721IncorrectOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ERC721InsufficientApproval\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"approver\",\"type\":\"address\"}],\"name\":\"ERC721InvalidApprover\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"ERC721InvalidOperator\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"ERC721InvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"ERC721InvalidReceiver\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"ERC721InvalidSender\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ERC721NonexistentToken\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"fundAddress\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"quotaTokenAddress\",\"type\":\"address\"}],\"name\":\"FundCreated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"fundAddress\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"investor\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"InvestimentMade\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"proposalId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"fundId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newTimestamp\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"NewOpenRedeemProposal\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"fundId\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newTimestamp\",\"type\":\"uint256\"}],\"name\":\"OpenRedeemTimestampChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"proposalId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"fundId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newTimestamp\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"ProposalAccepted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"fundAddress\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"investor\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"RedeemMade\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"proposalId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"voter\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Voted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"proposalId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"voter\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"VotingTokensWithdrawn\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"_fundIdCounter\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"admFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_proposalId\",\"type\":\"uint256\"}],\"name\":\"changeOpenRedeemTimestamp\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"closeInvestimentTimestamps\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_symbol\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"address[]\",\"name\":\"_allowedTokens\",\"type\":\"address[]\"},{\"internalType\":\"uint256\",\"name\":\"_admFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_perfFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_openInvestiment\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_closeInvestiments\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_openRedeem\",\"type\":\"uint256\"}],\"name\":\"createFund\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"erc6551Implementation\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"fundsAddresses\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"fundsAllowedTokens\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"fundsNames\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"fundsRegister\",\"outputs\":[{\"internalType\":\"contract IERC6551Registry\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_proposalId\",\"type\":\"uint256\"}],\"name\":\"getTotalProposalVotes\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_proposalId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_voter\",\"type\":\"address\"}],\"name\":\"getVoterBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"initialAmounts\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"fundId\",\"type\":\"uint256\"}],\"name\":\"invest\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"openInvestimentTimestamps\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"openRedeemProposals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"fundId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"newTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"accepted\",\"type\":\"bool\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"openRedeemTimestamps\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"percentageToWin\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"perfFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"proposalIdCounter\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"proposalsVotes\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_fundId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_newTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_deadline\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"}],\"name\":\"proposeNewOpenRedeemTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"quotaTokenImplementation\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"quotasAddresses\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"fundId\",\"type\":\"uint256\"}],\"name\":\"redeemYield\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_token\",\"type\":\"address\"}],\"name\":\"removeWhiteListedToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_token\",\"type\":\"address\"}],\"name\":\"setWhiteListedToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"stablecoin\",\"outputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"swapRouter\",\"outputs\":[{\"internalType\":\"contract IV2SwapRouter\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_proposalId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"vote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"votes\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"whiteListedTokens\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_proposalId\",\"type\":\"uint256\"}],\"name\":\"withdrawVotingTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"ERC721IncorrectOwner(address,uint256,address)\":[{\"details\":\"Indicates an error related to the ownership over a particular token. Used in transfers.\",\"params\":{\"owner\":\"Address of the current owner of a token.\",\"sender\":\"Address whose tokens are being transferred.\",\"tokenId\":\"Identifier number of a token.\"}}],\"ERC721InsufficientApproval(address,uint256)\":[{\"details\":\"Indicates a failure with the `operator`\\u2019s approval. Used in transfers.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\",\"tokenId\":\"Identifier number of a token.\"}}],\"ERC721InvalidApprover(address)\":[{\"details\":\"Indicates a failure with the `approver` of a token to be approved. Used in approvals.\",\"params\":{\"approver\":\"Address initiating an approval operation.\"}}],\"ERC721InvalidOperator(address)\":[{\"details\":\"Indicates a failure with the `operator` to be approved. Used in approvals.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\"}}],\"ERC721InvalidOwner(address)\":[{\"details\":\"Indicates that an address can't be an owner. For example, `address(0)` is a forbidden owner in EIP-20. Used in balance queries.\",\"params\":{\"owner\":\"Address of the current owner of a token.\"}}],\"ERC721InvalidReceiver(address)\":[{\"details\":\"Indicates a failure with the token `receiver`. Used in transfers.\",\"params\":{\"receiver\":\"Address to which tokens are being transferred.\"}}],\"ERC721InvalidSender(address)\":[{\"details\":\"Indicates a failure with the token `sender`. Used in transfers.\",\"params\":{\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC721NonexistentToken(uint256)\":[{\"details\":\"Indicates a `tokenId` whose `owner` is the zero address.\",\"params\":{\"tokenId\":\"Identifier number of a token.\"}}],\"OwnableInvalidOwner(address)\":[{\"details\":\"The owner is not a valid owner account. (eg. `address(0)`)\"}],\"OwnableUnauthorizedAccount(address)\":[{\"details\":\"The caller account is not authorized to perform an operation.\"}]},\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when `owner` enables `approved` to manage the `tokenId` token.\"},\"ApprovalForAll(address,address,bool)\":{\"details\":\"Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `tokenId` token is transferred from `from` to `to`.\"}},\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/WhaleFinance.sol\":\"WhaleFinance\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin/=lib/openzeppelin-contracts/\",\":@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/\",\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":@upgradeable/=lib/openzeppelin-contracts-upgradeable/\",\":ds-test/=lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/openzeppelin-contracts/lib/forge-std/src/\",\":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts-upgradeable/contracts/access/OwnableUpgradeable.sol\":{\"keccak256\":\"0xc163fcf9bb10138631a9ba5564df1fa25db9adff73bd9ee868a8ae1858fe093a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9706d43a0124053d9880f6e31a59f31bc0a6a3dc1acd66ce0a16e1111658c5f6\",\"dweb:/ipfs/QmUFmfowzkRwGtDu36cXV9SPTBHJ3n7dG9xQiK5B28jTf2\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/token/ERC20/ERC20Upgradeable.sol\":{\"keccak256\":\"0x9a1766b1921bf91b3e61eb53c7a6e70725254befd4bdcbbcd3af40bd9f66856f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://29bf2fa41a172086a665c9738377b93655aa4b1ffda9fe839c8bdf646f185040\",\"dweb:/ipfs/QmeB21qDuo8WPQSrqXJbQmWHKsdeocGNSUWLhCwniVejrt\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/utils/ContextUpgradeable.sol\":{\"keccak256\":\"0x72d47aebad24c59f6e78d0c3e827440173419a333fd910a37fa1e532c98f7e4c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://dc8d1401a44d84ede55b6641d58f63f12a83aecb0816d577d947392b55a6b43b\",\"dweb:/ipfs/QmUskJ7JGzg17MAgRoZfZ3p7P9uucsgm2fKyXQvxdLThLE\"]},\"lib/openzeppelin-contracts/contracts/access/Ownable.sol\":{\"keccak256\":\"0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6\",\"dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/proxy/ERC1967/ERC1967Utils.sol\":{\"keccak256\":\"0x06a78f9b3ee3e6d0eb4e4cd635ba49960bea34cac1db8c0a27c75f2319f1fd65\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://547d21aa17f4f3f1a1a7edf7167beff8dd9496a0348d5588f15cc8a4b29d052a\",\"dweb:/ipfs/QmT16JtRQSWNpLo9W23jr6CzaMuTAcQcjJJcdRd8HLJ6cE\"]},\"lib/openzeppelin-contracts/contracts/proxy/Proxy.sol\":{\"keccak256\":\"0xc3f2ec76a3de8ed7a7007c46166f5550c72c7709e3fc7e8bb3111a7191cdedbd\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e73efb4c2ca655882dc237c6b4f234a9bd36d97159d8fcaa837eb01171f726ac\",\"dweb:/ipfs/QmTNnnv7Gu5fs5G1ZMh7Fexp8N4XUs3XrNAngjcxgiss3e\"]},\"lib/openzeppelin-contracts/contracts/proxy/beacon/BeaconProxy.sol\":{\"keccak256\":\"0x387ebdcb365b8e620f26645d2b34a161cd39eedfb0219e8baff55630c5ae113c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://744ea187c195e31cb9201e63ca291fca9e623747f54f0ba390b366a6213b8964\",\"dweb:/ipfs/Qmc547qfV4sz65DC9B4okx1HvgxwUzJR7zTfKKbTzL3UQT\"]},\"lib/openzeppelin-contracts/contracts/proxy/beacon/IBeacon.sol\":{\"keccak256\":\"0xc59a78b07b44b2cf2e8ab4175fca91e8eca1eee2df7357b8d2a8833e5ea1f64c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5aa4f07e65444784c29cd7bfcc2341b34381e4e5b5da9f0c5bd00d7f430e66fa\",\"dweb:/ipfs/QmWRMh4Q9DpaU9GvsiXmDdoNYMyyece9if7hnfLz7uqzWM\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x13dd061770956c8489b80cfc89d9cdfc8ea2783d953691ea037a380731d52784\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ed37f0f86e7fe31659e48c3a2a5920a92dd7f13c85cf8991fb79fe5f01e08efd\",\"dweb:/ipfs/QmUtm9bQGvjr9hHGwkPWrbgFmVqzaJcxjkaYDex2oGsonS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x5ef46daa3b58ef2702279d514780316efaa952915ee1aa3396f041ee2982b0b4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2f8f2a76e23b02fc69e8cd24c3cb47da6c7af3a2d6c3a382f8ac25c6e094ade7\",\"dweb:/ipfs/QmPV4ZS4tPVv4mTCf9ejyZ1ai57EEibDRj7mN2ARDCLV5n\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0x7f7a26306c79a65fb8b3b6c757cd74660c532cd8a02e165488e30027dd34ca49\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d01e0b2b837ee2f628545e54d8715b49c7ef2befd08356c2e7f6c50dde8a1c22\",\"dweb:/ipfs/QmWBAn6y2D1xgftci97Z3qR9tQnkvwQpYwFwkTvDMvqU4i\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0x37d1aaaa5a2908a09e9dcf56a26ddf762ecf295afb5964695937344fc6802ce1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ed0bfc1b92153c5000e50f4021367b931bbe96372ac6facec3c4961b72053d02\",\"dweb:/ipfs/Qmbwp8VDerjS5SV1quwHH1oMXxPQ93fzfLVqJ2RCqbowGE\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x75a4ee64c68dbd5f38bddd06e664a64c8271b4caa554fb6f0607dfd672bb4bf3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0c4e6cb30d3601e2f7af5af09e265508147cb275a8dcd99d6f7363645cc56867\",\"dweb:/ipfs/QmNgFkoXNWoUbAyw71rr1sKQ95Rj2GfvYiWg79xEYDn2NY\"]},\"lib/openzeppelin-contracts/contracts/utils/StorageSlot.sol\":{\"keccak256\":\"0x32ba59b4b7299237c8ba56319110989d7978a039faf754793064e967e5894418\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1ae50c8b562427df610cc4540c9bf104acca7ef8e2dcae567ae7e52272281e9c\",\"dweb:/ipfs/QmTHiadFCSJUPpRjNegc5SahmeU8bAoY8i9Aq6tVscbcKR\"]},\"lib/openzeppelin-contracts/contracts/utils/Strings.sol\":{\"keccak256\":\"0x55f102ea785d8399c0e58d1108e2d289506dde18abc6db1b7f68c1f9f9bc5792\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e52e0a7765c943ef14e5bcf11e46e6139fa044be564881378349236bf2e3453\",\"dweb:/ipfs/QmZEeeXoFPW47amyP35gfzomF9DixqqTEPwzBakv6cZw6i\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0x9e8778b14317ba9e256c30a76fd6c32b960af621987f56069e1e819c77c6a133\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1777404f1dcd0fac188e55a288724ec3c67b45288e49cc64723e95e702b49ab8\",\"dweb:/ipfs/QmZFdC626GButBApwDUvvTnUzdinevC3B24d7yyh57XkiA\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x4296879f55019b23e135000eb36896057e7101fb7fb859c5ef690cf14643757b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://87b3541437c8c443ccd36795e56a338ed12855eec17f8da624511b8d1a7e14df\",\"dweb:/ipfs/QmeJQCtZrQjtJLr6u7ZHWeH3pBnjtLWzvRrKViAi7UZqxL\"]},\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0x005ec64c6313f0555d59e278f9a7a5ab2db5bdc72a027f255a37c327af1ec02d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ece9f0b9c8daca08c76b6b5405a6446b6f73b3a15fab7ff56e296cbd4a2c875\",\"dweb:/ipfs/QmQyRpyPRL5SQuAgj6SHmbir3foX65FJjbVTTQrA2EFg6L\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0x5f7e4076e175393767754387c962926577f1660dd9b810187b9002407656be72\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7d533a1c97cd43a57cd9c465f7ee8dd0e39ae93a8fb8ff8e5303a356b081cdcc\",\"dweb:/ipfs/QmVBEei6aTnvYNZp2CHYVNKyZS4q1KkjANfY39WVXZXVoT\"]},\"src/QuotaToken.sol\":{\"keccak256\":\"0x5b2b3f592431ca16dfa8efb4e01839b980ddc6f93a85bd1b54e2959fc59b7538\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d0beb5ec4005faaf47a4522ea5dd621c026b9bfbbf46198f2373c22f157a2799\",\"dweb:/ipfs/QmXtSnkTBnRaV1hFUFhZ4tURVkyUdt1tDdpNrzkv5jqoDo\"]},\"src/WhaleFinance.sol\":{\"keccak256\":\"0x8d7f4807457661a73356005131bfca4cee192c8f9d05d9ba355efed5262570e4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c609d9bb1e44a7218b69872216ce84795fed484407831beae0d3bb868ed8cb21\",\"dweb:/ipfs/QmUerFEee6vMhHy34Tw7wrJb4uk7T8XTQepcRh599KJLV1\"]},\"src/interface/IERC6551Registry.sol\":{\"keccak256\":\"0x3f9743c931db0bf287bd3ba762f1b2371af614e7eb3c2ce3318a49ed1a15411a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://30fb28b4c7f4290600bec069c8b7cf3d3e41c0cc02f0c8c7bb4b37a3489a6d39\",\"dweb:/ipfs/QmPVpGADyuytD9TgN5THddUXjigz34YQALAsBNk8z6SNxG\"]},\"src/interface/IV2SwapRouter.sol\":{\"keccak256\":\"0x45dcabcb2069580941b556ae67244e52369ab202a06179caac243eb48bed9603\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://70cfd95dbf82f56c097a20dc9a924e88b6c57c9139d6b64d8712d0845f1fba9e\",\"dweb:/ipfs/QmdnG1vP7cfHqxF6fKjJE3ADa5f3Q71LjKV758rgnvQ8D6\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.20+commit.a1b79de6"
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
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC721IncorrectOwner"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "type": "error",
          "name": "ERC721InsufficientApproval"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "approver",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC721InvalidApprover"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC721InvalidOperator"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC721InvalidOwner"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC721InvalidReceiver"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC721InvalidSender"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "type": "error",
          "name": "ERC721NonexistentToken"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "OwnableInvalidOwner"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "OwnableUnauthorizedAccount"
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
              "internalType": "uint256",
              "name": "proposalId",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "fundId",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "newTimestamp",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "NewOpenRedeemProposal",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "fundId",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "newTimestamp",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "OpenRedeemTimestampChanged",
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
              "internalType": "uint256",
              "name": "proposalId",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "fundId",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "newTimestamp",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "ProposalAccepted",
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
          "inputs": [
            {
              "internalType": "uint256",
              "name": "proposalId",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "voter",
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
          "name": "Voted",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "proposalId",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "voter",
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
          "name": "VotingTokensWithdrawn",
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
              "name": "_proposalId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "changeOpenRedeemTimestamp"
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
              "name": "_name",
              "type": "string"
            },
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
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "fundsNames",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
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
              "name": "_proposalId",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getTotalProposalVotes",
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
              "name": "_proposalId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_voter",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getVoterBalance",
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
          "name": "openRedeemProposals",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "fundId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "newTimestamp",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "accepted",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "name",
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
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "percentageToWin",
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
          "name": "proposalIdCounter",
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
          "name": "proposalsVotes",
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
              "name": "_fundId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_newTimestamp",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_deadline",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "_name",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "proposeNewOpenRedeemTimestamp",
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
          "name": "swapRouter",
          "outputs": [
            {
              "internalType": "contract IV2SwapRouter",
              "name": "",
              "type": "address"
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
              "internalType": "uint256",
              "name": "_proposalId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "vote"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "votes",
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
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_proposalId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "withdrawVotingTokens"
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
        ":@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/",
        ":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
        ":@upgradeable/=lib/openzeppelin-contracts-upgradeable/",
        ":ds-test/=lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/",
        ":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        ":forge-std/=lib/openzeppelin-contracts/lib/forge-std/src/",
        ":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/",
        ":openzeppelin-contracts/=lib/openzeppelin-contracts/"
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
        "keccak256": "0xc163fcf9bb10138631a9ba5564df1fa25db9adff73bd9ee868a8ae1858fe093a",
        "urls": [
          "bzz-raw://9706d43a0124053d9880f6e31a59f31bc0a6a3dc1acd66ce0a16e1111658c5f6",
          "dweb:/ipfs/QmUFmfowzkRwGtDu36cXV9SPTBHJ3n7dG9xQiK5B28jTf2"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts-upgradeable/contracts/proxy/utils/Initializable.sol": {
        "keccak256": "0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b",
        "urls": [
          "bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609",
          "dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts-upgradeable/contracts/token/ERC20/ERC20Upgradeable.sol": {
        "keccak256": "0x9a1766b1921bf91b3e61eb53c7a6e70725254befd4bdcbbcd3af40bd9f66856f",
        "urls": [
          "bzz-raw://29bf2fa41a172086a665c9738377b93655aa4b1ffda9fe839c8bdf646f185040",
          "dweb:/ipfs/QmeB21qDuo8WPQSrqXJbQmWHKsdeocGNSUWLhCwniVejrt"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts-upgradeable/contracts/utils/ContextUpgradeable.sol": {
        "keccak256": "0x72d47aebad24c59f6e78d0c3e827440173419a333fd910a37fa1e532c98f7e4c",
        "urls": [
          "bzz-raw://dc8d1401a44d84ede55b6641d58f63f12a83aecb0816d577d947392b55a6b43b",
          "dweb:/ipfs/QmUskJ7JGzg17MAgRoZfZ3p7P9uucsgm2fKyXQvxdLThLE"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/access/Ownable.sol": {
        "keccak256": "0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb",
        "urls": [
          "bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6",
          "dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": {
        "keccak256": "0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7",
        "urls": [
          "bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f",
          "dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/proxy/ERC1967/ERC1967Utils.sol": {
        "keccak256": "0x06a78f9b3ee3e6d0eb4e4cd635ba49960bea34cac1db8c0a27c75f2319f1fd65",
        "urls": [
          "bzz-raw://547d21aa17f4f3f1a1a7edf7167beff8dd9496a0348d5588f15cc8a4b29d052a",
          "dweb:/ipfs/QmT16JtRQSWNpLo9W23jr6CzaMuTAcQcjJJcdRd8HLJ6cE"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/proxy/Proxy.sol": {
        "keccak256": "0xc3f2ec76a3de8ed7a7007c46166f5550c72c7709e3fc7e8bb3111a7191cdedbd",
        "urls": [
          "bzz-raw://e73efb4c2ca655882dc237c6b4f234a9bd36d97159d8fcaa837eb01171f726ac",
          "dweb:/ipfs/QmTNnnv7Gu5fs5G1ZMh7Fexp8N4XUs3XrNAngjcxgiss3e"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/proxy/beacon/BeaconProxy.sol": {
        "keccak256": "0x387ebdcb365b8e620f26645d2b34a161cd39eedfb0219e8baff55630c5ae113c",
        "urls": [
          "bzz-raw://744ea187c195e31cb9201e63ca291fca9e623747f54f0ba390b366a6213b8964",
          "dweb:/ipfs/Qmc547qfV4sz65DC9B4okx1HvgxwUzJR7zTfKKbTzL3UQT"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/proxy/beacon/IBeacon.sol": {
        "keccak256": "0xc59a78b07b44b2cf2e8ab4175fca91e8eca1eee2df7357b8d2a8833e5ea1f64c",
        "urls": [
          "bzz-raw://5aa4f07e65444784c29cd7bfcc2341b34381e4e5b5da9f0c5bd00d7f430e66fa",
          "dweb:/ipfs/QmWRMh4Q9DpaU9GvsiXmDdoNYMyyece9if7hnfLz7uqzWM"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol": {
        "keccak256": "0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80",
        "urls": [
          "bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229",
          "dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
        "keccak256": "0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70",
        "urls": [
          "bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c",
          "dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
        "keccak256": "0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2",
        "urls": [
          "bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850",
          "dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol": {
        "keccak256": "0x13dd061770956c8489b80cfc89d9cdfc8ea2783d953691ea037a380731d52784",
        "urls": [
          "bzz-raw://ed37f0f86e7fe31659e48c3a2a5920a92dd7f13c85cf8991fb79fe5f01e08efd",
          "dweb:/ipfs/QmUtm9bQGvjr9hHGwkPWrbgFmVqzaJcxjkaYDex2oGsonS"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol": {
        "keccak256": "0x5ef46daa3b58ef2702279d514780316efaa952915ee1aa3396f041ee2982b0b4",
        "urls": [
          "bzz-raw://2f8f2a76e23b02fc69e8cd24c3cb47da6c7af3a2d6c3a382f8ac25c6e094ade7",
          "dweb:/ipfs/QmPV4ZS4tPVv4mTCf9ejyZ1ai57EEibDRj7mN2ARDCLV5n"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol": {
        "keccak256": "0x7f7a26306c79a65fb8b3b6c757cd74660c532cd8a02e165488e30027dd34ca49",
        "urls": [
          "bzz-raw://d01e0b2b837ee2f628545e54d8715b49c7ef2befd08356c2e7f6c50dde8a1c22",
          "dweb:/ipfs/QmWBAn6y2D1xgftci97Z3qR9tQnkvwQpYwFwkTvDMvqU4i"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Metadata.sol": {
        "keccak256": "0x37d1aaaa5a2908a09e9dcf56a26ddf762ecf295afb5964695937344fc6802ce1",
        "urls": [
          "bzz-raw://ed0bfc1b92153c5000e50f4021367b931bbe96372ac6facec3c4961b72053d02",
          "dweb:/ipfs/Qmbwp8VDerjS5SV1quwHH1oMXxPQ93fzfLVqJ2RCqbowGE"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
        "keccak256": "0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721",
        "urls": [
          "bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245",
          "dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
        "keccak256": "0x75a4ee64c68dbd5f38bddd06e664a64c8271b4caa554fb6f0607dfd672bb4bf3",
        "urls": [
          "bzz-raw://0c4e6cb30d3601e2f7af5af09e265508147cb275a8dcd99d6f7363645cc56867",
          "dweb:/ipfs/QmNgFkoXNWoUbAyw71rr1sKQ95Rj2GfvYiWg79xEYDn2NY"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/StorageSlot.sol": {
        "keccak256": "0x32ba59b4b7299237c8ba56319110989d7978a039faf754793064e967e5894418",
        "urls": [
          "bzz-raw://1ae50c8b562427df610cc4540c9bf104acca7ef8e2dcae567ae7e52272281e9c",
          "dweb:/ipfs/QmTHiadFCSJUPpRjNegc5SahmeU8bAoY8i9Aq6tVscbcKR"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Strings.sol": {
        "keccak256": "0x55f102ea785d8399c0e58d1108e2d289506dde18abc6db1b7f68c1f9f9bc5792",
        "urls": [
          "bzz-raw://6e52e0a7765c943ef14e5bcf11e46e6139fa044be564881378349236bf2e3453",
          "dweb:/ipfs/QmZEeeXoFPW47amyP35gfzomF9DixqqTEPwzBakv6cZw6i"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol": {
        "keccak256": "0x9e8778b14317ba9e256c30a76fd6c32b960af621987f56069e1e819c77c6a133",
        "urls": [
          "bzz-raw://1777404f1dcd0fac188e55a288724ec3c67b45288e49cc64723e95e702b49ab8",
          "dweb:/ipfs/QmZFdC626GButBApwDUvvTnUzdinevC3B24d7yyh57XkiA"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol": {
        "keccak256": "0x4296879f55019b23e135000eb36896057e7101fb7fb859c5ef690cf14643757b",
        "urls": [
          "bzz-raw://87b3541437c8c443ccd36795e56a338ed12855eec17f8da624511b8d1a7e14df",
          "dweb:/ipfs/QmeJQCtZrQjtJLr6u7ZHWeH3pBnjtLWzvRrKViAi7UZqxL"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/math/Math.sol": {
        "keccak256": "0x005ec64c6313f0555d59e278f9a7a5ab2db5bdc72a027f255a37c327af1ec02d",
        "urls": [
          "bzz-raw://4ece9f0b9c8daca08c76b6b5405a6446b6f73b3a15fab7ff56e296cbd4a2c875",
          "dweb:/ipfs/QmQyRpyPRL5SQuAgj6SHmbir3foX65FJjbVTTQrA2EFg6L"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol": {
        "keccak256": "0x5f7e4076e175393767754387c962926577f1660dd9b810187b9002407656be72",
        "urls": [
          "bzz-raw://7d533a1c97cd43a57cd9c465f7ee8dd0e39ae93a8fb8ff8e5303a356b081cdcc",
          "dweb:/ipfs/QmVBEei6aTnvYNZp2CHYVNKyZS4q1KkjANfY39WVXZXVoT"
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
        "keccak256": "0x8d7f4807457661a73356005131bfca4cee192c8f9d05d9ba355efed5262570e4",
        "urls": [
          "bzz-raw://c609d9bb1e44a7218b69872216ce84795fed484407831beae0d3bb868ed8cb21",
          "dweb:/ipfs/QmUerFEee6vMhHy34Tw7wrJb4uk7T8XTQepcRh599KJLV1"
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
      },
      "src/interface/IV2SwapRouter.sol": {
        "keccak256": "0x45dcabcb2069580941b556ae67244e52369ab202a06179caac243eb48bed9603",
        "urls": [
          "bzz-raw://70cfd95dbf82f56c097a20dc9a924e88b6c57c9139d6b64d8712d0845f1fba9e",
          "dweb:/ipfs/QmdnG1vP7cfHqxF6fKjJE3ADa5f3Q71LjKV758rgnvQ8D6"
        ],
        "license": "GPL-2.0-or-later"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "src/WhaleFinance.sol",
    "id": 33633,
    "exportedSymbols": {
      "BeaconProxy": [
        1799
      ],
      "Context": [
        3963
      ],
      "ContextUpgradeable": [
        1103
      ],
      "ERC165": [
        4904
      ],
      "ERC1967Utils": [
        1705
      ],
      "ERC20": [
        2412
      ],
      "ERC20Upgradeable": [
        1065
      ],
      "ERC721": [
        3525
      ],
      "IBeacon": [
        1809
      ],
      "IERC165": [
        4916
      ],
      "IERC20": [
        2490
      ],
      "IERC20Errors": [
        1307
      ],
      "IERC20Metadata": [
        2516
      ],
      "IERC6551Registry": [
        33726
      ],
      "IERC721": [
        3642
      ],
      "IERC721Errors": [
        1355
      ],
      "IERC721Metadata": [
        3688
      ],
      "IERC721Receiver": [
        3660
      ],
      "IV2SwapRouter": [
        33763
      ],
      "Initializable": [
        448
      ],
      "OpenRedeemProposal": [
        32674
      ],
      "Ownable": [
        1251
      ],
      "OwnableUpgradeable": [
        194
      ],
      "Proxy": [
        1741
      ],
      "QuotaToken": [
        32429
      ],
      "Strings": [
        4431
      ],
      "WhaleFinance": [
        33632
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:10740:56",
    "nodes": [
      {
        "id": 32653,
        "nodeType": "PragmaDirective",
        "src": "32:23:56",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".9"
        ]
      },
      {
        "id": 32654,
        "nodeType": "ImportDirective",
        "src": "57:57:56",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol",
        "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 33633,
        "sourceUnit": 3526,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 32655,
        "nodeType": "ImportDirective",
        "src": "115:52:56",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/access/Ownable.sol",
        "file": "@openzeppelin/contracts/access/Ownable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 33633,
        "sourceUnit": 1252,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 32656,
        "nodeType": "ImportDirective",
        "src": "168:42:56",
        "nodes": [],
        "absolutePath": "src/interface/IERC6551Registry.sol",
        "file": "./interface/IERC6551Registry.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 33633,
        "sourceUnit": 33727,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 32657,
        "nodeType": "ImportDirective",
        "src": "211:62:56",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/proxy/beacon/BeaconProxy.sol",
        "file": "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 33633,
        "sourceUnit": 1800,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 32658,
        "nodeType": "ImportDirective",
        "src": "274:58:56",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/proxy/beacon/IBeacon.sol",
        "file": "@openzeppelin/contracts/proxy/beacon/IBeacon.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 33633,
        "sourceUnit": 1810,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 32659,
        "nodeType": "ImportDirective",
        "src": "333:56:56",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol",
        "file": "@openzeppelin/contracts/token/ERC20/IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 33633,
        "sourceUnit": 2491,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 32660,
        "nodeType": "ImportDirective",
        "src": "390:55:56",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol",
        "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 33633,
        "sourceUnit": 2413,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 32661,
        "nodeType": "ImportDirective",
        "src": "446:62:56",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/proxy/beacon/BeaconProxy.sol",
        "file": "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 33633,
        "sourceUnit": 1800,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 32662,
        "nodeType": "ImportDirective",
        "src": "509:26:56",
        "nodes": [],
        "absolutePath": "src/QuotaToken.sol",
        "file": "./QuotaToken.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 33633,
        "sourceUnit": 32430,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 32663,
        "nodeType": "ImportDirective",
        "src": "536:39:56",
        "nodes": [],
        "absolutePath": "src/interface/IV2SwapRouter.sol",
        "file": "./interface/IV2SwapRouter.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 33633,
        "sourceUnit": 33764,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 32674,
        "nodeType": "StructDefinition",
        "src": "577:141:56",
        "nodes": [],
        "canonicalName": "OpenRedeemProposal",
        "members": [
          {
            "constant": false,
            "id": 32665,
            "mutability": "mutable",
            "name": "fundId",
            "nameLocation": "617:6:56",
            "nodeType": "VariableDeclaration",
            "scope": 32674,
            "src": "609:14:56",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 32664,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "609:7:56",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 32667,
            "mutability": "mutable",
            "name": "newTimestamp",
            "nameLocation": "637:12:56",
            "nodeType": "VariableDeclaration",
            "scope": 32674,
            "src": "629:20:56",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 32666,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "629:7:56",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 32669,
            "mutability": "mutable",
            "name": "deadline",
            "nameLocation": "663:8:56",
            "nodeType": "VariableDeclaration",
            "scope": 32674,
            "src": "655:16:56",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 32668,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "655:7:56",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 32671,
            "mutability": "mutable",
            "name": "accepted",
            "nameLocation": "682:8:56",
            "nodeType": "VariableDeclaration",
            "scope": 32674,
            "src": "677:13:56",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 32670,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "677:4:56",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 32673,
            "mutability": "mutable",
            "name": "name",
            "nameLocation": "703:4:56",
            "nodeType": "VariableDeclaration",
            "scope": 32674,
            "src": "696:11:56",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 32672,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "696:6:56",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "visibility": "internal"
          }
        ],
        "name": "OpenRedeemProposal",
        "nameLocation": "584:18:56",
        "scope": 33633,
        "visibility": "public"
      },
      {
        "id": 33632,
        "nodeType": "ContractDefinition",
        "src": "720:10052:56",
        "nodes": [
          {
            "id": 32680,
            "nodeType": "VariableDeclaration",
            "src": "807:29:56",
            "nodes": [],
            "constant": false,
            "functionSelector": "1ec3e6c4",
            "mutability": "mutable",
            "name": "_fundIdCounter",
            "nameLocation": "822:14:56",
            "scope": 33632,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 32679,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "807:7:56",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "id": 32683,
            "nodeType": "VariableDeclaration",
            "src": "842:37:56",
            "nodes": [],
            "constant": false,
            "functionSelector": "8d180195",
            "mutability": "mutable",
            "name": "fundsRegister",
            "nameLocation": "866:13:56",
            "scope": 33632,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IERC6551Registry_$33726",
              "typeString": "contract IERC6551Registry"
            },
            "typeName": {
              "id": 32682,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 32681,
                "name": "IERC6551Registry",
                "nameLocations": [
                  "842:16:56"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 33726,
                "src": "842:16:56"
              },
              "referencedDeclaration": 33726,
              "src": "842:16:56",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC6551Registry_$33726",
                "typeString": "contract IERC6551Registry"
              }
            },
            "visibility": "public"
          },
          {
            "id": 32685,
            "nodeType": "VariableDeclaration",
            "src": "885:36:56",
            "nodes": [],
            "constant": false,
            "functionSelector": "b3dd12a2",
            "mutability": "mutable",
            "name": "erc6551Implementation",
            "nameLocation": "900:21:56",
            "scope": 33632,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 32684,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "885:7:56",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 32687,
            "nodeType": "VariableDeclaration",
            "src": "927:39:56",
            "nodes": [],
            "constant": false,
            "functionSelector": "c2ae0e3e",
            "mutability": "mutable",
            "name": "quotaTokenImplementation",
            "nameLocation": "942:24:56",
            "scope": 33632,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 32686,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "927:7:56",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 32690,
            "nodeType": "VariableDeclaration",
            "src": "972:24:56",
            "nodes": [],
            "constant": false,
            "functionSelector": "e9cbd822",
            "mutability": "mutable",
            "name": "stablecoin",
            "nameLocation": "986:10:56",
            "scope": 33632,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IERC20_$2490",
              "typeString": "contract IERC20"
            },
            "typeName": {
              "id": 32689,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 32688,
                "name": "IERC20",
                "nameLocations": [
                  "972:6:56"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 2490,
                "src": "972:6:56"
              },
              "referencedDeclaration": 2490,
              "src": "972:6:56",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20_$2490",
                "typeString": "contract IERC20"
              }
            },
            "visibility": "public"
          },
          {
            "id": 32694,
            "nodeType": "VariableDeclaration",
            "src": "1002:49:56",
            "nodes": [],
            "constant": false,
            "functionSelector": "d3c26383",
            "mutability": "mutable",
            "name": "whiteListedTokens",
            "nameLocation": "1034:17:56",
            "scope": 33632,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
              "typeString": "mapping(address => bool)"
            },
            "typeName": {
              "id": 32693,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 32691,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1010:7:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1002:24:56",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 32692,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "1021:4:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 32696,
            "nodeType": "VariableDeclaration",
            "src": "1080:32:56",
            "nodes": [],
            "constant": false,
            "functionSelector": "92a84c5d",
            "mutability": "mutable",
            "name": "proposalIdCounter",
            "nameLocation": "1095:17:56",
            "scope": 33632,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 32695,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1080:7:56",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "id": 32699,
            "nodeType": "VariableDeclaration",
            "src": "1119:37:56",
            "nodes": [],
            "constant": false,
            "functionSelector": "71bea662",
            "mutability": "mutable",
            "name": "percentageToWin",
            "nameLocation": "1134:15:56",
            "scope": 33632,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 32697,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1119:7:56",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "35303030",
              "id": 32698,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1152:4:56",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_5000_by_1",
                "typeString": "int_const 5000"
              },
              "value": "5000"
            },
            "visibility": "public"
          },
          {
            "id": 32704,
            "nodeType": "VariableDeclaration",
            "src": "1188:65:56",
            "nodes": [],
            "constant": false,
            "functionSelector": "11c564b1",
            "mutability": "mutable",
            "name": "openRedeemProposals",
            "nameLocation": "1234:19:56",
            "scope": 33632,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_OpenRedeemProposal_$32674_storage_$",
              "typeString": "mapping(uint256 => struct OpenRedeemProposal)"
            },
            "typeName": {
              "id": 32703,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 32700,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1196:7:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "1188:38:56",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_OpenRedeemProposal_$32674_storage_$",
                "typeString": "mapping(uint256 => struct OpenRedeemProposal)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 32702,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 32701,
                  "name": "OpenRedeemProposal",
                  "nameLocations": [
                    "1207:18:56"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 32674,
                  "src": "1207:18:56"
                },
                "referencedDeclaration": 32674,
                "src": "1207:18:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_OpenRedeemProposal_$32674_storage_ptr",
                  "typeString": "struct OpenRedeemProposal"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 32708,
            "nodeType": "VariableDeclaration",
            "src": "1295:49:56",
            "nodes": [],
            "constant": false,
            "functionSelector": "50def910",
            "mutability": "mutable",
            "name": "proposalsVotes",
            "nameLocation": "1330:14:56",
            "scope": 33632,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 32707,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 32705,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1303:7:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "1295:27:56",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 32706,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1314:7:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 32714,
            "nodeType": "VariableDeclaration",
            "src": "1382:60:56",
            "nodes": [],
            "constant": false,
            "functionSelector": "d23254b4",
            "mutability": "mutable",
            "name": "votes",
            "nameLocation": "1437:5:56",
            "scope": 33632,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
              "typeString": "mapping(uint256 => mapping(address => uint256))"
            },
            "typeName": {
              "id": 32713,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 32709,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1390:7:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "1382:47:56",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(uint256 => mapping(address => uint256))"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 32712,
                "keyName": "",
                "keyNameLocation": "-1:-1:-1",
                "keyType": {
                  "id": 32710,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1409:7:56",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "1401:27:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueName": "",
                "valueNameLocation": "-1:-1:-1",
                "valueType": {
                  "id": 32711,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1420:7:56",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 32724,
            "nodeType": "EventDefinition",
            "src": "1483:115:56",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "7872e1c77192c9606c34929ab19a93de13eb47c39be0935b0ec2590e5b283a68",
            "name": "NewOpenRedeemProposal",
            "nameLocation": "1489:21:56",
            "parameters": {
              "id": 32723,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32716,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "proposalId",
                  "nameLocation": "1527:10:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 32724,
                  "src": "1511:26:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32715,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1511:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32718,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "fundId",
                  "nameLocation": "1555:6:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 32724,
                  "src": "1539:22:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32717,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1539:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32720,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "newTimestamp",
                  "nameLocation": "1571:12:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 32724,
                  "src": "1563:20:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32719,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1563:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32722,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "1592:4:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 32724,
                  "src": "1585:11:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32721,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1585:6:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1510:87:56"
            }
          },
          {
            "id": 32732,
            "nodeType": "EventDefinition",
            "src": "1603:79:56",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "1abe610cf2bf87e57dcc1181fcf5ac0934e843d8344ab9eed6e86c799f62585e",
            "name": "Voted",
            "nameLocation": "1609:5:56",
            "parameters": {
              "id": 32731,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32726,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "proposalId",
                  "nameLocation": "1631:10:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 32732,
                  "src": "1615:26:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32725,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1615:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32728,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "voter",
                  "nameLocation": "1659:5:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 32732,
                  "src": "1643:21:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32727,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1643:7:56",
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
                  "id": 32730,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "1674:6:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 32732,
                  "src": "1666:14:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32729,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1666:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1614:67:56"
            }
          },
          {
            "id": 32740,
            "nodeType": "EventDefinition",
            "src": "1687:95:56",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "78ce92e78a6f28ca5862db5f7d81d68af1a489eff5351221e1821810756bbedc",
            "name": "VotingTokensWithdrawn",
            "nameLocation": "1693:21:56",
            "parameters": {
              "id": 32739,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32734,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "proposalId",
                  "nameLocation": "1731:10:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 32740,
                  "src": "1715:26:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32733,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1715:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32736,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "voter",
                  "nameLocation": "1759:5:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 32740,
                  "src": "1743:21:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32735,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1743:7:56",
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
                  "id": 32738,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "1774:6:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 32740,
                  "src": "1766:14:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32737,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1766:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1714:67:56"
            }
          },
          {
            "id": 32750,
            "nodeType": "EventDefinition",
            "src": "1787:110:56",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "d2dfb9a4a769c0f7a3d960eeaa8fa513baeb85778759110391efb744a79a2e1b",
            "name": "ProposalAccepted",
            "nameLocation": "1793:16:56",
            "parameters": {
              "id": 32749,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32742,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "proposalId",
                  "nameLocation": "1826:10:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 32750,
                  "src": "1810:26:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32741,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1810:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32744,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "fundId",
                  "nameLocation": "1854:6:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 32750,
                  "src": "1838:22:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32743,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1838:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32746,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "newTimestamp",
                  "nameLocation": "1870:12:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 32750,
                  "src": "1862:20:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32745,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1862:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32748,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "1891:4:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 32750,
                  "src": "1884:11:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32747,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1884:6:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1809:87:56"
            }
          },
          {
            "id": 32756,
            "nodeType": "VariableDeclaration",
            "src": "1922:91:56",
            "nodes": [],
            "constant": false,
            "functionSelector": "c31c9c07",
            "mutability": "mutable",
            "name": "swapRouter",
            "nameLocation": "1943:10:56",
            "scope": 33632,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IV2SwapRouter_$33763",
              "typeString": "contract IV2SwapRouter"
            },
            "typeName": {
              "id": 32752,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 32751,
                "name": "IV2SwapRouter",
                "nameLocations": [
                  "1922:13:56"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 33763,
                "src": "1922:13:56"
              },
              "referencedDeclaration": 33763,
              "src": "1922:13:56",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IV2SwapRouter_$33763",
                "typeString": "contract IV2SwapRouter"
              }
            },
            "value": {
              "arguments": [
                {
                  "hexValue": "307837393633633162643234453435313141306231346266313438463933653235353641466533433237",
                  "id": 32754,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "1970:42:56",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "value": "0x7963c1bd24E4511A0b14bf148F93e2556AFe3C27"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                ],
                "id": 32753,
                "name": "IV2SwapRouter",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 33763,
                "src": "1956:13:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_contract$_IV2SwapRouter_$33763_$",
                  "typeString": "type(contract IV2SwapRouter)"
                }
              },
              "id": 32755,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "1956:57:56",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IV2SwapRouter_$33763",
                "typeString": "contract IV2SwapRouter"
              }
            },
            "visibility": "public"
          },
          {
            "id": 32760,
            "nodeType": "VariableDeclaration",
            "src": "2048:49:56",
            "nodes": [],
            "constant": false,
            "functionSelector": "e7e1f1c7",
            "mutability": "mutable",
            "name": "fundsAddresses",
            "nameLocation": "2083:14:56",
            "scope": 33632,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
              "typeString": "mapping(uint256 => address)"
            },
            "typeName": {
              "id": 32759,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 32757,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "2056:7:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "2048:27:56",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                "typeString": "mapping(uint256 => address)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 32758,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "2067:7:56",
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
            "id": 32764,
            "nodeType": "VariableDeclaration",
            "src": "2103:44:56",
            "nodes": [],
            "constant": false,
            "functionSelector": "dae51d03",
            "mutability": "mutable",
            "name": "fundsNames",
            "nameLocation": "2137:10:56",
            "scope": 33632,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
              "typeString": "mapping(uint256 => string)"
            },
            "typeName": {
              "id": 32763,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 32761,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "2111:7:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "2103:26:56",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                "typeString": "mapping(uint256 => string)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 32762,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "2122:6:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 32768,
            "nodeType": "VariableDeclaration",
            "src": "2153:42:56",
            "nodes": [],
            "constant": false,
            "functionSelector": "995c8472",
            "mutability": "mutable",
            "name": "admFees",
            "nameLocation": "2188:7:56",
            "scope": 33632,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 32767,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 32765,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "2161:7:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "2153:27:56",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 32766,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "2172:7:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 32772,
            "nodeType": "VariableDeclaration",
            "src": "2201:43:56",
            "nodes": [],
            "constant": false,
            "functionSelector": "0d0a01cf",
            "mutability": "mutable",
            "name": "perfFees",
            "nameLocation": "2236:8:56",
            "scope": 33632,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 32771,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 32769,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "2209:7:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "2201:27:56",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 32770,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "2220:7:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 32776,
            "nodeType": "VariableDeclaration",
            "src": "2250:49:56",
            "nodes": [],
            "constant": false,
            "functionSelector": "fb91fb42",
            "mutability": "mutable",
            "name": "initialAmounts",
            "nameLocation": "2285:14:56",
            "scope": 33632,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 32775,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 32773,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "2258:7:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "2250:27:56",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 32774,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "2269:7:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 32780,
            "nodeType": "VariableDeclaration",
            "src": "2314:60:56",
            "nodes": [],
            "constant": false,
            "functionSelector": "1c02225f",
            "mutability": "mutable",
            "name": "openInvestimentTimestamps",
            "nameLocation": "2349:25:56",
            "scope": 33632,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 32779,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 32777,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "2322:7:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "2314:27:56",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 32778,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "2333:7:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 32784,
            "nodeType": "VariableDeclaration",
            "src": "2380:61:56",
            "nodes": [],
            "constant": false,
            "functionSelector": "069af241",
            "mutability": "mutable",
            "name": "closeInvestimentTimestamps",
            "nameLocation": "2415:26:56",
            "scope": 33632,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 32783,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 32781,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "2388:7:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "2380:27:56",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 32782,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "2399:7:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 32788,
            "nodeType": "VariableDeclaration",
            "src": "2447:55:56",
            "nodes": [],
            "constant": false,
            "functionSelector": "54d89c91",
            "mutability": "mutable",
            "name": "openRedeemTimestamps",
            "nameLocation": "2482:20:56",
            "scope": 33632,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 32787,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 32785,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "2455:7:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "2447:27:56",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 32786,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "2466:7:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 32793,
            "nodeType": "VariableDeclaration",
            "src": "2508:55:56",
            "nodes": [],
            "constant": false,
            "functionSelector": "6166cb93",
            "mutability": "mutable",
            "name": "fundsAllowedTokens",
            "nameLocation": "2545:18:56",
            "scope": 33632,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_array$_t_address_$dyn_storage_$",
              "typeString": "mapping(uint256 => address[])"
            },
            "typeName": {
              "id": 32792,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 32789,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "2516:7:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "2508:29:56",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_array$_t_address_$dyn_storage_$",
                "typeString": "mapping(uint256 => address[])"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "baseType": {
                  "id": 32790,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "2527:7:56",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "id": 32791,
                "nodeType": "ArrayTypeName",
                "src": "2527:9:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                  "typeString": "address[]"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 32797,
            "nodeType": "VariableDeclaration",
            "src": "2569:50:56",
            "nodes": [],
            "constant": false,
            "functionSelector": "4835a6be",
            "mutability": "mutable",
            "name": "quotasAddresses",
            "nameLocation": "2604:15:56",
            "scope": 33632,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
              "typeString": "mapping(uint256 => address)"
            },
            "typeName": {
              "id": 32796,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 32794,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "2577:7:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "2569:27:56",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                "typeString": "mapping(uint256 => address)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 32795,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "2588:7:56",
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
            "id": 32803,
            "nodeType": "EventDefinition",
            "src": "2639:82:56",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "9de2be681a220396ec1518a4ecd6c853a760e34fb9174e9213d7aa5a8b12f379",
            "name": "FundCreated",
            "nameLocation": "2645:11:56",
            "parameters": {
              "id": 32802,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32799,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "fundAddress",
                  "nameLocation": "2673:11:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 32803,
                  "src": "2657:27:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32798,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2657:7:56",
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
                  "id": 32801,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "quotaTokenAddress",
                  "nameLocation": "2702:17:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 32803,
                  "src": "2686:33:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32800,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2686:7:56",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2656:64:56"
            }
          },
          {
            "id": 32811,
            "nodeType": "EventDefinition",
            "src": "2726:93:56",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "15bcca398c35efcf80f9148394b3ff1b358089610b2e18b315a3a18050a50942",
            "name": "InvestimentMade",
            "nameLocation": "2732:15:56",
            "parameters": {
              "id": 32810,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32805,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "fundAddress",
                  "nameLocation": "2764:11:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 32811,
                  "src": "2748:27:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32804,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2748:7:56",
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
                  "id": 32807,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "investor",
                  "nameLocation": "2793:8:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 32811,
                  "src": "2777:24:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32806,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2777:7:56",
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
                  "id": 32809,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "2811:6:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 32811,
                  "src": "2803:14:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32808,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2803:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2747:71:56"
            }
          },
          {
            "id": 32819,
            "nodeType": "EventDefinition",
            "src": "2824:88:56",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "6c9b4e508889a1ad47d9f443fa4a922856051bb1cc015e2048740e560e0f46f1",
            "name": "RedeemMade",
            "nameLocation": "2830:10:56",
            "parameters": {
              "id": 32818,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32813,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "fundAddress",
                  "nameLocation": "2857:11:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 32819,
                  "src": "2841:27:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32812,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2841:7:56",
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
                  "id": 32815,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "investor",
                  "nameLocation": "2886:8:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 32819,
                  "src": "2870:24:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32814,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2870:7:56",
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
                  "id": 32817,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "2904:6:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 32819,
                  "src": "2896:14:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32816,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2896:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2840:71:56"
            }
          },
          {
            "id": 32825,
            "nodeType": "EventDefinition",
            "src": "2917:79:56",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "79c7ab326b4928a04c7cebcf95cd0339dec08bce45597d98c61c16843de9d4e0",
            "name": "OpenRedeemTimestampChanged",
            "nameLocation": "2923:26:56",
            "parameters": {
              "id": 32824,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32821,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "fundId",
                  "nameLocation": "2966:6:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 32825,
                  "src": "2950:22:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32820,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2950:7:56",
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
                  "id": 32823,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "newTimestamp",
                  "nameLocation": "2982:12:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 32825,
                  "src": "2974:20:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32822,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2974:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2949:46:56"
            }
          },
          {
            "id": 32865,
            "nodeType": "FunctionDefinition",
            "src": "3003:418:56",
            "nodes": [],
            "body": {
              "id": 32864,
              "nodeType": "Block",
              "src": "3175:246:56",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 32848,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 32844,
                      "name": "fundsRegister",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32683,
                      "src": "3185:13:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC6551Registry_$33726",
                        "typeString": "contract IERC6551Registry"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 32846,
                          "name": "_fundsRegister",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32827,
                          "src": "3218:14:56",
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
                        "id": 32845,
                        "name": "IERC6551Registry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33726,
                        "src": "3201:16:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IERC6551Registry_$33726_$",
                          "typeString": "type(contract IERC6551Registry)"
                        }
                      },
                      "id": 32847,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3201:32:56",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC6551Registry_$33726",
                        "typeString": "contract IERC6551Registry"
                      }
                    },
                    "src": "3185:48:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC6551Registry_$33726",
                      "typeString": "contract IERC6551Registry"
                    }
                  },
                  "id": 32849,
                  "nodeType": "ExpressionStatement",
                  "src": "3185:48:56"
                },
                {
                  "expression": {
                    "id": 32852,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 32850,
                      "name": "erc6551Implementation",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32685,
                      "src": "3243:21:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 32851,
                      "name": "_erc6551Implementation",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32829,
                      "src": "3267:22:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3243:46:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 32853,
                  "nodeType": "ExpressionStatement",
                  "src": "3243:46:56"
                },
                {
                  "expression": {
                    "id": 32858,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 32854,
                      "name": "stablecoin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32690,
                      "src": "3325:10:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$2490",
                        "typeString": "contract IERC20"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 32856,
                          "name": "_stablecoin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32833,
                          "src": "3345:11:56",
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
                        "id": 32855,
                        "name": "IERC20",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2490,
                        "src": "3338:6:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IERC20_$2490_$",
                          "typeString": "type(contract IERC20)"
                        }
                      },
                      "id": 32857,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3338:19:56",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$2490",
                        "typeString": "contract IERC20"
                      }
                    },
                    "src": "3325:32:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$2490",
                      "typeString": "contract IERC20"
                    }
                  },
                  "id": 32859,
                  "nodeType": "ExpressionStatement",
                  "src": "3325:32:56"
                },
                {
                  "expression": {
                    "id": 32862,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 32860,
                      "name": "quotaTokenImplementation",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32687,
                      "src": "3367:24:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 32861,
                      "name": "_erc20Implementation",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32831,
                      "src": "3394:20:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3367:47:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 32863,
                  "nodeType": "ExpressionStatement",
                  "src": "3367:47:56"
                }
              ]
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 32836,
                      "name": "_msgSender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3953,
                      "src": "3130:10:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                        "typeString": "function () view returns (address)"
                      }
                    },
                    "id": 32837,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3130:12:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 32838,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 32835,
                  "name": "Ownable",
                  "nameLocations": [
                    "3122:7:56"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1251,
                  "src": "3122:7:56"
                },
                "nodeType": "ModifierInvocation",
                "src": "3122:21:56"
              },
              {
                "arguments": [
                  {
                    "hexValue": "5768616c6546696e616e6365",
                    "id": 32840,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3151:14:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_36d5dd5a4186d103fb1ce9b72a8b2d8dc5911f6937e75889ddd2c3eb6a256aec",
                      "typeString": "literal_string \"WhaleFinance\""
                    },
                    "value": "WhaleFinance"
                  },
                  {
                    "hexValue": "574649",
                    "id": 32841,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3167:5:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_a90f0d197d4d9bfc62012217276183920e69c6beadea14224c52a486126dbdee",
                      "typeString": "literal_string \"WFI\""
                    },
                    "value": "WFI"
                  }
                ],
                "id": 32842,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 32839,
                  "name": "ERC721",
                  "nameLocations": [
                    "3144:6:56"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 3525,
                  "src": "3144:6:56"
                },
                "nodeType": "ModifierInvocation",
                "src": "3144:29:56"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 32834,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32827,
                  "mutability": "mutable",
                  "name": "_fundsRegister",
                  "nameLocation": "3023:14:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 32865,
                  "src": "3015:22:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32826,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3015:7:56",
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
                  "id": 32829,
                  "mutability": "mutable",
                  "name": "_erc6551Implementation",
                  "nameLocation": "3047:22:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 32865,
                  "src": "3039:30:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32828,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3039:7:56",
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
                  "id": 32831,
                  "mutability": "mutable",
                  "name": "_erc20Implementation",
                  "nameLocation": "3079:20:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 32865,
                  "src": "3071:28:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32830,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3071:7:56",
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
                  "id": 32833,
                  "mutability": "mutable",
                  "name": "_stablecoin",
                  "nameLocation": "3109:11:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 32865,
                  "src": "3101:19:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32832,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3101:7:56",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3014:107:56"
            },
            "returnParameters": {
              "id": 32843,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3175:0:56"
            },
            "scope": 33632,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 33042,
            "nodeType": "FunctionDefinition",
            "src": "3427:1747:56",
            "nodes": [],
            "body": {
              "id": 33041,
              "nodeType": "Block",
              "src": "3716:1458:56",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    32890
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 32890,
                      "mutability": "mutable",
                      "name": "fundId",
                      "nameLocation": "3743:6:56",
                      "nodeType": "VariableDeclaration",
                      "scope": 33041,
                      "src": "3735:14:56",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 32889,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3735:7:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 32892,
                  "initialValue": {
                    "id": 32891,
                    "name": "_fundIdCounter",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 32680,
                    "src": "3752:14:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3735:31:56"
                },
                {
                  "expression": {
                    "id": 32894,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "3776:16:56",
                    "subExpression": {
                      "id": 32893,
                      "name": "_fundIdCounter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32680,
                      "src": "3776:14:56",
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
                  "id": 32895,
                  "nodeType": "ExpressionStatement",
                  "src": "3776:16:56"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 32897,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32871,
                        "src": "3808:3:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 32898,
                        "name": "fundId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32890,
                        "src": "3813:6:56",
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
                      "id": 32896,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3132,
                      "src": "3802:5:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 32899,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3802:18:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 32900,
                  "nodeType": "ExpressionStatement",
                  "src": "3802:18:56"
                },
                {
                  "body": {
                    "id": 32933,
                    "nodeType": "Block",
                    "src": "3882:228:56",
                    "statements": [
                      {
                        "condition": {
                          "id": 32917,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "3899:37:56",
                          "subExpression": {
                            "baseExpression": {
                              "id": 32912,
                              "name": "whiteListedTokens",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32694,
                              "src": "3900:17:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 32916,
                            "indexExpression": {
                              "baseExpression": {
                                "id": 32913,
                                "name": "_allowedTokens",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 32874,
                                "src": "3918:14:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              "id": 32915,
                              "indexExpression": {
                                "id": 32914,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 32902,
                                "src": "3933:1:56",
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
                              "src": "3918:17:56",
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
                            "src": "3900:36:56",
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
                        "id": 32923,
                        "nodeType": "IfStatement",
                        "src": "3896:139:56",
                        "trueBody": {
                          "id": 32922,
                          "nodeType": "Block",
                          "src": "3937:98:56",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "hexValue": "596f7520747269656420746f2063726561746520612066756e6420776974682061206e6f6e2077686974656c697374656420746f6b656e",
                                    "id": 32919,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "3962:57:56",
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
                                  "id": 32918,
                                  "name": "revert",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    -19,
                                    -19
                                  ],
                                  "referencedDeclaration": -19,
                                  "src": "3955:6:56",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                                    "typeString": "function (string memory) pure"
                                  }
                                },
                                "id": 32920,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3955:65:56",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 32921,
                              "nodeType": "ExpressionStatement",
                              "src": "3955:65:56"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "baseExpression": {
                                "id": 32928,
                                "name": "_allowedTokens",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 32874,
                                "src": "4081:14:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              "id": 32930,
                              "indexExpression": {
                                "id": 32929,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 32902,
                                "src": "4096:1:56",
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
                              "src": "4081:17:56",
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
                                "id": 32924,
                                "name": "fundsAllowedTokens",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 32793,
                                "src": "4049:18:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_array$_t_address_$dyn_storage_$",
                                  "typeString": "mapping(uint256 => address[] storage ref)"
                                }
                              },
                              "id": 32926,
                              "indexExpression": {
                                "id": 32925,
                                "name": "fundId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 32890,
                                "src": "4068:6:56",
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
                              "src": "4049:26:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                "typeString": "address[] storage ref"
                              }
                            },
                            "id": 32927,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4076:4:56",
                            "memberName": "push",
                            "nodeType": "MemberAccess",
                            "src": "4049:31:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                              "typeString": "function (address[] storage pointer,address)"
                            }
                          },
                          "id": 32931,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4049:50:56",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 32932,
                        "nodeType": "ExpressionStatement",
                        "src": "4049:50:56"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 32908,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 32905,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32902,
                      "src": "3850:1:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 32906,
                        "name": "_allowedTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32874,
                        "src": "3854:14:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 32907,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3869:6:56",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "3854:21:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3850:25:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 32934,
                  "initializationExpression": {
                    "assignments": [
                      32902
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 32902,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "3843:1:56",
                        "nodeType": "VariableDeclaration",
                        "scope": 32934,
                        "src": "3835:9:56",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 32901,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3835:7:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 32904,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 32903,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3847:1:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3835:13:56"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 32910,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "3877:3:56",
                      "subExpression": {
                        "id": 32909,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32902,
                        "src": "3877:1:56",
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
                    "id": 32911,
                    "nodeType": "ExpressionStatement",
                    "src": "3877:3:56"
                  },
                  "nodeType": "ForStatement",
                  "src": "3831:279:56"
                },
                {
                  "assignments": [
                    32936
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 32936,
                      "mutability": "mutable",
                      "name": "createdFundAddress",
                      "nameLocation": "4128:18:56",
                      "nodeType": "VariableDeclaration",
                      "scope": 33041,
                      "src": "4120:26:56",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 32935,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "4120:7:56",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 32953,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 32941,
                            "name": "erc6551Implementation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32685,
                            "src": "4198:21:56",
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
                          "id": 32940,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4190:7:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 32939,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "4190:7:56",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 32942,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4190:30:56",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 32943,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -4,
                          "src": "4234:5:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 32944,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4240:7:56",
                        "memberName": "chainid",
                        "nodeType": "MemberAccess",
                        "src": "4234:13:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 32947,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "4269:4:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_WhaleFinance_$33632",
                              "typeString": "contract WhaleFinance"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_WhaleFinance_$33632",
                              "typeString": "contract WhaleFinance"
                            }
                          ],
                          "id": 32946,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4261:7:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 32945,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "4261:7:56",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 32948,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4261:13:56",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 32949,
                        "name": "fundId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32890,
                        "src": "4288:6:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "30",
                        "id": 32950,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4308:1:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "hexValue": "",
                        "id": 32951,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4323:2:56",
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
                        "id": 32937,
                        "name": "fundsRegister",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32683,
                        "src": "4149:13:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC6551Registry_$33726",
                          "typeString": "contract IERC6551Registry"
                        }
                      },
                      "id": 32938,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4163:13:56",
                      "memberName": "createAccount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33709,
                      "src": "4149:27:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$_t_address_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_address_$",
                        "typeString": "function (address,uint256,address,uint256,uint256,bytes memory) external returns (address)"
                      }
                    },
                    "id": 32952,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4149:186:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4120:215:56"
                },
                {
                  "expression": {
                    "id": 32958,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 32954,
                        "name": "fundsAddresses",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32760,
                        "src": "4345:14:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 32956,
                      "indexExpression": {
                        "id": 32955,
                        "name": "fundId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32890,
                        "src": "4360:6:56",
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
                      "src": "4345:22:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 32957,
                      "name": "createdFundAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32936,
                      "src": "4370:18:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "4345:43:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 32959,
                  "nodeType": "ExpressionStatement",
                  "src": "4345:43:56"
                },
                {
                  "expression": {
                    "id": 32964,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 32960,
                        "name": "fundsNames",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32764,
                        "src": "4398:10:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                          "typeString": "mapping(uint256 => string storage ref)"
                        }
                      },
                      "id": 32962,
                      "indexExpression": {
                        "id": 32961,
                        "name": "fundId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32890,
                        "src": "4409:6:56",
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
                      "src": "4398:18:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 32963,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32867,
                      "src": "4419:5:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_calldata_ptr",
                        "typeString": "string calldata"
                      }
                    },
                    "src": "4398:26:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 32965,
                  "nodeType": "ExpressionStatement",
                  "src": "4398:26:56"
                },
                {
                  "expression": {
                    "id": 32970,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 32966,
                        "name": "admFees",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32768,
                        "src": "4434:7:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 32968,
                      "indexExpression": {
                        "id": 32967,
                        "name": "fundId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32890,
                        "src": "4442:6:56",
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
                      "src": "4434:15:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 32969,
                      "name": "_admFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32876,
                      "src": "4452:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4434:25:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 32971,
                  "nodeType": "ExpressionStatement",
                  "src": "4434:25:56"
                },
                {
                  "expression": {
                    "id": 32976,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 32972,
                        "name": "perfFees",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32772,
                        "src": "4522:8:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 32974,
                      "indexExpression": {
                        "id": 32973,
                        "name": "fundId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32890,
                        "src": "4531:6:56",
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
                      "src": "4522:16:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 32975,
                      "name": "_perfFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32878,
                      "src": "4541:8:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4522:27:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 32977,
                  "nodeType": "ExpressionStatement",
                  "src": "4522:27:56"
                },
                {
                  "expression": {
                    "id": 32982,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 32978,
                        "name": "openInvestimentTimestamps",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32780,
                        "src": "4612:25:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 32980,
                      "indexExpression": {
                        "id": 32979,
                        "name": "fundId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32890,
                        "src": "4638:6:56",
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
                      "src": "4612:33:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 32981,
                      "name": "_openInvestiment",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32880,
                      "src": "4648:16:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4612:52:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 32983,
                  "nodeType": "ExpressionStatement",
                  "src": "4612:52:56"
                },
                {
                  "expression": {
                    "id": 32988,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 32984,
                        "name": "closeInvestimentTimestamps",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32784,
                        "src": "4674:26:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 32986,
                      "indexExpression": {
                        "id": 32985,
                        "name": "fundId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32890,
                        "src": "4701:6:56",
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
                      "src": "4674:34:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 32987,
                      "name": "_closeInvestiments",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32882,
                      "src": "4711:18:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4674:55:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 32989,
                  "nodeType": "ExpressionStatement",
                  "src": "4674:55:56"
                },
                {
                  "expression": {
                    "id": 32994,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 32990,
                        "name": "openRedeemTimestamps",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32788,
                        "src": "4739:20:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 32992,
                      "indexExpression": {
                        "id": 32991,
                        "name": "fundId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32890,
                        "src": "4760:6:56",
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
                      "src": "4739:28:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 32993,
                      "name": "_openRedeem",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32884,
                      "src": "4770:11:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4739:42:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 32995,
                  "nodeType": "ExpressionStatement",
                  "src": "4739:42:56"
                },
                {
                  "assignments": [
                    32998
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 32998,
                      "mutability": "mutable",
                      "name": "newQuotaTokenAddress",
                      "nameLocation": "4803:20:56",
                      "nodeType": "VariableDeclaration",
                      "scope": 33041,
                      "src": "4791:32:56",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_BeaconProxy_$1799",
                        "typeString": "contract BeaconProxy"
                      },
                      "typeName": {
                        "id": 32997,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 32996,
                          "name": "BeaconProxy",
                          "nameLocations": [
                            "4791:11:56"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 1799,
                          "src": "4791:11:56"
                        },
                        "referencedDeclaration": 1799,
                        "src": "4791:11:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_BeaconProxy_$1799",
                          "typeString": "contract BeaconProxy"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 33021,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 33002,
                        "name": "quotaTokenImplementation",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32687,
                        "src": "4842:24:56",
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
                                        "id": 33008,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "4922:1:56",
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
                                      "id": 33007,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "4914:7:56",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_address_$",
                                        "typeString": "type(address)"
                                      },
                                      "typeName": {
                                        "id": 33006,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4914:7:56",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 33009,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "4914:10:56",
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
                                  "id": 33005,
                                  "name": "QuotaToken",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 32429,
                                  "src": "4903:10:56",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_QuotaToken_$32429_$",
                                    "typeString": "type(contract QuotaToken)"
                                  }
                                },
                                "id": 33010,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4903:22:56",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_QuotaToken_$32429",
                                  "typeString": "contract QuotaToken"
                                }
                              },
                              "id": 33011,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4926:10:56",
                              "memberName": "initialize",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 32367,
                              "src": "4903:33:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_uint256_$returns$__$",
                                "typeString": "function (string memory,address,uint256) external"
                              }
                            },
                            "id": 33012,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "4937:8:56",
                            "memberName": "selector",
                            "nodeType": "MemberAccess",
                            "src": "4903:42:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          {
                            "id": 33013,
                            "name": "_symbol",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32869,
                            "src": "4959:7:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_calldata_ptr",
                              "typeString": "string calldata"
                            }
                          },
                          {
                            "arguments": [
                              {
                                "id": 33016,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "4976:4:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_WhaleFinance_$33632",
                                  "typeString": "contract WhaleFinance"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_WhaleFinance_$33632",
                                  "typeString": "contract WhaleFinance"
                                }
                              ],
                              "id": 33015,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4968:7:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 33014,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "4968:7:56",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 33017,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4968:13:56",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 33018,
                            "name": "_openInvestiment",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32880,
                            "src": "4983:16:56",
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
                            "id": 33003,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "4880:3:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 33004,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "4884:18:56",
                          "memberName": "encodeWithSelector",
                          "nodeType": "MemberAccess",
                          "src": "4880:22:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes4) pure returns (bytes memory)"
                          }
                        },
                        "id": 33019,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4880:120:56",
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
                      "id": 33001,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "4826:15:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_creation_payable$_t_address_$_t_bytes_memory_ptr_$returns$_t_contract$_BeaconProxy_$1799_$",
                        "typeString": "function (address,bytes memory) payable returns (contract BeaconProxy)"
                      },
                      "typeName": {
                        "id": 33000,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 32999,
                          "name": "BeaconProxy",
                          "nameLocations": [
                            "4830:11:56"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 1799,
                          "src": "4830:11:56"
                        },
                        "referencedDeclaration": 1799,
                        "src": "4830:11:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_BeaconProxy_$1799",
                          "typeString": "contract BeaconProxy"
                        }
                      }
                    },
                    "id": 33020,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4826:175:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_BeaconProxy_$1799",
                      "typeString": "contract BeaconProxy"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4791:210:56"
                },
                {
                  "expression": {
                    "id": 33029,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 33022,
                        "name": "quotasAddresses",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32797,
                        "src": "5012:15:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 33024,
                      "indexExpression": {
                        "id": 33023,
                        "name": "fundId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32890,
                        "src": "5028:6:56",
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
                      "src": "5012:23:56",
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
                          "id": 33027,
                          "name": "newQuotaTokenAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32998,
                          "src": "5046:20:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_BeaconProxy_$1799",
                            "typeString": "contract BeaconProxy"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_BeaconProxy_$1799",
                            "typeString": "contract BeaconProxy"
                          }
                        ],
                        "id": 33026,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5038:7:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 33025,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "5038:7:56",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 33028,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5038:29:56",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5012:55:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 33030,
                  "nodeType": "ExpressionStatement",
                  "src": "5012:55:56"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 33032,
                        "name": "createdFundAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32936,
                        "src": "5094:18:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 33035,
                            "name": "newQuotaTokenAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32998,
                            "src": "5122:20:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_BeaconProxy_$1799",
                              "typeString": "contract BeaconProxy"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_BeaconProxy_$1799",
                              "typeString": "contract BeaconProxy"
                            }
                          ],
                          "id": 33034,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "5114:7:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 33033,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "5114:7:56",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 33036,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5114:29:56",
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
                      "id": 33031,
                      "name": "FundCreated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32803,
                      "src": "5082:11:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 33037,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5082:62:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33038,
                  "nodeType": "EmitStatement",
                  "src": "5077:67:56"
                },
                {
                  "expression": {
                    "id": 33039,
                    "name": "fundId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 32890,
                    "src": "5161:6:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 32888,
                  "id": 33040,
                  "nodeType": "Return",
                  "src": "5154:13:56"
                }
              ]
            },
            "functionSelector": "6c4f8442",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "createFund",
            "nameLocation": "3436:10:56",
            "parameters": {
              "id": 32885,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32867,
                  "mutability": "mutable",
                  "name": "_name",
                  "nameLocation": "3463:5:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 33042,
                  "src": "3447:21:56",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32866,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3447:6:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32869,
                  "mutability": "mutable",
                  "name": "_symbol",
                  "nameLocation": "3486:7:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 33042,
                  "src": "3470:23:56",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32868,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3470:6:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32871,
                  "mutability": "mutable",
                  "name": "_to",
                  "nameLocation": "3503:3:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 33042,
                  "src": "3495:11:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32870,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3495:7:56",
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
                  "id": 32874,
                  "mutability": "mutable",
                  "name": "_allowedTokens",
                  "nameLocation": "3525:14:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 33042,
                  "src": "3508:31:56",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32872,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3508:7:56",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 32873,
                    "nodeType": "ArrayTypeName",
                    "src": "3508:9:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32876,
                  "mutability": "mutable",
                  "name": "_admFee",
                  "nameLocation": "3570:7:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 33042,
                  "src": "3562:15:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32875,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3562:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32878,
                  "mutability": "mutable",
                  "name": "_perfFee",
                  "nameLocation": "3587:8:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 33042,
                  "src": "3579:16:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32877,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3579:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32880,
                  "mutability": "mutable",
                  "name": "_openInvestiment",
                  "nameLocation": "3605:16:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 33042,
                  "src": "3597:24:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32879,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3597:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32882,
                  "mutability": "mutable",
                  "name": "_closeInvestiments",
                  "nameLocation": "3631:18:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 33042,
                  "src": "3623:26:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32881,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3623:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32884,
                  "mutability": "mutable",
                  "name": "_openRedeem",
                  "nameLocation": "3659:11:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 33042,
                  "src": "3651:19:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32883,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3651:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3446:225:56"
            },
            "returnParameters": {
              "id": 32888,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32887,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 33042,
                  "src": "3708:7:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32886,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3708:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3707:9:56"
            },
            "scope": 33632,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 33157,
            "nodeType": "FunctionDefinition",
            "src": "5180:1021:56",
            "nodes": [],
            "body": {
              "id": 33156,
              "nodeType": "Block",
              "src": "5236:965:56",
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
                        "id": 33052,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 33050,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33044,
                          "src": "5254:7:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 33051,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5264:1:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "5254:11:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "596f75206e65656420746f20696e76657374206d6f7265207468616e2030",
                        "id": 33053,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5267:32:56",
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
                      "id": 33049,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "5246:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 33054,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5246:54:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33055,
                  "nodeType": "ExpressionStatement",
                  "src": "5246:54:56"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 33062,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 33057,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -4,
                            "src": "5318:5:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 33058,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5324:9:56",
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "src": "5318:15:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "baseExpression": {
                            "id": 33059,
                            "name": "openInvestimentTimestamps",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32780,
                            "src": "5337:25:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                              "typeString": "mapping(uint256 => uint256)"
                            }
                          },
                          "id": 33061,
                          "indexExpression": {
                            "id": 33060,
                            "name": "fundId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 33046,
                            "src": "5363:6:56",
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
                          "src": "5337:33:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5318:52:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "496e76657374696d656e74206973206e6f74206f70656e20796574",
                        "id": 33063,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5372:29:56",
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
                      "id": 33056,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "5310:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 33064,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5310:92:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33065,
                  "nodeType": "ExpressionStatement",
                  "src": "5310:92:56"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 33072,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 33067,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -4,
                            "src": "5420:5:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 33068,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5426:9:56",
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "src": "5420:15:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "baseExpression": {
                            "id": 33069,
                            "name": "closeInvestimentTimestamps",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32784,
                            "src": "5439:26:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                              "typeString": "mapping(uint256 => uint256)"
                            }
                          },
                          "id": 33071,
                          "indexExpression": {
                            "id": 33070,
                            "name": "fundId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 33046,
                            "src": "5466:6:56",
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
                          "src": "5439:34:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5420:53:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "496e76657374696d656e7420697320636c6f736564",
                        "id": 33073,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5475:23:56",
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
                      "id": 33066,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "5412:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 33074,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5412:87:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33075,
                  "nodeType": "ExpressionStatement",
                  "src": "5412:87:56"
                },
                {
                  "assignments": [
                    33077
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 33077,
                      "mutability": "mutable",
                      "name": "fundTargetAddress",
                      "nameLocation": "5518:17:56",
                      "nodeType": "VariableDeclaration",
                      "scope": 33156,
                      "src": "5510:25:56",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 33076,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "5510:7:56",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 33081,
                  "initialValue": {
                    "baseExpression": {
                      "id": 33078,
                      "name": "fundsAddresses",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32760,
                      "src": "5538:14:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                        "typeString": "mapping(uint256 => address)"
                      }
                    },
                    "id": 33080,
                    "indexExpression": {
                      "id": 33079,
                      "name": "fundId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33046,
                      "src": "5553:6:56",
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
                    "src": "5538:22:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5510:50:56"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 33088,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 33083,
                          "name": "fundTargetAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33077,
                          "src": "5578:17:56",
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
                              "id": 33086,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5607:1:56",
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
                            "id": 33085,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "5599:7:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 33084,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "5599:7:56",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 33087,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5599:10:56",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "5578:31:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "46756e64206e6f7420666f756e64",
                        "id": 33089,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5611:16:56",
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
                      "id": 33082,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "5570:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 33090,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5570:58:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33091,
                  "nodeType": "ExpressionStatement",
                  "src": "5570:58:56"
                },
                {
                  "assignments": [
                    33093
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 33093,
                      "mutability": "mutable",
                      "name": "managerAdmFee",
                      "nameLocation": "5647:13:56",
                      "nodeType": "VariableDeclaration",
                      "scope": 33156,
                      "src": "5639:21:56",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 33092,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5639:7:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 33101,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 33100,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 33098,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 33094,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33044,
                        "src": "5663:7:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "baseExpression": {
                          "id": 33095,
                          "name": "admFees",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32768,
                          "src": "5673:7:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                          }
                        },
                        "id": 33097,
                        "indexExpression": {
                          "id": 33096,
                          "name": "fundId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33046,
                          "src": "5681:6:56",
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
                        "src": "5673:15:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "5663:25:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "hexValue": "3130303030",
                      "id": 33099,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5691:5:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_10000_by_1",
                        "typeString": "int_const 10000"
                      },
                      "value": "10000"
                    },
                    "src": "5663:33:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5639:57:56"
                },
                {
                  "assignments": [
                    33103
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 33103,
                      "mutability": "mutable",
                      "name": "amountInvestor",
                      "nameLocation": "5714:14:56",
                      "nodeType": "VariableDeclaration",
                      "scope": 33156,
                      "src": "5706:22:56",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 33102,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5706:7:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 33107,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 33106,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 33104,
                      "name": "_amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33044,
                      "src": "5731:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 33105,
                      "name": "managerAdmFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33093,
                      "src": "5741:13:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5731:23:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5706:48:56"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 33111,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "5789:3:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 33112,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5793:6:56",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "5789:10:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 33113,
                        "name": "fundTargetAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33077,
                        "src": "5801:17:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 33114,
                        "name": "amountInvestor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33103,
                        "src": "5820:14:56",
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
                        "id": 33108,
                        "name": "stablecoin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32690,
                        "src": "5765:10:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$2490",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 33110,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5776:12:56",
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2489,
                      "src": "5765:23:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 33115,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5765:70:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 33116,
                  "nodeType": "ExpressionStatement",
                  "src": "5765:70:56"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 33120,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "5869:3:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 33121,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5873:6:56",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "5869:10:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 33123,
                            "name": "fundId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 33046,
                            "src": "5889:6:56",
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
                          "id": 33122,
                          "name": "ownerOf",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2658,
                          "src": "5881:7:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                            "typeString": "function (uint256) view returns (address)"
                          }
                        },
                        "id": 33124,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5881:15:56",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 33125,
                        "name": "managerAdmFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33093,
                        "src": "5898:13:56",
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
                        "id": 33117,
                        "name": "stablecoin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32690,
                        "src": "5845:10:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$2490",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 33119,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5856:12:56",
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2489,
                      "src": "5845:23:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 33126,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5845:67:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 33127,
                  "nodeType": "ExpressionStatement",
                  "src": "5845:67:56"
                },
                {
                  "expression": {
                    "id": 33132,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 33128,
                        "name": "initialAmounts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32776,
                        "src": "5952:14:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 33130,
                      "indexExpression": {
                        "id": 33129,
                        "name": "fundId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33046,
                        "src": "5967:6:56",
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
                      "src": "5952:22:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 33131,
                      "name": "amountInvestor",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33103,
                      "src": "5978:14:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5952:40:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 33133,
                  "nodeType": "ExpressionStatement",
                  "src": "5952:40:56"
                },
                {
                  "assignments": [
                    33135
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 33135,
                      "mutability": "mutable",
                      "name": "fundQuotaAddress",
                      "nameLocation": "6011:16:56",
                      "nodeType": "VariableDeclaration",
                      "scope": 33156,
                      "src": "6003:24:56",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 33134,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "6003:7:56",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 33139,
                  "initialValue": {
                    "baseExpression": {
                      "id": 33136,
                      "name": "quotasAddresses",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32797,
                      "src": "6030:15:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                        "typeString": "mapping(uint256 => address)"
                      }
                    },
                    "id": 33138,
                    "indexExpression": {
                      "id": 33137,
                      "name": "fundId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33046,
                      "src": "6046:6:56",
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
                    "src": "6030:23:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6003:50:56"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 33144,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "6097:3:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 33145,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6101:6:56",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "6097:10:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 33146,
                        "name": "amountInvestor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33103,
                        "src": "6109:14:56",
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
                            "id": 33141,
                            "name": "fundQuotaAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 33135,
                            "src": "6074:16:56",
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
                          "id": 33140,
                          "name": "QuotaToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32429,
                          "src": "6063:10:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_QuotaToken_$32429_$",
                            "typeString": "type(contract QuotaToken)"
                          }
                        },
                        "id": 33142,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6063:28:56",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_QuotaToken_$32429",
                          "typeString": "contract QuotaToken"
                        }
                      },
                      "id": 33143,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6092:4:56",
                      "memberName": "mint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32388,
                      "src": "6063:33:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256) external"
                      }
                    },
                    "id": 33147,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6063:61:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33148,
                  "nodeType": "ExpressionStatement",
                  "src": "6063:61:56"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 33150,
                        "name": "fundTargetAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33077,
                        "src": "6155:17:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 33151,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "6174:3:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 33152,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6178:6:56",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "6174:10:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 33153,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33044,
                        "src": "6186:7:56",
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
                      "id": 33149,
                      "name": "InvestimentMade",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32811,
                      "src": "6139:15:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 33154,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6139:55:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33155,
                  "nodeType": "EmitStatement",
                  "src": "6134:60:56"
                }
              ]
            },
            "functionSelector": "d87aa643",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "invest",
            "nameLocation": "5189:6:56",
            "parameters": {
              "id": 33047,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 33044,
                  "mutability": "mutable",
                  "name": "_amount",
                  "nameLocation": "5204:7:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 33157,
                  "src": "5196:15:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 33043,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5196:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 33046,
                  "mutability": "mutable",
                  "name": "fundId",
                  "nameLocation": "5221:6:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 33157,
                  "src": "5213:14:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 33045,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5213:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5195:33:56"
            },
            "returnParameters": {
              "id": 33048,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5236:0:56"
            },
            "scope": 33632,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 33232,
            "nodeType": "FunctionDefinition",
            "src": "6207:642:56",
            "nodes": [],
            "body": {
              "id": 33231,
              "nodeType": "Block",
              "src": "6251:598:56",
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
                        "id": 33168,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 33163,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -4,
                            "src": "6269:5:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 33164,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6275:9:56",
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "src": "6269:15:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "baseExpression": {
                            "id": 33165,
                            "name": "openRedeemTimestamps",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32788,
                            "src": "6288:20:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                              "typeString": "mapping(uint256 => uint256)"
                            }
                          },
                          "id": 33167,
                          "indexExpression": {
                            "id": 33166,
                            "name": "fundId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 33159,
                            "src": "6309:6:56",
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
                          "src": "6288:28:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6269:47:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "52656465656d206973206e6f74206f70656e20796574",
                        "id": 33169,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6318:24:56",
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
                      "id": 33162,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "6261:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 33170,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6261:82:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33171,
                  "nodeType": "ExpressionStatement",
                  "src": "6261:82:56"
                },
                {
                  "assignments": [
                    33173
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 33173,
                      "mutability": "mutable",
                      "name": "fundQuotaAddress",
                      "nameLocation": "6361:16:56",
                      "nodeType": "VariableDeclaration",
                      "scope": 33231,
                      "src": "6353:24:56",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 33172,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "6353:7:56",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 33177,
                  "initialValue": {
                    "baseExpression": {
                      "id": 33174,
                      "name": "quotasAddresses",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32797,
                      "src": "6380:15:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                        "typeString": "mapping(uint256 => address)"
                      }
                    },
                    "id": 33176,
                    "indexExpression": {
                      "id": 33175,
                      "name": "fundId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33159,
                      "src": "6396:6:56",
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
                    "src": "6380:23:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6353:50:56"
                },
                {
                  "assignments": [
                    33179
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 33179,
                      "mutability": "mutable",
                      "name": "amountQuotas",
                      "nameLocation": "6421:12:56",
                      "nodeType": "VariableDeclaration",
                      "scope": 33231,
                      "src": "6413:20:56",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 33178,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6413:7:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 33187,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 33184,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "6475:3:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 33185,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6479:6:56",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "6475:10:56",
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
                            "id": 33181,
                            "name": "fundQuotaAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 33173,
                            "src": "6447:16:56",
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
                          "id": 33180,
                          "name": "QuotaToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32429,
                          "src": "6436:10:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_QuotaToken_$32429_$",
                            "typeString": "type(contract QuotaToken)"
                          }
                        },
                        "id": 33182,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6436:28:56",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_QuotaToken_$32429",
                          "typeString": "contract QuotaToken"
                        }
                      },
                      "id": 33183,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6465:9:56",
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 621,
                      "src": "6436:38:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 33186,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6436:50:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6413:73:56"
                },
                {
                  "assignments": [
                    33189
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 33189,
                      "mutability": "mutable",
                      "name": "redeemableAmount",
                      "nameLocation": "6513:16:56",
                      "nodeType": "VariableDeclaration",
                      "scope": 33231,
                      "src": "6505:24:56",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 33188,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6505:7:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 33203,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 33202,
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
                          "id": 33194,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 33190,
                            "name": "amountQuotas",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 33179,
                            "src": "6533:12:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "baseExpression": {
                              "id": 33191,
                              "name": "initialAmounts",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32776,
                              "src": "6546:14:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                "typeString": "mapping(uint256 => uint256)"
                              }
                            },
                            "id": 33193,
                            "indexExpression": {
                              "id": 33192,
                              "name": "fundId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33159,
                              "src": "6561:6:56",
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
                            "src": "6546:22:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6533:35:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 33195,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "6532:37:56",
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
                            "id": 33198,
                            "name": "fundsAddresses",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32760,
                            "src": "6593:14:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                              "typeString": "mapping(uint256 => address)"
                            }
                          },
                          "id": 33200,
                          "indexExpression": {
                            "id": 33199,
                            "name": "fundId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 33159,
                            "src": "6608:6:56",
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
                          "src": "6593:22:56",
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
                          "id": 33196,
                          "name": "stablecoin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32690,
                          "src": "6572:10:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$2490",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 33197,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6583:9:56",
                        "memberName": "balanceOf",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2447,
                        "src": "6572:20:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view external returns (uint256)"
                        }
                      },
                      "id": 33201,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6572:44:56",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6532:84:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6505:111:56"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "baseExpression": {
                          "id": 33207,
                          "name": "fundsAddresses",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32760,
                          "src": "6651:14:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                            "typeString": "mapping(uint256 => address)"
                          }
                        },
                        "id": 33209,
                        "indexExpression": {
                          "id": 33208,
                          "name": "fundId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33159,
                          "src": "6666:6:56",
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
                        "src": "6651:22:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 33210,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "6675:3:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 33211,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6679:6:56",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "6675:10:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 33212,
                        "name": "redeemableAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33189,
                        "src": "6687:16:56",
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
                        "id": 33204,
                        "name": "stablecoin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32690,
                        "src": "6627:10:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$2490",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 33206,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6638:12:56",
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2489,
                      "src": "6627:23:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 33213,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6627:77:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 33214,
                  "nodeType": "ExpressionStatement",
                  "src": "6627:77:56"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 33219,
                        "name": "amountQuotas",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33179,
                        "src": "6749:12:56",
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
                            "id": 33216,
                            "name": "fundQuotaAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 33173,
                            "src": "6726:16:56",
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
                          "id": 33215,
                          "name": "QuotaToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32429,
                          "src": "6715:10:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_QuotaToken_$32429_$",
                            "typeString": "type(contract QuotaToken)"
                          }
                        },
                        "id": 33217,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6715:28:56",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_QuotaToken_$32429",
                          "typeString": "contract QuotaToken"
                        }
                      },
                      "id": 33218,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6744:4:56",
                      "memberName": "burn",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32408,
                      "src": "6715:33:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256) external"
                      }
                    },
                    "id": 33220,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6715:47:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33221,
                  "nodeType": "ExpressionStatement",
                  "src": "6715:47:56"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "baseExpression": {
                          "id": 33223,
                          "name": "fundsAddresses",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32760,
                          "src": "6789:14:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                            "typeString": "mapping(uint256 => address)"
                          }
                        },
                        "id": 33225,
                        "indexExpression": {
                          "id": 33224,
                          "name": "fundId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33159,
                          "src": "6804:6:56",
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
                        "src": "6789:22:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 33226,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "6813:3:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 33227,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6817:6:56",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "6813:10:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 33228,
                        "name": "redeemableAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33189,
                        "src": "6825:16:56",
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
                      "id": 33222,
                      "name": "RedeemMade",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32819,
                      "src": "6778:10:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 33229,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6778:64:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33230,
                  "nodeType": "EmitStatement",
                  "src": "6773:69:56"
                }
              ]
            },
            "functionSelector": "258d3c33",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "redeemYield",
            "nameLocation": "6216:11:56",
            "parameters": {
              "id": 33160,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 33159,
                  "mutability": "mutable",
                  "name": "fundId",
                  "nameLocation": "6236:6:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 33232,
                  "src": "6228:14:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 33158,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6228:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6227:16:56"
            },
            "returnParameters": {
              "id": 33161,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6251:0:56"
            },
            "scope": 33632,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 33246,
            "nodeType": "FunctionDefinition",
            "src": "6855:111:56",
            "nodes": [],
            "body": {
              "id": 33245,
              "nodeType": "Block",
              "src": "6917:49:56",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 33243,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 33239,
                        "name": "whiteListedTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32694,
                        "src": "6927:17:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 33241,
                      "indexExpression": {
                        "id": 33240,
                        "name": "_token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33234,
                        "src": "6945:6:56",
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
                      "src": "6927:25:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 33242,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6955:4:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "6927:32:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 33244,
                  "nodeType": "ExpressionStatement",
                  "src": "6927:32:56"
                }
              ]
            },
            "functionSelector": "822dde8d",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 33237,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 33236,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "6907:9:56"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1162,
                  "src": "6907:9:56"
                },
                "nodeType": "ModifierInvocation",
                "src": "6907:9:56"
              }
            ],
            "name": "setWhiteListedToken",
            "nameLocation": "6864:19:56",
            "parameters": {
              "id": 33235,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 33234,
                  "mutability": "mutable",
                  "name": "_token",
                  "nameLocation": "6892:6:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 33246,
                  "src": "6884:14:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 33233,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6884:7:56",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6883:16:56"
            },
            "returnParameters": {
              "id": 33238,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6917:0:56"
            },
            "scope": 33632,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 33260,
            "nodeType": "FunctionDefinition",
            "src": "6972:115:56",
            "nodes": [],
            "body": {
              "id": 33259,
              "nodeType": "Block",
              "src": "7037:50:56",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 33257,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 33253,
                        "name": "whiteListedTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32694,
                        "src": "7047:17:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 33255,
                      "indexExpression": {
                        "id": 33254,
                        "name": "_token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33248,
                        "src": "7065:6:56",
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
                      "src": "7047:25:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "66616c7365",
                      "id": 33256,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7075:5:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "7047:33:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 33258,
                  "nodeType": "ExpressionStatement",
                  "src": "7047:33:56"
                }
              ]
            },
            "functionSelector": "b5541dd8",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 33251,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 33250,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "7027:9:56"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1162,
                  "src": "7027:9:56"
                },
                "nodeType": "ModifierInvocation",
                "src": "7027:9:56"
              }
            ],
            "name": "removeWhiteListedToken",
            "nameLocation": "6981:22:56",
            "parameters": {
              "id": 33249,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 33248,
                  "mutability": "mutable",
                  "name": "_token",
                  "nameLocation": "7012:6:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 33260,
                  "src": "7004:14:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 33247,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7004:7:56",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7003:16:56"
            },
            "returnParameters": {
              "id": 33252,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7037:0:56"
            },
            "scope": 33632,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 33379,
            "nodeType": "FunctionDefinition",
            "src": "7140:1251:56",
            "nodes": [],
            "body": {
              "id": 33378,
              "nodeType": "Block",
              "src": "7203:1188:56",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    33266
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 33266,
                      "mutability": "mutable",
                      "name": "fundId",
                      "nameLocation": "7221:6:56",
                      "nodeType": "VariableDeclaration",
                      "scope": 33378,
                      "src": "7213:14:56",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 33265,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7213:7:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 33271,
                  "initialValue": {
                    "expression": {
                      "baseExpression": {
                        "id": 33267,
                        "name": "openRedeemProposals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32704,
                        "src": "7230:19:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_OpenRedeemProposal_$32674_storage_$",
                          "typeString": "mapping(uint256 => struct OpenRedeemProposal storage ref)"
                        }
                      },
                      "id": 33269,
                      "indexExpression": {
                        "id": 33268,
                        "name": "_proposalId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33262,
                        "src": "7250:11:56",
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
                      "src": "7230:32:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_OpenRedeemProposal_$32674_storage",
                        "typeString": "struct OpenRedeemProposal storage ref"
                      }
                    },
                    "id": 33270,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "7263:6:56",
                    "memberName": "fundId",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 32665,
                    "src": "7230:39:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7213:56:56"
                },
                {
                  "assignments": [
                    33273
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 33273,
                      "mutability": "mutable",
                      "name": "newTimestamp",
                      "nameLocation": "7287:12:56",
                      "nodeType": "VariableDeclaration",
                      "scope": 33378,
                      "src": "7279:20:56",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 33272,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7279:7:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 33278,
                  "initialValue": {
                    "expression": {
                      "baseExpression": {
                        "id": 33274,
                        "name": "openRedeemProposals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32704,
                        "src": "7302:19:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_OpenRedeemProposal_$32674_storage_$",
                          "typeString": "mapping(uint256 => struct OpenRedeemProposal storage ref)"
                        }
                      },
                      "id": 33276,
                      "indexExpression": {
                        "id": 33275,
                        "name": "_proposalId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33262,
                        "src": "7322:11:56",
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
                      "src": "7302:32:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_OpenRedeemProposal_$32674_storage",
                        "typeString": "struct OpenRedeemProposal storage ref"
                      }
                    },
                    "id": 33277,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "7335:12:56",
                    "memberName": "newTimestamp",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 32667,
                    "src": "7302:45:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7279:68:56"
                },
                {
                  "assignments": [
                    33280
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 33280,
                      "mutability": "mutable",
                      "name": "deadline",
                      "nameLocation": "7365:8:56",
                      "nodeType": "VariableDeclaration",
                      "scope": 33378,
                      "src": "7357:16:56",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 33279,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7357:7:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 33285,
                  "initialValue": {
                    "expression": {
                      "baseExpression": {
                        "id": 33281,
                        "name": "openRedeemProposals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32704,
                        "src": "7376:19:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_OpenRedeemProposal_$32674_storage_$",
                          "typeString": "mapping(uint256 => struct OpenRedeemProposal storage ref)"
                        }
                      },
                      "id": 33283,
                      "indexExpression": {
                        "id": 33282,
                        "name": "_proposalId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33262,
                        "src": "7396:11:56",
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
                      "src": "7376:32:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_OpenRedeemProposal_$32674_storage",
                        "typeString": "struct OpenRedeemProposal storage ref"
                      }
                    },
                    "id": 33284,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "7409:8:56",
                    "memberName": "deadline",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 32669,
                    "src": "7376:41:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7357:60:56"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 33290,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 33287,
                          "name": "newTimestamp",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33273,
                          "src": "7435:12:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "expression": {
                            "id": 33288,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -4,
                            "src": "7450:5:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 33289,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7456:9:56",
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "src": "7450:15:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7435:30:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "596f75206e65656420746f2073657420612074696d657374616d7020696e2074686520667574757265",
                        "id": 33291,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7467:43:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_11d543aee83b4f0fb55a12979d36d5ea0a2d0e94d2b83dffc9c75a142d63f622",
                          "typeString": "literal_string \"You need to set a timestamp in the future\""
                        },
                        "value": "You need to set a timestamp in the future"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_11d543aee83b4f0fb55a12979d36d5ea0a2d0e94d2b83dffc9c75a142d63f622",
                          "typeString": "literal_string \"You need to set a timestamp in the future\""
                        }
                      ],
                      "id": 33286,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "7427:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 33292,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7427:84:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33293,
                  "nodeType": "ExpressionStatement",
                  "src": "7427:84:56"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 33299,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 33295,
                          "name": "newTimestamp",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33273,
                          "src": "7529:12:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "baseExpression": {
                            "id": 33296,
                            "name": "closeInvestimentTimestamps",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32784,
                            "src": "7544:26:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                              "typeString": "mapping(uint256 => uint256)"
                            }
                          },
                          "id": 33298,
                          "indexExpression": {
                            "id": 33297,
                            "name": "fundId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 33266,
                            "src": "7571:6:56",
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
                          "src": "7544:34:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7529:49:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "596f75206e65656420746f2073657420612074696d657374616d702061667465722074686520636c6f736520696e76657374696d656e742074696d657374616d70",
                        "id": 33300,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7580:67:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_263cfd46092f65d26d2c17cb69f060cf77f65aff4d79eb53a16f99aaeb978d0d",
                          "typeString": "literal_string \"You need to set a timestamp after the close investiment timestamp\""
                        },
                        "value": "You need to set a timestamp after the close investiment timestamp"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_263cfd46092f65d26d2c17cb69f060cf77f65aff4d79eb53a16f99aaeb978d0d",
                          "typeString": "literal_string \"You need to set a timestamp after the close investiment timestamp\""
                        }
                      ],
                      "id": 33294,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "7521:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 33301,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7521:127:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33302,
                  "nodeType": "ExpressionStatement",
                  "src": "7521:127:56"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 33307,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 33304,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -4,
                            "src": "7666:5:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 33305,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7672:9:56",
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "src": "7666:15:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "id": 33306,
                          "name": "deadline",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33280,
                          "src": "7684:8:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7666:26:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "54686520766f74696e6720706572696f64206973206f766572",
                        "id": 33308,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7694:27:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_22f09901f6e236268e28bec4326be9542e888303c24d3aa9fa83d69a167870d5",
                          "typeString": "literal_string \"The voting period is over\""
                        },
                        "value": "The voting period is over"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_22f09901f6e236268e28bec4326be9542e888303c24d3aa9fa83d69a167870d5",
                          "typeString": "literal_string \"The voting period is over\""
                        }
                      ],
                      "id": 33303,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "7658:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 33309,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7658:64:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33310,
                  "nodeType": "ExpressionStatement",
                  "src": "7658:64:56"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 33314,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 33312,
                          "name": "fundId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33266,
                          "src": "7740:6:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "id": 33313,
                          "name": "_fundIdCounter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32680,
                          "src": "7749:14:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7740:23:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "46756e64206e6f7420666f756e64",
                        "id": 33315,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7765:16:56",
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
                      "id": 33311,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "7732:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 33316,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7732:50:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33317,
                  "nodeType": "ExpressionStatement",
                  "src": "7732:50:56"
                },
                {
                  "assignments": [
                    33319
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 33319,
                      "mutability": "mutable",
                      "name": "totalVotingTokens",
                      "nameLocation": "7801:17:56",
                      "nodeType": "VariableDeclaration",
                      "scope": 33378,
                      "src": "7793:25:56",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 33318,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7793:7:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 33327,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "arguments": [
                          {
                            "baseExpression": {
                              "id": 33321,
                              "name": "quotasAddresses",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32797,
                              "src": "7828:15:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                                "typeString": "mapping(uint256 => address)"
                              }
                            },
                            "id": 33323,
                            "indexExpression": {
                              "id": 33322,
                              "name": "fundId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33266,
                              "src": "7844:6:56",
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
                            "src": "7828:23:56",
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
                          "id": 33320,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2490,
                          "src": "7821:6:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$2490_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 33324,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7821:31:56",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$2490",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 33325,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7853:11:56",
                      "memberName": "totalSupply",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2439,
                      "src": "7821:43:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                        "typeString": "function () view external returns (uint256)"
                      }
                    },
                    "id": 33326,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7821:45:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7793:73:56"
                },
                {
                  "assignments": [
                    33329
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 33329,
                      "mutability": "mutable",
                      "name": "totalVotes",
                      "nameLocation": "7884:10:56",
                      "nodeType": "VariableDeclaration",
                      "scope": 33378,
                      "src": "7876:18:56",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 33328,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7876:7:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 33333,
                  "initialValue": {
                    "baseExpression": {
                      "id": 33330,
                      "name": "proposalsVotes",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32708,
                      "src": "7897:14:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                        "typeString": "mapping(uint256 => uint256)"
                      }
                    },
                    "id": 33332,
                    "indexExpression": {
                      "id": 33331,
                      "name": "_proposalId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33262,
                      "src": "7912:11:56",
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
                    "src": "7897:27:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7876:48:56"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 33340,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 33334,
                      "name": "totalVotes",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33329,
                      "src": "7938:10:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 33339,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 33337,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 33335,
                          "name": "totalVotingTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33319,
                          "src": "7951:17:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "id": 33336,
                          "name": "percentageToWin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32699,
                          "src": "7971:15:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7951:35:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "3130303030",
                        "id": 33338,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7989:5:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10000_by_1",
                          "typeString": "int_const 10000"
                        },
                        "value": "10000"
                      },
                      "src": "7951:43:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7938:56:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 33353,
                    "nodeType": "Block",
                    "src": "8074:68:56",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "hexValue": "5468652070726f706f73616c20776173206e6f7420616363657074656420796574",
                              "id": 33350,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8095:35:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_889410f1b0f790892dcfd89bb8013555216ba423262bf2c21819d949f0cc7982",
                                "typeString": "literal_string \"The proposal was not accepted yet\""
                              },
                              "value": "The proposal was not accepted yet"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_889410f1b0f790892dcfd89bb8013555216ba423262bf2c21819d949f0cc7982",
                                "typeString": "literal_string \"The proposal was not accepted yet\""
                              }
                            ],
                            "id": 33349,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -19,
                              -19
                            ],
                            "referencedDeclaration": -19,
                            "src": "8088:6:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory) pure"
                            }
                          },
                          "id": 33351,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8088:43:56",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 33352,
                        "nodeType": "ExpressionStatement",
                        "src": "8088:43:56"
                      }
                    ]
                  },
                  "id": 33354,
                  "nodeType": "IfStatement",
                  "src": "7935:207:56",
                  "trueBody": {
                    "id": 33348,
                    "nodeType": "Block",
                    "src": "7996:73:56",
                    "statements": [
                      {
                        "expression": {
                          "id": 33346,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "expression": {
                              "baseExpression": {
                                "id": 33341,
                                "name": "openRedeemProposals",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 32704,
                                "src": "8010:19:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_OpenRedeemProposal_$32674_storage_$",
                                  "typeString": "mapping(uint256 => struct OpenRedeemProposal storage ref)"
                                }
                              },
                              "id": 33343,
                              "indexExpression": {
                                "id": 33342,
                                "name": "_proposalId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 33262,
                                "src": "8030:11:56",
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
                              "src": "8010:32:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_OpenRedeemProposal_$32674_storage",
                                "typeString": "struct OpenRedeemProposal storage ref"
                              }
                            },
                            "id": 33344,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberLocation": "8043:8:56",
                            "memberName": "accepted",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 32671,
                            "src": "8010:41:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "74727565",
                            "id": 33345,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8054:4:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "8010:48:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 33347,
                        "nodeType": "ExpressionStatement",
                        "src": "8010:48:56"
                      }
                    ]
                  }
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 33356,
                        "name": "_proposalId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33262,
                        "src": "8174:11:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 33357,
                        "name": "fundId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33266,
                        "src": "8187:6:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 33358,
                        "name": "newTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33273,
                        "src": "8195:12:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "baseExpression": {
                            "id": 33359,
                            "name": "openRedeemProposals",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32704,
                            "src": "8209:19:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_OpenRedeemProposal_$32674_storage_$",
                              "typeString": "mapping(uint256 => struct OpenRedeemProposal storage ref)"
                            }
                          },
                          "id": 33361,
                          "indexExpression": {
                            "id": 33360,
                            "name": "_proposalId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 33262,
                            "src": "8229:11:56",
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
                          "src": "8209:32:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_OpenRedeemProposal_$32674_storage",
                            "typeString": "struct OpenRedeemProposal storage ref"
                          }
                        },
                        "id": 33362,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8242:4:56",
                        "memberName": "name",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 32673,
                        "src": "8209:37:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      ],
                      "id": 33355,
                      "name": "ProposalAccepted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32750,
                      "src": "8157:16:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256,string memory)"
                      }
                    },
                    "id": 33363,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8157:90:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33364,
                  "nodeType": "EmitStatement",
                  "src": "8152:95:56"
                },
                {
                  "expression": {
                    "id": 33369,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 33365,
                        "name": "openRedeemTimestamps",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32788,
                        "src": "8261:20:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 33367,
                      "indexExpression": {
                        "id": 33366,
                        "name": "fundId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33266,
                        "src": "8282:6:56",
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
                      "src": "8261:28:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 33368,
                      "name": "newTimestamp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33273,
                      "src": "8292:12:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8261:43:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 33370,
                  "nodeType": "ExpressionStatement",
                  "src": "8261:43:56"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "baseExpression": {
                          "id": 33372,
                          "name": "fundsAddresses",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32760,
                          "src": "8346:14:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                            "typeString": "mapping(uint256 => address)"
                          }
                        },
                        "id": 33374,
                        "indexExpression": {
                          "id": 33373,
                          "name": "fundId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33266,
                          "src": "8361:6:56",
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
                        "src": "8346:22:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 33375,
                        "name": "newTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33273,
                        "src": "8370:12:56",
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
                      "id": 33371,
                      "name": "OpenRedeemTimestampChanged",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32825,
                      "src": "8319:26:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 33376,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8319:64:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33377,
                  "nodeType": "EmitStatement",
                  "src": "8314:69:56"
                }
              ]
            },
            "functionSelector": "10e55927",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "changeOpenRedeemTimestamp",
            "nameLocation": "7149:25:56",
            "parameters": {
              "id": 33263,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 33262,
                  "mutability": "mutable",
                  "name": "_proposalId",
                  "nameLocation": "7183:11:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 33379,
                  "src": "7175:19:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 33261,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7175:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7174:21:56"
            },
            "returnParameters": {
              "id": 33264,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7203:0:56"
            },
            "scope": 33632,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 33419,
            "nodeType": "FunctionDefinition",
            "src": "8397:553:56",
            "nodes": [],
            "body": {
              "id": 33418,
              "nodeType": "Block",
              "src": "8540:410:56",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 33402,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 33392,
                        "name": "openRedeemProposals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32704,
                        "src": "8567:19:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_OpenRedeemProposal_$32674_storage_$",
                          "typeString": "mapping(uint256 => struct OpenRedeemProposal storage ref)"
                        }
                      },
                      "id": 33394,
                      "indexExpression": {
                        "id": 33393,
                        "name": "proposalIdCounter",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32696,
                        "src": "8587:17:56",
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
                      "src": "8567:38:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_OpenRedeemProposal_$32674_storage",
                        "typeString": "struct OpenRedeemProposal storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 33396,
                          "name": "_fundId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33381,
                          "src": "8649:7:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 33397,
                          "name": "_newTimestamp",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33383,
                          "src": "8684:13:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 33398,
                          "name": "_deadline",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33385,
                          "src": "8721:9:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "hexValue": "66616c7365",
                          "id": 33399,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8754:5:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        {
                          "id": 33400,
                          "name": "_name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33387,
                          "src": "8779:5:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "id": 33395,
                        "name": "OpenRedeemProposal",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32674,
                        "src": "8608:18:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_OpenRedeemProposal_$32674_storage_ptr_$",
                          "typeString": "type(struct OpenRedeemProposal storage pointer)"
                        }
                      },
                      "id": 33401,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "nameLocations": [
                        "8641:6:56",
                        "8670:12:56",
                        "8711:8:56",
                        "8744:8:56",
                        "8773:4:56"
                      ],
                      "names": [
                        "fundId",
                        "newTimestamp",
                        "deadline",
                        "accepted",
                        "name"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "8608:187:56",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_OpenRedeemProposal_$32674_memory_ptr",
                        "typeString": "struct OpenRedeemProposal memory"
                      }
                    },
                    "src": "8567:228:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_OpenRedeemProposal_$32674_storage",
                      "typeString": "struct OpenRedeemProposal storage ref"
                    }
                  },
                  "id": 33403,
                  "nodeType": "ExpressionStatement",
                  "src": "8567:228:56"
                },
                {
                  "expression": {
                    "id": 33405,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "8805:19:56",
                    "subExpression": {
                      "id": 33404,
                      "name": "proposalIdCounter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32696,
                      "src": "8805:17:56",
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
                  "id": 33406,
                  "nodeType": "ExpressionStatement",
                  "src": "8805:19:56"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 33408,
                        "name": "_fundId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33381,
                        "src": "8862:7:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 33409,
                        "name": "_newTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33383,
                        "src": "8871:13:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 33410,
                        "name": "_newTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33383,
                        "src": "8886:13:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 33411,
                        "name": "_name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33387,
                        "src": "8901:5:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 33407,
                      "name": "NewOpenRedeemProposal",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32724,
                      "src": "8840:21:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256,string memory)"
                      }
                    },
                    "id": 33412,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8840:67:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33413,
                  "nodeType": "EmitStatement",
                  "src": "8835:72:56"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 33416,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 33414,
                      "name": "proposalIdCounter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32696,
                      "src": "8924:17:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 33415,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "8942:1:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "8924:19:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 33391,
                  "id": 33417,
                  "nodeType": "Return",
                  "src": "8917:26:56"
                }
              ]
            },
            "functionSelector": "9559e6ba",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "proposeNewOpenRedeemTimestamp",
            "nameLocation": "8406:29:56",
            "parameters": {
              "id": 33388,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 33381,
                  "mutability": "mutable",
                  "name": "_fundId",
                  "nameLocation": "8444:7:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 33419,
                  "src": "8436:15:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 33380,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8436:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 33383,
                  "mutability": "mutable",
                  "name": "_newTimestamp",
                  "nameLocation": "8461:13:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 33419,
                  "src": "8453:21:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 33382,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8453:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 33385,
                  "mutability": "mutable",
                  "name": "_deadline",
                  "nameLocation": "8484:9:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 33419,
                  "src": "8476:17:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 33384,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8476:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 33387,
                  "mutability": "mutable",
                  "name": "_name",
                  "nameLocation": "8509:5:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 33419,
                  "src": "8495:19:56",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 33386,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8495:6:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8435:80:56"
            },
            "returnParameters": {
              "id": 33391,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 33390,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 33419,
                  "src": "8531:7:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 33389,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8531:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8530:9:56"
            },
            "scope": 33632,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 33524,
            "nodeType": "FunctionDefinition",
            "src": "8957:840:56",
            "nodes": [],
            "body": {
              "id": 33523,
              "nodeType": "Block",
              "src": "9016:781:56",
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
                        "id": 33429,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 33427,
                          "name": "_proposalId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33421,
                          "src": "9034:11:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "id": 33428,
                          "name": "proposalIdCounter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32696,
                          "src": "9049:17:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "9034:32:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "50726f706f73616c206e6f7420666f756e64",
                        "id": 33430,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9068:20:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_bcf95e6a362746bd232f2b944afd538b26aa461607b394f948bce2609a1a50c9",
                          "typeString": "literal_string \"Proposal not found\""
                        },
                        "value": "Proposal not found"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_bcf95e6a362746bd232f2b944afd538b26aa461607b394f948bce2609a1a50c9",
                          "typeString": "literal_string \"Proposal not found\""
                        }
                      ],
                      "id": 33426,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "9026:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 33431,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9026:63:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33432,
                  "nodeType": "ExpressionStatement",
                  "src": "9026:63:56"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 33440,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 33434,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -4,
                            "src": "9107:5:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 33435,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9113:9:56",
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "src": "9107:15:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "expression": {
                            "baseExpression": {
                              "id": 33436,
                              "name": "openRedeemProposals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32704,
                              "src": "9125:19:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_OpenRedeemProposal_$32674_storage_$",
                                "typeString": "mapping(uint256 => struct OpenRedeemProposal storage ref)"
                              }
                            },
                            "id": 33438,
                            "indexExpression": {
                              "id": 33437,
                              "name": "_proposalId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33421,
                              "src": "9145:11:56",
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
                            "src": "9125:32:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_OpenRedeemProposal_$32674_storage",
                              "typeString": "struct OpenRedeemProposal storage ref"
                            }
                          },
                          "id": 33439,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9158:8:56",
                          "memberName": "deadline",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 32669,
                          "src": "9125:41:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "9107:59:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "54686520766f74696e6720706572696f64206973206f766572",
                        "id": 33441,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9168:27:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_22f09901f6e236268e28bec4326be9542e888303c24d3aa9fa83d69a167870d5",
                          "typeString": "literal_string \"The voting period is over\""
                        },
                        "value": "The voting period is over"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_22f09901f6e236268e28bec4326be9542e888303c24d3aa9fa83d69a167870d5",
                          "typeString": "literal_string \"The voting period is over\""
                        }
                      ],
                      "id": 33433,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "9099:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 33442,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9099:97:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33443,
                  "nodeType": "ExpressionStatement",
                  "src": "9099:97:56"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 33449,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "9214:42:56",
                        "subExpression": {
                          "expression": {
                            "baseExpression": {
                              "id": 33445,
                              "name": "openRedeemProposals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32704,
                              "src": "9215:19:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_OpenRedeemProposal_$32674_storage_$",
                                "typeString": "mapping(uint256 => struct OpenRedeemProposal storage ref)"
                              }
                            },
                            "id": 33447,
                            "indexExpression": {
                              "id": 33446,
                              "name": "_proposalId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33421,
                              "src": "9235:11:56",
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
                            "src": "9215:32:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_OpenRedeemProposal_$32674_storage",
                              "typeString": "struct OpenRedeemProposal storage ref"
                            }
                          },
                          "id": 33448,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9248:8:56",
                          "memberName": "accepted",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 32671,
                          "src": "9215:41:56",
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
                      {
                        "hexValue": "5468652070726f706f73616c2077617320616c7265616479206163636570746564",
                        "id": 33450,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9258:35:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_f832b36c019facc0dcdb104e81f664492b20638ef100d0543cfab1d201da8015",
                          "typeString": "literal_string \"The proposal was already accepted\""
                        },
                        "value": "The proposal was already accepted"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_f832b36c019facc0dcdb104e81f664492b20638ef100d0543cfab1d201da8015",
                          "typeString": "literal_string \"The proposal was already accepted\""
                        }
                      ],
                      "id": 33444,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "9206:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 33451,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9206:88:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33452,
                  "nodeType": "ExpressionStatement",
                  "src": "9206:88:56"
                },
                {
                  "assignments": [
                    33454
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 33454,
                      "mutability": "mutable",
                      "name": "fundId",
                      "nameLocation": "9313:6:56",
                      "nodeType": "VariableDeclaration",
                      "scope": 33523,
                      "src": "9305:14:56",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 33453,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9305:7:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 33459,
                  "initialValue": {
                    "expression": {
                      "baseExpression": {
                        "id": 33455,
                        "name": "openRedeemProposals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32704,
                        "src": "9322:19:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_OpenRedeemProposal_$32674_storage_$",
                          "typeString": "mapping(uint256 => struct OpenRedeemProposal storage ref)"
                        }
                      },
                      "id": 33457,
                      "indexExpression": {
                        "id": 33456,
                        "name": "_proposalId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33421,
                        "src": "9342:11:56",
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
                      "src": "9322:32:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_OpenRedeemProposal_$32674_storage",
                        "typeString": "struct OpenRedeemProposal storage ref"
                      }
                    },
                    "id": 33458,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "9355:6:56",
                    "memberName": "fundId",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 32665,
                    "src": "9322:39:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9305:56:56"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 33463,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 33461,
                          "name": "fundId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33454,
                          "src": "9379:6:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "id": 33462,
                          "name": "_fundIdCounter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32680,
                          "src": "9388:14:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "9379:23:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "46756e64206e6f7420666f756e64",
                        "id": 33464,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9404:16:56",
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
                      "id": 33460,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "9371:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 33465,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9371:50:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33466,
                  "nodeType": "ExpressionStatement",
                  "src": "9371:50:56"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 33482,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 33474,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "9482:3:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 33475,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "9486:6:56",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "9482:10:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 33478,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "9502:4:56",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_WhaleFinance_$33632",
                                    "typeString": "contract WhaleFinance"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_WhaleFinance_$33632",
                                    "typeString": "contract WhaleFinance"
                                  }
                                ],
                                "id": 33477,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "9494:7:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 33476,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "9494:7:56",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 33479,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9494:13:56",
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
                            "expression": {
                              "arguments": [
                                {
                                  "baseExpression": {
                                    "id": 33469,
                                    "name": "quotasAddresses",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 32797,
                                    "src": "9447:15:56",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                                      "typeString": "mapping(uint256 => address)"
                                    }
                                  },
                                  "id": 33471,
                                  "indexExpression": {
                                    "id": 33470,
                                    "name": "fundId",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 33454,
                                    "src": "9463:6:56",
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
                                  "src": "9447:23:56",
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
                                "id": 33468,
                                "name": "IERC20",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2490,
                                "src": "9440:6:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_IERC20_$2490_$",
                                  "typeString": "type(contract IERC20)"
                                }
                              },
                              "id": 33472,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9440:31:56",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$2490",
                                "typeString": "contract IERC20"
                              }
                            },
                            "id": 33473,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "9472:9:56",
                            "memberName": "allowance",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 2467,
                            "src": "9440:41:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address,address) view external returns (uint256)"
                            }
                          },
                          "id": 33480,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9440:68:56",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 33481,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33423,
                          "src": "9512:7:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "9440:79:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4e6f7420656e6f75676820616c6c6f77616e6365",
                        "id": 33483,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9521:22:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_b022b055ca598d53dea4e2d13bd2864e05a62be10c287a4dddfb651804a110cc",
                          "typeString": "literal_string \"Not enough allowance\""
                        },
                        "value": "Not enough allowance"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_b022b055ca598d53dea4e2d13bd2864e05a62be10c287a4dddfb651804a110cc",
                          "typeString": "literal_string \"Not enough allowance\""
                        }
                      ],
                      "id": 33467,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "9432:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 33484,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9432:112:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33485,
                  "nodeType": "ExpressionStatement",
                  "src": "9432:112:56"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 33492,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "9600:3:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 33493,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9604:6:56",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "9600:10:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 33496,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "9620:4:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_WhaleFinance_$33632",
                              "typeString": "contract WhaleFinance"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_WhaleFinance_$33632",
                              "typeString": "contract WhaleFinance"
                            }
                          ],
                          "id": 33495,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "9612:7:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 33494,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "9612:7:56",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 33497,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9612:13:56",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 33498,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33423,
                        "src": "9627:7:56",
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
                        "arguments": [
                          {
                            "baseExpression": {
                              "id": 33487,
                              "name": "quotasAddresses",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32797,
                              "src": "9562:15:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                                "typeString": "mapping(uint256 => address)"
                              }
                            },
                            "id": 33489,
                            "indexExpression": {
                              "id": 33488,
                              "name": "fundId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33454,
                              "src": "9578:6:56",
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
                            "src": "9562:23:56",
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
                          "id": 33486,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2490,
                          "src": "9555:6:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$2490_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 33490,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9555:31:56",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$2490",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 33491,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "9587:12:56",
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2489,
                      "src": "9555:44:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 33499,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9555:80:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 33500,
                  "nodeType": "ExpressionStatement",
                  "src": "9555:80:56"
                },
                {
                  "expression": {
                    "id": 33508,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "baseExpression": {
                          "id": 33501,
                          "name": "votes",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32714,
                          "src": "9646:5:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(uint256 => mapping(address => uint256))"
                          }
                        },
                        "id": 33505,
                        "indexExpression": {
                          "id": 33502,
                          "name": "_proposalId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33421,
                          "src": "9652:11:56",
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
                        "src": "9646:18:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 33506,
                      "indexExpression": {
                        "expression": {
                          "id": 33503,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "9665:3:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 33504,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9669:6:56",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "9665:10:56",
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
                      "src": "9646:30:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 33507,
                      "name": "_amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33423,
                      "src": "9680:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "9646:41:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 33509,
                  "nodeType": "ExpressionStatement",
                  "src": "9646:41:56"
                },
                {
                  "expression": {
                    "id": 33514,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 33510,
                        "name": "proposalsVotes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32708,
                        "src": "9697:14:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 33512,
                      "indexExpression": {
                        "id": 33511,
                        "name": "_proposalId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33421,
                        "src": "9712:11:56",
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
                      "src": "9697:27:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 33513,
                      "name": "_amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33423,
                      "src": "9728:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "9697:38:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 33515,
                  "nodeType": "ExpressionStatement",
                  "src": "9697:38:56"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 33517,
                        "name": "_proposalId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33421,
                        "src": "9757:11:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 33518,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "9770:3:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 33519,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9774:6:56",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "9770:10:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 33520,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33423,
                        "src": "9782:7:56",
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
                      "id": 33516,
                      "name": "Voted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32732,
                      "src": "9751:5:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,address,uint256)"
                      }
                    },
                    "id": 33521,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9751:39:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33522,
                  "nodeType": "EmitStatement",
                  "src": "9746:44:56"
                }
              ]
            },
            "functionSelector": "b384abef",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "vote",
            "nameLocation": "8966:4:56",
            "parameters": {
              "id": 33424,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 33421,
                  "mutability": "mutable",
                  "name": "_proposalId",
                  "nameLocation": "8979:11:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 33524,
                  "src": "8971:19:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 33420,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8971:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 33423,
                  "mutability": "mutable",
                  "name": "_amount",
                  "nameLocation": "9000:7:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 33524,
                  "src": "8992:15:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 33422,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8992:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8970:38:56"
            },
            "returnParameters": {
              "id": 33425,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9016:0:56"
            },
            "scope": 33632,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 33540,
            "nodeType": "FunctionDefinition",
            "src": "9803:141:56",
            "nodes": [],
            "body": {
              "id": 33539,
              "nodeType": "Block",
              "src": "9894:50:56",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "baseExpression": {
                        "id": 33533,
                        "name": "votes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32714,
                        "src": "9911:5:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                          "typeString": "mapping(uint256 => mapping(address => uint256))"
                        }
                      },
                      "id": 33535,
                      "indexExpression": {
                        "id": 33534,
                        "name": "_proposalId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33526,
                        "src": "9917:11:56",
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
                      "src": "9911:18:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 33537,
                    "indexExpression": {
                      "id": 33536,
                      "name": "_voter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33528,
                      "src": "9930:6:56",
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
                    "src": "9911:26:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 33532,
                  "id": 33538,
                  "nodeType": "Return",
                  "src": "9904:33:56"
                }
              ]
            },
            "functionSelector": "6886078c",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getVoterBalance",
            "nameLocation": "9812:15:56",
            "parameters": {
              "id": 33529,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 33526,
                  "mutability": "mutable",
                  "name": "_proposalId",
                  "nameLocation": "9836:11:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 33540,
                  "src": "9828:19:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 33525,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9828:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 33528,
                  "mutability": "mutable",
                  "name": "_voter",
                  "nameLocation": "9857:6:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 33540,
                  "src": "9849:14:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 33527,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9849:7:56",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9827:37:56"
            },
            "returnParameters": {
              "id": 33532,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 33531,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 33540,
                  "src": "9885:7:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 33530,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9885:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9884:9:56"
            },
            "scope": 33632,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 33552,
            "nodeType": "FunctionDefinition",
            "src": "9950:132:56",
            "nodes": [],
            "body": {
              "id": 33551,
              "nodeType": "Block",
              "src": "10031:51:56",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "id": 33547,
                      "name": "proposalsVotes",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32708,
                      "src": "10048:14:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                        "typeString": "mapping(uint256 => uint256)"
                      }
                    },
                    "id": 33549,
                    "indexExpression": {
                      "id": 33548,
                      "name": "_proposalId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33542,
                      "src": "10063:11:56",
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
                    "src": "10048:27:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 33546,
                  "id": 33550,
                  "nodeType": "Return",
                  "src": "10041:34:56"
                }
              ]
            },
            "functionSelector": "6a401f59",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getTotalProposalVotes",
            "nameLocation": "9959:21:56",
            "parameters": {
              "id": 33543,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 33542,
                  "mutability": "mutable",
                  "name": "_proposalId",
                  "nameLocation": "9989:11:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 33552,
                  "src": "9981:19:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 33541,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9981:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9980:21:56"
            },
            "returnParameters": {
              "id": 33546,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 33545,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 33552,
                  "src": "10022:7:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 33544,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10022:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10021:9:56"
            },
            "scope": 33632,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 33631,
            "nodeType": "FunctionDefinition",
            "src": "10088:677:56",
            "nodes": [],
            "body": {
              "id": 33630,
              "nodeType": "Block",
              "src": "10146:619:56",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 33569,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 33564,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 33558,
                              "name": "block",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -4,
                              "src": "10164:5:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_block",
                                "typeString": "block"
                              }
                            },
                            "id": 33559,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "10170:9:56",
                            "memberName": "timestamp",
                            "nodeType": "MemberAccess",
                            "src": "10164:15:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "expression": {
                              "baseExpression": {
                                "id": 33560,
                                "name": "openRedeemProposals",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 32704,
                                "src": "10182:19:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_OpenRedeemProposal_$32674_storage_$",
                                  "typeString": "mapping(uint256 => struct OpenRedeemProposal storage ref)"
                                }
                              },
                              "id": 33562,
                              "indexExpression": {
                                "id": 33561,
                                "name": "_proposalId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 33554,
                                "src": "10202:11:56",
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
                              "src": "10182:32:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_OpenRedeemProposal_$32674_storage",
                                "typeString": "struct OpenRedeemProposal storage ref"
                              }
                            },
                            "id": 33563,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "10215:8:56",
                            "memberName": "deadline",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 32669,
                            "src": "10182:41:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "10164:59:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "expression": {
                            "baseExpression": {
                              "id": 33565,
                              "name": "openRedeemProposals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32704,
                              "src": "10227:19:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_OpenRedeemProposal_$32674_storage_$",
                                "typeString": "mapping(uint256 => struct OpenRedeemProposal storage ref)"
                              }
                            },
                            "id": 33567,
                            "indexExpression": {
                              "id": 33566,
                              "name": "_proposalId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33554,
                              "src": "10247:11:56",
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
                            "src": "10227:32:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_OpenRedeemProposal_$32674_storage",
                              "typeString": "struct OpenRedeemProposal storage ref"
                            }
                          },
                          "id": 33568,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "10260:8:56",
                          "memberName": "accepted",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 32671,
                          "src": "10227:41:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "10164:104:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "54686520766f74696e6720706572696f64206973206e6f74206f76657220796574",
                        "id": 33570,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10270:35:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_bc3a554db5834e54281a3560d9317ddd53d6f4c7732fa1968b5836b8942b5d1f",
                          "typeString": "literal_string \"The voting period is not over yet\""
                        },
                        "value": "The voting period is not over yet"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_bc3a554db5834e54281a3560d9317ddd53d6f4c7732fa1968b5836b8942b5d1f",
                          "typeString": "literal_string \"The voting period is not over yet\""
                        }
                      ],
                      "id": 33557,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "10156:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 33571,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10156:150:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33572,
                  "nodeType": "ExpressionStatement",
                  "src": "10156:150:56"
                },
                {
                  "assignments": [
                    33574
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 33574,
                      "mutability": "mutable",
                      "name": "fundId",
                      "nameLocation": "10333:6:56",
                      "nodeType": "VariableDeclaration",
                      "scope": 33630,
                      "src": "10325:14:56",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 33573,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10325:7:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 33579,
                  "initialValue": {
                    "expression": {
                      "baseExpression": {
                        "id": 33575,
                        "name": "openRedeemProposals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32704,
                        "src": "10342:19:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_OpenRedeemProposal_$32674_storage_$",
                          "typeString": "mapping(uint256 => struct OpenRedeemProposal storage ref)"
                        }
                      },
                      "id": 33577,
                      "indexExpression": {
                        "id": 33576,
                        "name": "_proposalId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33554,
                        "src": "10362:11:56",
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
                      "src": "10342:32:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_OpenRedeemProposal_$32674_storage",
                        "typeString": "struct OpenRedeemProposal storage ref"
                      }
                    },
                    "id": 33578,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "10375:6:56",
                    "memberName": "fundId",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 32665,
                    "src": "10342:39:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10325:56:56"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 33583,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 33581,
                          "name": "fundId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33574,
                          "src": "10399:6:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "id": 33582,
                          "name": "_fundIdCounter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32680,
                          "src": "10408:14:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "10399:23:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "46756e64206e6f7420666f756e64",
                        "id": 33584,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10424:16:56",
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
                      "id": 33580,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "10391:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 33585,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10391:50:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33586,
                  "nodeType": "ExpressionStatement",
                  "src": "10391:50:56"
                },
                {
                  "assignments": [
                    33588
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 33588,
                      "mutability": "mutable",
                      "name": "amount",
                      "nameLocation": "10460:6:56",
                      "nodeType": "VariableDeclaration",
                      "scope": 33630,
                      "src": "10452:14:56",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 33587,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10452:7:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 33595,
                  "initialValue": {
                    "baseExpression": {
                      "baseExpression": {
                        "id": 33589,
                        "name": "votes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32714,
                        "src": "10469:5:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                          "typeString": "mapping(uint256 => mapping(address => uint256))"
                        }
                      },
                      "id": 33591,
                      "indexExpression": {
                        "id": 33590,
                        "name": "_proposalId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33554,
                        "src": "10475:11:56",
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
                      "src": "10469:18:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 33594,
                    "indexExpression": {
                      "expression": {
                        "id": 33592,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "10488:3:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 33593,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10492:6:56",
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "10488:10:56",
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
                    "src": "10469:30:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10452:47:56"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 33599,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 33597,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33588,
                          "src": "10517:6:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 33598,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10526:1:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "10517:10:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "596f7520646f6e2774206861766520616e7920766f74696e6720746f6b656e73",
                        "id": 33600,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10529:34:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_e4e2061c0122b12a59941c011c910830f719c2a4fb21054567e78af34daae500",
                          "typeString": "literal_string \"You don't have any voting tokens\""
                        },
                        "value": "You don't have any voting tokens"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_e4e2061c0122b12a59941c011c910830f719c2a4fb21054567e78af34daae500",
                          "typeString": "literal_string \"You don't have any voting tokens\""
                        }
                      ],
                      "id": 33596,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "10509:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 33601,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10509:55:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33602,
                  "nodeType": "ExpressionStatement",
                  "src": "10509:55:56"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 33609,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "10616:3:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 33610,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10620:6:56",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "10616:10:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 33611,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33588,
                        "src": "10628:6:56",
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
                            "baseExpression": {
                              "id": 33604,
                              "name": "quotasAddresses",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32797,
                              "src": "10582:15:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                                "typeString": "mapping(uint256 => address)"
                              }
                            },
                            "id": 33606,
                            "indexExpression": {
                              "id": 33605,
                              "name": "fundId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33574,
                              "src": "10598:6:56",
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
                            "src": "10582:23:56",
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
                          "id": 33603,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2490,
                          "src": "10575:6:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$2490_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 33607,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10575:31:56",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$2490",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 33608,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10607:8:56",
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2457,
                      "src": "10575:40:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 33612,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10575:60:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 33613,
                  "nodeType": "ExpressionStatement",
                  "src": "10575:60:56"
                },
                {
                  "expression": {
                    "id": 33621,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "baseExpression": {
                          "id": 33614,
                          "name": "votes",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32714,
                          "src": "10645:5:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(uint256 => mapping(address => uint256))"
                          }
                        },
                        "id": 33618,
                        "indexExpression": {
                          "id": 33615,
                          "name": "_proposalId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33554,
                          "src": "10651:11:56",
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
                        "src": "10645:18:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 33619,
                      "indexExpression": {
                        "expression": {
                          "id": 33616,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "10664:3:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 33617,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10668:6:56",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "10664:10:56",
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
                      "src": "10645:30:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "30",
                      "id": 33620,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "10678:1:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "10645:34:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 33622,
                  "nodeType": "ExpressionStatement",
                  "src": "10645:34:56"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 33624,
                        "name": "_proposalId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33554,
                        "src": "10717:11:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 33625,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "10730:3:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 33626,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10734:6:56",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "10730:10:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 33627,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33588,
                        "src": "10742:6:56",
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
                      "id": 33623,
                      "name": "VotingTokensWithdrawn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32740,
                      "src": "10695:21:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,address,uint256)"
                      }
                    },
                    "id": 33628,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10695:54:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33629,
                  "nodeType": "EmitStatement",
                  "src": "10690:59:56"
                }
              ]
            },
            "functionSelector": "6106f1ae",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "withdrawVotingTokens",
            "nameLocation": "10097:20:56",
            "parameters": {
              "id": 33555,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 33554,
                  "mutability": "mutable",
                  "name": "_proposalId",
                  "nameLocation": "10126:11:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 33631,
                  "src": "10118:19:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 33553,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10118:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10117:21:56"
            },
            "returnParameters": {
              "id": 33556,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10146:0:56"
            },
            "scope": 33632,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 32675,
              "name": "ERC721",
              "nameLocations": [
                "745:6:56"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 3525,
              "src": "745:6:56"
            },
            "id": 32676,
            "nodeType": "InheritanceSpecifier",
            "src": "745:6:56"
          },
          {
            "baseName": {
              "id": 32677,
              "name": "Ownable",
              "nameLocations": [
                "753:7:56"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1251,
              "src": "753:7:56"
            },
            "id": 32678,
            "nodeType": "InheritanceSpecifier",
            "src": "753:7:56"
          }
        ],
        "canonicalName": "WhaleFinance",
        "contractDependencies": [
          1799
        ],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          33632,
          1251,
          3525,
          1355,
          3688,
          3642,
          4904,
          4916,
          3963
        ],
        "name": "WhaleFinance",
        "nameLocation": "729:12:56",
        "scope": 33633,
        "usedErrors": [
          1117,
          1122,
          1313,
          1318,
          1327,
          1332,
          1337,
          1344,
          1349,
          1354
        ],
        "usedEvents": [
          1128,
          3541,
          3550,
          3559,
          32724,
          32732,
          32740,
          32750,
          32803,
          32811,
          32819,
          32825
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 56
} 

export const WhaleFinanceAbi = WhaleFinance["abi"]


