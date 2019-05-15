import React, { Component } from 'react';
import Video from './Video'


class VideoList extends Component {

  render(){
    return (
      <div>
      {this.props.videos.map((video) => {
          return <Video key={video.id} video={video}/>
        })}
      </div>
    )
  }
  
}

export default VideoList
