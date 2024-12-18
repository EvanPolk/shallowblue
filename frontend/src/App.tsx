import { useReducer } from 'react';
import { reducer } from './reducer/reducer';
import GameContext from './contexts/context';
import { initGameState } from './constants';
import Board from './components/Board';
import TurnIndicator from './components/TurnIndicator';

function App() {
  const [appState, dispatch] = useReducer(reducer, initGameState);

  return (
    <GameContext.Provider value={{ appState, dispatch }}>
      <div className='h-screen w-screen bg-stone-800 flex justify-center items-center'>
        <Board />
        <TurnIndicator />
      </div>
    </GameContext.Provider>
  );
}

export default App;
