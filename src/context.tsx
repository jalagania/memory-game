import * as _ from "lodash";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { iconpack } from "./data";

interface ItemType {
  name: string;
  index: number;
}

type StateArrayType = React.Dispatch<React.SetStateAction<string[]>>;

interface ContextType {
  showMenu: boolean;
  setShowMenu: (arg: boolean) => void;
  showGame: boolean;
  setShowGame: (arg: boolean) => void;
  showResult: boolean;
  setShowResult: (arg: boolean) => void;
  theme: string;
  setTheme: (arg: string) => void;
  playerNumber: number;
  setPlayerNumber: (arg: number) => void;
  gridSize: number;
  setGridSize: (arg: number) => void;
  boardItems: string[];
  setBoardItems: StateArrayType;
  gameStarted: boolean;
  setGameStarted: (arg: boolean) => void;
  itemsArray: ItemType[];
  setItemsArray: React.Dispatch<React.SetStateAction<ItemType[]>>;
  clicks: string[];
  setClicks: StateArrayType;
  moves: number;
  setMoves: (arg: number) => void;
  matches: string[];
  setMatches: StateArrayType;
  restartGame: () => void;
  timer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  getTime: () => string;
  startTimer: () => void;
  stopTimer: () => void;
  currentPlayer: number;
  setCurrentPlayer: (arg: number) => void;
  scores: number[];
  setScores: React.Dispatch<React.SetStateAction<number[]>>;
}

const AppContext = createContext({} as ContextType);

export function ContextProvider({ children }: PropsWithChildren) {
  const [showMenu, setShowMenu] = useState(true);
  const [showGame, setShowGame] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [theme, setTheme] = useState("numbers");
  const [playerNumber, setPlayerNumber] = useState(1);
  const [gridSize, setGridSize] = useState(4);
  const [boardItems, setBoardItems] = useState<string[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [itemsArray, setItemsArray] = useState<ItemType[]>([]);
  const [clicks, setClicks] = useState<string[]>([]);
  const [matches, setMatches] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [timer, setTimer] = useState(0);
  const [intervalID, setIntervalID] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [scores, setScores] = useState<number[]>([]);

  function getBoardItems(): string[] {
    let numbers = Array.from(Array((gridSize * gridSize) / 2).keys()).map((el) => el.toString());
    numbers = _.shuffle(numbers.concat(numbers));
    let icons = iconpack.slice(0, (gridSize * gridSize) / 2);
    icons = _.shuffle(icons.concat(icons));
    return theme === "numbers" ? numbers : icons;
  }

  function startTimer() {
    const interval = setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);
    setIntervalID(interval);
  }

  function stopTimer() {
    clearInterval(intervalID);
  }

  function getTime() {
    return timer > 59
      ? `${Math.trunc(timer / 60)
          .toString()
          .padStart(2, "0")}:${(timer % 60).toString().padStart(2, "0")}`
      : `00:${timer.toString().padStart(2, "0")}`;
  }

  function restartGame() {
    setClicks([]);
    setMoves(0);
    setTimer(0);
    setMatches([]);
    setItemsArray([]);
    setBoardItems(getBoardItems());
    setShowResult(false);
    stopTimer();
    setGameStarted(false);
    setCurrentPlayer(0);
    setScores(new Array(playerNumber).fill(0));
  }

  return (
    <AppContext.Provider
      value={{
        showMenu,
        setShowMenu,
        showGame,
        setShowGame,
        showResult,
        setShowResult,
        theme,
        setTheme,
        playerNumber,
        setPlayerNumber,
        gridSize,
        setGridSize,
        boardItems,
        setBoardItems,
        gameStarted,
        setGameStarted,
        itemsArray,
        setItemsArray,
        clicks,
        setClicks,
        moves,
        setMoves,
        matches,
        setMatches,
        restartGame,
        timer,
        setTimer,
        getTime,
        startTimer,
        stopTimer,
        currentPlayer,
        setCurrentPlayer,
        scores,
        setScores,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}
