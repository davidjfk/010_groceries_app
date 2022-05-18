import React from 'react'
import PropTypes from 'prop-types'

const ButtonSubmitForm = ({text}) => {
  return (
    <button         
        style={{
          color: "black", 
          fontSize: "1rem",
          padding: "0.3rem",
          border: "2px solid black",
          }}>
            {text}
    </button>
  )
}

ButtonSubmitForm.defaultProps = {
    color: 'black',
    fontSize: '1rem',
    myBackgroundColor: '#E3E4E6',
    text: 'button text missing',
    callback: ''
}

ButtonSubmitForm.propTypes = {
    color: PropTypes.string,
    myBackgroundColor: PropTypes.string,
    text: PropTypes.string
}

export default ButtonSubmitForm