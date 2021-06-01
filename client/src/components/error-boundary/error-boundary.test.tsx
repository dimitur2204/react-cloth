import { shallow, ShallowWrapper } from 'enzyme'
import configureStore from 'redux-mock-store'
import ProvidersWrapper from '../../ProvidersWrapper'

import ErrorBoundary from './error-boundary.component'

describe('ErrorBoundary', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    const mockStore = configureStore()
    const store = mockStore({})
    wrapper = shallow(
      <ProvidersWrapper store={store}>
        <ErrorBoundary />
      </ProvidersWrapper>,
    )
  })

  it('should render ErrorBoundary component', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
