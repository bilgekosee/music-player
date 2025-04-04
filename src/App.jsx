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
  const [playlists, setPlaylists] = useState([
    { name: "Good Vibes Only", image: "./music.jpg" },
    { name: "Sad", image: "./sad.jpg" },
  ]);

  const handleAddPlaylist = (name, file) => {
    const newPlaylist = {
      name,
      image: file ? URL.createObjectURL(file) : null,
    };
    setPlaylists((prev) => [...prev, newPlaylist]);
    setShowModal(false);
  };
  return (
    <div className="app-container">
      <SideBar
        setActivePage={setActivePage}
        setShowModal={setShowModal}
        playlists={playlists}
      />
      <div className="main-content">
        <Header onSearchSelect={setSelectedTrack} />
        {activePage === "home" && <Home selectedTrack={selectedTrack} />}
      </div>
      <AddPlaylist
        showModal={showModal}
        setShowModal={setShowModal}
        onAdd={handleAddPlaylist}
      />
    </div>
  );
}

export default App;
