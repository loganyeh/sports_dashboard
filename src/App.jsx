import DepthChart from "./pages/DepthChart";
import TeamPage from "./pages/TeamPage"
import WIP from "./pages/WIP";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<TeamPage />} />
        <Route path="/depthchart" element={<DepthChart />} />
        <Route path="/wip" element={<WIP />} />
      </Routes>
    </>
  )
}

export default App
