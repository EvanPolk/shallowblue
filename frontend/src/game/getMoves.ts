import { getPostMovePosition, isInCheck } from './move';

enum ScanType {
  VALID,
  STOP,
  LAST,
}

interface Props {
  position: string[][];
  rank: number;
  file: number;
}

const isPsuedoLegal = (
  position: string[][],
  rank: number,
  file: number,
  targetRank: number,
  targetFile: number
) => {
  const dyInBounds = 0 <= targetRank && targetRank < 8;
  const dxInBounds = 0 <= targetFile && targetFile < 8;

  if (!dyInBounds || !dxInBounds) return ScanType.VALID;

  const currentPiece = position[rank][file];
  const targetPiece = position[targetRank][targetFile];

  if (targetPiece === '') return ScanType.VALID; // Empty square

  const isFriendly = targetPiece[0] === currentPiece[0]; // Same color
  return isFriendly ? ScanType.STOP : ScanType.LAST;
};

export const getKingMoves = ({ position, rank, file }: Props) => {
  const moves: number[][] = [];

  // Potential king moves (Think one square perimeter)
  const directions = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
  ];

  directions.forEach(([dy, dx]) => {
    const r = rank + dy;
    const f = file + dx;
    const scanCondition = isPsuedoLegal(position, rank, file, r, f);
    if (scanCondition === ScanType.STOP) {
      return;
    }
    moves.push([r, f]);
  });
  return moves;
};

export const getQueenMoves = ({ position, rank, file }: Props) => {
  const potentialRookMoves = getRookMoves({ position, rank, file });
  const potentialBishopMoves = getBishopMoves({ position, rank, file });
  const moves = [...potentialRookMoves, ...potentialBishopMoves];
  return moves;
};

export const getRookMoves = ({ position, rank, file }: Props) => {
  const moves: number[][] = [];
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  directions.forEach(([dy, dx]) => {
    let r = rank + dy;
    let f = file + dx;
    let scanCondition = isPsuedoLegal(position, rank, file, r, f);

    while (scanCondition !== ScanType.STOP) {
      moves.push([r, f]);
      r += dy;
      f += dx;
      scanCondition = isPsuedoLegal(position, rank, file, r, f);
    }
  });
  return moves;
};

export const getBishopMoves = ({ position, rank, file }: Props) => {
  const moves: number[][] = [];
  const directions = [
    [1, 1],
    [-1, 1],
    [1, -1],
    [-1, -1],
  ];
  directions.forEach(([dy, dx]) => {
    let r = rank + dy;
    let f = file + dx;
    let scanCondition = isPsuedoLegal(position, rank, file, r, f);

    while (scanCondition !== ScanType.STOP) {
      moves.push([r, f]);
      r += dy;
      f += dx;
      scanCondition = isPsuedoLegal(position, rank, file, r, f);
    }
  });
  return moves;
};

export const getKnightMoves = ({ position, rank, file }: Props) => {
  const moves: number[][] = [];
  const directions = [
    [1, 2],
    [-1, 2],
    [2, 1],
    [-2, 1],
    [2, -1],
    [-2, -1],
    [1, -2],
    [-1, -2],
  ];

  directions.forEach(([dy, dx]) => {
    const r = rank + dy;
    const f = file + dx;

    if (isPsuedoLegal(position, rank, file, r, f) !== ScanType.STOP) {
      moves.push([r, f]);
    }
  });
  return moves;
};

export const getPawnMoves = ({ position, rank, file }: Props) => {
  const moves: number[][] = [];
  const isWhite = position[rank][file][0] === 'w';
  const originalRank = isWhite ? 6 : 1;
  const directions =
    rank === originalRank
      ? [[1, 0]]
      : [
          [1, 0],
          [2, 0],
        ];

  directions.forEach(([dy, dx]) => {
    const r = isWhite ? rank - dy : rank + dy;
    const f = isWhite ? file - dx : file + dx;

    if (isPsuedoLegal(position, rank, file, r, f) === ScanType.VALID) {
      moves.push([r, f]);
    }
  });
  moves.push(...getPawnAttacks({ position, rank, file }));
  return moves;
};

export const getPawnAttacks = ({ position, rank, file }: Props) => {
  const moves: number[][] = [];
  const isWhite = position[rank][file][0] === 'w';
  // Calculating diagonal attacks
  const attacks = [
    [1, 1],
    [1, -1],
  ];
  attacks.forEach((dir) => {
    const dy = isWhite ? rank - dir[0] : rank + dir[0];
    const dx = isWhite ? file - dir[1] : file + dir[1];

    const dyInBounds = 0 <= dy && dy < 8;
    const dxInBounds = 0 <= dx && dx < 8;

    if (!dyInBounds || !dxInBounds) {
      return;
    }

    if (position[dy][dx] !== '') {
      moves.push([dy, dx]);
    }
  });
  return moves;
};

interface FindKingProps {
  position: string[][];
  turn: string;
}

const findKing = ({ position, turn }: FindKingProps) => {
  for (let rank = 0; rank < 8; rank++) {
    for (let file = 0; file < 8; file++) {
      if (position[rank][file] === turn + 'k') {
        return [rank, file];
      }
    }
  }
  return [-1, -1];
};

interface ValidProps {
  position: string[][];
  candidates: number[][];
  rank: number;
  file: number;
}

export const filterValidMoves = ({
  position,
  candidates,
  rank,
  file,
}: ValidProps) => {
  const validMoves: number[][] = [];
  const turn = position[rank][file][0];
  candidates.forEach((move) => {
    const newPosition = getPostMovePosition({
      position,
      oldY: rank,
      oldX: file,
      targetX: move[1],
      targetY: move[0],
    });

    const king = findKing({ position: newPosition, turn });
    if (!isInCheck({ position: newPosition, rank: king[0], file: king[1] })) {
      validMoves.push(move);
    }
  });
  return validMoves;
};
