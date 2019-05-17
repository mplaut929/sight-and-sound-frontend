import React, { Component } from 'react';
import { Switch, Route, withRouter} from 'react-router-dom'
import VideoContainer from './videos/VideoContainer'
import SongContainer from './songs/SongContainer'
import LoginForm from './forms/LoginForm'
import SignupForm from './forms/SignupForm'
import './App.css';
import { connect } from 'react-redux'

import { fetchSongs } from './actions'

class App extends Component {

  componentDidMount() {
    if (this.state.currentUser){
      this.props.fetchSongs(this.state.currentUser.id)
    }
  }
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
  			fetch("http://localhost:3000/auto_login", {
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
  			this.props.history.push(`/`)
  		})
  	}







  render(){
    console.log(this.state.currentUser)
    return (
      <div className="App">
          <Switch>
            <Route exact path="/" render={(routeProps) => {
              return <VideoContainer {...routeProps} currentUser={this.state.currentUser}/>
            }} />
          <Route path="/songs" render={(routeProps) => {
              return <SongContainer {...routeProps} currentUser={this.state.currentUser}/>
            }} />
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

const mapStateToProps = (state) => {
  console.log(state)
  return {
    songs: state.songs
  }
}

export default connect(mapStateToProps, { fetchSongs })(withRouter(App));
