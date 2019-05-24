import React, { Component } from 'react';
import Video from './Video'
import { List, Segment } from 'semantic-ui-react'



class VideoList extends Component {

  render(){
    return (
    <Segment style={{overflow: 'auto', maxHeight: 600}}>
      <List divided verticalAlign='middle'>
        {this.props.videos.map((video) => {
            return <Video updateVideo={this.props.updateVideo} key={video.id} video={video}/>
          })}
      </List>
    </Segment>
    )
  }

}

export default VideoList
