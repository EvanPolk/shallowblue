import React, { useContext } from 'react';
import GameContext from '../contexts/context';
function TurnIndicator() {
  const { appState } = useContext(GameContext);
  return (
    <div
      className={`h-[40rem] w-8 m-4 rounded-md transition-colors ${
        appState.turn === 'w' ? 'bg-stone-200' : 'bg-stone-700'
      }`}
    ></div>
  );
}

export default TurnIndicator;
