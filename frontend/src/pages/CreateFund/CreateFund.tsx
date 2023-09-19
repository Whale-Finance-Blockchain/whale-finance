import React from 'react';
import FormManager from '../../components/FormManager/FormManager';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

export default function CreateFund() {

    const history = useNavigate();

    const [name, setName] = React.useState('');
    const [ticker, setTicker] = React.useState('');
    const [share, setShare] = React.useState('');
    const [token1, setToken1] = React.useState('');
    const [token2, setToken2] = React.useState('');

    function handleSubmit() {

        const body = {
            "name": name,
            "ticker": ticker,
            "token1": token1,
            "token2": token2,
        }

        console.log(body);
    }

    const handleClick = () => {
        handleSubmit();
        history('/successfund');
      };

    return (
        <>
            <div className='h-screen w-[100vw] text-gray-700 bg-[#f6f6f6] overflow-y-auto'>
                <section className="">
                    <div className="container mx-auto px-6 text-center py-12 mb-2">
                        <h2 className="text-4xl font-bold text-center text-secondary-color">
                        Fund Creation Page
                        </h2>
                        <div className='flex flex-row justify-center mt-10 mb-10'>
                            <div className='w-[100%] mx-6 px-10 pb-6 shadow-lg text-secondary-color bg-white rounded-[20px]'>
                                <FormManager    name={name}
                                                setName={setName}
                                                ticker={ticker}
                                                setTicker={setTicker}
                                                share={share}
                                                setShare={setShare}
                                                token1={token1}
                                                setToken1={setToken1}
                                                token2={token2}
                                                setToken2={setToken2}
                                />
                                <button
                                className="bg-gradient-to-r from-blue-color to-secondary-color text-white font-bold rounded-full border-2 border-transparent py-2 px-20 shadow-lg uppercase tracking-wider hover:from-white hover:to-white hover:text-secondary-color hover:border-secondary-color transition duration-1000 ease-in-out" onClick={handleClick}
                                >
                                Create
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}