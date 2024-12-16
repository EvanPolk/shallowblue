import actionTypes from '../actionTypes';

interface GenerateCandidateMovesType {
  potentialMoves: number[][];
}

export const generateCandidates = ({
  potentialMoves,
}: GenerateCandidateMovesType) => {
  return {
    type: actionTypes.GENERATE_CANDIDATE_MOVES,
    payload: { potentialMoves },
  };
};

export const clearCandidates = () => {
  return {
    type: actionTypes.CLEAR_CANDIDATES,
    payload: { potentialMoves: [] },
  };
};

interface SelectType {
  rank: number;
  file: number;
}

export const generateSelectedPiece = ({ rank, file }: SelectType) => {
  return {
    type: actionTypes.SELECT_PIECE,
    payload: { selectedPiece: [rank, file] },
  };
};

interface MoveType {
  position: string[][];
}

export const generatePostMovePosition = ({ position }: MoveType) => {
  return {
    type: actionTypes.MOVE_PIECE,
    payload: { position },
  };
};

interface TurnType {
  turn: string;
}

export const generateNewTurn = ({ turn }: TurnType) => {
  return {
    type: actionTypes.TOGGLE_TURN,
    payload: { turn },
  };
};
