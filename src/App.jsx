import "./App.css";
import { useState } from "react";
import SideBar from "./assets/SideBar/SideBar";
import Header from "./assets/Header/Header";
import Home from "./assets/Home/Home";

function App() {
  const [activePage, setActivePage] = useState("home");
  const [selectedTrack, setSelectedTrack] = useState(null);
  return (
    <div className="app-container">
      <SideBar setActivePage={setActivePage} />
      <div className="main-content">
        <Header onSearchSelect={setSelectedTrack} />
        {activePage === "home" && <Home selectedTrack={selectedTrack} />}
      </div>
    </div>
  );
}

export default App;
