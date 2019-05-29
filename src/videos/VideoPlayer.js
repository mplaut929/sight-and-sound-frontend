import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'
import { fetchSongs } from '../actions'
import { Link } from 'react-router-dom';


class VideoPlayer extends Component {

  state = {
    song: false,
    progress: 0,
    currentSong: 'null'
  }

  handleProgress= (progress) => {
    //  for (let i = 0; i < this.props.video.video_songs.length; i++){
    //   if (this.props.video.video_songs[i].song_start < progress.playedSeconds && this.props.video.video_songs[i].song_end > progress.playedSeconds){
    //
    //   }
    // }
    // this.setState(prevState => ({ song: !prevState.song }))
    this.setState({
      progress: progress.playedSeconds
    })
    const foundSong = this.props.video.video_songs.find(vs => vs.song_start < progress.playedSeconds && vs.song_end > progress.playedSeconds)
    if (foundSong &&
      !(this.props.songs.find(song => song.id === foundSong.song_id))){
      this.setState({
        song: true,
        currentSong: foundSong,
        notClicked: true
      })
    }else{
      this.setState({
        song: false,
        currentSong: null,
        notCliked: false
      })
    }
  }

  handleClick = () => {
    const foundVideo = this.props.video.video_songs
    // console.log(this.state.currentSong.song_id)
    fetch('http://localhost:3000/user_songs', {
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        user_id: this.props.currentUser.id,
        song_id: this.state.currentSong.song_id
      })
    }).then(res => res.json()).then(res => {
      this.props.fetchSongs(this.props.currentUser.id)

  })
  }



  render(){
    console.log(this.state.song)
    console.log(this.props.currentUser ? this.props.currentUser: "hi")
    console.log(this.props.currentUser && this.state.currentSong ? !(this.props.currentUser.songs.find(song => song.id === this.state.currentSong.song_id)) : "hi")
    console.log(this.props.currentUser && this.state.currentSong ? this.props.songs: "hi")
    return (
      <div class='player-wrapper'>

        <ReactPlayer className='react-player'
        url={this.props.video ? this.props.video.url : null}
        playing
        controls={true}
        onProgress={this.handleProgress}/>
      {this.state.song &&
        this.props.currentUser &&
        !(this.props.songs.find(song => song.id === this.state.currentSong.song_id)) ?
        <button class="likeSongButton" onClick={this.handleClick}>Like Song!</button> : null}
      </div>

    )
  }



}


const mapStateToProps = (state) => {
  // console.log(state)
  return {
    songs: state.songs
  }
}

export default connect(mapStateToProps, { fetchSongs })(VideoPlayer)
