import axios from "axios";



//Redux actions

export const getCard = () => {
  return (dispatch) => {
    axios.get('/api/cards')
      .then( res => dispatch({ type: 'CARDS', card: res.data }) )
  }
}




export default ( state = [], action ) => {
  switch(action.type) {
    case 'CARDS':
      return action.cards
    case 'ADD_CARD':
      return [action.category, ...state];
    default:
      return state
  }
}
