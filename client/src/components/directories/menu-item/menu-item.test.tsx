import { shallow, ShallowWrapper } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import MenuItem from './menu-item.component'

describe('MenuItem', () => {
  let wrapper: ShallowWrapper
  const imageUrl = 'testImageUrl'
  const linkUrl = 'testLinkUrl'
  const title = 'testTitle'
  const size = 'testSize'

  beforeEach(() => {
    wrapper = shallow(
      <BrowserRouter>
        <MenuItem title={title} linkUrl={linkUrl} imageUrl={imageUrl} size={size} />
      </BrowserRouter>,
    )
  })

  it('should render MenuItem component', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
