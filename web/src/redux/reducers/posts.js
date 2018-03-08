/*
  Create a new posts' state
*/

import { posts } from "../stores"

import {
  GET_ALL_POSTS,
  SAVE_ALL_POSTS,
  GET_ONE_POST,
  SAVE_ONE_POST,
  LOADING_TRUE,
  LOADING_FALSE
  // HANDLE_ERROR
} from "../actions/types"

// -----------------------------------------------------------------------------

export default (state = posts, action) => {
  switch (action.type) {
    // save all posts into dedicated posts state
    case SAVE_ALL_POSTS:
      return {
        ...state,
        all: action.payload.data
      }
    case GET_ALL_POSTS:
      return state.posts.all
    case GET_ONE_POST:
      return {
        ...state,
        selected: action.payload.data
      }
    case SAVE_ONE_POST:
      return {
        ...state,
        selected: action.payload.data
      }
    case LOADING_TRUE:
      return true
    case LOADING_FALSE:
      return false
    default:
      return state
  }
}
