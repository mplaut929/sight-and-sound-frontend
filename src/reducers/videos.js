import { FETCH_VIDEOS } from '../actions/types'


const initialState = []


const videosReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_VIDEOS:
      return action.payload
    default:
      return state
  }
}

export default videosReducer
