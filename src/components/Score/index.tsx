import styles from './score.module.scss'

export function Score() {
    return (
        <div className={styles.rightContainer}>
            <div className={styles.scoreContent}>
                <div className={styles.titleContainer} >
                    <h1>Score</h1>
                </div>

                <div className={styles.scoreContainer}>
                    <div className={styles.heading}>Questions:</div>
                    <div className={styles.qtty}>3</div>
                    <div className={styles.heading}>Correct:</div>
                    <div className={styles.qttyCorrect}>2</div>
                    <div className={styles.heading}>Inorrect:</div>
                    <div className={styles.qttyIncorrect}>1</div>
                    <div className={styles.heading}>%:</div>
                    <div className={styles.qtty}>75%</div>
                </div>

                <button
                    className={styles.resetButton}
                >
                    Reset Score
                </button>
            </div>
        </div>
    )
}