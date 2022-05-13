import React, { Component } from 'react'
import ListItem from './ListItem'

class List extends Component {
  constructor() {
    super(); 
    this.state = {groceryItems: 
      [  
        { id: 1, title: "Appels" },
        { id: 2, title: "Carton of milk" },
        { id: 3, title: "cabbage" }
      ]}
  }
  
  clickItem = (item) => {console.log(`Clicked ${item.id}: ${item.title}`)}
  
  render() {
    const groceries = this.state.groceryItems.map(item => ( 
      <ListItem 
        key={item.id} 
        item={item} 
        onClick={this.clickItem(item)}/>)
    )

    return (
      <div>
        <ul>
          {groceries}
        </ul>
      </div>
    )
  }
}

export default List