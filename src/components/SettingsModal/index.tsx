import Modal from 'react-modal';

import styles from './settingsModal.module.scss'

interface SettingsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function SettingsModal({ isOpen, onRequestClose }: SettingsModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            Teste
        </Modal>
    )
}