import React, { Component } from 'react'
import { StyledList } from './styles/List.styled'

import ListItem from './ListItem'

class List extends Component {
  constructor() {
    super()
    this.state = {
      // bla: this.props.onHandleClickGroceryItem
    }
  }

  
  
  render() {
    const itemsToDisplay = this.props.items.map(item => 
      <ListItem 
        key={item.id}  
        item={item} 
        onHandleClickGroceryItem={this.props.onHandleClickGroceryItem}
        /> 
    )

    return (  
        <StyledList>
          {itemsToDisplay}
        </StyledList>   
    )
  }
}

export default List