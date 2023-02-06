import { CheckButton } from "@/components/CheckButton";
import Head from 'next/head'
import { FormEvent, useState, useEffect } from "react";
import axios from 'axios';
import { Verb } from './interfaces/verbInterface';


export default function Home() {
    const [answer, setAnswer] = useState('');
    const [verb, setVerb] = useState<Verb>({});

    function handleSubmitAnswer(event: FormEvent) {
        event.preventDefault();
        
        axios.post('/api/getVerbs', {answer: answer}).then((response) => setVerb(response.data));
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
        </>
    )
}
