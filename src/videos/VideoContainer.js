import React, { Component } from 'react';
import VideoList from './VideoList'
import VideoPlayer from './VideoPlayer'
import { connect } from 'react-redux'
import { fetchVideos } from '../actions'
import { Grid, Divider } from 'semantic-ui-react'

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
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column id="videoList">
        <VideoList updateVideo={this.updateVideo} videos={this.props.videos} />
      </Grid.Column>
      <Grid.Column id="videoList">
        <VideoPlayer video={this.state.currentVideo} currentUser={this.props.currentUser}/>
      </Grid.Column>
    </Grid>
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
