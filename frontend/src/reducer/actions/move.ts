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
