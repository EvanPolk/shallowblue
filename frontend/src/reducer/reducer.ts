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

    case actionTypes.FILTER_VALID_MOVES: {
      const potentialMoves = action.payload;
      return {
        ...state,
        ...potentialMoves,
      };
    }

    case actionTypes.CLEAR_CANDIDATES: {
      const potentialMoves = action.payload;
      return {
        ...state,
        ...potentialMoves,
      };
    }

    case actionTypes.MOVE_PIECE: {
      const position = action.payload;
      return {
        ...state,
        ...position,
      };
    }

    case actionTypes.SELECT_PIECE: {
      const selectedPiece = action.payload;
      return {
        ...state,
        ...selectedPiece,
      };
    }

    case actionTypes.TOGGLE_TURN: {
      const turn = action.payload;
      return {
        ...state,
        ...turn,
      };
    }
  }
};
