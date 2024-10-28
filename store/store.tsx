import {configureStore} from "@reduxjs/toolkit";
import ecom from "./reducer";
export const store = configureStore({
  reducer: ecom,
});
