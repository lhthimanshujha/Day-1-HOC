/* eslint-disable no-unused-vars */
import React, { useReducer } from "react";

import { formConstants } from "../../constants";
import reducer, { initialState } from "./reducer";
import Form from "./form";

const {
  ACTION_TYPES: { UDPATE_STATE },
} = formConstants;

const ExampleForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateState = (payload) => dispatch({ type: UDPATE_STATE, payload });
  return (
    <>
      <Form />
    </>
  );
};

export default ExampleForm;
