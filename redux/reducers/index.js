import { TEST_CONSTANT } from "../constants";

const initialState = {
  test: [],
};

function rootReducer(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case TEST_CONSTANT:
      return {
        ...state,
        test: payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
