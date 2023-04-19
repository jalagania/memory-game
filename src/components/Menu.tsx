import "./Menu.css";

function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-box-wrapper">
        <h1 className="game-title">memory</h1>
        <div className="menu-box">
          <div className="theme-box">
            <p className="theme-text">Select Theme</p>
            <div className="theme-buttons">
              <button>Numbers</button>
              <button>Icons</button>
            </div>
          </div>
          <div className="players-box">
            <p className="players-text">Number of Players</p>
            <div className="players-buttons">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
            </div>
          </div>
          <div className="grid-box">
            <p className="grid-text">Grid Size</p>
            <div className="grid-buttons">
              <button>4x4</button>
              <button>6x6</button>
            </div>
          </div>
          <button className="btn-start">Start Game</button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
