import { shallow, ShallowWrapper } from 'enzyme'
import configureStore from 'redux-mock-store'
import ProvidersWrapper from '../../../../ProvidersWrapper'

import FormInput from './form-input.component'

describe('FormInput', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    const mockStore = configureStore()
    const store = mockStore({})
    wrapper = shallow(
      <ProvidersWrapper store={store}>
        <FormInput />
      </ProvidersWrapper>,
    )
  })

  it('should render FormInput component', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
