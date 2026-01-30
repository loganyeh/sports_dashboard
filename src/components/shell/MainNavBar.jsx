
function MainNavBar(){

    return(
        <>
        
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

        </>
    )
}

export default MainNavBar;