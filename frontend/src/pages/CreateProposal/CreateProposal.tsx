import React from 'react';
import Footer from '../../components/Footer/Footer';
import { Player } from '@lottiefiles/react-lottie-player';
import LoadingAnim from '../../assets/loading.json';
import { useNavigate } from 'react-router-dom';
import FormProposal from '../../components/FormProposal/FormProposal';

export default function CreateProposal() {

    const history = useNavigate();

    const [loading, setLoading] = React.useState(false);

    const [id, setId] = React.useState('');
    const [proposalType, setProposalType] = React.useState('');
    const [newtimestamp, setNewtimestamp] = React.useState('');
    const [deadline, setDeadline] = React.useState('');

    const handleClick = async () => {
        
    };
      
    return (
        <>
            <div className='w-[100vw] h-screen text-gray-700 bg-[#f6f6f6] overflow-y-auto'>
                <section className="">
                    <div className="container mx-auto px-0 text-center py-8 md:px-6 lg:px-6">
                        <h2 className="flex justify-center items-center bg-white h-[12vh] mx-6 text-4xl font-bold text-center text-secondary-color shadow-lg rounded-[20px]">
                            Create Proposal
                        </h2>
                        <div className='flex flex-col md:flex-row lg:flex-row justify-center my-10 mx-6 mb-12 shadow-lg bg-white text-secondary-color rounded-[20px]'>
                            <div className='w-[100%] mx-6 px-10 pb-6 text-secondary-color'>
                                <FormProposal
                                    name={id}
                                    setName={setId}
                                    proposalType={proposalType}
                                    setProposalType={setProposalType}
                                    newtimestamp={newtimestamp}
                                    setNewtimestamp={setNewtimestamp}
                                    deadline={deadline}
                                    setDeadline={setDeadline}
                                />
                                <button
                                className="bg-gradient-to-r from-blue-color to-secondary-color text-white font-bold rounded-full border-2 border-transparent py-2 px-20 shadow-lg uppercase tracking-wider hover:from-white hover:to-white hover:text-secondary-color hover:border-secondary-color transition duration-1000 ease-in-out" onClick={handleClick}
                                >
                                {loading ? 'Loading...' : 'Create'}
                                </button>
                                <div className='w-full flex justify-center items-center'>
                                    <div className='w-[100px] h-[25px] my-4'>
                                        {loading ? 
                                        <Player
                                            src={LoadingAnim}
                                            className="player"
                                            loop
                                            autoplay
                                        />
                                        : <></>}  
                                    </div>
                                </div>                                                              
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}