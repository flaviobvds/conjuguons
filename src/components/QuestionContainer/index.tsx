import { FormEvent, useState, useEffect } from "react";
import verblist from '../../verblist.json';
const FrenchVerbs = require('french-verbs');
const Lefff = require('french-verbs-lefff/dist/conjugations.json');
import { CheckButton } from "@/components/CheckButton";
import { VerbsInfo } from 'french-verbs-lefff';

import styles from './questioncontainer.module.scss'

interface Question {
    verb: string,
    tense: string,
    person: number,
    gender?: 'M' | 'F'
}

interface QuestionContainerProps {
    questionsettings: {
        subjects: number[],
        verbs: 'top25verbs' | 'top50verbs' | 'top100verbs' | 'allverbs',
        verbTenses: string[]
    }
}

function getRandomVerb(listType: 'top25verbs' | 'top50verbs' | 'top100verbs' | 'allverbs') {
    const index = Math.floor(Math.random() * verblist[listType].length);
    const verb = verblist[listType][index];
    return verb;
}

function getRandomSubject(possibleSubjects: number[]) {
    const index = Math.floor(Math.random() * possibleSubjects.length);
    const subjectIndex = possibleSubjects[index];
    const subjects = ['Je', 'Tu', 'Il', 'Nous', 'Vous', 'Ils']
    const subject = subjects[subjectIndex]
    return subject;
}

function getRandomVerbTense(possibleVerbTenses: string[]) {
    const index = Math.floor(Math.random() * possibleVerbTenses.length);
    const verbTense = possibleVerbTenses[index];
    return verbTense;
}

function getConjugation(question: Question) {
    const conjugation = FrenchVerbs.getConjugation(Lefff as VerbsInfo, question.verb, question.tense, question.person)
    return conjugation;
}

export function QuestionContainer({questionsettings}: QuestionContainerProps) {
    const [answer, setAnswer] = useState('');
    const [verb, setVerb] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [verbTense, setVerbTense] = useState<string>('');

    function handleSubmitAnswer(event: FormEvent) {
        event.preventDefault();
        const conjugation = getConjugation({
            verb: verb,
            tense: 'PRESENT',
            person: 0
        })
        console.log(conjugation);
    }

    function handleGetNewQuestion() {
        setVerb(getRandomVerb(questionsettings.verbs))
        setSubject(getRandomSubject(questionsettings.subjects))
        setVerbTense(getRandomVerbTense(questionsettings.verbTenses))
    }

    return (
        <main className={styles.contentContainer}>
            Verbo: {verb ?? ''}
            <p />

            <form onSubmit={handleSubmitAnswer}>
                <input
                    onChange={e => setAnswer(e.target.value)}
                />
                <CheckButton />
            </form>

            <p />

            <button
                type="button"
                onClick={handleGetNewQuestion}
            >
                Get New Verb
            </button>

        </main>
    );
}