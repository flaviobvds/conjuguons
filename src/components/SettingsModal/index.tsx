import Modal from 'react-modal';
import { FormEvent } from 'react';
import { FaTimes as CloseButton } from 'react-icons/fa'

import { translatedText } from '@/hooks/translatedText';
import { useLanguage } from "@/hooks/language";
import { useSettings } from '@/hooks/settings';
import { SubjectOptionWithCheckBox } from '../SubjectOptionWithCheckBox';

import styles from './settingsModal.module.scss'
import { TenseOptionWithCheckBox } from '../TenseOptionWithCheckBox';


interface SettingsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function SettingsModal({ isOpen, onRequestClose }: SettingsModalProps) {
    const { language } = useLanguage();
    const { settings, changeSettings } = useSettings();

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

                    <SubjectOptionWithCheckBox option='Je' />
                    <SubjectOptionWithCheckBox option='Tu' />
                    <SubjectOptionWithCheckBox option='Il' />
                    <SubjectOptionWithCheckBox option='Elle' />
                    <SubjectOptionWithCheckBox option='Nous' />
                    <SubjectOptionWithCheckBox option='Vous' />
                    <SubjectOptionWithCheckBox option='Ils' />
                    <SubjectOptionWithCheckBox option='Elles' />
                </div>

                <div className={styles.selectionContainer}>
                    <h2 className={styles.subTitle}>
                        Verb Tenses
                    </h2>

                    <h3 className={styles.tenseCategory}>
                        Indicatif
                    </h3>
                    <TenseOptionWithCheckBox option='Présent' arrItem={'PRESENT'} />
                    <TenseOptionWithCheckBox option='Passé Composé' arrItem={'PASSE_COMPOSE'} />
                    <TenseOptionWithCheckBox option='Passé Simple' arrItem={'PASSE_SIMPLE'} />
                    <TenseOptionWithCheckBox option='Imparfait' arrItem={'IMPARFAIT'} />
                    <TenseOptionWithCheckBox option='Plus-que-parfait' arrItem={'PLUS_QUE_PARFAIT'} />
                    <TenseOptionWithCheckBox option='Futur Simple' arrItem={'FUTUR'} />


                    <h3 className={styles.tenseCategory}>
                        Conditionnel
                    </h3>
                    <TenseOptionWithCheckBox option='Présent' arrItem={'CONDITIONNEL_PRESENT'} />


                    <h3 className={styles.tenseCategory}>
                        Subjonctif
                    </h3>
                    <TenseOptionWithCheckBox option='Présent' arrItem={'SUBJONCTIF_PRESENT'} />
                    <TenseOptionWithCheckBox option='Imparfait' arrItem={'SUBJONCTIF_IMPARFAIT'} />
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