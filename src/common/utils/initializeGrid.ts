import Cell from "../types/Cell";

const initializeGrid = () => {
  let initialGrid: Cell[][] = [];
  const width = 70;
  const height = 50;

  for (let i = 0; i < height; i++) {
    initialGrid[i] = [];
    for (let j = 0; j < width; j++) {
      initialGrid[i][j] = Math.random() > 0.85 ? Cell.Alive : Cell.Dead;
    }
  }

  return initialGrid;
};

export default initializeGrid;
