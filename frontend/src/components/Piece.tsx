import { useContext } from 'react';
import { PieceImageMap } from '../helper';
import GameContext from '../contexts/context';
import { generateCandidates } from '../reducer/actions/move';
import arbiter from '../game/arbiter';

interface Props {
  rank: number;
  file: number;
}

function Piece({ rank, file }: Props) {
  const { appState, dispatch } = useContext(GameContext);
  const position = appState.position;
  const piece = appState.position[rank][file];

  const handleClick = () => {
    const potentialMoves = arbiter.getCandidateMoves({ position, rank, file });
    if (potentialMoves !== undefined)
      dispatch(generateCandidates({ potentialMoves }));
  };

  return (
    <div onClick={handleClick} className='h-full w-full'>
      {piece !== undefined && piece !== '' && (
        <img src={PieceImageMap[piece]} className='h-full w-full'></img>
      )}
    </div>
  );
}

export default Piece;
