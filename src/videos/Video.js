import React, { Component } from 'react';


class Video extends Component {

  handleClick = () => {
    this.props.updateVideo(this.props.video)
  }

  render(){
    return (

        <li class="item" onClick={this.handleClick}>
          <img src={this.props.video.thumbnail} class="ui image" />
          <h6>{this.props.video.title}</h6>
      </li>
    )
  }



}

export default Video
