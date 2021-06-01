import { shallow, ShallowWrapper } from 'enzyme'
import configureStore from 'redux-mock-store'
import ProvidersWrapper from '../../../ProvidersWrapper'

import Spinner from './spinner.component'

describe('Spinner', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    const mockStore = configureStore()
    const store = mockStore({})
    wrapper = shallow(
      <ProvidersWrapper store={store}>
        <Spinner />
      </ProvidersWrapper>,
    )
  })

  it('should render Spinner component', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
