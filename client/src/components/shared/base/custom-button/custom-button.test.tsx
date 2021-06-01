import { shallow, ShallowWrapper } from 'enzyme'
import configureStore from 'redux-mock-store'
import ProvidersWrapper from '../../../../ProvidersWrapper'

import CustomButton from './custom-button.component'

describe('CustomButton', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    const mockStore = configureStore()
    const store = mockStore({})
    wrapper = shallow(
      <ProvidersWrapper store={store}>
        <CustomButton />
      </ProvidersWrapper>,
    )
  })

  it('should render CustomButton component', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
