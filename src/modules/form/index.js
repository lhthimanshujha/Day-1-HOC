/* eslint-disable no-unused-vars */
import React, { useReducer } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { formConstants } from "../../constants";
import reducer, { initialState } from "./reducer";
import Form from "./form";
import Logger from "../../utility/logger";
import { getUser } from "../../services";

const {
  ACTION_TYPES: { UDPATE_STATE },
} = formConstants;

const ExampleForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  const updateState = (payload) => dispatch({ type: UDPATE_STATE, payload });

  const onSubmit = async (data) => {
    Logger.info("Login form data: ", data);
    updateState({ isLoading: true });
    await new Promise((resolve) => setTimeout(resolve, 2000));
    updateState({ isLoading: false });
    toast.success("Login successfully!");
    navigate("/");
  };

  return (
    <>
      <Form onSubmit={onSubmit} isLoading={state.isLoading} />
    </>
  );
};

export default ExampleForm;
