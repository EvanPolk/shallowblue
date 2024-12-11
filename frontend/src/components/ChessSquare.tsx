import React from 'react';
import IconMap from './util/IconMap';

interface Props {
  rank: number;
  file: number;
  pieceId: number;
}

function ChessSquare({ rank, file, pieceId }: Props) {
  const pieceImage = IconMap[pieceId];

  return (
    <div
      className={`h-20 w-20 ${rank % 2 === file % 2 ? 'bg-white' : 'bg-black'}`}
    >
      {pieceId != 0 && <img src={pieceImage} className='h-full w-full'></img>}
    </div>
  );
}

export default ChessSquare;
