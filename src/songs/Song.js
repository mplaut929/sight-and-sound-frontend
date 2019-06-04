import React, { Component } from 'react';
import { Button, Image, List, Icon, Modal, Header} from 'semantic-ui-react'






class Song extends Component {

  state = {
    videos: [],
    recommendedSongs: [],
    recommendedSong: ''
  }


  componentDidMount() {
    fetch(`https://sight-and-sound.herokuapp.com/songs/${this.props.song.id}`)
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

  handleRecommended = () => {
    fetch(`https://sight-and-sound.herokuapp.com/songs/${this.props.song.id}/recommended`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        recommendedSongs: res
      })
      let i = 0
      while (i < this.state.recommendedSongs.length) {
        if (this.state.recommendedSongs[i].id !== this.props.song.id && !(this.props.currentUser.songs.find(song => song.id === this.state.recommendedSongs[i].id))){
          this.setState({
            recommendedSong: this.state.recommendedSongs[i]
          })
          break;
        }
      i = i + 1
      }

    })
  }


  render(){
    return (
      <List.Item>
        <List.Content floated='right'>
          {this.props.song.url ?
          (this.props.currentSong === this.props.song.url && this.props.playing ?
            <Button id="playButton" onClick={this.handleClick}>
              <Icon name='pause' />
            </Button>
            :
            <Button id="playButton" onClick={this.handleClick}>
              <Icon name='play' />
            </Button>)
           :
          <Button disabled>Not Available</Button>
        }
        <Modal size={'mini'} trigger={<Button id="recommendButton" size='mini' onClick ={this.handleRecommended}><Icon name='expand arrows alternate' /></Button>} closeIcon>
          <Modal.Header>Recommended Song</Modal.Header>
          <Modal.Content floated="right">
            <Modal.Description>
              <Header>{this.state.recommendedSong.title}</Header>
              <p>{this.state.recommendedSong.artist}</p>
              <p>
                {this.state.recommendedSong ?
                (this.state.recommendedSong.videos.length === 1 ?
                  <small>From the video: {this.state.recommendedSong.videos[0].title}</small>
                    :
                    <small>From the videos: {this.state.recommendedSong.videos.join(', ')}</small> )
                :
                null
              }
              </p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
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
