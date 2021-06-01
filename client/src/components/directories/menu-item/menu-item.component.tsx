import { RouteComponentProps, withRouter } from 'react-router-dom'
import {
  BackgroundImageContainer,
  ContentContainer,
  ContentSubtitle,
  ContentTitle,
  MenuItemContainer,
} from './menu-item.styles'

export type MenuItemProps = {
  title: string
  imageUrl: string
  linkUrl: string
  size?: string
}
const MenuItem = ({
  title,
  imageUrl,
  linkUrl,
  size,
  history,
  match,
}: MenuItemProps & RouteComponentProps) => {
  return (
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <BackgroundImageContainer className="background-image" imageUrl={imageUrl} />
      <ContentContainer className="content">
        <ContentTitle className="title">{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle className="subtitle">SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  )
}

export default withRouter(MenuItem)
