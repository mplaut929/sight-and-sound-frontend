import React, { Component } from 'react';
import SongList from './SongList'
// import VideoPlayer from './VideoPlayer'
import { connect } from 'react-redux'
import { fetchSongs } from '../actions'


class SongContainer extends Component {
  // componentDidMount() {
  //   if (this.props.currentUser){
  //     this.props.fetchSongs(this.props.currentUser.id)
  //   }
  // }


render (){
  console.log(this.props)
  return (
    <div>
    <SongList songs={this.props.currentUser? this.props.songs : []} />
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


export default connect(mapStateToProps)(SongContainer)
