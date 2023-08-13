import React from 'react';
import { Link } from 'react-router-dom';

export default function Investor() {

    const [funds, setfunds] = React.useState([
        // TESTE
        {
            id: 1,
            title: 'GBTC (Grayscale Ethereum Trust)',
            description: 'Crypto fund for Ethereum exposure without direct ownership.'
        },
        {
            id: 2,
            title: 'VGSLX (Vanguard Index Fund)',
            description: 'Real world asset fund.'
        },
        {
            id: 3,
            title: 'Pantera Capital Digital Asset Fund',
            description: 'Crypto investment with diverse blockchain projects.'
        },
    ]);

    const fundsElements = funds.map(fund => (
        <div key={fund.id} className="bg-[rgb(162,141,32)] text-white rounded-lg shadow-md m-[2vh] hover:bg-[#f6f6f6] hover:text-primary-color transition duration-600 ease-in-out">
            <Link to={`/investor/${fund.id}`}>
                <h2 className="m-[1.5vh] text-sencondary-color text-fl font-bold ">{fund.title}</h2>
                <p className="text-fs m-[2vh]">{fund.description}</p>
            </Link>
        </div>
    ))

    return (
        <>
            <div className='w-[100vw] h-screen text-gray-700 bg-[#f6f6f6] overflow-y-auto'>
                <section className="h-screen bg-gradient-to-r from-primary-color to-[rgb(162,141,32)]">
                    <div className="container mx-auto px-6 text-center py-10">
                        <h2 className="mb-6 text-4xl font-bold text-center text-white">
                        Manager Dashboard
                        </h2>
                        <div className='flex flex-col justify-center my-10'>
                            {funds.length ? fundsElements : <h2>No funds found</h2>}
                        </div>
                        <Link
                        className="bg-white text-black font-bold rounded-full border-2 border-transparent py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-primary-color hover:text-[white] hover:border-white transition duration-1000 ease-in-out" to="/create-fund"
                        >
                        Create Fund
                        </Link>
                    </div>
                </section>
            </div>
        </>
    )
}