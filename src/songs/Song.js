import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Image, List, Icon } from 'semantic-ui-react'






class Song extends Component {

  state = {
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
    // this.setState({
    //   playing: !this.state.playing
    // })
  }

  getSeconds = (time) => {
    const newTime = Math.ceil(time)

    const min = Math.floor(time % 3600 / 60);
    const sec = Math.floor(time % 3600 % 60);
    return ('0' + min).slice(-2) + ":" + ('0' + sec).slice(-2);
  }

  getProgressSeconds = (time) => {
    const newTime = Math.ceil(time)

    const min = Math.floor(time % 3600 / 60);
    const sec = Math.floor(time % 3600 % 60);
    return ('0' + min).slice(-2) + ":" + ('0' + sec).slice(-2);
  }


  render(){
    return (
      <List.Item>
        <List.Content floated='right'>
          {this.props.song.url ?
          (this.props.currentSong === this.props.song.url && this.props.playing ?
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
          <div>
            <strong>Now Playing</strong><br />
            <p>{this.getProgressSeconds(this.props.progress.playedSeconds)} / {this.getSeconds(this.props.duration)}</p>
          </div>

            : null}
        </List.Content>
        <List.Content id="songInfo">
          <List.Header>{this.props.song.title}</List.Header>
          {this.props.song.artist}<br />
        {this.state.videos.length === 1 ? <small>From the video: {this.state.videos[0].title}</small> : <p>From the videos: {this.state.videos.join(', ')}</p>}
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
