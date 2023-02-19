import styles from './score.module.scss'
import { useLanguage } from '@/hooks/language'
import { translatedText } from '@/hooks/translatedText'

export function Score() {
    const { language } = useLanguage();

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
                        {translatedText.questions[language as keyof typeof translatedText.settings]}
                    </div>
                    <div className={styles.qtty}>
                        3
                    </div>
                    <div className={styles.heading}>
                        {translatedText.correct[language as keyof typeof translatedText.settings]}
                    </div>
                    <div className={styles.qttyCorrect}>
                        2
                    </div>
                    <div className={styles.heading}>
                        {translatedText.incorrect[language as keyof typeof translatedText.settings]}
                    </div>
                    <div className={styles.qttyIncorrect}>
                        1
                    </div>
                    <div className={styles.heading}>
                        %:
                    </div>
                    <div className={styles.qtty}>
                        75%
                    </div>
                </div>

                <button
                    className={styles.resetButton}
                >
                    {translatedText.resetScore[language as keyof typeof translatedText.settings]}
                </button>
            </div>
        </div>
    )
}