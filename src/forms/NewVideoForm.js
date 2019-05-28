import React, { Component } from 'react'
import { Button, Form, Input, Segment } from 'semantic-ui-react'
import { fetchVideos } from '../actions'
import { connect } from 'react-redux'




class NewVideoForm extends Component {

  state = {
    videoTitle: '',
    videoUrl: '',
    videoThumbnail: '',
    songs: [{title: '', artist: '', url: '', song_start: null, song_end: null}]
  }


  handleClick = () => {
    this.setState({
      songs: this.state.songs.concat([{title: '', artist: '', url: '', song_start: null, song_end: null}])
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSongChange = index => event => {
    const newSongs = this.state.songs.map((song, i) => {
      if (index !== i) return song;
      return { ...song, [event.target.name]: event.target.value };
    });
    this.setState({
      songs: newSongs
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("submitted")
    fetch('http://localhost:3000/videos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: this.state.videoTitle,
        url: this.state.videoUrl,
        thumbnail: this.state.videoThumbnail,
        songs: this.state.songs

      })
    }).then(res => res.json()).then(res => {
    // this.setState({
    //   videoTitle: '',
    //   videoUrl: '',
    //   videoThumbnail: '',
    //   songs: [{title: '', artist: '', url: '', song_start: null, song_end: null}]
    // })
    this.props.fetchVideos()
  })

  }


  render(){
    return (
<div className="newVideoContainer">
  <Segment style={{overflow: 'auto', maxHeight: 500}}>
  <h1>Add Video with Songs</h1>
  <Form onSubmit={this.handleSubmit}>
    <Form.Field width={8}>
      <label>Video Title</label>
      <input required name='videoTitle' value={this.state.videoTitle} onChange={this.handleChange} placeholder='Video Title' />
    </Form.Field>
    <Form.Field width={8}>
      <label>Video URL</label>
      <input required name='videoUrl' value={this.state.videoUrl} onChange={this.handleChange} placeholder='Video URL' />
    </Form.Field>
    <Form.Field width={8}>
      <label>Video Thumbnail</label>
      <input required name='videoThumbnail' value={this.state.videoThumbnail} onChange={this.handleChange} placeholder='Video Thumbnail' />
    </Form.Field>
    {this.state.songs.map((song, index) => (
    <Form.Group widths='equal'>
      <Form.Field>
        <label>Song Title</label>
        <input required name='title' value={song.title} onChange={this.handleSongChange(index)} fluid placeholder='Song Title' />
      </Form.Field>
      <Form.Field>
        <label>Song Artist</label>
        <input required name='artist' value={song.artist} onChange={this.handleSongChange(index)} fluid placeholder='Song Artist' />
      </Form.Field>
      <Form.Field>
        <label>Song URL</label>
        <input required name='url'value={song.url} onChange={this.handleSongChange(index)} fluid placeholder='Song URL' />
      </Form.Field>
      <Form.Field>
        <label>Song Start Time (in seconds)</label>
        <input required name='song_start' value={song.song_start} onChange={this.handleSongChange(index)} fluid placeholder='Song Start Time (in seconds)' />
      </Form.Field>
      <Form.Field>
        <label>Song End Time (in seconds)</label>
        <input required name='song_end' value={song.song_end} onChange={this.handleSongChange(index)} fluid placeholder='Song End Time (in seconds)' />
      </Form.Field>
    </Form.Group>
    ))}
    <Button type='submit'>Submit</Button>
  </Form>
  <Button floated='right' onClick={this.handleClick}>Add Another Song </Button>
</Segment>

  </div>



    )
  }



}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    videos: state.videos
  }
}

export default connect(mapStateToProps, { fetchVideos })(NewVideoForm)
