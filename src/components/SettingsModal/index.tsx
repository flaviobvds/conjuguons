import Modal from 'react-modal';
import { FaTimes as CloseButton } from 'react-icons/fa'

import { translatedText } from '@/hooks/translatedText';
import { useLanguage } from "@/hooks/language";

import { SubjectOptionWithCheckBox } from '../SubjectOptionWithCheckBox';
import { TenseOptionWithCheckBox } from '../TenseOptionWithCheckBox';
import { VerbOptionsWithRadio } from '../VerbOptionsWithRadio';

import styles from './settingsModal.module.scss'


interface SettingsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function SettingsModal({ isOpen, onRequestClose }: SettingsModalProps) {
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
                        {translatedText.subjects[language as keyof typeof translatedText.subjects]}
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
                        {translatedText.verbTenses[language as keyof typeof translatedText.verbTenses]}
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
                        {translatedText.verbs[language as keyof typeof translatedText.verbs]}
                    </h2>

                    <VerbOptionsWithRadio />

                </div>
            </div>
            <div className={styles.saveSettingsButton}>
                <button onClick={onRequestClose}>
                    {translatedText.save[language as keyof typeof translatedText.save]}
                </button>
            </div>

        </Modal>
    )
}