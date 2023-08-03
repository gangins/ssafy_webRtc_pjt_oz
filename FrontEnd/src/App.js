import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage"; // 수정
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import AuthLandingPage from "./components/views/LandingPage/AuthLandingPage";
import GamePage from "./components/views/GamePage/GamePage";
import GamePlayPage from "./components/views/GamePage/PlayGame";
import Scripts from "./components/scripts/Scripts";
import WithDrawl from "./components/views/WithDrawl/WithDrawl";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/authlanding" element={<AuthLandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/withdrawl" element={<WithDrawl />}/>
          <Route path="/game" element={<GamePage />} />
          
          <Route path="/scripts" element={<Scripts />}/>
          <Route path="/gameplay" element={<GamePlayPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
