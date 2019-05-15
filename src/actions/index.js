import { FETCH_VIDEOS } from './types'


export const fetchVideos = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/videos')
    .then(res => res.json())
    .then(videos => {
      dispatch({type: FETCH_VIDEOS, payload: videos})
    })
  }
}
