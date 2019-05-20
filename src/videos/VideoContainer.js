import React, { Component } from 'react';
import VideoList from './VideoList'
import VideoPlayer from './VideoPlayer'
import { connect } from 'react-redux'
import { fetchVideos } from '../actions'


class VideoContainer extends Component {
  state = {
    currentVideo: null
  }


  componentDidMount() {
    this.props.fetchVideos()
  }

  updateVideo = (video) => {
    this.setState({
      currentVideo: video
    })
  }


render (){
  return (
    <div>
      <VideoList updateVideo={this.updateVideo} videos={this.props.videos} />
      <div class="ui divider"></div>
      <VideoPlayer video={this.state.currentVideo} currentUser={this.props.currentUser}/>
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
