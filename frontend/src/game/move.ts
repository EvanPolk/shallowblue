import {
  getBishopMoves,
  getKnightMoves,
  getPawnAttacks,
  getRookMoves,
} from './getMoves';

interface PostMoveProps {
  position: string[][];
  oldX: number;
  oldY: number;
  targetX: number;
  targetY: number;
}

export const getPostMovePosition = ({
  position,
  oldY,
  oldX,
  targetX,
  targetY,
}: PostMoveProps) => {
  const newPosition = position.map((row) => {
    return row.slice();
  });
  const piece = newPosition[oldY][oldX];
  newPosition[oldY][oldX] = '';
  newPosition[targetY][targetX] = piece;
  return newPosition;
};

interface CheckProps {
  position: string[][];
  rank: number;
  file: number;
}

export const isInCheck = ({ position, rank, file }: CheckProps) => {
  const friend = position[rank][file][0];
  const enemy = friend === 'w' ? 'b' : 'w';

  const knightAttacked = getKnightMoves({ position, rank, file }).some(
    ([y, x]) => {
      return position[y][x] === enemy + 'n';
    }
  );

  const bishopQueenAttacked = getBishopMoves({ position, rank, file }).some(
    ([y, x]) => {
      const attackingPiece = position[y][x];
      return attackingPiece === enemy + 'b' || attackingPiece === enemy + 'q';
    }
  );
  const rookQueenAttacked = getRookMoves({ position, rank, file }).some(
    ([y, x]) => {
      const attackingPiece = position[y][x];
      return attackingPiece === enemy + 'r' || attackingPiece === enemy + 'q';
    }
  );
  const pawnAttacked = getPawnAttacks({ position, rank, file }).some(
    ([y, x]) => {
      return position[y][x] === enemy + 'p';
    }
  );
  return (
    knightAttacked || bishopQueenAttacked || rookQueenAttacked || pawnAttacked
  );
};
