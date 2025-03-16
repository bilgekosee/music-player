import "./App.css";
import { useState } from "react";
import SideBar from "./assets/SideBar/SideBar";
import Header from "./assets/Header/Header";
import Home from "./assets/Home/Home";
import AddPlaylist from "./assets/Playlist/Playlist";

function App() {
  const [activePage, setActivePage] = useState("home");
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="app-container">
      <SideBar setActivePage={setActivePage} setShowModal={setShowModal} />
      <div className="main-content">
        <Header onSearchSelect={setSelectedTrack} />
        {activePage === "home" && <Home selectedTrack={selectedTrack} />}
      </div>
      <AddPlaylist showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default App;
