import { PropsWithChildren, createContext, useContext, useState } from "react";

interface ContextType {
  showMenu: boolean;
  setShowMenu: (arg: boolean) => void;
  showGame: boolean;
  setShowGame: (arg: boolean) => void;
  theme: string;
  setTheme: (arg: string) => void;
  playerNumber: number;
  setPlayerNumber: (arg: number) => void;
  gridSize: number;
  setGridSize: (arg: number) => void;
}

const AppContext = createContext({} as ContextType);

export function ContextProvider({ children }: PropsWithChildren) {
  const [showMenu, setShowMenu] = useState(true);
  const [showGame, setShowGame] = useState(false);
  const [theme, setTheme] = useState("numbers");
  const [playerNumber, setPlayerNumber] = useState(1);
  const [gridSize, setGridSize] = useState(4);

  return (
    <AppContext.Provider
      value={{
        showMenu,
        setShowMenu,
        showGame,
        setShowGame,
        theme,
        setTheme,
        playerNumber,
        setPlayerNumber,
        gridSize,
        setGridSize,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}
