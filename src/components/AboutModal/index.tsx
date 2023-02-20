import Modal from 'react-modal';

import styles from './aboutModal.module.scss'

interface AboutModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function AboutModal({ isOpen, onRequestClose }: AboutModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <a onClick={onRequestClose}>Close</a>
        </Modal>
    )
}