import React, { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'
import classes from './Users.module.css'

const Users = (props) => {
	const [userName, setUserName] = useState('')
	const [age, setAge] = useState('')
    const [errorModal,setErrorModal] = useState(null)

	const userNameChangeHandler = (e) => {
		setUserName(e.target.value)
	}
	const ageChangeHandler = (e) => {
		setAge(e.target.value)
	}

	const addUserHandler = (e) => {
		e.preventDefault()
		if (userName.trim().length === 0 || age.trim().length === 0) {
            setErrorModal({
                title : 'Invalid input',
                massage : 'Please enter a valid name and age'
            })
			return
		}
		if (+age < 1) {
            setErrorModal({
                title : 'Invalid input',
                massage : 'Please enter a valid name and age (> 0)'
            })
			return
		}
		props.onAddUser(userName, age)
		setUserName('')
		setAge('')
	}

    const errorHandler = () =>{
        setErrorModal(null)
    }

	return (
		<div>
           {errorModal &&  <ErrorModal massage={errorModal.massage} title = {errorModal.title} onConfirm={errorHandler}/>}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor='username'>Username</label>
					<input
						id='username'
						type='text'
						value={userName}
						onChange={userNameChangeHandler}
					/>
					<label htmlFor='age'>Age</label>
					<input
						id='age'
						type='number'
						value={age}
						onChange={ageChangeHandler}
					/>
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</div>
	)
}

export default Users
