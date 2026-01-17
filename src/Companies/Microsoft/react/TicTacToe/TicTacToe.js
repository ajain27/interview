import useTicTactoe from "./hooks/useTicTacToe.js";
import "./style.css";

function TicTacToe() {
  const { board, handleClick, getStatusMessage, resetGame } = useTicTactoe();

  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()}
        <button className="reset" onClick={resetGame}>
          Reset Game
        </button>
      </div>
      <div className="board">
        {board.map((b, index) => (
          <button
            className="cell"
            key={index}
            onClick={() => handleClick(index)}
            disable={b !== null}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TicTacToe;
