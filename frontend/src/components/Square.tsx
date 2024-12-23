import { useContext } from 'react';
import Piece from './Piece';
import GameContext from '../contexts/context';
import MoveIndicator from './MoveIndicator';
import arbiter from '../game/arbiter';
import {
  generateNewTurn,
  generatePostMovePosition,
} from '../reducer/actions/move';

interface Props {
  rank: number;
  file: number;
}

function Square({ rank, file }: Props) {
  const { appState, dispatch } = useContext(GameContext);

  const isHighlightedMove = () => {
    return appState.potentialMoves.some(([r, f]) => r === rank && f === file);
  };

  const handleMoveClick = () => {
    if (appState.selectedPiece.length != 2) {
      // prevents error for init array []
      return;
    }

    const [oldRank, oldFile] = appState.selectedPiece;
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
      dispatch(generateNewTurn({ turn: appState.turn === 'w' ? 'b' : 'w' }));
    }
  };

  const getCornerStyle = () => {
    if (rank === 0 && file === 0) return 'rounded-tl-md';
    if (rank === 0 && file === 7) return 'rounded-tr-md';
    if (rank === 7 && file === 0) return 'rounded-bl-md';
    if (rank === 7 && file === 7) return 'rounded-br-md';
    return '';
  };

  const getHighlightStyle = () => {
    const isWhiteSquare = rank % 2 === file % 2;
    if (isWhiteSquare && isHighlightedMove()) return 'bg-white-select';
    if (!isWhiteSquare && isHighlightedMove()) return 'bg-black-select';
    if (isWhiteSquare) return 'bg-white';
    if (!isWhiteSquare) return 'bg-black';
  };

  return (
    <div
      onClick={handleMoveClick}
      className={`h-20 w-20 relative ${getCornerStyle()} ${getHighlightStyle()}`}
    >
      {isHighlightedMove() && <MoveIndicator rank={rank} file={file} />}
      <Piece rank={rank} file={file} />
    </div>
  );
}

export default Square;
