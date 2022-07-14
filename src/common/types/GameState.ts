import Cell from "./Cell";

export default interface GameState {
  dimensions: number[];
  grid: Cell[][];
  generation: number;
  isGameRunning: boolean;
  speed: number;
}
