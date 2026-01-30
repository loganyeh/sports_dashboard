
function TeamStandingsBlock(){

    return(
        <>
            <div className="border border-black h-auto w-80 mt-4 mb-2 mr-5 rounded-xl">
                <div className="border-b border-gray-300 h-15 w-full flex justify-center items-center font-medium">2025 NL East Standings</div>
                <div className="h-auto w-full flex flex-col justify-between">
                    <div className="border-b border-gray-300 h-8 w-full flex text-sm text-gray-800 font-semibold">
                        <div className="h-full w-2/6 pl-2 flex justify-start items-center">TEAM</div>
                        <div className="h-full w-4/6 flex justify-center items-center">
                            <div className="h-full w-1/5 flex justify-center items-center">W</div>
                            <div className="h-full w-1/5 flex justify-center items-center">L</div>
                            <div className="h-full w-1/5 flex justify-center items-center">PCT</div>
                            <div className="h-full w-1/5 flex justify-center items-center">GB</div>
                            <div className="h-full w-1/5 flex justify-center items-center">STRK</div>
                        </div>
                    </div>
                    <div className="border-b border-gray-300 h-8 w-full flex text-xs">
                        <div className="h-full w-2/6 pl-2 flex justify-start items-center text-sm text-blue-600"><span className="hover:text-blue-800 cursor-pointer">Philadelphia</span></div>
                        <div className="h-full w-4/6 flex justify-center items-center">
                            <div className="h-full w-1/5 flex justify-center items-center">96</div>
                            <div className="h-full w-1/5 flex justify-center items-center">66</div>
                            <div className="h-full w-1/5 flex justify-center items-center">.593</div>
                            <div className="h-full w-1/5 flex justify-center items-center">-</div>
                            <div className="h-full w-1/5 flex justify-center items-center">W1</div>
                        </div>
                    </div>
                    <div className="border-b border-gray-300 h-8 w-full flex bg-gray-200 text-xs">
                        <div className="h-full w-2/6 pl-2 flex justify-start items-center text-sm text-blue-600"><span className="hover:text-blue-800 cursor-pointer">NY Mets</span></div>
                        <div className="h-full w-4/6 flex justify-center items-center">
                            <div className="h-full w-1/5 flex justify-center items-center">96</div>
                            <div className="h-full w-1/5 flex justify-center items-center">66</div>
                            <div className="h-full w-1/5 flex justify-center items-center">.593</div>
                            <div className="h-full w-1/5 flex justify-center items-center">-</div>
                            <div className="h-full w-1/5 flex justify-center items-center">W1</div>
                        </div>
                    </div>
                    <div className="border-b border-gray-300 h-8 w-full flex text-xs">
                        <div className="h-full w-2/6 pl-2 flex justify-start items-center text-sm text-blue-600"><span className="hover:text-blue-800 cursor-pointer">Miami</span></div>
                        <div className="h-full w-4/6 flex justify-center items-center">
                            <div className="h-full w-1/5 flex justify-center items-center">96</div>
                            <div className="h-full w-1/5 flex justify-center items-center">66</div>
                            <div className="h-full w-1/5 flex justify-center items-center">.593</div>
                            <div className="h-full w-1/5 flex justify-center items-center">-</div>
                            <div className="h-full w-1/5 flex justify-center items-center">W1</div>
                        </div>
                    </div>
                    <div className="border-b border-gray-300 h-8 w-full flex bg-gray-200 text-xs font-bold">
                        <div className="h-full w-2/6 pl-2 flex justify-start items-center text-sm text-blue-600"><span className="hover:text-blue-800 cursor-pointer">Atlanta</span></div>
                        <div className="h-full w-4/6 flex justify-center items-center">
                            <div className="h-full w-1/5 flex justify-center items-center">96</div>
                            <div className="h-full w-1/5 flex justify-center items-center">66</div>
                            <div className="h-full w-1/5 flex justify-center items-center">.593</div>
                            <div className="h-full w-1/5 flex justify-center items-center">-</div>
                            <div className="h-full w-1/5 flex justify-center items-center">W1</div>
                        </div>
                    </div>
                    <div className="border-b border-gray-300 h-8 w-full flex text-xs">
                        <div className="h-full w-2/6 pl-2 flex justify-start items-center text-sm text-blue-600"><span className="hover:text-blue-800 cursor-pointer">Washington</span></div>
                        <div className="h-full w-4/6 flex justify-center items-center">
                            <div className="h-full w-1/5 flex justify-center items-center">96</div>
                            <div className="h-full w-1/5 flex justify-center items-center">66</div>
                            <div className="h-full w-1/5 flex justify-center items-center">.593</div>
                            <div className="h-full w-1/5 flex justify-center items-center">-</div>
                            <div className="h-full w-1/5 flex justify-center items-center">W1</div>
                        </div>
                    </div>
                    
                </div>
                <div className="h-10 w-full flex justify-center items-center text-blue-600 font-medium text-md"><span className="hover:text-blue-900 cursor-pointer">Full Standings</span></div>
            </div>
        </>
    )
}

export default TeamStandingsBlock;