import GameControls from "./GameControls/GameControls";
import "./GameInterface.css";
import Grid from "./Grid/Grid";
import SpeedControls from "./SpeedControls/SpeedControls";

const GameInterface: React.FC = () => {
  return (
    <main>
      <GameControls />
      <Grid />
      <SpeedControls />
    </main>
  );
};

export default GameInterface;
