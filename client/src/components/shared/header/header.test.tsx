import { shallow, ShallowWrapper } from 'enzyme'
import configureStore from 'redux-mock-store'
import ProvidersWrapper from '../../../ProvidersWrapper'

import Header from './header.component'

describe('Header', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    const mockStore = configureStore()
    const store = mockStore({})
    wrapper = shallow(
      <ProvidersWrapper store={store}>
        <Header />
      </ProvidersWrapper>,
    )
  })

  it('should render Header component', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
