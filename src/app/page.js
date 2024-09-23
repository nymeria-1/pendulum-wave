"use client";
import styles from "./page.module.css";
import PendulumWave from "@/components/PendulumWave";
import { useState } from "react";
import Description from "@/components/Description";
import SpeedButton from "@/components/SpeedButton";

export default function Home() {
  const speedValues = [0.25, 0.50, 0.75, 1, 1.25, 1.50, 1.75, 2];
  const [speed, setSpeed] = useState(1);

  const handleSpeedChange = () => {
    const currentIndex = speedValues.indexOf(speed);
    const nextIndex = (currentIndex + 1) % speedValues.length;
    setSpeed(speedValues[nextIndex]);
  };

  return (
    <div className={styles.wrapper}>
      <Description/>
      <div className={styles.pendulumWave}>
        <PendulumWave speedMultiplier={speed}/>
      </div>
      <SpeedButton 
        handleSpeedChange={handleSpeedChange} 
        speed={speed}
      />
    
    </div>
  );
}