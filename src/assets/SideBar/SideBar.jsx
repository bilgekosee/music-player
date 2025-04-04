import { useState } from "react";
import "./SideBar.css";
import { BsThreeDots } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { GiMicrophone, GiLoveSong } from "react-icons/gi";
import { IoAlbums } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { BsGrid3X3Gap } from "react-icons/bs";
import { RiAddLargeLine } from "react-icons/ri";

const SideBar = ({ setActivePage, setShowModal, playlists }) => {
  const [open, setOpen] = useState(true);

  const toggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <div className="sidebar-container">
      <div className="sidebar-bigtitle">
        <div className="sidebar-title">
          <span className="library">Library</span>
          <span className="all-music">All Music</span>
        </div>
        <div className="sidebar-icon">
          <BsThreeDots className="arrowleft-icon" />
        </div>
      </div>
      <div className="choice-part">
        <div className="tab" onClick={() => setActivePage("home")}>
          <IoHome className="tab-icon" />
          <span>Home</span>
        </div>

        <div className="tab">
          <GiMicrophone className="tab-icon" />
          <span>Artist</span>
        </div>

        <div className="tab">
          <IoAlbums className="tab-icon" />
          <span>Albums</span>
        </div>

        <div className="tab">
          <GiLoveSong className="tab-icon" />
          <span>Songs</span>
        </div>

        <div className="tab">
          <FaUserCircle className="tab-icon" />
          <span>Made For You</span>
        </div>
      </div>
      <div className="choice-part-two">
        <div className="playlist-all">
          <div className="playlist" onClick={toggleOpen}>
            <span>Playlist</span>
            {open ? (
              <IoIosArrowUp className="arrow-icon" />
            ) : (
              <IoIosArrowDown className="arrow-icon" />
            )}
          </div>
          {open && (
            <ul className="submenu">
              <li>
                <BsGrid3X3Gap className="li-icon" />
                All Playlist
              </li>
              {playlists.map((pl, index) => (
                <li key={index}>
                  {pl.image ? (
                    <img src={pl.image} className="li-iconImg" alt={pl.name} />
                  ) : (
                    <BsGrid3X3Gap className="li-icon" />
                  )}
                  {pl.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="add-playlist">
          <button
            className="button-playlist"
            onClick={() => setShowModal(true)}
          >
            <div className="plusIcon-container">
              <RiAddLargeLine className="plus-icon" />
            </div>
            <span>Add Playlist</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
