import styles from "../styles/Description.module.css";

function Description(){

    return(
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <h1>Harmonic Echoes</h1>
                <span>The Rhythm of Feedback</span>
            </div>
            <div className={styles.description}>
                <p>
                    "Harmonic Echoes" explores the cyclical nature of feedback through a pendulum wave installation. Each pendulum, moving in and out of sync, symbolizes how ideas and actions reverberate through time, reflecting the continuous flow of feedback in both harmony and disruption.
                </p>
                <p>
                    As the pendulums come together and drift apart, they represent the evolving exchange of feedback in any process. This rhythmic motion highlights how feedback loops shape progress, creating a dynamic interplay between order and chaos, much like real-world interactions.
                </p>


                <label>
                    Jobelle Lagonoy<br/>
                    Creative Think Tank | September, 2024
                </label>

            </div>
        </div>
    );
}

export default Description;