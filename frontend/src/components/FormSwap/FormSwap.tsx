export default function FormSwap(props: any) {
    return (
        <div className='my-4'>
            <div>
                <div className="mb-4 text-secondary-color">
                    <label className="block font-medium italic text-sm text-gray-400 mb-8" htmlFor="invest">
                        Choose your tokes to swap
                    </label>
                    <div className="flex flex-row bg-[white] border-[2px] border-secondary-color text-center text-xl text-black mt-4 shadow-lg rounded-[15px]">
                        <input
                            type="number"
                            id="invest"
                            name="invest"
                            placeholder='Qty of ZUSD'
                            value={props.invest}
                            onChange={(e) => props.setInvest(e.target.value)}
                            className="basis-2/3 bg-transparent text-center lg:text-xl text-black p-2 outline-0 rounded-l-[15px] hover:bg-slate-100 transition duration-600 ease-in-out"
                        />
                        <select 
                            className="basis-1/3 bg-transparent text-center lg:text-xl font-bold text-black p-2 outline-0 rounded-r-[15px] hover:bg-slate-100 transition duration-1000 ease-in-out"
                            id="tokens"
                            name="tokens"
                            placeholder='Tokens'
                            value={props.tokens}
                        >
                        <option 
                            className="bg-white md:text-xl lg:text-xl text-center text-black p-2 mt-4 rounded-[10px] border-blue-color border-2 outline-0 shadow-lg focus:bg-secondary-color focus:text-white hover:bg-gray-100 transition duration-1000 ease-in-out"
                        >ZUSD</option>
                        </select>
                    </div>
                    <div className="flex flex-row bg-[white] border-[2px] border-secondary-color text-center text-xl text-black mt-4 shadow-lg rounded-[15px]">
                        <input
                           type="number"
                           id="invest"
                           name="invest"
                           placeholder='Qty of ZUSD'
                           value={props.invest}
                           onChange={(e) => props.setInvest(e.target.value)}
                            className="basis-2/3 bg-transparent text-center lg:text-xl text-black p-2 outline-0 rounded-l-[15px] hover:bg-slate-100 transition duration-600 ease-in-out"
                        />
                        <select 
                            className="basis-1/3 bg-transparent text-center lg:text-xl font-bold text-black p-2 outline-0 rounded-r-[15px] hover:bg-slate-100 transition duration-1000 ease-in-out"
                            id="tokens"
                            name="tokens"
                            placeholder='Tokens'
                            value={props.tokens}
                        >
                        <option 
                            className="bg-white md:text-xl lg:text-xl text-center text-black p-2 mt-4 rounded-[10px] border-blue-color border-2 outline-0 shadow-lg focus:bg-secondary-color focus:text-white hover:bg-gray-100 transition duration-1000 ease-in-out"
                        >ZUSD</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}