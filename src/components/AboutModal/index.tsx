import Modal from 'react-modal';
import { FaTimes as CloseButton, FaGithub, FaLinkedin } from 'react-icons/fa'
import { translatedText } from '@/hooks/translatedText';
import { useLanguage } from "@/hooks/language";

import styles from './aboutModal.module.scss'

interface AboutModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

Modal.setAppElement('body');

export function AboutModal({ isOpen, onRequestClose }: AboutModalProps) {
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
                {translatedText.about[language as keyof typeof translatedText.about]}
            </h1>

            <p>
                {translatedText.disclaimer1[language as keyof typeof translatedText.disclaimer1]}
            </p>

            <p>
                {translatedText.disclaimer2[language as keyof typeof translatedText.disclaimer2]}
            </p>

            <p>
                {translatedText.disclaimer3[language as keyof typeof translatedText.disclaimer3]}
            </p>

            <div className={styles.buttons}>
                <button 
                    className={styles.gitHubButton} 
                    onClick={() => {window.open('https://github.com/flaviobvds/conjuguons', '_blank')}}
                >
                    <FaGithub className={styles.icon} /> GitHub
                </button>

                <button 
                    className={styles.linkedInButton}
                    onClick={() => {window.open('https://www.linkedin.com/in/flaviobvdsilva/', '_blank')}}
                >
                    <FaLinkedin className={styles.icon} /> LinkedIn
                </button>
            
            </div>


        </Modal>
    )
}