import React from 'react'

function Product({naam}) {
  return (
    <div className='text-white w-full h-60 bg-zinc-800'>
    <h1>{naam}</h1>
    </div>
  )
}

export default Product
