import { useState } from 'react';
import { createPositionWhite } from '../helper';
import Square from './Square';

function ChessBoard() {
  const [grid, setGrid] = useState(createPositionWhite());

  return (
    <div>
      {grid.map((row: number[], rowIndex: number) => (
        <div key={rowIndex} className='flex'>
          {row.map((piece, colIndex) => (
            <Square rank={rowIndex} file={colIndex} pieceId={piece} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default ChessBoard;
