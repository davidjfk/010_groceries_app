import React from 'react'
import { StyledInputField } from './styles/Inputfield.styled'


const Inputfield = ({text, onSetText}) => {
    
    return (  
        <StyledInputField 
          type='text'
          placeholder='Please enter grocery item'
          value={text}
          onChange={(e) => onSetText(e.target.value)}
        />  
  )
}

export default Inputfield