import "./Grid.css";

import Cell from "./Cell/Cell";
import { dimensions } from "../../../store/gameSlice";

const Grid: React.FC = () => {
  const [rows, columns] = dimensions;

  return (
    <div className="grid">
      {[...Array(rows).keys()].map((_, index) => {
        return [...Array(columns).keys()].map((__, innerIndex) => {
          return (
            <Cell key={`${index},${innerIndex}`} x={index} y={innerIndex} />
          );
        });
      })}
    </div>
  );
};

export default Grid;
