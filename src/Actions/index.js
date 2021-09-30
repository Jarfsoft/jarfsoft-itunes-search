const actions = {
  add: (data) => ({
    type: 'ADD',
    payload: data,
  }),
  remove: (index) => ({
    type: 'REMOVE',
    payload: index,
  }),
};

export default actions;