import DashboardCard from "../../components/CardTest/CardTest";

export default function Test() {
      
    return (
        <>
            <div className='w-[100vw] h-screen text-gray-700 overflow-y-auto flex flex-col items-center'>
                <DashboardCard
                    title="Revenue"
                    amount={65654}
                    trend={10}
                    trendDirection="up"
                />
            </div>
        </>
    )
}