import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Image, List, Icon } from 'semantic-ui-react'






class Song extends Component {

  state = {
    playing: false,
    videos: []
  }


  componentDidMount() {
    fetch(`http://localhost:3000/songs/${this.props.song.id}`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        videos: res.videos
      })
    })
  }

  handleClick = () => {
    this.props.currentSong === this.props.song.url ?
    this.props.playOrPause()
    :
    this.props.updateSong(this.props.song.url)
    this.setState({
      playing: !this.state.playing
    })
  }


  render(){
    console.log(this.state)
    return (
      <List.Item>
        <List.Content floated='right'>
          {this.props.song.url ?
          (this.state.playing && this.props.currentSong === this.props.song.url ?
            <Button onClick={this.handleClick}>
              <Icon name='pause' />
            </Button>
            :
            <Button onClick={this.handleClick}>
              <Icon name='play' />
            </Button>)
           :
          <Button disabled>Not Available</Button>
        }
        </List.Content>
        <List.Content floated='left'>
          {this.props.currentSong === this.props.song.url && this.props.song.url ?
          <strong>Now Playing</strong> : null}
        </List.Content>
        <List.Content id="songInfo">
          <List.Header>{this.props.song.title}</List.Header>
          {this.props.song.artist}<br />
        {this.state.videos.length === 1 ? <small>From the video: {this.state.videos[0].title}</small> : <p>Hi</p>}
        </List.Content>
      </List.Item>
    )
  }



  // {this.props.song.url ?
  //   <Button color='youtube'>
  //     <a href={this.props.song.url} target='_blank'>
  //       <Icon name='youtube' />Youtube</a></Button> :
  //         <Button disabled>Not on Youtube</Button>}
}

export default Song
