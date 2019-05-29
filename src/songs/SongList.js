import React, { Component } from 'react';
import Song from './Song'
import { List, Segment, Header, Button, Icon } from 'semantic-ui-react'



class SongList extends Component {

  handleClick = () => {
    const songs = []
    this.props.songs.map((song) => {
      if (this.props.currentSong !== song.url){
      songs.push(song.url)
    }
    })
    const song = songs[Math.floor(Math.random()*songs.length)];
    this.props.updateSong(song)
  }


  render(){
    return (
        <List divided verticalAlign='middle'>
        <Header className="playlistHeader"><h3 className='playlistText'>Your Playlist</h3>
          <Button id="shuffleButton" onClick={this.handleClick}>
            <Icon name='random' />
          </Button>
      </Header>
        {this.props.songs.map((song) => {
            return <Song
              key={song.id}
              song={song}
              updateSong={this.props.updateSong}
              playOrPause={this.props.playOrPause}
              currentSong={this.props.currentSong}
              duration={this.props.duration}
              progress={this.props.progress}
              playing={this.props.playing}
              getRecommendedSong={this.getRecommendedSong}
              currentUser={this.props.currentUser}
              />
          })}
        </List>
    )
  }

}

export default SongList
