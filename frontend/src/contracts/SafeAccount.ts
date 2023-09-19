const SafeAccount = {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "executeCall",
        "outputs": [
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "hash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "name": "isValidSignature",
        "outputs": [
          {
            "internalType": "bytes4",
            "name": "magicValue",
            "type": "bytes4"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "nonce",
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
        "name": "token",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
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
        "stateMutability": "payable",
        "type": "receive"
      }
    ],
    "bytecode": {
      "object": "0x608060405234801561001057600080fd5b506109ba806100206000396000f3fe6080604052600436106100695760003560e01c80639e5d4c49116100435780639e5d4c4914610136578063affed0e01461015b578063fc0c546a1461017757600080fd5b806301ffc9a7146100755780631626ba7e146100ab5780638da5cb5b146100fc57600080fd5b3661007057005b600080fd5b34801561008157600080fd5b50610096610090366004610629565b50600090565b60405190151581526020015b60405180910390f35b3480156100b757600080fd5b506100cb6100c63660046106a1565b6101bc565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016100a2565b34801561010857600080fd5b5061011161020e565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100a2565b61014e61014436600461079f565b6060949350505050565b6040516100a29190610896565b34801561016757600080fd5b50604051600081526020016100a2565b34801561018357600080fd5b5061018c6102ca565b6040805193845273ffffffffffffffffffffffffffffffffffffffff9092166020840152908201526060016100a2565b6000806101d16101ca61020e565b858561031d565b9050801561020257507f1626ba7e000000000000000000000000000000000000000000000000000000009050610208565b60009150505b92915050565b60008060008061021c6102ca565b925092509250468314610233576000935050505090565b6040517f6352211e0000000000000000000000000000000000000000000000000000000081526004810182905273ffffffffffffffffffffffffffffffffffffffff831690636352211e90602401602060405180830381865afa15801561029e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c291906108a9565b935050505090565b60408051606080825260808201909252600091829182918291906020820181803683370190505090506060604d60208301303c8080602001905181019061031191906108c6565b93509350935050909192565b600080600061032c8585610398565b90925090506000816004811115610345576103456108ff565b14801561037d57508573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b8061038e575061038e8686866103dd565b9695505050505050565b60008082516041036103ce5760208301516040840151606085015160001a6103c28782858561053a565b945094505050506103d6565b506000905060025b9250929050565b60008060008573ffffffffffffffffffffffffffffffffffffffff16631626ba7e60e01b868660405160240161041492919061092e565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090941693909317909252905161049d919061094f565b600060405180830381855afa9150503d80600081146104d8576040519150601f19603f3d011682016040523d82523d6000602084013e6104dd565b606091505b50915091508180156104f157506020815110155b801561038e575080517f1626ba7e000000000000000000000000000000000000000000000000000000009061052f908301602090810190840161096b565b149695505050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156105715750600090506003610620565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156105c5573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff811661061957600060019250925050610620565b9150600090505b94509492505050565b60006020828403121561063b57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461066b57600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080604083850312156106b457600080fd5b82359150602083013567ffffffffffffffff808211156106d357600080fd5b818501915085601f8301126106e757600080fd5b8135818111156106f9576106f9610672565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561073f5761073f610672565b8160405282815288602084870101111561075857600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b73ffffffffffffffffffffffffffffffffffffffff8116811461079c57600080fd5b50565b600080600080606085870312156107b557600080fd5b84356107c08161077a565b935060208501359250604085013567ffffffffffffffff808211156107e457600080fd5b818701915087601f8301126107f857600080fd5b81358181111561080757600080fd5b88602082850101111561081957600080fd5b95989497505060200194505050565b60005b8381101561084357818101518382015260200161082b565b50506000910152565b60008151808452610864816020860160208601610828565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061066b602083018461084c565b6000602082840312156108bb57600080fd5b815161066b8161077a565b6000806000606084860312156108db57600080fd5b8351925060208401516108ed8161077a565b80925050604084015190509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b828152604060208201526000610947604083018461084c565b949350505050565b60008251610961818460208701610828565b9190910192915050565b60006020828403121561097d57600080fd5b505191905056fea2646970667358221220584ebb275b15d750463b3fd52f25ce4265c7a6dfa7ad88203a8cf0a06206551364736f6c63430008110033",
      "sourceMap": "359:1461:48:-:0;;;;;;;;;;;;;;;;;;;",
      "linkReferences": {}
    },
    "deployedBytecode": {
      "object": "0x6080604052600436106100695760003560e01c80639e5d4c49116100435780639e5d4c4914610136578063affed0e01461015b578063fc0c546a1461017757600080fd5b806301ffc9a7146100755780631626ba7e146100ab5780638da5cb5b146100fc57600080fd5b3661007057005b600080fd5b34801561008157600080fd5b50610096610090366004610629565b50600090565b60405190151581526020015b60405180910390f35b3480156100b757600080fd5b506100cb6100c63660046106a1565b6101bc565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016100a2565b34801561010857600080fd5b5061011161020e565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100a2565b61014e61014436600461079f565b6060949350505050565b6040516100a29190610896565b34801561016757600080fd5b50604051600081526020016100a2565b34801561018357600080fd5b5061018c6102ca565b6040805193845273ffffffffffffffffffffffffffffffffffffffff9092166020840152908201526060016100a2565b6000806101d16101ca61020e565b858561031d565b9050801561020257507f1626ba7e000000000000000000000000000000000000000000000000000000009050610208565b60009150505b92915050565b60008060008061021c6102ca565b925092509250468314610233576000935050505090565b6040517f6352211e0000000000000000000000000000000000000000000000000000000081526004810182905273ffffffffffffffffffffffffffffffffffffffff831690636352211e90602401602060405180830381865afa15801561029e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c291906108a9565b935050505090565b60408051606080825260808201909252600091829182918291906020820181803683370190505090506060604d60208301303c8080602001905181019061031191906108c6565b93509350935050909192565b600080600061032c8585610398565b90925090506000816004811115610345576103456108ff565b14801561037d57508573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b8061038e575061038e8686866103dd565b9695505050505050565b60008082516041036103ce5760208301516040840151606085015160001a6103c28782858561053a565b945094505050506103d6565b506000905060025b9250929050565b60008060008573ffffffffffffffffffffffffffffffffffffffff16631626ba7e60e01b868660405160240161041492919061092e565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090941693909317909252905161049d919061094f565b600060405180830381855afa9150503d80600081146104d8576040519150601f19603f3d011682016040523d82523d6000602084013e6104dd565b606091505b50915091508180156104f157506020815110155b801561038e575080517f1626ba7e000000000000000000000000000000000000000000000000000000009061052f908301602090810190840161096b565b149695505050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156105715750600090506003610620565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156105c5573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff811661061957600060019250925050610620565b9150600090505b94509492505050565b60006020828403121561063b57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461066b57600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080604083850312156106b457600080fd5b82359150602083013567ffffffffffffffff808211156106d357600080fd5b818501915085601f8301126106e757600080fd5b8135818111156106f9576106f9610672565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561073f5761073f610672565b8160405282815288602084870101111561075857600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b73ffffffffffffffffffffffffffffffffffffffff8116811461079c57600080fd5b50565b600080600080606085870312156107b557600080fd5b84356107c08161077a565b935060208501359250604085013567ffffffffffffffff808211156107e457600080fd5b818701915087601f8301126107f857600080fd5b81358181111561080757600080fd5b88602082850101111561081957600080fd5b95989497505060200194505050565b60005b8381101561084357818101518382015260200161082b565b50506000910152565b60008151808452610864816020860160208601610828565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061066b602083018461084c565b6000602082840312156108bb57600080fd5b815161066b8161077a565b6000806000606084860312156108db57600080fd5b8351925060208401516108ed8161077a565b80925050604084015190509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b828152604060208201526000610947604083018461084c565b949350505050565b60008251610961818460208701610828565b9190910192915050565b60006020828403121561097d57600080fd5b505191905056fea2646970667358221220584ebb275b15d750463b3fd52f25ce4265c7a6dfa7ad88203a8cf0a06206551364736f6c63430008110033",
      "sourceMap": "359:1461:48:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1495:101;;;;;;;;;;-1:-1:-1;1495:101:48;;;;;:::i;:::-;-1:-1:-1;1588:4:48;;1495:101;;;;516:14:52;;509:22;491:41;;479:2;464:18;1495:101:48;;;;;;;;459:377;;;;;;;;;;-1:-1:-1;459:377:48;;;;;:::i;:::-;;:::i;:::-;;;1959:66:52;1947:79;;;1929:98;;1917:2;1902:18;459:377:48;1785:248:52;1128:245:48;;;;;;;;;;;;;:::i;:::-;;;2214:42:52;2202:55;;;2184:74;;2172:2;2157:18;1128:245:48;2038:226:52;1602:150:48;;;;;;:::i;:::-;1736:12;1602:150;;;;;;;;;;;;;;:::i;1758:60::-;;;;;;;;;;-1:-1:-1;1758:60:48;;1807:7;4184:25:52;;4172:2;4157:18;1758:60:48;4038:177:52;842:280:48;;;;;;;;;;;;;:::i;:::-;;;;4422:25:52;;;4495:42;4483:55;;;4478:2;4463:18;;4456:83;4555:18;;;4548:34;4410:2;4395:18;842:280:48;4220:368:52;459:377:48;568:17;597:12;612:108;662:7;:5;:7::i;:::-;683:4;701:9;612:36;:108::i;:::-;597:123;;735:7;731:79;;;-1:-1:-1;765:34:48;;-1:-1:-1;758:41:48;;731:79;820:9;;;;459:377;;;;;:::o;1128:245::-;1166:7;1186:15;1203:21;1226:15;1245:7;:5;:7::i;:::-;1185:67;;;;;;1277:13;1266:7;:24;1262:47;;1307:1;1292:17;;;;;1128:245;:::o;1262:47::-;1327:39;;;;;;;;4184:25:52;;;1327:30:48;;;;;;4157:18:52;;1327:39:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1320:46;;;;;1128:245;:::o;842:280::-;939:15;;;949:4;939:15;;;;;;;;;880:7;;;;;;;;939:15;;;;;;;;;;;-1:-1:-1;939:15:48;917:37;;1036:4;1030;1023;1015:6;1011:17;1000:9;988:53;1079:6;1068:47;;;;;;;;;;;;:::i;:::-;1061:54;;;;;;;842:280;;;:::o;1014:366:40:-;1120:4;1137:17;1156:24;1184:33;1201:4;1207:9;1184:16;:33::i;:::-;1136:81;;-1:-1:-1;1136:81:40;-1:-1:-1;1256:26:40;1247:5;:35;;;;;;;;:::i;:::-;;:58;;;;;1299:6;1286:19;;:9;:19;;;1247:58;1246:127;;;;1322:51;1349:6;1357:4;1363:9;1322:26;:51::i;:::-;1227:146;1014:366;-1:-1:-1;;;;;;1014:366:40:o;2145:730:39:-;2226:7;2235:12;2263:9;:16;2283:2;2263:22;2259:610;;2599:4;2584:20;;2578:27;2648:4;2633:20;;2627:27;2705:4;2690:20;;2684:27;2301:9;2676:36;2746:25;2757:4;2676:36;2578:27;2627;2746:10;:25::i;:::-;2739:32;;;;;;;;;2259:610;-1:-1:-1;2818:1:39;;-1:-1:-1;2822:35:39;2259:610;2145:730;;;;;:::o;1786:473:40:-;1929:4;1946:12;1960:19;1983:6;:17;;2037:34;;;2073:4;2079:9;2014:75;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1983:116;;;;2014:75;1983:116;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1945:154;;;;2117:7;:42;;;;;2157:2;2140:6;:13;:19;;2117:42;:134;;;;-1:-1:-1;2175:29:40;;2216:34;;2175:29;;;;;;;;;;;;:::i;:::-;:76;;1786:473;-1:-1:-1;;;;;;1786:473:40:o;5009:1456:39:-;5097:7;;6021:66;6008:79;;6004:161;;;-1:-1:-1;6119:1:39;;-1:-1:-1;6123:30:39;6103:51;;6004:161;6276:24;;;6259:14;6276:24;;;;;;;;;6425:25:52;;;6498:4;6486:17;;6466:18;;;6459:45;;;;6520:18;;;6513:34;;;6563:18;;;6556:34;;;6276:24:39;;6397:19:52;;6276:24:39;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;6276:24:39;;;;;;-1:-1:-1;;6314:20:39;;;6310:101;;6366:1;6370:29;6350:50;;;;;;;6310:101;6429:6;-1:-1:-1;6437:20:39;;-1:-1:-1;5009:1456:39;;;;;;;;:::o;14:332:52:-;72:6;125:2;113:9;104:7;100:23;96:32;93:52;;;141:1;138;131:12;93:52;180:9;167:23;230:66;223:5;219:78;212:5;209:89;199:117;;312:1;309;302:12;199:117;335:5;14:332;-1:-1:-1;;;14:332:52:o;543:184::-;595:77;592:1;585:88;692:4;689:1;682:15;716:4;713:1;706:15;732:1048;809:6;817;870:2;858:9;849:7;845:23;841:32;838:52;;;886:1;883;876:12;838:52;922:9;909:23;899:33;;983:2;972:9;968:18;955:32;1006:18;1047:2;1039:6;1036:14;1033:34;;;1063:1;1060;1053:12;1033:34;1101:6;1090:9;1086:22;1076:32;;1146:7;1139:4;1135:2;1131:13;1127:27;1117:55;;1168:1;1165;1158:12;1117:55;1204:2;1191:16;1226:2;1222;1219:10;1216:36;;;1232:18;;:::i;:::-;1366:2;1360:9;1428:4;1420:13;;1271:66;1416:22;;;1440:2;1412:31;1408:40;1396:53;;;1464:18;;;1484:22;;;1461:46;1458:72;;;1510:18;;:::i;:::-;1550:10;1546:2;1539:22;1585:2;1577:6;1570:18;1625:7;1620:2;1615;1611;1607:11;1603:20;1600:33;1597:53;;;1646:1;1643;1636:12;1597:53;1702:2;1697;1693;1689:11;1684:2;1676:6;1672:15;1659:46;1747:1;1742:2;1737;1729:6;1725:15;1721:24;1714:35;1768:6;1758:16;;;;;;;732:1048;;;;;:::o;2269:154::-;2355:42;2348:5;2344:54;2337:5;2334:65;2324:93;;2413:1;2410;2403:12;2324:93;2269:154;:::o;2428:794::-;2516:6;2524;2532;2540;2593:2;2581:9;2572:7;2568:23;2564:32;2561:52;;;2609:1;2606;2599:12;2561:52;2648:9;2635:23;2667:31;2692:5;2667:31;:::i;:::-;2717:5;-1:-1:-1;2769:2:52;2754:18;;2741:32;;-1:-1:-1;2824:2:52;2809:18;;2796:32;2847:18;2877:14;;;2874:34;;;2904:1;2901;2894:12;2874:34;2942:6;2931:9;2927:22;2917:32;;2987:7;2980:4;2976:2;2972:13;2968:27;2958:55;;3009:1;3006;2999:12;2958:55;3049:2;3036:16;3075:2;3067:6;3064:14;3061:34;;;3091:1;3088;3081:12;3061:34;3136:7;3131:2;3122:6;3118:2;3114:15;3110:24;3107:37;3104:57;;;3157:1;3154;3147:12;3104:57;2428:794;;;;-1:-1:-1;;3188:2:52;3180:11;;-1:-1:-1;;;2428:794:52:o;3227:250::-;3312:1;3322:113;3336:6;3333:1;3330:13;3322:113;;;3412:11;;;3406:18;3393:11;;;3386:39;3358:2;3351:10;3322:113;;;-1:-1:-1;;3469:1:52;3451:16;;3444:27;3227:250::o;3482:329::-;3523:3;3561:5;3555:12;3588:6;3583:3;3576:19;3604:76;3673:6;3666:4;3661:3;3657:14;3650:4;3643:5;3639:16;3604:76;:::i;:::-;3725:2;3713:15;3730:66;3709:88;3700:98;;;;3800:4;3696:109;;3482:329;-1:-1:-1;;3482:329:52:o;3816:217::-;3963:2;3952:9;3945:21;3926:4;3983:44;4023:2;4012:9;4008:18;4000:6;3983:44;:::i;4593:251::-;4663:6;4716:2;4704:9;4695:7;4691:23;4687:32;4684:52;;;4732:1;4729;4722:12;4684:52;4764:9;4758:16;4783:31;4808:5;4783:31;:::i;4849:381::-;4945:6;4953;4961;5014:2;5002:9;4993:7;4989:23;4985:32;4982:52;;;5030:1;5027;5020:12;4982:52;5059:9;5053:16;5043:26;;5112:2;5101:9;5097:18;5091:25;5125:31;5150:5;5125:31;:::i;:::-;5175:5;5165:15;;;5220:2;5209:9;5205:18;5199:25;5189:35;;4849:381;;;;;:::o;5235:184::-;5287:77;5284:1;5277:88;5384:4;5381:1;5374:15;5408:4;5405:1;5398:15;5424:288;5599:6;5588:9;5581:25;5642:2;5637;5626:9;5622:18;5615:30;5562:4;5662:44;5702:2;5691:9;5687:18;5679:6;5662:44;:::i;:::-;5654:52;5424:288;-1:-1:-1;;;;5424:288:52:o;5717:287::-;5846:3;5884:6;5878:13;5900:66;5959:6;5954:3;5947:4;5939:6;5935:17;5900:66;:::i;:::-;5982:16;;;;;5717:287;-1:-1:-1;;5717:287:52:o;6009:184::-;6079:6;6132:2;6120:9;6111:7;6107:23;6103:32;6100:52;;;6148:1;6145;6138:12;6100:52;-1:-1:-1;6171:16:52;;6009:184;-1:-1:-1;6009:184:52:o",
      "linkReferences": {}
    },
    "methodIdentifiers": {
      "executeCall(address,uint256,bytes)": "9e5d4c49",
      "isValidSignature(bytes32,bytes)": "1626ba7e",
      "nonce()": "affed0e0",
      "owner()": "8da5cb5b",
      "supportsInterface(bytes4)": "01ffc9a7",
      "token()": "fc0c546a"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.17+commit.8df45f5f\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"executeCall\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"hash\",\"type\":\"bytes32\"},{\"internalType\":\"bytes\",\"name\":\"signature\",\"type\":\"bytes\"}],\"name\":\"isValidSignature\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"magicValue\",\"type\":\"bytes4\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"nonce\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"token\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"executeCall(address,uint256,bytes)\":{\"details\":\"Executes `call` on address `to`, with value `value` and calldata `data`. MUST revert and bubble up errors if call fails. By default, token bound accounts MUST allow the owner of the ERC-721 token which owns the account to execute arbitrary calls using `executeCall`. Token bound accounts MAY implement additional authorization mechanisms which limit the ability of the ERC-721 token holder to execute calls. Token bound accounts MAY implement additional execution functions which grant execution permissions to other non-owner accounts.\",\"returns\":{\"_0\":\"The result of the call\"}},\"isValidSignature(bytes32,bytes)\":{\"details\":\"Should return whether the signature provided is valid for the provided data\",\"params\":{\"hash\":\"Hash of the data to be signed\",\"signature\":\"Signature byte array associated with _data\"}},\"nonce()\":{\"details\":\"Returns a nonce value that is updated on every successful transaction\",\"returns\":{\"_0\":\"The current account nonce\"}},\"owner()\":{\"details\":\"Returns the owner of the ERC-721 token which controls the account if the token exists. This is value is obtained by calling `ownerOf` on the ERC-721 contract.\",\"returns\":{\"_0\":\"Address of the owner of the ERC-721 token which owns the account\"}},\"supportsInterface(bytes4)\":{\"details\":\"Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.\"},\"token()\":{\"details\":\"Returns identifier of the ERC-721 token which owns the account The return value of this function MUST be constant - it MUST NOT change over time.\",\"returns\":{\"_0\":\"The EIP-155 ID of the chain the ERC-721 token exists on\",\"_1\":\"The contract address of the ERC-721 token\",\"_2\":\"The ID of the ERC-721 token\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/SafeAccount.sol\":\"SafeAccount\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin/=lib/openzeppelin-contracts/\",\":@upgradeable/=lib/openzeppelin-contracts-upgradeable/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/interfaces/IERC1271.sol\":{\"keccak256\":\"0x0705a4b1b86d7b0bd8432118f226ba139c44b9dcaba0a6eafba2dd7d0639c544\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c45b821ef9e882e57c256697a152e108f0f2ad6997609af8904cae99c9bd422e\",\"dweb:/ipfs/QmRKCJW6jjzR5UYZcLpGnhEJ75UVbH6EHkEa49sWx2SKng\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x5bce51e11f7d194b79ea59fe00c9e8de9fa2c5530124960f29a24d4c740a3266\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7e66dfde185df46104c11bc89d08fa0760737aa59a2b8546a656473d810a8ea4\",\"dweb:/ipfs/QmXvyqtXPaPss2PD7eqPoSao5Szm2n6UMoiG8TZZDjmChR\"]},\"lib/openzeppelin-contracts/contracts/utils/Strings.sol\":{\"keccak256\":\"0x3088eb2868e8d13d89d16670b5f8612c4ab9ff8956272837d8e90106c59c14a0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b81d9ff6559ea5c47fc573e17ece6d9ba5d6839e213e6ebc3b4c5c8fe4199d7f\",\"dweb:/ipfs/QmPCW1bFisUzJkyjroY3yipwfism9RRCigCcK1hbXtVM8n\"]},\"lib/openzeppelin-contracts/contracts/utils/cryptography/ECDSA.sol\":{\"keccak256\":\"0x809bc3edb4bcbef8263fa616c1b60ee0004b50a8a1bfa164d8f57fd31f520c58\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8b93a1e39a4a19eba1600b92c96f435442db88cac91e315c8291547a2a7bcfe2\",\"dweb:/ipfs/QmTm34KVe6uZBZwq8dZDNWwPcm24qBJdxqL3rPxBJ4LrMv\"]},\"lib/openzeppelin-contracts/contracts/utils/cryptography/SignatureChecker.sol\":{\"keccak256\":\"0x3af3ca86df39aac39a0514c84459d691434a108d2151c8ce9d69f32e315cab80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://77d1f1cf302cd5e1dfbbb4ce3b281b28e8c52942d4319fce43df2e1b6f02a52d\",\"dweb:/ipfs/QmT6ZXStmK3Knhh9BokeVHQ9HXTBZNgL3Eb1ar1cYg1hWy\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]},\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xe4455ac1eb7fc497bb7402579e7b4d64d928b846fce7d2b6fde06d366f21c2b3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://cc8841b3cd48ad125e2f46323c8bad3aa0e88e399ec62acb9e57efa7e7c8058c\",\"dweb:/ipfs/QmSqE4mXHA2BXW58deDbXE8MTcsL5JSKNDbm23sVQxRLPS\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7\",\"dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6\"]},\"src/SafeAccount.sol\":{\"keccak256\":\"0x548629e5de1a3ccd760cb027f8386fdd398f7c25f02e72046a773cb813e98804\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://cae0c41559119420b82622496e7c4b073cf61e6f9c30059197a21903ea5b3637\",\"dweb:/ipfs/QmcWmZ6FuN2dxzyYCddbJeLbbRtSxxk9hQdz6DSiQXsswn\"]},\"src/interface/IERC6551Account.sol\":{\"keccak256\":\"0x17094454fd93bf100f335d11f20f452948927b2b42115dbfc2c0f80aebbd4e78\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2d47f0000326a60c902afb4d02ad0747aefb49933a5a6f02677528dde73bd55f\",\"dweb:/ipfs/QmRjGCTZ1iARxxnsjfBLLvH6Chkag97jhxUDYtQBE7rKrC\"]}},\"version\":1}",
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
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              }
            ],
            "stateMutability": "payable",
            "type": "function",
            "name": "executeCall",
            "outputs": [
              {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
              },
              {
                "internalType": "bytes",
                "name": "signature",
                "type": "bytes"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "isValidSignature",
            "outputs": [
              {
                "internalType": "bytes4",
                "name": "magicValue",
                "type": "bytes4"
              }
            ]
          },
          {
            "inputs": [],
            "stateMutability": "view",
            "type": "function",
            "name": "nonce",
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
            "name": "token",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ]
          },
          {
            "inputs": [],
            "stateMutability": "payable",
            "type": "receive"
          }
        ],
        "devdoc": {
          "kind": "dev",
          "methods": {
            "executeCall(address,uint256,bytes)": {
              "details": "Executes `call` on address `to`, with value `value` and calldata `data`. MUST revert and bubble up errors if call fails. By default, token bound accounts MUST allow the owner of the ERC-721 token which owns the account to execute arbitrary calls using `executeCall`. Token bound accounts MAY implement additional authorization mechanisms which limit the ability of the ERC-721 token holder to execute calls. Token bound accounts MAY implement additional execution functions which grant execution permissions to other non-owner accounts.",
              "returns": {
                "_0": "The result of the call"
              }
            },
            "isValidSignature(bytes32,bytes)": {
              "details": "Should return whether the signature provided is valid for the provided data",
              "params": {
                "hash": "Hash of the data to be signed",
                "signature": "Signature byte array associated with _data"
              }
            },
            "nonce()": {
              "details": "Returns a nonce value that is updated on every successful transaction",
              "returns": {
                "_0": "The current account nonce"
              }
            },
            "owner()": {
              "details": "Returns the owner of the ERC-721 token which controls the account if the token exists. This is value is obtained by calling `ownerOf` on the ERC-721 contract.",
              "returns": {
                "_0": "Address of the owner of the ERC-721 token which owns the account"
              }
            },
            "supportsInterface(bytes4)": {
              "details": "Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas."
            },
            "token()": {
              "details": "Returns identifier of the ERC-721 token which owns the account The return value of this function MUST be constant - it MUST NOT change over time.",
              "returns": {
                "_0": "The EIP-155 ID of the chain the ERC-721 token exists on",
                "_1": "The contract address of the ERC-721 token",
                "_2": "The ID of the ERC-721 token"
              }
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
          "src/SafeAccount.sol": "SafeAccount"
        },
        "libraries": {}
      },
      "sources": {
        "lib/openzeppelin-contracts/contracts/interfaces/IERC1271.sol": {
          "keccak256": "0x0705a4b1b86d7b0bd8432118f226ba139c44b9dcaba0a6eafba2dd7d0639c544",
          "urls": [
            "bzz-raw://c45b821ef9e882e57c256697a152e108f0f2ad6997609af8904cae99c9bd422e",
            "dweb:/ipfs/QmRKCJW6jjzR5UYZcLpGnhEJ75UVbH6EHkEa49sWx2SKng"
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
        "lib/openzeppelin-contracts/contracts/utils/Strings.sol": {
          "keccak256": "0x3088eb2868e8d13d89d16670b5f8612c4ab9ff8956272837d8e90106c59c14a0",
          "urls": [
            "bzz-raw://b81d9ff6559ea5c47fc573e17ece6d9ba5d6839e213e6ebc3b4c5c8fe4199d7f",
            "dweb:/ipfs/QmPCW1bFisUzJkyjroY3yipwfism9RRCigCcK1hbXtVM8n"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts/contracts/utils/cryptography/ECDSA.sol": {
          "keccak256": "0x809bc3edb4bcbef8263fa616c1b60ee0004b50a8a1bfa164d8f57fd31f520c58",
          "urls": [
            "bzz-raw://8b93a1e39a4a19eba1600b92c96f435442db88cac91e315c8291547a2a7bcfe2",
            "dweb:/ipfs/QmTm34KVe6uZBZwq8dZDNWwPcm24qBJdxqL3rPxBJ4LrMv"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts/contracts/utils/cryptography/SignatureChecker.sol": {
          "keccak256": "0x3af3ca86df39aac39a0514c84459d691434a108d2151c8ce9d69f32e315cab80",
          "urls": [
            "bzz-raw://77d1f1cf302cd5e1dfbbb4ce3b281b28e8c52942d4319fce43df2e1b6f02a52d",
            "dweb:/ipfs/QmT6ZXStmK3Knhh9BokeVHQ9HXTBZNgL3Eb1ar1cYg1hWy"
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
        "src/SafeAccount.sol": {
          "keccak256": "0x548629e5de1a3ccd760cb027f8386fdd398f7c25f02e72046a773cb813e98804",
          "urls": [
            "bzz-raw://cae0c41559119420b82622496e7c4b073cf61e6f9c30059197a21903ea5b3637",
            "dweb:/ipfs/QmcWmZ6FuN2dxzyYCddbJeLbbRtSxxk9hQdz6DSiQXsswn"
          ],
          "license": "MIT"
        },
        "src/interface/IERC6551Account.sol": {
          "keccak256": "0x17094454fd93bf100f335d11f20f452948927b2b42115dbfc2c0f80aebbd4e78",
          "urls": [
            "bzz-raw://2d47f0000326a60c902afb4d02ad0747aefb49933a5a6f02677528dde73bd55f",
            "dweb:/ipfs/QmRjGCTZ1iARxxnsjfBLLvH6Chkag97jhxUDYtQBE7rKrC"
          ],
          "license": "MIT"
        }
      },
      "version": 1
    },
    "ast": {
      "absolutePath": "src/SafeAccount.sol",
      "id": 44429,
      "exportedSymbols": {
        "ECDSA": [
          43087
        ],
        "IERC1271": [
          39640
        ],
        "IERC165": [
          43222
        ],
        "IERC6551Account": [
          44705
        ],
        "IERC721": [
          41911
        ],
        "Math": [
          44088
        ],
        "SafeAccount": [
          44428
        ],
        "SignatureChecker": [
          43186
        ],
        "SignedMath": [
          44193
        ],
        "Strings": [
          42721
        ]
      },
      "nodeType": "SourceUnit",
      "src": "32:1788:48",
      "nodes": [
        {
          "id": 44279,
          "nodeType": "PragmaDirective",
          "src": "32:24:48",
          "nodes": [],
          "literals": [
            "solidity",
            "^",
            "0.8",
            ".13"
          ]
        },
        {
          "id": 44280,
          "nodeType": "ImportDirective",
          "src": "58:65:48",
          "nodes": [],
          "absolutePath": "lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol",
          "file": "@openzeppelin/contracts/utils/introspection/IERC165.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 44429,
          "sourceUnit": 43223,
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "id": 44281,
          "nodeType": "ImportDirective",
          "src": "124:58:48",
          "nodes": [],
          "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol",
          "file": "@openzeppelin/contracts/token/ERC721/IERC721.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 44429,
          "sourceUnit": 41912,
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "id": 44282,
          "nodeType": "ImportDirective",
          "src": "183:57:48",
          "nodes": [],
          "absolutePath": "lib/openzeppelin-contracts/contracts/interfaces/IERC1271.sol",
          "file": "@openzeppelin/contracts/interfaces/IERC1271.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 44429,
          "sourceUnit": 39641,
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "id": 44283,
          "nodeType": "ImportDirective",
          "src": "241:73:48",
          "nodes": [],
          "absolutePath": "lib/openzeppelin-contracts/contracts/utils/cryptography/SignatureChecker.sol",
          "file": "@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 44429,
          "sourceUnit": 43187,
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "id": 44284,
          "nodeType": "ImportDirective",
          "src": "316:41:48",
          "nodes": [],
          "absolutePath": "src/interface/IERC6551Account.sol",
          "file": "./interface/IERC6551Account.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 44429,
          "sourceUnit": 44706,
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "id": 44428,
          "nodeType": "ContractDefinition",
          "src": "359:1461:48",
          "nodes": [
            {
              "id": 44294,
              "nodeType": "FunctionDefinition",
              "src": "424:29:48",
              "nodes": [],
              "body": {
                "id": 44293,
                "nodeType": "Block",
                "src": "451:2:48",
                "nodes": [],
                "statements": []
              },
              "baseFunctions": [
                44670
              ],
              "implemented": true,
              "kind": "receive",
              "modifiers": [],
              "name": "",
              "nameLocation": "-1:-1:-1",
              "parameters": {
                "id": 44291,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "431:2:48"
              },
              "returnParameters": {
                "id": 44292,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "451:0:48"
              },
              "scope": 44428,
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "id": 44323,
              "nodeType": "FunctionDefinition",
              "src": "459:377:48",
              "nodes": [],
              "body": {
                "id": 44322,
                "nodeType": "Block",
                "src": "587:249:48",
                "nodes": [],
                "statements": [
                  {
                    "assignments": [
                      44304
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 44304,
                        "mutability": "mutable",
                        "name": "isValid",
                        "nameLocation": "602:7:48",
                        "nodeType": "VariableDeclaration",
                        "scope": 44322,
                        "src": "597:12:48",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 44303,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "597:4:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 44312,
                    "initialValue": {
                      "arguments": [
                        {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 44307,
                            "name": "owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 44385,
                            "src": "662:5:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                              "typeString": "function () view returns (address)"
                            }
                          },
                          "id": 44308,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "662:7:48",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 44309,
                          "name": "hash",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 44296,
                          "src": "683:4:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "id": 44310,
                          "name": "signature",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 44298,
                          "src": "701:9:48",
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
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "expression": {
                          "id": 44305,
                          "name": "SignatureChecker",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 43186,
                          "src": "612:16:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_SignatureChecker_$43186_$",
                            "typeString": "type(library SignatureChecker)"
                          }
                        },
                        "id": 44306,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "629:19:48",
                        "memberName": "isValidSignatureNow",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 43133,
                        "src": "612:36:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_bool_$",
                          "typeString": "function (address,bytes32,bytes memory) view returns (bool)"
                        }
                      },
                      "id": 44311,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "612:108:48",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "597:123:48"
                  },
                  {
                    "condition": {
                      "id": 44313,
                      "name": "isValid",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44304,
                      "src": "735:7:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 44319,
                    "nodeType": "IfStatement",
                    "src": "731:79:48",
                    "trueBody": {
                      "id": 44318,
                      "nodeType": "Block",
                      "src": "744:66:48",
                      "statements": [
                        {
                          "expression": {
                            "expression": {
                              "expression": {
                                "id": 44314,
                                "name": "IERC1271",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 39640,
                                "src": "765:8:48",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_IERC1271_$39640_$",
                                  "typeString": "type(contract IERC1271)"
                                }
                              },
                              "id": 44315,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "774:16:48",
                              "memberName": "isValidSignature",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 39639,
                              "src": "765:25:48",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_declaration_view$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                                "typeString": "function IERC1271.isValidSignature(bytes32,bytes memory) view returns (bytes4)"
                              }
                            },
                            "id": 44316,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "791:8:48",
                            "memberName": "selector",
                            "nodeType": "MemberAccess",
                            "src": "765:34:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          "functionReturnParameters": 44302,
                          "id": 44317,
                          "nodeType": "Return",
                          "src": "758:41:48"
                        }
                      ]
                    }
                  },
                  {
                    "expression": {
                      "hexValue": "",
                      "id": 44320,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "827:2:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                        "typeString": "literal_string \"\""
                      },
                      "value": ""
                    },
                    "functionReturnParameters": 44302,
                    "id": 44321,
                    "nodeType": "Return",
                    "src": "820:9:48"
                  }
                ]
              },
              "baseFunctions": [
                39639
              ],
              "functionSelector": "1626ba7e",
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "isValidSignature",
              "nameLocation": "468:16:48",
              "parameters": {
                "id": 44299,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 44296,
                    "mutability": "mutable",
                    "name": "hash",
                    "nameLocation": "502:4:48",
                    "nodeType": "VariableDeclaration",
                    "scope": 44323,
                    "src": "494:12:48",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "typeName": {
                      "id": 44295,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "494:7:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 44298,
                    "mutability": "mutable",
                    "name": "signature",
                    "nameLocation": "529:9:48",
                    "nodeType": "VariableDeclaration",
                    "scope": 44323,
                    "src": "516:22:48",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 44297,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "516:5:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "484:60:48"
              },
              "returnParameters": {
                "id": 44302,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 44301,
                    "mutability": "mutable",
                    "name": "magicValue",
                    "nameLocation": "575:10:48",
                    "nodeType": "VariableDeclaration",
                    "scope": 44323,
                    "src": "568:17:48",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "typeName": {
                      "id": 44300,
                      "name": "bytes4",
                      "nodeType": "ElementaryTypeName",
                      "src": "568:6:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "567:19:48"
              },
              "scope": 44428,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "id": 44353,
              "nodeType": "FunctionDefinition",
              "src": "842:280:48",
              "nodes": [],
              "body": {
                "id": 44352,
                "nodeType": "Block",
                "src": "907:215:48",
                "nodes": [],
                "statements": [
                  {
                    "assignments": [
                      44333
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 44333,
                        "mutability": "mutable",
                        "name": "footer",
                        "nameLocation": "930:6:48",
                        "nodeType": "VariableDeclaration",
                        "scope": 44352,
                        "src": "917:19:48",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes"
                        },
                        "typeName": {
                          "id": 44332,
                          "name": "bytes",
                          "nodeType": "ElementaryTypeName",
                          "src": "917:5:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_storage_ptr",
                            "typeString": "bytes"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 44338,
                    "initialValue": {
                      "arguments": [
                        {
                          "hexValue": "30783630",
                          "id": 44336,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "949:4:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_96_by_1",
                            "typeString": "int_const 96"
                          },
                          "value": "0x60"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_96_by_1",
                            "typeString": "int_const 96"
                          }
                        ],
                        "id": 44335,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "NewExpression",
                        "src": "939:9:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                          "typeString": "function (uint256) pure returns (bytes memory)"
                        },
                        "typeName": {
                          "id": 44334,
                          "name": "bytes",
                          "nodeType": "ElementaryTypeName",
                          "src": "943:5:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_storage_ptr",
                            "typeString": "bytes"
                          }
                        }
                      },
                      "id": 44337,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "939:15:48",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes memory"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "917:37:48"
                  },
                  {
                    "AST": {
                      "nodeType": "YulBlock",
                      "src": "974:77:48",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "arguments": [],
                                "functionName": {
                                  "name": "address",
                                  "nodeType": "YulIdentifier",
                                  "src": "1000:7:48"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1000:9:48"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "footer",
                                    "nodeType": "YulIdentifier",
                                    "src": "1015:6:48"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1023:4:48",
                                    "type": "",
                                    "value": "0x20"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "1011:3:48"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1011:17:48"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1030:4:48",
                                "type": "",
                                "value": "0x4d"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1036:4:48",
                                "type": "",
                                "value": "0x60"
                              }
                            ],
                            "functionName": {
                              "name": "extcodecopy",
                              "nodeType": "YulIdentifier",
                              "src": "988:11:48"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "988:53:48"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "988:53:48"
                        }
                      ]
                    },
                    "evmVersion": "london",
                    "externalReferences": [
                      {
                        "declaration": 44333,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1015:6:48",
                        "valueSize": 1
                      }
                    ],
                    "id": 44339,
                    "nodeType": "InlineAssembly",
                    "src": "965:86:48"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 44342,
                          "name": "footer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 44333,
                          "src": "1079:6:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        {
                          "components": [
                            {
                              "id": 44344,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1088:7:48",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 44343,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1088:7:48",
                                "typeDescriptions": {}
                              }
                            },
                            {
                              "id": 44346,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1097:7:48",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 44345,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1097:7:48",
                                "typeDescriptions": {}
                              }
                            },
                            {
                              "id": 44348,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1106:7:48",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 44347,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1106:7:48",
                                "typeDescriptions": {}
                              }
                            }
                          ],
                          "id": 44349,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "1087:27:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_type$_t_uint256_$_$_t_type$_t_address_$_$_t_type$_t_uint256_$_$",
                            "typeString": "tuple(type(uint256),type(address),type(uint256))"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          },
                          {
                            "typeIdentifier": "t_tuple$_t_type$_t_uint256_$_$_t_type$_t_address_$_$_t_type$_t_uint256_$_$",
                            "typeString": "tuple(type(uint256),type(address),type(uint256))"
                          }
                        ],
                        "expression": {
                          "id": 44340,
                          "name": "abi",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -1,
                          "src": "1068:3:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_abi",
                            "typeString": "abi"
                          }
                        },
                        "id": 44341,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "1072:6:48",
                        "memberName": "decode",
                        "nodeType": "MemberAccess",
                        "src": "1068:10:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 44350,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1068:47:48",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_address_payable_$_t_uint256_$",
                        "typeString": "tuple(uint256,address payable,uint256)"
                      }
                    },
                    "functionReturnParameters": 44331,
                    "id": 44351,
                    "nodeType": "Return",
                    "src": "1061:54:48"
                  }
                ]
              },
              "baseFunctions": [
                44692
              ],
              "functionSelector": "fc0c546a",
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "token",
              "nameLocation": "851:5:48",
              "parameters": {
                "id": 44324,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "856:2:48"
              },
              "returnParameters": {
                "id": 44331,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 44326,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 44353,
                    "src": "880:7:48",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 44325,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "880:7:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 44328,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 44353,
                    "src": "889:7:48",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 44327,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "889:7:48",
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
                    "id": 44330,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 44353,
                    "src": "898:7:48",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 44329,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "898:7:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "879:27:48"
              },
              "scope": 44428,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "id": 44385,
              "nodeType": "FunctionDefinition",
              "src": "1128:245:48",
              "nodes": [],
              "body": {
                "id": 44384,
                "nodeType": "Block",
                "src": "1175:198:48",
                "nodes": [],
                "statements": [
                  {
                    "assignments": [
                      44359,
                      44361,
                      44363
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 44359,
                        "mutability": "mutable",
                        "name": "chainId",
                        "nameLocation": "1194:7:48",
                        "nodeType": "VariableDeclaration",
                        "scope": 44384,
                        "src": "1186:15:48",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 44358,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1186:7:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 44361,
                        "mutability": "mutable",
                        "name": "tokenContract",
                        "nameLocation": "1211:13:48",
                        "nodeType": "VariableDeclaration",
                        "scope": 44384,
                        "src": "1203:21:48",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 44360,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1203:7:48",
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
                        "id": 44363,
                        "mutability": "mutable",
                        "name": "tokenId",
                        "nameLocation": "1234:7:48",
                        "nodeType": "VariableDeclaration",
                        "scope": 44384,
                        "src": "1226:15:48",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 44362,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1226:7:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 44366,
                    "initialValue": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 44364,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44353,
                        "src": "1245:5:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$_t_address_$_t_uint256_$",
                          "typeString": "function () view returns (uint256,address,uint256)"
                        }
                      },
                      "id": 44365,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1245:7:48",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_address_$_t_uint256_$",
                        "typeString": "tuple(uint256,address,uint256)"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1185:67:48"
                  },
                  {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 44370,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 44367,
                        "name": "chainId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44359,
                        "src": "1266:7:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "expression": {
                          "id": 44368,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -4,
                          "src": "1277:5:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 44369,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1283:7:48",
                        "memberName": "chainid",
                        "nodeType": "MemberAccess",
                        "src": "1277:13:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1266:24:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 44376,
                    "nodeType": "IfStatement",
                    "src": "1262:47:48",
                    "trueBody": {
                      "expression": {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 44373,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1307:1:48",
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
                          "id": 44372,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1299:7:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 44371,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "1299:7:48",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 44374,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1299:10:48",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "functionReturnParameters": 44357,
                      "id": 44375,
                      "nodeType": "Return",
                      "src": "1292:17:48"
                    }
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 44381,
                          "name": "tokenId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 44363,
                          "src": "1358:7:48",
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
                              "id": 44378,
                              "name": "tokenContract",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44361,
                              "src": "1335:13:48",
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
                            "id": 44377,
                            "name": "IERC721",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 41911,
                            "src": "1327:7:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_IERC721_$41911_$",
                              "typeString": "type(contract IERC721)"
                            }
                          },
                          "id": 44379,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1327:22:48",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC721_$41911",
                            "typeString": "contract IERC721"
                          }
                        },
                        "id": 44380,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1350:7:48",
                        "memberName": "ownerOf",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 41844,
                        "src": "1327:30:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_address_$",
                          "typeString": "function (uint256) view external returns (address)"
                        }
                      },
                      "id": 44382,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1327:39:48",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "functionReturnParameters": 44357,
                    "id": 44383,
                    "nodeType": "Return",
                    "src": "1320:46:48"
                  }
                ]
              },
              "baseFunctions": [
                44698
              ],
              "functionSelector": "8da5cb5b",
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "owner",
              "nameLocation": "1137:5:48",
              "parameters": {
                "id": 44354,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1142:2:48"
              },
              "returnParameters": {
                "id": 44357,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 44356,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 44385,
                    "src": "1166:7:48",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 44355,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1166:7:48",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1165:9:48"
              },
              "scope": 44428,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "id": 44398,
              "nodeType": "FunctionDefinition",
              "src": "1379:110:48",
              "nodes": [],
              "body": {
                "id": 44397,
                "nodeType": "Block",
                "src": "1448:41:48",
                "nodes": [],
                "statements": [
                  {
                    "expression": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 44395,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 44392,
                        "name": "signer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44387,
                        "src": "1465:6:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 44393,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 44385,
                          "src": "1475:5:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 44394,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1475:7:48",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "1465:17:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "functionReturnParameters": 44391,
                    "id": 44396,
                    "nodeType": "Return",
                    "src": "1458:24:48"
                  }
                ]
              },
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "_isValidSigner",
              "nameLocation": "1388:14:48",
              "parameters": {
                "id": 44388,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 44387,
                    "mutability": "mutable",
                    "name": "signer",
                    "nameLocation": "1411:6:48",
                    "nodeType": "VariableDeclaration",
                    "scope": 44398,
                    "src": "1403:14:48",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 44386,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1403:7:48",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1402:16:48"
              },
              "returnParameters": {
                "id": 44391,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 44390,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 44398,
                    "src": "1442:4:48",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 44389,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "1442:4:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1441:6:48"
              },
              "scope": 44428,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "id": 44407,
              "nodeType": "FunctionDefinition",
              "src": "1495:101:48",
              "nodes": [],
              "body": {
                "id": 44406,
                "nodeType": "Block",
                "src": "1594:2:48",
                "nodes": [],
                "statements": []
              },
              "baseFunctions": [
                43221
              ],
              "functionSelector": "01ffc9a7",
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "supportsInterface",
              "nameLocation": "1504:17:48",
              "overrides": {
                "id": 44402,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "1570:8:48"
              },
              "parameters": {
                "id": 44401,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 44400,
                    "mutability": "mutable",
                    "name": "interfaceId",
                    "nameLocation": "1538:11:48",
                    "nodeType": "VariableDeclaration",
                    "scope": 44407,
                    "src": "1531:18:48",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "typeName": {
                      "id": 44399,
                      "name": "bytes4",
                      "nodeType": "ElementaryTypeName",
                      "src": "1531:6:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1521:34:48"
              },
              "returnParameters": {
                "id": 44405,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 44404,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 44407,
                    "src": "1588:4:48",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 44403,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "1588:4:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1587:6:48"
              },
              "scope": 44428,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "id": 44420,
              "nodeType": "FunctionDefinition",
              "src": "1602:150:48",
              "nodes": [],
              "body": {
                "id": 44419,
                "nodeType": "Block",
                "src": "1750:2:48",
                "nodes": [],
                "statements": []
              },
              "baseFunctions": [
                44682
              ],
              "functionSelector": "9e5d4c49",
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "executeCall",
              "nameLocation": "1611:11:48",
              "overrides": {
                "id": 44415,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "1718:8:48"
              },
              "parameters": {
                "id": 44414,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 44409,
                    "mutability": "mutable",
                    "name": "to",
                    "nameLocation": "1640:2:48",
                    "nodeType": "VariableDeclaration",
                    "scope": 44420,
                    "src": "1632:10:48",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 44408,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1632:7:48",
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
                    "id": 44411,
                    "mutability": "mutable",
                    "name": "value",
                    "nameLocation": "1660:5:48",
                    "nodeType": "VariableDeclaration",
                    "scope": 44420,
                    "src": "1652:13:48",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 44410,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1652:7:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 44413,
                    "mutability": "mutable",
                    "name": "data",
                    "nameLocation": "1690:4:48",
                    "nodeType": "VariableDeclaration",
                    "scope": 44420,
                    "src": "1675:19:48",
                    "stateVariable": false,
                    "storageLocation": "calldata",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_calldata_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 44412,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "1675:5:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1622:78:48"
              },
              "returnParameters": {
                "id": 44418,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 44417,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 44420,
                    "src": "1736:12:48",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 44416,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "1736:5:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1735:14:48"
              },
              "scope": 44428,
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "id": 44427,
              "nodeType": "FunctionDefinition",
              "src": "1758:60:48",
              "nodes": [],
              "body": {
                "id": 44426,
                "nodeType": "Block",
                "src": "1816:2:48",
                "nodes": [],
                "statements": []
              },
              "baseFunctions": [
                44704
              ],
              "functionSelector": "affed0e0",
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "nonce",
              "nameLocation": "1767:5:48",
              "overrides": {
                "id": 44422,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "1789:8:48"
              },
              "parameters": {
                "id": 44421,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1772:2:48"
              },
              "returnParameters": {
                "id": 44425,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 44424,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 44427,
                    "src": "1807:7:48",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 44423,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1807:7:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1806:9:48"
              },
              "scope": 44428,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            }
          ],
          "abstract": false,
          "baseContracts": [
            {
              "baseName": {
                "id": 44285,
                "name": "IERC165",
                "nameLocations": [
                  "383:7:48"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 43222,
                "src": "383:7:48"
              },
              "id": 44286,
              "nodeType": "InheritanceSpecifier",
              "src": "383:7:48"
            },
            {
              "baseName": {
                "id": 44287,
                "name": "IERC1271",
                "nameLocations": [
                  "392:8:48"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 39640,
                "src": "392:8:48"
              },
              "id": 44288,
              "nodeType": "InheritanceSpecifier",
              "src": "392:8:48"
            },
            {
              "baseName": {
                "id": 44289,
                "name": "IERC6551Account",
                "nameLocations": [
                  "402:15:48"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 44705,
                "src": "402:15:48"
              },
              "id": 44290,
              "nodeType": "InheritanceSpecifier",
              "src": "402:15:48"
            }
          ],
          "canonicalName": "SafeAccount",
          "contractDependencies": [],
          "contractKind": "contract",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            44428,
            44705,
            39640,
            43222
          ],
          "name": "SafeAccount",
          "nameLocation": "368:11:48",
          "scope": 44429,
          "usedErrors": []
        }
      ],
      "license": "MIT"
    },
    "id": 48
  }

export const SafeAccountAbi = SafeAccount["abi"];