import React, { Component } from 'react';


class Video extends Component {

  handleClick = () => {
    this.props.updateVideo(this.props.video)
  }

  render(){
    return (
      <div class="ui relaxed four column grid">
        <div class="column" onClick={this.handleClick}>
          <img src={this.props.video.thumbnail} class="ui image" />
          <h6>{this.props.video.title}</h6>
      </div>
    </div>
    )
  }



}

export default Video
