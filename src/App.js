import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import VideoContainer from './videos/VideoContainer'
import SongContainer from './songs/SongContainer'
import LoginForm from './forms/LoginForm'
import SignupForm from './forms/SignupForm'
import './App.css';

class App extends Component {
  state = {
  		currentUser: null
  	}

  	logOut = () => {
  		localStorage.removeItem("token")
  		this.setState({
  			currentUser: null
  		}, () => {
  			this.props.history.push("/login")
  		})
  	}

  	updateUser = (updatedUser) => {
  		this.setState({
  			currentUser: updatedUser
  		})
  	}

  	componentDidMount(){
  		const token = localStorage.getItem("token")

  		if (token){
  			// load up their shit
  			fetch("http://localhost:3001/auto_login", {
  				headers: {
  					"Authorization": token
  				}
  			})
  			.then(res => res.json())
  			.then((response) => {
  				if (response.errors) {
  					alert(response.errors)
  				} else {
  					this.setState({
  						currentUser: response
  					})
  				}
  			})
  		}
  	}

  	setCurrentUser = (response) => {
  		this.setState({
  			currentUser: response.user
  		}, () => {
  			localStorage.setItem("token", response.token)
  			// this.props.history.push(`/`)
  		})
  	}







  render(){
    console.log(this.state.currentUser)
    return (
      <div className="App">
        <VideoContainer />
        <SongContainer />
          <Switch>
  						<Route path="/login" render={(routeProps) => {
  							return <LoginForm {...routeProps} setCurrentUser={this.setCurrentUser}/>
  						}} />
  						<Route path="/signup" render={(routeProps) => {
  							return <SignupForm {...routeProps} setCurrentUser={this.setCurrentUser}/>
  						}} />
  					</Switch>
      </div>


    )
  }


}

export default App;
