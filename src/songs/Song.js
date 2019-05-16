import React, { Component } from 'react';


class Song extends Component {

  render(){
    console.log(this.props)
    return (
      <div>
        <h5>{this.props.song.title}</h5>
        <h6>{this.props.song.artist}</h6>
        <p>{this.props.song.url}</p>
      </div>
    )
  }



}

export default Song
