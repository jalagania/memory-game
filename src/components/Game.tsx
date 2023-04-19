import Footer from "./Footer";
import "./Game.css";
import Header from "./Header";

function Game() {
  return (
    <div className="game-container">
      <Header />
      <main className="game-board"></main>
      <Footer />
    </div>
  );
}

export default Game;
