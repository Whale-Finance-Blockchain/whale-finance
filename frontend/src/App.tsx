import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import { connectMetamask } from './utils/connectMetamask'
import Layout from './pages/Layout/Layout';
import Investor from './pages/Investor/Investor';
import Manager from './pages/Manager/Manager';
import FundId from './pages/FundId/FundId';
import CreateFund from './pages/CreateFund/CreateFund';

function App() {

  //handle Metamask wallet connection
  const [isMetamaskInstalled, setIsMetamaskInstalled] = React.useState<boolean>(false);
  const [account, setAccount] = React.useState<string | null>(null);
  const [provider, setProvider] = React.useState<any>(null);
  const [signer, setSigner] = React.useState<any>(null);

  React.useEffect(() => {
    if ((window as any).ethereum) {
      //check if Metamask wallet is installed
      setIsMetamaskInstalled(true);
      setAccount((window as any).ethereum.selectedAddress);
    }
  }, []);

  async function connectWallet(): Promise<void> {
    const connection = await connectMetamask();
    setAccount(connection?.address);
    setProvider(connection?.web3Provider);
    setSigner(connection?.web3Signer);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Layout
              isMetamaskInstalled={isMetamaskInstalled}
              connectWallet={connectWallet}
              account={account}
              provider={provider}
              signer={signer}
            />
          }>
            <Route path="/home" element={<Home />} />
            <Route path="/investor" element={<Investor />} />
            <Route path="/investor/:id" element={<FundId />} />
            <Route path="/manager" element={<Manager />} />
            <Route path="/create-fund" element={<CreateFund />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App