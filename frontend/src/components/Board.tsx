import Square from './Square';

function Board() {
  const grid: string[][] = new Array(8).fill(new Array(8).fill('wp'));
  return (
    <div>
      {grid.map((row, i) => (
        <div key={i} className='flex'>
          {row.map((_, j) => (
            <Square key={i + ' ' + j} rank={i} file={j} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
