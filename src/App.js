import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.js";
import HomePage from "./pages/HomePage.js";
import HistoryPage from "./pages/HistoryPage.js";

const players = [
  {
    id: "fjghtueodn12234",
    name: "Max",
    score: 15,
  },
  {
    id: "lfkghgrurncsj305967",
    name: "Yvi",
    score: 5,
  },
  {
    id: "05968gjfhrhfn",
    name: "Kristin",
    score: -17,
  },
  {
    id: "lgkgj948576",
    name: "Christian",
    score: 9,
  },
];

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
