import { useState, useEffect } from 'react';
import { db } from '../../firebase/firebase';
import { get, ref } from "firebase/database";
import LineChartComponent from '../../components/LineChartComponent/LineChartComponent';
import LogoApp from '../../assets/whale_app_logo.png';

type DataPoint = {
    date: string;
    fundId: number;
    performanceValue: number;
    bmId: number;
    benchmarkValue: number; 
};

export default function Home() {

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
    
            const combinedData = [];

            performanceData.forEach((pItem) => {
                benchmarkData.forEach((bItem) => {
                if (pItem.date === bItem.date) {
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

    return (
        <>
            <div className='w-[100vw] h-screen text-gray-700 bg-[#fcfcfc] overflow-y-auto flex flex-col items-center'>
                <section className='w-full'>
                    <div className="w-full h-screen flex flex-col justify-center items-center bg-cover bg-[url('././assets/burj_khalifa_blue.png')]">
                        <img className='w-[20vw]' src={LogoApp} />
                        <p className='text-white mt-6 italic text-xl'>Descentralized Asset Management</p>
                        <div className='w-full mt-16 mb-28 flex flex-row justify-center items-center'>
                            <li><a className="px-20 py-3 text-xm font-bold bg-blue-color text-white hover:bg-white hover:text-secondary-color transition duration-1000 ease-in-out rounded-full uppercase" href="/investor">Invest in Funds</a></li>
                            <li><a className="px-20 py-3 text-xm font-bold bg-blue-color text-white hover:bg-white hover:text-secondary-color transition duration-1000 ease-in-out rounded-full uppercase" href="/manager">Be a manager</a></li>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}