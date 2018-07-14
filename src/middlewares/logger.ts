import ActionTypes from "actions/ActionTypes";
import { Dispatch, MiddlewareAPI } from "redux";

/**
 * @function: logger To print action's next state
 * @description:
 *   the state of the redux execution is printed for debugging purposes
 *
 * @param {MiddlewareAPI} store
 */
const logger = (store: MiddlewareAPI) => (next: Dispatch<ActionTypes>) => (action: ActionTypes) => {
  console.group('actionType: ', action.type)
  console.info('dispatching: ', action)
  const result = next(action)
  console.log('next state: ', store.getState())
  console.groupEnd()
  return result
}

export default logger