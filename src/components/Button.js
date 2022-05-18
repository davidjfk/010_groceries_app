import React from 'react'
import PropTypes from 'prop-types'

const Button = ({text, myBackgroundColor, callback}) => {
  return (
    <button         
        onClick={callback}
        style={{
          backgroundColor: myBackgroundColor, 
          color: "black", 
          fontSize: "1rem",
          padding: "0.3rem",
          minWidth: "209px",
          border: "2px solid black",
          }}>
            {text}
    </button>
  )
}

Button.defaultProps = {
    color: 'black',
    fontSize: '1rem',
    myBackgroundColor: '#E3E4E6',
    text: 'button text missing',
    callback: ''
}

Button.propTypes = {
    color: PropTypes.string,
    myBackgroundColor: PropTypes.string,
    text: PropTypes.string
}

export default Button