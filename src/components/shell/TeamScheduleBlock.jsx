
function TeamScheduleBlock(){

    return(
        <>
            <div className="h-100 w-1/5 flex justify-center">
                <div className="border border-black h-78 w-65 mt-4 ml-20 rounded-xl">
                    <div className="h-13 w-full pl-3 flex justify-start items-center font-medium">2026 Schedule</div>
                    <div className="h-auto w-full bg-gray-200">
                        <div className="h-10 w-full pl-2 flex justify-start items-center border-y border-gray-300 font-semibold text-xs">SPRING TRAINING</div>
                        <div className="h-14 w-full flex border-b border-gray-300">
                            <div className=" h-full w-1/12 flex justify-end items-center text-sm">@</div>
                            <div className=" h-full w-2/12 flex justify-center items-center"><img src="images/braves.jpg" alt="" className="h-8 w-8" /></div>
                            <div className=" h-full w-4/12 flex justify-start items-center text-sm font-medium">Orioles</div>
                            <div className=" h-full w-6/12">
                                <div className="h-1/2 w-full pr-2 flex justify-end items-center text-sm font-medium">2/23</div>
                                <div className="h-1/2 w-full pr-2 flex justify-end items-center text-sm font-medium">1:05 PM</div>
                            </div>
                        </div>
                        <div className="h-14 w-full flex border-b border-gray-300">
                            <div className=" h-full w-1/12 flex justify-end items-center text-sm">@</div>
                            <div className=" h-full w-2/12 flex justify-center items-center"><img src="images/braves.jpg" alt="" className="h-8 w-8" /></div>
                            <div className=" h-full w-4/12 flex justify-start items-center text-sm font-medium">Orioles</div>
                            <div className=" h-full w-6/12">
                                <div className="h-1/2 w-full pr-2 flex justify-end items-center text-sm font-medium">2/23</div>
                                <div className="h-1/2 w-full pr-2 flex justify-end items-center text-sm font-medium">1:05 PM</div>
                            </div>
                        </div>
                        <div className="h-14 w-full flex border-b border-gray-300">
                            <div className=" h-full w-1/12 flex justify-end items-center text-sm">@</div>
                            <div className=" h-full w-2/12 flex justify-center items-center"><img src="images/braves.jpg" alt="" className="h-8 w-8" /></div>
                            <div className=" h-full w-4/12 flex justify-start items-center text-sm font-medium">Orioles</div>
                            <div className=" h-full w-6/12">
                                <div className="h-1/2 w-full pr-2 flex justify-end items-center text-sm font-medium">2/23</div>
                                <div className="h-1/2 w-full pr-2 flex justify-end items-center text-sm font-medium">1:05 PM</div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="h-13 w-full flex justify-center items-center font-medium text-md text-blue-600"><span className="hover:text-blue-900 cursor-pointer">Full Schedule</span></div>

                </div>
            </div>
        </>
    )
}

export default TeamScheduleBlock;