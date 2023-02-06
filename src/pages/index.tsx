import Head from 'next/head'
import { FormEvent, useState, useEffect } from "react";
import axios from 'axios';
import verblist from '../verblist.json';
const FrenchVerbs = require('french-verbs');
const Lefff = require('french-verbs-lefff/dist/conjugations.json');


import { CheckButton } from "@/components/CheckButton";
import { Verb } from './interfaces/verbInterface';
import { VerbsInfo } from 'french-verbs-lefff';

interface Question {
    verb: string,
    tense: string,
    person: number,
    gender?: 'M' | 'F'
}

function getRandomVerb(listType: 'top25verbs' | 'top50verbs' | 'top100verbs' | 'allverbs') {
    const index = Math.floor(Math.random() * verblist[listType].length);
    const verb = verblist[listType][index];
    return verb;
}

function getConjugation(question: Question) {
    const conjugation = FrenchVerbs.getConjugation(Lefff as VerbsInfo, question.verb, question.tense, question.person)
    return conjugation;
}

export default function Home() {
    const [answer, setAnswer] = useState('');
    const [verb, setVerb] = useState<string>('');

    function handleSubmitAnswer(event: FormEvent) {
        event.preventDefault();
        const conjugation = getConjugation({
            verb: verb,
            tense: 'PRESENT',
            person: 0
        })
        console.log(conjugation);
    }

    async function handleGetNewVerb() {
        setVerb(getRandomVerb('top50verbs'))
        
        //await axios.get('/api/getVerbs').then((response) => setVerb(response.data));
        //console.log(verblist.top25verbs);
    }
    
    return (
        <>
            <Head>
                <title>Conjuguons!</title>
            </Head>

            Verbo: {verb ?? ''}
            <p/>
            
            <form onSubmit={handleSubmitAnswer}>
                <input 
                    onChange={e => setAnswer(e.target.value)}
                />
                <CheckButton/>
            </form>
            <p/>
            <button
                type="button"
                onClick={handleGetNewVerb}
            > 
                Get New Verb
            </button>
        </>
    )
}
