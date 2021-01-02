import { createReducer, resettableReducer } from 'reduxsauce';

import { UI_ACTIONS } from './actions';

const INITIAL_STATE = {
  loading: false,
};

// actions resolvers
const startLoading = (state = INITIAL_STATE) => ({ ...state, loading: true });
const stopLoading = (state = INITIAL_STATE) => ({ ...state, loading: false });

const resettable = resettableReducer(UI_ACTIONS.reset().type);
const reducer = createReducer(INITIAL_STATE, {
  [UI_ACTIONS.startLoading().type]: startLoading,
  [UI_ACTIONS.stopLoading().type]: stopLoading,
});

export default resettable(reducer);
