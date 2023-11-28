export default function FormProposal(props: any) {

    return (
        <div className='my-12'>
            <div>
                <div className="mb-4 text-secondary-color">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:space-x-12 lg:space-x-12">
                        <div className="flex flex-col">
                            <label className="block font-medium md:text-xl lg:text-xl mb-2" htmlFor="name">
                                What will be the fund id related to your proposal?
                            </label>
                            <input
                                type="number"
                                id="id"
                                name="id"
                                placeholder='Fund ID'
                                value={props.id}
                                onChange={(e) => props.setId(e.target.value)}
                                className=" bg-white md:text-xl lg:text-xl text-center text-black p-2 mt-4 rounded-full outline-0 shadow-lg hover:bg-gray-100 transition duration-1000 ease-in-out"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="block font-medium md:text-xl lg:text-xl mb-2 mt-6 md:mt-0 lg:mt-0" htmlFor="ticker">
                                What will be your proposal type?
                            </label>
                            <select
                                id="proposal type"
                                name="proposal type"
                                placeholder='Proposal Type'
                                value={props.proposalType}
                                onChange={(e) => props.setProposalType(e.target.value)}
                                className="bg-white md:text-xl lg:text-xl text-center text-black p-2 mt-4 rounded-full outline-0 shadow-lg hover:bg-gray-100 transition duration-1000 ease-in-out"
                            >
                                <option value="changeDeadline">Change Deadline</option>
                                <option value="changeInvestment">Change Investment</option>
                            </select>
                        </div>
                    </div>
                    { props.proposalType === 'changeDeadline' &&
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:space-x-12 lg:space-x-12">
                            <div className="flex flex-col">
                                <label className="block font-medium md:text-xl lg:text-xl mb-2 mt-6" htmlFor="openInvestment">
                                    Choose the new timestamp for investments
                                </label>
                                <input
                                    type="date"
                                    id="newTimestamp"
                                    name="newTimestamp"
                                    placeholder='New Timestamp'
                                    value={props.newtimestamp}
                                    onChange={(e) => props.setNewtimestamp(e.target.value)}
                                    className=" bg-white md:text-xl lg:text-xl text-center text-black p-2 mt-4 rounded-full outline-0 shadow-lg hover:bg-gray-100 transition duration-1000 ease-in-out"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="block font-medium md:text-xl lg:text-xl mb-2 mt-6" htmlFor="closeInvestiment">
                                    Choose the deadline to vote in your proposal
                                </label>
                                <input
                                    type="date"
                                    id="deadline"
                                    name="deadline"
                                    placeholder='Deadline to vote'
                                    value={props.deadline}
                                    onChange={(e) => props.setDeadline(e.target.value)}
                                    className=" bg-white md:text-xl lg:text-xl text-center text-black p-2 mt-4 rounded-full outline-0 shadow-lg hover:bg-gray-100 transition duration-1000 ease-in-out"
                                />
                            </div>
                        </div>
                    }
                    { props.proposalType === 'changeInvestment' &&
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:space-x-12 lg:space-x-12">
                            
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}