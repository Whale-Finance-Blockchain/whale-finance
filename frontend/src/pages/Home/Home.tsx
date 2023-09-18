import { useState, useEffect } from 'react';
import { db } from '../../firebase/firebase';
import { get, ref } from "firebase/database";
import LineChartComponent from '../../components/LineChartComponent/LineChartComponent';

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
                    <div className="w-full h-screen bg-cover bg-[url('././assets/burj_khalifa_blue.png')]">

                    </div>
                </section>
            </div>
        </>
    )
}