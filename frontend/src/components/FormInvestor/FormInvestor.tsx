import React from 'react';

export default function FormInvestor(props: any) {
    return (
        <div className='my-20 mb-12'>
            <div>
                <div className="mb-4 text-white">
                    <label className="block font-medium mb-2" htmlFor="invest">
                        How many USDT do you want to invest?
                    </label>
                    <input
                        type="number"
                        id="invest"
                        name="invest"
                        placeholder='Qty of USDT'
                        value={props.invest}
                        onChange={(e) => props.setInvest(e.target.value)}
                        className="w-full bg-[white] text-center text-black p-2 mt-4 rounded-full outline-0 shadow-lg hover:bg-[#e4e7ff]"
                    />
                </div>
            </div>
        </div>
    );
}