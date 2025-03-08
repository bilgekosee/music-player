import { useState } from "react";
import "./SideBar.css";
import { VscArrowLeft } from "react-icons/vsc";
import { TbClockHour9 } from "react-icons/tb";
import { GiMicrophone, GiLoveSong } from "react-icons/gi";
import { IoAlbums } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { BsGrid3X3Gap } from "react-icons/bs";
import { RiAddLargeLine } from "react-icons/ri";

const SideBar = () => {
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
          <VscArrowLeft className="arrowleft-icon" />
        </div>
      </div>
      <div className="choice-part">
        <div className="tab">
          <TbClockHour9 className="tab-icon" />
          <span>Recently Added</span>
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
              <li>
                <img src="./music.jpg" className="li-iconImg" />
                Good Vibes Only
              </li>
              <li>
                <img src="./sad.jpg" className="li-iconImg" />
                Sad
              </li>
            </ul>
          )}
        </div>
        <div className="add-playlist">
          <div className="plusIcon-container">
            <RiAddLargeLine className="plus-icon" />
          </div>

          <span>Add Playlist</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
