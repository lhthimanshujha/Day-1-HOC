import { formConstants } from "../../constants";
const { ACTION_TYPES } = formConstants;

const { UDPATE_STATE } = ACTION_TYPES;

export const initialState = {
  name: "",
  age: "",
  email: "",
  password: "",
};

export default function reducer(state, action) {
  switch (action.type) {
    case UDPATE_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
