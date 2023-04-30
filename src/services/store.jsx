import { configureStore } from "@reduxjs/toolkit";
import threeReducer from "./three";
import modelReducer from "./model";
import troikaReducer from "./troika";

export const store = configureStore({
  reducer: { three: threeReducer, model: modelReducer, troika: troikaReducer },
});
