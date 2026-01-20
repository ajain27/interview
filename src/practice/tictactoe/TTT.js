import useTicTacToe from "./useTicTacToe";
import "./style.css";

function TTT() {
  const { board, handleClick, resetGame, getStatusMessage } = useTicTacToe();

  return (
    <div>
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
              key={index}
              className="cell"
              onClick={() => handleClick(index)}
              disabled={b !== null}
            >
              {b}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TTT;
