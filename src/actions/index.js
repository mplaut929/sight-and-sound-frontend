import { FETCH_VIDEOS, FETCH_SONGS, ADD_SONG } from './types'


export const fetchVideos = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/videos')
    .then(res => res.json())
    .then(videos => {
      dispatch({type: FETCH_VIDEOS, payload: videos})
    })
  }
}

export const fetchSongs = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/users/${id}`)
    .then(res => res.json())
    .then(songs => {
      dispatch({type: FETCH_SONGS, payload: songs.songs})
    })
  }
}
