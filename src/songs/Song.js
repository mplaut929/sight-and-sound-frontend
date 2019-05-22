import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Song extends Component {

  render(){
    console.log(this.props)
    return (
      <div>
        <h5>{this.props.song.title}</h5>
        <h6>{this.props.song.artist}</h6>
        <a href={this.props.song.url} target='_blank'>{this.props.song.url}</a>
      </div>
    )
  }



}

export default Song
