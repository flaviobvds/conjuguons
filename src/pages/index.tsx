import { QuestionContainer } from '@/components/QuestionContainer';
import Head from 'next/head'
import { FormEvent, useState, useEffect } from "react";

import styles from './home.module.scss'

export default function Home() {
    const settings = {
        subjects: [0,1,2,3,4,5],
        verbs: "top25verbs" as const,
        verbTenses: ['PRESENT', 'PRESENT', 'FUTUR', 'IMPARFAIT', 'PASSE_SIMPLE', 'CONDITIONNEL_PRESENT', 'IMPERATIF_PRESENT', 'SUBJONCTIF_PRESENT', 'SUBJONCTIF_IMPARFAIT', 'PASSE_COMPOSE', 'PLUS_QUE_PARFAIT']
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
