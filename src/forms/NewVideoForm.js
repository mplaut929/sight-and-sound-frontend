import React, { Component } from 'react'
import { Button, Form, Input } from 'semantic-ui-react'


export default class NewVideoForm extends Component {

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


  render(){
    console.log(this.state)
    return (

  <Form>
    <Form.Field width={8}>
      <label>Video Title</label>
      <input name='videoTitle' value={this.state.videoTitle} onChange={this.handleChange} placeholder='Video Title' />
    </Form.Field>
    <Form.Field width={8}>
      <label>Video URL</label>
      <input name='videoUrl' value={this.state.videoUrl} onChange={this.handleChange} placeholder='Video URL' />
    </Form.Field>
    <Form.Field width={8}>
      <label>Video Thumbnail</label>
      <input name='videoThumbnail' value={this.state.videoThumbnail} onChange={this.handleChange} placeholder='Video Thumbnail' />
    </Form.Field>
    {this.state.songs.map((song, index) => (
    <Form.Group widths='equal'>
      <Form.Field>
        <label>Song Title</label>
        <input name='title' value={song.title} fluid placeholder='Song Title' />
      </Form.Field>
      <Form.Field>
        <label>Song Artist</label>
        <input name='artist' value={song.artist} onChange={this.handleSongChange(index)} fluid placeholder='Song Artist' />
      </Form.Field>
      <Form.Field>
        <label>Song URL</label>
        <input name='url'value={song.url} onChange={this.handleSongChange(index)} fluid placeholder='Song URL' />
      </Form.Field>
      <Form.Field>
        <label>Song Start Time (in seconds)</label>
        <input name='song_start' value={song.song_start} onChange={this.handleSongChange(index)} fluid placeholder='Song Start Time (in seconds)' />
      </Form.Field>
      <Form.Field>
        <label>Song End Time (in seconds)</label>
        <input name='song_end' value={song.song_end} onChange={this.handleSongChange(index)} fluid placeholder='Song End Time (in seconds)' />
      </Form.Field>
    </Form.Group>
    ))}
    <Button onClick={this.handleClick}>Add Another Song </Button>
    <Button type='submit'>Submit</Button>
  </Form>



    )
  }



}
