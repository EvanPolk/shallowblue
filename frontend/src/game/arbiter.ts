import { generateSelectedPiece } from '../reducer/actions/move';
import {
  filterValidMoves,
  getBishopMoves,
  getKingMoves,
  getKnightMoves,
  getPawnMoves,
  getQueenMoves,
  getRookMoves,
} from './getMoves';
import { getPostMovePosition } from './move';

interface CandidateMovesProps {
  position: string[][];
  rank: number;
  file: number;
}

interface ValidMoveProps {
  position: string[][];
  candidates: number[][];
  rank: number;
  file: number;
}

interface MovePieceProps {
  position: string[][];
  oldY: number;
  oldX: number;
  targetX: number;
  targetY: number;
}

interface SelectPieceProps {
  rank: number;
  file: number;
}

const arbiter = {
  getCandidateMoves: ({ position, rank, file }: CandidateMovesProps) => {
    const piece = position[rank][file][1];
    if (piece === 'k') return getKingMoves({ position, rank, file });
    if (piece === 'q') return getQueenMoves({ position, rank, file });
    if (piece === 'r') return getRookMoves({ position, rank, file });
    if (piece === 'b') return getBishopMoves({ position, rank, file });
    if (piece === 'n') return getKnightMoves({ position, rank, file });
    if (piece === 'p') return getPawnMoves({ position, rank, file });
  },

  getValidMoves: ({ position, rank, file, candidates }: ValidMoveProps) => {
    return filterValidMoves({ position, candidates, rank, file });
  },

  getMovedPiecePosition: ({
    position,
    oldY,
    oldX,
    targetX,
    targetY,
  }: MovePieceProps) => {
    return getPostMovePosition({ position, oldY, oldX, targetX, targetY });
  },

  getSelectedPiece: ({ rank, file }: SelectPieceProps) => {
    return generateSelectedPiece({ rank, file });
  },
};

export default arbiter;
