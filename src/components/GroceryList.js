import React from 'react'
import List from  './List';
import Inputfield from './Inputfield';
import { StyledFlexBoxInForm } from './styles/FlexboxInForm.styled';
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

    
    const isItemAreadyOnGroceryList = groceryListItems.find((item) => item.title === text);
    if(isItemAreadyOnGroceryList) {
      alert('item is already on grocery list')
      return
    }

    onAddToGroceryList(text)

  }
  return (
    <ThemeProvider theme = {theme}> 
    <div>
        <h1>Grocery List</h1>
          <form onSubmit={onSubmit}>
            <StyledFlexBoxInForm marginLeft={"20rem"} marginRight={"20rem"}>
              <Inputfield text={text} onSetText={setText}/>
              <ButtonSubmitForm text='Add'/>
            </StyledFlexBoxInForm> 
            <List items={groceryListItems} onHandleClickGroceryItem={onHandleClickGroceryItem}/>
          </form>     
    </div> 
    </ThemeProvider>
  )
}

export default GroceryList