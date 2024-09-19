import styles from "../styles/SpeedButton.module.css";

function SpeedButton({handleSpeedChange, speed}){
    return(
        <div className={styles.wrapper}>
            <button onClick={handleSpeedChange}>x{speed}</button>
        </div>
    )
}

export default SpeedButton;