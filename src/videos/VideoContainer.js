import React, { Component } from 'react';
import VideoList from './VideoList'
import VideoPlayer from './VideoPlayer'
import { connect } from 'react-redux'
import { fetchVideos } from '../actions'


class VideoContainer extends Component {
  componentDidMount() {
    this.props.fetchVideos()
  }


render (){
  return (
    <div>
      <VideoList videos={this.props.videos} />
      <VideoPlayer video={this.props.videos[0]} currentUser={this.props.currentUser}/>
    </div>
  )
}

}

const mapStateToProps = (state) => {
  return {
    videos: state.videos
  }
}

// function mapDispatchToProps(dispatch){
//   return { fetchVideos: () => dispatch(fetchVideos()) }
// }


export default connect(mapStateToProps, { fetchVideos })(VideoContainer)
