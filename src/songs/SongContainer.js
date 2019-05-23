import React, { Component } from 'react';
import SongList from './SongList'
// import VideoPlayer from './VideoPlayer'
import { connect } from 'react-redux'
import { fetchSongs } from '../actions'

import SongPlayer from './SongPlayer'



class SongContainer extends Component {
  state = {
    currentSongUrl: null,
    playing: false
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



  componentDidMount() {
    if (this.props.currentUser){
      this.props.fetchSongs(this.props.currentUser.id)
    }
  }


render (){
  console.log(this.props)
  return (
    <div>
      <SongList playOrPause={this.playOrPause} songs={this.props.currentUser? this.props.songs : []} updateSong={this.updateSong} currentSong={this.state.currentSongUrl}/>
      <div class="ui divider"></div>
      <SongPlayer playing={this.state.playing} song={this.state.currentSongUrl} />
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
