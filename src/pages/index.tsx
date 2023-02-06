import Head from 'next/head'
import { FormEvent, useState, useEffect } from "react";
import axios from 'axios';
import FrenchVerbs from 'french-verbs';
import verblist from '../allverbs.json';

import { CheckButton } from "@/components/CheckButton";
import { Verb } from './interfaces/verbInterface';


export default function Home() {
    const [answer, setAnswer] = useState('');
    const [verb, setVerb] = useState<Verb>({});

    function handleSubmitAnswer(event: FormEvent) {
        event.preventDefault();
        
    }

    async function handleGetNewVerb() {
        await axios.get('/api/getVerbs').then((response) => setVerb(response.data));
        console.log(verblist.top25verbs);
    }
    
    return (
        <>
            <Head>
                <title>Conjuguons!</title>
            </Head>

            Verbo: {verb?.Infinitif?.Présent ?? null}
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
