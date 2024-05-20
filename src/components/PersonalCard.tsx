import {useState} from 'react';

interface PersonalCardProps {
    fullName: string
    jobPosition: string
    company?: string
    summary: string
}


export function PersonalCard({fullName, jobPosition, company, summary} : PersonalCardProps) {
    const [votes, setVotes] = useState(0);


    return (
        <>
            <h1>{fullName} Votos: {votes}</h1>
            <h2>{jobPosition}</h2>
            { company && <h3>{company}</h3> } 
            <p>{summary}</p>
            <button onClick={() => setVotes(votes + 1)}>Vote</button>
        </>
    )
}