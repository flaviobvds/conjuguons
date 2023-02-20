import styles from './header.module.scss'
import { useLanguage } from '@/hooks/language'
import { translatedText } from '@/hooks/translatedText';

interface HeaderProps {
    isAboutOpen: boolean,
    isSettingsOpen: boolean,
    handleOpenAbout: () => void,
    handleOpenSettings: () => void
}

export function Header({isAboutOpen, handleOpenAbout, isSettingsOpen, handleOpenSettings}: HeaderProps) {

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
                    <a onClick={handleOpenSettings}>
                        {translatedText.settings[language as keyof typeof translatedText.settings]}
                    </a>
                    
                    <a onClick={handleOpenAbout}>
                        {translatedText.about[language as keyof typeof translatedText.settings]}
                    </a>
                </nav>
            </div>
        </header>
    )
}