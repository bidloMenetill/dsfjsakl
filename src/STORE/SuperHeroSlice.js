import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HeroesAPI } from "../API";
export const getAllSuperHeroes = createAsyncThunk(
  "heroes/getAllSuperHeroes",
  async () => {
    try {
      const res = await HeroesAPI.getAllHeroes();

      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
);
const SuperHeroSlice = createSlice({
  name: "heroes",
  initialState: {
    heroes: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllSuperHeroes.fulfilled, (state, action) => {
        state.status = "resolved";
        state.heroes = action.payload;
        state.error = null;
      })
      .addCase(getAllSuperHeroes.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getAllSuperHeroes.rejected, (state) => {
        state.error = "error";
        state.status = "rejected";
      });
  },
});

export default SuperHeroSlice.reducer;
