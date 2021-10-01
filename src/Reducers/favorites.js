const stateDefault = {
  list: [],
};

const favorites = (state = stateDefault, action) => {
  const list = [...state.list];
  switch (action.type) {
    case "SUM":
      for (let i = 0; i < list.length; i++) {
        if (list[i].artist === action.payload) {
          list[i].songs++;
          if (list.length > 1) list.sort((a, b) => b.songs - a.songs);
          return {
            list: list,
          };
        }
      }
      list.push({
        artist: action.payload,
        songs: 1,
      });
      if (list.length > 1) list.sort((a, b) => b.songs - a.songs);
      return {
        list: list,
      };;
    case "SUB":
      for (let i = 0; i < list.length; i++) {
        if (list[i].artist === action.payload) {
          list[i].songs--;
          if (list.length > 1) list.sort((a, b) => b.songs - a.songs);
          return {
            list: list,
          };
        }
      }
      return {
        list: list,
      };
    default:
      return state;
  }
};

export default favorites;
