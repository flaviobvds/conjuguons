import { CheckButton } from "@/components/CheckButton";
import Head from 'next/head'
import { FormEvent, useState } from "react";
import axios from 'axios';

export default function Home() {
    const [answer, setAnswer] = useState('');
   
    function handleSubmitAnswer(event: FormEvent) {
        event.preventDefault();
        
        axios.post('/api/getVerbs', {answer: answer})
    }
    
    return (
        <>
            <Head>
                <title>Conjuguons!</title>
            </Head>

            {console.log(answer)}
            <p></p>
            
            <form onSubmit={handleSubmitAnswer}>
                <input 
                    onChange={e => setAnswer(e.target.value)}
                />
                <CheckButton/>
            </form>
        </>
    )
}
