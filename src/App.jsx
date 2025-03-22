import projectImg from "./assets/game-logo.png";
import Player from "./assets/player";
import GameBoard from "./assets/gameBoard";
import { useState } from "react";
function App() {
  const [activePlayer, setPlayer] = useState("X");
  function handleActivePlayer() {
    setPlayer((prevActivePlayer) => (prevActivePlayer === "X" ? "O" : "X"));
  }
  return (
    <>
      <header>
        <h1>Tic-Tac-Toe Game</h1>;
        <img src={projectImg} alt="Error" />
      </header>
      <div id="game-container">
        <Player name="player1" symbol="X" isActive={activePlayer === "X"} />
        <Player name="player2" symbol="O" isActive={activePlayer === "O"} />
        <GameBoard
          selectedSquare={handleActivePlayer}
          activatedSymbol={activePlayer}
        />
      </div>
    </>
  );
}

export default App;
