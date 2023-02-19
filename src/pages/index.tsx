import { QuestionContainer } from '@/components/QuestionContainer';
import Head from 'next/head'
import { useState } from "react";

import { SettingsModal } from '@/components/SettingsModal';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/hooks/language';
import { ScoreProvider } from '@/hooks/score';

import styles from './home.module.scss'


export default function Home() {
    const settings = {
        subjects: [0,1,2,3,4,5,6,7],
        verbs: "top25verbs" as const,
        verbTenses: ['PASSE_COMPOSE']
    }

    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

    function handleOpenSettingsModal() {
        setIsSettingsModalOpen(true);
    }
    function handleCloseSettingsModal() {
        setIsSettingsModalOpen(false);
    }

    return (
        <LanguageProvider>
            <ScoreProvider>

                <Head>
                    <title>Conjuguons!</title>
                </Head>

                <Header />
                <QuestionContainer questionsettings={settings} />
                <Footer />
                <SettingsModal
                    isOpen={isSettingsModalOpen}
                    onRequestClose={handleCloseSettingsModal}
                />

            </ScoreProvider>
        </LanguageProvider>
    )
}
