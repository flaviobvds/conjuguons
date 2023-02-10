import { QuestionContainer } from '@/components/QuestionContainer';
import Head from 'next/head'
import { useState } from "react";

import { SettingsModal } from '@/components/SettingsModal';

import styles from './home.module.scss'

export default function Home() {
    const settings = {
        subjects: [6,7],
        verbs: "top25verbs" as const,
        verbTenses: ['PASSE_COMPOSE', 'PLUS_QUE_PARFAIT']
    }

    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

    function handleOpenSettingsModal() {
        setIsSettingsModalOpen(true);
    }
    function handleCloseSettingsModal() {
        setIsSettingsModalOpen(false);
    }

    return (
        <>
            <Head>
                <title>Conjuguons!</title>
            </Head>

            <QuestionContainer questionsettings={settings} />
            <SettingsModal
                isOpen={isSettingsModalOpen}
                onRequestClose={handleCloseSettingsModal}
            />

        </>
    )
}
