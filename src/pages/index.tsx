import { QuestionContainer } from '@/components/QuestionContainer';
import Head from 'next/head'
import { useEffect, useState } from "react";

import { SettingsModal } from '@/components/SettingsModal';
import { AboutModal } from '@/components/AboutModal';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LanguageProvider, useLanguage } from '@/hooks/language';
import { ScoreProvider } from '@/hooks/score';
import { SettingsProvider } from '@/hooks/settings';

export interface Settings {
    subjects: number[],
    verbs: 'top25verbs' | 'top50verbs' | 'top100verbs' | 'allverbs',
    verbTenses: string[]
}

export default function Home() {

    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
    const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

    function handleOpenSettingsModal() {
        setIsSettingsModalOpen(true);
    }
    function handleCloseSettingsModal() {
        setIsSettingsModalOpen(false);
        document.getElementById('getNewVerb')?.click();
    }

    function handleOpenAboutModal() {
        setIsAboutModalOpen(true);
    }
    function handleCloseAboutModal() {
        setIsAboutModalOpen(false);
    }

    return (
        <SettingsProvider>
            <LanguageProvider>
                <ScoreProvider>

                    <Head>
                        <title>Conjuguons!</title>
                    </Head>

                    <Header
                        isAboutOpen={isAboutModalOpen}
                        isSettingsOpen={isSettingsModalOpen}
                        handleOpenAbout={handleOpenAboutModal}
                        handleOpenSettings={handleOpenSettingsModal}
                    />
                    <QuestionContainer/>
                    <Footer 
                        handleOpenAboutModal={handleOpenAboutModal}
                    />
                    <SettingsModal
                        isOpen={isSettingsModalOpen}
                        onRequestClose={handleCloseSettingsModal}
                    />
                    <AboutModal
                        isOpen={isAboutModalOpen}
                        onRequestClose={handleCloseAboutModal}
                    />

                </ScoreProvider>
            </LanguageProvider>
        </SettingsProvider>
    )
}
