import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase';
import { get, push, ref } from "firebase/database";
import FormInvestor from '../../components/FormInvestor/FormInvestor';
import LineChartComponent from '../../components/LineChartComponent/LineChartComponent';
import { useParams } from 'react-router-dom';

type DataPoint = {
    date: string;
    fundId: number;
    performanceValue: number;
    bmId: number;
    benchmarkValue: number; 
};

export default function FundId() {

    const { id } = useParams<{ id: string }>();

    const [invest, setInvest] = React.useState('');

    function handleSubmit() {

        const body = {
            "value_invested": invest
        }

        console.log(body);
    }

    const [fund, setFund] = useState(null);

    const [data, setData] = useState<DataPoint[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          try {            
            // Fetching data from the Performance database
            const performanceRef = ref(db, 'Performance');
            const performanceSnapshot = await get(performanceRef);
            const performanceData = performanceSnapshot.exists() ? performanceSnapshot.val() : [];

            // Fetching data from the Benchmark database
            const benchmarkRef = ref(db, 'BenchmarkValue');
            const benchmarkSnapshot = await get(benchmarkRef);
            const benchmarkData = benchmarkSnapshot.exists() ? benchmarkSnapshot.val() : [];

            // Fetching data from the Performance database
            const fundsRef = ref(db, 'Funds');
            const fundsSnapshot = await get(fundsRef);
            const fundsData = fundsSnapshot.exists() ? fundsSnapshot.val() : [];

            const matchedFund = fundsData.find(fund => fund.id === parseInt(id));
            if (matchedFund) {
                setFund(matchedFund);
            } else {
                console.log("Fund not found");
            }
                
            const combinedData = [];

            performanceData.forEach((pItem) => {
                benchmarkData.forEach((bItem) => {
                if (pItem.date === bItem.date && pItem.fundId === parseInt(id)) {
                    combinedData.push({
                    date: pItem.date,
                    fundId: pItem.fundId,
                    performanceValue: pItem.value,
                    bmId: bItem.bmId,
                    benchmarkValue: bItem.value,
                    });
                }
                });
            });

            console.log(combinedData);

            setData(combinedData);

            } catch (error) {
            console.error("Error reading data:", error);
            }
        };

        fetchData();
    }, []);

    if (!fund) {
        return (
        <div className='w-[100vw] h-screen text-gray-700 bg-[#f6f6f6] overflow-y-auto'>
                <section className="">
                    <div className="container mx-auto px-6 text-center py-8 opacity-60">
                        <h2 className="flex justify-center items-center bg-white h-[12vh] text-4xl font-bold text-center text-secondary-color rounded-[20px]">
                        </h2>
                        <div className='flex flex-row justify-center my-12'>
                            <div className='basis-2/3 mx-6 px-10 h-[60vh] shadow-lg bg-white text-secondary-color rounded-[20px] opacity-60'>
                            </div>
                            <div className='basis-1/3 mx-6 px-10 h-[60vh] shadow-lg bg-white text-secondary-color rounded-[20px] opacity-60'>
                            </div>
                        </div>
                    </div>
                </section>
            </div> 
        )
    }

    return (
        <>
            <div className='w-[100vw] h-screen text-gray-700 bg-[#f6f6f6] overflow-y-auto'>
                <section className="">
                    <div className="container mx-auto px-6 text-center py-8">
                        <h2 className="flex justify-center items-center bg-white h-[12vh] mx-6 text-4xl font-bold text-center text-secondary-color rounded-[20px]">
                        {fund.name}
                        </h2>
                        <div className='flex flex-row justify-center my-12 mb-24'>
                            <div className='basis-2/3 mx-6 px-10 h-[60vh] w-full shadow-lg bg-white text-secondary-color rounded-[20px]'>
                                <h1 className='font-bold text-2xl mt-8 mb-6'>Performance</h1>
                                <div className='w-[90%] mx-[5%] h-[95%] flex items-center justify-center'>
                                    <LineChartComponent data={data} />
                                </div>
                            </div>
                            <div className='basis-1/3 mx-6 px-10 h-[60vh] shadow-lg bg-white text-secondary-color rounded-[20px]'>
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
                        <div className='flex flex-row justify-center my-12 mb-24'>
                            <div className='basis-2/3 mx-6 px-10 h-[60vh] w-full shadow-lg bg-white text-secondary-color rounded-[20px]'>
                                <h1 className='font-bold text-2xl mt-8 mb-6'>Performance</h1>
                                <div className='w-[90%] mx-[5%] h-[95%] flex items-center justify-center'>
                                    <LineChartComponent data={data} />
                                </div>
                            </div>
                            <div className='basis-1/3 mx-6 px-10 h-[60vh] shadow-lg bg-white text-secondary-color rounded-[20px]'>
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