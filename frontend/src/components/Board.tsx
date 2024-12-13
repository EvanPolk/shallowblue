import Square from './Square';

function ChessBoard() {
  const grid: string[][] = new Array(8).fill(new Array(8).fill('wp'));
  return (
    <div>
      {grid.map((row, i) => (
        <div key={i} className='flex'>
          {row.map((_, j) => (
            <Square rank={i} file={j} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default ChessBoard;
