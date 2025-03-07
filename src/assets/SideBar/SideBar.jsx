import "./SideBar.css";
import { VscArrowLeft } from "react-icons/vsc";
import { TbClockHour9 } from "react-icons/tb";
import { GiMicrophone } from "react-icons/gi";
import { IoAlbums } from "react-icons/io5";
import { GiLoveSong } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
const SideBar = () => {
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
    </div>
  );
};

export default SideBar;
