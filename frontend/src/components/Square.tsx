import { useContext } from 'react';
import Piece from './Piece';
import GameContext from '../contexts/context';
import MoveIndicator from './MoveIndicator';
import arbiter from '../game/arbiter';
import {
  generateNewTurn,
  generatePostMovePosition,
} from '../reducer/actions/move';
import { getNextTurn } from '../game/move';

interface Props {
  rank: number;
  file: number;
}

function Square({ rank, file }: Props) {
  const { appState, dispatch } = useContext(GameContext);

  const isHighlightedMove = () => {
    // Checking potential move selected
    const potentialMoves = appState.potentialMoves;
    return potentialMoves.some(
      (coord) => coord[0] === rank && coord[1] === file
    );
  };

  const handleMoveClick = () => {
    const oldRank = appState.selectedPiece[0];
    const oldFile = appState.selectedPiece[1];
    const isUserTurn = appState.turn === appState.position[oldRank][oldFile][0];
    if (isHighlightedMove() && isUserTurn) {
      const newPosition = arbiter.getMovedPiecePosition({
        position: appState.position,
        oldX: appState.selectedPiece[1],
        oldY: appState.selectedPiece[0],
        targetX: file,
        targetY: rank,
      });
      dispatch(
        generatePostMovePosition({
          position: newPosition,
        })
      );
      const turn = getNextTurn({ turn: appState.turn });
      dispatch(generateNewTurn({ turn }));
    }
  };

  const cornerStyle = (rank: number, file: number) => {
    if (rank === 0 && file === 0) {
      return 'rounded-tl-md';
    } else if (rank === 0 && file === 7) {
      return 'rounded-tr-md';
    } else if (rank === 7 && file === 0) {
      return 'rounded-bl-md';
    } else if (rank === 7 && file === 7) {
      return 'rounded-br-md';
    }
    return '';
  };

  return (
    <div
      onClick={handleMoveClick}
      className={`h-20 w-20 relative ${cornerStyle(rank, file)} ${
        rank % 2 === file % 2
          ? isHighlightedMove()
            ? 'bg-white-select'
            : 'bg-white'
          : isHighlightedMove()
          ? 'bg-black-select'
          : 'bg-black'
      }`}
    >
      {isHighlightedMove() && <MoveIndicator rank={rank} file={file} />}
      <Piece rank={rank} file={file} />
    </div>
  );
}

export default Square;
