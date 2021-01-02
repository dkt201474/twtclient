import { combineReducers } from 'redux';

// Modules reducers
import ui from './UI.Reducer';
import data from './Data.Reducer';

// Root Reducer
export default combineReducers({ ui, data });
