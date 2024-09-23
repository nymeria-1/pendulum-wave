import styles from "../styles/Description.module.css";
import PendulumWave from "./PendulumWave";

function Description(){

    return(
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <h1>Harmonic Echoes</h1>
                <span>The Rhythm of Feedback</span>
            </div>
            <div className={styles.description}>
                <p>
                &quot;Harmonic Echoes&quot; explores the cyclical nature of feedback through a pendulum wave. The pendulums, moving in and out of sync, represent how ideas and actions reverberate over time, illustrating the flow of feedback in harmony and disruption.
                </p>
                <p>
                    As the pendulums align and diverge, they embody the dynamic exchange of feedback in any process. This motion emphasizes how feedback loops drive progress, showcasing the interplay between order and chaos in real-world interactions.
                </p>

                <label>
                    <strong>Jobelle Lagonoy</strong><br/>
                    Creative Think Tank | September, 2024
                </label>

                <div className={styles.credits}>
                    <label>
                        <strong>Music</strong><br/>
                        <a href="https://artlist.io/royalty-free-music/song/can-you-see-the-flow/79460">Can You See the Flow | Simon Osterhold</a><br />
                        Provided by <a href="https://artlist.io"><u>Artlist</u></a>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Description;