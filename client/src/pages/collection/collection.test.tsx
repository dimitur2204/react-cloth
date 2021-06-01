import { shallow, ShallowWrapper } from 'enzyme'
import ProvidersWrapper from '../../ProvidersWrapper'
import configureStore from 'redux-mock-store'

import CollectionPage from './collection.component'

describe('CollectionPage', () => {
  let wrapper: ShallowWrapper
  const mockStore = configureStore()
  const store = mockStore({})
  beforeEach(() => {
    wrapper = shallow(
      <ProvidersWrapper store={store}>
        <CollectionPage />
      </ProvidersWrapper>,
    )
  })

  it('should render the CollectionPage component', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
