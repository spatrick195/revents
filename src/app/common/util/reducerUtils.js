export const createReducer = (initialState, fnMap) => {
  return (state = initialState, { type, payload }) => {
    const handler = fnMap[type]; // object will be swapped for a string depending on what is passed into the function map

    return handler ? handler(state, payload) : state; //
  };
};
