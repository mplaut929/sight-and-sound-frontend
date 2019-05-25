import React, { Component } from 'react';
import ReactPlayer from 'react-player'


class SongPlayer extends Component {

  handleDuration = (duration) => {
    this.props.getDuration(duration)
  }

  handleProgress = (progress) => {
    this.props.getProgress(progress)
  }

  render(){
    return (
      <div class ='test'>
      <div class='songPlayer'>
        <ReactPlayer url={this.props.song}
        playing={this.props.playing}
        controls={true}
        onEnded={this.props.handleComplete}
        onDuration={this.handleDuration}
        onProgress={this.handleProgress}
        />
        </div>
      </div>

    )
  }



}



export default SongPlayer
