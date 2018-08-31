import Middlewares from 'middlewares'
import rootReducers from 'reducers'
import monitorReducerEnhancer from 'reducers/monitorReducer'
import { applyMiddleware, combineReducers, createStore, Reducer, StoreEnhancer } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import IStoreState from './IStoreState'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(defaultStore: IStoreState) {
  const middlewares = [...Middlewares, sagaMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers =
    process.env.NODE_ENV !== 'production' ? [middlewareEnhancer, monitorReducerEnhancer] : [middlewareEnhancer]
  const composedEnhancers: StoreEnhancer = composeWithDevTools(...enhancers)

  const store = createStore(rootReducers, defaultStore, composedEnhancers)

  // hot reload
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer: Reducer<IStoreState, any> = combineReducers(require('../reducers'))
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
