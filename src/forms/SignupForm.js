import React from 'react'



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
		fetch("http://localhost:3000/users", {
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
  			<form onSubmit={this.handleSubmit}>
  		      <label>Username</label>
  		      <input onChange={this.handleChange} name="username" value={this.state.username} placeholder='Username' />
  		      <label>Password</label>
  		      <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder='Password' />
  		      <label>Password Confirmation</label>
  		      <input onChange={this.handleChange} type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} placeholder='Password Confirmation' />
  		    <button type='submit'>Submit</button>
  		  </form>
  		)
  	}
  }

  export default SignupForm
