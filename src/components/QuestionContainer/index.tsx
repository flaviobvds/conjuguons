import { FormEvent, useState, useEffect } from "react";
import verblist from '../../verblist.json';
const FrenchVerbs = require('french-verbs');
const Lefff = require('french-verbs-lefff/dist/conjugations.json');
import { VerbsInfo } from 'french-verbs-lefff';

import styles from './questioncontainer.module.scss'

interface Question {
    verb: string,
    tense: string,
    person: number,
    gender?: 'M' | 'F'
    number?: 'P' | 'S'
}

interface QuestionContainerProps {
    questionsettings: {
        subjects: number[],
        verbs: 'top25verbs' | 'top50verbs' | 'top100verbs' | 'allverbs',
        verbTenses: string[]
    },
    lang: string
}

function getRandomVerb(listType: 'top25verbs' | 'top50verbs' | 'top100verbs' | 'allverbs') {
    const index = Math.floor(Math.random() * verblist[listType].length);
    const verb = verblist[listType][index];
    return verb;
}

function getRandomSubject(possibleSubjects: number[]) {
    const index = Math.floor(Math.random() * possibleSubjects.length);
    const subject = possibleSubjects[index];
    return subject;
}

function getRandomVerbTense(possibleVerbTenses: string[]) {
    const index = Math.floor(Math.random() * possibleVerbTenses.length);
    const verbTense = possibleVerbTenses[index];
    return verbTense;
}

function getAuxiliary(verb: string) {
    return FrenchVerbs.alwaysAuxEtre(verb) ? 'ETRE' : 'AVOIR'
}

function getConjugation(question: Question) {
    console.log(question)
    if (question.tense == 'PASSE_COMPOSE' || 'PLUS_QUE_PARFAIT') return (
        FrenchVerbs.getConjugation(Lefff as VerbsInfo, question.verb, question.tense, question.person, {
            aux: getAuxiliary(question.verb),
            agreeGender: question.gender ?? undefined,
            agreeNumber: question.number ?? undefined
        })
    )
    return FrenchVerbs.getConjugation(Lefff as VerbsInfo, question.verb, question.tense, question.person)
}

export function QuestionContainer({ questionsettings, lang }: QuestionContainerProps) {
    const [answer, setAnswer] = useState('');
    const [verb, setVerb] = useState('');
    const [subject, setSubject] = useState(0);
    const [verbTense, setVerbTense] = useState('');
    const [status, setStatus] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');
    const verbsDetectifs = [
        'grêler', 'neiger', 'barder', 'advenir', 'bruiner', 'dracher',
        "s'agir", 'venter', 'apparoir', 'pleuvoir', 'falloir'
    ]

    // if verb is detectif, always use subject IL (index 2), if not, get random subject
    useEffect(() => {
        if (verbsDetectifs.includes(verb)) {
            console.log('detectif')
            setSubject(2)
        } else {
            setSubject(getRandomSubject(questionsettings.subjects))
        }
    }, [verb])

    function handleSubmitAnswer(event: FormEvent) {
        event.preventDefault();

        function newSubject(subject: number) {
            const aux = getAuxiliary(verb)

            // if subject is ELLE (index 6), consider it IL (index 2). Use female if aux is ETRE
            if (subject == 6) return {
                subject: 2,
                gender: aux == "ETRE" ? 'F' : 'M',
                number: 'S'
            }
            // if subject is ELLES (index 7), consider it ILS (index 5). Use female & plural if aux is ETRE
            if (subject == 7) return {
                subject: 5,
                gender: aux == "ETRE" ? 'F' : 'M',
                number: aux == "ETRE" ? 'P' : 'S',
            }
            return {
                subject: subject
            }
        }

        const conjugation = getConjugation({
            verb: verb,
            tense: verbTense,
            person: newSubject(subject).subject,
            gender: newSubject(subject).gender as 'M' | 'F' ?? undefined, // if subject is ELLE, set gender
            number: newSubject(subject).number as 'S' | 'P' ?? undefined, // if subject is ELLES, set gender and number
        })
        setCorrectAnswer(conjugation)
    }

    useEffect(() => {
        console.log(answer + ' / ' + correctAnswer)
        if (answer !==  '') {
            answer === correctAnswer ? setStatus('correct') : setStatus('incorrect')
        }
    }, [correctAnswer])

    useEffect(() => {
        console.log(status)
    }, [status])

    function handleGetNewQuestion() {
        setVerb(getRandomVerb(questionsettings.verbs)) // this will also trigger getRandomSubject inside useEffect
        setVerbTense(getRandomVerbTense(questionsettings.verbTenses))
        setStatus('')
        setAnswer('')
    }

    function getSubjectName(subjectIndex: number) {
        const subjects = ['Je', 'Tu', 'Il', 'Nous', 'Vous', 'Ils', 'Elle', 'Elles']
        const subject = subjects[subjectIndex]
        return subject
    }

    function fixTenseName(tense: string) {
        const tenses = {
            'PRESENT': 'Indicatif - Présent',
            'FUTUR': 'Indicatif - Futur Simple',
            'IMPARFAIT': 'Indicatif - Imparfait',
            'PASSE_SIMPLE': 'Indicatif - Passé Simple',
            'CONDITIONNEL_PRESENT': 'Conditionnel - Présent',
            'SUBJONCTIF_PRESENT': 'Subjonctif - Présent',
            'SUBJONCTIF_IMPARFAIT': 'Subjonctif - Imparfait',
            'PASSE_COMPOSE': 'Indicatif - Passé Composé',
            'PLUS_QUE_PARFAIT': 'Indicatif - Plus que Parfait'
        }
        return tenses[tense as keyof typeof tenses];
    }

    function capitalizeVerb(verb: string) {
        return verb.charAt(0).toUpperCase() + verb.slice(1);
    }

    return (
        <main className={styles.contentContainer}>

            <div className={styles.titleContainer}>
                <h1 className={styles.title}> Conjuguons! </h1>
            </div>

            <div className={styles.questionContainer}>
                <div className={styles.questionPromptContainer}>
                    Verbo: <br />
                    Tempo:
                </div>

                <div className={styles.questionGeneratedContainer}>
                    {capitalizeVerb(verb) ?? ''} <br />
                    {fixTenseName(verbTense) ?? ''}
                </div>



                <form className={styles.submitForm} onSubmit={handleSubmitAnswer}>
                    <span className={styles.subject}>
                        {getSubjectName(subject)}
                    </span>

                    <input
                        onChange={e => setAnswer(e.target.value)}
                        value={answer}
                        className={`${styles.answer} ${status === 'correct' ? styles.correct : styles.incorrect }`}
                    />

                    <button
                        type="submit"
                        className={styles.submitAnswer}
                    >
                        Check
                    </button>
                </form>


                <button
                    type="button"
                    onClick={handleGetNewQuestion}
                    className={styles.getNewVerbButton}
                >
                    Get New Verb
                </button>

            </div>

        </main>
    );
}