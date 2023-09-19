export default function DataDiv({ fund }: { fund: any}) {

    function formatToUSD(number) {
        const formattedNumber = new Intl.NumberFormat('en-US', { 
          style: 'currency', 
          currency: 'USD',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }).format(number / 1000000); // Convert to millions
      
        return `${formattedNumber} mi`;
    }

    const rentValue = 0.10;
    const formattedRent = new Intl.NumberFormat('en-US', { style: 'percent', minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(rentValue);

    return (
        <>
            <div className='flex flex-col text-left mx-0 md:mx-12 lg:mx-12 mt-12 w-[100%] h-[100%]'>
                <div className="text-xl"><span style={{ fontWeight: 'bold' }}>Description:</span> {fund.description}</div>
                <div className="text-xl mt-8"><span style={{ fontWeight: 'bold' }}>TPV:</span> {formatToUSD(113355678)}</div>
                <div className="text-xl"><span style={{ fontWeight: 'bold' }}>Performance 12m:</span> {formattedRent}</div>
                <div className="text-xl"><span style={{ fontWeight: 'bold' }}>Benchmark 12m:</span> {formattedRent}</div>
                <div className="text-xl mt-8"><span style={{ fontWeight: 'bold' }}>Abertura:</span> fund.openDate</div>
                <div className="text-xl"><span style={{ fontWeight: 'bold' }}>Maturação:</span> fund.maturationDate</div>
                <div className="text-xl mt-8"><span style={{ fontWeight: 'bold' }}>Investors:</span> fund.investors</div>
                <div className="text-xl"><span style={{ fontWeight: 'bold' }}>Quota:</span>  fund.price</div>
            </div>
        </>
    )
}