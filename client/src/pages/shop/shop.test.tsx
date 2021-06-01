import { shallow, ShallowWrapper } from 'enzyme'
import configureStore from 'redux-mock-store'

import ShopPage from './shop.component'
import ProvidersWrapper from '../../ProvidersWrapper'

describe('ShopPage', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    const mockStore = configureStore()
    const store = mockStore({})
    wrapper = shallow(
      <ProvidersWrapper store={store}>
        <ShopPage />
      </ProvidersWrapper>,
    )
  })

  it('should render ShopPage component', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
