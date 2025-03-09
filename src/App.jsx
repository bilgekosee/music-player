import "./App.css";
import SideBar from "./assets/SideBar/SideBar";
import Header from "./assets/Header/Header";
import Home from "./assets/Home/Home";

function App() {
  return (
    <div className="app-container">
      <SideBar />
      <div className="main-content">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
