import { useContext } from 'react';
import { PieceImageMap } from '../helper';
import GameContext from '../contexts/context';

interface Props {
  rank: number;
  file: number;
}

function Piece({ rank, file }: Props) {
  const value = useContext(GameContext);
  const [appState, disptach] = value;
  return (
    <div className='h-full w-full'>
      {
        <img
          src={PieceImageMap[appState.position[rank][file]]}
          className='h-full w-full'
        ></img>
      }
    </div>
  );
}

export default Piece;
