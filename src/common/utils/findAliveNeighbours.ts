import GameState from "../types/GameState";
import { dimensions } from "../../app/store/gameSlice";
import Cell from "../types/Cell";

const findAliveNeighbours = (state: GameState, x: number, y: number) => {
  let aliveCount = 0;
  const [width, height] = dimensions;

  for (let i = x - 1; i < x + 2; i++) {
    for (let j = y - 1; j < y + 2; j++) {
      if (i !== x || j !== y) {
        let indexx = i < 0 ? width - 1 : i > width - 1 ? 0 : i;
        let indexy = j < 0 ? height - 1 : j > height - 1 ? 0 : j;
        if (state.grid[indexx][indexy] !== Cell.Dead) {
          aliveCount++;
        }
      }
    }
  }

  return aliveCount;
};

export default findAliveNeighbours;
