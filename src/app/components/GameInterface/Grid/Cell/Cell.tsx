import "./Cell.css";

import { changeCellStatus, selectCell } from "../../../../store/gameSlice";
import CellType from "../../../../../common/types/Cell";
import { useAppDispatch, useAppSelector } from "../../../../hooks";

interface CellProps {
  x: number;
  y: number;
}

const Cell: React.FC<CellProps> = ({ x, y }) => {
  const dispatch = useAppDispatch();
  const cellStatus = useAppSelector((state) => selectCell(state, x, y));

  const onClick = () => dispatch(changeCellStatus([x, y]));

  const cellClass =
    cellStatus === CellType.Alive
      ? "alive"
      : cellStatus === CellType.Newborn
      ? "newborn"
      : "dead";
      
  return <div className={`cell ${cellClass}`} onClick={onClick}></div>;
};

export default Cell;
