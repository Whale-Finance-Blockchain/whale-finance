export default function FormInvestor(props: any) {
    return (
        <div className='my-12'>
            <div>
                <div className="mb-4 text-secondary-color">
                    <label className="block font-medium text-xl mb-2" htmlFor="name">
                        What will be the name of your fund?
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Name'
                        value={props.name}
                        onChange={(e) => props.setName(e.target.value)}
                        className="w-full bg-white text-xl text-center text-black p-2 mt-4 rounded-full outline-0 shadow-lg hover:bg-gray-100 transition duration-1000 ease-in-out"
                    />
                    <label className="block font-medium text-xl mb-2 mt-6" htmlFor="share">
                        What will be the share token address?
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Share Address'
                        value={props.Share}
                        onChange={(e) => props.setShare(e.target.value)}
                        className="w-full bg-white text-xl text-center text-black p-2 mt-4 rounded-full outline-0 shadow-lg hover:bg-gray-100 transition duration-1000 ease-in-out"
                    />
                    <label className="block font-medium text-xl mb-2 mt-6" htmlFor="ticker">
                        What will be its ticker representation?
                    </label>
                    <input
                        type="text"
                        id="ticker"
                        name="ticker"
                        placeholder='Ticker'
                        value={props.ticker}
                        onChange={(e) => props.setTicker(e.target.value)}
                        className="w-full bg-white text-xl text-center text-black p-2 mt-4 rounded-full outline-0 shadow-lg hover:bg-gray-100 transition duration-1000 ease-in-out"
                    />
                    <label className="block font-medium text-xl mb-2 mt-6" htmlFor="token1">
                        And what will be the allowed ERC20 tokens in your fund?
                    </label>
                    <input
                        type="text"
                        id="token1"
                        name="token1"
                        placeholder='Token 1'
                        value={props.token1}
                        onChange={(e) => props.setToken1(e.target.value)}
                        className="w-full bg-white text-xl text-center text-black p-2 mt-4 rounded-full outline-0 shadow-lg hover:bg-gray-100 transition duration-1000 ease-in-out"
                    />
                    <input
                        type="text"
                        id="token2"
                        name="token2"
                        placeholder='Token 2'
                        value={props.token2}
                        onChange={(e) => props.setToken2(e.target.value)}
                        className="w-full bg-white text-xl text-center text-black p-2 mt-4 rounded-full outline-0 shadow-lg hover:bg-gray-100 transition duration-1000 ease-in-out"
                    />
                </div>
            </div>
        </div>
    );
}