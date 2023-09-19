import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function Layout({ isMetamaskInstalled, connectWallet, account, provider, signer }: 
    { isMetamaskInstalled: boolean; connectWallet: any; account: string | null; provider: any; signer: any;}) {

    return (
        <div className='w-[100vw] h-[100vh] bg-[#f6f6f6] overflow-hidden'>
            <Header
                isMetamaskInstalled={isMetamaskInstalled}
                connectWallet={connectWallet}
                account={account}
                provider={provider}
                signer={signer}
            />
            <Outlet/>
            <Footer/>
        </div>
    )
}