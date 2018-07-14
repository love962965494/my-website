import Page from 'containers/Page'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import InitialState from 'reducers/InitialState'
import registerServiceWorker from 'registerServiceWorker'
import configureStore from 'store/configureStore'
import './index.css'

const store = configureStore(InitialState)

const renderPage = (Content: typeof Page) => {
  ReactDOM.render(
    <Provider store={store}>
      <Content />
    </Provider>,
    document.getElementById('root') as HTMLElement
  )
}

// hot reload
if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./containers/Page.tsx', () => {
    const NextPage = require('./containers/Page').default
    renderPage(NextPage)
  })
}

renderPage(Page)
registerServiceWorker()
