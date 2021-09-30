const stateDefault = {
  list: [],
}

const history = (state = stateDefault, action) => {
  switch(action.type) {
    case 'ADD':
      return {
        list: [...state.list, action.payload],
      };
    case 'REMOVE': {
      const newList = [...state.list];
      newList.splice(action.payload, 1);
      return {
        list: newList,
      }
    }
    default:
      return state;
  }
}

export default history;