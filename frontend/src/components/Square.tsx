import { useContext } from 'react';
import Piece from './Piece';
import GameContext from '../contexts/context';

interface Props {
  rank: number;
  file: number;
}

function Square({ rank, file }: Props) {
  const { appState } = useContext(GameContext);

  const isSelected = () => {
    const potentialMoves = appState.potentialMoves;
    return potentialMoves.some(
      (coord) => coord[0] === rank && coord[1] === file
    );
  };

  return (
    <div
      className={`h-20 w-20 ${
        rank % 2 === file % 2
          ? isSelected()
            ? 'bg-white-select'
            : 'bg-white'
          : isSelected()
          ? 'bg-black-select'
          : 'bg-black'
      }`}
    >
      {appState.position[rank][file] !== '' && (
        <Piece rank={rank} file={file} />
      )}
    </div>
  );
}

export default Square;
