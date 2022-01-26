import React, { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import classes from './UserList.module.css'
import ErrorModal from '../UI/ErrorModal'

const UserList = (props) => {
	const [showModal, setShowModal] = useState(null)
	const [filteredUsers,setFilteredUsers] = useState()

	const deleteHandler = (e) => {
		setFilteredUsers(props.users.filter((user)=>user.id !== e.target.id))
		setShowModal({title: 'Note',massage: 'Are you sure'})
	}

	const deleteDataHandler = () =>{
		props.onGetFilteredData(filteredUsers)
		setShowModal(null)
	}

	const cancelDelete = () =>{
       setShowModal(null)
	}
	let show = <p>No Users</p>

	if(props.users.length > 0){
		show = props.users.map((user) => (
					<li key={user.id}>
						{user.name} ({user.age} years old)
						<Button id = {user.id}	className={classes.button}	onClick={deleteHandler}>Delete</Button>
					</li>
				))
	}

	return (
		<Card className={classes.users}>
			{showModal && (
				<ErrorModal	title={showModal.title}	massage={showModal.massage}	onConfirm = {deleteDataHandler}>
					<Button  onClick = {cancelDelete} >Cancel</Button>
				</ErrorModal>)}
			<ul>
				{show}
			</ul>
		</Card>
	)
}

export default UserList
