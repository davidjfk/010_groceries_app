import React from 'react'
import List from  './List';
import Inputfield from './Inputfield';
import Button from './Button';
import { StyledFormWithFlexbox } from './styles/Flex.styled';
import { StyledGroceryList } from './styles/GroceryList.styled';
import { ThemeProvider } from 'styled-components';
import ButtonSubmitForm from './ButtonSubmitForm';
import { useState } from 'react'

const theme = {
  colorsGroceryList: {
    oddRows: '#E28784',
    evenRows: '#F5B9C1'
  }
}

const GroceryList = ({groceryListItems, onHandleClickGroceryItem, onAddToGroceryList}) => {
  const[text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text) {
      alert('please add grocery list item')
      return
    }

    onAddToGroceryList(text)

  }
  return (
    <ThemeProvider theme = {theme}> 
    <div>
        <h1>Grocery List</h1>
        
          <form onSubmit={onSubmit}>
            <StyledFormWithFlexbox>
              <Inputfield text={text} onSetText={setText}/>
              <ButtonSubmitForm text='Add'/>
            </StyledFormWithFlexbox> 
          </form>
        <List items={groceryListItems} onHandleClickGroceryItem={onHandleClickGroceryItem}/>
    </div> 
    </ThemeProvider>
  )
}

export default GroceryList