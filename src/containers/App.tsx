import { changeDeviceType } from 'actions/app/appAction'
import _ from 'lodash';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import IStoreState from 'store/IStoreState'
import { Dispatch } from '../../node_modules/redux'

interface IStateProps {
  isMobile: boolean
}

interface IDispatchProps {
  handleChangeDeviceType: (isMobile: boolean) => void
}

type IApp = IStateProps & IDispatchProps

class App extends Component<IApp> {
  constructor(props: IApp) {
    super(props)
    this.getClientWidth()

    window.onresize = _.throttle(this.getClientWidth, 200)
  }

  public getClientWidth = () => {
    const clientWidth = document.body.clientWidth
    this.props.handleChangeDeviceType(clientWidth <= 768)
  }

  public render() {
    return <div />
  }
}

const mapStateToProps = (state: IStoreState): IStateProps => {
  const { isMobile } = state.app
  return {
    isMobile
  }
}

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => {
  return {
    handleChangeDeviceType: (isMobile: boolean) => dispatch(changeDeviceType(isMobile))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
