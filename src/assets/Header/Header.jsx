import "./Header.css";
import axios from "axios";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
const Header = ({ onSearchSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchTerm(query);

    if (query.length > 2) {
      fetchSearchResults(query);
    } else {
      setSearchResult([]);
    }
  };

  const fetchSearchResults = async (query) => {
    try {
      const response = await axios.get(`/api/search?q=${query}`);
      setSearchResult(response.data.data);
    } catch (error) {
      console.error("Arama sırasında hata oluştu:", error);
    }
  };

  return (
    <div className="header-container">
      <div className="logo">
        <span>WISE</span>
      </div>
      <div className="search">
        <FaSearch className="search-icon" />
        <div className="search-result-container">
          <input
            type="search"
            className="header-input"
            placeholder="Search for songs, artists, or albums"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {searchResult.length > 0 && (
            <div className="search-results">
              {searchResult.map((result) => (
                <div
                  key={result.id}
                  className="search-result-item"
                  onClick={() => {
                    onSearchSelect(result);
                    setSearchResult([]);
                  }}
                >
                  <img
                    src={result.album.cover_small}
                    alt={result.title}
                    className="search-result-img"
                  />
                  <div className="search-result-text">
                    <span className="search-artist">{result.artist.name}</span>
                    <span className="search-song">{result.title}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
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
