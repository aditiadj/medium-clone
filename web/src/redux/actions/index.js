import axios from "axios"

import {
  // Posts
  REQUEST_ALL_POSTS,
  SAVE_ALL_POSTS,
  // GET_FEATURED_POSTS,
  GET_ALL_POSTS,
  // Topics
  REQUEST_ALL_TOPICS,
  SAVE_ALL_TOPICS,
  GET_ALL_TOPICS,
  // One Post
  REQUEST_ONE_POST,
  SAVE_ONE_POST,
  GET_ONE_POST,
  // One Topic
  GET_ONE_TOPIC,
  // Profile
  GET_ONE_PROFILE,
  // Account
  ACCOUNT_REGISTER,
  ACCOUNT_LOGIN,
  ACCOUNT_LOGOUT,
  SET_LOGIN_TOKEN,
  SET_DECODED_ACCOUNT,
  // New
  SUBMIT_NEW_POST
  // LOADING_TRUE,
  // LOADING_FALSE,
  // HANDLE_ERROR
} from "./types"

// dummy data from initialState
import { topics } from "../stores"

// -----------------------------------------------------------------------------
// ALL POSTS

// emit action to save posts data into store's state
export const saveAllPosts = (payload, response) => ({
  // these become an action.type & action.payload
  type: SAVE_ALL_POSTS,
  payload: {
    data: response.data,
    received_at: Date.now()
  }
})

export const requestAllPosts = payload => ({
  type: REQUEST_ALL_POSTS,
  payload
})

// fetch posts data from API
// after finished, call SAVE_ALL_POSTS action
export const fetchAllPosts = payload => dispatch => {
  dispatch(requestAllPosts(payload))
  return axios
    .get(`${process.env.REACT_APP_API_URL}/posts`)
    .then(rawResponse => {
      return rawResponse.data
    })
    .then(response => {
      return dispatch(saveAllPosts(payload, response))
    })
}

// get all posts for view component's props
export const getAllPosts = payload => ({
  type: GET_ALL_POSTS
})

// -----------------------------------------------------------------------------
// fetch = request => save

export const requestAllTopics = payload => ({
  type: REQUEST_ALL_TOPICS,
  payload
})

export const saveAllTopics = (payload, response) => ({
  type: SAVE_ALL_TOPICS,
  payload: {
    data: response, // no need for .data as we get this from local
    received_at: Date.now()
  }
})

// fetch topics data from API
// after finished, call SAVE_ALL_POSTS action
export const fetchAllTopics = payload => dispatch => {
  dispatch(requestAllTopics(payload))
  const response = topics.all // initialState.topics.all
  return dispatch(saveAllTopics(payload, response))
}

export const getAllTopics = () => ({
  type: GET_ALL_TOPICS
})

// -----------------------------------------------------------------------------
// ONE POST

export const requestOnePost = payload => ({
  type: REQUEST_ONE_POST,
  payload
})

export const saveOnePost = (payload, response) => ({
  type: SAVE_ONE_POST,
  payload: {
    data: response.data,
    received_at: Date.now()
  }
})

export const fetchOnePost = payload => dispatch => {
  dispatch(requestOnePost(payload))

  const url = `${process.env.REACT_APP_API_URL}/posts/${payload.id}`
  // console.log("url...", url)

  return axios
    .get(url)
    .then(rawResponse => {
      // console.log("rawResponse...", rawResponse)
      return rawResponse.data
    })
    .then(response => {
      // console.log("response...", response)
      return dispatch(saveOnePost(payload, response))
    })
}

// get all posts for view component's props
export const getOnePost = payload => {
  console.log("payload in getOnePost", payload)
  return {
    type: GET_ONE_POST,
    payload: {
      id: payload.id
    }
  }
}

export const getOneTopic = payload => ({
  type: GET_ONE_TOPIC,
  payload
})

export const getOneProfile = payload => ({
  type: GET_ONE_PROFILE,
  payload
})

// -----------------------------------------------------------------------------

export const submitRegisterData = payload => ({
  type: ACCOUNT_REGISTER,
  payload
})

export const submitLoginData = payload => ({
  type: ACCOUNT_LOGIN,
  payload
})

export const logout = payload => ({
  type: ACCOUNT_LOGOUT,
  payload
})

// -----------------------------------------------------------------------------

export const setToken = payload => ({
  type: SET_LOGIN_TOKEN,
  payload
})

export const setDecodedAccount = payload => ({
  type: SET_DECODED_ACCOUNT,
  payload
})

// -----------------------------------------------------------------------------

export const submitNewPostData = payload => ({
  type: SUBMIT_NEW_POST,
  payload
})
