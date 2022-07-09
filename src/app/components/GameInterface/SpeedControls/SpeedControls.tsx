import "./SpeedControls.css";

const SpeedControls: React.FC = () => {
  return (
    <div className="controls speed-controls">
      <h2>Speed : </h2>
      <button>Slow</button>
      <button>Default</button>
      <button>Fast</button>
    </div>
  );
};

export default SpeedControls;
