import React, { Component } from 'react';
import Video from './Video'


class VideoList extends Component {

  render(){
    return (
      <div class="ui relaxed four column grid">
      {this.props.videos.map((video) => {
          return <Video updateVideo={this.props.updateVideo} key={video.id} video={video}/>
        })}
      </div>
    )
  }

}

export default VideoList
