import { shallow, ShallowWrapper } from 'enzyme'
import configureStore from 'redux-mock-store'

import SignInUp from './sign-in-up.component'
import ProvidersWrapper from '../../ProvidersWrapper'

describe('SignInUp', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    const mockStore = configureStore()
    const store = mockStore({})
    wrapper = shallow(
      <ProvidersWrapper store={store}>
        <SignInUp />
      </ProvidersWrapper>,
    )
  })

  it('should render SignInUp component', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
