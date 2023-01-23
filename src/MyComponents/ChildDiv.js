import React from 'react'
export default function ChildDiv(props) {

  if (props.field) {
    return (
      <div className='ChildDiv' style={props.style}>
        <input placeholder='Enter any text' type='text'
          value={props.value}
          onChange={(event) => props.onChange(event.target.value)} />
      </div>
    )
  }

  else {
    return (
      <div className='ChildDiv' style={props.style}>
        <input type='checkbox' checked={props.checked}
          onClick={(event) => props.onClick(event.target.checked)} />
      </div>
    )
  }

}
