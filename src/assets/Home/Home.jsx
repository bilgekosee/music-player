import "./Home.css";
import axios from "axios";
import { IoPlaySkipBackSharp, IoPlaySkipForward } from "react-icons/io5";
import { FaCirclePause, FaPlay } from "react-icons/fa6";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { useState, useEffect, useRef } from "react";

const Home = () => {
  const [tracks, setTracks] = useState([]);
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

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

  const togglePlayPause = () => {
    if (!currentTrack) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying((prev) => !prev);
  };

  const changeTrack = (track) => {
    console.log("Seçilen Şarkı:", track);
    setCurrentTrack(track);
    setIsPlaying(true);
    setProgress(0);
    setTimeout(() => {
      audioRef.current.play();
    }, 200);
  };

  const nextTrack = () => {
    if (!currentTrack) return;
    const currentIndex = tracks.findIndex((t) => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % tracks.length;
    changeTrack(tracks[nextIndex]);
  };

  const prevTrack = () => {
    if (!currentTrack) return;
    const currentIndex = tracks.findIndex((t) => t.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    changeTrack(tracks[prevIndex]);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current.duration) return;
    const progress =
      (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(progress);
  };

  return (
    <div className="home-container">
      <div className="recently-play">
        <span>Trending Songs</span>
        <div className="recently-played-group">
          {loading ? (
            <p>Yükleniyor...</p>
          ) : tracks.length === 0 ? (
            <p>Şarkı bulunamadı</p>
          ) : (
            tracks.map((track) => (
              <div
                key={track.id}
                className="recently-played-square"
                onClick={() => changeTrack(track)}
              >
                <img
                  className="trend-album-img"
                  src={track.album?.cover_small || "default.png"}
                  alt={track.title}
                />
                <p className="trend-album">
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
      {currentTrack && (
        <div className="music-bar-container">
          <div className="music-bar-wrapper">
            <div className="music-player-bar">
              <div className="player-icons-pause">
                <IoPlaySkipBackSharp
                  className="icons-player"
                  onClick={prevTrack}
                />
                {isPlaying ? (
                  <FaCirclePause
                    className="icons-player"
                    onClick={togglePlayPause}
                  />
                ) : (
                  <FaPlay className="icons-player" onClick={togglePlayPause} />
                )}
                <IoPlaySkipForward
                  className="icons-player"
                  onClick={nextTrack}
                />
              </div>
              <div className="music-information">
                <img
                  src={currentTrack.album.cover_small}
                  className="music-bar-img"
                  alt={currentTrack.title}
                />
                <div className="music-name">
                  <span className="song">{currentTrack.title}</span>
                  <span className="singer">{currentTrack.artist.name}</span>
                </div>
              </div>
              <div className="musicplayer-icon-container">
                <BsFillMusicPlayerFill className="musicplayer-icon" />
                <PiMicrophoneStageFill className="musicplayer-icon" />
              </div>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
          <audio
            ref={audioRef}
            src={currentTrack.preview}
            onTimeUpdate={handleTimeUpdate}
            onEnded={nextTrack}
          />
        </div>
      )}
    </div>
  );
};
export default Home;
