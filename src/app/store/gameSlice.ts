import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Cell from "../../common/types/Cell";
import { RootState } from "./store";
import findAliveNeighbours from "../../common/utils/findAliveNeighbours";
import initializeGrid from "../../common/utils/initializeGrid";

export const dimensions = [50, 70];

const initialGrid = initializeGrid(dimensions);

const gameSlice = createSlice({
  name: "game",
  initialState: {
    dimensions,
    grid: initialGrid,
    generation: 0,
    isGameRunning: false,
    speed: 200,
  },
  reducers: {
    calculateNextGen(state, action: PayloadAction) {
      const newGrid = state.grid.map((row, index) => {
        return row.map((status, innerIndex) => {
          const aliveNeighbours = findAliveNeighbours(state, index, innerIndex);
          if (status === Cell.Dead) {
            return aliveNeighbours === 3 ? Cell.Newborn : Cell.Dead;
          } else {
            return aliveNeighbours < 4 && aliveNeighbours > 1
              ? Cell.Alive
              : Cell.Dead;
          }
        });
      });
      state.generation++;
      state.grid = newGrid;
    },
    stopOrStartGame(state, action: PayloadAction) {
      state.isGameRunning = !state.isGameRunning;
    },
    clearGrid(state, action: PayloadAction) {
      state.grid = state.grid.map((row) => row.map((cell) => Cell.Dead));
    },
    restartGame(state, action: PayloadAction) {
      state.generation = 0;
      state.grid = initializeGrid(state.dimensions);
    },
    setSpeed(state, action: PayloadAction<number>) {
      state.speed = action.payload;
    },
    changeCellStatus(state, action: PayloadAction<[number, number]>) {
      const [x, y] = action.payload;
      const currentStatus = state.grid[x][y];
      state.grid[x][y] = currentStatus === Cell.Dead ? Cell.Alive : Cell.Dead;
    },
  },
});

export const selectCell = (state: RootState, x: number, y: number) =>
  state.game.grid[x][y];

export const selectSpeed = (state: RootState) => state.game.speed;

export const selectGeneration = (state: RootState) => state.game.generation;

export const selectGameStatus = (state: RootState) => state.game.isGameRunning;

export const {
  calculateNextGen,
  stopOrStartGame,
  clearGrid,
  restartGame,
  setSpeed,
  changeCellStatus,
} = gameSlice.actions;

export default gameSlice.reducer;
