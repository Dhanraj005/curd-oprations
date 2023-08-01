import React, { useEffect, useState } from 'react'
import { useParams, useNavigate  } from 'react-router-dom'
import axios from 'axios'

function UpdateUser() {
const {id} = useParams()
const [product,setProduct]=useState()
const [email,setEmail]=useState()
const [price,setPrice]=useState()
const nevigate = useNavigate();

useEffect(()=>{
    axios.get('http://localhost:3001/getProduct/'+id)
    .then(result =>{ console.log(result)
        setProduct(result.data.product)
        setEmail(result.data.email)
        setPrice(result.data.price)
    
    })
    .catch(err=>console.log(err))
  },[])

  const handleUpdate =(e)=>{
    e.preventDefault()
    axios.put("http://localhost:3001/updateProduct/"+id,{product,email,price})
     .then(result=>{console.log(result)
        nevigate('/');
    })
     .catch(err => console.log(err))
  }

  return (
    
    <div className='d-flex vh-100 bg-primary justify-content-center aling-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleUpdate}>
                <h2>Update User</h2>
                <div className='mb-2'>
                    <label htmlFor=''>Name</label>
                    <input type='text' placeholder='Enter Product' className='form-control' value={product} onChange={(e)=>setProduct(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Email</label>
                    <input type='text' placeholder='Enter Email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Age</label>
                    <input type='text' placeholder='Enter Age' className='form-control' value={price} onChange={(e)=>setPrice(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
        </div>
        

    </div>
    
  )
}

export default UpdateUser