import { Link } from "react-router-dom";

function PageNavBar(){

    return(
        <>
            <div id="team-tabs" className="border-y border-gray-200 h-14 w-full flex font-light shadow-md">
                <Link to={"/"} className="border-b-4 border-red-700 h-full w-25 flex justify-center items-center cursor-pointer"><span>Home</span></Link>
                <Link to={"/wip"} className="h-full w-25 flex justify-center items-center hover:border-b-4 hover:border-red-700 cursor-pointer"><span>Stats</span></Link>
                <Link to={"/wip"} className="h-full w-25 flex justify-center items-center hover:border-b-4 hover:border-red-700 cursor-pointer"><span>Schedule</span></Link>
                <Link to={"/wip"} className="h-full w-25 flex justify-center items-center hover:border-b-4 hover:border-red-700 cursor-pointer"><span>Roster</span></Link>
                <Link to={"/depthchart"} className="h-full w-25 flex justify-center items-center hover:border-b-4 hover:border-red-700 cursor-pointer"><span>Depth Chart</span></Link>
                <Link to={"/wip"} className="h-full w-25 flex justify-center items-center hover:border-b-4 hover:border-red-700 cursor-pointer"><span>Splits</span></Link>
                <Link to={"/wip"} className="h-full w-25 flex justify-center items-center hover:border-b-4 hover:border-red-700 cursor-pointer"><span>Injuries</span></Link>
                <Link to={"/wip"} className="h-full w-25 flex justify-center items-center hover:border-b-4 hover:border-red-700 cursor-pointer"><span>Transactions</span></Link>
                <Link to={"/wip"} className="h-full w-25 flex justify-center items-center hover:border-b-4 hover:border-red-700 cursor-pointer"><span>Tickets</span></Link>
            </div>
        </>
    )
}

export default PageNavBar;