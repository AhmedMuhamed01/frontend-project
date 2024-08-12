import React, { Fragment, useState , useEffect } from 'react'

const Effect = () => {
    const [x , setX] = useState(0)
    const [y , setY]= useState(0)
    useEffect(()=>{
        window.addEventListener('mousemove' , (m)=>{
          setX(m.clientX)
          setY(m.clientY)
        })
    })
   return (
    <Fragment>
      <h1> {x} ------- {y}</h1>
    </Fragment>
  )
}

export default Effect