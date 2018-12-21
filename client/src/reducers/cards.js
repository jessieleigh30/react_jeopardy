import axios from "axios";



//Redux actions

export const getCards = (id) => {
  return (dispatch) => {
    axios.get(`/api/categories/${id}/cards`)
      .then( res => dispatch({ type: 'CARDS', cards: res.data }) )
  }
}




export default ( state = [], action ) => {
  switch(action.type) {
    case 'CARDS':
      return action.cards;
    case 'ADD_CARD':
      return [action.category, ...state];
    default:
      return state
  }
}
