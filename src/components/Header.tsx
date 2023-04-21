import logo from "../assets/logo.svg";
import "./Header.css";
import NewGameButton from "./NewGameButton";
import RestartButton from "./RestartButton";

function Header() {
  return (
    <header className="game-header">
      <div className="section-container">
        <img src={logo} alt="logo" className="logo" />
        <div className="header-buttons">
          <RestartButton />
          <NewGameButton location="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
