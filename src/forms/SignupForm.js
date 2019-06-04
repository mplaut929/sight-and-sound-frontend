import React from 'react'
import { Button, Image, Container, Divider } from 'semantic-ui-react'




class SignupForm extends React.Component {
	state = {
		username: "",
		password: "",
		passwordConfirmation: "",
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	createUser = () => {
		fetch("https://sight-and-sound.herokuapp.com/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json",
			},
			body: JSON.stringify(this.state)
		})
		.then(res => res.json())
		.then((response) => {
      console.log(response)
			if (response.errors){
				alert(response.errors)
			} else {
				this.props.setCurrentUser(response)
			}
		})
	}

	handleSubmit = (e) => {
    e.preventDefault()
		if(this.state.password === this.state.passwordConfirmation){
			this.createUser()
		} else {
			alert("Passwords don't match!")
		}
	}



  render(){
  		return (
				<div>
          <Container id="imageContainer">
            <Image id="image" src='/Logo.png' fluid/>
          </Container>
          <Container id="signupContainer">
						<div class='ui middle aligned center aligned grid'>
							<div class='column'>
								<h2 class='ui image header'>
									<div class='content'>
										Signup
									</div>
								</h2>
								<form onSubmit={this.handleSubmit} id="form" class='ui large form'>
									<div class='ui stacked secondary segment'>
										<div class='field'>
											<div class='ui left icon input'>
												<i class="user icon"></i>
												<input required onChange={this.handleChange} name="username" value={this.state.username} placeholder='Username' />
											</div>
										</div>
										<div class='field'>
											<div class='ui left icon input'>
												<i class='lock icon'></i>
												<input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder='Password' />
											</div>
										</div>
										<div class='field'>
											<div class='ui left icon input'>
												<i class='lock icon'></i>
												<input onChange={this.handleChange} type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} placeholder='Password Confirmation' />
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

  export default SignupForm
