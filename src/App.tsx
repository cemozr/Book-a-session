import { Route, Routes } from "react-router-dom";
import { OurMissionPage } from "./components/pages/OurMissionPage";
import { BrowseSessionPage } from "./components/pages/BrowseSessionsPage";
import { UpcomingSessionsPage } from "./components/pages/UpcomingSessionsPage";
import { ErrorPage } from "./components/pages/ErrorPage";
import { Header } from "./components/navigation/Header";
import { SessionPage } from "./components/pages/SessionPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<OurMissionPage />} />
        <Route path="/our-mission" element={<OurMissionPage />} />
        <Route path="/browse-sessions" element={<BrowseSessionPage />} />
        <Route
          path="/browse-sessions/session/:sessionId"
          element={<SessionPage />}
        />
        <Route path="/upcoming-sessions" element={<UpcomingSessionsPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
