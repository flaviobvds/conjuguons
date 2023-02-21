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

                    <OptionWithCheckBox option='Je'/>
                    <OptionWithCheckBox option='Tu'/>
                    <OptionWithCheckBox option='Il'/>
                    <OptionWithCheckBox option='Elle'/>
                    <OptionWithCheckBox option='Nous'/>
                    <OptionWithCheckBox option='Vous'/>
                    <OptionWithCheckBox option='Ils'/>
                    <OptionWithCheckBox option='Elles'/>
                </div>

                <div className={styles.selectionContainer}>
                    <h2 className={styles.subTitle}>
                        Verb Tenses
                    </h2>
                </div>

                <div className={styles.selectionContainer}>
                    <h2 className={styles.subTitle}>
                        Verbs
                    </h2>
                </div>
            </div>
        </Modal>
    )
}