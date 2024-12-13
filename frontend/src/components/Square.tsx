import { useContext } from 'react';
import Piece from './Piece';
import GameContext from '../contexts/context';

interface Props {
  rank: number;
  file: number;
}

function Square({ rank, file }: Props) {
  const value = useContext(GameContext);

  return (
    <div
      className={`h-20 w-20 ${rank % 2 === file % 2 ? 'bg-white' : 'bg-black'}`}
    >
      {value?.appState.position[rank][file] !== '' && (
        <Piece rank={rank} file={file} />
      )}
    </div>
  );
}

export default Square;
