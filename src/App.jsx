import projectImg from "./assets/game-logo.png";
import Player from "./assets/player";
function App() {
  return (
    <>
      <header>
        <h1>Tic-Tac-Toe Game</h1>;
        <img src={projectImg} alt="Error" />
      </header>
      <div id="game-container">
        <Player name="player1" symbol="X" />
        <Player name="player2" symbol="O" />
      </div>
    </>
  );
}

export default App;
