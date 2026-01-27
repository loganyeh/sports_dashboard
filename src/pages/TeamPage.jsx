
function TeamPage(){

    return(
        <>
            <div id="screen" className="h-screen w-screen border-2 border-red-600">

                {/* full scoreboard */}
                <div id="full-scoreboard" className="border-2 border-red-600 h-18 w-full flex">
                    <div className="h-full w-50 flex">
                        <div id="sports-league-dropdown" className="border-2 border-black h-full w-1/2 flex justify-center items-center">
                            <div className="border-2 border-red-600 h-8 w-15 flex justify-center items-center rounded-xl">MLB</div>
                        </div>
                        <div id="date" className="border-2 border-black h-full w-1/2 flex justify-center items-center">
                            <div className="border-2 border-red-600 h-8 w-15 flex justify-center items-center rounded-xl">Feb 20</div>
                        </div>
                    </div>

                    {/* games */}
                    <div className="border-2 border-blue-600 h-full w-375 flex">
                        <div className="border-2 border-red-600 h-full w-30">
                            <div className="border-2 border-red-600 h-1/3 w-full">
                                <span>2/20 - 1:05 PM</span>
                                <span></span>
                            </div>
                            <div className="border-2 border-red-600 h-1/3 w-full flex justify-between">
                                <div className="flex">
                                    <div>LOGO</div>
                                    <div>NYY</div>
                                </div>
                                <div>0-0</div>
                            </div>
                            <div className="border-2 border-red-600 h-1/3 w-full flex justify-between">
                                <div className="flex">
                                    <div>LOGO</div>
                                    <div>BAL</div>
                                </div>
                                <div>0-0</div>
                            </div>
                        </div>

                    </div>

                    <div className="border-2 border-blue-600 h-full w-53 flex justify-center items-center">
                        Full Scoreboard 
                    </div>
                </div>


                {/* sports-tab */}
                <div id="sport-tabs" className="border-2 border-red-600 h-15 w-full flex">
                    <div className="h-full w-1/2 flex">
                        <div className="border-2 border-black h-full w-50 flex justify-end items-center bg-red-600 text-white text-4xl">ESPN</div>
                        <div className="border-2 border-black h-full w-190 flex justify-around items-center text-xl">
                            <span>NFL</span>
                            <span>NBA</span>
                            <span>NCAAF</span>
                            <span>NCAAB</span>
                            <span>NCAAW</span>
                            <span>NHL</span>
                            <span>Soccer</span>
                            <span>MLB</span>
                            <span>More Sports</span>
                        </div>
                    </div>

                    <div className="h-full w-1/2 flex">
                        <div className="border-2 border-black h-full w-1/2"></div>
                        <div className="border-2 border-black h-full w-1/2 flex justify-around items-center">
                            <div>Watch</div>
                            <div>Fantasy</div>
                            <div>Where to Watch</div>
                            <div>O</div>
                            <div>O</div>
                        </div>
                    </div>

                </div>



                <div id="team-page-header" className="border-2 border-red-600 h-26 w-full flex">
                    <div className="border-2 border-black h-full w-50">BRAVES LOGO</div>
                    <div className="border-2 border-black h-full w-60">
                        <div>ATLANTA BRAVES</div>
                        <div>Follow 4th in NL East</div>
                    </div>
                </div>

                <div id="team-tabs" className="border-2 border-red-600 h-14 w-full flex">
                    <div className="border-2 border-black h-full w-25 flex justify-center items-center">Home</div>
                    <div className="border-2 border-black h-full w-25 flex justify-center items-center">Stats</div>
                    <div className="border-2 border-black h-full w-25 flex justify-center items-center">Schedule</div>
                    <div className="border-2 border-black h-full w-25 flex justify-center items-center">Roster</div>
                    <div className="border-2 border-black h-full w-25 flex justify-center items-center">Depth Chart</div>
                    <div className="border-2 border-black h-full w-25 flex justify-center items-center">Splits</div>
                    <div className="border-2 border-black h-full w-25 flex justify-center items-center">Injuries</div>
                    <div className="border-2 border-black h-full w-25 flex justify-center items-center">Transactions</div>
                    <div className="border-2 border-black h-full w-25 flex justify-center items-center">Tickets</div>
                </div>


                {/* team body of page */}
                <div id="team-body-page" className="border-2 border-blue-600 h-auto w-full flex">


                    {/* schedule */}
                    <div className="border-2 border-black h-100 w-1/5 flex justify-center">
                        <div className="border-2 border-red-600 h-80 w-70 mt-2 ml-14 rounded-xl">
                            <div className="border-2 border-red-600 h-1/6 w-full">2026 Schedule</div>
                            <div className="border-2 border-red-600 h-4/6 w-full flex flex-col justify-around">
                                <div className="border-2 border-black h-1/5 w-full">Spring Training</div>
                                <div className="border-2 border-black h-1/4 w-full flex">
                                    <div className="border-2 border-red-600 h-full w-1/6">@</div>
                                    <div className="border-2 border-red-600 h-full w-1/6">LOGO</div>
                                    <div className="border-2 border-red-600 h-full w-2/6">Orioles</div>
                                    <div className="border-2 border-red-600 h-full w-2/6">
                                        <div className="border-2 border-black h-1/2 w-full">2/23</div>
                                        <div className="border-2 border-black h-1/2 w-full">1:05 PM</div>
                                    </div>
                                </div>
                                <div className="border-2 border-black h-1/4 w-full flex">
                                    <div className="border-2 border-red-600 h-full w-1/6">vs</div>
                                    <div className="border-2 border-red-600 h-full w-1/6">LOGO</div>
                                    <div className="border-2 border-red-600 h-full w-2/6">Twins</div>
                                    <div className="border-2 border-red-600 h-full w-2/6">
                                        <div className="border-2 border-black h-1/2 w-full">2/22</div>
                                        <div className="border-2 border-black h-1/2 w-full">1:05 PM</div>
                                    </div>
                                </div>
                                <div className="border-2 border-black h-1/4 w-full flex">
                                    <div className="border-2 border-red-600 h-full w-1/6">@</div>
                                    <div className="border-2 border-red-600 h-full w-1/6">LOGO</div>
                                    <div className="border-2 border-red-600 h-full w-2/6">Rays</div>
                                    <div className="border-2 border-red-600 h-full w-2/6">
                                        <div className="border-2 border-black h-1/2 w-full">2/21</div>
                                        <div className="border-2 border-black h-1/2 w-full">1:05 PM</div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-2 border-red-600 h-1/6 w-full">Full Schedule</div>
                        </div>
                    </div>

                    {/* articles */}
                    <div className="border-2 border-black h-auto w-3/5">
                        <div className="border-2 border-red-600 h-100 w-full mt-2 rounded-xl flex flex-col items-center">
                            {/* top half */}
                            <div className="border-2 border-blue-600 h-1/5 w-275 flex">
                                <div className="border-2 border-black h-full w-2/12 flex">
                                    <div className="border-2 border-red-600 h-full w-1/2">LOGO</div>
                                    <div className="border-2 border-red-600 h-full w-1/2">
                                        <div className="border-2 border-black h-1/2 w-full">BRAVES</div>
                                        <div className="border-2 border-black h-1/2 w-full">MLB</div>
                                    </div>
                                </div>
                                <div className="border-2 border-black h-full w-10/12"></div>
                            </div>

                            {/* bottom half */}
                            <div className="border-2 border-red-600 h-4/5 w-full flex justify-center items-center">
                                <div className="border-2 border-black h-72 w-275 rounded-xl">
                                    <div className="border-2 border-black h-9/12 w-full bg-gray-50"></div>
                                    <div className="border-2 border-black h-3/12 w-full">
                                        <div className="border-2 border-red-600 h-1/2 w-full">ARTICLE TITLE</div>
                                        <div className="border-2 border-red-600 h-1/2 w-full flex">
                                            <div>TIME</div>
                                            <div className="mx-2">*</div>
                                            <div>AUTHORS</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right body */}
                    <div className="border-2 border-black h-300 w-1/5 flex flex-col items-center">

                        {/* STANDINGS */}
                        <div className="border-2 border-red-600 h-75 w-80 my-2 mr-5 rounded-xl">
                            <div className="border-2 border-black h-1/5 w-full">2025 NL East Standings</div>
                            <div className="border-2 border-black h-3/5 w-full">
                                <div className="border-2 border-red-600 h-1/6 w-full flex">
                                    <div className="border border-black h-full w-2/6">Team</div>
                                    <div className="border border-black h-full w-4/6 flex justify-center items-center">
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">W</div>
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">L</div>
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">PCT</div>
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">GB</div>
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">STRK</div>
                                    </div>
                                </div>
                                <div className="border-2 border-red-600 h-1/6 w-full flex">
                                    <div className="border border-black h-full w-2/6 text-blue-600">Philadephia</div>
                                    <div className="border border-black h-full w-4/6 flex justify-center items-center">
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">96</div>
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">66</div>
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">.593</div>
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">-</div>
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">W1</div>
                                    </div>
                                </div>
                                <div className="border-2 border-red-600 h-1/6 w-full flex">
                                    <div className="border border-black h-full w-2/6 text-blue-600">NY Mets</div>
                                    <div className="border border-black h-full w-4/6 flex justify-center items-center">
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">83</div>
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">79</div>
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">.512</div>
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">13</div>
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">L1</div>
                                    </div>
                                </div>
                                <div className="border-2 border-red-600 h-1/6 w-full flex">
                                    <div className="border border-black h-full w-2/6 text-blue-600">Miami</div>
                                    <div className="border border-black h-full w-4/6 flex justify-center items-center">
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">79</div>
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">83</div>
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">.488</div>
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">17</div>
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">W1</div>
                                    </div>
                                </div>
                                <div className="border-2 border-red-600 h-1/6 w-full flex font-bold">
                                    <div className="border border-black h-full w-2/6 text-blue-600">Atlanta</div>
                                    <div className="border border-black h-full w-4/6 flex justify-center items-center">
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">76</div>
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">86</div>
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">.469</div>
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">20</div>
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">W1</div>
                                    </div>
                                </div>
                                <div className="border-2 border-red-600 h-1/6 w-full flex">
                                    <div className="border border-black h-full w-2/6 text-blue-600">Washington</div>
                                    <div className="border border-black h-full w-4/6 flex justify-center items-center">
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">66</div>
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">96</div>
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">.407</div>
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">30</div>
                                        <div className="border border-black h-full w-1/5 flex justify-center items-center">L1</div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-2 border-black h-1/5 w-full">Full Standings</div>
                        </div>

                        {/* FIND TICKETS */}
                        <div className="border-2 border-red-600 h-64 w-80 my-2 mr-5 rounded-xl">
                            <div className="border border-black h-13 w-full">Find Tickets</div>
                            <div className="border border-black h-25 w-full">Braves @ Rays</div>
                            <div className="border border-black h-13 w-full">Buy Tickets</div>
                            <div className="border border-black h-13 w-full">Other Games</div>
                        </div>


                        {/* TEAM STATS */}
                        <div className="border border-black h-86 w-80 my-2 mr-5 bg-white rounded-xl">
                            <div className="h-12 w-full pl-4 py-4 flex justify-left items-center font-medium">2025 Team Stats</div>
                            <div className="h-13 w-full flex">
                                <div className="border-b-3 border-red-700 h-full w-1/2 flex justify-center items-center font-semibold cursor-pointer">Batting</div>
                                <div className="border-b border-gray-300 h-full w-1/2 flex justify-center items-center font-semibold text-gray-400 cursor-pointer">Pitching</div>
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

                            <div className="border-t border-dashed border-gray-300 h-10 w-full flex justify-center items-center text-md text-blue-700 hover:text-blue-900 cursor-pointer">Full Team Stats</div>

                        </div>
                        
                    </div>

                </div>

            </div>
        </>
    )
}

export default TeamPage;