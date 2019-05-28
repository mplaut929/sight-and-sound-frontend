import React, { Component } from 'react';
import SongList from './SongList'
// import VideoPlayer from './VideoPlayer'
import { connect } from 'react-redux'
import { fetchSongs } from '../actions'

import SongPlayer from './SongPlayer'
import { Segment } from 'semantic-ui-react'




class SongContainer extends Component {
  state = {
    currentSongUrl: null,
    playing: false,
    currentSongDuration: 0,
    currentSongProgress: 0

  }

  updateSong = (url) => {
    this.setState({
      currentSongUrl: url,
      playing: true
    })
  }

  playOrPause = () => {
    this.setState({
      playing: !this.state.playing
    })
  }

  handleComplete = () => {
    this.setState({
      currentSongUrl: null,
      playing: false
    })
  }

  handleDuration = (duration) => {
    this.setState({
      currentSongDuration: duration
    })
  }

  handleProgress = (progress) => {
    this.setState({
      currentSongProgress: progress
    })
  }

  handleEnded = () => {
    const songs = this.props.songs.map((song) => {
      return song.url
    })
    const song = songs[Math.floor(Math.random()*songs.length)];
    this.updateSong(song)
  }



  componentDidMount() {
    if (this.props.currentUser){
      this.props.fetchSongs(this.props.currentUser.id)
    }
  }


render (){
  return (
    <div className ="songContainer">
    <Segment style={{overflow: 'auto', maxHeight: 500}}>
      <div className="songList">
        <SongList
          playOrPause={this.playOrPause}
          songs={this.props.currentUser? this.props.songs : []}
          updateSong={this.updateSong}
          currentSong={this.state.currentSongUrl}
          duration={this.state.currentSongDuration}
          progress={this.state.currentSongProgress}
          playing={this.state.playing}
          currentUser={this.props.currentUser}/>
      </div>
      <div class="ui divider"></div>
      <SongPlayer
        getDuration={this.handleDuration}
        playing={this.state.playing}
        song={this.state.currentSongUrl}
        handleComplete={this.handleComplete}
        getProgress={this.handleProgress}
        handleEnded ={this.handleEnded}/>
    </Segment>
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

// function mapDispatchToProps(dispatch){
//   return { fetchVideos: () => dispatch(fetchVideos()) }
// }


export default connect(mapStateToProps, { fetchSongs })(SongContainer)
