import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <span>WISE</span>
      </div>
      <div className="search">
        <FaSearch className="search-icon" />
        <input
          type="search"
          className="header-input"
          placeholder="Search for songs, artists, or albums"
        />
      </div>
      <div className="profile">
        <div className="notification-container">
          <MdOutlineNotificationsActive className="icon-notification" />
        </div>
        <div className="profile-container">
          <img src="./profile.jpg" />
        </div>
        <div className="logout-container">
          <RiLogoutCircleRLine className="icon-logout" />
        </div>
      </div>
    </div>
  );
};
export default Header;
