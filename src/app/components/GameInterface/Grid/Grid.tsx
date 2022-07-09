import { useAppSelector } from "../../../hooks";
import { selectGrid } from "../../../store/gameSlice";
import Cell from "./Cell/Cell";
import "./Grid.css";

const Grid: React.FC = () => {
  const grid = useAppSelector(selectGrid);
  console.log("au", grid);
  return (
    <div className="grid">
      {grid.map((array, index) => {
        return array.map((status, innerIndex) => {
          return <Cell key={`${index},${innerIndex}`} x={index} y={innerIndex} />;
        });
      })}
    </div>
  );
};

export default Grid;
