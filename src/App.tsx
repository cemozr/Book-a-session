import { Route, Routes } from "react-router-dom";
import "./App.css";
import { OurMissionPage } from "./components/pages/OurMissionPage";
import { BrowseSessionPage } from "./components/pages/BrowseSessionsPage";
import { UpcomingSessionsPage } from "./components/pages/UpcomingSessionsPage";
import { ErrorPage } from "./components/pages/ErrorPage";
import { Header } from "./components/navigation/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<OurMissionPage />} />
        <Route path="/our-mission" element={<OurMissionPage />} />
        <Route path="/browse-sessions" element={<BrowseSessionPage />} />
        <Route path="/upcoming-session" element={<UpcomingSessionsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
