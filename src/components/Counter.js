import React from 'react'
import { Fragment , useState } from 'react'

const Counter = () => {
    const [count , setCount] = useState(0)
  return (
    <Fragment>
    <h1>counter :{count} </h1>
    <button onClick={()=> setCount(count + 1)}> increment </button>
    <button onClick={()=> setCount(count - 1)}> decrement</button>
    <button onClick={()=> setCount( 0 )}> Reset</button>
    </Fragment>
  )
}

export default Counter