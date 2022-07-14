import Cell from "../types/Cell";

const initializeGrid = (dimensions: number[]) => {
  let initialGrid: Cell[][] = [];
  const [width, height] = dimensions;

  for (let i = 0; i < width; i++) {
    initialGrid[i] = [];
    for (let j = 0; j < height; j++) {
      initialGrid[i][j] = Math.random() > 0.85 ? Cell.Alive : Cell.Dead;
    }
  }

  return initialGrid;
};

export default initializeGrid;
