import { ethers } from "ethers";
import { MANDALA_CHAIN_ID, WHALECHAIN_CHAIN_ID } from "./addresses";

export async function connectMetamask(){
    if(!window.ethereum){
        alert("Voce precisa da Metamask!");
    } else{
        try{

            const web3Provider = new ethers.providers.Web3Provider(window.ethereum)

            const chainId = await web3Provider.getNetwork();
            console.log("Chain Id", chainId);
            if(chainId.chainId !== WHALECHAIN_CHAIN_ID && chainId.chainId !== MANDALA_CHAIN_ID){
                alert("Você precisa estar na rede WhaleChain ou Mandala!");

                await (window as any).ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: "0x3DD45" }],
                  });
                
                return null;
            }
            
            const accounts = await web3Provider.send('eth_requestAccounts' ,[]);
            const address = accounts[0];
            const web3Signer = web3Provider.getSigner(address);
            
            return {
                web3Provider,
                web3Signer,
                address
            }

        } catch(err){
            console.log(err);
            return null;
        }
    }
}

export function getMetamaskProvider(){
    if(!window.ethereum){
        alert("Você precisa da Metamask!");
    } else{
        try{
            const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
            return web3Provider;

        } catch(err){
            return null;
        }
    }
}