import styles from './header.module.scss'
import { useLanguage } from '@/hooks/language'



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
                    <a href='http://www.google.com'>Settings</a>
                    <a href='http://www.google.com'>About</a>
                </nav>
            </div>
        </header>
    )
}