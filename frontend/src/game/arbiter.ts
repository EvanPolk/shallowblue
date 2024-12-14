import {
  getBishopMoves,
  getKingMoves,
  getKnightMoves,
  getPawnMoves,
  getQueenMoves,
  getRookMoves,
} from './getMoves';

interface Props {
  position: string[][];
  rank: number;
  file: number;
}

const arbiter = {
  getCandidateMoves: ({ position, rank, file }: Props) => {
    const piece = position[rank][file][1];
    if (piece === 'k') return getKingMoves({ position, rank, file });
    if (piece === 'q') return getQueenMoves({ position, rank, file });
    if (piece === 'r') return getRookMoves({ position, rank, file });
    if (piece === 'b') return getBishopMoves({ position, rank, file });
    if (piece === 'n') return getKnightMoves({ position, rank, file });
    if (piece === 'p') return getPawnMoves({ position, rank, file });
  },
};

export default arbiter;
