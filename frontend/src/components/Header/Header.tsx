import ConnectWalletBtn from '../../components/ConnectWallet/ConnectWallet';
import Logo from '../../assets/whale_logo.png';
import { useNavigate } from 'react-router-dom';

export default function Header({ isMetamaskInstalled, connectWallet, account, provider, signer }: 
    { isMetamaskInstalled: boolean; connectWallet: any; account: string | null; provider: any; signer: any;}) {
    
    const history = useNavigate();
    
    return (
        <header className="sticky top-0 z-30 w-full bg-gradient-to-r from-blue-color to-secondary-color text-white border-b-2 border-gray-200">
            <div className="container mx-auto px-10 py-2 flex justify-between items-center cursor-pointer">
                <img className="h-[7vh] p-[5px]" src={Logo} alt={"whale finance"} onClick={() => history('/home')}/>

                {/* responsivo */}

                <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
                </div>

                {/* menu */}

                <div className="hidden lg:block">
                <ul className="inline-flex items-center space-x-10">
                <li><a className="px-6 py-2 text-[1.23vw] hover:bg-[rgb(14,42,98)] transition duration-1000 ease-in-out" href="/investor">Investor</a></li>
                    <li><a className="px-6 py-2 text-[1.25vw] hover:bg-[rgb(14,42,98)] transition duration-1000 ease-in-out" href="/manager">Manager</a></li>
                    <li><a className="px-6 py-2 text-[1.25vw] hover:bg-[rgb(14,42,98)] transition duration-1000 ease-in-out" href="/fundslist">Funds List</a></li>
                    <ConnectWalletBtn
                        isMetamaskInstalled={isMetamaskInstalled}
                        connectWallet={connectWallet}
                        account={account}
                        provider={provider}
                        signer={signer}
                    />
                    {/* <li><a className="ml-10 px-16 py-1 text-xl shadow-md rounded-full bg-primary-color text-[white] hover:bg-secondary-color transition duration-1000 ease-in-out" href="#">Sign up</a></li> */}
                </ul>
                </div>
            </div>
        </header>
    );
};