import React, { Component } from 'react';
import VideoList from './VideoList'
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
    </div>
  )
}

}

const mapStateToProps = (state) => {
  return {
    videos: state
  }
}

// function mapDispatchToProps(dispatch){
//   return { fetchVideos: () => dispatch(fetchVideos()) }
// }


export default connect(mapStateToProps, { fetchVideos })(VideoContainer)
