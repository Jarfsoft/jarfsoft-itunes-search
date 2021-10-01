const stateDefault = {
  list: [],
};

const favorites = (state = stateDefault, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "SUM":
      for (let i in newState.list) {
        if (i[0] === action.payload) {
          i[1]++;
          newState.list.sort((a, b) => a[1] - b[1]);
          if (newState.list.length !== 1) newState.list.sort((a, b) => a[1] - b[1]);
          return newState;
        }
      }
      newState.list.push([action.payload, 1]);
      if (newState.list.length !== 1) newState.list.sort((a, b) => a[1] - b[1]);
      console.log(newState.list[0][0] + " favorites");
      return newState;
    case "SUB":
      for (let i in newState.list) {
        if (i[0] === action.payload) {
          i[1]--;
          if (newState.list.length !== 1) newState.list.sort((a, b) => a[1] - b[1]);
          return newState;
        }
      }
      return newState;
    default:
      return newState;
  }
};

export default favorites;
