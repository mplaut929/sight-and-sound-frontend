import React, { Component } from 'react';
import Song from './Song'
import { List } from 'semantic-ui-react'



class SongList extends Component {

  render(){
    return (
      <List divided verticalAlign='middle'>
      {this.props.songs.map((song) => {
          return <Song key={song.id} song={song} updateSong={this.props.updateSong} playOrPause={this.props.playOrPause} currentSong={this.props.currentSong}/>
        })}
      </List>
    )
  }

}

export default SongList
