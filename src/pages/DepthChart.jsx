import MainNavBar from "../components/shell/MainNavBar";
import PageNavBar from "../components/shell/PageNavBar";
import TeamLogoHeader from "../components/shell/TeamLogoHeader";
import Ticker from "../components/shell/Ticker";

function DepthChart() {
  return (
    <>
      <div className="h-screen w-screen">

        {/* components */}
        <Ticker /> 
        <MainNavBar />
        <TeamLogoHeader />
        <PageNavBar />

        {/* DEPTH CHART */}
        <div className="border-2 border-blue-600 h-auto w-full flex justify-between pb-80">

            {/* depth chart */}
            <div className="border border-black h-auto w-315 mt-4 ml-35 p-2 rounded-xl">

                <div className="border border-black h-20 w-full flex justify-between items-center">
                    <div className="h-full w-1/2 flex justify-start items-center text-4xl font-semibold">Atlanta Braves Depth Chart</div>
                    <div className="border border-black h-10 w-46 flex justify-center items-center text-sm font-light rounded-3xl">More MLB Teams<i className='bx bx-chevron-down text-blue-500'></i></div>
                </div>

                <div className="border-2 border-black h-10 w-full text-lg font-semibold">Depth Chart</div>

                {/* depth chart chart */}
                <div className="border-2 border-red-600 h-auto w-full flex mb-4">
                    {/* positions */}
                    <div className="h-auto w-12">
                        <div className="h-10 w-full flex justify-center items-center text-sm text-gray-600 font-light"></div>
                        <div className="h-10 w-full flex justify-center items-center text-sm text-gray-600 font-light">P</div>
                        <div className="h-10 w-full flex justify-center items-center text-sm text-gray-600 font-light">RP</div>
                        <div className="h-10 w-full flex justify-center items-center text-sm text-gray-600 font-light">CL</div>
                        <div className="h-10 w-full flex justify-center items-center text-sm text-gray-600 font-light">C</div>
                        <div className="h-10 w-full flex justify-center items-center text-sm text-gray-600 font-light">1B</div>
                        <div className="h-10 w-full flex justify-center items-center text-sm text-gray-600 font-light">2B</div>
                        <div className="h-10 w-full flex justify-center items-center text-sm text-gray-600 font-light">3B</div>
                        <div className="h-10 w-full flex justify-center items-center text-sm text-gray-600 font-light">SS</div>
                        <div className="h-10 w-full flex justify-center items-center text-sm text-gray-600 font-light">LF</div>
                        <div className="h-10 w-full flex justify-center items-center text-sm text-gray-600 font-light">CF</div>
                        <div className="h-10 w-full flex justify-center items-center text-sm text-gray-600 font-light">RF</div>
                        <div className="h-10 w-full flex justify-center items-center text-sm text-gray-600 font-light">DH</div>
                    </div>

                    {/* starters */}
                    <div className="h-auto w-auto">
                        <div className="h-10 w-59 pl-2 flex items-center font-light">STARTERS</div>
                        <div className="h-10 w-59 pl-2 flex items-center text-blue-700 text-sm font-light font-semibold"><span className="hover:text-blue-800 cursor-pointer">Chris Sale</span></div>
                        <div className="h-10 w-59 pl-2 flex items-center text-blue-700 text-sm font-light font-semibold"><span className="hover:text-blue-800 cursor-pointer">Pierce Johnson</span></div>
                        <div className="h-10 w-59 pl-2 flex items-center text-blue-700 text-sm font-light font-semibold"><span className="hover:text-blue-800 cursor-pointer">Raisel Iglesias</span></div>
                        <div className="h-10 w-59 pl-2 flex items-center text-blue-700 text-sm font-light font-semibold"><span className="hover:text-blue-800 cursor-pointer">Sean Murphy</span></div>
                        <div className="h-10 w-59 pl-2 flex items-center text-blue-700 text-sm font-light font-semibold"><span className="hover:text-blue-800 cursor-pointer">Matt Olson</span></div>
                        <div className="h-10 w-59 pl-2 flex items-center text-blue-700 text-sm font-light font-semibold"><span className="hover:text-blue-800 cursor-pointer">Ozzie Albies</span></div>
                        <div className="h-10 w-59 pl-2 flex items-center text-blue-700 text-sm font-light font-semibold"><span className="hover:text-blue-800 cursor-pointer">Austin Riley</span></div>
                        <div className="h-10 w-59 pl-2 flex items-center text-blue-700 text-sm font-light font-semibold"><span className="hover:text-blue-800 cursor-pointer">Orlando Arcia</span></div>
                        <div className="h-10 w-59 pl-2 flex items-center text-blue-700 text-sm font-light font-semibold"><span className="hover:text-blue-800 cursor-pointer">Jurickson Profar</span></div>
                        <div className="h-10 w-59 pl-2 flex items-center text-blue-700 text-sm font-light font-semibold"><span className="hover:text-blue-800 cursor-pointer">Michael Harris II</span></div>
                        <div className="h-10 w-59 pl-2 flex items-center text-blue-700 text-sm font-light font-semibold"><span className="hover:text-blue-800 cursor-pointer">Ronald Acuna Jr.</span></div>
                        <div className="h-10 w-59 pl-2 flex items-center text-blue-700 text-sm font-light font-semibold"><span className="hover:text-blue-800 cursor-pointer">Marcell Ozuna</span></div>
                    </div>

                    
                    
                </div>

                <div className="border border-black text-sm font-medium">GLOSSARY</div>
                
                {/* positions keys */}
                <div className="border border-black h-auto w-full mb-4 flex flex-wrap">
                    <div className="h-1/4 w-1/3 flex">
                        <div className="h-auto w-auto p-2 flex justify-center items-center text-xs font-semibold">RP:</div>
                        <div className="h-auto w-auto flex justify-center items-center text-xs font-light">Relief Pitcher</div>
                    </div>
                    <div className="h-1/4 w-1/3 flex">
                        <div className="h-auto w-auto p-2 flex justify-center items-center text-xs font-semibold">RP:</div>
                        <div className="h-auto w-auto flex justify-center items-center text-xs font-light">Relief Pitcher</div>
                    </div>
                    <div className="h-1/4 w-1/3 flex">
                        <div className="h-auto w-auto p-2 flex justify-center items-center text-xs font-semibold">RP:</div>
                        <div className="h-auto w-auto flex justify-center items-center text-xs font-light">Relief Pitcher</div>
                    </div>
                    <div className="h-1/4 w-1/3 flex">
                        <div className="h-auto w-auto p-2 flex justify-center items-center text-xs font-semibold">RP:</div>
                        <div className="h-auto w-auto flex justify-center items-center text-xs font-light">Relief Pitcher</div>
                    </div>
                    <div className="h-1/4 w-1/3 flex">
                        <div className="h-auto w-auto p-2 flex justify-center items-center text-xs font-semibold">RP:</div>
                        <div className="h-auto w-auto flex justify-center items-center text-xs font-light">Relief Pitcher</div>
                    </div>
                    <div className="h-1/4 w-1/3 flex">
                        <div className="h-auto w-auto p-2 flex justify-center items-center text-xs font-semibold">RP:</div>
                        <div className="h-auto w-auto flex justify-center items-center text-xs font-light">Relief Pitcher</div>
                    </div>
                    <div className="h-1/4 w-1/3 flex">
                        <div className="h-auto w-auto p-2 flex justify-center items-center text-xs font-semibold">RP:</div>
                        <div className="h-auto w-auto flex justify-center items-center text-xs font-light">Relief Pitcher</div>
                    </div>
                    <div className="h-1/4 w-1/3 flex">
                        <div className="h-auto w-auto p-2 flex justify-center items-center text-xs font-semibold">RP:</div>
                        <div className="h-auto w-auto flex justify-center items-center text-xs font-light">Relief Pitcher</div>
                    </div>
                    <div className="h-1/4 w-1/3 flex">
                        <div className="h-auto w-auto p-2 flex justify-center items-center text-xs font-semibold">RP:</div>
                        <div className="h-auto w-auto flex justify-center items-center text-xs font-light">Relief Pitcher</div>
                    </div>
                    <div className="h-1/4 w-1/3 flex">
                        <div className="h-auto w-auto p-2 flex justify-center items-center text-xs font-semibold">RP:</div>
                        <div className="h-auto w-auto flex justify-center items-center text-xs font-light">Relief Pitcher</div>
                    </div>
                    <div className="h-1/4 w-1/3 flex">
                        <div className="h-auto w-auto p-2 flex justify-center items-center text-xs font-semibold">RP:</div>
                        <div className="h-auto w-auto flex justify-center items-center text-xs font-light">Relief Pitcher</div>
                    </div>
                    <div className="h-1/4 w-1/3 flex">
                        <div className="h-auto w-auto p-2 flex justify-center items-center text-xs font-semibold">RP:</div>
                        <div className="h-auto w-auto flex justify-center items-center text-xs font-light">Relief Pitcher</div>
                    </div>
                    
                </div>

                {/* injury key */}
                <div className="border border-black h-auto w-full flex flex-wrap">
                    <div className="h-1/4 w-1/3 flex">
                        <div className="h-auto w-auto p-2 flex justify-center items-center text-xs text-red-600 font-semibold">DTD:</div>
                        <div className="h-auto w-auto flex justify-center items-center text-xs font-light">Day-to-Day</div>
                    </div>
                    <div className="h-1/4 w-1/3 flex">
                        <div className="h-auto w-auto p-2 flex justify-center items-center text-xs text-red-600 font-semibold">DTD:</div>
                        <div className="h-auto w-auto flex justify-center items-center text-xs font-light">Day-to-Day</div>
                    </div>
                    <div className="h-1/4 w-1/3 flex">
                        <div className="h-auto w-auto p-2 flex justify-center items-center text-xs text-red-600 font-semibold">DTD:</div>
                        <div className="h-auto w-auto flex justify-center items-center text-xs font-light">Day-to-Day</div>
                    </div>
                    <div className="h-1/4 w-1/3 flex">
                        <div className="h-auto w-auto p-2 flex justify-center items-center text-xs text-red-600 font-semibold">DTD:</div>
                        <div className="h-auto w-auto flex justify-center items-center text-xs font-light">Day-to-Day</div>
                    </div>
                    <div className="h-1/4 w-1/3 flex">
                        <div className="h-auto w-auto p-2 flex justify-center items-center text-xs text-red-600 font-semibold">DTD:</div>
                        <div className="h-auto w-auto flex justify-center items-center text-xs font-light">Day-to-Day</div>
                    </div>
                    <div className="h-1/4 w-1/3 flex">
                        <div className="h-auto w-auto p-2 flex justify-center items-center text-xs text-red-600 font-semibold">DTD:</div>
                        <div className="h-auto w-auto flex justify-center items-center text-xs font-light">Day-to-Day</div>
                    </div>
                    <div className="h-1/4 w-1/3 flex">
                        <div className="h-auto w-auto p-2 flex justify-center items-center text-xs text-red-600 font-semibold">DTD:</div>
                        <div className="h-auto w-auto flex justify-center items-center text-xs font-light">Day-to-Day</div>
                    </div>
                    <div className="h-1/4 w-1/3 flex">
                        <div className="h-auto w-auto p-2 flex justify-center items-center text-xs text-red-600 font-semibold">DTD:</div>
                        <div className="h-auto w-auto flex justify-center items-center text-xs font-light">Day-to-Day</div>
                    </div>
                    <div className="h-1/4 w-1/3 flex">
                        <div className="h-auto w-auto p-2 flex justify-center items-center text-xs text-red-600 font-semibold">DTD:</div>
                        <div className="h-auto w-auto flex justify-center items-center text-xs font-light">Day-to-Day</div>
                    </div>
                    
                    
                </div>


            </div>


            {/* mlb news */}
            <div className="border border-black h-180 w-90 mt-4 mr-30 rounded-xl shadow-md"></div>


        </div>


      </div>
    </>
  );
}

export default DepthChart;
