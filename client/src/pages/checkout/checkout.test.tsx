import { Component } from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import CheckoutPage from './checkout.component'
import configureStore from 'redux-mock-store'
import ProvidersWrapper from '../../ProvidersWrapper'

let wrapper: ShallowWrapper
beforeEach(() => {
  const mockStore = configureStore()
  const store = mockStore({})
  wrapper = shallow<Component>(
    <ProvidersWrapper store={store}>
      <CheckoutPage />
    </ProvidersWrapper>,
  )
})

it('should render CheckoutPage component', () => {
  expect(wrapper).toMatchSnapshot()
})
