import React from 'react'

const ListItem = ({item, onClick}) => {
  return (
    <li
      key={item.id}
      className="list-item"
      onClick={onClick}
      value={item.title}
    >
      {item.title}
    </li>
  )
}

export default ListItem