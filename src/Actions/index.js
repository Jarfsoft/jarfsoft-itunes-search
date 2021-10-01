const actions = {
  add: (data) => ({
    type: "ADD",
    payload: data,
  }),
  remove: (index) => ({
    type: "REMOVE",
    payload: index,
  }),
  sum: (artist) => ({
    type: "SUM",
    payload: artist,
  }),
  sub: (artist) => ({
    type: "SUB",
    payload: artist,
  }),
};

export default actions;
