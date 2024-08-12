import React, { Fragment, useState } from 'react'
import './form.css'
const Form = () => {
    const [user , setUser] = useState({
        fname: '',
        lname : '',
    }
        )
        const [data , setData] = useState(false)
  return (
    <Fragment>
    <div className='form'>
        <input type='text' placeholder='FirstName' value={user.fname} onChange={(u)=> setUser({...user , fname : u.target.value })}/>
        <input type='text' placeholder='LastName' value={user.lname} onChange={(u)=> setUser({...user , lname:u.target.value })}/>
        <button onClick={()=> setData(true)}> submit</button>
    </div>
     
     {
        data ? <h1>{user.fname} {user.lname}</h1> : undefined
     }
    </Fragment>
  )
}

export default Form 