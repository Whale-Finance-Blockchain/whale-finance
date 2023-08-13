import React from 'react';
import FormInvestor from '../../components/FormInvestor/FormInvestor';
import Graph from '../../assets/profitability_fund.png';

export default function FundId() {

    const [invest, setInvest] = React.useState('');

    function handleSubmit() {

        const body = {
            "value_invested": invest
        }

        console.log(body);
    }

    return (
        <>
            <div className='w-[100vw] h-screen text-gray-700 bg-[#f6f6f6] overflow-y-auto'>
                <section className="h-screen bg-gradient-to-r from-secondary-color to-[rgb(15,37,124)]">
                    <div className="container mx-auto px-6 text-center py-20">
                        <h2 className="mb-6 text-4xl font-bold text-center text-white">
                        GBTC (Grayscale Ethereum Trust)
                        </h2>
                        <div className='flex flex-row justify-center my-20'>
                            <div className='basis-1/2 mx-6 px-10 h-[60vh] shadow-lg bg-[rgb(15,37,124)] text-white rounded-[20px]'>
                                <h1 className='font-bold text-2xl mt-12'>Performance</h1>
                                <img src={Graph} alt='Graph' className='mt-6' />
                            </div>
                            <div className='basis-1/2 mx-6 px-10 h-[60vh] shadow-lg bg-[rgb(15,37,124)] text-white rounded-[20px]'>
                                <FormInvestor   invest={invest}
                                                setInvest={setInvest}
                                />
                                <button
                                className="bg-white text-black font-bold rounded-full border-2 border-transparent py-2 px-20 shadow-lg uppercase tracking-wider hover:bg-secondary-color hover:text-[white] hover:border-white transition duration-1000 ease-in-out" onClick={handleSubmit}
                                >
                                Invest
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}