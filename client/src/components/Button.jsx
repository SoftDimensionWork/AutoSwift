import React from 'react'

function Button({text}) {
  return (
    <div className='py-2 px-6 bg-black text-lg font-semibold rounded-lg text-white'>
        {text}
    </div>
  )
}

export default Button