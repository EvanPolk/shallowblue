import { useContext } from 'react';
import { PieceImageMap } from '../helper';
import GameContext from '../contexts/context';
import {
  clearCandidates,
  generateFilteredMoves,
  generateSelectedPiece,
} from '../reducer/actions/move';
import arbiter from '../game/arbiter';

interface Props {
  rank: number;
  file: number;
}

function Piece({ rank, file }: Props) {
  const { appState, dispatch } = useContext(GameContext);
  const position = appState.position;
  const piece = position[rank][file];

  const handleClick = () => {
    if (appState.turn !== position[rank][file][0]) {
      dispatch(clearCandidates());
      return;
    }

    const potentialMoves = arbiter.getCandidateMoves({
      position,
      rank,
      file,
    });

    if (potentialMoves == null) {
      dispatch(clearCandidates());
      return;
    }

    const validMoves = arbiter.getValidMoves({
      position,
      rank,
      file,
      candidates: potentialMoves,
    });

    if (validMoves == null) {
      dispatch(clearCandidates());
      return;
    }

    dispatch(generateFilteredMoves({ potentialMoves: validMoves }));
    dispatch(generateSelectedPiece({ rank, file }));
  };

  return (
    <div onClick={handleClick} className='h-full w-full absolute'>
      {piece !== undefined && piece !== '' && (
        <img src={PieceImageMap[piece]} className='h-full w-full'></img>
      )}
    </div>
  );
}

export default Piece;
