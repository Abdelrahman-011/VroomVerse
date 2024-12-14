import React from 'react'
import propTypes from 'prop-types'
import {text} from "@fortawesome/fontawesome-svg-core";


Button.prototype = {
    text : propTypes.string.isRequired,
    onClick: propTypes.func,
    type: propTypes.oneOf(["'button', 'submit', 'reset'"]),
    className: propTypes.string,
}



export default function Button({ text, onClick, type = 'button', className = '' }) {
    return (
       <button type={type}
       onClick={onClick}
       className={`bg-[--main-color] btn ${className}`}
       >
           {text}
       </button>
    )
}

