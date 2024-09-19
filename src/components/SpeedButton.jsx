function SpeedButton({handleSpeedChange, speed}){
    return(
        <div>
            <button onClick={handleSpeedChange}>x{speed}</button>
        </div>
    )
}

export default SpeedButton;