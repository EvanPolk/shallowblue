import IconMap from '../helper';

interface Props {
  pieceId: number;
}

function Piece({ pieceId }: Props) {
  const pieceImage = IconMap[pieceId];

  return (
    <>
      <div className='h-full w-full'>
        <img src={pieceImage} className='h-full w-full'></img>
      </div>
    </>
  );
}

export default Piece;
