import Footer from "./Footer";
import "./Game.css";
import Header from "./Header";

function Game({ name }: { name: string }) {
  return (
    <div className="game-container">
      <Header />
      <main className="game-board"></main>
      <Footer name={name} />
    </div>
  );
}

export default Game;
