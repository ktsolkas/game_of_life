import "./SpeedControls.css";
import { setSpeed } from "../../../store/gameSlice";
import { useAppDispatch } from "../../../hooks";

const SpeedControls: React.FC = () => {
  const dispatch = useAppDispatch();

  const speedControls = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const speed = e.currentTarget.innerText;
    speed === "Fast"
      ? dispatch(setSpeed(100))
      : speed === "Default"
      ? dispatch(setSpeed(200))
      : dispatch(setSpeed(400));
  };

  return (
    <div className="controls speed-controls">
      <h2>Speed : </h2>
      <button onClick={speedControls}>Slow</button>
      <button onClick={speedControls}>Default</button>
      <button onClick={speedControls}>Fast</button>
    </div>
  );
};

export default SpeedControls;
