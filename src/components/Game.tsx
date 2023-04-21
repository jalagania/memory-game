import { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";
import Footer from "./Footer";
import "./Game.css";
import Header from "./Header";

function Game() {
  const {
    theme,
    gridSize,
    boardItems,
    itemsArray,
    setItemsArray,
    clicks,
    setClicks,
    moves,
    setMoves,
    matches,
    setMatches,
    setShowResult,
    timer,
    setTimer,
  } = useGlobalContext();

  const boardRef = useRef<HTMLDivElement>(null);

  function startTimer() {
    const timerFunc = setInterval(() => {
      setTimer((prevState) => prevState + 1);
      if (matches.length === (gridSize * gridSize) / 2) {
        clearInterval(timerFunc);
      }
    }, 1000);
  }

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
    if (timer === 0) startTimer();
  }

  useEffect(() => {
    setTimeout(() => {
      if (itemsArray.length === 2) {
        setMoves(moves + 1);
        if (
          itemsArray[0].name !== itemsArray[1].name &&
          itemsArray[0].index !== itemsArray[1].index
        ) {
          boardRef.current!.children[itemsArray[0].index].classList.remove("open");
          boardRef.current!.children[itemsArray[1].index].classList.remove("open");
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
      setShowResult(true);
    }
  }, [itemsArray]);

  return (
    <div className="game-container">
      <div className="game-wrapper">
        <Header />
        <main className={`game-board ${gridSize === 4 ? "grid-4" : "grid-6"}`} ref={boardRef}>
          {boardItems.map((item, index) => (
            <button
              key={index}
              className="btn-item"
              onClick={(event) => handleItemClick(event, item, index)}
            >
              {theme === "numbers" && <p>{item}</p>}
              {theme === "icons" && <img src={`./icons/${item}.svg`} alt={item} />}
            </button>
          ))}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Game;
