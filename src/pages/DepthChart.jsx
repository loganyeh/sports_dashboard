import MainNavBar from "../components/shell/MainNavBar";
import PageNavBar from "../components/shell/PageNavBar";
import TeamLogoHeader from "../components/shell/TeamLogoHeader";
import Ticker from "../components/shell/Ticker";

function DepthChart(){

    return(
        <>
            <Ticker />
            <MainNavBar />
            <TeamLogoHeader />
            <PageNavBar />
            
        </>
    )
}

export default DepthChart;