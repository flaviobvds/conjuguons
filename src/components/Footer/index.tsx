import styles from './footer.module.scss'
import { useLanguage } from '@/hooks/language'
import { translatedText } from '@/hooks/translatedText'

interface FooterProps {
    handleOpenAboutModal: () => void
}

export function Footer({handleOpenAboutModal}: FooterProps) {
    const {language} = useLanguage();

    return(
        <div className={styles.footer}>
            {translatedText.footer[language as keyof typeof translatedText.footer]}
            <a onClick={handleOpenAboutModal} className={styles.learnMore}>
                {translatedText.footer2[language as keyof typeof translatedText.footer]}
            </a>
        </div>
    )
}