import ActionTypes from 'actions/ActionTypes'
import { DeepPartial, Reducer, StoreCreator, StoreEnhancer } from 'redux'
import IStoreState from 'store/IStoreState'

const round = (roundNumber: number) => Math.floor(roundNumber * 100) / 100

/**
 * @function: monitorReducerEnhancer To monitor the execution time of reducer
 * @description:
 *   The execution time of reducer in redux is monitored to facilitate performance optimization.
 * 
 * @param {StoreCreator} createStore
 */
const monitorReducerEnhancer = (createStore: StoreCreator) => (
  reducer: Reducer,
  initialState: DeepPartial<any>,
  enhancer: StoreEnhancer
) => {
  const monitorReducer = (state: IStoreState, action: ActionTypes) => {
    const start = performance.now()
    const newState = reducer(state, action)
    const end = performance.now()
    const diff = round(end - start)

    console.log('reducer process time: ', diff)

    return newState
  }

  return createStore(monitorReducer, initialState, enhancer)
}

export default monitorReducerEnhancer
