import React, { useState } from 'react'
import UserList from './components/Users/UserList'
import Users from './components/Users/Users'

function App() {
  const [users,setUsers] = useState([])
  const addUserHandler =(name,age) =>{
    setUsers([...users,{name,age,id:Math.random().toString()}])
    console.log(users);
  }
  const getFilteredDataHandler = (filteredData) =>{
    setUsers(filteredData)
  }
	return (
		<div>
			<Users onAddUser={addUserHandler}/>
      <UserList onGetFilteredData = {getFilteredDataHandler} users = {users}/>
		</div>
	)
}

export default App
