import React from 'react'

function Button({onSubmit}) {
  return (
    <button className='btn btn-primary' aria-label='button to search new city' onClick={onSubmit} />
   
  )
}

export default Button
