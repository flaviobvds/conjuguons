import { FormEvent, useState, useEffect, Fragment } from "react";
import verblist from '../../verblist.json';
const FrenchVerbs = require('french-verbs');
const Lefff = require('french-verbs-lefff/dist/conjugations.json');
import { VerbsInfo } from 'french-verbs-lefff';
import { FaCheck, FaTimes } from 'react-icons/fa'

import { translatedText } from "@/hooks/translatedText";
import { useLanguage } from "@/hooks/language";
import { useScore } from "@/hooks/score";
import { useSettings } from "@/hooks/settings";
import { Score } from "../Score";

import styles from './questioncontainer.module.scss'


interface Question {
    verb: string,
    tense: string,
    person: number,
    gender: 'M' | 'F'
    number: 'P' | 'S'
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

export const subjects = ['Je', 'Tu', 'Il', 'Nous', 'Vous', 'Ils', 'Elle', 'Elles']
export const tenses = {
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

export function QuestionContainer() {
    const {settings} = useSettings();
    const { changeScore } = useScore();
    const { language } = useLanguage();

    const [answer, setAnswer] = useState('');
    const [verb, setVerb] = useState('');
    const [subject, setSubject] = useState(0);
    const [verbTense, setVerbTense] = useState('');
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [correctAnswer, setCorrectAnswer] = useState('');
    
    const verbsDetectifs = [
        'grêler', 'neiger', 'barder', 'advenir', 'bruiner', 'dracher',
        "s'agir", 'venter', 'apparoir', 'pleuvoir', 'falloir'
    ]

    useEffect(() => {
        handleGetNewQuestion();
        document.getElementById("answerInput")!.focus();
    }, [])

    // if verb is detectif, always use subject IL (index 2), if not, get random subject
    useEffect(() => {
        if (verbsDetectifs.includes(verb)) {
            console.log('detectif')
            setSubject(2)
        } else {
            setSubject(getRandomSubject(settings.subjects))
        }
    }, [verb])

    function handleSubmitAnswer(event: FormEvent) {
        event.preventDefault();

        function newSubject(oldSubject: number) {
            const aux = getAuxiliary(verb)
            
            // if subject is ELLE (index 6), consider it IL (index 2). Use female if aux is ETRE
            if (oldSubject == 6) return {
                newSubject: 2,
                gender: aux == "ETRE" ? 'F' : 'M',
                number: 'S'
            }
            // if subject is ELLES (index 7), consider it ILS (index 5). Use female & plural if aux is ETRE
            if (oldSubject == 7) return {
                newSubject: 5,
                gender: aux == "ETRE" ? 'F' : 'M',
                number: aux == "ETRE" ? 'P' : 'S',
            }
            // if subject is NOUS, VOUS or ILS, use plural if aux is ETRE
            if (oldSubject >= 3 && oldSubject <= 5) return {
                newSubject: subject,
                gender: 'M',
                number: aux == "ETRE" ? 'P' : 'S',
            }
            return {
                newSubject: subject,
                gender: 'M',
                number: 'S'
            }
        }

        const conjugation = getConjugation({
            verb: verb,
            tense: verbTense,
            person: newSubject(subject).newSubject,
            gender: newSubject(subject).gender as 'M' | 'F' ?? undefined, 
            number: newSubject(subject).number as 'S' | 'P' ?? undefined,
        })
        setCorrectAnswer(conjugation)
        document.getElementById("getNewVerb")!.focus();
    }

    useEffect(() => {
        if (answer !== '' && correctAnswer != '') {
            answer === correctAnswer ? setIsCorrect(true) : setIsCorrect(false)
        } else {
            setIsCorrect(null);
        }
    }, [correctAnswer])

    useEffect(() => {
        if (isCorrect != null) changeScore(isCorrect)
    }, [isCorrect])

    /*
    useEffect(() => {
        handleGetNewQuestion();
        document.getElementById("answerInput")!.focus();
    }, [settings])
    */

    function handleGetNewQuestion() {
        setVerb(getRandomVerb(settings.verbs)) // this will also trigger getRandomSubject inside useEffect
        setVerbTense(getRandomVerbTense(settings.verbTenses))
        setIsCorrect(null)
        setAnswer('')
        setCorrectAnswer('')
        document.getElementById("answerInput")!.focus();
    }

    function getSubjectName(subjectIndex: number) {
        return subjects[subjectIndex]
    }

    function fixTenseName(tense: string) {
        return tenses[tense as keyof typeof tenses];
    }

    function capitalizeVerb(verb: string) {
        return verb.charAt(0).toUpperCase() + verb.slice(1);
    }

    function getStyle(status: boolean | null) {
        if (status === true) return styles.correct
        if (status === false) return styles.incorrect
        if (status === null) return ''
    }

    function getIcon(status: boolean | null) {
        if (status === true) return <FaCheck color="green" />
        if (status === false) return <FaTimes color="red" />
        if (status === null) return ''
    }

    return (
        <main className={styles.content}>
            <div className={styles.divider}>
                <div className={styles.leftContainer}>

                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}> Conjuguons! </h1>
                    </div>

                    <div className={styles.questionContainer}>

                        <div className={styles.questionPromptContainer}>
                            {translatedText.verb[language as keyof typeof translatedText.settings]}
                        </div>

                        <div className={styles.questionGeneratedContainer}>
                            {capitalizeVerb(verb) ?? ''} <br />
                        </div>

                        <div className={styles.questionPromptContainer}>
                            {translatedText.tense[language as keyof typeof translatedText.settings]}
                        </div>

                        <div className={styles.questionGeneratedContainer}>
                            {fixTenseName(verbTense) ?? ''}
                        </div>

                        <div className={styles.answerContainer}>
                            <form className={styles.submitForm} onSubmit={handleSubmitAnswer}>
                                <span className={styles.subject}>
                                    {getSubjectName(subject)}
                                </span>

                                <input
                                    onChange={e => setAnswer(e.target.value.toLowerCase())}
                                    value={answer}
                                    className={`${styles.answer} ${getStyle(isCorrect)}`}
                                    id="answerInput"
                                />

                                <button
                                    type="submit"
                                    className={styles.submitAnswerButton}
                                >
                                    {translatedText.check[language as keyof typeof translatedText.settings]}
                                </button>
                            </form>
                        </div>

                        <div className={styles.correction}>
                            <Fragment>
                                {getIcon(isCorrect) ?? ''}
                            </Fragment>
                            {correctAnswer ?? ''}
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={handleGetNewQuestion}
                        className={styles.getNewVerbButton}
                        id="getNewVerb"
                    >
                        {translatedText.newVerb[language as keyof typeof translatedText.settings]}
                    </button>
                </div>

                <Score />
            </div>
        </main>
    );
}