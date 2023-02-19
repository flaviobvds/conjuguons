import styles from './score.module.scss'
import { useLanguage } from '@/hooks/language'
import { useScore } from '@/hooks/score';
import { translatedText } from '@/hooks/translatedText'

export function Score() {
    const { language } = useLanguage();
    const { score, resetScore } = useScore();

    function calcPC(correct: number, questions: number) {
        if (questions != 0) return Math.round((correct / questions) * 100)
        return 0
    }

    return (
        <div className={styles.rightContainer}>
            <div className={styles.scoreContent}>
                <div className={styles.titleContainer} >
                    <h1>
                        {translatedText.score[language as keyof typeof translatedText.settings]}
                    </h1>
                </div>

                <div className={styles.scoreContainer}>

                    <div className={styles.heading}>
                        {translatedText.questions[language as keyof typeof translatedText.questions]}
                    </div>
                    <div className={styles.qtty}>
                        {score.questions}
                    </div>


                    <div className={styles.heading}>
                        {translatedText.correct[language as keyof typeof translatedText.correct]}
                    </div>
                    <div className={styles.qttyCorrect}>
                        {score.correct}
                    </div>


                    <div className={styles.heading}>
                        {translatedText.incorrect[language as keyof typeof translatedText.incorrect]}
                    </div>
                    <div className={styles.qttyIncorrect}>
                        {score.incorrect}
                    </div>



                    <div className={styles.heading}>
                        %:
                    </div>
                    <div className={styles.qtty}>
                        {`${calcPC(score.correct, score.questions)} %`}
                    </div>
                </div>

                <button
                    className={styles.resetButton}
                    onClick={resetScore}
                >
                    {translatedText.resetScore[language as keyof typeof translatedText.settings]}
                </button>
            </div>
        </div>
    )
}