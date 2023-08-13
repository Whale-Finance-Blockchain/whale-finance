import React from 'react';
import FormManager from '../../components/FormManager/FormManager';

export default function CreateFund() {

    const [name, setName] = React.useState('');
    const [ticker, setTicker] = React.useState('');
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

    return (
        <>
            <div className='w-[100vw] h-screen text-gray-700 bg-[#f6f6f6] overflow-y-auto'>
                <section className="h-screen bg-gradient-to-r from-primary-color to-[rgb(162,141,32)]">
                    <div className="container mx-auto px-6 text-center py-6">
                        <h2 className="text-4xl font-bold text-center text-white">
                        Fund Creation Page
                        </h2>
                        <div className='flex flex-row justify-center mt-6'>
                            <div className='w-[100%] mx-6 px-10 pb-6 shadow-lg bg-[rgb(162,141,32)] text-white rounded-[20px]'>
                                <FormManager    name={name}
                                                setName={setName}
                                                ticker={ticker}
                                                setTicker={setTicker}
                                                token1={token1}
                                                setToken1={setToken1}
                                                token2={token2}
                                                setToken2={setToken2}
                                />
                                <button
                                className="bg-white text-black font-bold rounded-full border-2 border-transparent py-2 px-20 shadow-lg uppercase tracking-wider hover:bg-primary-color hover:text-[white] hover:border-white transition duration-1000 ease-in-out" onClick={handleSubmit}
                                >
                                Create
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}