import Modal from 'react-modal';
import { FormEvent } from 'react';
import { FaTimes as CloseButton } from 'react-icons/fa'

import { translatedText } from '@/hooks/translatedText';
import { useLanguage } from "@/hooks/language";
import { Settings } from '@/pages';
import { OptionWithCheckBox } from '../OptionWithCheckBox';

import styles from './settingsModal.module.scss'

interface SettingsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    settings: Settings,
    setSettings: (settings: Settings) => void;
}

export function SettingsModal({ isOpen, onRequestClose, settings, setSettings }: SettingsModalProps) {
    const { language } = useLanguage();

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName={styles.modalOverlay}
            className={styles.modalContent}
        >
            <CloseButton onClick={onRequestClose} className={styles.modalClose} />

            <h1 className={styles.title}>
                {translatedText.settings[language as keyof typeof translatedText.settings]}
            </h1>

            <div className={styles.settingsContainer}>
                <div className={styles.selectionContainer}>
                    <h2 className={styles.subTitle}>
                        Subjects
                    </h2>

                    <OptionWithCheckBox option='Je' />
                    <OptionWithCheckBox option='Tu' />
                    <OptionWithCheckBox option='Il' />
                    <OptionWithCheckBox option='Elle' />
                    <OptionWithCheckBox option='Nous' />
                    <OptionWithCheckBox option='Vous' />
                    <OptionWithCheckBox option='Ils' />
                    <OptionWithCheckBox option='Elles' />
                </div>

                <div className={styles.selectionContainer}>
                    <h2 className={styles.subTitle}>
                        Verb Tenses
                    </h2>

                    <h3 className={styles.tenseCategory}>
                        Indicatif
                    </h3>
                    <OptionWithCheckBox option='Présent' />
                    <OptionWithCheckBox option='Passé Composé' />
                    <OptionWithCheckBox option='Passé Simple' />
                    <OptionWithCheckBox option='Imparfait' />
                    <OptionWithCheckBox option='Plus-que-parfait' />
                    <OptionWithCheckBox option='Futur Simple' />


                    <h3 className={styles.tenseCategory}>
                        Conditionnel
                    </h3>
                    <OptionWithCheckBox option='Présent' />


                    <h3 className={styles.tenseCategory}>
                        Subjonctif
                    </h3>
                    <OptionWithCheckBox option='Présent' />
                    <OptionWithCheckBox option='Imparfait' />
                </div>

                <div className={styles.selectionContainer}>
                    <h2 className={styles.subTitle}>
                        Verbs
                    </h2>

                    <div className={styles.radioOptionsWrapper}>
                        <input type="radio" name='verbs' value={'top25verbs'} className={styles.radioButton} />
                        <label className={styles.label}>Top 25 Verbs</label>
                    </div>

                    <div className={styles.radioOptionsWrapper}>
                        <input type="radio" name='verbs' value={'top50verbs'} className={styles.radioButton} />
                        <label className={styles.label}>Top 50 Verbs</label>
                    </div>

                    <div className={styles.radioOptionsWrapper}>
                        <input type="radio" name='verbs' value={'top100verbs'} className={styles.radioButton} />
                        <label className={styles.label}>Top 100 Verbs</label>
                    </div>

                    <div className={styles.radioOptionsWrapper}>
                        <input type="radio" name='verbs' value={'top50verbs'} className={styles.radioButton} />
                        <label className={styles.label}>All Verbs</label>
                    </div>

                </div>
            </div>
            <div className={styles.saveSettingsButton}>
                <button>Save</button>
            </div>

        </Modal>
    )
}