import * as _ from "lodash";
import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../context";
import { iconpack } from "../data";
import Footer from "./Footer";
import "./Game.css";
import Header from "./Header";

interface ItemType {
  name: string;
  index: number;
}

function Game() {
  const { theme, gridSize } = useGlobalContext();

  function getBoardItems(): string[] {
    let numbers = Array.from(Array((gridSize * gridSize) / 2).keys()).map(
      (el) => el.toString()
    );
    numbers = _.shuffle(numbers.concat(numbers));
    let icons = iconpack.slice(0, (gridSize * gridSize) / 2);
    icons = _.shuffle(icons.concat(icons));
    return theme === "numbers" ? numbers : icons;
  }

  const boardRef = useRef<HTMLDivElement>(null);
  const [boardItems, setBoardItems] = useState(getBoardItems());
  const [itemsArray, setItemsArray] = useState<ItemType[]>([]);
  const [clicks, setClicks] = useState<string[]>([]);
  const [matches, setMatches] = useState<string[]>([]);

  function handleItemClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: string,
    index: number
  ) {
    if (
      !event.currentTarget.classList.contains("open") &&
      clicks.length < 2 &&
      index !== itemsArray[0]?.index
    ) {
      event.currentTarget.classList.add("open");
      setClicks((prevState) => {
        return [...prevState, "click"];
      });
      setItemsArray((prevState) => {
        return [...prevState, { name: item, index: index }];
      });
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (itemsArray.length === 2) {
        if (
          itemsArray[0].name !== itemsArray[1].name &&
          itemsArray[0].index !== itemsArray[1].index
        ) {
          boardRef.current!.children[itemsArray[0].index].classList.remove(
            "open"
          );
          boardRef.current!.children[itemsArray[1].index].classList.remove(
            "open"
          );
        } else {
          setMatches((prevState) => [...prevState, "match"]);
          boardItems.forEach((_, index) =>
            boardRef.current!.children[index].classList.remove("last")
          );
          boardRef.current!.children[itemsArray[0].index].classList.add("last");
          boardRef.current!.children[itemsArray[1].index].classList.add("last");
        }
        setClicks([]);
        setItemsArray([]);
      }
    }, 500);
    if (matches.length === (gridSize * gridSize) / 2) {
      console.log("game over!");
    }
  }, [itemsArray]);

  return (
    <div className="game-container">
      <div className="game-wrapper">
        <Header />
        <main
          className={`game-board ${gridSize === 4 ? "grid-4" : "grid-6"}`}
          ref={boardRef}
        >
          {boardItems.map((item, index) => (
            <button
              key={index}
              className="btn-item"
              onClick={(event) => handleItemClick(event, item, index)}
            >
              {theme === "numbers" && <p>{item}</p>}
              {theme === "icons" && (
                <img src={`./icons/${item}.svg`} alt={item} />
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
