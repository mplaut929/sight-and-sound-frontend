import { FETCH_VIDEOS, FETCH_SONGS, PLAY_SONG } from './types'


export const fetchVideos = () => {
  return (dispatch) => {
    fetch('https://sight-and-sound.herokuapp.com/videos')
    .then(res => res.json())
    .then(videos => {
      dispatch({type: FETCH_VIDEOS, payload: videos})
    })
  }
}

export const fetchSongs = (id) => {
  return (dispatch) => {
    fetch(`https://sight-and-sound.herokuapp.com/users/${id}`)
    .then(res => res.json())
    .then(songs => {
      dispatch({type: FETCH_SONGS, payload: songs.songs})
    })
  }
}

export const selectSong = (song) => {
  return {
    type: PLAY_SONG,
    payload: song
  }
}
