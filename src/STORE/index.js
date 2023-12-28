import { configureStore } from "@reduxjs/toolkit";
import SuperHeroSlice from "./SuperHeroSlice";

const store = configureStore({
  reducer: {
    heroes: SuperHeroSlice,
  },
});

export default store;
