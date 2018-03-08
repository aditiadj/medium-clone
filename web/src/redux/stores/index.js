export const posts = {
  store: "POSTS",
  isFetching: false,
  isLoading: false,
  featured: [], // array of featured posts
  all: [],
  selected: {}
}

export const topics = {
  store: "TOPICS",
  isFetching: false,
  isLoading: false,
  all: [
    // array of basic topics
    {
      title: "All",
      path: "/topics"
    },
    {
      title: "Technology",
      path: "/t/technology"
    },
    {
      title: "Design",
      path: "/t/design"
    },
    {
      title: "Software",
      path: "/t/software"
    },
    {
      title: "Culture",
      path: "/t/culture"
    },
    {
      title: "Career",
      path: "/t/career"
    }
  ],
  selected: {} // single topic
}

export const profile = {
  store: "PROFILE",
  isFetching: false,
  isLoading: false,
  selected: {
    userstore: "", // mhaidarh
    store: "", // M Haidar Hanif
    bio: "", // Educating people through technology to move humanity forward.
    posts: [] // {}
  }
}

export const auth = {
  store: "AUTH",
  isFetching: false,
  isLoading: false,
  token: "", // JWT
  account: {}, // decoded JWT
  login: false // true if logged in with JWT
}

export const register = {
  store: "REGISTER",
  isFetching: false,
  isLoading: false,
  name: "", // input text
  email: "", // input email
  password: "", // input password
  loading: false // when submitting
}

export const login = {
  store: "LOGIN",
  isFetching: false,
  isLoading: false,
  email: "", // input email
  password: "", // input password
  loading: false // when submitting
}

export const newPost = {
  store: "NEW_POST",
  isFetching: false,
  isLoading: false,
  title: "", // input text
  image_url: "", // input text
  content: "", // input textarea
  created_at: "", // save for notes
  updated_at: "", // save for notes
  loading: false // when submitting
}

export default {
  posts,
  topics
}
