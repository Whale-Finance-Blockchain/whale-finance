import ConnectWalletBtn from '../../components/ConnectWallet/ConnectWallet';

export default function Header({ isMetamaskInstalled, connectWallet, account, provider, signer }: 
    { isMetamaskInstalled: boolean; connectWallet: any; account: string | null; provider: any; signer: any;}) {
    return (
        <header className="sticky top-0 z-30 w-full bg-[rgba(255,255,255,0.9)] text-secondary-color border-b-2 border-gray-200">
            <div className="container mx-auto px-20 py-2 flex justify-between items-center">
                <a className="font-bold text-2xl lg:text-4xl text-secondary-color" href="#">
                    Whale Finance
                </a>

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
                    <li><a className="px-16 py-2 text-xl hover:text-primary-color hover:bg-[#fffedc] transition duration-1000 ease-in-out" href="/investor">I'm an investor</a></li>
                    <li><a className="px-16 py-2 text-xl hover:text-primary-color hover:bg-[#fffedc] transition duration-1000 ease-in-out" href="/manager">I'm a manager</a></li>
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