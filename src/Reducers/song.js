const stateDefault = {
  name: 'Lady Gaga',
}

const song = (state = stateDefault, action) => {
  switch(action.type) {
    case 'CHANGE':
      return {
        name: action.payload,
      };
    default:
      return state;
  }
}

export default song;