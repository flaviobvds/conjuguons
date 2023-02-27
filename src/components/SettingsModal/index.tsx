import Modal from 'react-modal';
import { FormEvent } from 'react';
import { FaTimes as CloseButton } from 'react-icons/fa'

import { translatedText } from '@/hooks/translatedText';
import { useLanguage } from "@/hooks/language";
import { Settings } from '@/pages';
import { SubjectOptionWithCheckBox } from '../SubjectOptionWithCheckBox';

import styles from './settingsModal.module.scss'
import { TenseOptionWithCheckBox } from '../TenseOptionWithCheckBox';

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

                    <SubjectOptionWithCheckBox
                        option='Je'
                        arrItem={0}
                        settings={settings}
                        setSettings={setSettings}
                    />
                    <SubjectOptionWithCheckBox
                        option='Tu'
                        arrItem={1}
                        settings={settings}
                        setSettings={setSettings}
                    />
                    <SubjectOptionWithCheckBox
                        option='Il'
                        arrItem={2}
                        settings={settings}
                        setSettings={setSettings}
                    />
                    <SubjectOptionWithCheckBox
                        option='Elle'
                        settings={settings}
                        arrItem={6}
                        setSettings={setSettings}
                    />
                    <SubjectOptionWithCheckBox
                        option='Nous'
                        arrItem={3}
                        settings={settings}
                        setSettings={setSettings}
                    />
                    <SubjectOptionWithCheckBox
                        option='Vous'
                        arrItem={4}
                        settings={settings}
                        setSettings={setSettings}
                    />
                    <SubjectOptionWithCheckBox
                        option='Ils'
                        arrItem={5}
                        settings={settings}
                        setSettings={setSettings}
                    />
                    <SubjectOptionWithCheckBox
                        option='Elles'
                        arrItem={7}
                        settings={settings}
                        setSettings={setSettings}
                    />
                </div>

                <div className={styles.selectionContainer}>
                    <h2 className={styles.subTitle}>
                        Verb Tenses
                    </h2>

                    <h3 className={styles.tenseCategory}>
                        Indicatif
                    </h3>
                    <TenseOptionWithCheckBox
                        option='Présent'
                        arrItem={'PRESENT'}
                        settings={settings}
                        setSettings={setSettings}
                    />
                    <TenseOptionWithCheckBox
                        option='Passé Composé'
                        arrItem={'PASSE_COMPOSE'}
                        settings={settings}
                        setSettings={setSettings}
                    />
                    <TenseOptionWithCheckBox
                        option='Passé Simple'
                        arrItem={'PASSE_SIMPLE'}
                        settings={settings}
                        setSettings={setSettings}
                    />
                    <TenseOptionWithCheckBox
                        option='Imparfait'
                        arrItem={'IMPARFAIT'}
                        settings={settings}
                        setSettings={setSettings}
                    />
                    <TenseOptionWithCheckBox
                        option='Plus-que-parfait'
                        arrItem={'PLUS_QUE_PARFAIT'}
                        settings={settings}
                        setSettings={setSettings}
                    />
                    <TenseOptionWithCheckBox
                        option='Futur Simple'
                        arrItem={'FUTUR'}
                        settings={settings}
                        setSettings={setSettings}
                    />


                    <h3 className={styles.tenseCategory}>
                        Conditionnel
                    </h3>
                    <TenseOptionWithCheckBox
                        option='Présent'
                        arrItem={'CONDITIONNEL_PRESENT'}
                        settings={settings}
                        setSettings={setSettings}
                    />


                    <h3 className={styles.tenseCategory}>
                        Subjonctif
                    </h3>
                    <TenseOptionWithCheckBox
                        option='Présent'
                        arrItem={'SUBJONCTIF_PRESENT'}
                        settings={settings}
                        setSettings={setSettings}
                    />
                    <TenseOptionWithCheckBox
                        option='Imparfait'
                        arrItem={'SUBJONCTIF_IMPARFAIT'}
                        settings={settings}
                        setSettings={setSettings}
                    />
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