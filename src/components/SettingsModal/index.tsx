import Modal from 'react-modal';

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
        >

        </Modal>
    )
}