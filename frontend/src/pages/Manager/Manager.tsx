import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase';
import { get, ref } from "firebase/database";
import { Link } from 'react-router-dom';

type DataPoint = {
    id: number;
    name: string;
    description: string;
};

export default function Manager() {

    const [funds, setFunds] = useState<DataPoint[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const dbRef = ref(db, 'Funds');
            const snapshot = await get(dbRef);
            if (snapshot.exists()) {
              const fbData = snapshot.val();
              setFunds(fbData);
            } else {
              console.log("No data available");
            }
          } catch (error) {
            console.error("Error reading data:", error);
          }
        };
      
        fetchData();
      }, []);

    const fundsElements = funds.map(fund => (
        <Link to={`/investor/${fund.id}`}>
            <div key={fund.id} className="bg-gradient-to-r from-white to-[#fcfcfc] h-[180px] flex flex-col items-center justify-center text-gray-500 rounded-lg shadow-lg m-[2vh] hover:bg-gradient-to-r hover:from-white hover:to-gray-100 hover:text-secondary-color transition duration-600 ease-in-out">
                    <h2 className="m-[1.5vh] text-fl font-bold ">{fund.name}</h2>
                    <p className="text-fs m-[2vh]">{fund.description}</p>
            </div>
        </Link>
    ))

    const loadingElements = Array(4).fill(null).map((_, index) => (
        <div key={index} className="bg-gradient-to-r from-white to-[#f6f6f6] h-[180px] opacity-80 flex items-center justify-center text-gray-500 rounded-lg shadow-lg m-[2vh]">
        </div>
    ))

    return (
        <>
            <div className='w-[100vw] h-screen text-gray-700 bg-[#fcfcfc] overflow-y-auto'>
                <section className="">
                    <div className="container mx-auto px-6 text-center py-12">
                        <h2 className="mb-16 text-4xl font-bold text-center text-secondary-color">
                        My Hedge Funds List
                        </h2>
                        <Link
                        className="bg-white text-black font-bold rounded-full border-2 border-transparent py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-secondary-color hover:text-[white] hover:border-white transition duration-1000 ease-in-out" to="/create-fund"
                        >
                        Create Fund
                        </Link>
                        <div className='grid grid-cols-3 justify-center my-12 cursor-pointer'>
                            {funds.length ? fundsElements : loadingElements }
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}