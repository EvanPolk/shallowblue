/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext } from 'react';

interface AppState {
  position: string[][];
  turn: string;
  potentialMoves: number[][];
  selectedPiece: number[];
}

interface Action {
  type: string;
  payload: unknown;
}

interface Value<Action> {
  appState: AppState;
  dispatch: React.Dispatch<Action>;
}

const GameContext = createContext<Value<Action>>({
  appState: {
    position: [],
    turn: '',
    potentialMoves: [],
    selectedPiece: [],
  },
  dispatch: () => {},
});

export const useGameContext = () => {
  return useContext(GameContext);
};

export default GameContext;
