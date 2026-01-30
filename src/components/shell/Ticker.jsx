
function Ticker(){

      return(
        <>
            <div id="full-scoreboard" className="h-18 w-full flex">
                <div className="h-full w-auto flex">
                    <div id="sports-league-dropdown" className="border-r border-gray-400 h-full w-30 flex justify-center items-center">
                        <div className="border border-gray-400 h-8 w-18 flex justify-center items-center text-sm rounded-xl cursor-pointer">MLB<i className='bx bx-chevron-down text-lg text-blue-400' ></i></div>
                    </div>
                    <div id="sports-league-dropdown" className="border-r border-gray-400 h-full w-30 flex justify-center items-center">
                        <div className="border border-gray-400 h-8 w-18 flex justify-center items-center text-sm rounded-xl cursor-pointer">Feb 20<i className='bx bx-chevron-down text-lg text-blue-400' ></i></div>
                    </div>
                </div>

                {/* games */}
                <div className="h-full w-375 flex">
                    <div className="border-r border-gray-400 h-full w-40 p-1">
                        <div className="h-1/3 w-full flex justify-start items-center text-sm font-medium">
                            <span>2/20 - 1:05 PM</span>
                        </div>
                        <div className="h-1/3 w-full flex justify-between">
                            <div className="flex justify-center items-center">
                                <div className="flex justify-center items-center mr-2"><img src="images/braves.jpg" alt="" className="h-4 w-4 flex justify-center items-center"/></div>
                                <div className="text-sm font-medium">NYY</div>
                            </div>
                            <div className="flex justify-center items-center mr-2 text-xs">0-0</div>
                        </div>
                        <div className="h-1/3 w-full flex justify-between">
                            <div className="flex justify-center items-center">
                                <div className="flex justify-center items-center mr-2"><img src="images/braves.jpg" alt="" className="h-4 w-4 flex justify-center items-center"/></div>
                                <div className="text-sm font-medium">BAL</div>
                            </div>
                            <div className="flex justify-center items-center mr-2 text-xs">0-0</div>
                        </div>
                    </div>
                    <div className="border-r border-gray-400 h-full w-40 p-1">
                        <div className="h-1/3 w-full flex justify-start items-center text-sm font-medium">
                            <span>2/20 - 1:05 PM</span>
                        </div>
                        <div className="h-1/3 w-full flex justify-between">
                            <div className="flex justify-center items-center">
                                <div className="flex justify-center items-center mr-2"><img src="images/braves.jpg" alt="" className="h-4 w-4 flex justify-center items-center"/></div>
                                <div className="text-sm font-medium">NYY</div>
                            </div>
                            <div className="flex justify-center items-center mr-2 text-xs">0-0</div>
                        </div>
                        <div className="h-1/3 w-full flex justify-between">
                            <div className="flex justify-center items-center">
                                <div className="flex justify-center items-center mr-2"><img src="images/braves.jpg" alt="" className="h-4 w-4 flex justify-center items-center"/></div>
                                <div className="text-sm font-medium">BAL</div>
                            </div>
                            <div className="flex justify-center items-center mr-2 text-xs">0-0</div>
                        </div>
                    </div>
                    <div className="border-r border-gray-400 h-full w-40 p-1">
                        <div className="h-1/3 w-full flex justify-start items-center text-sm font-medium">
                            <span>2/20 - 1:05 PM</span>
                        </div>
                        <div className="h-1/3 w-full flex justify-between">
                            <div className="flex justify-center items-center">
                                <div className="flex justify-center items-center mr-2"><img src="images/braves.jpg" alt="" className="h-4 w-4 flex justify-center items-center"/></div>
                                <div className="text-sm font-medium">NYY</div>
                            </div>
                            <div className="flex justify-center items-center mr-2 text-xs">0-0</div>
                        </div>
                        <div className="h-1/3 w-full flex justify-between">
                            <div className="flex justify-center items-center">
                                <div className="flex justify-center items-center mr-2"><img src="images/braves.jpg" alt="" className="h-4 w-4 flex justify-center items-center"/></div>
                                <div className="text-sm font-medium">BAL</div>
                            </div>
                            <div className="flex justify-center items-center mr-2 text-xs">0-0</div>
                        </div>
                    </div>
                    <div className="border-r border-gray-400 h-full w-40 p-1">
                        <div className="h-1/3 w-full flex justify-start items-center text-sm font-medium">
                            <span>2/20 - 1:05 PM</span>
                        </div>
                        <div className="h-1/3 w-full flex justify-between">
                            <div className="flex justify-center items-center">
                                <div className="flex justify-center items-center mr-2"><img src="images/braves.jpg" alt="" className="h-4 w-4 flex justify-center items-center"/></div>
                                <div className="text-sm font-medium">NYY</div>
                            </div>
                            <div className="flex justify-center items-center mr-2 text-xs">0-0</div>
                        </div>
                        <div className="h-1/3 w-full flex justify-between">
                            <div className="flex justify-center items-center">
                                <div className="flex justify-center items-center mr-2"><img src="images/braves.jpg" alt="" className="h-4 w-4 flex justify-center items-center"/></div>
                                <div className="text-sm font-medium">BAL</div>
                            </div>
                            <div className="flex justify-center items-center mr-2 text-xs">0-0</div>
                        </div>
                    </div>

                </div>

                <div className="border-l border-gray-400 h-full w-52 flex justify-center items-center text-sm font-light hover:text-blue-600 cursor-pointer">Full Scoreboard<i className='bx bxs-chevrons-right pl-2'></i></div>

            </div>

                
        </>
      )
}

export default Ticker;