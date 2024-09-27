"use client";
import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardsSlice";

export const store = configureStore({
  reducer: {
    cardsReducer: cardReducer,
  },
});

export type RootSate = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
