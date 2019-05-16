import React, { Component } from 'react';
import SongList from './SongList'
// import VideoPlayer from './VideoPlayer'
import { connect } from 'react-redux'
import { fetchSongs } from '../actions'


class SongContainer extends Component {
  componentDidMount() {
    this.props.fetchSongs()
  }


render (){
  return (
    <div>
    <SongList songs={this.props.songs} />
    </div>
  )
}

}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    songs: state.songs
  }
}

// function mapDispatchToProps(dispatch){
//   return { fetchVideos: () => dispatch(fetchVideos()) }
// }


export default connect(mapStateToProps, { fetchSongs })(SongContainer)
