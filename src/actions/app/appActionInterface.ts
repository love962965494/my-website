export enum AppActionTypeKeys {
  CHANGE_DEVICE_TYPE = 'CHANGE_DEVICE_TYPE'
}

export interface IChangeDeviceType {
  type: AppActionTypeKeys.CHANGE_DEVICE_TYPE
  isMobile: boolean
}

type AppActionTypes = IChangeDeviceType

export default AppActionTypes