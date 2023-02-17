import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import terminalsReducer from "./redux/terminalsSlice";
import { terminalsApi } from "./features/apiSlice";

export const store = configureStore({
  reducer: {
    [terminalsApi.reducerPath]: terminalsApi.reducer,
    terminals: terminalsReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware(), terminalsApi.middleware];
  },
});

setupListeners(store.dispatch);
