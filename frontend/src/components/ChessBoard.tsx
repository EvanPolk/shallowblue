import { useState } from 'react';
import ChessSquare from './ChessSquare';

function ChessBoard() {
  const INITIAL_GRID_WHITE = [
    [11, 13, 12, 10, 9, 12, 13, 11],
    [14, 14, 14, 14, 14, 14, 14, 14],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [6, 6, 6, 6, 6, 6, 6, 6],
    [3, 5, 4, 2, 1, 4, 5, 3],
  ];

  const INITIAL_GRID_BLACK = [
    [3, 5, 4, 2, 1, 4, 5, 3],
    [6, 6, 6, 6, 6, 6, 6, 6],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [14, 14, 14, 14, 14, 14, 14, 14],
    [11, 13, 12, 10, 9, 12, 13, 11],
  ];

  const [grid, setGrid] = useState(INITIAL_GRID_WHITE);

  return (
    <div>
      {grid.map((row: number[], rowIndex: number) => (
        <div key={rowIndex} className='flex'>
          {row.map((piece, index) => (
            <ChessSquare rank={rowIndex} file={index} pieceId={piece} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default ChessBoard;
