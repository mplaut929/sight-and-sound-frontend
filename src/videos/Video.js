import React, { Component } from 'react';
import { Button, Image, List, Icon } from 'semantic-ui-react'



class Video extends Component {

  handleClick = () => {
    this.props.updateVideo(this.props.video)
  }

  render(){
    return (

      <List.Item>
        <List.Content floated='left' onClick={this.handleClick}>
          <img src={this.props.video.thumbnail} class="ui image" />
          <h6>{this.props.video.title}</h6>
          </List.Content>
        </List.Item>
    )
  }



}

export default Video
