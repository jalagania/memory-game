import logo from "../assets/logo.svg";
import { useGlobalContext } from "../context";
import "./Header.css";
import NewGameButton from "./NewGameButton";
import RestartButton from "./RestartButton";

function Header() {
  const { showMenuModal, setShowMenuModal } = useGlobalContext();
  const mobile = window.innerWidth <= 425;

  function handleMenu() {
    setShowMenuModal(!showMenuModal);
  }

  return (
    <header className="game-header">
      <div className="section-container">
        <img src={logo} alt="logo" className="logo" />
        <button className="btn-restart btn-menu" onClick={handleMenu}>
          Menu
        </button>
        <div className={`menu-modal ${!showMenuModal && mobile ? "hidden" : ""}`}>
          <div className="menu-buttons">
            <RestartButton />
            <NewGameButton location="" />
            <button className="btn-new-game btn-resume" onClick={() => setShowMenuModal(false)}>
              Resume Game
            </button>
          </div>
          <div className="menu-modal-bg" onClick={() => setShowMenuModal(false)}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
