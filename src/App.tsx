import Game from "./components/Game";
import Menu from "./components/Menu";
import ResultModal from "./components/ResultModal";
import { useGlobalContext } from "./context";

function App() {
  const { showMenu, showGame, showResult } = useGlobalContext();

  return (
    <div>
      {showMenu && <Menu />}
      {showGame && <Game />}
      {showResult && <ResultModal />}
    </div>
  );
}

export default App;
