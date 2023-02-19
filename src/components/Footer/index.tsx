import style from './footer.module.scss'
import { useLanguage } from '@/hooks/language'
import { translatedText } from '@/hooks/translatedText'

export function Footer() {
    const {language} = useLanguage();

    return(
        <div className={style.footer}>
            {translatedText.footer[language as keyof typeof translatedText.settings]}
        </div>
    )
}