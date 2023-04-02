import axios from "axios";

import { TEST_CONSTANT } from "../constants";

const url = process.env.NEXT_PUBLIC_API_URL || "https://localhost:3001";

export const TEST_ACTION = () => {
  return (dispatch) => {
    axios
      .get(url)
      .then((r) => r.data)
      .then((data) => {
        dispatch({ type: TEST_CONSTANT, payload: data });
      });
  };
};
