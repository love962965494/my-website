import ActionTypes from 'actions/ActionTypes'
import { AppActionTypeKeys } from 'actions/app/appActionInterface'
import InitialState from './InitialState'

const { CHANGE_DEVICE_TYPE } = AppActionTypeKeys

/**
 * @function: appReducer The reducer about app state
 * @description:
 *   Changing the state value depending on different action type.
 *
 * @param {*} [state=InitialState.app]
 * @param {ActionTypes} action
 * @returns
 */
const appReducer = (state = InitialState.app, action: ActionTypes) => {
  switch (action.type) {
    case CHANGE_DEVICE_TYPE: {
      return { ...state, isMobile: action.isMobile }
    }
    default: {
      return state
    }
  }
}

export default appReducer
