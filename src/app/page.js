"use client";
import Image from "next/image";
import styles from "./page.module.css";
import PendulumWave from "@/components/PendulumWave";
import { useRef, useState } from "react";
import Description from "@/components/Description";
import SpeedButton from "@/components/SpeedButton";

export default function Home() {
  const speedValues = [0.25, 0.50, 0.75, 1, 1.25, 1.50, 1.75, 2];
  const [speed, setSpeed] = useState(1);
  const audioRef = useRef(null);

  const handleSpeedChange = () => {
    const currentIndex = speedValues.indexOf(speed);
    const nextIndex = (currentIndex + 1) % speedValues.length;
    setSpeed(speedValues[nextIndex]);
  };

  return (
    <div className={styles.wrapper}>
      <Description/>
      <PendulumWave speedMultiplier={speed}/>
      <SpeedButton 
        handleSpeedChange={handleSpeedChange} 
        speed={speed}
      />
      <audio ref={audioRef} loop autoPlay controls>
        <source src="/audio/Simon-Osterhold-Can-You-See-the-Flow.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}