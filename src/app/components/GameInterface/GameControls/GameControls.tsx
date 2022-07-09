import "./GameControls.css";

const GameControls: React.FC = () => {
  return (
    <div className="controls">
      <button>Pause</button>
      <button>Clear</button>
      <button>Restart</button>
      <h2>Generation: </h2>
    </div>
  );
};

export default GameControls;
