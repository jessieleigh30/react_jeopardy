const categories = ( state = [], action ) => {
  switch(action.type) {
    case 'CATEGORIES':
      return action.category
    case 'ADD_CATEGORY':
      return [action.category, ...state];
    default:
      return state
  }
}

export default categories;