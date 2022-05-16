import React from 'react'
import PropTypes from 'prop-types'

const Button = ({text, myBackgroundColor, callback}) => {
  return (
    //2do later: replace inline styling by styled component. 
    <button         
        onClick={callback}
        style={{
          backgroundColor: myBackgroundColor, 
          color: "black", 
          fontSize: "1rem",
          padding: "0.3rem"}}>
            {text}
    </button>
  )
}

Button.defaultProps = {
    color: 'black',
    fontSize: '1rem',
    myBackgroundColor: '#E3E4E6',
    text: 'button text missing'
}

Button.propTypes = {
    color: PropTypes.string,
    myBackgroundColor: PropTypes.string,
    text: PropTypes.string
}

export default Button