import React, { Component } from 'react';
import { Switch, Route, withRouter} from 'react-router-dom'
import VideoContainer from './videos/VideoContainer'
import SongContainer from './songs/SongContainer'
import LoginForm from './forms/LoginForm'
import SignupForm from './forms/SignupForm'
import NewVideoForm from './forms/NewVideoForm'
import Navbar from './Navbar'
import Footer from './Footer'
import Welcome from './Welcome'
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
  			this.props.history.push("/")
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
  			fetch("https://sight-and-sound.herokuapp.com/auto_login", {
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
  			this.props.history.push(`/videos`)
  		})
  	}







  render(){
    // console.log(this.state.currentUser)
    return (
      <div className="App">
        <Navbar logOut={this.logOut} currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path="/sight-and-sound-frontend/" render={(routeProps) => {
              return <Welcome {...routeProps} />
            }} />
          <Route exact path="/sight-and-sound-frontend/videos" render={(routeProps) => {
              return <VideoContainer {...routeProps} currentUser={this.state.currentUser}/>
            }} />
          <Route path="/sight-and-sound-frontend/songs" render={(routeProps) => {
              return <SongContainer {...routeProps} currentUser={this.state.currentUser}/>
            }} />
          <Route path="/sight-and-sound-frontend/login" render={(routeProps) => {
          			return <LoginForm {...routeProps} setCurrentUser={this.setCurrentUser}/>
          		}} />
            <Route path="/sight-and-sound-frontend/signup" render={(routeProps) => {
          			return <SignupForm {...routeProps} setCurrentUser={this.setCurrentUser}/>
          		}} />
            <Route path="/sight-and-sound-frontend/new" render={(routeProps) => {
          			return <NewVideoForm {...routeProps} setCurrentUser={this.setCurrentUser}/>
          		}} />
          	</Switch>
          <Footer />
      </div>


    )
  }


}/sight-and-sound-frontend

// const mapStateToProps = (state) => {
//   console.log(state)
//   return {
//     songs: state.songs
//   }
// }

export default connect(null, { fetchSongs })(withRouter(App));
