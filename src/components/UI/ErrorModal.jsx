import React from 'react'
import Button from './Button'
import Card from './Card'
import classes from './ErrorModal.module.css'

const ErrorModal = (props) => {
	return (
		<div>
			<div onClick={props.onConfirm} className={classes.backdrop}/>
			<Card className = {classes.modal}>
				<header className={classes.header}>
					<h2>{props.title}</h2>
				</header>
				<div className={classes.content}>
					<p>{props.massage}</p>
				</div>
				<footer className={classes.actions}>
					{props.children}
					<Button id = {props.id} onClick = {props.onConfirm}>OK</Button>
				</footer>
			</Card>
		</div>
	)
}

export default ErrorModal
