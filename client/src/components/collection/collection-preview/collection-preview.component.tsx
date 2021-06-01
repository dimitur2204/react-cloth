import { Item } from '../../../pages/shop/shop.component'
import CollectionItem from '../collection-item/collection-item.component'
import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer,
} from './collection-preview.styles'

export type CollectionPreviewProps = {
  title: string
  items: Item[]
}

const NUMBER_OF_ITEMS = 4

const CollectionPreview = ({ title, items }: CollectionPreviewProps) => (
  <CollectionPreviewContainer className="collection-preview">
    <TitleContainer className="title">{title.toUpperCase()}</TitleContainer>
    <PreviewContainer className="preview">
      {items.slice(0, NUMBER_OF_ITEMS).map((i) => (
        <CollectionItem key={i.id} item={i}></CollectionItem>
      ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
)

export default CollectionPreview
