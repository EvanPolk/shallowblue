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
