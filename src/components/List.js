import React, { Component } from 'react'
import ListItem from './ListItem'

class List extends Component {
  render() {
    return (
      <ul>
        <ListItem title = "apples" />
        <ListItem title = "Carton of milk" />
        <ListItem title = "cabbage" />
      </ul>
    )
  }
}

export default List