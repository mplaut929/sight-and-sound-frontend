import { FETCH_VIDEOS, FETCH_SONGS, PLAY_SONG } from '../actions/types'


const initialState = {
  videos:[],
  songs: [],
  selectedSong: null
}


const mainReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_VIDEOS:
      return {
        ...state,
        videos: action.payload}
    case FETCH_SONGS:
      return {...state,
        songs: action.payload}
    case PLAY_SONG:
      return {...state,
        selectedSong: action.payload}
    default:
      return state
  }
}

export default mainReducer
