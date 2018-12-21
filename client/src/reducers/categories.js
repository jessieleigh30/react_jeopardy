import axios from "axios";



//Redux actions

export const getCategories = () => {
  return (dispatch) => {
    axios.get('/api/categories')
      .then( res => dispatch({ type: 'CATEGORIES', categories: res.data }) )
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

