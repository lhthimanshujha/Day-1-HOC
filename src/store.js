import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";

const middlewares = [];
if (process.env.NODE_ENV === "development") {
  import("redux-logger").then((module) => {
    const logger = module.default;
    middlewares.push(logger);
  });
}

export const store = configureStore({
  reducer: {
    user: userReducer
  }, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});
