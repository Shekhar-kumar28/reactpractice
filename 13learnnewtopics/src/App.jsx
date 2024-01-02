import React, { useState } from 'react'
import Product from './Product'

const App = () => {
  var [a, b] = useState(89)
  return (
    <div className='w-full h-screen bg-zinc-900 text-white p-5'>
      <Product naam="value"/>
    </div>
  )
}

export default App
