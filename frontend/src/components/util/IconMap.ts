import WhiteKing from '../../assets/WhiteKing.svg';
import WhiteQueen from '../../assets/WhiteQueen.svg';
import WhiteRook from '../../assets/WhiteRook.svg';
import WhiteBishop from '../../assets/WhiteBishop.svg';
import WhiteKnight from '../../assets/WhiteKnight.svg';
import WhitePawn from '../../assets/WhitePawn.svg';
import BlackKing from '../../assets/BlackKing.svg';
import BlackQueen from '../../assets/BlackQueen.svg';
import BlackRook from '../../assets/BlackRook.svg';
import BlackBishop from '../../assets/BlackBishop.svg';
import BlackKnight from '../../assets/BlackKnight.svg';
import BlackPawn from '../../assets/BlackPawn.svg';

type IconMapType = {
  [key: number]: string;
};

const IconMap: IconMapType = {
  1: WhiteKing,
  2: WhiteQueen,
  3: WhiteRook,
  4: WhiteBishop,
  5: WhiteKnight,
  6: WhitePawn,
  9: BlackKing,
  10: BlackQueen,
  11: BlackRook,
  12: BlackBishop,
  13: BlackKnight,
  14: BlackPawn,
};

export default IconMap;
