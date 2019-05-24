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
					<div class='ui middle aligned center aligned grid'>
						<div class='column'>
							<h2 class='ui image header'>
								<div class='content'>
									Login
								</div>
							</h2>
							<form onSubmit={this.handleSubmit} id="form" class='ui large form'>
								<div class='ui stacked secondary segment'>
									<div class='field'>
										<div class='ui left icon input'>
											<i class="user icon"></i>
					      			<input onChange={this.handleChange} name="username" value={this.state.username} placeholder='Username' />
										</div>
									</div>
									<div class='field'>
										<div class='ui left icon input'>
											<i class='lock icon'></i>
											<input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder='Password' />
										</div>
									</div>
									<button class="ui fluid large submit button" type='submit'>Submit</button>
								</div>
				  		</form>
						</div>
					</div>
			</Container>
		</div>



		)
	}
}

export default LoginForm
