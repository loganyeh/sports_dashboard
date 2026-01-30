
function PageNavBar(){

    return(
        <>
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
        </>
    )
}

export default PageNavBar;