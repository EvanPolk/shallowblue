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

interface TurnType {
  turn: string;
}

export const getNextTurn = ({ turn }: TurnType) => {
  return turn === 'w' ? 'b' : 'w';
};
