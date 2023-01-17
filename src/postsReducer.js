export const INITIAL_STATE = {
  loading: false,
  data: {},
  error: false,
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        loading: true,
        error: false,
        data: {},
      };
    case "FETCH_SUCCESS":
      return {
        loading: true,
        error: false,
        data: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: true,
        data: {},
      };
    default:
      return state;
  }
};
