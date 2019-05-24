import React, { Component } from 'react';
import ReactPlayer from 'react-player'


class SongPlayer extends Component {





  render(){
    return (
      <div class ='test'>
      <div class='songPlayer'>
        <ReactPlayer url={this.props.song}
        playing={this.props.playing}
        controls={true}
        />
        </div>
      </div>

    )
  }



}



export default SongPlayer
