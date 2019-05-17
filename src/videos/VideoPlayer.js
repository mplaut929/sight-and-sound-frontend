import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'
import { fetchSongs } from '../actions'


class VideoPlayer extends Component {

  state = {
    song: false,
    progress: 0,
    currentSong: null
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
    const foundVideo = this.props.video.video_songs.find(vs => vs.song_start < progress.playedSeconds && vs.song_end > progress.playedSeconds)
    if (foundVideo){
      this.setState({
        song: true,
        currentSong: foundVideo
      })
    }else{
      this.setState({
        song: false,
        currentSong: null
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
    return (
      <div>
        <ReactPlayer url={this.props.video ? this.props.video.url : null}
        playing
        controls={true}
        onProgress={this.handleProgress}/>
        {this.state.song ? <button onClick={this.handleClick}>Like Song!</button> : null}
      </div>

    )
  }



}

export default connect(null, { fetchSongs })(VideoPlayer)
