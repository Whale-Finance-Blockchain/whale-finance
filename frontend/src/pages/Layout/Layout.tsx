import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

export default function Layout({ isMetamaskInstalled, connectWallet, account, signer }: 
    { isMetamaskInstalled: boolean; connectWallet: any; account: string | null; signer: any;}) {

    return (
        <div className='w-[100vw] md:h-[100vh] md:flex md:flex-row lg:h-[100vh] lg:flex lg:flex-row bg-[#f6f6f6] overflow-hidden'>
            <Header
                isMetamaskInstalled={isMetamaskInstalled}
                connectWallet={connectWallet}
                account={account}
                signer={signer}
            />
            <Outlet/>
        </div>
    )
}