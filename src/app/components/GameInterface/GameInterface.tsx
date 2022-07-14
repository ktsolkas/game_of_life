import "./GameInterface.css";
import { useCallback, useEffect, useRef } from "react";

import GameControls from "./GameControls/GameControls";
import Grid from "./Grid/Grid";
import SpeedControls from "./SpeedControls/SpeedControls";
import {
  selectSpeed,
  calculateNextGen,
  stopOrStartGame,
} from "../../store/gameSlice";
import { useAppSelector, useAppDispatch } from "../../hooks";

const GameInterface: React.FC = () => {
  const dispatch = useAppDispatch();
  const speed = useAppSelector(selectSpeed);
  let timer = useRef<NodeJS.Timer>();

  const startTicking = useCallback(() => {
    dispatch(stopOrStartGame());
    const tick = () => {
      dispatch(calculateNextGen());
    };
    timer.current = setInterval(tick, speed);
    return timer.current;
  }, [speed, dispatch]);

  const stopTicking = useCallback(() => {
    dispatch(stopOrStartGame());
    clearInterval(timer.current);
  }, [dispatch]);

  useEffect(() => {
    startTicking();
    return () => {
      stopTicking();
    };
  }, [startTicking, stopTicking]);

  return (
    <main>
      <GameControls stopTicking={stopTicking} startTicking={startTicking} />
      <Grid />
      <SpeedControls />
    </main>
  );
};

export default GameInterface;
