import { AppActionTypeKeys } from './appActionInterface'

const { CHANGE_DEVICE_TYPE } = AppActionTypeKeys

/**
 * @function: changeDeviceType
 * @description:
 *   When the screen resolution changes, change the device type
 *
 * @param {boolean} isMobile
 */
export const changeDeviceType = (isMobile: boolean) => ({
  type: CHANGE_DEVICE_TYPE,
  isMobile
})
