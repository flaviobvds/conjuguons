import styles from './header.module.scss'
import { useLanguage } from '@/hooks/language'
import { translatedText } from '@/hooks/translatedText';


export function Header() {

    const { language, changeLanguage } = useLanguage();

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <div className={styles.langs}>
                    <button className={styles.langButton} onClick={() => changeLanguage('en')}>
                        <img src='./images/uk-flag.svg' alt="" />
                    </button>

                    <button className={styles.langButton} onClick={() => changeLanguage('fr')}>
                        <img src='./images/fr-flag.svg' alt="" />
                    </button>

                    <button className={styles.langButton} onClick={() => changeLanguage('br')}>
                        <img src='./images/br-flag.svg' alt="" />
                    </button>
                </div>
                
                <nav className={styles.links}>
                    <a href='http://www.google.com'>{translatedText.settings[language as keyof typeof translatedText.settings]}</a>
                    <a href='http://www.google.com'>{translatedText.about[language as keyof typeof translatedText.settings]}</a>
                </nav>
            </div>
        </header>
    )
}