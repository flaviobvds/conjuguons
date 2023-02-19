import { QuestionContainer } from '@/components/QuestionContainer';
import Head from 'next/head'
import { useState } from "react";

import { SettingsModal } from '@/components/SettingsModal';

import styles from './home.module.scss'
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/hooks/language';

export default function Home() {
    const settings = {
        subjects: [1, 2, 3, 4, 5, 6, 7],
        verbs: "top25verbs" as const,
        verbTenses: ['PASSE_COMPOSE', 'PLUS_QUE_PARFAIT']
    }

    const [lang, setLang] = useState('fr');
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

    function handleOpenSettingsModal() {
        setIsSettingsModalOpen(true);
    }
    function handleCloseSettingsModal() {
        setIsSettingsModalOpen(false);
    }

    return (
        <LanguageProvider>
            <Head>
                <title>Conjuguons!</title>
            </Head>

            <Header />
            <QuestionContainer questionsettings={settings} lang={lang} />
            <Footer />
            <SettingsModal
                isOpen={isSettingsModalOpen}
                onRequestClose={handleCloseSettingsModal}
            />

        </LanguageProvider>
    )
}
