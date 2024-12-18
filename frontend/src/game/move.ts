import {
  getBishopMoves,
  getKnightMoves,
  getPawnAttacks,
  getRookMoves,
} from './getMoves';

interface Props {
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
}: Props) => {
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
    (coord) => {
      return position[coord[0]][coord[1]] === enemy + 'n';
    }
  );

  const bishopQueenAttacked = getBishopMoves({ position, rank, file }).some(
    (coord) => {
      const attackingPiece = position[coord[0]][coord[1]];
      return attackingPiece === enemy + 'b' || attackingPiece === enemy + 'q';
    }
  );
  const rookQueenAttacked = getRookMoves({ position, rank, file }).some(
    (coord) => {
      const attackingPiece = position[coord[0]][coord[1]];
      return attackingPiece === enemy + 'r' || attackingPiece === enemy + 'q';
    }
  );
  const pawnAttacked = getPawnAttacks({ position, rank, file }).some(
    (coord) => {
      return position[coord[0]][coord[1]] === enemy + 'p';
    }
  );
  return (
    knightAttacked || bishopQueenAttacked || rookQueenAttacked || pawnAttacked
  );
};
