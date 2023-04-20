import * as _ from "lodash";
import { useGlobalContext } from "../context";
import { iconpack } from "../data";
import Footer from "./Footer";
import "./Game.css";
import Header from "./Header";

function Game() {
  const { theme, gridSize } = useGlobalContext();
  let numbers = Array.from(Array((gridSize * gridSize) / 2).keys());
  numbers = _.shuffle(numbers.concat(numbers));
  let icons = iconpack.slice(0, (gridSize * gridSize) / 2);
  icons = _.shuffle(icons.concat(icons));
  const boardItems = theme === "numbers" ? numbers : icons;

  return (
    <div className="game-container">
      <div className="game-wrapper">
        <Header />
        <main className={`game-board ${gridSize === 4 ? "grid-4" : "grid-6"}`}>
          {boardItems.map((item, index) => (
            <button key={index} className="btn-item">
              {theme === "numbers" && <p>{item}</p>}
              {theme === "icons" && (
                <img src={`./icons/${item}.svg`} alt={item.toString()} />
              )}
            </button>
          ))}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Game;
