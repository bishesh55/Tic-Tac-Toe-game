import React from 'react'

function Square(props) {
  return (
    <div onClick={props.onClick} className='box-square'>
      <h4 className='font-xl'>{props.state}</h4>
    </div>
  )
}

export default Square
