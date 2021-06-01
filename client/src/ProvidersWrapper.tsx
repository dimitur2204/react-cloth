import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

export interface ProvidersWrapperProps {
  store: any
}

const ProvidersWrapper = ({ children, store }: PropsWithChildren<ProvidersWrapperProps>) => (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  </React.StrictMode>
)

export default ProvidersWrapper
