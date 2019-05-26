import React, { Component } from 'react';
import Song from './Song'
import { List, Segment, Header } from 'semantic-ui-react'



class SongList extends Component {

  render(){
    return (
        <List divided verticalAlign='middle'>
        <Header>Your Playlist</Header>
        {this.props.songs.map((song) => {
            return <Song
              key={song.id}
              song={song}
              updateSong={this.props.updateSong}
              playOrPause={this.props.playOrPause}
              currentSong={this.props.currentSong}
              duration={this.props.duration}
              progress={this.props.progress}
              playing={this.props.playing}/>
          })}
        </List>
    )
  }

}

export default SongList
