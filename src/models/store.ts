import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import sagaPlugin from 'reactotron-redux-saga';

// Local imports
import rootReducer from './reducers';
import rootSaga from './sagas';
import { __DEV__ } from '../utils';

// Global
let sagaMonitor = null;
let sagaMiddleware = null;

sagaMiddleware = createSagaMiddleware();

// === Reactroton configs
if (__DEV__) {
  const { reactotronRedux } = require('reactotron-redux');
  const Reactotron: any = require('reactotron-react-js').default;
  Reactotron.configure().use(sagaPlugin({})).use(reactotronRedux());

  sagaMonitor = Reactotron.createSagaMonitor();
  sagaMiddleware = createSagaMiddleware({
    onError: async (error, { sagaStack }) => {
      console.log(sagaStack);
    },
    sagaMonitor,
  });
}

// Redux persist config
const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['data'],
};
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

/**
 *
 * Here we can add middleware and other stuffs usefull before creating the store
 * Store : hold the complete state of the app
 * Store should be an immutable object, but let not overkill this.
 */
let store: any = null;

// === Middlewares
const middlewareList = [sagaMiddleware];
const middlewares = applyMiddleware(...middlewareList);

store = createStore(persistedReducer, compose(middlewares));
if (__DEV__) {
  const Reactotron: any = require('reactotron-react-js').default;
  store = createStore(persistedReducer, compose(middlewares, Reactotron.createEnhancer()));
}

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { persistor, store };
