import "./GameControls.css";
import {
  clearGrid,
  restartGame,
  selectGameStatus,
  selectGeneration,
} from "../../../store/gameSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks";

interface GameControlsProps {
  stopTicking: () => void;
  startTicking: () => NodeJS.Timer;
}

const GameControls: React.FC<GameControlsProps> = ({
  stopTicking,
  startTicking,
}) => {
  const dispatch = useAppDispatch();
  const gameStatus = useAppSelector(selectGameStatus);
  const generation = useAppSelector(selectGeneration);

  const pauseControl = () => (gameStatus ? stopTicking() : startTicking());

  const onClear = () => {
    stopTicking();
    dispatch(clearGrid());
  };

  const onRestart = () => {
    if (gameStatus) {
      stopTicking();
    }
    dispatch(restartGame());
    startTicking();
  };

  return (
    <div className="controls">
      <button onClick={pauseControl}>{gameStatus ? "Pause" : "Start"}</button>
      <button onClick={onClear}>Clear</button>
      <button onClick={onRestart}>Restart</button>
      <h2>Generation: {generation}</h2>
    </div>
  );
};

export default GameControls;
