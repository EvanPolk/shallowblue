import actionTypes from './actionTypes';

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.GENERATE_CANDIDATE_MOVES: {
      const potentialMoves = action.payload;
      return {
        ...state,
        ...potentialMoves,
      };
    }
  }
};
