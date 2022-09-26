import React from 'react'
import Button from '../Button/Button.jsx'

function DoubleButtons(props) {
  return (
    <div className='doubleButtons'>
        <Button text={props.firstButton.text} type={props.firstButton.type}/>
        <Button text={props.secondButton.text} type={props.secondButton.type}/>
    </div>
  )
}

export default DoubleButtons