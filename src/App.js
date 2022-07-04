import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.js";
import HomePage from "./pages/HomePage.js";
import HistoryPage from "./pages/HistoryPage.js";

const players = [];

function App() {
  return (
    <>
      <heading>
        <h1>You're a Scorekeeper</h1>
      </heading>
      <main>
        <Routes>
          <Route path="/" element={<HomePage players={players} />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </main>
      <Navigation />
    </>
  );
}

export default App;
