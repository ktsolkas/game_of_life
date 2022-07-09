import { useAppSelector } from "../../../../hooks";
import { selectCell } from "../../../../store/gameSlice";
import "./Cell.css";
import CellType from "../../../../../common/types/Cell";

interface CellProps {
  x: number;
  y: number;
}

const Cell: React.FC<CellProps> = ({ x, y }) => {
  const cellStatus = useAppSelector((state) => selectCell(state, x, y));
  const cellClass =
    cellStatus === CellType.Alive
      ? "alive"
      : cellStatus === CellType.Newborn
      ? "newborn"
      : "dead";
  return <div className={`cell ${cellClass}`}></div>;
};

export default Cell;
