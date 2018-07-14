import React from 'react'
import Loadable from 'react-loadable'

const importComponent = (filePath: string) =>
  Loadable({
    loader: () => import('../containers/' + filePath),
    loading: () => <div />
  })

export default importComponent
