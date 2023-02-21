import { QuestionContainer } from '@/components/QuestionContainer';
import Head from 'next/head'
import { useState } from "react";

import { SettingsModal } from '@/components/SettingsModal';
import { AboutModal } from '@/components/AboutModal';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LanguageProvider, useLanguage } from '@/hooks/language';
import { ScoreProvider } from '@/hooks/score';

import styles from './home.module.scss'

interface Settings {
    subjects: number[],
    verbs: 'top25verbs' | 'top50verbs' | 'top100verbs' | 'allverbs',
    verbTenses: string[]
}

export default function Home() {

    const [settings, setSettings] = useState<Settings>({
        subjects: [0,1,2,3,4,5,6,7],
        verbs: "top25verbs" as const,
        verbTenses: ['PRESENT', 'FUTUR', 'IMPARFAIT']
    })

    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
    const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

    function handleOpenSettingsModal() {
        setIsSettingsModalOpen(true);
    }
    function handleCloseSettingsModal() {
        setIsSettingsModalOpen(false);
    }

    function handleOpenAboutModal() {
        setIsAboutModalOpen(true);
    }
    function handleCloseAboutModal() {
        setIsAboutModalOpen(false);
    }

    return (
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
                <QuestionContainer questionsettings={settings} />
                <Footer />
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
    )
}
