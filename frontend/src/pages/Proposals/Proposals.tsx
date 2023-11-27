import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from '../../components/Footer/Footer';

export default function Proposals() {
        
    const history = useNavigate();

    const [tempValue, setTempValue] = useState();

    const [myproposals, setMyproposals] = useState([
        // TESTE
        {
            id: 1,
            name: `Fund Name 1`,
            option: "A",
            value: 0,
            status: "pending",
        },
        {
            id: 2,
            name: `Fund Name 2`,
            option: "A",
            value: 0,
            status: "rejected",
        },
        {
            id: 3,
            name: `Fund Name 3`,
            option: "A",
            value: 0,
            status: "pending",
        },
        {
            id: 4,
            name: `Fund Name 4`,
            option: "B",
            value: 0,
            status: "awaiting result",
        },
        {
            id: 5,
            name: `Fund Name 5`,
            option: "A",
            value: 0,
            status: "awaiting result",
        },
        {
            id: 6,
            option: "B",
            name: `Fund Name 6`,
            value: 0,
            status: "accepted",
        },
    ]);
    
    async function sendResponse(id, tempValue){
        // send the response to the smart contract
        // update the row line to awaiting result
        // set the tempValue to the number of tokens in the smart contract
    }

    async function sendWithdraw(){
        // delete the row line and withdraw the tokens
    }

    return (
        <div className='w-[100vw] h-screen text-gray-700 bg-[#f6f6f6] overflow-y-auto'>
            <section className="">
                <div className="container mx-auto px-0 text-center py-8 md:px-6 lg:px-6">
                    <h2 className="flex justify-center items-center bg-white h-[12vh] mx-6 text-4xl font-bold text-center text-secondary-color shadow-lg rounded-[20px]">
                        Proposals Panel
                    </h2>
                    <div className='flex flex-col md:flex-row lg:flex-row justify-center my-10 mx-6 mb-12 shadow-lg bg-white text-secondary-color rounded-[20px]'>

                        {myproposals.length ? (
                            <div className="flex flex-col w-[90%] my-12 shadow-lg rounded-lg overflow-hidden">
                            <div className="flex border-blue-color bg-gray-100 text-secondary-color font-bold uppercase text-[0.5rem] md:text-sm lg:text-sm leading-normal">
                                <div className="py-3 px-6 text-center flex-1">Fund Id</div>
                                <div className="py-3 px-6 text-center flex-1">Fund Name</div>
                                <div className="py-3 px-6 text-center flex-1">Status</div>
                                <div className="py-3 px-6 text-center flex-1">Num of Tokens</div>
                                <div className="py-3 px-6 text-center flex-1">Action</div>
                            </div>
                            <div className="text-gray-800 text-[0.6rem] md:text-sm lg:text-sm font-light">
                                {myproposals.map((proposal) => (
                                    <div key={proposal.id} className="border-b h-14 items-center  flex hover:bg-gray-100 hover:bg-opacity-50">
                                        <div className="py-3 px-6 text-center flex-1">{proposal.id}</div>
                                        <div className="py-3 px-6 text-center flex-1">{proposal.name}</div>
                                        <div className="py-3 px-6 text-center flex-1 relative">
                                            <div className={`h-4 w-4 rounded-full absolute center-[-10px] top-1/2 transform -translate-y-1/2 ${proposal.status === "accepted" ? "bg-green-500" : proposal.status === "rejected" ? "bg-red-500" : proposal.status === "pending" ? "bg-yellow-500" : "bg-blue-500"}`}></div>
                                            {proposal.status}
                                        </div>
                                        <div className="py-3 px-6 text-left flex-1">
                                            {proposal.status === 'pending' && 
                                                <input
                                                    type="number"
                                                    id="value"
                                                    name="value"
                                                    placeholder='Num of Tokens'
                                                    value={tempValue}
                                                    onChange={(e) => setTempValue(e.target.value)}
                                                    className="bg-white text-black text-center w-full pl-4 outline-0 shadow-lg py-2 hover:bg-gray-100 transition duration-1000 ease-in-out"
                                                />
                                            }
                                            {proposal.status != 'pending' && 
                                                <div className="text-center">{proposal.value}</div>
                                            }
                                        </div>
                                        <div className="py-3 px-6 text-left flex-1">
                                            {proposal.status === 'pending' && 
                                                <button className="w-full bg-transparent hover:bg-blue-color text-clue-color font-bold hover:text-white py-2 px-4 border-2 border-blue-color hover:border-transparent rounded"
                                                        onClick={() => sendResponse(proposal.id, tempValue)}>
                                                    Vote YES for the Proposal
                                                </button>
                                            }
                                            {(proposal.status === 'accepted' || proposal.status === 'rejected') && 
                                                <button className="w-full bg-transparent hover:bg-blue-color text-clue-color font-bold hover:text-white py-2 px-4 border-2 border-blue-color hover:border-transparent rounded"
                                                        onClick={() => sendWithdraw()}>
                                                    Withdraw Tokens
                                                </button>
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>
                            </div>
                        ):(
                            <div className="flex justify-center items-center text-gray-500 text-xl font-medium">
                                You have no Proposals yet
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}