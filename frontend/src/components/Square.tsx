import React from 'react';
import Piece from './Piece';

interface Props {
  rank: number;
  file: number;
  pieceId: number;
}

function Square({ rank, file, pieceId }: Props) {
  return (
    <div
      className={`h-20 w-20 ${rank % 2 === file % 2 ? 'bg-white' : 'bg-black'}`}
    >
      {pieceId != 0 && <Piece pieceId={pieceId} />}
    </div>
  );
}

export default Square;
