import React from 'react'
import { Button, Image, Container, Divider } from 'semantic-ui-react'


class LoginForm extends React.Component {
	state = {
		username: "",
		password: "",
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (e) => {
    e.preventDefault()
		fetch("http://localhost:3000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json",
			},
			body: JSON.stringify(this.state)
		})
		.then(res => res.json())
		.then(response => {
			if (response.errors){
				// if there are erros, crap, the response is an error
				alert(response.errors)
			} else {
				// if there are no errors, great, the response is a user object
				this.props.setCurrentUser(response)
			}
		})
	}

	render(){
		return (
			<div>
				<Container id="imageContainer">
					<Image id="image" src='/Logo.png' fluid/>
				</Container>
				<Container id="loginContainer">
			<form onSubmit={this.handleSubmit}>
		      <label>Username</label>
		      <input onChange={this.handleChange} name="username" value={this.state.username} placeholder='Username' />
		      <label>Password</label>
		      <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder='Password' />
		    <button type='submit'>Submit</button>
		  </form>
			</Container>
		</div>
		)
	}
}

export default LoginForm
