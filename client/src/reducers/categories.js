import axios from "axios";



//Redux actions

export const getCategories = () => {
  return (dispatch) => {
    axios.get('/api/categories')
      .then( res => dispatch({ type: 'CATEGORIES', categories: res.data }) )
  }
}

export const addCategory = (category) => {
  return (dispatch) => {
    axios.post(`api/categories`, {category} )
    .then( res => dispatch({ type: 'ADD_CATEGORY, category: res.data'}))
  }
}

export const updateCategory = (category) => {
  return (dispatch) => {
    axios.put(`api/categories/${category.id}`, {category} )
    .then( res => dispatch ({ type: "UPDATE_CATEGORY", category: res.data}))
  }
}



export default ( state = [], action ) => {
  switch(action.type) {
    case 'CATEGORIES':
      return action.categories
    case 'ADD_CATEGORY':
      return [action.category, ...state];
    default:
      return state
  }
}

