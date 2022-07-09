import { createSlice } from "@reduxjs/toolkit";
import Cell from "../../common/types/Cell";
import initializeGrid from "../../common/utils/initializeGrid";

import { RootState } from "./store";

const initialGrid = initializeGrid();

const gameSlice = createSlice({
  name: "game",
  initialState: {
    grid: initialGrid,
    generation: 0,
    isGameRunning: true,
  },
  reducers: {},
});

export const selectCell = (state: RootState, x: number, y: number) =>
  state.game.grid[x][y];

export const selectGrid = (state: RootState) => state.game.grid;

export default gameSlice.reducer;
