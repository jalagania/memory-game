import logo from "../assets/logo.svg";
import "./Header.css";

function Header() {
  return (
    <header className="game-header">
      <div className="section-container">
        <img src={logo} alt="logo" className="logo" />
        <div className="header-buttons">
          <button className="btn-restart">Restart</button>
          <button className="btn-new-game">New Game</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
