import React from 'react'
import { StyledListItem } from './styles/ListItem.styled'

const ListItem = ({item, onHandleClickGroceryItem}) => {
  return (
    <StyledListItem
      key={item.id}
      className="list-item"
      value={item.title}
      onClick={onHandleClickGroceryItem}
    >
      {item.title}
    </StyledListItem>
  )
}

export default ListItem