import Game from "./components/Game";
import Menu from "./components/Menu";
import { useGlobalContext } from "./context";

function App() {
  const { showMenu, showGame } = useGlobalContext();

  return (
    <div>
      {showMenu && <Menu />}
      {showGame && <Game />}
    </div>
  );
}

export default App;
