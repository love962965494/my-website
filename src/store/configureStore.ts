import Middlewares from 'middlewares'
import rootReducer from 'reducers'
import monitorReducerEnhancer from 'reducers/monitorReducer'
import { applyMiddleware, combineReducers, createStore, StoreEnhancer } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import IStoreState from './IStoreState'

export default function configureStore(preloadState: IStoreState) {
  const middlewares = [...Middlewares, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducerEnhancer]
  const composedEnhancers: StoreEnhancer = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, preloadState, composedEnhancers)

  // hot reload
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = combineReducers(require('../reducers'))
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
