import { FETCH_VIDEOS, FETCH_SONGS } from './types'


export const fetchVideos = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/videos')
    .then(res => res.json())
    .then(videos => {
      dispatch({type: FETCH_VIDEOS, payload: videos})
    })
  }
}

export const fetchSongs = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/users/1')
    .then(res => res.json())
    .then(songs => {
      console.log(songs.songs)
      dispatch({type: FETCH_SONGS, payload: songs.songs})
    })
  }
}
