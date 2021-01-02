import { Action } from '../types';

export const UI_ACTIONS = {
  // Action to dispatch to set ui reducer to the initial state
  reset: () => ({ type: '@UI/reset' }),
  startLoading: () => ({ type: '@UI/startLoading' }),
  stopLoading: () => ({ type: '@UI/stopLoading' }),
};

export const DATA_ACTIONS = {
  // Reducers
  updateCurrentUser: (payload = ''): Action => ({ type: '@UI/updateCurrentUser', payload }),
  reset: () => ({ type: '@DATA/reset' }),
  updateTimeline: (payload = []): Action => ({ type: '@UI/updateTimeline', payload }),

  // Sagas
  initAsync: () => ({ type: '@DATA/SAGA/init' }),
  changeTimelineAsync: (currentUser = '') => ({ type: '@DATA/SAGA/changeTimeline', currentUser }),
};
