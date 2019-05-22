import React, { Component } from 'react';
import Video from './Video'


class VideoList extends Component {

  render(){
    return (
      <div class="app">
        <ul className="hs">
      {this.props.videos.map((video) => {
          return <Video updateVideo={this.props.updateVideo} key={video.id} video={video}/>
        })}
        </ul>
      </div>
    )
  }

}

export default VideoList
