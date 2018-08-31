import { DeepPartial, Reducer, StoreCreator, StoreEnhancer } from 'redux'
import IStoreState from 'store/IStoreState'

const round = (numberToRound: number) => Math.round(numberToRound * 100) / 100

/**
 * @function: monitorReducerEnhancer -- to monitor reducer executes time
 * @description:
 *   Monitor the execution time of the reducer in redux to facilitate 
 *   performance optimization.
 *
 * @param {StoreCreator} createStore
 */
const monitorReducerEnhancer = (createStore: StoreCreator) => (
  reducer: Reducer,
  initialState: DeepPartial<IStoreState>,
  enhancer: StoreEnhancer
) => {
  const monitoredReducer = (state: IStoreState, action: any) => {
    const start = performance.now()
    const newState = reducer(state, action)
    const end = performance.now()
    const diff = round(end - start)

    console.log('reducer action: ', action, ' process time: ', diff)

    return newState
  }

  return createStore(monitoredReducer, initialState, enhancer)
}

export default monitorReducerEnhancer
