import BlackBishop from './assets/bb.svg';
import BlackKing from './assets/bk.svg';
import BlackKnight from './assets/bn.svg';
import BlackPawn from './assets/bp.svg';
import BlackQueen from './assets/bq.svg';
import BlackRook from './assets/br.svg';
import WhiteBishop from './assets/wb.svg';
import WhiteKing from './assets/wk.svg';
import WhitePawn from './assets/wp.svg';
import WhiteQueen from './assets/wq.svg';
import WhiteRook from './assets/wr.svg';
import WhiteKnight from './assets/wn.svg';
import { getKingMoves, getQueenMoves, getRookMoves } from './game/getMoves';
import arbiter from './game/arbiter';

interface PieceImageMapType {
  [key: string]: string;
}

export const PieceImageMap: PieceImageMapType = {
  bk: BlackKing,
  bq: BlackQueen,
  br: BlackRook,
  bb: BlackBishop,
  bn: BlackKnight,
  bp: BlackPawn,
  wk: WhiteKing,
  wq: WhiteQueen,
  wr: WhiteRook,
  wb: WhiteBishop,
  wn: WhiteKnight,
  wp: WhitePawn,
};

export const createPosition = () => {
  return [
    ['br', 'bn', 'bb', 'bq', 'bk', 'bb', 'bn', 'br'],
    ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
    ['wr', 'wn', 'wb', 'wq', 'wk', 'wb', 'wn', 'wr'],
  ];
};

interface CreateGameNotationProps {
  position: string[][];
  oldRank: number;
  oldFile: number;
  targetRank: number;
  targetFile: number;
}

export const createGameNotation = ({
  position,
  oldRank,
  oldFile,
  targetRank,
  targetFile,
}: CreateGameNotationProps) => {
  const start = differentiatePiece({position, oldRank, oldFile, targetRank, targetFile});
  if (position[targetRank][targetFile] !== '')
};

const differentiatePiece = ({
  position,
  oldRank,
  oldFile,
  targetRank,
  targetFile,
}: CreateGameNotationProps) => {
  // Generating valid moves from potential move position
  const candidates = arbiter.getCandidateMoves({
    position,
    rank: targetRank,
    file: targetFile,
  });

  if (candidates == null) {
    return '';
  }

  const moves = arbiter.getValidMoves({
    position,
    rank: targetRank,
    file: targetFile,
    candidates,
  });

  // Details of algebraic notation mean we must differentiate which piece moved
  // To our new square
  let sameFile = false;
  let sameRank = false;

  moves.forEach(([r, f]) => {
    if (position[r][f] !== position[oldRank][oldFile]) return;
    if (r === oldRank && f === oldFile) return;

    if (r === oldRank) sameRank = true;
    if (f === oldFile) sameFile = true;
  });

  let res = position[oldRank][oldFile];
  // TODO: sameRank should add file differentiater
  // TODO: files should be denoted by alphabet a-h
  if (sameRank) res += oldRank;
  if (sameFile) res += oldFile;

  return res;
};
