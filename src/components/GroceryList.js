import React from 'react'
import List from  './List';
import Button from './Button';
import { StyledGroceryList } from './styles/GroceryList.styled';
import { ThemeProvider } from 'styled-components';

const theme = {
  colorsGroceryList: {
    oddRows: '#E28784',
    evenRows: '#F5B9C1'
  }
}

const GroceryList = ({groceryListItems, onHandleClickGroceryItem, callback}) => {
  return (
    <ThemeProvider theme = {theme}>
    <div>
        <h1>Grocery List</h1>
        <Button text="Add" callback={callback} />
        <List items={groceryListItems} onHandleClickGroceryItem={onHandleClickGroceryItem}/>
    </div> 
    </ThemeProvider>
  )
}

export default GroceryList