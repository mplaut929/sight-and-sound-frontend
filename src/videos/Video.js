import React, { Component } from 'react';
import { Button, Image, List, Icon } from 'semantic-ui-react'



class Video extends Component {

  handleClick = () => {
    this.props.updateVideo(this.props.video)
  }

  render(){
    return (

      <List.Item className='ui list'>
        <Image avatar src={this.props.video.thumbnail} floated="left"/>
        <List.Content floated="left" onClick={this.handleClick}>
          <List.Header>{this.props.video.title}</List.Header>
          </List.Content>
        </List.Item>
    )
  }



}

export default Video
