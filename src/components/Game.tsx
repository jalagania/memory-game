import * as _ from "lodash";
import { useGlobalContext } from "../context";
import Footer from "./Footer";
import "./Game.css";
import Header from "./Header";

function Game() {
  const { theme, gridSize } = useGlobalContext();
  let items = Array.from(Array((gridSize * gridSize) / 2).keys());
  items = _.shuffle(items.concat(items));

  return (
    <div className="game-container">
      <div className="game-wrapper">
        <Header />
        <main className={`game-board ${gridSize === 4 ? "grid-4" : "grid-6"}`}>
          {items.map((item, index) => (
            <button key={index} className="btn-item">
              {theme === "numbers" && <p>{item}</p>}
              {theme === "icons" && <p>{item}</p>}
            </button>
          ))}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Game;
