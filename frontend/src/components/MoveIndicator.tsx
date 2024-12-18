import { useGameContext } from '../contexts/context';
import { generateCandidates } from '../reducer/actions/move';

interface Props {
  rank: number;
  file: number;
}

function MoveIndicator({ rank, file }: Props) {
  const { appState, dispatch } = useGameContext();
  const position = appState.position;

  const handleClick = () => {
    dispatch(generateCandidates({ potentialMoves: [] }));
  };

  return (
    <div
      onClick={handleClick}
      className='h-full w-full flex items-center justify-center absolute'
    >
      {position[rank][file] === '' ? (
        <div className='w-1/4 h-1/4 rounded-full bg-[black] opacity-20 z-50'></div>
      ) : (
        <div className='w-full h-full rounded-full border-8 border-[black] opacity-20 z-50'></div>
      )}
    </div>
  );
}

export default MoveIndicator;
