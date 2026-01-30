
function TeamLogoHeader(){

    return(
        <>
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
        </>
    )
}

export default TeamLogoHeader;