import React, { Component } from 'react';
import Song from './Song'


class SongList extends Component {

  render(){
    console.log(this.props)
    return (
      <div>
      {this.props.songs.map((song) => {
          return <Song key={song.id} song={song}/>
        })}
      </div>
    )
  }

}

export default SongList
