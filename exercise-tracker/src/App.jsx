import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./main/MainPage";
import LoginPage from "./login/LoginPage";
import LeaderboardPage from "./main/LeaderboardPage";
import ContactPage from "./main/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
