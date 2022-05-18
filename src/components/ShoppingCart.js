import React from 'react'
import List from  './List';
import Button from './Button';
import { ThemeProvider } from 'styled-components';
import { StyledFlexBoxInForm } from './styles/FlexboxInForm.styled';

const theme = {
  colorsShoppingCart: {
    oddRows: '#B5D7E2',
    evenRows:'#E5FFFD'
  }
}
const ShoppingCart = ({shoppingCartItems, callback}) => {
  return (
    <ThemeProvider theme = {theme}>
    <div>
      <h1>Shopping cart</h1>
        <StyledFlexBoxInForm marginLeft={"20rem"} marginRight={"20rem"}>
          <Button text="Empty the shopping cart" callback={callback} />
        </StyledFlexBoxInForm>
        <List items={shoppingCartItems} />
    </div>
    </ThemeProvider>
  )
}

export default ShoppingCart 