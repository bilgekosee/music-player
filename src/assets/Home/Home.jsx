import "./Home.css";
import axios from "axios";
import { IoPlaySkipBackSharp, IoPlaySkipForward } from "react-icons/io5";
import { FaCirclePause } from "react-icons/fa6";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { useState, useEffect } from "react";

const Home = () => {
  const [tracks, setTracks] = useState([]);
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  /**
   *
   * @param {string} query - Kullanıcının aradığı şarkı veya sanatçı adı.
   * @returns {Promise<Object>} - API'den dönen müzik listesi.
   */

  const fetchTrendingSongs = async () => {
    try {
      const response = await axios.get(`/api/chart/0/tracks`);
      setTracks(response.data.data);
    } catch (error) {
      console.error("API Error (Tracks):", error);
    }
  };

  const fetchTrendingArtists = async () => {
    try {
      const response = await axios.get(`/api/chart/0/artists`);
      setArtists(response.data.data);
    } catch (error) {
      console.error("API Error (Artists):", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([fetchTrendingSongs(), fetchTrendingArtists()]);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="home-container">
      <div className="recently-play">
        <span>Recently Played</span>
        <div className="recently-played-group">
          {loading ? (
            <p>Yükleniyor...</p>
          ) : tracks.length === 0 ? (
            <p>Şarkı bulunamadı</p>
          ) : (
            tracks.map((track) => (
              <div key={track.id} className="recently-played-square">
                <img
                  src={track.album?.cover_small || "default.png"}
                  alt={track.title}
                />
                <p>
                  {track.title} - {track.artist?.name || "Bilinmeyen Sanatçı"}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="artists">
        <div className="artist">
          <span className="artist-span">Artist</span>
          <div className="artists-group">
            {loading ? (
              <p>Yükleniyor...</p>
            ) : artists.length === 0 ? (
              <p>Sanatçı bulunamadı.</p>
            ) : (
              artists.map((artist) => (
                <div key={artist.id} className="artist-circle">
                  <img
                    src={artist.picture_medium || "default.jpg"}
                    alt={artist.name}
                    className="artist-img"
                  />
                  <span className="artist-name">
                    {artist.name || "Bilinmeyen Sanatçı"}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <div className="music-bar-container">
        <div className="music-bar-wrapper">
          <div className="music-player-bar">
            <div className="player-icons-pause">
              <IoPlaySkipBackSharp className="icons-player" />
              <FaCirclePause className="icons-player" />
              <IoPlaySkipForward className="icons-player" />
            </div>
            <div className="music-information">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/9/95/Power_GD_cover.jpg"
                className="music-bar-img"
              />
              <div className="music-name">
                <span className="song">POWER</span>
                <span className="singer">G-DRAGON</span>
              </div>
            </div>
            <div className="musicplayer-icon-container">
              <BsFillMusicPlayerFill className="musicplayer-icon" />
              <PiMicrophoneStageFill className="musicplayer-icon" />
            </div>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar">
              <div className="progress-bar-fill"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
