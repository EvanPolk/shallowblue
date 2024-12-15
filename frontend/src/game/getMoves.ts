/**
 *  This file calculates potential moves for each piece individually, broken up by
 *  piece type i.e. { King, Queen, Rook, Bishop, Knight, Pawn }
 */

interface Props {
  position: string[][];
  rank: number;
  file: number;
}

export const getKingMoves = ({ position, rank, file }: Props) => {
  const moves: number[][] = [];

  // Potential king moves
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

  directions.forEach((dir) => {
    const dy = rank + dir[0];
    const dx = file + dir[1];

    const dyInBounds = 0 <= dy && dy < 8;
    const dxInBounds = 0 <= dx && dx < 8;

    if (!dyInBounds || !dxInBounds) {
      return;
    }

    if (position[dy][dx][0] !== position[rank][file][0]) {
      moves.push([dy, dx]);
    }
  });
  return moves;
};

export const getQueenMoves = ({ position, rank, file }: Props) => {
  let moves: number[][] = [];
  const potentialRookMoves = getRookMoves({ position, rank, file });
  const potentialBishopMoves = getBishopMoves({ position, rank, file });
  moves = [...moves, ...potentialRookMoves, ...potentialBishopMoves];
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

  directions.forEach((dir) => {
    let dy = rank + dir[0];
    let dx = file + dir[1];
    for (let i = 0; i < 8; i++) {
      const dyInBounds = 0 <= dy && dy < 8;
      const dxInBounds = 0 <= dx && dx < 8;

      if (!dyInBounds || !dxInBounds) {
        break;
      }

      if (position[dy][dx] === '') {
        // potential move on empty square
        moves.push([dy, dx]);
      } else if (position[dy][dx][0] !== position[rank][file][0]) {
        // potential move on enemy piece
        moves.push([dy, dx]);
        break;
      } else if (position[dy][dx][0] === position[rank][file][0]) {
        // potential move on friendly piece
        break;
      }

      dy += dir[0];
      dx += dir[1];
    }
  });
  return moves;
};

export const getBishopMoves = ({ position, rank, file }: Props) => {
  const moves: number[][] = [];
  const directions = [
    [-1, -1],
    [-1, 1],
    [1, -1],
    [-1, -1],
  ];
  directions.forEach((dir) => {
    let dy = rank + dir[0];
    let dx = file + dir[1];
    for (let i = 0; i < 8; i++) {
      const dyInBounds = 0 <= dy && dy < 8;
      const dxInBounds = 0 <= dx && dx < 8;

      if (!dyInBounds || !dxInBounds) {
        break;
      }

      if (position[dy][dx] === '') {
        // potential move on empty square
        moves.push([dy, dx]);
      } else if (position[dy][dx][0] !== position[rank][file][0]) {
        // potential move on enemy piece
        moves.push([dy, dx]);
        break;
      } else if (position[dy][dx][0] === position[rank][file][0]) {
        // potential move on friendly piece
        break;
      }

      dy += dir[0];
      dx += dir[1];
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

  directions.forEach((dir) => {
    const dy = rank + dir[0];
    const dx = file + dir[1];

    const dyInBounds = 0 <= dy && dy < 8;
    const dxInBounds = 0 <= dx && dx < 8;

    if (!dyInBounds || !dxInBounds) {
      return;
    }

    if (position[dy][dx] === '') {
      // potential move on empty square
      moves.push([dy, dx]);
    } else if (position[dy][dx][0] !== position[rank][file][0]) {
      // potential move on enemy piece
      moves.push([dy, dx]);
    }
  });
  return moves;
};

export const getPawnMoves = ({ position, rank, file }: Props) => {
  let moves: number[][] = [];
  if (position[rank][file][0] === 'w') {
    moves = [...moves, ...getWhitePawnMoves({ position, rank, file })];
  } else if (position[rank][file][0] === 'b') {
    moves = [...moves, ...getBlackPawnMoves({ position, rank, file })];
  }
  return moves;
};

const getWhitePawnMoves = ({ position, rank, file }: Props) => {
  const moves: number[][] = [];
  const directions = [[-1, 0]];
  if (rank === 6) {
    directions.push([-2, 0]);
  }

  directions.forEach((dir) => {
    const dy = rank + dir[0];
    const dx = file + dir[1];

    const dyInBounds = 0 <= dy && dy < 8;
    const dxInBounds = 0 <= dx && dx < 8;

    if (!dyInBounds || !dxInBounds) {
      return;
    }

    if (position[dy][dx] === '') {
      moves.push([dy, dx]);
    }
  });
  return moves;
};

const getBlackPawnMoves = ({ position, rank, file }: Props) => {
  const moves: number[][] = [];
  const directions = [[1, 0]];
  if (rank === 1) {
    directions.push([2, 0]);
  }

  directions.forEach((dir) => {
    const dy = rank + dir[0];
    const dx = file + dir[1];

    const dyInBounds = 0 <= dy && dy < 8;
    const dxInBounds = 0 <= dx && dx < 8;

    if (!dyInBounds || !dxInBounds) {
      return;
    }

    if (position[dy][dx] === '') {
      moves.push([dy, dx]);
    }
  });
  return moves;
};
