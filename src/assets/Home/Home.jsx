import "./Home.css";
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
    </div>
  );
};
export default Home;
