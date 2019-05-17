import { FETCH_VIDEOS, FETCH_SONGS, ADD_SONG } from '../actions/types'


const initialState = {
  videos:[],
  songs: []
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
    case ADD_SONG:
      return {...state,
        songs: this.state.songs.push(action.payload)}
    default:
      return state
  }
}

export default mainReducer
