
function TeamPage(){

    return(
        <>
            <div id="screen" className="h-screen w-screen">

                {/* full scoreboard */}
                <div id="full-scoreboard" className="h-18 w-full flex">
                    <div className="h-full w-auto flex">
                        <div id="sports-league-dropdown" className="border-r border-gray-400 h-full w-30 flex justify-center items-center">
                            <div className="border border-gray-400 h-8 w-18 flex justify-center items-center text-sm rounded-xl">MLB<i className='bx bx-chevron-down text-lg text-blue-400' ></i></div>
                        </div>
                        <div id="sports-league-dropdown" className="border-r border-gray-400 h-full w-30 flex justify-center items-center">
                            <div className="border border-gray-400 h-8 w-18 flex justify-center items-center text-sm rounded-xl">Feb 20<i className='bx bx-chevron-down text-lg text-blue-400' ></i></div>
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

                    </div>

                    <div className="border-l border-gray-400 h-full w-52 flex justify-center items-center text-sm font-light hover:text-blue-600 cursor-pointer">Full Scoreboard<i className='bx bxs-chevrons-right pl-2'></i></div>

                </div>


                {/* sports-tab */}
                <div id="sport-tabs" className="h-auto w-full flex text-white bg-gray-900">
                    <div className="h-auto w-1/2 flex">
                        <div className="h-12 w-50 pr-4 flex justify-end items-center bg-red-600 text-white text-4xl font-bold"><span>ESPN</span></div>
                        <div className="h-12 w-190 flex justify-around items-center text-sm font-medium">
                            <span className="cursor-pointer">NFL</span>
                            <span className="cursor-pointer">NBA</span>
                            <span className="cursor-pointer">NCAAF</span>
                            <span className="cursor-pointer">NCAAB</span>
                            <span className="cursor-pointer">NCAAW</span>
                            <span className="cursor-pointer">NHL</span>
                            <span className="cursor-pointer">Soccer</span>
                            <span className="cursor-pointer">MLB</span>
                            <span className="cursor-pointer">More Sports</span>
                        </div>
                    </div>

                    <div className="h-12 w-1/2 flex">
                        {/* filler div */}
                        <div className="h-full w-1/2"></div>
                        <div className="h-full w-1/2 flex justify-around items-center text-sm font-medium">
                            <div><span className="flex justify-center items-center cursor-pointer"><i className='bx bx-caret-right-square flex justify-center items-center mr-1 text-xl' ></i>Watch</span></div>
                            <div><span className="flex justify-center items-center cursor-pointer"><i className='bx bx-shield flex justify-center items-center mr-1 text-xl' ></i>Fantasy</span></div>
                            <div><span className="flex justify-center items-center cursor-pointer"><i className='bx bx-tv text-xl mr-1' ></i>Where to Watch</span></div>
                            <div className="flex justify-center items-center"><i className='bx bx-search text-xl cursor-pointer'></i></div>
                            <div className="flex justify-center items-center"><i className='bx bxs-user-circle text-xl cursor-pointer'></i></div>
                        </div>
                    </div>

                </div>

                <div id="team-page-header" className="h-auto w-full flex">
                    <div className="h-auto w-40 flex justify-end items-center mr-2"><img src="/images/braves.jpg" alt="braves.logo" className="h-28 w-28 p-2" /></div>
                    <div className="h-auto w-auto">
                        <div className="h-1/2 flex justify-center items-center pt-2 pl-2"><span className="mr-2 text-3xl font-light">ATLANTA</span><span className="text-3xl font-medium">BRAVES</span></div>
                        <div className="h-1/2 flex justify-around items-center">
                            <div className="h-1/2 w-30 flex justify-center items-center bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-600 cursor-pointer">Follow</div> 
                            <div className="h-full w-24 flex justify-center items-center text-sm font-light">4th in NL East</div>
                        </div>
                    </div>
                </div>

                <div id="team-tabs" className="border-y border-gray-200 h-14 w-full flex font-light shadow-md">
                    <div className="border-b-4 border-red-700 h-full w-25 flex justify-center items-center cursor-pointer"><span className="">Home</span></div>
                    <div className="h-full w-25 flex justify-center items-center hover:border-b-4 hover:border-red-700 cursor-pointer"><span className="">Stats</span></div>
                    <div className="h-full w-25 flex justify-center items-center hover:border-b-4 hover:border-red-700 cursor-pointer"><span className="">Schedule</span></div>
                    <div className="h-full w-25 flex justify-center items-center hover:border-b-4 hover:border-red-700 cursor-pointer"><span className="">Roster</span></div>
                    <div className="h-full w-25 flex justify-center items-center hover:border-b-4 hover:border-red-700 cursor-pointer"><span className="">Depth Chart</span></div>
                    <div className="h-full w-25 flex justify-center items-center hover:border-b-4 hover:border-red-700 cursor-pointer"><span className="">Splits</span></div>
                    <div className="h-full w-25 flex justify-center items-center hover:border-b-4 hover:border-red-700 cursor-pointer"><span className="">Injuries</span></div>
                    <div className="h-full w-25 flex justify-center items-center hover:border-b-4 hover:border-red-700 cursor-pointer"><span className="">Transactions</span></div>
                    <div className="h-full w-25 flex justify-center items-center hover:border-b-4 hover:border-red-700 cursor-pointer"><span className="">Tickets</span></div>
                </div>


                {/* team body of page */}
                <div id="team-body-page" className="h-auto w-full flex">


                    {/* schedule */}
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

                    {/* articles */}
                    <div className="h-auto w-3/5">
                        <div className="border border-black h-auto w-full mt-4 rounded-xl flex flex-col items-center">
                            {/* top half */}
                            <div className="h-auto w-275 flex">
                                <div className="h-auto w-46 flex">
                                    <div className="h-20 w-23 flex justify-center items-center bg-cover bg-center"><img src="/images/braves.jpg" alt="braves logo" className="h-16 w-16" /></div>
                                    <div className="h-20 w-1/2">
                                        <div className="h-1/2 w-full flex justify-start items-end text-lg font-medium">BRAVES</div>
                                        <div className="h-1/2 w-full flex justify-start items-start text-sm font-normal">MLB</div>
                                    </div>
                                </div>
                                <div className="h-full w-10/12"></div>
                            </div>

                            {/* bottom half */}
                            <div className="h-auto w-full mb-4 flex justify-center items-center">
                                <div className="border border-black h-auto w-275 rounded-xl shadow-md hover:text-blue-800 cursor-pointer">
                                    <div className="border-b-4 border-gray-400 h-110 w-full"><img src="/images/article_img1.jpg" alt="article" className="h-full w-full rounded-t-xl"/></div>
                                    <div className="h-18 w-full">
                                        <div className="h-9 w-full pl-2 flex justify-start items-center text-xl font-medium">
                                            <span>Just missed the top 100? No problem! Rookie of the Year candidates, breakout prospects from Nos. 101 to 200</span>
                                        </div>
                                        <div className="h-9 w-full flex justify-start items-center text-sm text-gray-600">
                                            <span className="h-full ml-2 flex justify-center items-center">13h</span>
                                            <span className="h-full mx-2 flex justify-center items-center">.</span>
                                            <span className="h-full flex justify-center items-center">Kiley McDaniel</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right body */}
                    <div className="h-300 w-1/5 flex flex-col items-center">

                        {/* STANDINGS */}
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

                        {/* FIND TICKETS */}
                        <div className="border border-black h-auto w-80 my-2 mr-5 rounded-xl">
                            <div className="border-b border-dashed border-gray-300 h-13 w-full flex">
                                <div className="h-full w-1/2 pl-4 flex justify-start items-center font-medium">Find Tickets</div>
                                <div className="h-full w-1/2">
                                    <div className="h-1/2 w-full pr-8 flex justify-end items-end text-xs text-gray-400"><span className="cursor-pointer">Powered By</span></div>
                                    <div className="h-1/2 w-full pr-4 flex justify-end items-center text-sm text-blue-900 font-bold"><span className="cursor-pointer">Vivid Seats</span></div>
                                </div>
                            </div>

                            <div className="border-b border-gray-300 h-auto w-full">
                                <div className="h-7 w-full flex justify-center items-center text-lg font-semibold">Braves @ Rays</div>
                                <div className="h-7 w-full flex justify-center items-center text-sm text-gray-400 font-light">Charlotte Sports Park - Sat 2/21/26, 1:05</div>
                                <div className="h-7 w-full flex justify-center items-center text-sm text-blue-600"><span className="hover:text-blue-900 hover:underline cursor-pointer">Tickets as low as $13</span></div>
                            </div>
                            <div className="border-b border-gray-300 h-10 w-full flex justify-center items-center text-sm"><span>Buy <span className="text-blue-600 hover:text-blue-900 hover:underline cursor-pointer" >Braves tickets</span> with <span className="text-blue-600 hover:text-blue-900 hover:underline cursor-pointer" >VividSeats</span></span></div>
                            <div className="h-13 w-full flex justify-around items-center">
                                <div className="h-full w-35 flex justify-end items-center text-md font-light">Other Games</div>
                                <div className="border border-gray-400 h-8 w-38 flex justify-center items-center bg-gray-50 text-xs rounded-2xl hover:bg-white cursor-pointer">Search by Team<i className='bx bx-chevron-down text-lg pl-1 text-blue-600'></i></div>
                            </div>
                        </div>


                        {/* TEAM STATS */}
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

                    </div>

                </div>

            </div>
        </>
    )
}

export default TeamPage;