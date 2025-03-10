import "./Home.css";
import { IoPlaySkipBackSharp, IoPlaySkipForward } from "react-icons/io5";
import { FaCirclePause } from "react-icons/fa6";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import { PiMicrophoneStageFill } from "react-icons/pi";
const Home = () => {
  const recentlyPlayed = [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-photo/side-view-anime-style-man-portrait_23-2151067418.jpg",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/free-photo/front-view-anime-couple-playing-guitar_23-2150970747.jpg?t=st=1741562694~exp=1741566294~hmac=8761bc611c9fb17ac58b2772985f360f5c817a6accc154ccd13cd7a4843e23d9&w=1380",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-photo/anime-character-dj-playing-music_23-2151103481.jpg?t=st=1741565170~exp=1741568770~hmac=c4f07dac35a0dbebb84aa1712a8b3956586fc786807e2807618a7a73cb7ee79b&w=740",
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/free-photo/side-view-anime-style-man-portrait_23-2151067418.jpg",
    },
    {
      id: 5,
      image:
        "https://img.freepik.com/free-photo/front-view-anime-couple-playing-guitar_23-2150970747.jpg?t=st=1741562694~exp=1741566294~hmac=8761bc611c9fb17ac58b2772985f360f5c817a6accc154ccd13cd7a4843e23d9&w=1380",
    },
    {
      id: 6,
      image:
        "https://img.freepik.com/free-photo/anime-character-dj-playing-music_23-2151103481.jpg?t=st=1741565170~exp=1741568770~hmac=c4f07dac35a0dbebb84aa1712a8b3956586fc786807e2807618a7a73cb7ee79b&w=740",
    },
    {
      id: 7,
      image:
        "https://img.freepik.com/free-photo/anime-character-dj-playing-music_23-2151103481.jpg?t=st=1741565170~exp=1741568770~hmac=c4f07dac35a0dbebb84aa1712a8b3956586fc786807e2807618a7a73cb7ee79b&w=740",
    },
  ];
  const artist = [
    {
      id: 1,
      name: "bilge",
      image:
        "https://img.freepik.com/free-photo/anime-character-listening-music_23-2151103365.jpg?t=st=1741565965~exp=1741569565~hmac=fcdf2ca29fdebb584785a199db5b00afc962df4129383b50266b85657eae30c9&w=740",
    },
    {
      id: 2,
      name: "bilge",
      image:
        "https://img.freepik.com/free-photo/anime-japanese-character_23-2151478191.jpg?t=st=1741566024~exp=1741569624~hmac=1ff6b3369c3be5f729a8d4e34fd6ab5eb6abda318b1c4237909216f51d965b9a&w=740",
    },
    {
      id: 3,
      name: "bilge",
      image:
        "https://img.freepik.com/free-vector/hand-drawn-emo-illustration_23-2149906940.jpg?t=st=1741566054~exp=1741569654~hmac=3ff669d85d0f33f5d24dc45efdaadc05142da0b953a62742d9c86ffa883a92a2&w=740",
    },
    {
      id: 4,
      name: "bilge",
      image:
        "https://img.freepik.com/free-photo/anime-character-dj-playing-music_23-2151103480.jpg?t=st=1741566072~exp=1741569672~hmac=604a76f527180a7a71baa8298e249a083789bfd0880a89416ff41958c06b502d&w=740",
    },
    {
      id: 5,
      name: "bilge",
      image:
        "https://img.freepik.com/free-photo/anime-character-playing-guitar_23-2151103417.jpg?t=st=1741566105~exp=1741569705~hmac=70edba3b2914fe6bf8d774a9c20a1f31362b8c673bd340418612fc0843091ef4&w=740",
    },
    {
      id: 6,
      name: "bilge",
      image:
        "https://img.freepik.com/premium-photo/anime-boy-with-microphone-microphone-stand-front-white-background_1034478-102787.jpg?w=740",
    },
    {
      id: 7,
      name: "bilge",
      image:
        "https://img.freepik.com/free-photo/anime-character-dj-playing-music_23-2151103481.jpg?t=st=1741565170~exp=1741568770~hmac=c4f07dac35a0dbebb84aa1712a8b3956586fc786807e2807618a7a73cb7ee79b&w=740",
    },
  ];
  return (
    <div className="home-container">
      <div className="recently-play">
        <span>Recently Played</span>
        <div className="recently-played-group">
          {recentlyPlayed.map((item) => (
            <div key={item.id} className="recently-played-square">
              <img src={item.image} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
      <div className="artists">
        <div className="artist">
          <span className="artist-span">Artist</span>
          <div className="artists-group">
            {artist.map((item) => (
              <div key={item.id} className="artist-circle">
                <img src={item.image} alt={item.title} className="artist-img" />
                <span className="artist-name">{item.name}</span>
              </div>
            ))}
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
