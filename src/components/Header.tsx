import logo from "../assets/logo.svg";
import "./Header.css";
import NewGameButton from "./NewGameButton";
import RestartButton from "./RestartButton";

function Header() {
  function handleMenu() {
    //
  }

  return (
    <header className="game-header">
      <div className="section-container">
        <img src={logo} alt="logo" className="logo" />
        <div className="header-buttons">
          <RestartButton />
          <NewGameButton location="" />
        </div>
        <button className="btn-restart btn-menu" onClick={handleMenu}>
          Menu
        </button>
      </div>
    </header>
  );
}

export default Header;
