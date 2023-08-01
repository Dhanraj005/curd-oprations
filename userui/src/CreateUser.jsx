import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const [product,setProduct]=useState()
    const [email,setEmail]=useState()
    const [price,setPrice]=useState()
const nevigate = useNavigate();


const handleSubmit =(e)=>{
     e.preventDefault()
     axios.post("http://localhost:3001/createProduct",{product,email,price})
     .then(result=>{console.log(result)
        nevigate('/');
    })
     .catch(err => console.log(err))
}

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center aling-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Add User</h2>
                <div className='mb-2'>
                    <label htmlFor=''>Name</label>
                    <input type='text' placeholder='Enter Product' className='form-control' onChange={(e)=>setProduct(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Email</label>
                    <input type='text' placeholder='Enter Email' className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Age</label>
                    <input type='text' placeholder='Enter Age' className='form-control' onChange={(e)=>setPrice(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
        

    </div>
  )
}

export default CreateUser