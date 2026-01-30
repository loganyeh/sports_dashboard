import MainNavBar from "../components/shell/MainNavBar";
import PageNavBar from "../components/shell/PageNavBar";
import TeamLogoHeader from "../components/shell/TeamLogoHeader";
import Ticker from "../components/shell/Ticker";

function WIP() {
  return (
    <>
      <Ticker />
      <MainNavBar />
      <TeamLogoHeader />
      <PageNavBar />
      <div className="border-2 border-red-600 h-screen w-full flex justify-center items-center text-4xl font-medium">
        🚧 UNDER CONSTRUCTION 🚧<br></br>[ ======= ]<br></br>| BUILDING |
        <br></br>| IN PROGRESS |<br></br>
        |===========|<br></br>
        We're working on this page.<br></br>
        Check back soon!<br></br>
      </div>
    </>
  );
}

export default WIP;
