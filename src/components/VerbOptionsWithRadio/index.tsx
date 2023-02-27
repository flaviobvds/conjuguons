import { useLanguage } from '@/hooks/language';
import { useSettings } from '@/hooks/settings'
import { translatedText } from '@/hooks/translatedText';

import styles from './styles.module.scss'

export function VerbOptionsWithRadio() {
    const { settings, changeSettings } = useSettings();
    const { language } = useLanguage();

    return (
        <>
            <div className={styles.radioOptionsWrapper}>
                <input
                    type="radio"
                    name='verbs'
                    value={'top25verbs'}
                    checked={settings.verbs === 'top25verbs'}
                    className={styles.radioButton}
                    onChange={(e) => {
                        if (e.target.checked === true) {
                            changeSettings({
                                ...settings,
                                verbs: e.target.value as 'top25verbs' | 'top50verbs' | 'top100verbs' | 'allverbs'
                            })
                        }
                    }}
                />
                <label className={styles.label}>
                    {translatedText.top25verbs[language as keyof typeof translatedText.top25verbs]}
                </label>
            </div>

            <div className={styles.radioOptionsWrapper}>
                <input
                    type="radio"
                    name='verbs'
                    value={'top50verbs'}
                    checked={settings.verbs === 'top50verbs'}
                    className={styles.radioButton}
                    onChange={(e) => {
                        if (e.target.checked === true) {
                            changeSettings({
                                ...settings,
                                verbs: e.target.value as 'top25verbs' | 'top50verbs' | 'top100verbs' | 'allverbs'
                            })
                        }
                    }}
                />
                <label className={styles.label}>
                    {translatedText.top50verbs[language as keyof typeof translatedText.top50verbs]}
                </label>
            </div>

            <div className={styles.radioOptionsWrapper}>
                <input
                    type="radio"
                    name='verbs'
                    value={'top100verbs'}
                    checked={settings.verbs === 'top100verbs'}
                    className={styles.radioButton}
                    onChange={(e) => {
                        if (e.target.checked === true) {
                            changeSettings({
                                ...settings,
                                verbs: e.target.value as 'top25verbs' | 'top50verbs' | 'top100verbs' | 'allverbs'
                            })
                        }
                    }}
                />
                <label className={styles.label}>
                    {translatedText.top100verbs[language as keyof typeof translatedText.top100verbs]}
                </label>
            </div>

            <div className={styles.radioOptionsWrapper}>
                <input
                    type="radio"
                    name='verbs'
                    value={'allverbs'}
                    checked={settings.verbs === 'allverbs'}
                    className={styles.radioButton}
                    onChange={(e) => {
                        if (e.target.checked === true) {
                            changeSettings({
                                ...settings,
                                verbs: e.target.value as 'top25verbs' | 'top50verbs' | 'top100verbs' | 'allverbs'
                            })
                        }
                    }}
                />
                <label className={styles.label}>
                    {translatedText.allverbs[language as keyof typeof translatedText.allverbs]}
                </label>
            </div>
        </>
    )
}