import Ticker from "../components/shell/Ticker";
import MainNavBar from "../components/shell/MainNavBar";
import TeamLogoHeader from "../components/shell/TeamLogoHeader";
import PageNavBar from "../components/shell/PageNavBar";
import TeamScheduleBlock from "../components/shell/TeamScheduleBlock";
import TeamArticleBlock from "../components/shell/TeamArticleBlock";
import TeamStandingsBlock from "../components/shell/TeamStandingsBlock";
import FindTickets from "../components/shell/FindTickets";
import TeamStats from "../components/shell/TeamStats";

function TeamPage(){

    return(
        <>
            <div id="screen" className="h-screen w-screen">

                {/* full scoreboard */}
                <Ticker />

                {/* sports-tab */}
                <MainNavBar />

                {/* team logo header */}
                <TeamLogoHeader />

                {/* team nav bar */}
                <PageNavBar />

                {/* BOTTOM HALF OF PAGE */}
                <div id="team-body-page" className="h-auto w-full flex">

                    {/* schedule */}
                    <TeamScheduleBlock />

                    {/* articles */}
                    <div className="h-auto w-3/5 pb-40">
                        <TeamArticleBlock />
                        <TeamArticleBlock />
                    </div>

                    {/* right body */}
                    <div className="h-300 w-1/5 flex flex-col items-center">

                        {/* STANDINGS */}
                        <TeamStandingsBlock />

                        {/* FIND TICKETS */}
                        <FindTickets />


                        {/* TEAM STATS */}
                        <TeamStats />
                    </div>

                </div>

            </div>
        </>
    )
}

export default TeamPage;