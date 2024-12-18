/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext } from 'react';

interface AppState {
  position: string[][];
  turn: string;
  potentialMoves: number[][];
  selectedPiece: number[];
  attackMap: number[];
}

interface Action {
  type: string;
  payload: any;
}

interface Value {
  appState: AppState;
  dispatch: React.Dispatch<Action>;
}

const GameContext = createContext<Value>({
  appState: {
    position: [],
    turn: '',
    potentialMoves: [],
    selectedPiece: [],

    attackMap: [],
  },
  dispatch: () => {},
});

export const useGameContext = () => {
  return useContext(GameContext);
};

export default GameContext;
