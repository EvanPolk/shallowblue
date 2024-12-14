interface Props {
  position: string[][];
  rank: number;
  file: number;
  x: number;
  y: number;
}

export const movePiece = ({ position, rank, file, x, y }: Props) => {
  const newPosition = position.map((row) => {
    return row.slice();
  });

  const piece = newPosition[rank][file];
  newPosition[rank][file] = '';
  newPosition[y][x] = piece;
  return newPosition;
};
