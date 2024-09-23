import { useEffect, useRef, useState } from "react";
import styles from "../styles/SpeedButton.module.css";
import Image from "next/image";

function SpeedButton({ handleSpeedChange, speed }) {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.7;
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  }, [speed]);

  const toggleMute = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.muted = false; // Ensure audio is unmuted when played
        audioRef.current.play().catch(error => {
          console.error("Playback failed:", error);
        });
      } else {
        audioRef.current.muted = !audioRef.current.muted;
      }
      setIsMuted(audioRef.current.muted);
    }
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={handleSpeedChange}>x{speed}</button>
      <button id="muteButton" onClick={toggleMute}>
        <Image
          src={isMuted ? "/images/mute-icon.svg" : "/images/speaker-icon.svg"}
          alt="Mute Icon"
          width={20}
          height={20}
        />
      </button>

      <audio ref={audioRef} loop>
        <source src="/audio/Simon-Osterhold-Can-You-See-the-Flow.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default SpeedButton;