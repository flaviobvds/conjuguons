import { QuestionContainer } from '@/components/QuestionContainer';
import Head from 'next/head'
import { FormEvent, useState, useEffect } from "react";

import styles from './home.module.scss'

export default function Home() {
    const settings = {
        subjects: [3],
        verbs: "top25verbs" as const,
        verbTenses: ['PRESENT']
    }

    return (
        <>
            <Head>
                <title>Conjuguons!</title>
            </Head>

            <QuestionContainer questionsettings={settings}/>

        </>
    )
}
