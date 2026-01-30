import MainNavBar from "../components/shell/MainNavBar";
import PageNavBar from "../components/shell/PageNavBar";
import TeamLogoHeader from "../components/shell/TeamLogoHeader";
import Ticker from "../components/shell/Ticker";

function DepthChart() {
  return (
    <>
      <div className="border-2 border-red-600 h-screen w-screen">

        {/* components */}
        <Ticker />
        <MainNavBar />
        <TeamLogoHeader />
        <PageNavBar />

        {/* DEPTH CHART */}
        <div className="border-2 border-blue-600 h-auto w-full flex justify-between pb-80">
          <div className="border border-black h-220 w-315 mt-4 ml-35 rounded-xl"></div>
          <div className="border border-black h-180 w-90 mt-4 mr-30 rounded-xl shadow-md"></div>
        </div>


      </div>
    </>
  );
}

export default DepthChart;
