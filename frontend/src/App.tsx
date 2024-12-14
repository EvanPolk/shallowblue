import { useReducer } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { reducer } from './reducer/reducer';
import GameContext from './contexts/context';
import { initGameState } from './constants';
import Board from './components/Board';

function App() {
  const [appState, dispatch] = useReducer(reducer, initGameState);

  return (
    <GameContext.Provider value={{ appState, dispatch }}>
      <div className='h-full w-full flex justify-center items-center'>
        <DndProvider backend={HTML5Backend}>
          <Board />
        </DndProvider>
      </div>
    </GameContext.Provider>
  );
}

export default App;
