import { shallow, ShallowWrapper } from 'enzyme'
import configureStore from 'redux-mock-store'
import ProvidersWrapper from '../../../ProvidersWrapper'

import Directory from './directory.component'

describe('Directory', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    const mockStore = configureStore()
    const store = mockStore({})
    wrapper = shallow(
      <ProvidersWrapper store={store}>
        <Directory />
      </ProvidersWrapper>,
    )
  })

  it('should render Directory component', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
