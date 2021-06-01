import { useSelector } from 'react-redux'
import { selectSections } from '../../../redux/directory/directory.selectors'
import MenuItem from '../menu-item/menu-item.component'
import { DirectoryMenuContainer } from './directory.styles'

import './directory.styles.tsx'

const Directory = () => {
  const sections = useSelector(selectSections)
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </DirectoryMenuContainer>
  )
}

export default Directory
