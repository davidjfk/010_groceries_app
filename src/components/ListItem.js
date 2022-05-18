import React from 'react'
import { StyledListItem } from './styles/ListItem.styled'

const ListItem = ({item, onHandleClickGroceryItem}) => {
  return (
    <StyledListItem
      key={item.id}
      value={item.title}
      onClick={onHandleClickGroceryItem}
    >
      <div class="list-item-title">{item.title}</div>
      {item.amount ? <div>Amount: {item.amount}</div> : <div></div>}
    </StyledListItem>
  )
}

export default ListItem