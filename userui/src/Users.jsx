import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './App.css'
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3001')
    .then(result => setUsers(result.data))
    .catch(err=>console.log(err))
  },[])

  const handleDelete=(id)=>{
    axios.delete('http://localhost:3001/deleteUser/'+id)
    .then(res=>{console.log(res)
    window.location.reload()
    
    })
    .catch(errr=>console.log(errr))
  
}

  return (
    <div
      className="d-flex vh-100 justify-content-center aling-items-center"
      style={{ backgroundColor: "#f5ebeb" }}
    >
      
      <div className="w-50 bg-white rounded p-3 mt-3 mb-3" style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
      <h1>Add Product</h1>
        <Link to="/create" className="btn btn-success">
          Add{" "}
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th className="text-align-cente">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr >
                  <td>{user.product}</td>
                  <td>{user.email}</td>
                  <td>{user.price}</td>
                  <td className="text-align-cente">
                    <Link to={`/update/${user._id}`} className="btn btn-success mr-3">
                      Update{" "}
                    </Link>
                    <button className="btn btn-outlin mr-3" style={{marginLeft: '20px', border: '1px solid #d74343'}} onClick={(e)=>handleDelete(user._id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
