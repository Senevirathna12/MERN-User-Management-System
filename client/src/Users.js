import React, { useEffect, useState } from 'react';
import UserForm from './UserForm';
import UsersTable from './UsersTable';
import { Box } from '@mui/material';
import  axios from "axios";


const Users = () => {

  const [users, setUsers] = useState([]);
  const [submitted , setSubmitted] = useState(false);
  const [isEdit ,setIsEdit] = useState(false);
  const [selectedUser ,setSelectedUser] = useState(null);

  useEffect(() => {
    getUsers();
  },[]);         // [] use for , this function only render while  app is loading

 

  const getUsers = () => {
    axios.get('http://localhost:3001/user/')
      .then((response) => {
          setUsers(response.data);
      })
      .catch((err) => {
        console.error("axios error :",err);
      })
  }


  const addUser = (data) => {

    setSubmitted(true);
    
    const payload = {
        regno : data.regno,
        name : data.name
    }

    axios.post("http://localhost:3001/user/add",payload)
      .then(() => {
        getUsers();
        setSubmitted(false);
        setIsEdit(false);
      })
      .catch((err) => {
        console.error("axios error :",err);
      })
  }

  const updateUser = (data) =>{

    setSubmitted(true);

    const payload = {

      _id: data._id,
      regno : data.regno,
      name : data.name
    }

    axios.put(`http://localhost:3001/user/update/${data._id}`, payload) // Use _id in the URL
    .then(() => {
      getUsers();
      setSubmitted(false);
      setIsEdit(false);
    })
    .catch((err) => {
      console.error("axios error :",err);
    })
  }
  
  const deleteUser = (data) => {

    axios.delete(`http://localhost:3001/user/delete/${data._id}`,data ) // Use _id in the URL
    .then(() => {
      getUsers();
    })
    .catch((err) => {
      console.error("axios error :",err);
    })
  }


  return (
    <Box
      sx={{
        width:'calc(100%-100px)',
        margin:'auto',
        marginTop:'100px'
      }}
    >
      <UserForm 
        addUser ={addUser}
        submitted = {submitted}
        data = {selectedUser}
        isEdit ={isEdit}
        updateUser = {updateUser}
      />

      <UsersTable 

        rows={users}

        selectedUser = {(data) => {
          setSelectedUser(data);
          setIsEdit(true);
        }}

        deleteUser = {(data)=>{
          window.confirm('Are You Shure?') && deleteUser(data);
        }}
        
      />

    </Box>
  )
}

export default Users;
