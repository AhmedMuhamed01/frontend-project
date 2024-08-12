import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'

const Apis = () => {
    const [products , setProducts] = useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/products').then((res)=> setProducts(res.data.products)).catch((error)=>console.log(error));
    })
  return (
    <Fragment>
        <div className='products'>
        {
            products.map(el =>(
                <div key={el.id} className='singleProducts'>

                <h1>{el.title}</h1>
                <img src={el.thumbnail} alt=''/>

                </div>
            ))
        }
        </div>
    </Fragment>
  )
}

export default Apis