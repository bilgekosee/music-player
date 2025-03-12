import "./App.css";
import { useState } from "react";
import SideBar from "./assets/SideBar/SideBar";
import Header from "./assets/Header/Header";
import Home from "./assets/Home/Home";
import Artist from "./assets/Artist/Artist";

function App() {
  const [activePage, setActivePage] = useState("home");
  return (
    <div className="app-container">
      <SideBar setActivePage={setActivePage} />
      <div className="main-content">
        <Header />
        {activePage === "home" && <Home />}
        {activePage === "artist" && <Artist />}
      </div>
    </div>
  );
}

export default App;
