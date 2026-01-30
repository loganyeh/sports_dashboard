
function TeamStats(){

    return(
        <>
            <div className="border border-black h-auto w-80 my-2 mr-5 bg-white rounded-xl">
                <div className="h-12 w-full pl-4 py-4 flex justify-left items-center font-medium">2025 Team Stats</div>
                <div className="h-13 w-full flex">
                    <div className="border-b-3 border-red-700 h-full w-1/2 flex justify-center items-center font-semibold cursor-pointer">Batting</div>
                    <div className="border-b border-gray-300 h-full w-1/2 flex justify-center items-center font-semibold text-gray-400 hover:border-b-3 hover:border-red-700 hover:text-black hover:font-bold cursor-pointer">Pitching</div>
                </div>
                <div className="h-50 w-full flex flex-wrap">
                    <div className="border-r border-gray-300 h-1/2 w-1/2 flex flex-col justify-center items-center">
                        <div className="text-sm text-gray-500">Runs</div>
                        <div className="text-3xl text-gray-800">724</div>
                        <div className="text-md text-gray-500">13th</div>
                    </div>
                    <div className=" border-gray-300 h-1/2 w-1/2 flex flex-col justify-center items-center">
                        <div className="text-sm text-gray-500">Batting Average</div>
                        <div className="text-3xl text-gray-800">.245</div>
                        <div className="text-md text-gray-500">18th</div>
                    </div>
                    <div className="border-r border-t border-gray-300 h-1/2 w-1/2 flex flex-col justify-center items-center">
                        <div className="text-sm text-gray-500">On Base Percentage</div>
                        <div className="text-3xl text-gray-800">.320</div>
                        <div className="text-md text-gray-500">12th</div>
                    </div>
                    <div className="border-t border-gray-300 h-1/2 w-1/2 flex flex-col justify-center items-center">
                        <div className="text-sm text-gray-500">Slugging Percentage</div>
                        <div className="text-3xl text-gray-800">.399</div>
                        <div className="text-md text-gray-500">14th</div>
                    </div>
                </div>

                <div className="border-t border-dashed border-gray-300 h-10 w-full flex justify-center items-center text-md text-blue-700"><span className="hover:text-blue-900 cursor-pointer">Full Team Stats</span></div>

            </div>
        </>
    )
}

export default TeamStats;