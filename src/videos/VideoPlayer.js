import React, { Component } from 'react';
import ReactPlayer from 'react-player'


class VideoPlayer extends Component {

  state = {
    song: false
  }

  handleProgress= (progress) => {
    //  for (let i = 0; i < this.props.video.video_songs.length; i++){
    //   if (this.props.video.video_songs[i].song_start < progress.playedSeconds && this.props.video.video_songs[i].song_end > progress.playedSeconds){
    //
    //   }
    // }
    // this.setState(prevState => ({ song: !prevState.song }))
    const foundVideo = this.props.video.video_songs.find(vs => vs.song_start < progress.playedSeconds && vs.song_end > progress.playedSeconds)
    if (foundVideo){
      this.setState({
        song: true
      })
    }else{
      this.setState({
        song: false
      })
    }
  }


  render(){
    console.log(this.state)
    return (
      <div>
        <ReactPlayer url={this.props.video ? this.props.video.url : null}
        playing
        controls={true}
        onProgress={this.handleProgress}/>
        {this.state.song ? <button>Like Song!</button> : null}
      </div>

    )
  }



}

export default VideoPlayer
