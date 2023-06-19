import React from 'react'
import './FloatingDiv.css'

function FloatingDiv({picture, txt1, txt2}) {
  return (
    <div className='floatingdiv'>
        <img src={picture} alt="" />
        <span>
            {txt1}
            <br/>
            {txt2}
        </span>
    </div>
  )
}

export default FloatingDiv