import logo from "../assets/logo.svg";
import { useGlobalContext } from "../context";
import "./Header.css";

function Header() {
  const { setShowMenu, setShowGame } = useGlobalContext();

  function handleNewGame() {
    setShowMenu(true);
    setShowGame(false);
  }

  return (
    <header className="game-header">
      <div className="section-container">
        <img src={logo} alt="logo" className="logo" />
        <div className="header-buttons">
          <button className="btn-restart">Restart</button>
          <button className="btn-new-game" onClick={handleNewGame}>
            New Game
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
