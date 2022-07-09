import GameControls from "./GameControls/GameControls";
import "./GameInterface.css";
import SpeedControls from "./SpeedControls/SpeedControls";

const GameInterface: React.FC = () => {
  return (
    <main>
      <GameControls />
      <SpeedControls />
    </main>
  );
};

export default GameInterface;
