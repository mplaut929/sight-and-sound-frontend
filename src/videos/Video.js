import React, { Component } from 'react';


class Video extends Component {

  render(){
    console.log(this.props)
    return (
      <div>
        {this.props.video.title}
      </div>
    )
  }



}

export default Video
