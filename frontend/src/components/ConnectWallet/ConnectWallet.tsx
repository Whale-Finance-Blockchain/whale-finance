export default function ConnectWalletBtn({ isMetamaskInstalled, connectWallet, account, signer, isSidebarExtended, setIsSidebarExtended }: { isMetamaskInstalled: boolean; connectWallet: any; account: string | null; signer: any; isSidebarExtended: boolean; setIsSidebarExtended: any;}) {

    return (
        <>
            {
                isMetamaskInstalled ? (
                    <div
                        onClick={connectWallet}
                        className="flex flex-row w-full py-4 items-center justify-center text-sm font-bold rounded-xl text-dark-color dark:text-light-color border-2 border-secondary-color transition-all duration-450 ease-linear outline-none active:border-light-color active:dark:border-dark-color focus:outline-none hover:bg-secondary-color  hover:cursor-pointer"
                        // ${isSidebarExtended ? 'justify-start' : 'justify-center'}`}
                        onMouseOver={() => setIsSidebarExtended(true)}
                        onMouseOut={() => setIsSidebarExtended(false)}
                    >
                        {!(isSidebarExtended) ? <h3>Connect</h3> :
                        <h3 className='flex justify-center truncate px-4'>{signer ? "Wallet Connected: " +
                            account?.substring(0, 5) +
                            "..." +
                            account?.substring(39, 42) : "Connect Wallet"}</h3>
                        }
                    </div>
                ) : (
                    <div
                        className="flex flex-row w-full py-4 items-center justify-center text-sm font-bold rounded-xl text-dark-color dark:text-light-color border-2 border-secondary-color transition-all duration-450 ease-linear outline-none active:border-light-color active:dark:border-dark-color focus:outline-none hover:bg-secondary-color  hover:cursor-pointer"
                        // ${isSidebarExtended ? 'justify-start' : 'justify-center'}`}
                        onMouseOver={() => setIsSidebarExtended(true)}
                        onMouseOut={() => setIsSidebarExtended(false)}
                    >
                        <a href="https://metamask.io/download/">Install Metamask</a>
                    </div>
                )
            }
        </>
    )
}