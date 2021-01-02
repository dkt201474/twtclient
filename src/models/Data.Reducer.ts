import { createReducer, resettableReducer } from 'reduxsauce';
import { Action } from '../types';

import { DATA_ACTIONS } from './actions';

const INITIAL_STATE = {
  timeline: [],
  currentUser: 'realDonaldTrump',
};

// actions resolvers
const updateTimeline = (state = INITIAL_STATE, action: Action) => ({ ...state, timeline: action.payload });
const updateCurrentUser = (state = INITIAL_STATE, action: Action) => ({ ...state, currentUser: action.payload });

const resettable = resettableReducer(DATA_ACTIONS.reset().type);
const reducer = createReducer(INITIAL_STATE, {
  [DATA_ACTIONS.updateTimeline().type]: updateTimeline,
  [DATA_ACTIONS.updateCurrentUser().type]: updateCurrentUser,
});

export default resettable(reducer);
